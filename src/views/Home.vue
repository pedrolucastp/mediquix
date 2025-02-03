<template>
  <div class="home-list">
    <p>Selecione um dos jogos abaixo para começar:</p>
    <div class="game-links">
      <GameCard
        link="/quiz"
        icon="heart"
        title="Quiz Rápido"
        description="Responda rapidamente perguntas sobre medicina."
      />
      <GameCard
        link="/cards"
        icon="brain"
        title="Jogo de Memória"
        description="Teste sua memória com termos médicos."
      />
      <!-- <GameCard
        link="/crosswords"
        icon="brain"
        title="Palavras Cruzadas"
        description="Desafie seu conhecimento com palavras cruzadas médicas."
      /> -->
      <!-- <GameCard
        link="/hangman"
        icon="hangman"
        title="Jogo da Forca"
        description="Adivinhe palavras médicas e teste seu conhecimento."
      /> -->
      <!-- <GameCard
        link="/word-search"
        icon="word-search"
        title="Caça Palavras"
        description="Encontre palavras médicas escondidas na grade."
      /> -->
    </div>

    <p>Acesse o vocabulário completo dos jogos:</p>
    <div class="game-links">
      <GameCard
        link="/my-vocabulary"
        icon="book"
        title="Meu Vocabulário"
        description="Visualize, adicione, edite e gerencie todos os termos e definições."
      />
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
export default {
  components: { GameCard },
};
</script>

<style scoped>
.home-list {
  overflow-y: auto;
}

.game-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.game-links a {
  text-decoration: none;
  color: inherit;
  display: flex;
  margin: 0;
  margin: 10px 0;
}

.game-card {
  background-color: #ffffff;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  width: 250px;
  padding: 20px;
  transition: transform 0.2s, background-color 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.game-card:hover {
  transform: translateY(-10px);
  background-color: #ecf0f1;
}

.game-card h2 {
  margin-top: 10px;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 2rem;
}

.game-card p {
  color: #7f8c8d;
  font-size: 22px;
}

@media only screen and (max-width: 768px) {
  .game-card p {
    font-size: 20px;
  }

  .game-links {
    flex-direction: column;
    align-items: center;
  }

  .game-links a {
    text-decoration: none;
    color: inherit;
    display: flex;
    width: 100%;
  }

  .game-card {
    width: 100%;
  }
}
</style>
