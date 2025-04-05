<template>
  <div class="quiz">
    <h1>Quiz Rápido</h1>
    <SelectorsComponent
      @specialty-change="resetQuiz"
      @difficulty-change="resetQuiz"
    />

    <div>
      <div id="quiz-container" v-if="quizVisible">
        <div id="timer">
          <span id="time">{{ timerDisplay }}</span
          >s
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import SelectorsComponent from "../components/SelectorsComponent.vue";
import { useWordStore } from "../store/wordStore";

const currentQuestionIndex = ref(0);
const timeLeft = ref(7);
const selectedQuestions = ref([]);
const quizVisible = ref(true);
const options = ref([]);
const timerDisplay = ref("7");
const showNextButton = ref(false);
const optionsDisabled = ref(false);
const buttonColors = ref([]);

let timer = null;

const wordStore = useWordStore();

const currentQuestion = computed(() => {
  return selectedQuestions.value[currentQuestionIndex.value];
});

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateOptions(correctAnswer) {
  const opts = [correctAnswer];
  const incorrectOptions = wordStore.allWords
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
    if (selectedOption === correctAnswer && btnIndex !== null) {
      buttonColors.value[btnIndex] = "#2ecc71";
    } else if (btnIndex !== null) {
      buttonColors.value[btnIndex] = "#e74c3c";
    }
  }
  options.value.forEach((opt, index) => {
    if (opt === correctAnswer) {
      buttonColors.value[index] = "#2ecc71";
    }
  });

  optionsDisabled.value = true;
  showNextButton.value = true;
}

function nextQuestion() {
  currentQuestionIndex.value++;
  timeLeft.value = 7;
  showQuestion();
}

function startQuiz() {
  currentQuestionIndex.value = 0;
  const quizWords = wordStore.getQuizWords(10);
  if (quizWords.length === 0) {
    alert("Nenhuma questão encontrada com os critérios selecionados.");
    quizVisible.value = false;
    return;
  }
  selectedQuestions.value = quizWords;
  quizVisible.value = true;
  timeLeft.value = 7;
  showQuestion();
}

function resetQuiz() {
  clearInterval(timer);
  quizVisible.value = false;
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
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
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
