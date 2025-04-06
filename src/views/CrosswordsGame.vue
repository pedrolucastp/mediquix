<template>
  <div class="crosswords-game">
    <h1>Palavras Cruzadas</h1>
    <SelectorsComponent
      @specialty-change="startGame"
      @difficulty-change="startGame"
    />

    <div id="crossword-container">
      <div id="crossword" :style="gridStyle">
        <template v-for="row in gridRows" :key="row">
          <div
            v-for="col in gridCols"
            :key="`${row}-${col}`"
            class="cell"
            :class="{ empty: !getCell(row, col) }"
          >
            <template v-if="getCell(row, col)">
              <!-- <span v-if="isStartingCell(row, col)" class="clue-number">
                {{ getWordNumber(row, col) }}
              </span> -->
              <input
                :ref="el => cellRefs[`${row}-${col}`] = el"
                maxLength="1"
                :data-row="row"
                :data-col="col"
                :data-correct="getCell(row, col)"
                :data-words="getCellWords(row, col)"
                :class="{
                  'highlighted': isHighlighted(row, col),
                  'highlighted-intersection': isIntersectionHighlighted(row, col)
                }"
                @input="handleInput"
                @focus="handleInputFocus"
                @keydown="handleKeyDown"
                @click="handleCellClick(row, col)"
              />
              
            </template>
          </div>
        </template>
      </div>

      <div id="clues">
        <h2>Dicas</h2>
        <ul id="clue-list">
          <li
            v-for="word in placedWords"
            :key="word.number"
            :class="{ 'highlighted': isClueHighlighted(word.number) }"
            @click="highlightWord(word)"
          >
            {{ word.number }}. {{ word.clue }}
            ({{ word.direction === 'across' ? 'Horizontal' : 'Vertical' }})
          </li>
        </ul>
      </div>
    </div>
    
    <button id="check-button" @click="checkAnswers">Verificar Respostas</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
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
const highlightedCells = ref(new Set())
const highlightedIntersections = ref(new Set())
const highlightedClue = ref(null)
const cellRefs = reactive({})

// Stores
const vocabularyStore = useVocabularyStore()
const settingsStore = useSettingsStore()

