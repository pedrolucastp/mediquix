<template>
  <div class="crosswords-game">
    <h1>Palavras Cruzadas</h1>
    <SelectorsComponent
      @specialty-change="startGame"
      @difficulty-change="startGame"
    />

    <div id="crossword-container">
      <div id="crossword"></div>
      <div id="clues">
        <h2>Dicas</h2>
        <ul id="clue-list"></ul>
      </div>
    </div>
    
    <button id="check-button" @click="checkAnswers">Verificar Respostas</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useVocabularyStore } from '@/store/vocabularyStore'
import { useSettingsStore } from '@/store/userSettings'
import SelectorsComponent from '@/components/SelectorsComponent.vue'

// Constants
const GRID_ROWS = 15
const GRID_COLS = 15

// Refs
const currentLevel = ref(1)
const usedWordIndices = ref([])
const grid = ref([])
const placedWords = ref([])
const currentWord = ref(null)
const currentDirection = ref('across')

// Stores
const vocabularyStore = useVocabularyStore()
const settingsStore = useSettingsStore()

// Functions from the original code, adapted for Vue
function initializeGrid() {
  grid.value = []
  for (let i = 0; i < GRID_ROWS; i++) {
    grid.value.push(new Array(GRID_COLS).fill(null))
  }
  placedWords.value = []
}

function getWordsForLevel(level) {
  const wordsPerLevel = 4
  
  // Filter words based on active settings
  let filteredWords = vocabularyStore.words.filter(wordObj => wordObj.isActive)

  // If not enough words, reset and notify
  if (filteredWords.length < wordsPerLevel) {
    alert('Não há palavras suficientes para as configurações selecionadas. O jogo será reiniciado.')
    usedWordIndices.value = []
    currentLevel.value = 1
    return getWordsForLevel(currentLevel.value)
  }

  // Select random words that haven't been used
  const wordsForLevel = []
  for (let i = 0; i < wordsPerLevel; i++) {
    const randomIndex = Math.floor(Math.random() * filteredWords.length)
    const wordObj = filteredWords.splice(randomIndex, 1)[0]
    wordsForLevel.push(wordObj)
  }

  return wordsForLevel
}

// Rest of the original functions, adapted for Vue reactivity
function generateCrossword(wordList) {
  initializeGrid()

  const sortedWords = [...wordList].sort((a, b) => b.word.length - a.word.length)

  // Place first word in center horizontally
  const firstWord = sortedWords[0]
  const startRow = Math.floor(GRID_ROWS / 2)
  const startCol = Math.floor((GRID_COLS - firstWord.word.length) / 2)

  const positions = placeWord(firstWord.word, startRow, startCol, 'across')
  placedWords.value.push({
    word: firstWord.word,
    clue: firstWord.clue,
    row: startRow,
    col: startCol,
    direction: 'across',
    number: 1,
    positions: positions
  })

  let wordNumber = 2

  for (let i = 1; i < sortedWords.length; i++) {
    const wordObj = sortedWords[i]
    const placed = tryPlaceWord(wordObj.word)
    if (placed) {
      const positions = placeWord(wordObj.word, placed.row, placed.col, placed.direction)
      placedWords.value.push({
        word: wordObj.word,
        clue: wordObj.clue,
        row: placed.row,
        col: placed.col,
        direction: placed.direction,
        number: wordNumber,
        positions: positions
      })
      wordNumber++
    }
  }
}

// Implement all the helper functions from the original code
function placeWord(word, row, col, direction) {
  let positions = []
  if (direction === 'across') {
    for (let i = 0; i < word.length; i++) {
      grid.value[row][col + i] = word[i]
      positions.push({ row: row, col: col + i })
    }
  } else if (direction === 'down') {
    for (let i = 0; i < word.length; i++) {
      grid.value[row + i][col] = word[i]
      positions.push({ row: row + i, col: col })
    }
  }
  return positions
}

function tryPlaceWord(word) {
  for (let existingWord of placedWords.value) {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      const positions = getLetterPositions(existingWord.word, letter)
      for (let pos of positions) {
        const crossRow = existingWord.row + (existingWord.direction === 'down' ? pos : 0)
        const crossCol = existingWord.col + (existingWord.direction === 'across' ? pos : 0)

        const startRow = crossRow - (existingWord.direction === 'down' ? 0 : i)
        const startCol = crossCol - (existingWord.direction === 'across' ? 0 : i)
        const direction = existingWord.direction === 'across' ? 'down' : 'across'

        if (canPlaceWord(word, startRow, startCol, direction)) {
          return { row: startRow, col: startCol, direction: direction }
        }
      }
    }
  }
  return null
}

