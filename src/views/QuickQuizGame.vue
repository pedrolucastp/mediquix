<template>
  <GameContainer
    title="Quiz Rápido"
    :gameInstructions="gameInstructions"
    :loading="loading"
    :score="score"
    :availablePerks="['skip', 'extra_time']"
    @specialty-change="startQuiz"
    @difficulty-change="startQuiz"
  >
    <div class="game-content">
      <template v-if="!currentQuestion">
        <div class="score-container">
          <p>Total de pontos: {{ score }}</p>
          <p>Palavras restantes: {{ remainingQuestions }}</p>
        </div>
      </template>

      <template v-else>
        <div class="progress-bar">
          <div class="timer" :style="{ width: `${timePercentage}%` }"></div>
        </div>

        <div class="word-display">
          <h2>{{ currentQuestion.clue }}</h2>
        </div>

        <div class="options-container">
          <button 
            v-for="option in currentQuestionOptions" 
            :key="option"
            class="option-button"
            :class="{ 
              'selected': userAnswer === option,
              'correct': isAnswered && !timeExpired && option === currentQuestion.word,
              'incorrect': isAnswered && !timeExpired && userAnswer === option && option !== currentQuestion.word,
              'timeout-correct': timeExpired && option === currentQuestion.word,
              'timeout-incorrect': timeExpired && option !== currentQuestion.word
            }"
            @click="selectAnswer(option)"
            :disabled="isAnswered || timeExpired"
          >
            {{ option }}
          </button>
        </div>

        <div class="feedback-container" v-if="isAnswered || timeExpired">
          <p :class="{ 'feedback-correct': isCorrect, 'feedback-incorrect': !isCorrect }">
            {{ feedbackMessage }}
          </p>
          <p v-if="isCorrect">Pontos ganhos: {{ pointsEarned }}</p>
          <button class="next-button" @click="nextQuestion">
            {{ isLastQuestion ? 'Ver Resultados' : 'Próxima Palavra' }}
          </button>
        </div>
      </template>
    </div>
  </GameContainer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import GameContainer from "@/components/game/GameContainer.vue";
import { useGamePoints } from '@/composables/useGamePoints';
import { useGameTimer } from '@/composables/useGameTimer';
import { useVocabularyStore } from "@/store/vocabulary";

const gameInstructions = `Responda as questões em tempo limitado!
- Leia a pergunta e digite a resposta
- Ganhe 2 pontos por resposta correta
- Ganhe 10 pontos por completar o quiz
- Ganhe 15 pontos de bônus por acertar todas
- Use 'skip' (8 pts) para pular uma questão
- Use 'extra_time' (3 pts) para +30 segundos`;

const loading = ref(false);
const currentQuestionIndex = ref(0);
const timePerQuestion = ref(10);
const questionCount = ref(10);
const selectedQuestions = ref([]);
const quizVisible = ref(true);
const userAnswer = ref('');
const isAnswered = ref(false);
const isCorrect = ref(false);
const feedbackMessage = ref('');
const isLastQuestion = ref(false);
const timePercentage = ref(100);
const score = ref(0);
const pointsEarned = ref(0);
const correctAnswers = ref(0);
const gameCompleted = ref(false);
const timeExpired = ref(false);

const vocabularyStore = useVocabularyStore();
const { POINTS_CONFIG, awardPoints, usePerk } = useGamePoints();

const { timeLeft, timerDisplay, startTimer, pauseTimer, resetTimer } = useGameTimer({
  initialTime: timePerQuestion.value,
  onTimeUp: () => {
    if (!isAnswered.value) {
      isAnswered.value = true;
      timeExpired.value = true;
      isCorrect.value = false;
      feedbackMessage.value = 'Tempo esgotado! A resposta correta era: ' + currentQuestion.value.word;
    }
  }
});

const currentQuestion = computed(() => {
  return selectedQuestions.value[currentQuestionIndex.value];
});

const currentQuestionOptions = computed(() => {
  return currentQuestion.value ? shuffleArray([...currentQuestion.value.options]) : [];
});

const remainingQuestions = computed(() => {
  return selectedQuestions.value.length - currentQuestionIndex.value;
});

const AVAILABLE_PERKS = ['skip', 'extra_time'];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  currentQuestionIndex.value = 0;
  const filteredWords = vocabularyStore.filteredWords;
  if (filteredWords.length === 0) {
    alert("Nenhuma questão encontrada com os critérios selecionados.");
    quizVisible.value = false;
    return;
  }

  // Select questions and generate options for each
  const questions = shuffleArray([...filteredWords]).slice(0, questionCount.value);
  selectedQuestions.value = questions.map(question => ({
    ...question,
    options: generateOptionsForQuestion(question, filteredWords)
  }));

  quizVisible.value = true;
  resetQuestionState();
}

function generateOptionsForQuestion(question, allWords) {
  // Always include the correct answer
  const options = [question.word];
  
  // Get other random words for options
  const otherWords = allWords
    .filter(w => w.word !== question.word)
    .map(w => w.word);
  
  // Shuffle and take 3 random words
  const distractors = shuffleArray(otherWords).slice(0, 3);
  
  // Combine correct answer with distractors and shuffle
  return shuffleArray([...options, ...distractors]);
}

