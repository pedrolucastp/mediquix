const express = require('express');
const router = express.Router();
const { verifyWebhookSignature } = require('../middleware/auth');
const { getPayment } = require('../services/mercadopago');
const { updatePaymentStatus, updateUserPremiumStatus, getPaymentById } = require('../services/firebase');

// Simple in-memory cache for webhook processing
const processedWebhooks = new Map();
const WEBHOOK_CACHE_TTL = 60 * 1000; // 1 minute TTL

// Clear old entries from the webhook cache periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamp] of processedWebhooks.entries()) {
    if (now - timestamp > WEBHOOK_CACHE_TTL) {
      processedWebhooks.delete(key);
    }
  }
}, WEBHOOK_CACHE_TTL);

// Payment webhook handler
router.post('/payments', verifyWebhookSignature, async (req, res) => {
  try {
    const { action, data } = req.body;
    
    // Create a unique key for this webhook
    const webhookKey = `${data.id}-${action}-${Date.now()}`;
    
    if (processedWebhooks.has(webhookKey)) {
      console.log('[Webhook] Skipping duplicate webhook:', { action, data });
      return res.sendStatus(200);
    }
    
    processedWebhooks.set(webhookKey, Date.now());

    console.log('[Webhook] Received webhook:', { action, data, type: typeof data });
    
    if (!data.id) {
      throw new Error('Payment ID is missing from webhook data');
    }

    // Get full payment details from MercadoPago
    const paymentData = await getPayment(data.id);
    const userId = paymentData.metadata?.user_id;
    const status = paymentData.status.toLowerCase(); // Normalize status to lowercase
    
    console.log('[Webhook] Payment details:', {
      id: paymentData.id,
      status,
      originalStatus: paymentData.status,
      paymentMethodId: paymentData.payment_method_id,
      metadata: paymentData.metadata,
      userId,
      amount: paymentData.transaction_amount
    });

    // Handle different payment statuses
    try {
      const baseUpdateData = {
        userId,
        productId: paymentData.metadata?.product_id,
        amount: Number(paymentData.transaction_amount), // Ensure amount is a number
        mercadoPagoResponse: paymentData
      };

      console.log('[Webhook] Base update data:', baseUpdateData);

      switch (status) {
        case 'approved':
          console.log(`[Webhook] Processing approved payment ${data.id}`);
          
          await updatePaymentStatus(data.id, 'approved', {
            ...baseUpdateData,
            approvedAt: new Date(paymentData.date_approved),
            transactionId: paymentData.transaction_details?.transaction_id
          });
          
          if (userId) {
            try {
              console.log(`[Webhook] Attempting to activate premium for user ${userId}`);
              await updateUserPremiumStatus(userId, true);
              console.log(`[Webhook] Premium successfully activated for user ${userId}`);
            } catch (error) {
              console.error('[Webhook] Failed to activate premium:', {
                error: error.message,
                stack: error.stack,
                userId,
                paymentId: data.id
              });
            }
          } else {
            console.error('[Webhook] Missing userId in payment metadata:', {
              paymentId: data.id,
              metadata: paymentData.metadata
            });
          }
          break;

        case 'pending':
          console.log(`[Webhook] Processing pending payment ${data.id}`);
          await updatePaymentStatus(data.id, 'pending', baseUpdateData);
          break;

        case 'cancelled':
        case 'rejected':
          console.log(`[Webhook] Processing ${status} payment ${data.id}`);
          await updatePaymentStatus(data.id, status, {
            ...baseUpdateData,
            statusDetail: paymentData.status_detail
          });
          break;

        case 'refunded':
          console.log(`[Webhook] Processing refunded payment ${data.id}`);
          await updatePaymentStatus(data.id, 'refunded', {
            ...baseUpdateData,
            refundedAt: new Date()
          });
          
          if (userId) {
            try {
              await updateUserPremiumStatus(userId, false, 'payment_refunded');
              console.log(`[Webhook] Premium deactivated for user ${userId} due to refund`);
            } catch (error) {
              console.error('[Webhook] Failed to deactivate premium:', error);
            }
          }
          break;

        default:
          console.log(`[Webhook] Unhandled payment status: ${status}`);
          await updatePaymentStatus(data.id, status, baseUpdateData);
      }

      // Successfully processed webhook
      res.sendStatus(200);
    } catch (error) {
      console.error('[Webhook] Error processing payment status:', {
        error: error.message,
        stack: error.stack,
        paymentId: data.id,
        status
      });
      // Don't rethrow - we want to return 200 to MercadoPago
      res.sendStatus(200);
    }
  } catch (error) {
    console.error('[Webhook] Processing error:', {
      error: error.message,
      stack: error.stack,
      body: req.body
    });
    // Always return 200 to MercadoPago to prevent retries
    res.sendStatus(200);
  }
});

module.exports = router;