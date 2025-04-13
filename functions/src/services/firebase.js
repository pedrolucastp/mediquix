const admin = require('firebase-admin');

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    // Enable ignoreUndefinedProperties to handle undefined values
    ignoreUndefinedProperties: true
  });
}

async function storeSubscription({ subscriptionId, userId, amount, status, productId, nextPaymentDate }) {
  return admin.firestore().collection('subscriptions').add({
    subscriptionId,
    userId,
    amount,
    status,
    productId,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    nextPaymentDate: admin.firestore.Timestamp.fromDate(new Date(nextPaymentDate))
  });
}

async function storePayment({ paymentId, userId, amount, status, productId, paymentMethod, pixInfo = null, mercadoPagoResponse = null }) {
  console.log(`[Firebase Service] Storing payment for user ${userId}`);
  
  try {
    // Always check for existing payment first if we have a paymentId
    if (paymentId) {
      const snapshot = await admin.firestore().collection('payments')
        .where('paymentId', '==', paymentId)
        .get();

      if (!snapshot.empty) {
        // Update existing payment
        const doc = snapshot.docs[0];
        await doc.ref.update({
          userId: userId || doc.data().userId,
          amount: Number(amount || mercadoPagoResponse?.transaction_amount || doc.data().amount),
          status: (status || doc.data().status).toLowerCase(),
          productId: productId || mercadoPagoResponse?.metadata?.product_id || doc.data().productId,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          ...(mercadoPagoResponse && { mercadoPagoResponse }),
          ...(pixInfo && { pixInfo })
        });
        console.log(`[Firebase Service] Updated existing payment ${paymentId}`);
        return doc.id;
      }
    }

    // Create new payment document with required fields
    const paymentData = {
      userId,
      amount: Number(amount || mercadoPagoResponse?.transaction_amount || 0),
      status: status.toLowerCase(),
      productId: productId || mercadoPagoResponse?.metadata?.product_id,
      paymentMethod: paymentMethod || mercadoPagoResponse?.payment_method_id,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      ...(paymentId && { paymentId }),
      ...(pixInfo && { pixInfo }),
      ...(mercadoPagoResponse && { mercadoPagoResponse })
    };

    // Validate required fields and data types
    if (!paymentData.userId || !paymentData.productId) {
      throw new Error('Missing required payment data: userId and productId are required');
    }
    if (isNaN(paymentData.amount)) {
      throw new Error('Invalid amount: must be a number');
    }

    const docRef = await admin.firestore().collection('payments').add(paymentData);
    console.log(`[Firebase Service] Created new payment document ${docRef.id}:`, paymentData);
    return docRef.id;
  } catch (error) {
    console.error('[Firebase Service] Error storing payment:', error);
    throw error;
  }
}

async function updatePaymentStatus(paymentId, status, additionalData = {}) {
  console.log(`[Firebase Service] Updating payment ${paymentId} status to ${status}`, {
    additionalData,
    currentTimestamp: new Date().toISOString()
  });
  
  try {
    const snapshot = await admin.firestore().collection('payments')
      .where('paymentId', '==', paymentId)
      .get();

    if (snapshot.empty) {
      // If payment not found, create a new one with minimum data
      console.log(`[Firebase Service] Payment ${paymentId} not found, creating new document with data:`, {
        userId: additionalData.userId,
        amount: additionalData.mercadoPagoResponse?.transaction_amount,
        status,
        productId: additionalData.mercadoPagoResponse?.metadata?.product_id || additionalData.productId
      });
      
      await storePayment({
        paymentId,
        userId: additionalData.userId,
        amount: additionalData.mercadoPagoResponse?.transaction_amount,
        status,
        productId: additionalData.mercadoPagoResponse?.metadata?.product_id || additionalData.productId,
        createdAt: new Date(),
        mercadoPagoResponse: additionalData.mercadoPagoResponse
      });
      return;
    }

    const doc = snapshot.docs[0];
    const currentData = doc.data();
    console.log(`[Firebase Service] Found existing payment:`, {
      id: doc.id,
      currentStatus: currentData.status,
      newStatus: status,
      currentAmount: currentData.amount,
      userId: currentData.userId
    });

    const updateData = {
      status,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      ...additionalData
    };

    if (status === 'approved') {
      updateData.approvedAt = admin.firestore.FieldValue.serverTimestamp();
      console.log(`[Firebase Service] Setting approvedAt timestamp for payment ${paymentId}`);
    }

    await doc.ref.update(updateData);
    console.log(`[Firebase Service] Successfully updated payment ${paymentId}. New data:`, updateData);

    // If approved, update user premium status
    if (status === 'approved' && additionalData.userId) {
      await updateUserPremiumStatus(additionalData.userId, true);
      console.log(`[Firebase Service] Premium access activated for user ${additionalData.userId}`);
    }

  } catch (error) {
    console.error(`[Firebase Service] Failed to update payment ${paymentId}:`, error);
    throw error;
  }
}

