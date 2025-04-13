<template>
  <footer :class="{ dark: isDarkMode }">
    <div id="install-icon"></div>
    <small>&copy; MediQuix 2024. Todos os direitos reservados.</small>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useUIStore } from "@/store/ui";

const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);
</script>

<style scoped>
footer {
  font-size: smaller;
  padding: 4px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--surface-color);
  color: var(--text-color);
  border-top: 1px solid var(--border-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

footer.dark {
  --surface-color: var(--dark-surface-color);
  --text-color: var(--dark-text-color);
  --border-color: var(--dark-border-color);
}

.footer-nav {
  margin-bottom: 0.5rem;
}

.footer-nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: var(--accent-color);
}

#install-icon {
  display: flex;
  width: 100%;
}

#install-icon button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: var(--accent-color);
  color: var(--surface-color);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  margin: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
  transition: background-color 0.3s ease;
}

#install-icon button:hover {
  background-color: var(--accent-hover);
}
</style>
