<template>
  <header :class="{ dark: isDarkMode }">
    <AuthControls />
    <div class="header-left">
      <router-link to="/" class="logo">
        <!-- add the logo (favicon.svg) here -->
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="30" />

        <h1 class="desktop-only">MediQuix</h1>
      </router-link>
    </div>
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
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.header-left {
  display: flex;
  flex: 1;
  align-items: center;
  gap: var(--spacing-md);
  justify-content: center;
}

.logo {
  text-decoration: none;
  color: var(--accent-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.02);
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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