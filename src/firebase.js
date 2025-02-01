
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { setPersistence, browserLocalPersistence } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA-U1ASN2yTDfutUHqblUO1HMyyvLhOBg4",
    authDomain: "mediquix-fbc0b.firebaseapp.com",
    projectId: "mediquix-fbc0b",
    storageBucket: "mediquix-fbc0b.firebasestorage.app",
    messagingSenderId: "830867953772",
    appId: "1:830867953772:web:3ce4a6166c55f49b0aa049",
    measurementId: "G-Q35EFETSY8"
};

const app = initializeApp(firebaseConfig);

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

const auth = getAuth(app);
const db = getFirestore(app);


setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to local.");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });


const initAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is logged in.");
      callback(user);
    } else {
      console.log("No user is logged in.");
      callback(null);
    }
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
};