function resetQuestionState() {
  userAnswer.value = '';
  isAnswered.value = false;
  isCorrect.value = false;
  feedbackMessage.value = '';
  isLastQuestion.value = currentQuestionIndex.value === selectedQuestions.value.length - 1;
  timePercentage.value = 100;
  timeExpired.value = false;
  resetTimer();
  startTimer();
}

function handleTimeChange(e) {
  timePerQuestion.value = parseInt(e.target.value);
}

function handleQuestionCountChange(e) {
  questionCount.value = parseInt(e.target.value);
}

function selectAnswer(option) {
  if (isAnswered.value || timeExpired.value) return;
  userAnswer.value = option;
  pauseTimer();
  checkAnswer();
}

function checkAnswer() {
  if (!currentQuestion.value) return;

  isAnswered.value = true;
  isCorrect.value = userAnswer.value.trim().toLowerCase() === currentQuestion.value.word.toLowerCase();
  feedbackMessage.value = isCorrect.value
    ? 'Resposta correta!'
    : `Resposta incorreta! A resposta correta era: ${currentQuestion.value.word}`;

  if (isCorrect.value) {
    correctAnswers.value++;
    score.value += POINTS_CONFIG.WORD_FOUND;
    pointsEarned.value = POINTS_CONFIG.WORD_FOUND;
  } else {
    pointsEarned.value = 0;
  }
}

function nextQuestion() {
  if (isLastQuestion.value) {
    handleGameCompletion();
    return;
  }
  currentQuestionIndex.value++;
  resetQuestionState();
}

async function handleGameCompletion() {
  quizVisible.value = false;
  gameCompleted.value = true;

  try {
    const isPerfect = correctAnswers.value === selectedQuestions.value.length;
    const points = calculateGamePoints(correctAnswers.value, isPerfect);
    await awardPoints(points);
    pointsEarned.value = points;
  } catch (error) {
    // Points will not be awarded, but we'll still show the game results
    console.error('Error awarding points:', error);
    alert('Você precisa estar logado para ganhar pontos!');
  }
}

async function handlePerk(perkId) {
  const success = await usePerk(perkId);
  if (!success) return;
  if (perkId === 'skip') {
    nextQuestion();
  } else if (perkId === 'extra_time') {
    timePercentage.value += 30;
  }
}

function calculateGamePoints(correctAnswers, isPerfect) {
  let points = correctAnswers * POINTS_CONFIG.WORD_FOUND;
  if (isPerfect) points += POINTS_CONFIG.PERFECT_SCORE;
  return points + POINTS_CONFIG.GAME_COMPLETION;
}

// Watch for time changes and update the progress bar
watch(timeLeft, (newTime) => {
  timePercentage.value = (newTime / timePerQuestion.value) * 100;
});

// Update timer when timePerQuestion changes
watch(timePerQuestion, (newTime) => {
  resetTimer();
});

onMounted(() => {
  startQuiz();
});

onBeforeUnmount(() => {
  // Cleanup logic if needed
});
</script>

<style scoped>
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
}

.setting-group input[type="range"] {
  width: 100%;
}

.setting-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.quiz-container {
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-top: var(--spacing-lg);
  border: 1px solid var(--border-color);
}

.progress-bar {
  height: 10px;
  background-color: var(--background-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-md);
}

.timer {
  height: 100%;
  background-color: var(--primary-color);
  transition: width 0.2s ease;
}

.question-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  font-size: 1rem;
  color: var(--text-color);
}

.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.question {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
}

input[type="text"] {
  width: 100%;
  padding: var(--spacing-md);
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

input[type="text"].correct {
  border-color: var(--success-color);
}

input[type="text"].incorrect {
  border-color: var(--error-color);
}

.submit-button {
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

.submit-button:disabled {
  background-color: var(--disabled-color);
  cursor: not-allowed;
}

.feedback-container {
  margin-top: var(--spacing-lg);
}

.feedback-correct {
  color: var(--success-color);
}

.feedback-incorrect {
  color: var(--error-color);
}

.next-button {
  margin-top: var(--spacing-md);
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

.results-container {
  text-align: center;
  margin-top: var(--spacing-lg);
}

.results-summary {
  margin-top: var(--spacing-md);
}

.restart-button {
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

.options-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  width: 100%;
  margin: var(--spacing-lg) 0;
}

.option-button {
  padding: var(--spacing-md);
  font-size: 1rem;
  background-color: var(--surface-color);
  color: var(--text-color);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.option-button:hover:not(:disabled) {
  background-color: var(--hover-color);
  border-color: var(--primary-color);
}

.option-button.selected {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.option-button.correct {
  background-color: var(--success-color);
  color: white;
  border-color: var(--success-color);
}

.option-button.incorrect {
  background-color: var(--error-color);
  color: white;
  border-color: var(--error-color);
}

.option-button.timeout-correct {
  background-color: var(--warning-color);
  color: var(--text-color);
  border-color: var(--warning-color);
}

.option-button.timeout-incorrect {
  opacity: 0.5;
}

.option-button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
