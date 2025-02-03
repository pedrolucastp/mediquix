<template>
  <div class="memory-game">
    <h1>Jogo de Memória</h1>
    <SelectorsComponent @specialty-change="createBoard" @difficulty-change="createBoard" />

    <p id="definition">
      {{ currentDefinition ? currentDefinition.clue : "Todas as palavras foram encontradas!" }}
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
import { ref, onMounted } from 'vue'
import SelectorsComponent from '@/components/SelectorsComponent.vue'
import { useVocabularyStore } from '@/store/vocabularyStore'

const vocabularyStore = useVocabularyStore()

const score = ref(0)
const gameCards = ref([])         
const currentDefinition = ref(null)
const gameWords = ref([])         
const availableDefinitions = ref([]) 
const count = ref(0)
const firstCardIndex = ref(null)
const secondCardIndex = ref(null)
const matchedCards = ref([])

function createBoard() {
  score.value = 0
  count.value = 0
  matchedCards.value = []
  
  let filteredWords = vocabularyStore.words.filter(word => word.isActive)
  if (filteredWords.length < 2) {
    alert("Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros.")
    return
  }
  
  filteredWords.sort(() => Math.random() - 0.5)
  gameWords.value = filteredWords.slice(0, 8)
  
  availableDefinitions.value = [...gameWords.value]
  selectNextDefinition()
  
  const cards = [...gameWords.value, ...gameWords.value].map(wordObj => ({
    word: wordObj.word,
    flipped: false,
    matched: false
  }))
  cards.sort(() => Math.random() - 0.5)
  gameCards.value = cards
}

function selectNextDefinition() {
  if (availableDefinitions.value.length === 0) {
    currentDefinition.value = null
  } else {
    availableDefinitions.value.sort(() => Math.random() - 0.5)
    currentDefinition.value = availableDefinitions.value.pop()
  }
}

function flipCard(index) {
  const card = gameCards.value[index]
  if (card.flipped || card.matched) return

  card.flipped = true
  score.value++
  
  if (count.value === 0) {
    firstCardIndex.value = index
    count.value = 1
  } else if (count.value === 1) {
    secondCardIndex.value = index
    count.value = 2
    checkMatch()
  }
}

function checkMatch() {
  const firstCard = gameCards.value[firstCardIndex.value]
  const secondCard = gameCards.value[secondCardIndex.value]
  
  if (
    firstCard.word === currentDefinition.value.word &&
    secondCard.word === currentDefinition.value.word
  ) {
    firstCard.matched = true
    secondCard.matched = true
    matchedCards.value.push(firstCard, secondCard)
    resetGuesses()
    
    if (matchedCards.value.length === gameCards.value.length) {
      setTimeout(() => {
        alert(`Parabéns! Você encontrou todos os pares com ${score.value} cliques.`)
        createBoard()
      }, 500)
    } else {
      setTimeout(() => {
        selectNextDefinition()
      }, 500)
    }
  } else {
    setTimeout(() => {
      unflipCards()
    }, 1000)
  }
}

function unflipCards() {
  gameCards.value[firstCardIndex.value].flipped = false
  gameCards.value[secondCardIndex.value].flipped = false
  resetGuesses()
}

function resetGuesses() {
  count.value = 0
  firstCardIndex.value = null
  secondCardIndex.value = null
}

onMounted(() => {
  createBoard()
})
</script>

<style scoped>
.memory-game {
  text-align: center;
}

#definition {
  font-size: 1.2rem;
  margin: 1rem 0;
}

#game-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.card {
  width: 100px;
  height: 120px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card.flipped .card-inner,
.card.matched .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
}

.card-front {
  background-color: #ecf0f1;
  border: 2px solid #bdc3c7;
  box-shadow: 0px 0px 20px -10px;
  transform: rotate(-15deg);
}

.card-back {
  background-color: var(--select-backgound);
  border: 1px solid #bdc3c7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  padding: 5px;
  font-size: 14px;
  text-align: center;
  transform: rotateY(180deg) rotate(-15deg);
}

#score {
  font-size: 18px;
  font-weight: 600;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  #game-board {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
  .card {
    width: 80px;
    height: 100px;
  }
  .card-front {
    font-size: 24px;
  }
  .card-back {
    font-size: 12px;
  }
}
</style>
