<template>
  <header :class="{ dark: isDarkMode }">
    <router-link to="/" class="logo">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="30" />
      <!-- <h2>MediQuix</h2> -->
    </router-link>
    
    <!-- Add PointsDisplay here -->
    <div class="header-controls">
      <PointsDisplay />
      <button class="menu-toggle" @click="uiStore.toggleDrawer" aria-label="Toggle menu">
        <font-awesome-icon icon="bars" />
      </button>
    </div>

    <!-- Drawer Menu -->
    <div class="drawer-overlay" :class="{ open: uiStore.isDrawerOpen }" @click="uiStore.toggleDrawer"></div>
    <nav class="drawer" :class="{ open: uiStore.isDrawerOpen, dark: isDarkMode }">
      <div class="drawer-header">
        <router-link to="/" class="logo" @click="uiStore.toggleDrawer">
          <img src="@/assets/logo.svg" alt="Logo" width="30" height="30" />
          <h2>MediQuix</h2>
        </router-link>
        <button class="close-drawer" @click="uiStore.toggleDrawer">
          <font-awesome-icon icon="times" />
        </button>
      </div>

      <div class="drawer-content">

        <AuthControls />
        <DarkModeToggle />
      </div>
      <FooterComponent />
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useUIStore } from '@/store/ui';
import DarkModeToggle from './DarkModeToggle.vue';
import AuthControls from './auth/AuthControls.vue';
import FooterComponent from './FooterComponent.vue';
import PointsDisplay from './PointsDisplay.vue';

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

.menu-toggle {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.menu-toggle:hover {
  transform: scale(1.1);
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.drawer-overlay.open {
  opacity: 1;
  visibility: visible;
}

.drawer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--surface-color);
  z-index: 99;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.drawer.open {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
  height: 60px;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md);
  gap: var(--spacing-lg);
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.close-drawer {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.25rem;
  cursor: pointer;
  padding: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.close-drawer:hover {
  transform: scale(1.1);
}

.logo {
  text-decoration: none;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  width: 100%;
  /* justify-content: space-between; */
}

.logo:hover {
  background-color: var(--hover-color);
  transform: scale(1.02);
}

.logo h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

/* Dark mode styles */
header.dark {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
}

header.dark .menu-toggle {
  color: var(--dark-text-color);
}

.drawer.dark {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
}

.drawer.dark .close-drawer {
  color: var(--dark-text-color);
}

.drawer.dark .logo {
  color: var(--dark-accent-color);
}

.drawer.dark .logo:hover {
  background-color: var(--dark-hover-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  header {
    padding: var(--spacing-sm);
  }
}
</style>