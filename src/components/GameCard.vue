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
import { useDarkModeStore } from "../store/darkModeStore";
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
  /* color: inherit; */
  display: flex;
  margin: 10px;
  /* background: var(--background-color); */
  /* border: 2px solid var(--primary-color); */
  border-radius: 10px;
  width: 250px;
  padding: 20px;
  transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
}

.game-card.dark {
  background: var(--dark-background-color);
  color: var(--dark-text-color);
}

.game-card:hover {
  transform: translateY(-10px);
  background-color: var(--accent-color);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.game-title {
  margin-top: 10px;
  font-weight: 600;
  font-size: 18px;
}

.game-description {
  font-size: 16px;
}


.icon-container {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 768px) {
  .game-card {
    text-decoration: none;
    color: inherit;
    display: flex;
    width: 100%;
  }

  .game-title {
  font-size: 16px;
}

  .game-description { 
    font-size: 14px;
  }


}
</style>
