<template>
  <div>
    <p>Selecione um dos jogos abaixo para começar:</p>
    <div class="game-links">
      <GameCard
        link="/quiz"
        icon="lung"
        title="Quiz Rápido"
        description="Responda rapidamente perguntas sobre medicina."
      />
      <!-- <GameCard
        link="/cards"
        icon="heart"
        title="Jogo de Memória"
        description="Teste sua memória com termos médicos."
      /> -->
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
        title="Meu Vocabulário Médico"
        description="Visualize, adicione, edite e gerencie todos os termos e definições."
      />
    </div>
  </div>
</template>

<script>
import GameCard from '../components/GameCard.vue'
export default {
  components: { GameCard },
}
</script>

<style scoped>
</style>
