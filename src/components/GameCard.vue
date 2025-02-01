<template>
  <router-link :to="link" class="game-card">
    <div class="svg-icon">
      <template v-if="icon === 'heart'">
        <svg width="60" height="60" viewBox="0 0 24 24">
          <path fill="#e74c3c" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
            C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
            c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </template>
      <template v-else-if="icon === 'brain'">
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path fill="#9b59b6" d="M12 2C8.13 2 5 5.13 5 9c0 2.5 1.5 4.66 3.68 5.71
            C8.26 16.2 9.64 18 12 18c2.36 0 3.74-1.8 3.32-3.29
            C17.5 13.66 19 11.5 19 9c0-3.87-3.13-7-7-7z"/>
        </svg>
      </template>
      <template v-else-if="icon === 'lung'">
        <svg width="40" height="40" viewBox="0 0 24 24">
          <path fill="#3498db" d="M12 2c-5.33 0-8 4.67-8 8v6c0 2.21 1.79 4 4 4h1v-6H6v-2
            c0-2.67 1.33-6 6-6s6 3.33 6 6v2h-3v6h1
            c2.21 0 4-1.79 4-4v-6c0-3.33-2.67-8-8-8z"/>
        </svg>
      </template>
      <template v-else-if="icon === 'hangman'">
        <svg width="60" height="60" viewBox="0 0 24 24">
          <path fill="#f1c40f" d="M12 2C8.13 2 5 5.13 5 9v6h2V9
            c0-2.76 2.24-5 5-5s5 2.24 5 5v6h2V9c0-3.87-3.13-7-7-7zm0 12
            c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-2 4h4v2h-4v-2z"/>
        </svg>
      </template>
      <template v-else-if="icon === 'word-search'">
        <svg width="60" height="60" viewBox="0 0 24 24">
          <path fill="#e67e22" d="M4 4h16v16H4V4zm2 2v4h4V6H6zm6 4v4h4V10h-4zm-6 6v4h4v-4H6zm6
            0v4h4v-4h-4zM6 16v2h2v-2H6zm4 0v2h2v-2H10zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/>
        </svg>
      </template>
      <template v-else-if="icon === 'book'">
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path fill="#2ecc71" d="M18 2H6C4.9 2 4 2.9 4 4v16c0 1.1 0.9 2 2 2h12
            c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 18H6V4h12v16zM8 6h8v2H8V6zm0 4h8v2H8v-2z"/>
        </svg>
      </template>
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

.svg-icon {
  margin-bottom: 0.5rem;
}
</style>
