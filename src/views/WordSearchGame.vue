<template>
  <div class="word-search-game">


    <div class="game-container">
      <div class="word-search-game-panel">
        <h1>Caça Palavras</h1>

        <SelectorsComponent @specialty-change="createGame" @difficulty-change="createGame" />

        <div class="grid-controls">
          <div class="control-group">
            <label>Largura:</label>
            <input type="number" :value="gridWidth" min="5" max="40" @change="handleGridWidthChange" />
          </div>
          <div class="control-group">
            <label>Altura:</label>
            <input type="number" :value="gridHeight" min="8" max="20" @change="handleGridHeightChange" />
          </div>
          <div class="control-group">
            <label>Tamanho da célula:</label>
            <input type="number" :value="cellSize" min="20" max="40" step="2" @change="handleCellSizeChange" />
          </div>
        </div>

        <ul class="word-list">
          <li v-for="wordObj in gameWords" :key="wordObj.word" :title="wordObj.word"
            :class="{ found: foundWords.includes(wordObj.word.toUpperCase()) }">
            <span>{{ wordObj.clue }}</span>
          </li>
        </ul>

      </div>
      
      <div class="game-grid-container">
        <div class="game-grid" ref="gameGrid" :style="gridStyle">
          <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="grid-row">
            <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell" :class="{
              selected: isCellSelected(rowIndex, colIndex),
              found: isCellFound(rowIndex, colIndex),
            }" @click="handleCellClick(rowIndex, colIndex)">
              {{ cell }}
            </div>
          </div>
        </div>
      </div>

     
    </div>

    <p class="status">{{ statusMessage }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useVocabularyStore } from "@/store/vocabulary";
import { useSettingsStore } from "@/store/settings";
import SelectorsComponent from "@/components/SelectorsComponent.vue";

const settingsStore = useSettingsStore();
const vocabularyStore = useVocabularyStore();

