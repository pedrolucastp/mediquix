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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'pt';

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to local.");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });

isSupported()
  .then((supported) => {
    if (supported) {
      getAnalytics(app);
      console.log("Firebase Analytics initialized.");
    } else {
      console.warn("Firebase Analytics is not supported in this environment.");
    }
  })
  .catch((error) => {
    console.error("Erro ao inicializar o Analytics:", error);
  });

const db = getFirestore(app);

const initAuthState = (callback) => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in.");
        callback(user);
      } else {
        console.log("No user is logged in.");
        callback(null);
      }
      unsubscribe();
      resolve();
    });
  });
};

export {
  auth,
  db,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  initAuthState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  actionCodeSettings
};