async function updateUserPremiumStatus(userId, isPremium, reason = null) {
  const userRef = admin.firestore().collection('users').doc(userId);
  
  // First check if the document exists
  const doc = await userRef.get();
  if (!doc.exists) {
    console.error(`[Firebase Service] User document not found for ID: ${userId}`);
    throw new Error('User document not found');
  }

  const updateData = {
    isPremium,
    ...(isPremium 
      ? { 
          premiumActivatedAt: admin.firestore.FieldValue.serverTimestamp(),
          premiumDeactivatedAt: null,
          premiumDeactivationReason: null
        }
      : {
          premiumDeactivatedAt: admin.firestore.FieldValue.serverTimestamp(),
          premiumDeactivationReason: reason
        }
    )
  };

  // Use set with merge to ensure the update succeeds
  return userRef.set(updateData, { merge: true });
}

async function getUserPayments(userId) {
  const snapshot = await admin.firestore().collection('payments')
    .where('userId', '==', userId)
    .get();
    
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
    expiresAt: doc.data().expiresAt?.toDate()
  }));
}

async function getUserApprovedPayments(userId) {
  try {
    console.log(`[Firebase Service] Fetching approved payments for user ${userId}`);
    
    const snapshot = await admin.firestore().collection('payments')
      .where('userId', '==', userId)
      .where('status', '==', 'approved')
      .get();
    
    console.log(`[Firebase Service] Found ${snapshot.size} approved payments`);
    
    const payments = snapshot.docs.map(doc => {
      const data = doc.data();
      console.log(`[Firebase Service] Payment document:`, {
        id: doc.id,
        status: data.status,
        amount: data.amount,
        createdAt: data.createdAt,
        approvedAt: data.approvedAt
      });
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate(),
        approvedAt: data.approvedAt?.toDate()
      };
    });

    const totalDonated = payments.reduce((sum, payment) => {
      const amount = Number(payment.amount) || 0;
      console.log(`[Firebase Service] Adding amount to total:`, { 
        paymentId: payment.id, 
        amount, 
        currentTotal: sum 
      });
      return sum + amount;
    }, 0);

    console.log(`[Firebase Service] Total donated:`, {
      userId,
      totalDonated,
      paymentsCount: payments.length
    });

    return {
      payments,
      totalDonated,
      count: payments.length
    };
  } catch (error) {
    console.error('[Firebase Service] Error getting user approved payments:', error);
    throw error;
  }
}

async function getPaymentById(paymentId) {
  const snapshot = await admin.firestore().collection('payments')
    .where('paymentId', '==', paymentId)
    .get();

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return {
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
    expiresAt: doc.data().expiresAt?.toDate()
  };
}

module.exports = {
  admin,
  storeSubscription,
  storePayment,
  updatePaymentStatus,
  updateUserPremiumStatus,
  getUserPayments,
  getPaymentById,
  getUserApprovedPayments
};