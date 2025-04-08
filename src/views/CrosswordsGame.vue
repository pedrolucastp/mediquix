<template>
  <div class="crosswords-game">
    <h1>Palavras Cruzadas</h1>
    <SelectorsComponent @specialty-change="startGame" @difficulty-change="startGame" />


    <div id="crossword-container">
      <div id="crossword" :style="gridStyle">
        <template v-for="row in gridRows" :key="row">
          <div v-for="col in gridCols" :key="`${row}-${col}`" class="cell" :class="{ empty: !getCell(row, col) }">
            <template v-if="getCell(row, col)">
              <span v-if="isStartingCell(row, col)" class="clue-number">
                {{ getWordNumber(row, col) }}
              </span>
              <input :id="`cell-${row}-${col}`" :ref="el => cellRefs[`${row}-${col}`] = el" maxLength="1"
                :data-row="row" :data-col="col" :data-correct="getCell(row, col)" :data-words="getCellWords(row, col)"
                :style="{ backgroundColor: getCellColor(row, col) }" :class="{
                  'highlighted': isHighlighted(row, col),
                  'highlighted-intersection': isIntersectionHighlighted(row, col)
                }" @input="handleInput" @keydown="handleKeyDown" @click="handleCellClick(row, col)" />

            </template>
          </div>
        </template>
      </div>

      <div id="clues">
       
        <!-- <h2>Dicas</h2> -->
        <ul id="clue-list">
          <li v-for="word in placedWords" :key="word.number" :class="{ 'highlighted': isClueHighlighted(word.number) }"
            @click="highlightWord(word)" :style="{ color: word.color }" alt="{{ word.word }}">
            {{ word.number }}. {{ word.clue }}
            ({{ word.direction === 'across' ? 'Horizontal' : 'Vertical' }})
          </li>
        </ul>
      </div>
      
    </div>
    <div class="button-container">
          <button id="check-button" @click="checkAnswers">Verificar Respostas</button>
          <button id="new-game-button" @click="startGame">Novo Jogo</button>
        </div>

    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-message">
        <p>Gerando palavras cruzadas...</p>
        <p>Tentativa {{ currentAttempt }} de {{ maxAttempts }}</p>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { useVocabularyStore } from '@/store/vocabularyStore'
import SelectorsComponent from '@/components/SelectorsComponent.vue'

// Constants
const GRID_ROWS = 25
const GRID_COLS = 30
const WORD_COLORS = [
  '#FF6B6B', // coral red
  '#4ECDC4', // turquoise
  '#45B7D1', // sky blue
  '#96CEB4', // sage green
  '#ff24c0', // pink
  '#D4A5A5', // dusty rose
  '#9B97B2', // muted purple
  '#FFB347', // pastel orange
  '#87CEEB', // light blue
  '#98FB98'  // pale green
]
const PLACEMENT_DELAY = 20; // 500ms delay between attempts
const GRID_CENTER_ROW = Math.floor(GRID_ROWS / 2)
const GRID_CENTER_COL = Math.floor(GRID_COLS / 2)

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
const isLoading = ref(false)
const currentAttempt = ref(1)
const maxAttempts = ref(10)

// Stores
const vocabularyStore = useVocabularyStore()

