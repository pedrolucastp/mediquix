<template>
  <main :class="{ dark: isDarkMode }">
    <router-view />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useUIStore } from "@/store/ui";
const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);

</script>

<style>
main {
  text-align: center;
  padding: var(--spacing-md);
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: calc(100vh - 60px); /* Account for header */
  background-color: var(--background-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

main.dark {
  background-color: var(--dark-background-color);
  color: var(--dark-text-color);
}
</style>
