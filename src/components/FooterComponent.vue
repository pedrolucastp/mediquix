<template>
  <footer :class="{ dark: isDarkMode }">
    <!-- <nav class="footer-nav">
      <router-link to="/"><h3>Início</h3></router-link>
    </nav> -->
    <div id="install-icon"></div>
    <small>&copy; MediQuix 2024. Todos os direitos reservados.</small>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useDarkModeStore } from "../store/darkModeStore";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);

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
  color: #2ecc71;
}

#install-icon {
  display: flex;
  width: 100%;
  /* padding: 10px 30px; */
}

#install-icon button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #2980b9;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
}

</style>
