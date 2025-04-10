<template>
  <div class="my-vocabulary">
    <div class="vocab-header">
      <h1>Meu Vocabulário</h1>
      <SelectorsComponent />
      <div class="options-and-searchbar">
        <button class="options-btn" @click="openOptionsModal">
          <font-awesome-icon :icon="['fas', 'sliders-h']" />
          Opções
        </button>
        <div class="search-word">
          <input
            type="text"
            class="search-term"
            v-model="searchTerm"
            placeholder="Buscar palavra ou definição..."
          />
          <button @click="searchWords" class="search-btn">
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        class="modal-overlay"
        v-if="showOptionsModal"
        @click.self="closeOptionsModal"
      >
        <div class="modal-content options-modal">
          <div class="options-buttons">
            <button @click="openAddWordModal">
              <font-awesome-icon :icon="['fas', 'plus']" />
              Adicionar Palavra
            </button>

            <button @click="activateAll">
              <font-awesome-icon :icon="['fas', 'check']" />
              Ativar todos
            </button>

            <button @click="deactivateAll">
              <font-awesome-icon :icon="['fas', 'times']" />
              Desativar todos
            </button>

            <button @click="toggleOnlyActive">
              <font-awesome-icon
                :icon="['fas', onlyActive ? 'eye' : 'eye-slash']"
              />
              {{ onlyActive ? "Exibir todos" : "Exibir apenas ativos" }}
            </button>

            <button @click="toggleHighlightDuplicates">
              <font-awesome-icon :icon="['fas', 'highlighter']" />
              {{
                highlightDuplicates ? "Remover Destaque" : "Destacar Duplicatas"
              }}
            </button>

            <button @click="removeDuplicates">
              <font-awesome-icon :icon="['fas', 'trash']" />
              Remover Duplicatas
            </button>

            <!-- <button class="close-button" @click="closeOptionsModal">
              &times;
            </button> -->
          </div>
        </div>
      </div>
    </transition>

    <div class="counter">
      <p>
        Total de termos: <span>{{ displayedWords.length }}</span>
      </p>
    </div>

    <div class="vocabulary-list">
      <div
        v-for="(word, index) in displayedWords"
        :key="word.word + index"
        class="term-item"
        :class="{
          duplicate: highlightDuplicates && duplicateMap[wordKey(word)] > 1,
        }"
      >
        <div class="card-header" @click="toggleExpansion(index)">
          <h2>{{ word.word }}</h2>
        </div>
        <div class="card-details" v-if="isExpanded(index)">
          <p class="clue">{{ word.clue }}</p>
          <p class="specialties">
            {{ formatSpecialties(word.specialties) }}
          </p>
          <p class="difficulty">
            {{ formatDifficulty(word.difficulty) }}
          </p>
          <div class="icons-container">
            <span class="icon edit-icon" @click.stop="toggleEditMode(index)">
              <font-awesome-icon :icon="['fas', 'edit']" />
            </span>
            <span class="icon delete-icon" @click.stop="deleteWord(index)">
              <font-awesome-icon :icon="['fas', 'trash']" />
            </span>
            <input
              type="checkbox"
              v-model="word.isActive"
              @change.stop="toggleActive(word)"
              title="Ativar/Desativar"
            />
          </div>
        </div>
        <div class="edit-container" v-if="editingIndices.includes(index)">
          <input
            type="text"
            v-model="editData[index].word"
            placeholder="Palavra"
          />
          <textarea
            v-model="editData[index].clue"
            placeholder="Dica"
          ></textarea>
          <div class="specialties-select">
            <label v-for="(spec, i) in vocabularyStore.specialties" :key="i">
              <input
                type="checkbox"
                :value="i"
                v-model="editData[index].specialties"
              />
              {{ spec }}
            </label>
          </div>
          <select v-model.number="editData[index].difficulty">
            <option disabled value="">Selecione</option>
            <option value="1">Fácil</option>
            <option value="2">Média</option>
            <option value="3">Difícil</option>
          </select>
          <button @click="saveEdit(index)">Salvar</button>
          <button @click="cancelEdit(index)">Cancelar</button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="modal" v-if="showAddModal" @click.self="closeAddWordModal">
        <div class="modal-content">
          <span class="close-button" @click="closeAddWordModal">&times;</span>
          <h2>Adicionar Nova Palavra</h2>
          <form @submit.prevent="addNewWord">
            <label>Palavra:</label>
            <input type="text" v-model="newWord.word" required />
            <label>Dica:</label>
            <textarea v-model="newWord.clue" required></textarea>
            <label>Especialidades:</label>
            <div class="specialties-select">
              <label v-for="(spec, i) in vocabularyStore.specialties" :key="i">
                <input
                  type="checkbox"
                  :value="i"
                  v-model="newWord.specialties"
                />
                {{ spec }}
              </label>
            </div>
            <label>Dificuldade:</label>
            <select v-model.number="newWord.difficulty" required>
              <option disabled value="">Selecione</option>
              <option value="1">Fácil</option>
              <option value="2">Média</option>
              <option value="3">Difícil</option>
            </select>
            <button type="submit">Adicionar</button>
            <button type="button" @click="closeAddWordModal">Cancelar</button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useVocabularyStore } from "@/store/vocabulary";
