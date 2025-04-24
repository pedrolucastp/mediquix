<template>
  <GameContainer
    title="Jogo da Forca"
    :gameInstructions="gameInstructions"
    :loading="loading"
    :score="score"
    :availablePerks="['hint']"
    @specialty-change="startGame"
    @difficulty-change="startGame"
  >
    <template #game-settings>
      <div class="game-settings">
        <h3>Configurações</h3>
        <div class="setting-group">
          <label>Número de vidas: {{ lives }}</label>
          <input type="range" :value="maxLives" min="4" max="10" step="1" @input="handleLivesChange" />
          <p class="setting-description">Quantidade de tentativas antes de perder o jogo</p>
        </div>
      </div>
    </template>

    <div class="game-content">
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
            <!-- Facial features -->
            <g v-show="showLeftEye">
              <!-- Normal eye or X eye based on game state -->
              <circle v-if="!gameOver || won" cx="143" cy="65" r="3" stroke="#2c3e50" stroke-width="2" fill="#2c3e50" />
              <g v-else>
                <line x1="140" y1="62" x2="146" y2="68" stroke="#2c3e50" stroke-width="2" />
                <line x1="146" y1="62" x2="140" y2="68" stroke="#2c3e50" stroke-width="2" />
              </g>
            </g>
            <g v-show="showRightEye">
              <!-- Normal eye or X eye based on game state -->
              <circle v-if="!gameOver || won" cx="157" cy="65" r="3" stroke="#2c3e50" stroke-width="2" fill="#2c3e50" />
              <g v-else>
                <line x1="154" y1="62" x2="160" y2="68" stroke="#2c3e50" stroke-width="2" />
                <line x1="160" y1="62" x2="154" y2="68" stroke="#2c3e50" stroke-width="2" />
              </g>
            </g>
            <line v-show="showNose" x1="150" y1="65" x2="150" y2="75" stroke="#2c3e50" stroke-width="2" />
            <!-- Mouth changes based on game state -->
            <g v-show="showMouth">
              <path v-if="!gameOver || won" d="M142 78 Q150 83 158 78" stroke="#2c3e50" stroke-width="2" fill="none" />
              <path v-else d="M142 82 Q150 77 158 82" stroke="#2c3e50" stroke-width="2" fill="none" />
            </g>
            <!-- Body parts -->
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
  </GameContainer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import GameContainer from "@/components/game/GameContainer.vue";
import GameMenuBar from '@/components/game/GameMenuBar.vue';
import { useVocabularyStore } from '@/store/vocabulary';
import { useGamePoints } from '@/composables/useGamePoints';

const gameInstructions = `Adivinhe a palavra antes de completar o boneco!
- Digite uma letra para tentar adivinhar a palavra
- Ganhe 2 pontos por cada letra correta
- Ganhe 10 pontos por completar o jogo
- Ganhe 15 pontos de bônus por não errar nenhuma letra
- Ganhe 2 pontos extras por cada vida restante
- Use 'hint' (5 pts) para revelar uma letra
- Use 'skip' (8 pts) para pular a palavra atual`;

const loading = ref(false);
const score = ref(0);
const vocabularyStore = useVocabularyStore();
const { POINTS_CONFIG, awardPoints, usePerk } = useGamePoints();

// Estado do jogo
const currentWord = ref(null);
const guessedLetters = ref([]);
const guess = ref('');
const message = ref('');
const gameStarted = ref(false);
const showRestart = ref(false);
const maxLives = ref(10); // Aumentado para 10 vidas
const lives = ref(maxLives.value);
const gameOver = ref(false);
const won = ref(false);
const pointsEarned = ref(0);

