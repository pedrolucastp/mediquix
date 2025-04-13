const { defineSecret } = require('firebase-functions/params');
const { MercadoPagoConfig, Payment } = require('mercadopago');

// Define configuration parameters as secrets
const mercadoPagoAccessToken = defineSecret('MERCADOPAGO_ACCESS_TOKEN');

function getClient() {
  console.log('[MercadoPago Service] Initializing MercadoPago client');
  try {
    const client = new MercadoPagoConfig({
      accessToken: mercadoPagoAccessToken.value()
    });
    console.log('[MercadoPago Service] Client initialized successfully');
    return client;
  } catch (error) {
    console.error('[MercadoPago Service] Failed to initialize client:', {
      error: error.message,
      stack: error.stack
    });
    throw error;
  }
}

async function createOneTimePayment({ amount, email, userId, productId }) {
  console.log('[MercadoPago Service] Creating PIX payment:', { 
    amount, 
    email, 
    userId, 
    productId
  });

  try {
    const client = getClient();
    const payment = new Payment(client);
    
    const paymentData = {
      body: {
        transaction_amount: parseFloat(amount),
        description: 'MediQuix Premium Access',
        payment_method_id: 'pix',
        payer: {
          email,
          // Remove identification requirement since we're using PIX
          // PIX works with just the email for payer identification
        },
        metadata: { 
          userId, 
          productId
        }
      }
    };

    console.log('[MercadoPago Service] Payment request payload:', JSON.stringify(paymentData, null, 2));
    
    const idempotencyKey = `${userId}-${Date.now()}`;
    const options = {
      headers: {
        'X-Idempotency-Key': idempotencyKey
      }
    };
    
    const response = await payment.create(paymentData, options);
    console.log('[MercadoPago Service] Payment created successfully:', {
      paymentId: response.id,
      status: response.status,
      processingMode: response.processing_mode,
      pointOfInteraction: response.point_of_interaction
    });
    
    if (!response.point_of_interaction?.transaction_data?.qr_code) {
      console.error('[MercadoPago Service] PIX QR code missing from response:', response);
      throw new Error('PIX QR code data is missing from the response');
    }
    
    return response;
  } catch (error) {
    console.error('[MercadoPago Service] Failed to create payment:', {
      error: error.message,
      stack: error.stack,
      response: error.response?.data,
      cause: error.cause,
      statusCode: error.status
    });

    if (error.response?.data?.cause) {
      console.error('[MercadoPago Service] Detailed error cause:', 
        JSON.stringify(error.response.data.cause, null, 2)
      );
    }

    throw error;
  }
}

async function getPayment(paymentId) {
  console.log('[MercadoPago Service] Retrieving payment details:', { paymentId });
  try {
    const client = getClient();
    const payment = new Payment(client);
    const response = await payment.get({ id: paymentId });
    console.log('[MercadoPago Service] Payment details retrieved successfully:', response);
    return response;
  } catch (error) {
    console.error('[MercadoPago Service] Failed to retrieve payment details:', {
      error: error.message,
      stack: error.stack,
      response: error.response?.data,
      statusCode: error.response?.status
    });
    throw error;
  }
}

module.exports = {
  mercadoPagoAccessToken,
  createOneTimePayment,
  getPayment
};