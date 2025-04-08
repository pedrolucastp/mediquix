<template>
  <router-link :to="link" class="game-card" :class="{ dark: isDarkMode }">
    <div class="icon-container">
      <font-awesome-icon
        :icon="['fas', icon]"
        size="3x"
      />
    </div>
    <h2 class="game-title">{{ title }}</h2>
    <p class="game-description">{{ description }}</p>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';
import { useDarkModeStore } from "@/store/darkModeStore";
const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);

// Define props
defineProps({
  link: String,
  icon: String,
  title: String,
  description: String
});
</script>

<style scoped>

.game-card {
  text-decoration: none;
  display: flex;
  margin: var(--spacing-md);
  border-radius: var(--radius-lg);
  width: 280px;
  padding: var(--spacing-xl);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  flex-direction: column;
  align-items: center;
  background-color: var(--surface-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.game-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: height 0.3s ease;
}

.game-card.dark {
  background: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.game-card:hover::before {
  height: 6px;
}

.game-title {
  margin: var(--spacing-md) 0 var(--spacing-sm);
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--primary-color);
}

.game-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.5;
}

.icon-container {
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color);
  transition: transform 0.3s ease, color 0.3s ease;
}

.game-card:hover .icon-container {
  transform: scale(1.1);
  color: var(--accent-color);
}

.dark .game-title {
  color: var(--dark-primary-color);
}

.dark .game-description {
  color: var(--dark-text-secondary);
}

.dark .icon-container {
  color: var(--dark-primary-color);
}

.dark .game-card:hover .icon-container {
  color: var(--dark-accent-color);
}

@media only screen and (max-width: 768px) {
  .game-card {
    width: 100%;
    margin: var(--spacing-sm);
    padding: var(--spacing-lg);
  }

  .game-title {
    font-size: 1.1rem;
  }

  .game-description { 
    font-size: 0.9rem;
  }
}
</style>
