import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
  getOrInitAuth,
  setupAuthPersistence,
  getOrInitFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  actionCodeSettings,
  serverTimestamp
} from '@/firebase';
import { useSettingsStore } from '../settings';
import { useUIStore } from '../ui/index';
import { usePointsStore } from '../points';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const settingsStore = useSettingsStore();
  const uiStore = useUIStore();
  const pointsStore = usePointsStore();

  // Getters
  const isAuthenticated = computed(() => !!user.value);
  const isEmailVerified = computed(() => !!user.value?.emailVerified);
  const userProfile = computed(() => user.value?.settings || null);
  const username = computed(() => 
    user.value?.settings?.username || user.value?.email?.split('@')[0] || null
  );
  const isPremium = computed(() => user.value?.settings?.isPremium || false);

  async function login(email, password) {
    try {
      uiStore.setLoading('auth', true);
      const auth = getOrInitAuth();
      await setupAuthPersistence(auth);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      
      if (!user.value.emailVerified) {
        uiStore.setError('auth', 'Please verify your email address before logging in.');
        await logout();
        return;
      }
      
      await fetchUserSettings();
    } catch (error) {
      uiStore.setError('auth', error.message);
      throw error;
    } finally {
      uiStore.setLoading('auth', false);
    }
  }

  async function signup(email, password) {
    try {
      uiStore.setLoading('auth', true);
      const auth = getOrInitAuth();
      
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Double check authentication state
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('User not authenticated after signup');
      }
      
      user.value = currentUser;

      // Send verification email
      await sendEmailVerification(currentUser);

      const defaultSettings = {
        username: email.split('@')[0],
        email: email,
        custom_vocabulary: [],
        default_difficulty: Number(settingsStore.settings.defaultDifficulty),
        default_speciality: Number(settingsStore.settings.defaultSpecialty),
        isPremium: false,
        premiumActivatedAt: null,
        emailVerified: false,
        points: 0,
        freePoints: 100,
        lastFreePointsUpdate: serverTimestamp()
      };

      // Initialize Firestore
      const db = getOrInitFirestore();
      if (!db) throw new Error('Database connection failed');

      // Use currentUser.uid to ensure we have the correct authenticated user
      const userId = currentUser.uid;
      
      try {
        await setDoc(doc(db, "users", userId), defaultSettings);
      } catch (firestoreError) {
        console.error('Firestore write failed:', firestoreError);
        // Attempt to delete the auth user if profile creation fails
        await currentUser.delete();
        throw new Error('Failed to create user profile. Please try again.');
      }
      
      user.value.settings = defaultSettings;
      
      settingsStore.setDefaultPreferences({
        defaultSpecialty: defaultSettings.default_speciality,
        defaultDifficulty: defaultSettings.default_difficulty
      });

      // Sign out without persistence
      await signOut(auth);
      user.value = null;
      settingsStore.resetToDefaults();
      uiStore.setSuccess('Please check your email to verify your account before logging in.');
    } catch (error) {
      uiStore.setError('auth', error.message);
      throw error;
    } finally {
      uiStore.setLoading('auth', false);
    }
  }

  async function resendVerificationEmail() {
    if (!user.value) {
      throw new Error('No user is currently signed in');
    }
    await sendEmailVerification(user.value);
    uiStore.setSuccess('Verification email has been resent.');
  }

  /**
   * Delete the Firebase Auth IndexedDB database (firebaseLocalStorageDb)
   * Called after logout to clear all local auth/session data
   */
  function deleteFirebaseAuthIndexedDB() {
    return new Promise((resolve, reject) => {
      const DB_NAME = 'firebaseLocalStorageDb';
      const req = window.indexedDB.deleteDatabase(DB_NAME);
      req.onsuccess = () => resolve();
      req.onerror = (e) => reject(e);
      req.onblocked = () => resolve(); // still resolve if blocked
    });
  }

  async function logout() {
    try {
      uiStore.setLoading('auth', true);
      const auth = getOrInitAuth();
      await signOut(auth);
      user.value = null;
      settingsStore.resetToDefaults();
      // Delete Firebase Auth IndexedDB after logout
      await deleteFirebaseAuthIndexedDB();
    } catch (error) {
      uiStore.setError('auth', error.message);
      throw error;
    } finally {
      uiStore.setLoading('auth', false);
    }
  }

  async function fetchUserSettings() {
    try {
      uiStore.setLoading('userSettings', true);
      
      const auth = getOrInitAuth();
      if (!auth.currentUser) {
        throw new Error('No authenticated user found');
      }

      if (!user.value?.uid) {
        user.value = auth.currentUser;
      }

      const userId = String(user.value.uid);
      const db = getOrInitFirestore();
      if (!db) throw new Error('Database connection failed');

      const userRef = doc(db, 'users', userId);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const settingsData = docSnap.data();
        const defaultSettings = {
          username: user.value.email.split('@')[0],
          email: user.value.email,
          default_difficulty: Number(settingsStore.settings.defaultDifficulty),
          default_speciality: Number(settingsStore.settings.defaultSpecialty),
          custom_vocabulary: [],
          isPremium: false,
          points: 0,
          freePoints: 100,
          lastFreePointsUpdate: serverTimestamp(),
        };

        // Merge existing settings with defaults
        const mergedSettings = {
          ...defaultSettings,
          ...settingsData,
          points: settingsData.points ?? defaultSettings.points,
          freePoints: settingsData.freePoints ?? defaultSettings.freePoints,
          lastFreePointsUpdate: settingsData.lastFreePointsUpdate ?? defaultSettings.lastFreePointsUpdate,
          default_difficulty: Number(settingsData.default_difficulty ?? defaultSettings.default_difficulty),
          default_speciality: Number(settingsData.default_speciality ?? defaultSettings.default_speciality),
          custom_vocabulary: Array.isArray(settingsData.custom_vocabulary) ? settingsData.custom_vocabulary : [],
          isPremium: Boolean(settingsData.isPremium),
          premiumActivatedAt: settingsData.premiumActivatedAt || null,
          emailVerified: user.value.emailVerified || false
        };

        // Update document if any new fields were added
        if (JSON.stringify(mergedSettings) !== JSON.stringify(settingsData)) {
          await updateDoc(userRef, {
            ...mergedSettings,
            lastFreePointsUpdate: settingsData.lastFreePointsUpdate ?? serverTimestamp()
          });
        }

        user.value.settings = mergedSettings;
        settingsStore.setDefaultPreferences({
          defaultSpecialty: mergedSettings.default_speciality,
          defaultDifficulty: mergedSettings.default_difficulty
        });

        // Initialize points store with the user's points
        pointsStore.$patch({
          points: mergedSettings.points,
          freePoints: mergedSettings.freePoints,
          lastFreePointsUpdate: mergedSettings.lastFreePointsUpdate
        });
      } else {
        // If document doesn't exist, create it with default settings
        const defaultSettings = {
          username: user.value.email.split('@')[0],
          email: user.value.email,
          custom_vocabulary: [],
          default_difficulty: Number(settingsStore.settings.defaultDifficulty),
          default_speciality: Number(settingsStore.settings.defaultSpecialty),
          isPremium: false,
          premiumActivatedAt: null,
          emailVerified: user.value.emailVerified || false,
          points: 0,
          freePoints: 100,
          lastFreePointsUpdate: serverTimestamp()
        };

        await setDoc(userRef, defaultSettings);
        user.value.settings = defaultSettings;
        
        settingsStore.setDefaultPreferences({
          defaultSpecialty: defaultSettings.default_speciality,
          defaultDifficulty: defaultSettings.default_difficulty
        });

        pointsStore.$patch({
          points: defaultSettings.points,
          freePoints: defaultSettings.freePoints,
          lastFreePointsUpdate: defaultSettings.lastFreePointsUpdate
        });
      }
    } catch (error) {
      console.error("Error fetching user settings:", error);
      uiStore.setError('userSettings', error.message);
      throw error;
    } finally {
      uiStore.setLoading('userSettings', false);
    }
  }

  async function updateUserProfile(newSettings) {
    try {
      uiStore.setLoading('userSettings', true);
      
      if (!user.value?.uid) {
        throw new Error('User must be authenticated to update settings');
      }

      const userId = String(user.value.uid);
      const db = getOrInitFirestore();
      if (!db) throw new Error('Database connection failed');
      const userDocRef = doc(db, 'users', userId);
      
      const currentSettings = user.value.settings || {};
      const updatedSettings = {
        username: newSettings.username || currentSettings.username,
        email: currentSettings.email,
        custom_vocabulary: currentSettings.custom_vocabulary || [],
        default_difficulty: Number(newSettings.default_difficulty),
        default_speciality: Number(newSettings.default_speciality),
        isPremium: Boolean(newSettings.isPremium ?? currentSettings.isPremium),
        premiumActivatedAt: newSettings.premiumActivatedAt || currentSettings.premiumActivatedAt,
        emailVerified: currentSettings.emailVerified || false
      };

      await updateDoc(userDocRef, updatedSettings);
      user.value.settings = { ...currentSettings, ...updatedSettings };
      
      settingsStore.setDefaultPreferences({
        defaultSpecialty: updatedSettings.default_speciality,
        defaultDifficulty: updatedSettings.default_difficulty
      });
    } catch (error) {
      uiStore.setError('userSettings', error.message);
      throw error;
    } finally {
      uiStore.setLoading('userSettings', false);
    }
  }

  async function forgotPassword(email) {
    try {
      if (!email) {
        throw new Error('Email é obrigatório');
      }
      uiStore.setLoading('auth', true);
      const auth = getOrInitAuth();
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      uiStore.setSuccess('Email enviado com instruções para redefinir sua senha.');
    } catch (error) {
      uiStore.setError('auth', error.message);
      throw error;
    } finally {
      uiStore.setLoading('auth', false);
    }
  }

  async function verifyResetCode(actionCode) {
    try {
      const auth = getOrInitAuth();
      const email = await verifyPasswordResetCode(auth, actionCode);
      return email;
    } catch (error) {
      uiStore.setError('auth', 'O link de redefinição de senha é inválido ou expirou. Por favor, solicite um novo.');
      throw error;
    }
  }

  async function confirmPasswordChange(actionCode, newPassword) {
    try {
      const auth = getOrInitAuth();
      await confirmPasswordReset(auth, actionCode, newPassword);
      uiStore.setSuccess('Senha alterada com sucesso! Você já pode fazer login.');
    } catch (error) {
      uiStore.setError('auth', 'Não foi possível alterar sua senha. Por favor, tente novamente.');
      throw error;
    }
  }

  return {
    user,
    isAuthenticated,
    isEmailVerified,
    userProfile,
    username,
    isPremium,
    login,
    signup,
    logout,
    updateUserProfile,
    fetchUserSettings,
    resendVerificationEmail,
    forgotPassword,
    verifyResetCode,
    confirmPasswordChange
  };
});