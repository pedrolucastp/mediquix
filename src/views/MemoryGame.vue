<template>
  <GameContainer
    title="Jogo da Memória"
    :gameInstructions="gameInstructions"
    :loading="loading"
    :score="score"
    :availablePerks="['hint', 'open_third_card']"
    @specialty-change="createBoard"
    @difficulty-change="createBoard"
  >
    <template #game-settings>
      <div class="game-settings">
        <h3>Configurações</h3>
        <div class="setting-group">
          <label>Número de pares</label>
          <input type="range" :value="pairCount" min="8" max="40" step="4" @input="handlePairCountChange" />
          <p class="setting-description">Quantidade de pares de palavras no jogo ({{ pairCount }} pares)</p>
        </div>
        <!-- <div class="setting-group">
          <label>Tamanho das cartas</label>
          <input type="range" :value="cardSize" min="100" max="200" step="20" @input="handleCardSizeChange" />
          <p class="setting-description">Ajuste o tamanho das cartas</p>
        </div> -->
      </div>
    </template>

    <div class="game-content">
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
          :disabled="count >= maxOpenCards"
          :cardSize="cardSize"
          @click="flipCard(index)"
        >
          <template #back>{{ card.word }}</template>
        </GameCardFlip>
      </div>
    </div>
  </GameContainer>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import GameContainer from "@/components/game/GameContainer.vue";
import GameCardFlip from "@/components/game/GameCardFlip.vue";
import { useGamePoints } from '@/composables/useGamePoints';
import { useVocabularyStore } from "@/store/vocabulary";

const gameInstructions = `Encontre os pares de palavras correspondentes!
- Clique em uma carta para revelar a palavra
- Combine a palavra com sua definição mostrada acima
- Ganhe 2 pontos por cada par encontrado
- Ganhe 10 pontos por completar o jogo
- Ganhe 15 pontos de bônus por terminar sem erros
- Use o perk 'hint' (5 pts) para revelar um par de cartas
- O perk 'open_third_card' (6 pts) permite abrir três cartas simultaneamente`;

const loading = ref(false);
const vocabularyStore = useVocabularyStore();
const { POINTS_CONFIG, awardPoints, usePerk } = useGamePoints();

const score = ref(0);
const attempts = ref(0);
const pointsEarned = ref(0);
const gameCards = ref([]);
const currentDefinition = ref(null);
const gameWords = ref([]);
const availableDefinitions = ref([]);
const count = ref(0);
const firstCardIndex = ref(null);
const secondCardIndex = ref(null);
const thirdCardIndex = ref(null);
const matchedCards = ref([]);
const maxOpenCards = ref(2);
const pairCount = ref(8);
const cardSize = ref(140);

function handlePairCountChange(e) {
  pairCount.value = parseInt(e.target.value);
  createBoard();
}

function createBoard() {
  score.value = 0;
  attempts.value = 0;
  pointsEarned.value = 0;
  count.value = 0;
  matchedCards.value = [];
  maxOpenCards.value = 2;
  firstCardIndex.value = null;
  secondCardIndex.value = null;
  thirdCardIndex.value = null;

  let filteredWords = vocabularyStore.words.filter((word) => word.isActive);
  if (filteredWords.length < 2) {
    alert(
      "Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros."
    );
    return;
  }

  filteredWords.sort(() => Math.random() - 0.5);
  gameWords.value = filteredWords.slice(0, pairCount.value);

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
  attempts.value++;

  if (count.value === 0) {
    firstCardIndex.value = index;
    count.value = 1;
  } else if (count.value === 1) {
    secondCardIndex.value = index;
    count.value = 2;
    if (maxOpenCards.value === 2) {
      checkMatch();
    }
  } else if (count.value === 2 && maxOpenCards.value === 3) {
    thirdCardIndex.value = index;
    count.value = 3;
    checkMatch();
  }
}

