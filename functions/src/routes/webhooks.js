const express = require('express');
const router = express.Router();
const { verifyWebhookSignature } = require('../middleware/auth');
const { getPayment } = require('../services/mercadopago');
const { updatePaymentStatus, updateUserPremiumStatus } = require('../services/firebase');

// Payment webhook handler
router.post('/payments', verifyWebhookSignature, async (req, res) => {
  try {
    const { action, data } = req.body;
    console.log('[Webhook] Received webhook:', { action, data });
    
    if (!data.id) {
      throw new Error('Payment ID is missing from webhook data');
    }

    // Get full payment details from MercadoPago
    const paymentData = await getPayment(data.id);
    console.log('[Webhook] Payment details:', {
      id: paymentData.id,
      status: paymentData.status,
      paymentMethodId: paymentData.payment_method_id,
      metadata: paymentData.metadata
    });

    // Handle different payment statuses
    switch (paymentData.status) {
      case 'approved':
        await updatePaymentStatus(data.id, 'approved');
        // Activate premium for the user
        if (paymentData.metadata?.userId) {
          await updateUserPremiumStatus(paymentData.metadata.userId, true);
          console.log(`[Webhook] Premium activated for user ${paymentData.metadata.userId}`);
        }
        break;

      case 'pending':
        // PIX payments start as pending until the QR code is paid
        await updatePaymentStatus(data.id, 'pending');
        break;

      case 'cancelled':
      case 'rejected':
        await updatePaymentStatus(data.id, paymentData.status);
        break;

      case 'refunded':
        await updatePaymentStatus(data.id, 'refunded');
        if (paymentData.metadata?.userId) {
          await updateUserPremiumStatus(paymentData.metadata.userId, false);
          console.log(`[Webhook] Premium deactivated for user ${paymentData.metadata.userId} due to refund`);
        }
        break;
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('[Webhook] Processing error:', error);
    res.status(500).send('Webhook processing failed');
  }
});

module.exports = router;