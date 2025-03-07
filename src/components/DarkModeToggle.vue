<template>
  <button @click="toggleDarkMode">
    <font-awesome-icon :icon="isDarkMode ? ['fas', 'moon'] : ['fas', 'sun']" />
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useDarkModeStore } from "../store/darkModeStore";
const darkModeStore = useDarkModeStore();

function toggleDarkMode() {
  darkModeStore.toggleDarkMode();
}

const isDarkMode = computed(() => darkModeStore.isDarkMode);
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}
</style>