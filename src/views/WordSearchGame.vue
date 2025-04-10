<template>
  <div class="word-search-game">
    <div class="word-search-game-header">
      <h1>Caça Palavras</h1>
      <SelectorsComponent
        @specialty-change="createGame"
        @difficulty-change="createGame"
      />
    </div>

    <div class="game-container">
      <div class="game-grid" ref="gameGrid" :style="gridStyle">
        <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="grid-row">
          <div
            v-for="(cell, colIndex) in row"
            :key="colIndex"
            class="cell"
            :class="{
              selected: isCellSelected(rowIndex, colIndex),
              found: isCellFound(rowIndex, colIndex),
            }"
            @click="handleCellClick(rowIndex, colIndex)"
          >
            {{ cell }}
          </div>
        </div>
      </div>

      <ul class="word-list">
        <li
          v-for="wordObj in gameWords"
          :key="wordObj.word"
          :class="{ found: foundWords.includes(wordObj.word.toUpperCase()) }"
        >
          <!-- {{ wordObj.word.toUpperCase() }}  -->
          <span>{{ wordObj.clue }}</span>
        </li>
      </ul>
      <p class="status">{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from "vue";
import { useVocabularyStore } from "@/store/vocabulary";
import { useSettingsStore } from "@/store/settings";
import SelectorsComponent from "@/components/SelectorsComponent.vue";

const cellSize = ref(30);
const gridWidth = ref(24);
const gridHeight = ref(12);
const gameGrid = ref(null);

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${gridWidth.value}, ${cellSize.value}px)`,
  gridTemplateRows: `repeat(${gridHeight.value}, ${cellSize.value}px)`,
  "--cell-size": `${cellSize.value}px`,
}));

const vocabularyStore = useVocabularyStore();
const settingsStore = useSettingsStore();

const grid = ref([]);
const gameWords = ref([]);
const foundWords = ref([]);
const score = ref(0);
const statusMessage = ref("");
const selectedCells = ref([]);

function updateGridDimensions() {
  console.log('updateGridDimensions', gameGrid.value)
  if (gameGrid.value) {
    console.log(gameGrid.value)
    // const containerWidth = gameGrid.value.clientWidth;
    const containerWidth = gameGrid.value.getBoundingClientRect().width;
    console.log('game-grid width: ',containerWidth)

    gridWidth.value = Math.floor(containerWidth / cellSize.value);
    gridHeight.value = gridWidth.value * 2;
  }
}

function createGame() {
  score.value = 0;
  statusMessage.value = "";
  selectedCells.value = [];
  foundWords.value = [];

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

  grid.value = Array.from({ length: gridHeight.value }, () =>
    Array(gridWidth.value).fill("")
  );

  gameWords.value.forEach((wordObj) => {
    placeWordInGrid(wordObj.word.toUpperCase());
  });

  fillEmptyCells();
}



function placeWordInGrid(word) {
  const directions = ["horizontal", "vertical"];
  const possibleDirections = directions.filter((direction) => {
    if (direction === "horizontal" && word.length <= gridWidth.value)
      return true;
    if (direction === "vertical" && word.length <= gridHeight.value)
      return true;
    return false;
  });
  if (possibleDirections.length === 0) {
    console.error(`A palavra "${word}" é muito longa para caber na grade.`);
    return;
  }

  let placed = false;
  let attempts = 0;
  const maxAttempts = 100;
  while (!placed && attempts < maxAttempts) {
    attempts++;
    const direction =
      possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
    const wordLength = word.length;
    let row, col;
    if (direction === "horizontal") {
      row = getRandomInt(0, gridHeight.value - 1);
      col = getRandomInt(0, gridWidth.value - wordLength);
    } else {
      row = getRandomInt(0, gridHeight.value - wordLength);
      col = getRandomInt(0, gridWidth.value - 1);
    }
    let canPlace = true;
    for (let i = 0; i < wordLength; i++) {
      let currentRow = row,
        currentCol = col;
      if (direction === "horizontal") currentCol += i;
      else currentRow += i;
      if (
        grid.value[currentRow][currentCol] !== "" &&
        grid.value[currentRow][currentCol] !== word[i]
      ) {
        canPlace = false;
        break;
      }
    }
    if (canPlace) {
      for (let i = 0; i < wordLength; i++) {
        let currentRow = row,
          currentCol = col;
        if (direction === "horizontal") currentCol += i;
        else currentRow += i;
        grid.value[currentRow][currentCol] = word[i];
      }
      placed = true;
    }
  }
  if (!placed) {
    console.error(
      `Não foi possível posicionar a palavra "${word}" após ${maxAttempts} tentativas.`
    );
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  const sameRow = first.row === second.row;
  const sameCol = first.col === second.col;

  if (!sameRow && !sameCol) {
    statusMessage.value = "Selecione duas letras na mesma linha ou coluna.";
    resetSelection();
    return;
  }

  let word = "";
  let cellsToCheck = [];
  if (sameRow) {
    const [left, right] =
      first.col < second.col ? [first, second] : [second, first];
    for (let c = left.col; c <= right.col; c++) {
      word += grid.value[left.row][c];
      cellsToCheck.push({ row: left.row, col: c });
    }
  } else if (sameCol) {
    const [top, bottom] =
      first.row < second.row ? [first, second] : [second, first];
    for (let r = top.row; r <= bottom.row; r++) {
      word += grid.value[r][top.col];
      cellsToCheck.push({ row: r, col: top.col });
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
  updateGridDimensions();
  createGame();
  window.addEventListener("resize", updateGridDimensions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateGridDimensions);
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

.word-search-game-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.game-container {
  display: flex;
  overflow-y: scroll;
  gap: 1rem;
  /* flex-wrap: wrap; */
  width: 100%;
}

.game-grid {
  display: grid;
  width: 50%;
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
  font-size: 0.8rem;
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
}
</style>
