<template>
  <div class="home-list">
    <!-- <p>Selecione um dos jogos abaixo para começar:</p> -->
    <div class="game-links">
      <GameCard
        link="/quiz"
        icon="bolt"
        title="Quiz Rápido"
        description="Responda rapidamente perguntas sobre medicina."
      />
      <GameCard
        link="/cards"
        icon="brain"
        title="Jogo de Memória"
        description="Teste sua memória com termos médicos."
      />
      <GameCard
        link="/crosswords"
        icon="pen-to-square"
        title="Palavras Cruzadas"
        description="Desafie seu conhecimento com palavras cruzadas médicas."
      />
      <GameCard
        link="/hangman"
        icon="ghost"
        title="Jogo da Forca"
        description="Adivinhe palavras médicas e teste seu conhecimento."
      />
      <GameCard
        link="/word-search"
        icon="feather"
        title="Caça Palavras"
        description="Encontre palavras médicas escondidas na grade."
      />
    </div>

    <!-- <p>Acesse o vocabulário completo dos jogos:</p> -->
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

<script setup>
import GameCard from "../components/GameCard.vue";
</script>

<style scoped>
.home-list {
  overflow-y: auto;
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.game-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width: 768px) {
  .game-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