function getLetterPositions(word, letter) {
  const positions = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      positions.push(i)
    }
  }
  return positions
}

function canPlaceWord(word, row, col, direction) {
  if (direction === 'across') {
    if (col < 0 || col + word.length > GRID_COLS || row < 0 || row >= GRID_ROWS) return false

    for (let i = 0; i < word.length; i++) {
      const currentCell = grid.value[row][col + i]
      if (currentCell && currentCell !== word[i]) return false
      
      if (row > 0 && grid.value[row - 1][col + i] && !isPartOfWord(row - 1, col + i)) return false
      if (row < GRID_ROWS - 1 && grid.value[row + 1][col + i] && !isPartOfWord(row + 1, col + i)) return false
    }

    if (col > 0 && grid.value[row][col - 1]) return false
    if (col + word.length < GRID_COLS && grid.value[row][col + word.length]) return false
  } else if (direction === 'down') {
    if (row < 0 || row + word.length > GRID_ROWS || col < 0 || col >= GRID_COLS) return false

    for (let i = 0; i < word.length; i++) {
      const currentCell = grid.value[row + i][col]
      if (currentCell && currentCell !== word[i]) return false
      
      if (col > 0 && grid.value[row + i][col - 1] && !isPartOfWord(row + i, col - 1)) return false
      if (col < GRID_COLS - 1 && grid.value[row + i][col + 1] && !isPartOfWord(row + i, col + 1)) return false
    }

    if (row > 0 && grid.value[row - 1][col]) return false
    if (row + word.length < GRID_ROWS && grid.value[row + word.length][col]) return false
  }
  return true
}

function isPartOfWord(row, col) {
  return placedWords.value.some(wordObj => {
    if (wordObj.direction === 'across') {
      return row === wordObj.row && col >= wordObj.col && col < wordObj.col + wordObj.word.length
    } else if (wordObj.direction === 'down') {
      return col === wordObj.col && row >= wordObj.row && row < wordObj.row + wordObj.word.length
    }
    return false
  })
}

function createCrossword() {
  const crossword = document.getElementById('crossword')
  crossword.innerHTML = ''

  let minRow = GRID_ROWS, maxRow = 0, minCol = GRID_COLS, maxCol = 0
  for (let i = 0; i < GRID_ROWS; i++) {
    for (let j = 0; j < GRID_COLS; j++) {
      if (grid.value[i][j]) {
        if (i < minRow) minRow = i
        if (i > maxRow) maxRow = i
        if (j < minCol) minCol = j
        if (j > maxCol) maxCol = j
      }
    }
  }

  let cellMap = {}
  placedWords.value.forEach(wordObj => {
    wordObj.positions.forEach(pos => {
      const key = `${pos.row},${pos.col}`
      if (!cellMap[key]) cellMap[key] = []
      cellMap[key].push({
        wordNumber: wordObj.number,
        direction: wordObj.direction,
        word: wordObj.word
      })
    })
  })

  for (let i = minRow; i <= maxRow; i++) {
    for (let j = minCol; j <= maxCol; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      if (grid.value[i][j]) {
        const input = document.createElement('input')
        input.maxLength = 1
        input.dataset.row = i
        input.dataset.col = j
        input.dataset.correct = grid.value[i][j]

        const key = `${i},${j}`
        const cellWords = cellMap[key]
        if (cellWords) {
          input.dataset.words = JSON.stringify(cellWords)
        }

        cell.appendChild(input)

        const wordAtPosition = placedWords.value.find(
          wordObj => wordObj.positions[0].row === i && wordObj.positions[0].col === j
        )
        if (wordAtPosition) {
          const clueNumber = document.createElement('span')
          clueNumber.classList.add('clue-number')
          clueNumber.textContent = wordAtPosition.number
          cell.appendChild(clueNumber)
        }
      } else {
        cell.style.borderColor = 'white'
      }
      crossword.appendChild(cell)
    }
  }

  crossword.style.gridTemplateColumns = `repeat(${maxCol - minCol + 1}, 30px)`
  crossword.style.gridTemplateRows = `repeat(${maxRow - minRow + 1}, 30px)`

  const clueList = document.getElementById('clue-list')
  clueList.innerHTML = ''
  for (let wordObj of placedWords.value) {
    const listItem = document.createElement('li')
    listItem.textContent = `${wordObj.number}. ${wordObj.clue} (${wordObj.direction === 'across' ? 'Horizontal' : 'Vertical'})`
    listItem.title = wordObj.word
    clueList.appendChild(listItem)
  }

  // Add events to inputs
  const inputs = crossword.querySelectorAll('input')
  inputs.forEach(input => {
    input.addEventListener('focus', handleInputFocus)
    input.addEventListener('input', handleInput)
    input.addEventListener('keydown', handleKeyDown)
  })
}

