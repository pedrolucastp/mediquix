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
      <div
        v-for="(card, index) in gameCards"
        :key="index"
        class="card"
        :class="{ flipped: card.flipped, matched: card.matched }"
        @click="flipCard(index)"
      >
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back">{{ card.word }}</div>
        </div>
      </div>
    </div>

    <p id="score">Pontuação: {{ score }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SelectorsComponent from "@/components/SelectorsComponent.vue";
import { useVocabularyStore } from "@/store/vocabularyStore";

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
}

#game-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  margin: 0 auto;
  max-width: 900px;
}

.card {
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card.matched .card-inner {
  transform: rotateY(180deg) scale(0.95);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.card-front {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  font-size: 1.5rem;
  transform: rotateY(0deg);
}

.card-back {
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  font-size: 0.9rem;
  transform: rotateY(180deg);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
}

.card:hover .card-front:not(.matched) {
  box-shadow: var(--shadow-md);
  transform: translateZ(10px);
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

:deep(.dark) .card-back {
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
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
  }

  #definition {
    font-size: 1.1rem;
    margin: var(--spacing-md) 0;
  }

  .card-front {
    font-size: 1.25rem;
  }

  .card-back {
    font-size: 0.8rem;
  }

  #score {
    font-size: 1.1rem;
  }
}
</style>
