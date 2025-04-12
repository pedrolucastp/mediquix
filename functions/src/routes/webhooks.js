const express = require('express');
const router = express.Router();
const { verifyWebhookSignature } = require('../middleware/auth');
const { getPayment, listWebhooks, client } = require('../services/mercadopago');
const { updatePaymentStatus, updateUserPremiumStatus, admin } = require('../services/firebase');

// Test webhook endpoint
router.get('/test', async (req, res) => {
  try {
    const webhooks = await listWebhooks();
    res.json({ 
      message: 'Webhook endpoint is working',
      configuredWebhooks: webhooks
    });
  } catch (error) {
    console.error('Webhook test error:', error);
    res.status(500).json({ error: 'Webhook test failed' });
  }
});

// Payment webhook handler
router.post('/payments', verifyWebhookSignature, async (req, res) => {
  try {
    const { action, data } = req.body;
    console.log('Received webhook:', { action, data });
    
    switch (action) {
      case 'payment.created':
      case 'payment.updated': {
        if (data.id) {
          const paymentData = await getPayment(data.id);
          await updatePaymentStatus(data.id, paymentData.status);

          // If payment is approved, activate premium
          if (paymentData.status === 'approved') {
            const userId = paymentData.metadata.userId;
            await updateUserPremiumStatus(userId, true);
            console.log(`Premium activated for user ${userId}`);
          }
        }
        break;
      }

      case 'payment.cancelled': {
        if (data.id) {
          const paymentData = await getPayment(data.id);
          await updatePaymentStatus(data.id, 'cancelled');
        }
        break;
      }

      case 'chargebacks.created':
      case 'chargebacks.answered':
      case 'chargebacks.concluded': {
        if (data.id) {
          const paymentData = await getPayment(data.payment_id);
          await updatePaymentStatus(data.payment_id, paymentData.status, {
            chargebackStatus: action.split('.')[1],
            chargebackUpdatedAt: new Date()
          });

          // If chargeback is concluded against us, remove premium access
          if (action === 'chargebacks.concluded' && paymentData.status === 'refunded') {
            const userId = paymentData.metadata.userId;
            await updateUserPremiumStatus(userId, false, 'chargeback');
          }
        }
        break;
      }

      case 'fraud_alert.created': {
        if (data.id) {
          await updatePaymentStatus(data.payment_id, undefined, {
            fraudAlert: true,
            fraudAlertCreatedAt: new Date()
          });
        }
        break;
      }
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).send('Webhook processing failed');
  }
});

// Subscription webhook handler
router.post('/subscriptions', verifyWebhookSignature, async (req, res) => {
  try {
    const { action, data } = req.body;
    
    if (action === 'preapproval.updated' && data.id) {
      const subscription = await client.preapproval.get({ id: data.id });
      
      const subscriptionsRef = admin.firestore().collection('subscriptions');
      const subscriptionSnapshot = await subscriptionsRef
        .where('subscriptionId', '==', data.id)
        .get();
      
      if (!subscriptionSnapshot.empty) {
        const subscriptionDoc = subscriptionSnapshot.docs[0];
        await subscriptionDoc.ref.update({
          status: subscription.status,
          updatedAt: new Date(),
          nextPaymentDate: new Date(subscription.next_payment_date)
        });

        // Handle subscription status changes
        const userId = subscriptionDoc.data().userId;

        if (subscription.status === 'authorized') {
          await updateUserPremiumStatus(userId, true);
        } else if (subscription.status === 'cancelled' || subscription.status === 'paused') {
          await updateUserPremiumStatus(userId, false, 'subscription_' + subscription.status);
        }
      }
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('Subscription webhook error:', error);
    res.status(500).send('Subscription webhook processing failed');
  }
});

module.exports = router;