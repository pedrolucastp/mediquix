<template>
  <div class="word-search-game">
    <h1>Caça-Palavras</h1>
    <SelectorsComponent @specialty-change="createGame" @difficulty-change="createGame" />

    <GamePerksMenu :availablePerks="['hint']" @perk-activated="handlePerk" />

    <div class="game-container">
      <!-- Word list moved before grid for better mobile flow -->
      <div class="word-search-game-panel">
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
            }" @click="handleCellClick(rowIndex, colIndex)" :data-row="rowIndex" :data-col="colIndex">
              {{ cell }}
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="grid-controls">
        <div class="control-group">
          <label>Altura da grade: {{ gridWidth }}</label>
          <input type="range" :value="gridWidth" min="10" max="40" step="1" @input="handleGridWidthChange" />
        </div>
        <div class="control-group">
          <label>Largura da grade: {{ gridHeight }}</label>
          <input type="range" :value="gridHeight" min="8" max="20" step="1" @input="handleGridHeightChange" />
        </div>
        <div class="control-group">
          <label>Tamanho da célula: {{ cellSize }}</label>
          <input type="range" :value="cellSize" min="16" max="40" step="2" @input="handleCellSizeChange" />
        </div>
      </div>
    <p class="status">{{ statusMessage }}</p>

    <div v-if="allWordsFound" class="completion-message">
      <h3>Parabéns!</h3>
      <p>Você encontrou todas as palavras!</p>
      <p>Pontos ganhos: {{ pointsEarned }}</p>
      <BaseButton variant="primary" @click="createGame">Novo Jogo</BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useVocabularyStore } from "@/store/vocabulary";
import { useSettingsStore } from "@/store/settings";
import SelectorsComponent from "@/components/SelectorsComponent.vue";
import { useGamePoints } from '@/composables/useGamePoints';
import GamePerksMenu from '../components/game/GamePerksMenu.vue';
import BaseButton from '@/components/base/BaseButton.vue';

const settingsStore = useSettingsStore();
const vocabularyStore = useVocabularyStore();

const cellSize = computed(() => settingsStore.settings.wordSearchGame.cellSize);
const gridWidth = computed(() => settingsStore.settings.wordSearchGame.gridWidth);
const gridHeight = computed(() => settingsStore.settings.wordSearchGame.gridHeight);

const gridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${gridHeight.value}, ${cellSize.value}px)`,
  gridTemplateRows: `repeat(${gridWidth.value}, ${cellSize.value}px)`,
  // gap: '1px', no gap needed
  "--cell-size": `${cellSize.value}px`,
  width: 'fit-content',
  minWidth: 'min-content'
}));

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
  console.log('handleCellSizeChange', e)
  const size = parseInt(e.target.value);
  if (size >= 16 && size <= 40) {
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
const pointsEarned = ref(0);

const { POINTS_CONFIG, awardPoints, usePerk } = useGamePoints();

const allWordsFound = computed(() => {
  return gameWords.value.length > 0 &&
    gameWords.value.every(word => foundWords.value.includes(word.word.toUpperCase()));
});

function createGame() {
  score.value = 0;
  statusMessage.value = "";
  selectedCells.value = [];
  foundWords.value = [];
  foundCells = reactive({});

  // Initialize grid with correct dimensions
  const rows = parseInt(gridHeight.value);
  const cols = parseInt(gridWidth.value);

  grid.value = Array(rows).fill().map(() => Array(cols).fill(""));

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

  uniqueWords.sort(() => 0.5 - Math.random());
  const selectedUnique = uniqueWords.slice(0, 10);
  gameWords.value = selectedUnique.map((word) =>
    filteredWords.find((wordObj) => wordObj.word.toUpperCase() === word)
  );

  let allWordsPlaced = gameWords.value.every((wordObj) => {
    return placeWordInGrid(wordObj.word.toUpperCase());
  });

  if (!allWordsPlaced) {
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

  positions.sort((a, b) => {
    if (b.intersections === a.intersections) {
      return Math.random() - 0.5;
    }
    return b.intersections - a.intersections;
  });

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
  // Fix loop order to properly fill all cells
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
      const points = calculateGamePoints();
      awardPoints(points);
      pointsEarned.value = points;
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

function calculateGamePoints() {
  const basePoints = gameWords.value.length * POINTS_CONFIG.WORD_FOUND;
  const isPerfect = true;
  return basePoints + POINTS_CONFIG.GAME_COMPLETION + (isPerfect ? POINTS_CONFIG.PERFECT_SCORE : 0);
}

async function handlePerk(perkId) {
  // Always deduct points before applying perk effect
  const success = await usePerk(perkId);
  if (!success) return;
  if (perkId === 'hint') {
    const unfoundWords = gameWords.value
      .filter(word => !foundWords.value.includes(word.word.toUpperCase()));
    if (unfoundWords.length > 0) {
      const randomWord = unfoundWords[Math.floor(Math.random() * unfoundWords.length)];
      const cells = findWordCells(randomWord.word.toUpperCase());
      cells.forEach(cell => {
        const el = document.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`);
        if (el) {
          el.classList.add('hint');
          setTimeout(() => el.classList.remove('hint'), 1000);
        }
      });
    }
  }
}

