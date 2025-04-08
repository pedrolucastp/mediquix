<template>
  <header :class="{ dark: isDarkMode }">
    <div class="header-left">
      <router-link to="/" class="logo">
        <!-- add the logo (favicon.svg) here -->
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="30" />

        <h1>MediQuix</h1>
      </router-link>
    </div>
    <AuthControls />
    <DarkModeToggle />
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useUIStore } from '@/store/ui';
import DarkModeToggle from './DarkModeToggle.vue';
import AuthControls from './auth/AuthControls.vue';

const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s, color 0.3s;
}

.header-left {
  display: flex;
  flex: 1;
  align-items: center;
  gap: var(--spacing-md);
}

.logo {
  text-decoration: none;
  color: var(--accent-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.logo h1 {
  margin: 0;
  font-weight: 600;
  font-size: 28px;
}

/* Dark mode styles */
header.dark {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
}

header.dark .logo {
  color: var(--dark-accent-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  header {
    padding: var(--spacing-sm);
  }

  .logo h1 {
    font-size: 24px;
  }
}
</style>