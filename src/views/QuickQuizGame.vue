<template>
  <div class="quiz">
    <h1>Quiz Rápido</h1>
    <SelectorsComponent @specialty-change="resetQuiz" @difficulty-change="resetQuiz" />

    <GamePerksMenu :availablePerks="['skip', 'extra_time']" @perk-activated="handlePerk" />

    <div>
      <div id="quiz-container" v-if="quizVisible">
        <div id="timer">
          <span id="time">{{ timerDisplay }}</span>s
        </div>
        <div id="question">{{ currentQuestion?.clue }}</div>
        <ul id="options">
          <li v-for="(option, index) in options" :key="index">
            <button
              :disabled="optionsDisabled"
              :style="{ backgroundColor: buttonColors[index] }"
              @click="selectOption(option, index)"
            >
              {{ option }}
            </button>
          </li>
        </ul>
        <button id="next-button" v-if="showNextButton" @click="nextQuestion">
          Próxima Pergunta
        </button>
      </div>
    </div>

    <!-- Show game completion message and points earned -->
    <div v-if="gameCompleted" class="completion-message">
      <h3>Quiz Completo!</h3>
      <p>Pontos ganhos: {{ pointsEarned }}</p>
      <BaseButton variant="primary" @click="resetQuiz">Jogar Novamente</BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import SelectorsComponent from "../components/SelectorsComponent.vue";
import GamePerksMenu from "../components/game/GamePerksMenu.vue";
import BaseButton from "../components/base/BaseButton.vue";
import { useVocabularyStore } from "../store/vocabulary";
import { useGamePoints } from "../composables/useGamePoints";

const currentQuestionIndex = ref(0);
const timeLeft = ref(7);
const selectedQuestions = ref([]);
const quizVisible = ref(true);
const options = ref([]);
const timerDisplay = ref("7");
const showNextButton = ref(false);
const optionsDisabled = ref(false);
const buttonColors = ref([]);
const gameCompleted = ref(false);
const pointsEarned = ref(0);
const correctAnswers = ref(0);

let timer = null;

const vocabularyStore = useVocabularyStore();
const { POINTS_CONFIG, awardPoints, usePerk } = useGamePoints();

const currentQuestion = computed(() => {
  return selectedQuestions.value[currentQuestionIndex.value];
});

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateOptions(correctAnswer) {
  const opts = [correctAnswer];
  const incorrectOptions = vocabularyStore.filteredWords
    .filter((word) => word.word !== correctAnswer)
    .map((word) => word.word);
  shuffleArray(incorrectOptions);
  while (opts.length < 4 && incorrectOptions.length > 0) {
    opts.push(incorrectOptions.pop());
  }
  return shuffleArray(opts);
}

function startTimer() {
  const initialTime = timeLeft.value * 1000;
  let remainingTime = initialTime;

  timer = setInterval(() => {
    remainingTime -= 10;

    timerDisplay.value = (remainingTime / 1000).toFixed(0);

    if (remainingTime <= 0) {
      clearInterval(timer);
      selectOption(null);
      optionsDisabled.value = true;
      showNextButton.value = true;
    }
  }, 10);
}

function showQuestion() {
  clearInterval(timer);
  if (currentQuestionIndex.value >= selectedQuestions.value.length) {
    alert("Você completou o quiz!");
    resetQuiz();
    return;
  }
  optionsDisabled.value = false;
  showNextButton.value = false;
  buttonColors.value = [];
  if (currentQuestion.value) {
    options.value = generateOptions(currentQuestion.value.word);
    buttonColors.value = options.value.map(() => "");
    timeLeft.value = 7;
    timerDisplay.value = "7";
    startTimer();
  }
}

function selectOption(selectedOption, btnIndex = null) {
  clearInterval(timer);
  if (!currentQuestion.value) return;

  const correctAnswer = currentQuestion.value.word;

  if (selectedOption !== null) {
    // User selected an option
    if (selectedOption === correctAnswer && btnIndex !== null) {
      buttonColors.value[btnIndex] = "#2ecc71"; // Green for correct
      correctAnswers.value++;
    } else if (btnIndex !== null) {
      buttonColors.value[btnIndex] = "#e74c3c"; // Red for wrong
    }
  }

  // Show correct answer
  options.value.forEach((opt, index) => {
    if (opt === correctAnswer) {
      // If time ran out (selectedOption is null), highlight in yellow
      // Otherwise, highlight in green (either it was selected correctly or showing the right answer after wrong selection)
      buttonColors.value[index] = selectedOption === null ? "#ffd700" : "#2ecc71";
    }
  });

  optionsDisabled.value = true;
  showNextButton.value = true;
}

async function nextQuestion() {
  currentQuestionIndex.value++;

  if (currentQuestionIndex.value >= selectedQuestions.value.length) {
    await handleGameCompletion();
    return;
  }

  timeLeft.value = 7;
  showQuestion();
}

async function handleGameCompletion() {
  quizVisible.value = false;
  gameCompleted.value = true;

  const isPerfect = correctAnswers.value === selectedQuestions.value.length;
  const points = calculateGamePoints(correctAnswers.value, isPerfect);
  await awardPoints(points);
  pointsEarned.value = points;
}

async function handlePerk(perkId) {
  // Always deduct points before applying perk effect
  const success = await usePerk(perkId);
  if (!success) return;
  if (perkId === "skip") {
    nextQuestion();
  } else if (perkId === "extra_time") {
    timeLeft.value += 30;
  }
}

function startQuiz() {
  currentQuestionIndex.value = 0;
  // Use vocabularyStore's filtered words
  const filteredWords = vocabularyStore.filteredWords;
  if (filteredWords.length === 0) {
    alert("Nenhuma questão encontrada com os critérios selecionados.");
    quizVisible.value = false;
    return;
  }
  // Get random selection of words for the quiz
  selectedQuestions.value = shuffleArray([...filteredWords]).slice(0, 10);
  quizVisible.value = true;
  timeLeft.value = 7;
  showQuestion();
}

function resetQuiz() {
  clearInterval(timer);
  quizVisible.value = false;
  gameCompleted.value = false;
  pointsEarned.value = 0;
  correctAnswers.value = 0;
  currentQuestionIndex.value = 0;
  startQuiz();
}

onMounted(() => {
  startQuiz();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-md);
}

#quiz-container {
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-top: var(--spacing-lg);
  border: 1px solid var(--border-color);
}

#timer {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

#question {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background-color: var(--background-color);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

#options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  list-style: none;
  padding: 0;
  margin: 0;
}

#options button {
  width: 100%;
  padding: var(--spacing-md);
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  background-color: var(--surface-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

#options button:hover:not([disabled]) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  background-color: var(--background-color);
  border-color: var(--primary-color);
}

#options button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

#next-button {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 1rem;
  font-weight: 600;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
}

#next-button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

/* Dark mode styles */
:deep(.dark) #quiz-container {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
}

:deep(.dark) #question {
  background-color: var(--dark-background-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

:deep(.dark) #options button {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

:deep(.dark) #options button:hover:not([disabled]) {
  background-color: var(--dark-background-color);
  border-color: var(--dark-primary-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .quiz {
    padding: var(--spacing-sm);
    width: 100%;
  }

  #quiz-container {
    padding: var(--spacing-md);
  }

  #timer {
    font-size: 1.5rem;
  }

  #question {
    font-size: 1.1rem;
  }

  #options {
    grid-template-columns: 1fr;
  }

  #options button {
    padding: var(--spacing-sm);
    font-size: 0.95rem;
  }
}
</style>
