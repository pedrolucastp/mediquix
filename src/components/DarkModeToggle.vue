<template>
  <button @click="toggleDarkMode" class="dark-mode-toggle" :style="{color: isDarkMode ? 'var(--dark-text-color)' : 'var(--text-color)'}" :title="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
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
  transition: all 0.3s ease;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-mode-toggle:hover {
  transform: scale(1.1) rotate(12deg);
  background-color: var(--hover-color, rgba(0, 0, 0, 0.05));
}

:deep(.dark) .dark-mode-toggle {
  color: var(--dark-text-color);
}

:deep(.dark) .dark-mode-toggle:hover {
  background-color: var(--dark-hover-color);
}
</style>