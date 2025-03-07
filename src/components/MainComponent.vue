<template>
  <main :class="{ dark: isDarkMode }">
    <router-view />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useDarkModeStore } from "../store/darkModeStore";
const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);

</script>

<style>
main {
  text-align: center;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100%;
  transition: background-color 0.3s, color 0.3s;
}
</style>
