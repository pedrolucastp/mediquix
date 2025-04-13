import { defineStore } from 'pinia';
import { ref } from 'vue';
import { createPayment, getPaymentStatus, getPurchaseHistory } from './api';
import { useUIStore } from '../ui';
import { useAuthStore } from '../auth';

export const usePaymentsStore = defineStore('payments', () => {
  const orders = ref([]);
  const uiStore = useUIStore();
  const authStore = useAuthStore();
  
  const loading = ref(false);
  const error = ref(null);
  const pollingInterval = ref(null);

  // Premium product configuration
  const PREMIUM_PRICE = 1.99; // Price in BRL
  const POLLING_INTERVAL_MS = 3000; // Check payment status every 3 seconds

  async function purchasePremium() {
    try {
      loading.value = true;
      
      const payment = await createPayment({
        amount: PREMIUM_PRICE,
        productId: 'premium-access'
      });
      
      // Start polling
      startPolling(payment.id);
      
      return payment;
    } catch (error) {
      uiStore.setError('premium', error.message);
      throw error;
    } finally {
      loading.value = false;
    }
  }

  async function checkPaymentStatus(paymentId) {
    try {
      const status = await getPaymentStatus(paymentId);
      
      if (status.status === 'approved') {
        stopPolling();
        await authStore.fetchUserSettings();
        uiStore.setSuccess('Pagamento aprovado! Você agora tem acesso Premium.');
        return true;
      }
      
      if (['cancelled', 'rejected', 'expired'].includes(status.status)) {
        stopPolling();
        uiStore.setError('payment', 'O pagamento foi cancelado ou expirou.');
        return false;
      }
      
      return false;
    } catch (error) {
      console.error('Error checking payment status:', error);
      return false;
    }
  }

  function startPolling(paymentId) {
    if (pollingInterval.value) {
      clearInterval(pollingInterval.value);
      pollingInterval.value = null;
    }
    
    pollingInterval.value = setInterval(async () => {
      try {
        await checkPaymentStatus(paymentId);
      } catch (error) {
        // Error handling is done in checkPaymentStatus
      }
    }, POLLING_INTERVAL_MS);
  }

  function stopPolling() {
    if (pollingInterval.value) {
      clearInterval(pollingInterval.value);
      pollingInterval.value = null;
    }
  }

  async function loadPurchaseHistory() {
    try {
      loading.value = true;
      const purchaseHistory = await getPurchaseHistory();
      orders.value = purchaseHistory;
    } catch (error) {
      uiStore.setError('orders', error.message);
      throw error;
    } finally {
      loading.value = false;
    }
  }

  return {
    orders,
    loading,
    error,
    purchasePremium,
    loadPurchaseHistory,
    checkPaymentStatus,
    stopPolling
  };
});