// Computed
const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${GRID_COLS}, 30px)`,
  gridTemplateRows: `repeat(${GRID_ROWS}, 30px)`
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

function getCellColor(row, col) {
  const cellWords = placedWords.value.filter(word => {
    return word.positions.some(pos => pos.row === row && pos.col === col)
  })
  return cellWords.length > 0 ? cellWords[0].color + '90' : 'transparent' // Adding 40 for 25% opacity
}

function isStartingCell(row, col) {
  return placedWords.value.some(word => {
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

function normalizeString(str) {
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim()
}

function handleInput(event) {
  const input = event.target
  const cellWords = JSON.parse(input.dataset.words || '[]')

  // Set direction and highlight word if needed
  if (cellWords && cellWords.length > 0 && (!currentWord.value || !isInputPartOfCurrentWord(input))) {
    currentWord.value = cellWords[0]
    currentDirection.value = cellWords[0].direction
    const word = placedWords.value.find(w => w.number === cellWords[0].wordNumber)
    if (word) {
      highlightWord(word)
    }
  }

  // Update value and move to next cell
  input.value = input.value.slice(-1).toUpperCase()
  input.select() // Select the text for easy overwriting
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
  if (!currentWord.value || !currentDirection.value) return false;

  const cellWords = JSON.parse(input.dataset.words || '[]')
  if (!cellWords || cellWords.length === 0) return false;

  // Check if any word in this cell matches our current direction and is part of our path
  const currentWordObj = placedWords.value.find(w => w.number === currentWord.value.wordNumber);
  if (!currentWordObj) return false;

  // Get the input's position
  const row = parseInt(input.dataset.row);
  const col = parseInt(input.dataset.col);

  // Check if this position is part of our current word's path
  if (currentDirection.value === 'across') {
    return row === currentWordObj.row &&
      col >= currentWordObj.col &&
      col < currentWordObj.col + currentWordObj.word.length;
  } else {
    return col === currentWordObj.col &&
      row >= currentWordObj.row &&
      row < currentWordObj.row + currentWordObj.word.length;
  }
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
      input.value = input.dataset.correct // Show correct letter
      input.style.color = '#FF0000' // Make incorrect answers red
      allCorrect = false
    }
  }

  if (allCorrect) {
    alert('Parabéns! Você completou o nível com sucesso.')
    currentLevel.value++
    startGame()
  } else {
    console.log('Existem erros em suas respostas. As respostas corretas estão em vermelho.')
  }
}

function initializeGrid() {
  // Clear the grid array
  grid.value = []
  for (let i = 0; i < GRID_ROWS; i++) {
    grid.value.push(new Array(GRID_COLS).fill(null))
  }

  // Clear all input values and styling
  for (const key in cellRefs) {
    const input = cellRefs[key]
    if (input) {
      input.value = ''
      input.style.backgroundColor = 'transparent'
      input.style.color = 'var(--text-color)'
    }
  }

  // Clear placed words and highlights
  placedWords.value = []
  clearHighlights()

  // Reset any game state
  currentWord.value = null
  currentDirection.value = 'across'
}

function getWordsForLevel(level) {
  return vocabularyStore.filteredWords;
}

function placeWord(word, row, col, direction) {
  let positions = []

  if (!grid.value || !Array.isArray(grid.value)) {
    console.error('Grid is not properly initialized');
    return positions;
  }

  if (direction === 'across') {
    if (row < 0 || row >= GRID_ROWS || col < 0 || col + word.length > GRID_COLS) {
      console.error('Word placement out of bounds');
      return positions;
    }
    if (!grid.value[row]) {
      console.error(`Row ${row} does not exist in grid`);
      return positions;
    }
    for (let i = 0; i < word.length; i++) {
      if (grid.value[row][col + i] === undefined) {
        console.error(`Invalid cell at row ${row}, col ${col + i}`);
        continue;
      }
      grid.value[row][col + i] = word[i]
      positions.push({ row: row, col: col + i })
    }
  } else if (direction === 'down') {
    if (row < 0 || row + word.length > GRID_ROWS || col < 0 || col >= GRID_COLS) {
      console.error('Word placement out of bounds');
      return positions;
    }
    for (let i = 0; i < word.length; i++) {
      if (!grid.value[row + i]) {
        console.error(`Row ${row + i} does not exist in grid`);
        continue;
      }
      if (grid.value[row + i][col] === undefined) {
        console.error(`Invalid cell at row ${row + i}, col ${col}`);
        continue;
      }
      grid.value[row + i][col] = word[i]
      positions.push({ row: row + i, col: col })
    }
  }
  return positions
}

function canPlaceWord(word, row, col, direction) {
  if (direction === 'across') {
    if (col < 0 || col + word.length > GRID_COLS || row < 0 || row >= GRID_ROWS) return false;

    let hasIntersection = false;
    for (let i = 0; i < word.length; i++) {
      const currentCell = grid.value[row][col + i];
      if (currentCell) {
        if (currentCell !== word[i]) return false;
        hasIntersection = true;
      }

      const above = row > 0 ? grid.value[row - 1][col + i] : null;
      const below = row < GRID_ROWS - 1 ? grid.value[row + 1][col + i] : null;

      if ((above && !isPartOfWord(row - 1, col + i)) ||
        (below && !isPartOfWord(row + 1, col + i))) {
        return false;
      }
    }

    const before = col > 0 ? grid.value[row][col - 1] : null;
    const after = col + word.length < GRID_COLS ? grid.value[row][col + word.length] : null;
    if (before || after) return false;

    return placedWords.value.length === 0 || hasIntersection;

  } else if (direction === 'down') {
    if (row < 0 || row + word.length > GRID_ROWS || col < 0 || col >= GRID_COLS) return false;

    let hasIntersection = false;
    for (let i = 0; i < word.length; i++) {
      const currentCell = grid.value[row + i][col];
      if (currentCell) {
        if (currentCell !== word[i]) return false;
        hasIntersection = true;
      }

      const left = col > 0 ? grid.value[row + i][col - 1] : null;
      const right = col < GRID_COLS - 1 ? grid.value[row + i][col + 1] : null;

      if ((left && !isPartOfWord(row + i, col - 1)) ||
        (right && !isPartOfWord(row + i, col + 1))) {
        return false;
      }
    }

    const above = row > 0 ? grid.value[row - 1][col] : null;
    const below = row + word.length < GRID_ROWS ? grid.value[row + word.length][col] : null;
    if (above || below) return false;

    return placedWords.value.length === 0 || hasIntersection;
  }
  return false;
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

function findWordWithCommonCharacters(previousWord, availableWords) {
  const prevWordChars = new Set(previousWord.split(''));

  const wordsWithCommon = availableWords.filter(wordObj => {
    const wordChars = new Set(wordObj.word.split(''));
    for (const char of wordChars) {
      if (prevWordChars.has(char)) {
        return true;
      }
    }
    return false;
  });

  if (wordsWithCommon.length === 0) {
    return null;
  }

  return wordsWithCommon[Math.floor(Math.random() * wordsWithCommon.length)];
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function visualizePlacement(word, row, col, direction, temp = true) {
  const positions = [];
  if (direction === 'across') {
    for (let i = 0; i < word.length; i++) {
      if (grid.value[row][col + i] === null) {
        grid.value[row][col + i] = temp ? '?' : word[i];
        positions.push({ row, col: col + i });
      }
    }
  } else {
    for (let i = 0; i < word.length; i++) {
      if (grid.value[row + i][col] === null) {
        grid.value[row + i][col] = temp ? '?' : word[i];
        positions.push({ row: row + i, col });
      }
    }
  }

  if (temp) {
    await sleep(PLACEMENT_DELAY);
    positions.forEach(pos => {
      if (grid.value[pos.row][pos.col] === '?') {
        grid.value[pos.row][pos.col] = null;
      }
    });
  }
  return positions;
}

function countIntersections(word, row, col, direction) {
  let intersections = 0;

  if (direction === 'across') {
    for (let i = 0; i < word.length; i++) {
      if (grid.value[row][col + i] !== null && grid.value[row][col + i] === word[i]) {
        intersections++;
      }
    }
  } else {
    for (let i = 0; i < word.length; i++) {
      if (grid.value[row + i][col] !== null && grid.value[row + i][col] === word[i]) {
        intersections++;
      }
    }
  }

  return intersections;
}

function findAllPossiblePositions(word, direction) {
  const positions = [];

  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      if (canPlaceWord(word, row, col, direction)) {
        const intersections = countIntersections(word, row, col, direction);
        positions.push({
          row,
          col,
          direction,
          intersections
        });
      }
    }
  }

  // Sort by number of intersections in descending order
  positions.sort((a, b) => b.intersections - a.intersections);

  return positions;
}

async function placeRemainingWords(availableWords) {

  while (placedWords.value.length < 10) {
    let placed = false;
    const triedIndices = new Set();

    // Keep trying random words until we place one or exhaust all options
    while (!placed && triedIndices.size < availableWords.length) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * availableWords.length);
      } while (triedIndices.has(randomIndex));

      triedIndices.add(randomIndex);
      const word = availableWords[randomIndex];
      const allPossiblePositions = [];

      // Find all possible positions in both directions
      for (const direction of ['across', 'down']) {
        const positionsInDirection = await findAllPossiblePositions(word.word, direction);
        allPossiblePositions.push(...positionsInDirection);
      }

      // If we found valid positions
      if (allPossiblePositions.length > 0) {
        // Sort by intersections
        allPossiblePositions.sort((a, b) => b.intersections - a.intersections);

        // Take top 3 positions when available
        const topPositions = allPossiblePositions.slice(0, Math.min(3, allPossiblePositions.length));

        // Randomly select from top positions
        const selectedPosition = topPositions[Math.floor(Math.random() * topPositions.length)];

        // Visualize the attempt
        await visualizePlacement(word.word, selectedPosition.row, selectedPosition.col, selectedPosition.direction, true);

        // Place the word
        const positions = await visualizePlacement(word.word, selectedPosition.row, selectedPosition.col, selectedPosition.direction, false);

        if (positions.length > 0) {
          placedWords.value.push({
            word: word.word,
            clue: word.clue,
            row: selectedPosition.row,
            col: selectedPosition.col,
            direction: selectedPosition.direction,
            positions: positions,
            number: placedWords.value.length + 1,
            color: WORD_COLORS[placedWords.value.length]
          });
          availableWords.splice(randomIndex, 1);
          placed = true;
          break;
        }
      }
    }

    if (!placed) {
      console.log('No more words can be placed with current configuration');
      return false;
    }
  }

  return placedWords.value.length === 10;
}

async function generateCrossword(words) {
  if (currentAttempt.value > maxAttempts.value) {
    console.log('Maximum attempts reached');
    return false;
  }

  console.log(`Attempt ${currentAttempt.value} of ${maxAttempts.value}`);
  initializeGrid();

  // Create a copy of words array to work with
  const availableWords = [...words];
  const triedIndices = new Set();

  // Try to place first word
  while (triedIndices.size < availableWords.length) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * availableWords.length);

    } while (triedIndices.has(randomIndex));

    triedIndices.add(randomIndex);
    const firstWord = availableWords[randomIndex];

    // Try to place the first word horizontally in the center
    const positions = await visualizePlacement(
      firstWord.word,
      GRID_CENTER_ROW,
      Math.floor(GRID_CENTER_COL - firstWord.word.length / 2),
      'across',
      false
    );

    if (positions.length > 0) {
      placedWords.value.push({
        word: firstWord.word,
        clue: firstWord.clue,
        row: GRID_CENTER_ROW,
        col: Math.floor(GRID_CENTER_COL - firstWord.word.length / 2),
        direction: 'across',
        positions: positions,
        number: 1,
        color: WORD_COLORS[0]
      });

      availableWords.splice(randomIndex, 1);

      // Try to place remaining words with the new strategy
      const success = await placeRemainingWords(availableWords);
      if (success) {
        return true;
      }
    }
  }

  currentAttempt.value++;
  return false;
}

async function startGame() {
  try {
    isLoading.value = true;
    currentAttempt.value = 1;
    const wordsForLevel = getWordsForLevel(currentLevel.value);
    const success = await generateCrossword(wordsForLevel);

    if (!success) {
      await startGame(); // Retry if unsuccessful
    }
  } catch (error) {
    console.error('Error generating crossword:', error);
    await startGame(); // Retry on error
  } finally {
    isLoading.value = false;
    clearHighlights();
  }
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
  max-width: 1400px;
  /* Increased max-width */
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 200px);
  /* Add minimum height */
}

#crossword {
  display: grid;
  gap: 0;
  margin: 0 auto;
  width: max-content;
  padding: 2rem;
  /* Increased padding */
  background: var(--surface-color, #fff);
  border-radius: var(--radius-md);
  /* Use design system variable */
  box-shadow: var(--shadow-md);
  /* Stronger shadow */
  overflow: auto;
  max-height: 80vh;
  /* Maximum height */
}

#clues {
  position: sticky;
  top: var(--spacing-md, 1rem);
  width: 350px;
  /* Slightly wider */
  flex-shrink: 0;
  padding: var(--spacing-md, 1rem);
  background: darkslategrey;
  /* Changed background color */
  border-radius: var(--radius-md, 8px);
  box-shadow: var(--shadow-sm);
  /* max-height: calc(100vh - 200px);
  overflow-y: auto; */
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--dark-border-color);
  /* background-color: var(--secondary-color); */
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
  border-radius: 0;
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
  width: 0;
}

/* #clues h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--text-color);
} */

#clue-list {
  list-style: none;
  padding: 0;
}

#clue-list li {
  margin-bottom: 10px;
  font-size: 1rem;
  text-align: left;
  color: var(--text-color);
  word-wrap: break-word;
}

#clue-list li.highlighted {
  background-color: var(--highlight-color, rgba(255, 255, 0, 0.3));
}

.button-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 20px;
}

#check-button,
#new-game-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#check-button:hover,
#new-game-button:hover {
  background-color: var(--accent-color);
}

@media (max-width: 480px) {
  .cell {
    width: 100%;
    height: 100%;
  }

  .cell input {
    font-size: 14px;
  }
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.loading-message {
  text-align: center;
  padding: 20px;
  background-color: var(--surface-color, #fff);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

:deep(.dark) .loading-overlay {
  background: rgba(0, 0, 0, 0.4);
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

/* :deep(.dark) #clues h2 {
  color: var(--dark-text-color);
} */

:deep(.dark) #clue-list li {
  color: var(--dark-text-color);
}

:deep(.dark) #clue-list li.highlighted {
  background-color: var(--dark-highlight-color, rgba(255, 255, 0, 0.3));
}
</style>