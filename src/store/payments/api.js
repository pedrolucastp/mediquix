import { auth } from '@/firebase';

const API_BASE_URL = 'https://api-3jnfwp2o6q-uc.a.run.app';

async function getAuthHeader() {
  const token = await auth.currentUser?.getIdToken();
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
}

export async function createPayment({ amount, productId }) {
  try {
    const headers = await getAuthHeader();
    const response = await fetch(`${API_BASE_URL}/create-payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        amount,
        productId,
        userId: auth.currentUser?.uid
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create payment');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
}

export async function getPaymentStatus(paymentId) {
  try {
    const headers = await getAuthHeader();
    const response = await fetch(`${API_BASE_URL}/payment-status/${paymentId}`, {
      headers
    });

    if (!response.ok) {
      throw new Error('Failed to fetch payment status');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching payment status:', error);
    throw error;
  }
}

export async function getPurchaseHistory() {
  try {
    const headers = await getAuthHeader();
    const response = await fetch(`${API_BASE_URL}/purchase-history/${auth.currentUser?.uid}`, {
      headers
    });

    if (!response.ok) {
      throw new Error('Failed to fetch purchase history');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching purchase history:', error);
    throw error;
  }
}