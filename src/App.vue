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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --font-family: 'Inter', system-ui, -apple-system, sans-serif;
  
  /* Light Theme Colors */
  --primary-color: #2C6EAB;  /* Medical blue */
  --secondary-color: #34A7B6; /* Scrubs teal */
  --accent-color: #FF6B6B;   /* Warm accent */
  --background-color: #F8FAFC;
  --surface-color: #FFFFFF;
  --text-color: #2D3748;
  --text-secondary: #4A5568;
  --border-color: #E2E8F0;
  
  /* Dark Theme Colors */
  --dark-primary-color: #63B3ED;
  --dark-secondary-color: #4FD1C5;
  --dark-accent-color: #FC8181;
  --dark-background-color: #171923;
  --dark-surface-color: #2D3748;
  --dark-text-color: #F7FAFC;
  --dark-text-secondary: #A0AEC0;
  --dark-border-color: #4A5568;
  --dark-hover-color: rgba(255, 255, 255, 0.1);
  --dark-focus-color: rgba(99, 179, 237, 0.2);
  --dark-highlight-color: rgba(236, 201, 75, 0.2);
  
  /* Functional Colors */
  --success-color: #48BB78;
  --error-color: #F56565;
  --warning-color: #ECC94B;
  
  /* UI Elements */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}

body {

}

#app {
  font-family: var(--font-family);
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  transition: all 0.3s ease;
}

/* By default (desktop), show the text */
.desktop-only {
  display: inline;
}

/* Hide text on mobile */
@media screen and (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}


#app.dark {
  background-color: var(--dark-background-color);
  color: var(--dark-text-color);
}

/* Base styles for common elements */
button {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

button:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-1px);
}

input, select {
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-color);
  outline: none;
  transition: all 0.3s ease;
  width: 100%;
}

input:focus, select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(44, 110, 171, 0.1);
}

.dark button {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

.dark button:hover {
  background-color: var(--dark-primary-color);
  border-color: var(--dark-primary-color);
  color: white;
}

.dark input, .dark select {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

.dark input:focus, .dark select:focus {
  border-color: var(--dark-primary-color);
  box-shadow: 0 0 0 2px var(--dark-focus-color);
}

/* Scrollbar styles for dark mode */
.dark ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.dark ::-webkit-scrollbar-track {
  background: var(--dark-background-color);
}

.dark ::-webkit-scrollbar-thumb {
  background: var(--dark-border-color);
  border-radius: 4px;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: var(--dark-text-secondary);
}


</style>
