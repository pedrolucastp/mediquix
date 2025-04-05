import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {
  // Dark mode state
  const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', isDarkMode.value);
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

    // Modals
    openModal,
    closeModal,
    isModalOpen,

    // Loading states
    setLoading,
    isLoading,

    // Error states
    setError,
    clearError,
    getError
  };
});