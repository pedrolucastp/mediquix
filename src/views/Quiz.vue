<template>
  <div class="quiz">
    <header>
      <h1>Quiz Rápido</h1>
      <SelectorsComponent 
        @specialty-change="resetQuiz"
        @difficulty-change="resetQuiz"
      />
    </header>

    <main>
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
    </main>

    <footer>
      <router-link id="home-link" to="/">← Início</router-link>
      <small>&copy; 2024 MEDiQUiZ. Todos os direitos reservados.</small>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import SelectorsComponent from '../components/SelectorsComponent.vue'
import { useWordStore } from '../store/wordStore'

const currentQuestionIndex = ref(0)
const timeLeft = ref(7)
const selectedQuestions = ref([])
const quizVisible = ref(true)
const options = ref([]) 
const timerDisplay = ref('7')
const showNextButton = ref(false)
const optionsDisabled = ref(false)
const buttonColors = ref([])

let timer = null

const wordStore = useWordStore()

const currentQuestion = computed(() => {
  return selectedQuestions.value[currentQuestionIndex.value]
})

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5)
}

function generateOptions(correctAnswer) {
  const opts = [correctAnswer]
  const incorrectOptions = wordStore.allWords
    .filter(word => word.word !== correctAnswer)
    .map(word => word.word)
  shuffleArray(incorrectOptions)
  while (opts.length < 4 && incorrectOptions.length > 0) {
    opts.push(incorrectOptions.pop())
  }
  return shuffleArray(opts)
}

function startTimer() {
  const initialTime = timeLeft.value * 1000
  let remainingTime = initialTime

  timer = setInterval(() => {
    remainingTime -= 10

    timerDisplay.value = (remainingTime / 1000).toFixed(0)

    if (remainingTime <= 0) {
      clearInterval(timer)
      selectOption(null)
      optionsDisabled.value = true
      showNextButton.value = true
    }
  }, 10)
}

function showQuestion() {
  clearInterval(timer)
  if (currentQuestionIndex.value >= selectedQuestions.value.length) {
    alert('Você completou o quiz!')
    resetQuiz()
    return
  }
  optionsDisabled.value = false
  showNextButton.value = false
  buttonColors.value = []
  if (currentQuestion.value) {
    options.value = generateOptions(currentQuestion.value.word)
    buttonColors.value = options.value.map(() => '')
    timeLeft.value = 7
    timerDisplay.value = '7.00'
    startTimer()
  }
}

function selectOption(selectedOption, btnIndex = null) {
  clearInterval(timer)
  if (!currentQuestion.value) return

  const correctAnswer = currentQuestion.value.word

  if (selectedOption !== null) {
    if (selectedOption === correctAnswer && btnIndex !== null) {
      buttonColors.value[btnIndex] = '#2ecc71'
    } else if (btnIndex !== null) {
      buttonColors.value[btnIndex] = '#e74c3c'
    }
  }
  options.value.forEach((opt, index) => {
    if (opt === correctAnswer) {
      buttonColors.value[index] = '#2ecc71'
    }
  })

  optionsDisabled.value = true
  showNextButton.value = true
}

function nextQuestion() {
  currentQuestionIndex.value++
  timeLeft.value = 7
  showQuestion()
}

function startQuiz() {
  currentQuestionIndex.value = 0
  const quizWords = wordStore.getQuizWords(10)
  if (quizWords.length === 0) {
    alert('Nenhuma questão encontrada com os critérios selecionados.')
    quizVisible.value = false
    return
  }
  selectedQuestions.value = quizWords
  quizVisible.value = true
  timeLeft.value = 7
  showQuestion()
}

function resetQuiz() {
  clearInterval(timer)
  quizVisible.value = false
  startQuiz()
}

onMounted(() => {
  startQuiz()
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
#quiz-container {
  max-width: 600px;
  margin: 0 auto;
}

#timer {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--accent-color);
}

#question {
  font-size: 24px;
  margin-bottom: 20px;
}

#options {
  list-style-type: none;
  padding: 0;
}

#options li {
  margin-bottom: 10px;
}

#options button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
}

#options button:hover {
  background-color: #2980b9;
}

#next-button {
  padding: 20px;
  font-size: 16px;
  margin-top: 20px;
  background-color: rebeccapurple;
  color: white;
  border: none;
  cursor: pointer;
  margin: auto;
  border-radius: 5px;
}

#next-button:hover {
  background-color: #2ecc71;
}

.quiz header,
.quiz footer {
  text-align: center;
  padding: 1rem;
}

.quiz footer {
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
}
</style>
