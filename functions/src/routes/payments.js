const express = require('express');
const router = express.Router();
const { verifyAuth } = require('../middleware/auth');
const { createOneTimePayment, getPayment } = require('../services/mercadopago');
const { storePayment, getUserPayments, getUserApprovedPayments } = require('../services/firebase');

// Create payment endpoint
router.post('/create-payment', verifyAuth, async (req, res) => {
  try {
    console.log('[Payment Route] Starting payment creation');
    
    const { amount, productId } = req.body;
    const userId = req.user.uid;
    const email = req.user.email;

    // First create a pending payment in our database
    const pendingPayment = await storePayment({
      userId,
      amount,
      status: 'pending',
      productId,
      paymentMethod: 'pix',
      createdAt: new Date()
    });
    
    console.log('[Payment Route] Pending payment stored, creating MercadoPago payment');

    // Then create the payment in MercadoPago
    const paymentData = await createOneTimePayment({
      amount,
      email,
      userId,
      productId
    });

    // Update our payment with MercadoPago details
    await storePayment({
      paymentId: paymentData.id,
      userId,
      amount,
      status: paymentData.status,
      productId,
      paymentMethod: 'pix',
      pixInfo: paymentData.point_of_interaction?.transaction_data,
      mercadoPagoResponse: paymentData
    });

    console.log('[Payment Route] Payment updated with MercadoPago details');
    
    res.json({
      id: paymentData.id,
      point_of_interaction: paymentData.point_of_interaction,
      status: paymentData.status
    });
  } catch (error) {
    console.error('[Payment Route] Payment creation failed:', {
      error: error.message,
      stack: error.stack,
      code: error.code,
      response: error.response?.data
    });

    res.status(500).json({ 
      error: 'Failed to create payment', 
      details: error.message
    });
  }
});

// Get payment status endpoint
router.get('/payment-status/:paymentId', verifyAuth, async (req, res) => {
  try {
    const { paymentId } = req.params;
    
    // Get payment status directly from MercadoPago
    const paymentData = await getPayment(paymentId);

    if (!paymentData) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.json({ 
      status: paymentData.status,
      point_of_interaction: paymentData.point_of_interaction
    });
  } catch (error) {
    console.error('[Payment Route] Error fetching payment status:', error);
    res.status(500).json({ error: 'Failed to fetch payment status' });
  }
});

// Get user's donations history
router.get('/donations', verifyAuth, async (req, res) => {
  try {
    const userId = req.user.uid;
    const donations = await getUserApprovedPayments(userId);
    res.json(donations);
  } catch (error) {
    console.error('[Payment Route] Error fetching donations:', error);
    res.status(500).json({ error: 'Failed to fetch donations history' });
  }
});

module.exports = router;