import { useSettingsStore } from "@/store/settings";
import SelectorsComponent from "@/components/SelectorsComponent.vue";
import { saveWordsToLocalStorage } from "@/data/vocabularyData";

const vocabularyStore = useVocabularyStore();
const settingsStore = useSettingsStore();

const highlightDuplicates = ref(false);
const onlyActive = ref(false);
const searchTerm = ref("");
const showAddModal = ref(false);
const showOptionsModal = ref(false);

const expandedIndices = ref([]);

const editingIndices = ref([]);
const editData = reactive({});

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const duplicateMap = computed(() => {
  const counts = {};
  displayedWords.value.forEach((word) => {
    const key = normalize(word.word);
    counts[key] = (counts[key] || 0) + 1;
  });
  return counts;
});

const displayedWords = computed(() => {
  let words = vocabularyStore.words;
  if (settingsStore.selectedSpecialty !== "all") {
    const spec = parseInt(settingsStore.selectedSpecialty);
    words = words.filter((w) => w.specialties.includes(spec));
  }
  if (settingsStore.selectedDifficulty !== "all") {
    const diff = parseInt(settingsStore.selectedDifficulty);
    words = words.filter((w) => w.difficulty === diff);
  }
  if (onlyActive.value) {
    words = words.filter((w) => w.isActive);
  }
  if (searchTerm.value.trim() !== "") {
    const term = searchTerm.value.trim().toLowerCase();
    words = words.filter(
      (w) =>
        w.word.toLowerCase().includes(term) ||
        w.clue.toLowerCase().includes(term)
    );
  }
  return words.sort((a, b) => a.word.localeCompare(b.word));
});

function toggleExpansion(index) {
  const pos = expandedIndices.value.indexOf(index);
  if (pos === -1) {
    expandedIndices.value.push(index);
  } else {
    expandedIndices.value.splice(pos, 1);
  }
}

function isExpanded(index) {
  return expandedIndices.value.includes(index);
}

function toggleHighlightDuplicates() {
  highlightDuplicates.value = !highlightDuplicates.value;
}

function removeDuplicates() {
  if (
    confirm(
      "Deseja realmente remover todas as duplicatas, mantendo apenas uma instância de cada palavra?"
    )
  ) {
    const unique = {};
    vocabularyStore.words.forEach((item) => {
      const key = normalize(item.word);
      if (!unique[key]) {
        unique[key] = item;
      }
    });
    vocabularyStore.words = Object.values(unique);
    saveWordsToLocalStorage(vocabularyStore.words);
  }
}

function toggleOnlyActive() {
  onlyActive.value = !onlyActive.value;
}

function activateAll() {
  if (confirm("Deseja realmente ativar todos os itens?")) {
    vocabularyStore.words.forEach((item) => (item.isActive = true));
    saveWordsToLocalStorage(vocabularyStore.words);
  }
}

function deactivateAll() {
  if (confirm("Deseja realmente desativar todos os itens?")) {
    vocabularyStore.words.forEach((item) => (item.isActive = false));
    saveWordsToLocalStorage(vocabularyStore.words);
  }
}

function openOptionsModal() {
  showOptionsModal.value = true;
}