function checkMatch() {
  const firstCard = gameCards.value[firstCardIndex.value];
  const secondCard = gameCards.value[secondCardIndex.value];
  
  if (maxOpenCards.value === 2) {
    if (
      firstCard.word === currentDefinition.value.word &&
      secondCard.word === currentDefinition.value.word
    ) {
      firstCard.matched = true;
      secondCard.matched = true;
      matchedCards.value.push(firstCard, secondCard);
      resetGuesses();
      if (matchedCards.value.length === gameCards.value.length) {
        handleGameCompletion();
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
  } else {
    const thirdCard = gameCards.value[thirdCardIndex.value];
    const word = currentDefinition.value.word;
    let matched = 0;
    if (firstCard.word === word) matched++;
    if (secondCard.word === word) matched++;
    if (thirdCard.word === word) matched++;
    if (matched >= 2) {
      [firstCard, secondCard, thirdCard].forEach(card => {
        if (card.word === word) card.matched = true;
      });
      matchedCards.value.push(...[firstCard, secondCard, thirdCard].filter(card => card.word === word));
      resetGuesses();
      maxOpenCards.value = 2;
      if (matchedCards.value.length === gameCards.value.length) {
        handleGameCompletion();
      } else {
        setTimeout(() => {
          selectNextDefinition();
        }, 500);
      }
    } else {
      setTimeout(() => {
        unflipCards();
        maxOpenCards.value = 2;
      }, 1000);
    }
  }
}

function unflipCards() {
  if (firstCardIndex.value !== null) gameCards.value[firstCardIndex.value].flipped = false;
  if (secondCardIndex.value !== null) gameCards.value[secondCardIndex.value].flipped = false;
  if (thirdCardIndex.value !== null) gameCards.value[thirdCardIndex.value].flipped = false;
  resetGuesses();
}

function resetGuesses() {
  count.value = 0;
  firstCardIndex.value = null;
  secondCardIndex.value = null;
  thirdCardIndex.value = null;
}

async function handlePerk(perkId) {
  const success = await usePerk(perkId);
  if (!success) return;
  if (perkId === 'hint' && currentDefinition.value) {
    const word = currentDefinition.value.word;
    const indices = gameCards.value
      .map((card, idx) => ({ card, idx }))
      .filter(({ card }) => card.word === word && !card.matched && !card.flipped)
      .map(({ idx }) => idx);
    if (indices.length >= 2) {
      gameCards.value[indices[0]].flipped = true;
      gameCards.value[indices[1]].flipped = true;
      setTimeout(() => {
        checkMatch();
      }, 500);
    }
  } else if (perkId === 'open_third_card') {
    maxOpenCards.value = 3;
  }
}

function calculateGamePoints() {
  const basePoints = (matchedCards.value.length / 2) * POINTS_CONFIG.WORD_FOUND;
  const isPerfect = attempts.value === matchedCards.value.length;
  return basePoints + POINTS_CONFIG.GAME_COMPLETION + (isPerfect ? POINTS_CONFIG.PERFECT_SCORE : 0);
}

async function handleGameCompletion() {
  const points = calculateGamePoints();
  await awardPoints(points);
  pointsEarned.value = points;
  setTimeout(() => {
    alert(
      `Parabéns! Você encontrou todos os pares em ${attempts.value} tentativas.\nPontos ganhos: ${points}`
    );
    createBoard();
  }, 500);
}

onMounted(() => {
  createBoard();
});
</script>

<style scoped>
.game-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.game-settings {
  min-width: 300px;
  padding: var(--spacing-md);
}

.game-settings h3 {
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
}

.setting-group {
  margin-bottom: var(--spacing-md);
}

.setting-group label {
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.setting-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: var(--spacing-xs);
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
  text-align: center;
}

#game-board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  gap: var(--spacing-md);
  padding: var(--spacing-md);
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  perspective: 1000px;
  justify-content: center;
}

@media (max-width: 768px) {
  #game-board {
    grid-template-columns: repeat(4, 1fr);
  }
}

:deep(.dark) #definition {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

@media (max-width: 768px) {
  .game-content {
    padding: var(--spacing-sm);
  }

  #game-board {
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    width: 100%;
  }

  #definition {
    font-size: 1.1rem;
    margin: var(--spacing-md) var(--spacing-sm);
    padding: var(--spacing-sm);
  }
}
</style>
