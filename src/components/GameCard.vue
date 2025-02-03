<template>
  <router-link :to="link" class="game-card">
    <div class="icon-container">
      <font-awesome-icon
        v-if="icon === 'heart'"
        :icon="['fas', 'heart']"
        size="3x"
      />
      <font-awesome-icon
        v-else-if="icon === 'brain'"
        :icon="['fas', 'brain']"
        size="3x"
      />
      <!-- <font-awesome-icon
        v-else-if="icon === 'lung'"
        :icon="['fas', 'lung']"
        size="2x"
      /> -->
      <font-awesome-icon
        v-else-if="icon === 'hangman'"
        :icon="['fas', 'ban']"
        size="3x"
      />
      <font-awesome-icon
        v-else-if="icon === 'word-search'"
        :icon="['fas', 'search']"
        size="3x"
      />
      <font-awesome-icon
        v-else-if="icon === 'book'"
        :icon="['fas', 'book']"
        size="3x"
      />
    </div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </router-link>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    link: { type: String, required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
};
</script>

<style scoped>
.game-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: box-shadow 0.3s;
  color: inherit;
}

.game-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.icon-container {
  margin-bottom: 0.5rem;
}
</style>