function closeOptionsModal() {
  showOptionsModal.value = false;
}

function openAddWordModal() {
  closeOptionsModal();
  showAddModal.value = true;
}

function closeAddWordModal() {
  showAddModal.value = false;
}

const newWord = reactive({
  word: "",
  clue: "",
  specialties: [],
  difficulty: null,
});

function addNewWord() {
  if (
    !newWord.word.trim() ||
    !newWord.clue.trim() ||
    !newWord.difficulty ||
    newWord.specialties.length === 0
  ) {
    alert("Preencha todos os campos corretamente.");
    return;
  }
  const exists = vocabularyStore.words.some(
    (item) => normalize(item.word) === newWord.word.trim().toLowerCase()
  );
  if (
    exists &&
    !confirm("A palavra já existe. Deseja adicionar outra instância?")
  ) {
    return;
  }
  const newWordObj = {
    word: newWord.word.trim(),
    clue: newWord.clue.trim(),
    specialties: [...newWord.specialties],
    difficulty: newWord.difficulty,
    isActive: true,
  };
  vocabularyStore.words.push(newWordObj);
  saveWordsToLocalStorage(vocabularyStore.words);
  closeAddWordModal();
  newWord.word = "";
  newWord.clue = "";
  newWord.specialties = [];
  newWord.difficulty = null;
}

function toggleEditMode(index) {
  if (editingIndices.value.includes(index)) {
    const pos = editingIndices.value.indexOf(index);
    if (pos !== -1) editingIndices.value.splice(pos, 1);
  } else {
    editingIndices.value.push(index);
    editData[index] = JSON.parse(JSON.stringify(displayedWords.value[index]));
  }
}

function saveEdit(index) {
  const edited = editData[index];
  if (!edited.word.trim()) {
    alert("A palavra não pode estar vazia.");
    return;
  }
  const idx = vocabularyStore.words.findIndex(
    (w) => w.word === displayedWords.value[index].word
  );
  if (idx !== -1) {
    vocabularyStore.words[idx] = { ...edited };
    saveWordsToLocalStorage(vocabularyStore.words);
  }
  const pos = editingIndices.value.indexOf(index);
  if (pos !== -1) editingIndices.value.splice(pos, 1);
}

function cancelEdit(index) {
  const pos = editingIndices.value.indexOf(index);
  if (pos !== -1) editingIndices.value.splice(pos, 1);
}

function toggleActive(word) {
  saveWordsToLocalStorage(vocabularyStore.words);
}

function searchWords() {
  // The searchTerm is reactive, so displayedWords updates automatically.
}

function formatSpecialties(specialtiesArray) {
  return specialtiesArray.map((i) => vocabularyStore.specialties[i]).join(", ");
}

function formatDifficulty(diff) {
  const map = { 1: "Fácil", 2: "Média", 3: "Difícil" };
  return map[diff] || "Desconhecida";
}

function wordKey(word) {
  return normalize(word.word);
}
</script>

<style scoped>
.my-vocabulary {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.vocab-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.options-and-searchbar {
  justify-content: space-around;
  display: flex;
  width: 100%;
}

.options-btn {
  padding: 0 10px;
}
.search-btn {
  padding: 0 10px;
  height: 100%;
}

.options-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.options-buttons button {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.options-buttons button:hover {
  background-color: #2980b9;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 5px;
  width: 90%;
  max-width: 500px;
}

.search-word {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.search-term {
  min-width: 200px;
  padding: 0.5rem 10px;
}

.counter {
  text-align: center;
  margin: 1rem;
}

.vocabulary-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
}

.term-item {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--select-background, #fff);
}

.clue {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
}

.specialties {
  font-weight: bold;
}

.difficulty {
  font-size: 14px;
}

.duplicate {
  border: 2px solid var(--accent-color);
  background-color: rgba(255, 0, 0, 0.1);
}

.card-header h2 {
  margin: 0;
}

.card-details {
  display: flex;
  margin-top: 0.5rem;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  text-align: start;
}

.icons-container {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  justify-content: center;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  width: 90%;
  max-width: 500px;
}

.close-button {
  float: right;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .options-buttons {
    flex-direction: column;
    align-items: center;
  }
  .search-term {
    width: 100%;
  }
}
</style>
