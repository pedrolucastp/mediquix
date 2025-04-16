import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendEmailVerification, 
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  browserLocalPersistence,
  setPersistence
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Action code settings for password reset using dynamic URL
const actionCodeSettings = {
  url: `${window.location.origin}/auth/action`,
  handleCodeInApp: true
};

const firebaseConfig = {
    apiKey: "AIzaSyA-U1ASN2yTDfutUHqblUO1HMyyvLhOBg4",
    authDomain: window.location.host,
    projectId: "mediquix-fbc0b",
    storageBucket: "mediquix-fbc0b.firebasestorage.app",
    messagingSenderId: "830867953772",
    appId: "1:830867953772:web:3ce4a6166c55f49b0aa049",
    measurementId: "G-Q35EFETSY8"
};

let app = null;
let authInstance = null;
let dbInstance = null;
let analyticsInstance = null;

/**
 * @function getApp
 * @returns {FirebaseApp} Firebase app instance
 */
function getApp() {
  if (!app) {
    app = initializeApp({
      ...firebaseConfig,
      automaticDataCollectionEnabled: false
    });
  }
  return app;
}

/**
 * @function getOrInitAuth
 * @returns {Auth} Firebase Auth instance
 */
function getOrInitAuth() {
  if (!authInstance) {
    authInstance = getAuth(getApp());
    authInstance.languageCode = 'pt';
  }
  return authInstance;
}

/**
 * @function getOrInitFirestore
 * @description Only initializes Firestore if user is authenticated
 * @returns {Firestore|null} Firestore instance or null if no user
 */
function getOrInitFirestore() {
  const auth = getOrInitAuth();
  if (!auth.currentUser) return null;
  
  if (!dbInstance) {
    dbInstance = getFirestore(getApp());
  }
  return dbInstance;
}

/**
 * @function setupAuthPersistence
 * @description Sets up local persistence for auth after successful login
 * @param {Auth} auth - The Firebase Auth instance
 * @returns {Promise<void>}
 */
async function setupAuthPersistence(auth) {
  try {
    await setPersistence(auth, browserLocalPersistence);
    console.log("Auth persistence set to local.");
  } catch (error) {
    console.error("Error setting auth persistence:", error);
    throw error;
  }
}

/**
 * @function getFirestoreDoc
 * @description Gets a document reference, but only if user is authenticated
 * @param {string} path - Path to the document
 * @returns {DocumentReference|null} Document reference or null if no user
 */
function getFirestoreDoc(path) {
  const db = getOrInitFirestore();
  if (!db) return null;
  return doc(db, path);
}

export {
  getOrInitAuth,
  getOrInitFirestore,
  setupAuthPersistence,
  getFirestoreDoc as doc,
  getDoc,
  updateDoc,
  setDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  actionCodeSettings
};
