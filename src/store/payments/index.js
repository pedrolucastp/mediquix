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
  const pollingStartTime = ref(null);

  // Premium product configuration
  const PREMIUM_PRICE = 1.99; // Price in BRL
  const POLLING_INTERVAL_MS = 5000; // Check payment status every 5 seconds
  const MAX_POLLING_DURATION_MS = 5 * 60 * 1000; // Stop polling after 15 minutes

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
      // Check if we've exceeded max polling duration
      if (pollingStartTime.value && Date.now() - pollingStartTime.value > MAX_POLLING_DURATION_MS) {
        stopPolling();
        uiStore.setError('payment', 'O tempo limite para confirmação do pagamento foi excedido. Por favor, tente novamente.');
        return false;
      }

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
    stopPolling(); // Clear any existing polling

    pollingStartTime.value = Date.now();
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
    pollingStartTime.value = null;
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