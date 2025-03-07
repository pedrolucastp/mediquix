<template>
  <HeaderComponent />
  <MainComponent />
  <FooterComponent />
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<style>
:root {
  --primary-color: #3498db;
  --secondary-color: #8e44ad;
  --accent-color: #e74c3c;
  --background-color: #ecf0f1;
  --font-family: "Poppins", sans-serif;
  --gradient: linear-gradient(135deg, #3498db, #8e44ad);
  --dark-background-color: #2c3e50;
  --dark-text-color: #ecf0f1;
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
  background: var(--gradient);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.dark {
  background-color: var(--dark-background-color);
  color: var(--dark-text-color);
  transition: background-color 0.3s, color 0.3s;

}
</style>