// Computed
const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${GRID_COLS}, 40px)`,
  gridTemplateRows: `repeat(${GRID_ROWS}, 40px)`
}))

const gridRows = computed(() => Array.from({ length: GRID_ROWS }, (_, i) => i))
const gridCols = computed(() => Array.from({ length: GRID_COLS }, (_, i) => i))

// Methods
function getCell(row, col) {
  return grid.value[row]?.[col] || null
}

function getCellWords(row, col) {
  const cellWords = placedWords.value.filter(word => {
    return word.positions.some(pos => pos.row === row && pos.col === col)
  })
  return JSON.stringify(cellWords.map(word => ({
    wordNumber: word.number,
    direction: word.direction
  })))
}

function isStartingCell(row, col) {
  return placedWords.value.some(word => {
    // Check if this cell is the start of any word
    if (word.row === row && word.col === col) {
      return true;
    }
    return false;
  })
}

function getWordNumber(row, col) {
  const word = placedWords.value.find(w => w.row === row && w.col === col)
  return word?.number
}

function isHighlighted(row, col) {
  return highlightedCells.value.has(`${row}-${col}`)
}

function isIntersectionHighlighted(row, col) {
  return highlightedIntersections.value.has(`${row}-${col}`)
}

function isClueHighlighted(number) {
  return highlightedClue.value === number
}

function highlightWord(wordObj) {
  clearHighlights()
  
  // Only highlight the word cells
  wordObj.positions.forEach(pos => {
    highlightedCells.value.add(`${pos.row}-${pos.col}`)
  })
  
  highlightedClue.value = wordObj.number
}

function handleCellClick(row, col) {
  const cellWords = JSON.parse(getCellWords(row, col))
  if (cellWords.length > 0) {
    const word = placedWords.value.find(w => w.number === cellWords[0].wordNumber)
    if (word) {
      highlightWord(word)
    }
  }
}

function clearHighlights() {
  highlightedCells.value.clear()
  highlightedIntersections.value.clear()
  highlightedClue.value = null
}

// Game management functions
function normalizeString(str) {
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim()
}

function handleInputFocus(event) {
  const input = event.target
  const cellWords = JSON.parse(input.dataset.words || '[]')
  if (cellWords && cellWords.length > 0) {
    currentWord.value = cellWords[0]
    currentDirection.value = currentWord.value.direction
    
    // Highlight word when focusing input
    const word = placedWords.value.find(w => w.number === cellWords[0].wordNumber)
    if (word) {
      highlightWord(word)
    }
  }
}

function handleInput(event) {
  const input = event.target
  input.value = input.value.toUpperCase()
  
  // Allow accented characters but normalize for comparison
  const normalizedValue = normalizeString(input.value)
  const normalizedCorrect = normalizeString(input.dataset.correct)
  
  if (normalizedValue === normalizedCorrect) {
    input.style.backgroundColor = '#e6ffe6'
  } else {
    input.style.backgroundColor = 'transparent'
  }
  
  moveToNextInput(input)
}

function moveToNextInput(currentInput) {
  const currentRow = parseInt(currentInput.dataset.row)
  const currentCol = parseInt(currentInput.dataset.col)
  
  if (!currentWord.value || !currentDirection.value) return

  let nextRow = currentRow
  let nextCol = currentCol

  if (currentDirection.value === 'across') {
    nextCol++
  } else {
    nextRow++
  }

  const nextInput = cellRefs[`${nextRow}-${nextCol}`]
  if (nextInput && isInputPartOfCurrentWord(nextInput)) {
    nextInput.focus()
  }
}

function moveToPreviousInput(currentInput) {
  const currentRow = parseInt(currentInput.dataset.row)
  const currentCol = parseInt(currentInput.dataset.col)
  
  if (!currentWord.value || !currentDirection.value) return

  let prevRow = currentRow
  let prevCol = currentCol

  if (currentDirection.value === 'across') {
    prevCol--
  } else {
    prevRow--
  }

  const prevInput = cellRefs[`${prevRow}-${prevCol}`]
  if (prevInput && isInputPartOfCurrentWord(prevInput)) {
    prevInput.focus()
  }
}

function handleKeyDown(event) {
  const input = event.target
  if (event.key === 'Backspace' && !input.value) {
    moveToPreviousInput(input)
  }
}

function isInputPartOfCurrentWord(input) {
  const cellWords = JSON.parse(input.dataset.words || '[]')
  if (cellWords && currentWord.value) {
    return cellWords.some(
      word =>
        word.wordNumber === currentWord.value.wordNumber &&
        word.direction === currentWord.value.direction
    )
  }
  return false
}

function checkAnswers() {
  let allCorrect = true

  for (const key in cellRefs) {
    const input = cellRefs[key]
    const userInput = normalizeString(input.value || '')
    const correctInput = normalizeString(input.dataset.correct)
    if (userInput === correctInput) {
      input.style.backgroundColor = '#b2ffb2'
    } else {
      input.style.backgroundColor = '#ffb2b2'
      allCorrect = false
    }
  }

  if (allCorrect) {
    alert('Parabéns! Você completou o nível com sucesso.')
    currentLevel.value++
    startGame()
  } else {
    alert('Existem erros em suas respostas. Por favor, verifique e tente novamente.')
  }
}

function initializeGrid() {
  grid.value = []
  for (let i = 0; i < GRID_ROWS; i++) {
    grid.value.push(new Array(GRID_COLS).fill(null))
  }
  placedWords.value = []
}

function getWordsForLevel(level) {
  const wordsPerLevel = 10
  
  let filteredWords = vocabularyStore.words.filter(wordObj => wordObj.isActive)

  if (filteredWords.length < wordsPerLevel) {
    alert('Não há palavras suficientes para as configurações selecionadas. O jogo será reiniciado.')
    usedWordIndices.value = []
    currentLevel.value = 1
    return getWordsForLevel(currentLevel.value)
  }

  const wordsForLevel = []
  for (let i = 0; i < wordsPerLevel; i++) {
    const randomIndex = Math.floor(Math.random() * filteredWords.length)
    const wordObj = filteredWords.splice(randomIndex, 1)[0]
    wordsForLevel.push(wordObj)
  }

  return wordsForLevel
}

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

function startGame() {
  const wordsForLevel = getWordsForLevel(currentLevel.value)
  generateCrossword(wordsForLevel)
  clearHighlights()
}

// Initialization
onMounted(() => {
  startGame()
})
</script>

<style scoped>

#crossword-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-lg, 2rem);
  padding: var(--spacing-md, 1rem);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

#crossword {
  display: grid;
  gap: 0;
  margin: 0 auto;
  width: max-content;
  padding: 1rem;
  background: var(--surface-color, #fff);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  overflow: auto;
}

#clues {
  position: sticky;
  top: var(--spacing-md, 1rem);
  width: 300px;
  flex-shrink: 0;
  padding: var(--spacing-md, 1rem);
  background: var(--surface-color, #fff);
  border-radius: var(--radius-md, 8px);
  box-shadow: var(--shadow-sm);
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

@media (max-width: 768px) {
  #crossword-container {
    flex-direction: column;
    align-items: center;
  }

  #crossword {
    width: 100%;
    order: 2;
  }

  #clues {
    width: 100%;
    position: relative;
    top: 0;
    order: 1;
    max-height: none;
  }
}

.cell {
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  background-color: var(--secondary-color);
}

.empty {
  border: none;
  background-color: transparent;
}

.cell input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
  text-transform: uppercase;
  box-sizing: border-box;
}

.cell:hover {
  background-color: var(--hover-color, rgba(0, 0, 0, 0.05));
}

.cell input:focus {
  background-color: var(--focus-color, rgba(var(--primary-rgb, 46, 204, 113), 0.1));
}

.cell input.highlighted {
  background-color: var(--highlight-color, rgba(255, 255, 0, 0.3));
}

.cell input.highlighted-intersection {
  background-color: var(--intersection-highlight-color, rgba(0, 255, 255, 0.3));
}

.cell .clue-number {
  position: relative;
  top: -8px;
  left: 2px;
  font-size: var(--clue-number-size, 0.75rem);
  font-weight: bold;
  color: var(--text-color);
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

#clue-list li.highlighted {
  background-color: var(--highlight-color, rgba(255, 255, 0, 0.3));
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

@media (max-width: 480px) {
  .cell {
    width: 24px;
    height: 24px;
  }
  
  .cell input {
    font-size: 14px;
  }
}

:deep(.dark) .cell {
  border-color: var(--dark-border-color);
}

:deep(.dark) .cell:hover {
  background-color: var(--dark-hover-color, rgba(255, 255, 255, 0.1));
}

:deep(.dark) .cell input {
  color: var(--dark-text-color);
}

:deep(.dark) .cell input:focus {
  background-color: var(--dark-focus-color, rgba(var(--dark-primary-rgb, 46, 204, 113), 0.2));
}

:deep(.dark) .cell input.highlighted {
  background-color: var(--dark-highlight-color, rgba(255, 255, 0, 0.3));
}

:deep(.dark) .cell input.highlighted-intersection {
  background-color: var(--dark-intersection-highlight-color, rgba(0, 255, 255, 0.3));
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

:deep(.dark) #clue-list li.highlighted {
  background-color: var(--dark-highlight-color, rgba(255, 255, 0, 0.3));
}
</style>