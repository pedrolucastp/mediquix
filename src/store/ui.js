import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {
  const isDarkMode = ref(false);

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
  }

  // Initialize dark mode from localStorage
  const initDarkMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      isDarkMode.value = JSON.parse(savedMode);
      document.documentElement.classList.toggle('dark', isDarkMode.value);
    }
  }

  return { isDarkMode, toggleDarkMode, initDarkMode };
});
