<template>
  <div class="home-container" :class="{ dark: isDarkMode }">
    <header class="home-header">
      <h1>Bem-vindo ao MediQuix</h1>
      <p class="tagline">Deixe o mediquês sempre na ponta da língua!</p>
      <!-- <p>Jogos interativos para aprimorar seu conhecimento médico</p> -->
    </header>
    <div class="game-carousel">
      <router-link v-for="(game, index) in games" :key="index" :to="game.link" class="game-card" :class="{ highlight: game.highlight }">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', game.icon]" size="3x" />
        </div>
        <h2 class="game-title">{{ game.title }}</h2>
        <p class="game-description">{{ game.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUIStore } from "@/store/ui";
const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);

const games = [
  { link: "/quiz", icon: "bolt", title: "Quiz Rápido", description: "Responda rapidamente perguntas sobre medicina." },
  { link: "/cards", icon: "brain", title: "Jogo da Memória", description: "Teste sua memória com termos médicos." },
  { link: "/crosswords", icon: "pen-to-square", title: "Palavras Cruzadas", description: "Desafie seu conhecimento com palavras cruzadas médicas." },
  { link: "/hangman", icon: "ghost", title: "Jogo da Forca", description: "Adivinhe palavras médicas e teste seu conhecimento." },
  { link: "/word-search", icon: "feather", title: "Caça Palavras", description: "Encontre palavras médicas escondidas na grade." },
  { link: "/my-vocabulary", icon: "book", title: "Meu Vocabulário", description: "Gerencie e expanda seu vocabulário médico.", highlight: true }
];
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  /* background: linear-gradient(135deg, #4facfe, #00f2fe); */
  background: lightgoldenrodyellow;
  color: var(--text-color);
  text-align: center;
  padding: 2rem;
  transition: all 0.5s ease
}

.home-container.dark {
  background: linear-gradient(135deg, #1e1e1e, #3a3a3a);
  color: var(--dark-text-color);
}

.home-header {
  margin-bottom: 2rem;
}

.home-header h1 {
  font-size: 3rem;
  font-weight: bold;
  /* margin-bottom: 0.5rem; */
}

.home-header p {
  font-size: 1.5rem;
  opacity: 0.8;
}

.game-carousel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
}

.game-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #fff;
  color: #333;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.icon-container {
  margin-bottom: 1rem;
  color: #4facfe;
  transition: color 0.3s ease;
}

.game-card:hover .icon-container {
  color: #ff7e5f;  /* accent color matching the highlight gradient */
}

.game-card.dark:hover .icon-container {
  color: #feb47b;  /* lighter accent color for dark mode */
}
.game-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
}

.game-description {
  font-size: 1rem;
  text-align: center;
  color: #666;
}

.highlight {
  background: linear-gradient(135deg, #880788, #3b0380);
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-width: 3px;
}
.tagline {
  font-size: 1.2rem;
  font-style: italic;
  color: var(--accent-color);
  margin-bottom: 1rem;
  opacity: 0.9;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* .home-container.dark .tagline {
  color: #e0e0e0;
} */

@media only screen and (max-width: 768px) {
  .home-header h1 {
    font-size: 2.5rem;
  }

  .home-header p {
    font-size: 1.2rem;
  }

  .game-carousel {
    gap: 1rem;
  }

  .game-card {
    width: 250px;
    padding: 1rem;
  }

  .game-title {
    font-size: 1.2rem;
  }

  .game-description {
    font-size: 0.9rem;
  }
  .tagline {
    font-size: 1rem;
  }
}
</style>
