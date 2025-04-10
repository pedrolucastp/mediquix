<template>
  <div class="hangman-game">
    <h1>Jogo da Forca</h1>
    <!-- Componente de seletores -->
    <SelectorsComponent @specialty-change="startGame" @difficulty-change="startGame" />

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
        <!-- Mensagem (vitória ou derrota) -->
        <div class="message-container">
          <p>{{ message }}</p>
        </div>

        <!-- Botão para reiniciar o jogo -->
        <button v-show="showRestart" @click="startGame">Reiniciar Jogo</button>
      </div>
      <div>
        <!-- Exibição da palavra oculta -->
        <div class="word-container">
          <span v-for="(letter, index) in displayedWord" :key="index" class="letter">
            {{ letter }}
          </span>
        </div>

        <!-- Exibição da dica -->
        <div class="clue-container">
          <p>{{ selectedClue }}</p>
        </div>

        <!-- Chute: input e botão -->
        <div class="guess-container">
          <input type="text" v-model="guessLetter" maxlength="1" placeholder="Insira uma letra"
            @keydown.enter.prevent="handleGuess" />
          <button @click="handleGuess">Chutar</button>
        </div>

        <!-- Informações: letras erradas e contagem de erros -->
        <div class="info-container">
          <p>Letras erradas: {{ wrongLetters.join(", ") }}</p>
          <p>{{ wrongGuesses }} / {{ maxErrors }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from "vue";
import { useVocabularyStore } from "@/store/vocabulary";
import { useSettingsStore } from "@/store/settings";
import SelectorsComponent from "@/components/SelectorsComponent.vue";

// Stores
const vocabularyStore = useVocabularyStore();
const settingsStore = useSettingsStore();

// Estado do jogo
const gameStarted = ref(true);
const selectedWord = ref("");
const selectedClue = ref("");
const displayedWord = ref([]);
const wrongGuesses = ref(0);
const maxErrors = 6;
const wrongLetters = ref([]);
const message = ref("");
const guessLetter = ref("");
const showRestart = ref(false);

// Controle da figura da forca (reactive booleans)
const showHead = ref(false);
const showBody = ref(false);
const showLeftArm = ref(false);
const showRightArm = ref(false);
const showLeftLeg = ref(false);
const showRightLeg = ref(false);

// Para atualizar a figura da forca conforme erros:
function resetHangmanFigure() {
  showHead.value = false;
  showBody.value = false;
  showLeftArm.value = false;
  showRightArm.value = false;
  showLeftLeg.value = false;
  showRightLeg.value = false;
}

function updateHangmanFigure() {
  // Ativa as partes de acordo com wrongGuesses
  const parts = [
    showHead,
    showBody,
    showLeftArm,
    showRightArm,
    showLeftLeg,
    showRightLeg,
  ];
  if (wrongGuesses.value > 0 && wrongGuesses.value <= parts.length) {
    parts[wrongGuesses.value - 1].value = true;
  }
}

// Variáveis para o grid da forca (opcional, se houver parte de desenho com letras ou não)
const gameContainer = ref(null);

// Função para escolher uma palavra aleatória com base nos filtros
function startGame() {
  resetHangmanFigure();
  wrongGuesses.value = 0;
  wrongLetters.value = [];
  message.value = "";
  guessLetter.value = "";
  showRestart.value = false;

  // Selecionar palavra com base no store (sem query selectors)
  let filteredWords = vocabularyStore.words.filter(
    (wordObj) => wordObj.isActive
  );

  // Se desejar, pode filtrar também pelos valores do settingsStore, se necessário

  if (filteredWords.length === 0) {
    alert("Nenhuma palavra encontrada com os filtros selecionados.");
    gameStarted.value = false;
    return;
  }

  // Selecionar aleatoriamente uma palavra
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  const chosen = filteredWords[randomIndex];
  selectedWord.value = chosen.word.toUpperCase();
  selectedClue.value = chosen.clue;

  // Inicializa a palavra oculta: revela espaços e hifens
  displayedWord.value = selectedWord.value.split("").map((char) => {
    if (char.match(/[\s\-]/)) return char;
    return "";
  });

  // Reinicia a figura da forca (oculta todas as partes)
  resetHangmanFigure();

  // Limpa o input
  guessLetter.value = "";
}

function renderWord() {
  // Aqui, o binding no template já renderiza a displayedWord
}

function handleGuess() {
  const guess = guessLetter.value.toUpperCase();
  guessLetter.value = "";

  if (!/^[A-Z]$/.test(guess)) {
    alert("Por favor, insira uma única letra de A a Z.");
    return;
  }

  // Verifica se a letra já foi chutada (ou se já está revelada)
  if (
    displayedWord.value.includes(guess) ||
    wrongLetters.value.includes(guess)
  ) {
    alert("Você já chutou essa letra.");
    return;
  }

  // Verifica se a letra existe na palavra (considerando acentos se necessário)
  let matched = false;
  selectedWord.value.split("").forEach((letter, index) => {
    if (letter === guess) {
      displayedWord.value[index] = letter; // Revela a letra
      matched = true;
    }
  });

  if (matched) {
    // Atualiza a exibição da palavra (o template já está vinculado a displayedWord)
    // Verifica vitória
    if (!displayedWord.value.includes("_")) {
      message.value = "Parabéns! Você ganhou!";
      showRestart.value = true;
    }
  } else {
    wrongGuesses.value++;
    wrongLetters.value.push(guess);
    updateHangmanFigure();
    // Verifica derrota
    if (wrongGuesses.value >= maxErrors) {
      message.value = `Você perdeu! A palavra era "${selectedWord.value}".`;
      displayedWord.value = selectedWord.value.split("");
      showRestart.value = true;
    }
  }
}

function restartGame() {
  startGame();
}

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
  /* color: var(--secondary-color); */
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
  /* width: 2rem; */
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