// Computed properties para partes da figura da forca
function getFeatureVisibility(feature) {
  const totalMistakes = maxLives.value - lives.value;
  const livesConfig = {
    10: {
      head: 1, body: 2, leftArm: 3, rightArm: 4, leftLeg: 5, rightLeg: 6,
      mouth: 7, leftEye: 8, rightEye: 9, nose: 10
    },
    9: {
      head: 1, body: 2, leftArm: 3, rightArm: 4, leftLeg: 5, rightLeg: 6,
      mouth: 7, leftEye: 8, rightEye: 8, nose: 9
    },
    8: {
      head: 1, body: 2, leftArm: 3, rightArm: 4, leftLeg: 5, rightLeg: 6,
      mouth: 7, leftEye: 7, rightEye: 7, nose: 8
    },
    7: {
      head: 1, body: 3, leftArm: 4, rightArm: 5, leftLeg: 6, rightLeg: 7,
      mouth: 2, leftEye: 2, rightEye: 2, nose: 2
    },
    6: {
      head: 1, body: 2, leftArm: 3, rightArm: 4, leftLeg: 5, rightLeg: 6,
      mouth: 1, leftEye: 1, rightEye: 1, nose: 1
    },
    5: {
      head: 1, body: 3, leftArm: 4, rightArm: 4, leftLeg: 5, rightLeg: 5,
      mouth: 2, leftEye: 2, rightEye: 2, nose: 2
    },
    4: {
      head: 1, body: 2, leftArm: 3, rightArm: 3, leftLeg: 4, rightLeg: 4,
      mouth: 1, leftEye: 1, rightEye: 1, nose: 1
    }
  };

  const config = livesConfig[maxLives.value] || livesConfig[6]; // Default to 6 lives config if invalid
  return totalMistakes >= config[feature];
}

const showHead = computed(() => getFeatureVisibility('head'));
const showBody = computed(() => getFeatureVisibility('body'));
const showLeftArm = computed(() => getFeatureVisibility('leftArm'));
const showRightArm = computed(() => getFeatureVisibility('rightArm'));
const showLeftLeg = computed(() => getFeatureVisibility('leftLeg'));
const showRightLeg = computed(() => getFeatureVisibility('rightLeg'));
const showMouth = computed(() => {
  if (gameOver.value && !won.value) {
    return getFeatureVisibility('mouth');
  }
  return getFeatureVisibility('mouth');
});
const showLeftEye = computed(() => {
  if (gameOver.value && !won.value) {
    return getFeatureVisibility('leftEye');
  }
  return getFeatureVisibility('leftEye');
});
const showRightEye = computed(() => {
  if (gameOver.value && !won.value) {
    return getFeatureVisibility('rightEye');
  }
  return getFeatureVisibility('rightEye');
});
const showNose = computed(() => getFeatureVisibility('nose'));

// Display da palavra atual com letras adivinhadas
const displayedWord = computed(() => {
  if (!currentWord.value) return [];
  return currentWord.value.word.split('').map(letter => 
    guessedLetters.value.includes(letter.toUpperCase()) ? letter : '_'
  );
});

function handleLivesChange(e) {
  maxLives.value = parseInt(e.target.value);
  startGame();
}

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
  lives.value = maxLives.value;
  gameOver.value = false;
  won.value = false;
  pointsEarned.value = 0;
  score.value = 0;
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
    score.value += 2;
    
    // Verifica se a palavra está completa
    if (displayedWord.value.join('') === currentWord.value.word) {
      await handleGameOver(true);
    }
  }
}

function calculatePoints() {
  // Points for winning
  let points = POINTS_CONFIG.GAME_COMPLETION;
  
  // Points for remaining lives (2 points per life)
  points += lives.value * 2;
  
  // Perfect score bonus (no mistakes)
  if (lives.value === maxLives.value) {
    points += POINTS_CONFIG.PERFECT_SCORE;
  }

  return points;
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

async function handlePerk(perkId) {
  const success = await usePerk(perkId);
  if (!success) return;

  if (perkId === 'hint' && currentWord.value && !gameOver.value) {
    // Find a hidden letter to reveal
    const hiddenIndices = currentWord.value.word.split('').map((letter, index) => 
      guessedLetters.value.has(letter.toUpperCase()) ? -1 : index
    ).filter(index => index !== -1);

    if (hiddenIndices.length > 0) {
      const randomIndex = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
      const letter = currentWord.value.word[randomIndex].toUpperCase();
      guessedLetters.value.add(letter);
      checkWinCondition();
    }
  } else if (perkId === 'skip' && !gameOver.value) {
    // Skip current word and get a new one
    await startNewGame();
  }
}

// Inicia o jogo ao montar
onMounted(() => {
  startGame();
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

/* .game-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  flex-direction: column;
} */

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

.message-container {
  text-align: center;
  margin-bottom: 1rem;
  min-height: 1.5rem;
  color: var(--text-secondary);
}

.guess-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  padding: 20px;
  margin-bottom: 1rem;
}

.guess-container input {
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid var(--border-color);
  border-radius: 4px;
}

.guess-container button {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.guess-container button:hover:not(:disabled) {
  background-color: var(--secondary-color);
}

#restart-btn {
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

#restart-btn:hover {
  background-color: var(--secondary-color);
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
  /* .game-container {
    flex-direction: column;
  } */

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
