const admin = require('firebase-admin');

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp();
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

async function storePayment({ paymentId, userId, amount, status, productId, paymentMethod, pixInfo = null }) {
  return admin.firestore().collection('payments').add({
    paymentId,
    userId,
    amount,
    status,
    productId,
    paymentMethod,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    ...(paymentMethod === 'pix' ? {
      expiresAt: admin.firestore.Timestamp.fromDate(new Date(Date.now() + 24 * 60 * 60 * 1000)),
      pixInfo
    } : {})
  });
}

async function updatePaymentStatus(paymentId, status, additionalData = {}) {
  const snapshot = await admin.firestore().collection('payments')
    .where('paymentId', '==', paymentId)
    .get();

  if (!snapshot.empty) {
    const doc = snapshot.docs[0];
    return doc.ref.update({
      status,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      ...additionalData
    });
  }
}

async function updateUserPremiumStatus(userId, isPremium, reason = null) {
  const userRef = admin.firestore().collection('users').doc(userId);
  const updateData = {
    isPremium,
    ...(isPremium 
      ? { 
          premiumActivatedAt: admin.firestore.FieldValue.serverTimestamp() 
        }
      : {
          premiumDeactivatedAt: admin.firestore.FieldValue.serverTimestamp(),
          premiumDeactivationReason: reason
        }
    )
  };
  return userRef.update(updateData);
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

module.exports = {
  admin,
  storeSubscription,
  storePayment,
  updatePaymentStatus,
  updateUserPremiumStatus,
  getUserPayments
};