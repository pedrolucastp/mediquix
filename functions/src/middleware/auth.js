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
    const { Webhook } = require('mercadopago');
    const { client } = require('../services/mercadopago');
    
    const signature = req.headers['x-signature'];
    const timestamp = req.headers['x-timestamp'];
    const webhookClient = new Webhook(client);
    
    const isValid = await webhookClient.validate({
      signature,
      timestamp,
      data: JSON.stringify(req.body)
    });

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid webhook signature' });
    }
    
    next();
  } catch (error) {
    console.error('Webhook signature verification error:', error);
    res.status(401).json({ error: 'Webhook signature verification failed' });
  }
}

module.exports = {
  verifyAuth,
  verifyWebhookSignature
};