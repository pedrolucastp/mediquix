const admin = require('firebase-admin');

async function verifyAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Invalid authentication token' });
  }
}

async function verifyWebhookSignature(req, res, next) {
  try {
    // MercadoPago v2 doesn't have a built-in webhook verification
    // We'll verify the webhook by checking if we can fetch the payment
    const { getPayment } = require('../services/mercadopago');
    
    if (!req.query['data.id']) {
      return res.status(401).json({ error: 'Missing payment ID' });
    }

    // Verify the payment exists in MercadoPago
    const payment = await getPayment(req.query['data.id']);
    if (!payment || !payment.id) {
      return res.status(401).json({ error: 'Invalid payment data' });
    }
    
    next();
  } catch (error) {
    console.error('Webhook signature verification error:', error);
    res.status(401).json({ error: 'Webhook verification failed' });
  }
}

module.exports = {
  verifyAuth,
  verifyWebhookSignature
};