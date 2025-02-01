<template>
  <HeaderComponent />
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
/* Variáveis CSS */
:root {
  --primary-color: #2980b9;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --background-color: #f0f8ff;
  --font-family: "Poppins", sans-serif;
  --select-background: #ffffff;
  --select-border: 2px solid #2980b9;
  --select-border-radius: 5px;
  --select-padding: 10px;
  --select-font-size: 16px;
  --select-color: #2c3e50;
  --select-focus-border: 2px solid #e74c3c;
  --mobile-padding: 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: var(--font-family);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100dvh;
  width: 100dvw;
}
</style>
