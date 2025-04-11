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
  initAuthState
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
  const userProfile = computed(() => user.value?.settings || null);
  const username = computed(() => 
    user.value?.settings?.username || user.value?.email?.split('@')[0] || null
  );

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

      const defaultSettings = {
        username: email.split('@')[0],
        email: email,
        custom_vocabulary: [],
        default_difficulty: Number(settingsStore.settings.defaultDifficulty),
        default_speciality: Number(settingsStore.settings.defaultSpecialty)
      };

      await setDoc(doc(db, "users", user.value.uid), defaultSettings);
      user.value.settings = defaultSettings;
      
      settingsStore.setDefaultPreferences({
        defaultSpecialty: defaultSettings.default_speciality,
        defaultDifficulty: defaultSettings.default_difficulty
      });
    } catch (error) {
      uiStore.setError('auth', error.message);
      throw error;
    } finally {
      uiStore.setLoading('auth', false);
    }
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
        };

        // Ensure all required fields exist and proper types
        const mergedSettings = {
          ...defaultSettings,
          ...settingsData,
          default_difficulty: Number(settingsData.default_difficulty ?? defaultSettings.default_difficulty),
          default_speciality: Number(settingsData.default_speciality ?? defaultSettings.default_speciality),
          custom_vocabulary: Array.isArray(settingsData.custom_vocabulary) ? settingsData.custom_vocabulary : []
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
      
      // Ensure we have all required fields and proper types
      const currentSettings = user.value.settings || {};
      const updatedSettings = {
        username: newSettings.username || currentSettings.username,
        email: currentSettings.email, // Don't allow email updates through this method
        custom_vocabulary: currentSettings.custom_vocabulary || [],
        default_difficulty: Number(newSettings.default_difficulty),
        default_speciality: Number(newSettings.default_speciality)
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

  return {
    user,
    initialized,
    isAuthenticated,
    userProfile,
    username,
    initializeAuth,
    login,
    signup,
    logout,
    updateUserProfile
  };
});