// Use settings from the store
const cellSize = computed(() => settingsStore.settings.wordSearchGame.cellSize);
const gridWidth = computed(() => settingsStore.settings.wordSearchGame.gridWidth);
const gridHeight = computed(() => settingsStore.settings.wordSearchGame.gridHeight);

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${gridWidth.value}, ${cellSize.value}px)`,
  gridTemplateRows: `repeat(${gridHeight.value}, ${cellSize.value}px)`,
  "--cell-size": `${cellSize.value}px`,
}));

// Grid size control handlers
function handleGridWidthChange(e) {
  const width = parseInt(e.target.value);
  if (width >= 10 && width <= 40) {
    settingsStore.setWordSearchGridSize(width, gridHeight.value, cellSize.value);
    createGame();
  }
}

function handleGridHeightChange(e) {
  const height = parseInt(e.target.value);
  if (height >= 8 && height <= 20) {
    settingsStore.setWordSearchGridSize(gridWidth.value, height, cellSize.value);
    createGame();
  }
}

function handleCellSizeChange(e) {
  const size = parseInt(e.target.value);
  if (size >= 20 && size <= 40) {
    settingsStore.setWordSearchGridSize(gridWidth.value, gridHeight.value, size);
  }
}

const gameGrid = ref(null);
const grid = ref([]);
const gameWords = ref([]);
const foundWords = ref([]);
const score = ref(0);
const statusMessage = ref("");
const selectedCells = ref([]);

function createGame() {
  score.value = 0;
  statusMessage.value = "";
  selectedCells.value = [];
  foundWords.value = [];
  foundCells = reactive({});

  let filteredWords = vocabularyStore.words.filter(
    (wordObj) => wordObj.isActive
  );
  filteredWords = filteredWords.filter(
    (wordObj) =>
      wordObj.word.length <= gridWidth.value &&
      wordObj.word.length <= gridHeight.value
  );

  if (filteredWords.length < 10) {
    alert(
      "Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros ou adicione mais palavras que caibam na grade."
    );
    return;
  }

  const uniqueWords = Array.from(
    new Set(filteredWords.map((wordObj) => wordObj.word.toUpperCase()))
  );
  if (uniqueWords.length < 10) {
    alert(
      "Não há palavras únicas suficientes para iniciar o jogo. Por favor, ajuste os filtros ou adicione mais palavras."
    );
    return;
  }

  // Initialize grid with empty strings
  grid.value = Array.from({ length: gridHeight.value }, () =>
    Array(gridWidth.value).fill("")
  );

  // Select and shuffle words
  uniqueWords.sort(() => 0.5 - Math.random());
  const selectedUnique = uniqueWords.slice(0, 10);
  gameWords.value = selectedUnique.map((word) =>
    filteredWords.find((wordObj) => wordObj.word.toUpperCase() === word)
  );

  // Place words and fill empty cells
  let allWordsPlaced = gameWords.value.every((wordObj) => {
    return placeWordInGrid(wordObj.word.toUpperCase());
  });

  if (!allWordsPlaced) {
    // If not all words could be placed, try again
    createGame();
    return;
  }

  fillEmptyCells();
}

function placeWordInGrid(word) {
  const directions = ["horizontal", "vertical", "diagonal-down", "diagonal-up"];
  const possibleDirections = directions.filter((direction) => {
    const needsWidth = ["horizontal", "diagonal-down", "diagonal-up"].includes(direction);
    const needsHeight = ["vertical", "diagonal-down"].includes(direction);
    const needsInverseHeight = direction === "diagonal-up";

    if (needsWidth && word.length > gridWidth.value) return false;
    if (needsHeight && word.length > gridHeight.value) return false;
    if (needsInverseHeight && word.length > gridHeight.value) return false;
    return true;
  });

  if (possibleDirections.length === 0) {
    console.error(`A palavra "${word}" é muito longa para caber na grade.`);
    return false;
  }

  // Find all possible positions with their intersection scores
  const positions = [];
  for (const direction of possibleDirections) {
    const maxRow = gridHeight.value - (["vertical", "diagonal-down"].includes(direction) ? word.length : 0);
    const minRow = direction === "diagonal-up" ? word.length - 1 : 0;
    const maxCol = gridWidth.value - (["horizontal", "diagonal-down", "diagonal-up"].includes(direction) ? word.length : 0);

    for (let row = minRow; row < maxRow; row++) {
      for (let col = 0; col < maxCol; col++) {
        const posInfo = checkPosition(word, row, col, direction);
        if (posInfo.canPlace) {
          positions.push({
            row,
            col,
            direction,
            intersections: posInfo.intersections
          });
        }
      }
    }
  }

  // Sort positions by intersection score and randomize equal scores
  positions.sort((a, b) => {
    if (b.intersections === a.intersections) {
      return Math.random() - 0.5;
    }
    return b.intersections - a.intersections;
  });

  // Try to place the word in the best position
  if (positions.length > 0) {
    const bestPos = positions[0];
    placeWordAtPosition(word, bestPos.row, bestPos.col, bestPos.direction);
    return true;
  }

  return false;
}

function checkPosition(word, startRow, startCol, direction) {
  let canPlace = true;
  let intersections = 0;

  for (let i = 0; i < word.length; i++) {
    let row = startRow;
    let col = startCol;

    switch (direction) {
      case "horizontal":
        col += i;
        break;
      case "vertical":
        row += i;
        break;
      case "diagonal-down":
        row += i;
        col += i;
        break;
      case "diagonal-up":
        row -= i;
        col += i;
        break;
    }

    const currentCell = grid.value[row][col];
    if (currentCell !== "") {
      if (currentCell !== word[i]) {
        canPlace = false;
        break;
      } else {
        intersections++;
      }
    }
  }

  return { canPlace, intersections };
}

function placeWordAtPosition(word, startRow, startCol, direction) {
  for (let i = 0; i < word.length; i++) {
    let row = startRow;
    let col = startCol;

    switch (direction) {
      case "horizontal":
        col += i;
        break;
      case "vertical":
        row += i;
        break;
      case "diagonal-down":
        row += i;
        col += i;
        break;
      case "diagonal-up":
        row -= i;
        col += i;
        break;
    }

    grid.value[row][col] = word[i];
  }
}

function fillEmptyCells() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let row = 0; row < gridHeight.value; row++) {
    for (let col = 0; col < gridWidth.value; col++) {
      if (grid.value[row][col] === "") {
        grid.value[row][col] = letters.charAt(
          Math.floor(Math.random() * letters.length)
        );
      }
    }
  }
}

function handleCellClick(row, col) {
  const cellKey = `${row}-${col}`;
  if (selectedCells.value.some((cell) => cell.key === cellKey)) {
    selectedCells.value = selectedCells.value.filter(
      (cell) => cell.key !== cellKey
    );
  } else {
    selectedCells.value.push({ row, col, key: cellKey });
    if (selectedCells.value.length === 2) {
      checkSelectedWord();
    }
  }
}

function isCellSelected(row, col) {
  if (selectedCells.value.length === 2) {
    const [first, second] = selectedCells.value;
    if (first.row === second.row && row === first.row) {
      const startCol = Math.min(first.col, second.col);
      const endCol = Math.max(first.col, second.col);
      return col >= startCol && col <= endCol;
    }
    if (first.col === second.col && col === first.col) {
      const startRow = Math.min(first.row, second.row);
      const endRow = Math.max(first.row, second.row);
      return row >= startRow && row <= endRow;
    }
  }
  return selectedCells.value.some(
    (cell) => cell.row === row && cell.col === col
  );
}

let foundCells = reactive({});

function isCellFound(row, col) {
  return foundCells[`${row}-${col}`] === true;
}

function checkSelectedWord() {
  if (selectedCells.value.length !== 2) return;

  const [first, second] = selectedCells.value;
  const rowDiff = second.row - first.row;
  const colDiff = second.col - first.col;

  // Check if selection is valid (straight line: horizontal, vertical, or diagonal)
  const isDiagonal = Math.abs(rowDiff) === Math.abs(colDiff);
  const isHorizontal = rowDiff === 0;
  const isVertical = colDiff === 0;

  if (!isHorizontal && !isVertical && !isDiagonal) {
    statusMessage.value = "Selecione letras em linha reta (horizontal, vertical ou diagonal).";
    resetSelection();
    return;
  }

  let word = "";
  let cellsToCheck = [];

  if (isHorizontal) {
    const [left, right] = first.col < second.col ? [first, second] : [second, first];
    for (let c = left.col; c <= right.col; c++) {
      word += grid.value[left.row][c];
      cellsToCheck.push({ row: left.row, col: c });
    }
  } else if (isVertical) {
    const [top, bottom] = first.row < second.row ? [first, second] : [second, first];
    for (let r = top.row; r <= bottom.row; r++) {
      word += grid.value[r][top.col];
      cellsToCheck.push({ row: r, col: top.col });
    }
  } else {
    // Diagonal case
    const steps = Math.abs(rowDiff);
    const rowStep = rowDiff / steps;
    const colStep = colDiff / steps;

    for (let i = 0; i <= steps; i++) {
      const row = first.row + (i * rowStep);
      const col = first.col + (i * colStep);
      word += grid.value[row][col];
      cellsToCheck.push({ row, col });
    }
  }

  // Rest of the function remains the same
  const upperWord = word.toUpperCase();
  const reversedWord = upperWord.split("").reverse().join("");
  const foundWordObj = gameWords.value.find(
    (wordObj) =>
      wordObj.word.toUpperCase() === upperWord ||
      wordObj.word.toUpperCase() === reversedWord
  );

  if (
    foundWordObj &&
    !foundWords.value.includes(foundWordObj.word.toUpperCase())
  ) {
    foundWords.value.push(foundWordObj.word.toUpperCase());
    score.value += 10;
    cellsToCheck.forEach((c) => {
      foundCells[`${c.row}-${c.col}`] = true;
    });
    statusMessage.value = `Você encontrou: ${foundWordObj.word.toUpperCase()}`;
    resetSelection();
    if (foundWords.value.length === gameWords.value.length) {
      setTimeout(() => {
        alert(
          `Parabéns! Você encontrou todas as palavras com ${score.value} pontos.`
        );
        createGame();
      }, 500);
    }
  } else {
    score.value -= 1;
    statusMessage.value = `Palavra não encontrada: ${upperWord}`;
    setTimeout(() => {
      resetSelection();
    }, 1000);
  }
}

function resetSelection() {
  selectedCells.value = [];
}

onMounted(() => {
  createGame();
});

</script>

<style scoped>
.word-search-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100%;
}

.word-search-game-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.grid-controls {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.control-group input {
  width: 60px;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  text-align: center;
  font-size: 0.9rem;
}

.control-group label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.game-container {
  display: flex;
  overflow-y: scroll;
  gap: 1rem;
  width: 100%;
}

.game-grid-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  max-width: 100%;
  margin: auto;
}

.game-grid {
  display: grid;
  /* width: 50%; */
}

.grid-row {
  display: flex;
  display: contents;
}

.cell {
  width: var(--cell-size);
  height: var(--cell-size);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
}

.cell.selected {
  background-color: var(--accent-color);
}

.cell.found {
  background-color: #a3e635;
  color: white;
  cursor: default;
  text-decoration: line-through;
}

.status {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
}

.word-list {
  margin-bottom: 20px;
}

.word-list li {
  font-size: 1rem;
  color: #333;
  text-align: left;
  list-style: none;
  padding: 0.5rem;
}

.word-list li.found {
  text-decoration: line-through;
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .game-grid {
    margin: auto;
  }

  .game-container {
    flex-direction: column;
  }

  .cell {
    width: var(--cell-size);
    height: var(--cell-size);
    font-size: 1.6rem;
  }

  .word-list li {
    font-size: 0.9rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .word-list li span {
    font-size: 0.8rem;
    font-weight: 300;
  }

  .status {
    font-size: 1rem;
  }

  .grid-controls {
    flex-direction: column;
    gap: 0.5rem;
  }

  .control-group {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
  }

  .control-group input {
    width: 100px;
  }
}
</style>
