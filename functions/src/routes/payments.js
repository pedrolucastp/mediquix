const express = require('express');
const router = express.Router();
const { verifyAuth } = require('../middleware/auth');
const { createOneTimePayment, createSubscription } = require('../services/mercadopago');
const { storePayment, storeSubscription, getUserPayments } = require('../services/firebase');

// Create payment endpoint
router.post('/create-payment', verifyAuth, async (req, res) => {
  try {
    const { amount, productId, isRecurring, paymentMethod } = req.body;
    const userId = req.user.uid;

    if (isRecurring) {
      // Handle subscription creation
      const subscription = await createSubscription({
        userId,
        email: req.user.email,
        amount
      });

      await storeSubscription({
        subscriptionId: subscription.id,
        userId,
        amount,
        status: subscription.status,
        productId,
        nextPaymentDate: subscription.next_payment_date
      });

      return res.json({
        subscriptionId: subscription.id,
        status: subscription.status,
        initPoint: subscription.init_point
      });
    }
    
    // Handle one-time payment
    const paymentData = await createOneTimePayment({
      amount,
      email: req.user.email,
      userId,
      productId,
      paymentMethod
    });

    await storePayment({
      paymentId: paymentData.id,
      userId,
      amount,
      status: paymentData.status,
      productId,
      paymentMethod,
      pixInfo: paymentData.point_of_interaction?.transaction_data
    });

    if (paymentMethod === 'pix') {
      res.json({
        paymentId: paymentData.id,
        qrCode: paymentData.point_of_interaction.transaction_data.qr_code,
        qrCodeImage: paymentData.point_of_interaction.transaction_data.qr_code_base64,
        status: paymentData.status
      });
    } else if (paymentMethod === 'wallet') {
      res.json({
        paymentId: paymentData.id,
        redirectUrl: paymentData.point_of_interaction.transaction_data.redirect_url,
        status: paymentData.status
      });
    }
  } catch (error) {
    console.error('Payment creation error:', error);
    res.status(500).json({ error: 'Failed to create payment', details: error.message });
  }
});

// Get payment status endpoint
router.get('/payment-status/:paymentId', verifyAuth, async (req, res) => {
  try {
    const { paymentId } = req.params;
    const payments = await getUserPayments(req.user.uid);
    const payment = payments.find(p => p.paymentId === paymentId);
    
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Check if payment has expired
    if (payment.expiresAt && payment.expiresAt < new Date()) {
      return res.json({ status: 'expired' });
    }

    res.json({ 
      status: payment.status,
      expiresAt: payment.expiresAt
    });
  } catch (error) {
    console.error('Error fetching payment status:', error);
    res.status(500).json({ error: 'Failed to fetch payment status', details: error.message });
  }
});

// Get purchase history endpoint
router.get('/purchase-history/:userId', verifyAuth, async (req, res) => {
  try {
    const { userId } = req.params;
    
    if (userId !== req.user.uid) {
      return res.status(403).json({ error: 'Unauthorized access to user data' });
    }

    const payments = await getUserPayments(userId);
    res.json(payments);
  } catch (error) {
    console.error('Error fetching purchase history:', error);
    res.status(500).json({ error: 'Failed to fetch purchase history' });
  }
});

module.exports = router;