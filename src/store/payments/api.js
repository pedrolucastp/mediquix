import { auth } from '@/firebase';

const API_BASE_URL = 'https://api-3jnfwp2o6q-uc.a.run.app';

async function getAuthHeader() {
  if (!auth.currentUser) {
    throw new Error('User must be logged in to perform this action');
  }
  const token = await auth.currentUser.getIdToken();
  if (!token) {
    throw new Error('Failed to get authentication token');
  }
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
        productId
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.details || 'Failed to create payment');
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
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch payment status');
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
    const response = await fetch(`${API_BASE_URL}/purchase-history`, {
      headers
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch purchase history');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching purchase history:', error);
    throw error;
  }
}