<template>
  <div class="hangman-game">
    <h1>Jogo da Forca</h1>
    <SelectorsComponent @specialty-change="startGame" @difficulty-change="startGame" />
    
    <GamePerksMenu :availablePerks="['hint']" @perk-activated="handlePerk" />

    <div class="game-container" v-show="gameStarted">
      <!-- Figura da Forca -->
      <div class="hangman-figure">
        <svg height="250" width="200" id="hangman-svg">
          <!-- Base da forca -->
          <line x1="10" y1="240" x2="190" y2="240" stroke="#2c3e50" stroke-width="4" />
          <line x1="60" y1="240" x2="60" y2="20" stroke="#2c3e50" stroke-width="4" />
          <line x1="58" y1="20" x2="152" y2="20" stroke="#2c3e50" stroke-width="4" />
          <line x1="150" y1="20" x2="150" y2="50" stroke="#2c3e50" stroke-width="4" />
          <!-- Partes do boneco, controladas por v-show -->
          <circle v-show="showHead" cx="150" cy="70" r="20" stroke="#2c3e50" stroke-width="4" fill="none" />
          <line v-show="showBody" x1="150" y1="90" x2="150" y2="150" stroke="#2c3e50" stroke-width="4" />
          <line v-show="showLeftArm" x1="150" y1="120" x2="120" y2="100" stroke="#2c3e50" stroke-width="4" />
          <line v-show="showRightArm" x1="150" y1="120" x2="180" y2="100" stroke="#2c3e50" stroke-width="4" />
          <line v-show="showLeftLeg" x1="150" y1="150" x2="120" y2="180" stroke="#2c3e50" stroke-width="4" />
          <line v-show="showRightLeg" x1="150" y1="150" x2="180" y2="180" stroke="#2c3e50" stroke-width="4" />
        </svg>
      </div>
      
      <div class="message-container">
        <p>{{ message }}</p>
      </div>

      <div class="word-container">
        <span v-for="(letter, index) in displayedWord" :key="index" class="letter">
          {{ letter }}
        </span>
      </div>

      <div class="clue-container">
        <p>{{ currentWord?.clue }}</p>
      </div>

      <div class="guess-container">
        <input 
          type="text" 
          v-model="guess" 
          @keyup.enter="makeGuess"
          maxlength="1"
          :disabled="gameOver"
        />
        <button @click="makeGuess" :disabled="gameOver">Tentar</button>
      </div>

      <button id="restart-btn" v-show="showRestart" @click="startGame">Novo Jogo</button>

      <!-- Show points earned when game ends -->
      <div v-if="gameOver" class="completion-message">
        <p v-if="won">Parabéns! Você venceu!</p>
        <p v-else>Não foi dessa vez. A palavra era: {{ currentWord?.word }}</p>
        <p v-if="pointsEarned">Pontos ganhos: {{ pointsEarned }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SelectorsComponent from '@/components/SelectorsComponent.vue';
import GamePerksMenu from '@/components/game/GamePerksMenu.vue';
import { useVocabularyStore } from '@/store/vocabulary';
import { useGamePoints } from '@/composables/useGamePoints';

const vocabularyStore = useVocabularyStore();
const { POINTS_CONFIG, awardPoints, usePerk } = useGamePoints();

// Estado do jogo
const currentWord = ref(null);
const guessedLetters = ref([]);
const guess = ref('');
const message = ref('');
const gameStarted = ref(false);
const showRestart = ref(false);
const maxLives = 6;
const lives = ref(maxLives);
const gameOver = ref(false);
const won = ref(false);
const pointsEarned = ref(0);

// Computed properties para partes da figura da forca
const showHead = computed(() => lives.value < 6);
const showBody = computed(() => lives.value < 5);
const showLeftArm = computed(() => lives.value < 4);
const showRightArm = computed(() => lives.value < 3);
const showLeftLeg = computed(() => lives.value < 2);
const showRightLeg = computed(() => lives.value < 1);

const displayedWord = computed(() => {
  if (!currentWord.value) return [];
  return currentWord.value.word.split('').map(letter => 
    guessedLetters.value.includes(letter.toUpperCase()) ? letter : '_'
  );
});

function startGame() {
  const filteredWords = vocabularyStore.filteredWords;
  if (filteredWords.length === 0) {
    alert('Nenhuma palavra encontrada com os critérios selecionados.');
    return;
  }

  currentWord.value = filteredWords[Math.floor(Math.random() * filteredWords.length)];
  guessedLetters.value = [];
  guess.value = '';
  message.value = '';
  gameStarted.value = true;
  showRestart.value = false;
  lives.value = maxLives;
  gameOver.value = false;
  won.value = false;
  pointsEarned.value = 0;
}

async function makeGuess() {
  if (!guess.value || gameOver.value) return;

  const letter = guess.value.toUpperCase();
  guess.value = '';

  if (guessedLetters.value.includes(letter)) {
    message.value = 'Você já tentou essa letra!';
    return;
  }

  guessedLetters.value.push(letter);

  if (!currentWord.value.word.toUpperCase().includes(letter)) {
    lives.value--;
    message.value = `Letra "${letter}" não encontrada. ${lives.value} tentativas restantes.`;
    
    if (lives.value === 0) {
      await handleGameOver(false);
    }
  } else {
    message.value = `Boa! A letra "${letter}" existe na palavra.`;
    
    // Verifica se a palavra está completa
    if (displayedWord.value.join('') === currentWord.value.word) {
      await handleGameOver(true);
    }
  }
}

async function handleGameOver(hasWon) {
  gameOver.value = true;
  showRestart.value = true;
  won.value = hasWon;

  if (hasWon) {
    message.value = 'Parabéns! Você venceu!';
    const points = calculatePoints();
    await awardPoints(points);
    pointsEarned.value = points;
  } else {
    message.value = `Game Over! A palavra era: ${currentWord.value.word}`;
  }
}

function calculatePoints() {
  // Pontos base por vencer
  let points = POINTS_CONFIG.GAME_COMPLETION;
  
  // Pontos bônus com base nas vidas restantes
  points += lives.value * 2;
  
  // Bônus por jogo perfeito (sem erros)
  if (lives.value === maxLives) {
    points += POINTS_CONFIG.PERFECT_SCORE;
  }
  
  return points;
}

async function handlePerk(perkId) {
  // Always deduct points before applying perk effect
  const success = await usePerk(perkId);
  if (!success) return;
  if (perkId === 'hint' && currentWord.value && !gameOver.value) {
    // Encontra uma letra não revelada
    const word = currentWord.value.word.toUpperCase();
    const unrevealedLetters = word
      .split('')
      .filter(letter => !guessedLetters.value.includes(letter));
    if (unrevealedLetters.length > 0) {
      // Revela uma letra não revelada aleatória
      const letter = unrevealedLetters[Math.floor(Math.random() * unrevealedLetters.length)];
      guessedLetters.value.push(letter);
      message.value = `Dica: A letra "${letter}" existe na palavra.`;
      // Verifica se a palavra está completa após a dica
      if (displayedWord.value.join('') === currentWord.value.word) {
        handleGameOver(true);
      }
    }
  }
}

// Inicia o jogo ao montar
onMounted(() => {
  startGame();
});
</script>

<style scoped>
.hangman-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100%;
  overflow: auto;
}

.hangman-game h1 {
  margin-bottom: 1rem;
}

.game-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  flex-direction: column;
}

.hangman-figure {
  margin-bottom: 2rem;
}

.word-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.word-container .letter {
  border-bottom: 2px solid var(--secondary-color);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
}

.clue-container {
  margin: 1rem;
  font-size: 1.125rem;
  border: 2px solid #333;
  padding: 10px;
  border-radius: 5px;
}

.info-container p {
  font-size: 1rem;
  margin: 0;
  color: var(--secondary-color);
}

.guess-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.guess-container input {
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem 1rem;
}

.guess-container button {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.guess-container button:hover {
  background-color: #1f6391;
}

.message-container {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
}

#restart-btn {
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin: auto;
}

#restart-btn:hover {
  background-color: #c0392b;
}

.completion-message {
  margin-top: var(--spacing-md);
  text-align: center;
  padding: var(--spacing-md);
  background-color: var(--surface-color);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

:deep(.dark) .completion-message {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
}

/* Responsivo */
@media (max-width: 768px) {
  .game-container {
    flex-direction: column;
  }

  .word-container .letter {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
  }

  .guess-container input,
  .guess-container button,
  #restart-btn {
    max-width: 200px;
  }
}
</style>
