<template>
  <div class="memory-game">
    <h1>Jogo de Memória</h1>
    <SelectorsComponent
      @specialty-change="createBoard"
      @difficulty-change="createBoard"
    />

    <p id="definition">
      {{
        currentDefinition
          ? currentDefinition.clue
          : "Todas as palavras foram encontradas!"
      }}
    </p>

    <div id="game-board">
      <GameCardFlip
        v-for="(card, index) in gameCards"
        :key="index"
        :flipped="card.flipped"
        :matched="card.matched"
        :disabled="count === 2"
        @click="flipCard(index)"
      >
        <template #back>{{ card.word }}</template>
      </GameCardFlip>
    </div>

    <p id="score">Pontuação: {{ score }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SelectorsComponent from "@/components/SelectorsComponent.vue";
import GameCardFlip from "@/components/game/GameCardFlip.vue";
import { useVocabularyStore } from "@/store/vocabulary";

const vocabularyStore = useVocabularyStore();

const score = ref(0);
const gameCards = ref([]);
const currentDefinition = ref(null);
const gameWords = ref([]);
const availableDefinitions = ref([]);
const count = ref(0);
const firstCardIndex = ref(null);
const secondCardIndex = ref(null);
const matchedCards = ref([]);

function createBoard() {
  score.value = 0;
  count.value = 0;
  matchedCards.value = [];

  let filteredWords = vocabularyStore.words.filter((word) => word.isActive);
  if (filteredWords.length < 2) {
    alert(
      "Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros."
    );
    return;
  }

  filteredWords.sort(() => Math.random() - 0.5);
  gameWords.value = filteredWords.slice(0, 8);

  availableDefinitions.value = [...gameWords.value];
  selectNextDefinition();

  const cards = [...gameWords.value, ...gameWords.value].map((wordObj) => ({
    word: wordObj.word,
    flipped: false,
    matched: false,
  }));
  cards.sort(() => Math.random() - 0.5);
  gameCards.value = cards;
}

function selectNextDefinition() {
  if (availableDefinitions.value.length === 0) {
    currentDefinition.value = null;
  } else {
    availableDefinitions.value.sort(() => Math.random() - 0.5);
    currentDefinition.value = availableDefinitions.value.pop();
  }
}

function flipCard(index) {
  const card = gameCards.value[index];
  if (card.flipped || card.matched) return;

  card.flipped = true;
  score.value++;

  if (count.value === 0) {
    firstCardIndex.value = index;
    count.value = 1;
  } else if (count.value === 1) {
    secondCardIndex.value = index;
    count.value = 2;
    checkMatch();
  }
}

function checkMatch() {
  const firstCard = gameCards.value[firstCardIndex.value];
  const secondCard = gameCards.value[secondCardIndex.value];

  if (
    firstCard.word === currentDefinition.value.word &&
    secondCard.word === currentDefinition.value.word
  ) {
    firstCard.matched = true;
    secondCard.matched = true;
    matchedCards.value.push(firstCard, secondCard);
    resetGuesses();

    if (matchedCards.value.length === gameCards.value.length) {
      setTimeout(() => {
        alert(
          `Parabéns! Você encontrou todos os pares com ${score.value} cliques.`
        );
        createBoard();
      }, 500);
    } else {
      setTimeout(() => {
        selectNextDefinition();
      }, 500);
    }
  } else {
    setTimeout(() => {
      unflipCards();
    }, 1000);
  }
}

function unflipCards() {
  gameCards.value[firstCardIndex.value].flipped = false;
  gameCards.value[secondCardIndex.value].flipped = false;
  resetGuesses();
}

function resetGuesses() {
  count.value = 0;
  firstCardIndex.value = null;
  secondCardIndex.value = null;
}

onMounted(() => {
  createBoard();
});
</script>

<style scoped>
.memory-game {
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md);
}

#definition {
  font-size: 1.25rem;
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-md);
  background-color: var(--surface-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  color: var(--text-color);
  line-height: 1.6;
  border: 1px solid var(--border-color);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

#game-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  perspective: 1000px;
}

#game-board :deep(.card) {
  transform: rotate(-6deg);
  transition: transform 0.3s ease;
  aspect-ratio: 3/4;
}

#game-board :deep(.card:hover) {
  transform: rotate(-6deg);
}

/* #game-board :deep(.card:hover) {
  transform:  translateY(-5px);
} */

#game-board :deep(.card.flipped) {
  transform: rotate(6deg);
}

#game-board :deep(.card-back) {
  font-size: 1.1rem;
  line-height: 1.4;
  padding: var(--spacing-md);
}

#score {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: var(--spacing-lg);
  color: var(--primary-color);
}

/* Dark mode styles */
:deep(.dark) #definition {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .memory-game {
    padding: var(--spacing-sm);
  }

  #game-board {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    width: 100%;
  }

  #definition {
    font-size: 1.1rem;
    margin: var(--spacing-md) var(--spacing-sm);
    padding: var(--spacing-sm);
  }

  #game-board :deep(.card-back) {
    font-size: 0.9rem;
  }

  #score {
    font-size: 1.1rem;
  }
}
</style>