function handleInputFocus(event) {
  const input = event.target
  const cellWords = JSON.parse(input.dataset.words)
  if (cellWords && cellWords.length > 0) {
    currentWord.value = cellWords[0]
    currentDirection.value = currentWord.value.direction
  }
}

function handleInput(event) {
  const input = event.target
  input.value = input.value.toUpperCase()
  moveToNextInput(input)
}

function moveToNextInput(currentInput) {
  const currentRow = parseInt(currentInput.dataset.row)
  const currentCol = parseInt(currentInput.dataset.col)

  let nextRow = currentRow
  let nextCol = currentCol

  while (true) {
    if (currentDirection.value === 'across') {
      nextCol += 1
    } else if (currentDirection.value === 'down') {
      nextRow += 1
    } else {
      break
    }

    const nextInput = document.querySelector(
      `input[data-row='${nextRow}'][data-col='${nextCol}']`
    )

    if (!nextInput) {
      break
    }

    if (isInputPartOfCurrentWord(nextInput)) {
      nextInput.focus()
      break
    }
  }
}

function isInputPartOfCurrentWord(input) {
  const cellWords = JSON.parse(input.dataset.words)
  if (cellWords) {
    return cellWords.some(
      word =>
        word.wordNumber === currentWord.value.wordNumber &&
        word.direction === currentWord.value.direction
    )
  }
  return false
}

function handleKeyDown(event) {
  const input = event.target
  if (event.key === 'Backspace' && !input.value) {
    moveToPreviousInput(input)
  }
}

function moveToPreviousInput(currentInput) {
  const currentRow = parseInt(currentInput.dataset.row)
  const currentCol = parseInt(currentInput.dataset.col)

  let prevRow = currentRow
  let prevCol = currentCol

  while (true) {
    if (currentDirection.value === 'across') {
      prevCol -= 1
    } else if (currentDirection.value === 'down') {
      prevRow -= 1
    } else {
      break
    }

    const prevInput = document.querySelector(
      `input[data-row='${prevRow}'][data-col='${prevCol}']`
    )

    if (!prevInput) {
      break
    }

    if (isInputPartOfCurrentWord(prevInput)) {
      prevInput.focus()
      break
    }
  }
}

function checkAnswers() {
  const inputs = document.querySelectorAll('input')
  let allCorrect = true

  inputs.forEach(input => {
    const userInput = input.value.toUpperCase()
    const correctInput = input.dataset.correct.toUpperCase()
    if (userInput === correctInput) {
      input.style.backgroundColor = '#b2ffb2'
    } else {
      input.style.backgroundColor = '#ffb2b2'
      allCorrect = false
    }
  })

  if (allCorrect) {
    alert('Parabéns! Você completou o nível com sucesso.')
    currentLevel.value++
    startGame()
  } else {
    alert('Existem erros em suas respostas. Por favor, verifique e tente novamente.')
  }
}

function startGame() {
  const wordsForLevel = getWordsForLevel(currentLevel.value)
  generateCrossword(wordsForLevel)
  createCrossword()
}

// Lifecycle hooks
onMounted(() => {
  startGame()
})
</script>

<style scoped>
#crossword-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

#crossword {
  display: grid;
  margin: 20px;
  width: max-content;
}

.cell {
  border: 1px solid var(--border-color);
  width: 30px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  position: relative;
}

.cell input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--text-color);
}

.cell .clue-number {
  position: absolute;
  top: 0;
  left: 2px;
  font-size: 10px;
  font-weight: bold;
  color: var(--text-color);
}

#clues {
  max-width: 300px;
  text-align: left;
}

#clues h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--text-color);
}

#clue-list {
  list-style: none;
  padding: 0;
}

#clue-list li {
  margin-bottom: 10px;
  font-size: 1rem;
  text-align: left;
  color: var(--text-color);
}

#check-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#check-button:hover {
  background-color: var(--accent-color);
}

@media (max-width: 768px) {
  #crossword-container {
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }

  #clues {
    text-align: center;
    width: 100%;
  }

  #crossword {
    margin: 10px;
    width: 100%;
    padding: 20px;
    overflow: auto;
  }
}

:deep(.dark) .cell {
  border-color: var(--dark-border-color);
}

:deep(.dark) .cell input {
  color: var(--dark-text-color);
}

:deep(.dark) .cell .clue-number {
  color: var(--dark-text-color);
}

:deep(.dark) #clues h2 {
  color: var(--dark-text-color);
}

:deep(.dark) #clue-list li {
  color: var(--dark-text-color);
}
</style>