import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
  auth,
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  initAuthState,
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  actionCodeSettings
} from '@/firebase';
import { useSettingsStore } from '../settings';
import { useUIStore } from '../ui/index';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const initialized = ref(false);
  const settingsStore = useSettingsStore();
  const uiStore = useUIStore();

  // Getters
  const isAuthenticated = computed(() => !!user.value);
  const isEmailVerified = computed(() => !!user.value?.emailVerified);
  const userProfile = computed(() => user.value?.settings || null);
  const username = computed(() => 
    user.value?.settings?.username || user.value?.email?.split('@')[0] || null
  );
  const isPremium = computed(() => user.value?.settings?.isPremium || false);

  // Actions
  async function initializeAuth() {
    return new Promise((resolve) => {
      initAuthState((newUser) => {
        user.value = newUser;
        initialized.value = true;
        if (newUser) {
          fetchUserSettings();
        }
        resolve();
      });
    });
  }

  async function login(email, password) {
    try {
      uiStore.setLoading('auth', true);
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;

      // Send verification email
      await sendEmailVerification(user.value);

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
        freePoints: 10, // Start with 10 free points
        lastFreePointsUpdate: new Date()
      };

      await setDoc(doc(db, "users", user.value.uid), defaultSettings);
      user.value.settings = defaultSettings;
      
      settingsStore.setDefaultPreferences({
        defaultSpecialty: defaultSettings.default_speciality,
        defaultDifficulty: defaultSettings.default_difficulty
      });

      // Sign out until email is verified
      await logout();
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

  async function logout() {
    try {
      uiStore.setLoading('auth', true);
      await signOut(auth);
      user.value = null;
      settingsStore.resetToDefaults();
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
      const userDocRef = doc(db, "users", user.value.uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const settingsData = docSnap.data();
        const defaultSettings = {
          username: user.value.email.split('@')[0],
          email: user.value.email,
          default_difficulty: Number(settingsStore.settings.defaultDifficulty),
          default_speciality: Number(settingsStore.settings.defaultSpecialty),
          custom_vocabulary: [],
          isPremium: false,
          premiumActivatedAt: null,
          emailVerified: user.value.emailVerified || false
        };

        const mergedSettings = {
          ...defaultSettings,
          ...settingsData,
          default_difficulty: Number(settingsData.default_difficulty ?? defaultSettings.default_difficulty),
          default_speciality: Number(settingsData.default_speciality ?? defaultSettings.default_speciality),
          custom_vocabulary: Array.isArray(settingsData.custom_vocabulary) ? settingsData.custom_vocabulary : [],
          isPremium: Boolean(settingsData.isPremium),
          premiumActivatedAt: settingsData.premiumActivatedAt || null,
          emailVerified: user.value.emailVerified || false
        };

        if (JSON.stringify(mergedSettings) !== JSON.stringify(settingsData)) {
          await updateDoc(userDocRef, mergedSettings);
        }

        user.value.settings = mergedSettings;
        settingsStore.setDefaultPreferences({
          defaultSpecialty: mergedSettings.default_speciality,
          defaultDifficulty: mergedSettings.default_difficulty
        });
      }
    } catch (error) {
      uiStore.setError('userSettings', error.message);
      console.error("Error fetching user settings:", error);
    } finally {
      uiStore.setLoading('userSettings', false);
    }
  }

  async function updateUserProfile(newSettings) {
    try {
      uiStore.setLoading('userSettings', true);
      const userDocRef = doc(db, "users", user.value.uid);
      
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
      const email = await verifyPasswordResetCode(auth, actionCode);
      return email;
    } catch (error) {
      uiStore.setError('auth', 'O link de redefinição de senha é inválido ou expirou. Por favor, solicite um novo.');
      throw error;
    }
  }

  async function confirmPasswordChange(actionCode, newPassword) {
    try {
      await confirmPasswordReset(auth, actionCode, newPassword);
      uiStore.setSuccess('Senha alterada com sucesso! Você já pode fazer login.');
    } catch (error) {
      uiStore.setError('auth', 'Não foi possível alterar sua senha. Por favor, tente novamente.');
      throw error;
    }
  }

  return {
    user,
    initialized,
    isAuthenticated,
    isEmailVerified,
    userProfile,
    username,
    isPremium,
    initializeAuth,
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