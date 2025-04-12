const functions = require('firebase-functions/v2/https');
const express = require('express');
const cors = require('cors');
const paymentsRouter = require('./src/routes/payments');
const webhooksRouter = require('./src/routes/webhooks');

// Create Express app
const app = express();

// Enable CORS
app.use(cors({ origin: true }));

// Add health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

// Register routes
app.use('/', paymentsRouter);
app.use('/webhooks', webhooksRouter);

// Export the Cloud Function with specific configuration
exports.api = functions.onRequest({
  timeoutSeconds: 60,
  memory: '256MiB',
  minInstances: 0,
  concurrency: 80,
}, app);