function findWordCells(word) {
  const cells = [];
  const directions = ["horizontal", "vertical", "diagonal-down", "diagonal-up"];
  for (let row = 0; row < gridHeight.value; row++) {
    for (let col = 0; col < gridWidth.value; col++) {
      directions.forEach(dir => {
        const positions = getWordPositions(word, row, col, dir);
        if (positions.length === word.length) {
          cells.push(...positions);
        }
      });
    }
  }
  return cells;
}

function getWordPositions(word, startRow, startCol, direction) {
  const positions = [];
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

    const currentCell = grid.value[row]?.[col];
    if (currentCell === undefined || currentCell !== word[i]) {
      return [];
    }
    positions.push({ row, col });
  }
  return positions;
}

function resetSelection() {
  selectedCells.value = [];
}

onMounted(() => {
  console.log('onMounted',
    cellSize,
    gridWidth,
    gridHeight
  );
  createGame();
});

</script>

<style scoped>
.word-search-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
}

.game-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  background-color: var(--surface-color);
  box-shadow: var(--shadow-sm);
  overflow: auto;
  /* flex-wrap: wrap; */
}

.word-search-game-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30%;
}

.grid-controls {
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: var(--background-color);
  border-radius: var(--radius-md);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.control-group input[type="range"] {
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--border-color);
  border-radius: 3px;
  outline: none;
  padding: 0;
  margin: 0;
}

.control-group input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.control-group input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;
}

.control-group input[type="range"]:hover::-webkit-slider-thumb {
  background: var(--accent-color);
}

.control-group input[type="range"]:hover::-moz-range-thumb {
  background: var(--accent-color);
}

.control-group label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

.game-grid-container {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  overflow: auto;
  width: 100%;
  /* padding: 0.5rem; */
  /* max-width: 100vw; */
  -webkit-overflow-scrolling: touch;
  flex-wrap: wrap;
}

.game-grid {
  display: grid;
  /* gap: 1px; */
  background-color: var(--border-color);
  /* padding: 1px; */
  /* border-radius: var(--radius-sm); */
  width: fit-content;
  margin: 20px auto;
  border: 2px solid;
}

.cell {
  width: var(--cell-size);
  height: var(--cell-size);
  background-color: var(--surface-color);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: calc(var(--cell-size) * 0.4);
  touch-action: manipulation;
}

.cell:hover {
  background-color: var(--hover-color);
}

.cell.selected {
  background-color: var(--accent-color);
  color: white;
  transform: scale(1.05);
  z-index: 1;
}

.cell.found {
  background-color: var(--success-color);
  color: white;
  border-color: var(--success-color);
}

.cell.hint {
  animation: hint-flash 1s ease;
}

@keyframes hint-flash {

  0%,
  100% {
    background-color: var(--surface-color);
  }

  50% {
    background-color: var(--accent-color);
    color: white;
  }
}

.status {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  background-color: var(--surface-color);
}

.word-list {
  display: flex;
  /* flex-wrap: wrap; */
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  width: 100%;
  flex-direction: column;
}

.word-list li {
  flex: 1 1 calc(50% - 0.5rem);
  min-width: 150px;
  font-size: 0.9rem;
  color: var(--text-color);
  text-align: left;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
}

.word-list li span {
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.word-list li.found {
  text-decoration: line-through;
  color: var(--accent-color);
  background-color: rgba(var(--success-color-rgb), 0.1);
  border-color: var(--success-color);
}

.completion-message {
  text-align: center;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  background: var(--surface-color);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

/* Dark mode support */
:deep(.dark) .game-container {
  background-color: var(--dark-surface-color);
}

:deep(.dark) .word-list {
  background-color: var(--dark-surface-color);
}

:deep(.dark) .word-list li {
  background-color: var(--dark-background-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

:deep(.dark) .word-list li span {
  color: var(--dark-text-secondary);
}

:deep(.dark) .word-list li.found {
  color: var(--dark-accent-color);
  background-color: rgba(72, 187, 120, 0.1);
  border-color: var(--dark-accent-color);
}

:deep(.dark) .cell {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

:deep(.dark) .cell:hover {
  background-color: var(--dark-hover-color);
}

:deep(.dark) .cell.selected {
  background-color: var(--dark-accent-color);
  color: white;
}

:deep(.dark) .cell.found {
  background-color: var(--dark-success-color, #2F855A);
  border-color: var(--dark-success-color, #2F855A);
}

:deep(.dark) .status {
  color: var(--dark-text-color);
  background-color: var(--dark-surface-color);
}

@media (max-width: 768px) {
  .word-search-game {
    padding: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .game-container {
    flex-direction: column;
    padding: 1rem;
    overflow-y: visible;
    overflow-x: clip;
  }

  .word-search-game-panel {
    width: 100%;
  }

  .game-grid-container {
    overflow-y: visible;
  }

  .word-list {
    flex-direction: column;
  }

  .cell {
    font-size: calc(var(--cell-size) * 0.5);
  }

  .control-group label {
    font-size: 0.8rem;
  }

  .word-list li {
    flex: 1 1 100%;
    min-width: 0;
    font-size: 0.85rem;
    padding: 0.4rem;
  }

  .status {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
