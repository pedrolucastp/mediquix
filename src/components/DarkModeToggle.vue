<template>
  <button @click="toggleDarkMode" class="dark-mode-toggle" :title="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
    <font-awesome-icon :icon="isDarkMode ? ['fas', 'moon'] : ['fas', 'sun']" />
  </button>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useUIStore } from "@/store/ui";

const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);

function toggleDarkMode() {
  uiStore.toggleDarkMode();
}

// Update document class when dark mode changes
watch(() => uiStore.isDarkMode, (isDark) => {
  document.documentElement.classList.toggle('dark', isDark);
}, { immediate: true });
</script>

<style scoped>
.dark-mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: var(--text-color);
  transition: color 0.3s ease, transform 0.2s ease;
}

.dark-mode-toggle:hover {
  transform: scale(1.1);
  color: var(--primary-color);
}

:deep(.dark) .dark-mode-toggle {
  color: var(--dark-text-color);
}
</style>