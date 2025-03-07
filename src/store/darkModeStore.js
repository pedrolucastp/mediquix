import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDarkModeStore = defineStore('darkMode', () => {
  const isDarkMode = ref(false);

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
  }

  return { isDarkMode, toggleDarkMode };
});
