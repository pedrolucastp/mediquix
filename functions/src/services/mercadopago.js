// const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const { MercadoPagoConfig, Payment, Webhook } = require('mercadopago');

// Define configuration parameter as a secret
const mercadoPagoAccessToken = defineSecret('MERCADOPAGO_ACCESS_TOKEN');

// Initialize Mercado Pago with production credentials
const client = new MercadoPagoConfig({
  accessToken: mercadoPagoAccessToken // Don't call .value() here
});

// Payment service functions
async function createOneTimePayment({ amount, email, userId, productId, paymentMethod }) {
  const payment = new Payment(client);
  return payment.create({
    body: {
      transaction_amount: amount,
      payment_method_id: paymentMethod,
      payer: { email },
      description: 'MediQuix Premium Access',
      metadata: { userId, productId },
      // Add expiration for PIX
      ...(paymentMethod === 'pix' ? {
        date_of_expiration: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      } : {}),
      // Add wallet specific configuration
      ...(paymentMethod === 'wallet' ? {
        payment_method_options: {
          wallet: {
            success_url: 'https://mediquix.web.app/premium/success',
            failure_url: 'https://mediquix.web.app/premium/failure'
          }
        }
      } : {})
    }
  });
}

async function createSubscription({ userId, email, amount }) {
  return await client.preapproval.create({
    reason: 'MediQuix Premium Monthly Subscription',
    external_reference: userId,
    payer_email: email,
    auto_recurring: {
      frequency: 1,
      frequency_type: 'months',
      transaction_amount: amount,
      currency_id: 'BRL'
    },
    back_url: 'https://mediquix.web.app/premium/success',
    status: 'authorized'
  });
}

async function getPayment(paymentId) {
  const payment = new Payment(client);
  return payment.get({ id: paymentId });
}

async function listWebhooks() {
  const webhookClient = new Webhook(client);
  return webhookClient.list();
}

module.exports = {
  client,
  createOneTimePayment,
  createSubscription,
  getPayment,
  listWebhooks
};