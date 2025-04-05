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
  --dark-primary-color: #60A5FA;
  --dark-secondary-color: #4FD1C5;
  --dark-accent-color: #FF8383;
  --dark-background-color: #1A202C;
  --dark-surface-color: #2D3748;
  --dark-text-color: #F7FAFC;
  --dark-text-secondary: #CBD5E0;
  --dark-border-color: #4A5568;
  
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

#app {
  font-family: var(--font-family);
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
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
  transition: all 0.2s ease;
}

button:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

input, select {
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-color);
  outline: none;
  transition: border-color 0.2s ease;
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
}

.dark input, .dark select {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}
</style>
