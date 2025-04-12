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
  const PREMIUM_PRICE = 19.90; // Price in BRL
  const POLLING_INTERVAL_MS = 5000; // Check payment status every 5 seconds
  const PIX_EXPIRATION_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  async function purchasePremium({ isRecurring = false, paymentMethod = 'pix' }) {
    try {
      uiStore.setLoading('premium', true);
      const payment = await createPayment({
        amount: PREMIUM_PRICE,
        productId: 'premium-access',
        isRecurring,
        paymentMethod
      });
      
      if (paymentMethod === 'pix') {
        // Start polling for PIX payment status
        startPolling(payment.paymentId);
        
        return {
          ...payment,
          expiresAt: Date.now() + PIX_EXPIRATION_MS
        };
      }
      
      // For wallet payments, return the redirect URL
      return payment;
    } catch (error) {
      uiStore.setError('premium', error.message);
      throw error;
    } finally {
      uiStore.setLoading('premium', false);
    }
  }

  async function checkPaymentStatus(paymentId) {
    try {
      const status = await getPaymentStatus(paymentId);
      
      if (status.status === 'approved') {
        stopPolling();
        authStore.fetchUserSettings(); // Refresh user premium status
        return true;
      }
      
      if (status.status === 'cancelled' || status.status === 'expired') {
        stopPolling();
        throw new Error('Payment was cancelled or expired');
      }
      
      return false;
    } catch (error) {
      console.error('Error checking payment status:', error);
      stopPolling();
      throw error;
    }
  }

  function startPolling(paymentId) {
    if (pollingInterval.value) {
      stopPolling();
    }
    
    pollingInterval.value = setInterval(async () => {
      try {
        await checkPaymentStatus(paymentId);
      } catch (error) {
        stopPolling();
        uiStore.setError('payment', error.message);
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
      uiStore.setLoading('orders', true);
      const purchaseHistory = await getPurchaseHistory();
      orders.value = purchaseHistory;
    } catch (error) {
      uiStore.setError('orders', error.message);
      throw error;
    } finally {
      uiStore.setLoading('orders', false);
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