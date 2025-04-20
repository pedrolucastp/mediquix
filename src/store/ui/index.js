import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {
  // Dark mode state
  const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');
  // Drawer state
  const isDrawerOpen = ref(false);

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', isDarkMode.value);
  }

  function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value;
  }

  // Modal states
  const activeModals = ref(new Set());

  function openModal(modalId) {
    activeModals.value.add(modalId);
  }

  function closeModal(modalId) {
    activeModals.value.delete(modalId);
  }

  function isModalOpen(modalId) {
    return activeModals.value.has(modalId);
  }

  // Loading states
  const loadingStates = ref(new Map());

  function setLoading(key, isLoading) {
    loadingStates.value.set(key, isLoading);
  }

  function isLoading(key) {
    return loadingStates.value.get(key) || false;
  }

  // Success states
  const successMessages = ref(new Map());

  function setSuccess(key, message) {
    successMessages.value.set(key, message);
    // Auto-clear success message after 5 seconds
    setTimeout(() => clearSuccess(key), 5000);
  }

  function clearSuccess(key) {
    successMessages.value.delete(key);
  }

  function getSuccess(key) {
    return successMessages.value.get(key);
  }

  // Error states
  const errors = ref(new Map());

  function setError(key, error) {
    errors.value.set(key, error);
  }

  function clearError(key) {
    errors.value.delete(key);
  }

  function getError(key) {
    return errors.value.get(key);
  }

  return {
    // Dark mode
    isDarkMode,
    toggleDarkMode,

    // Drawer
    isDrawerOpen,
    toggleDrawer,

    // Modals
    openModal,
    closeModal,
    isModalOpen,

    // Loading states
    setLoading,
    isLoading,

    // Success states
    setSuccess,
    clearSuccess,
    getSuccess,

    // Error states
    setError,
    clearError,
    getError
  };
});