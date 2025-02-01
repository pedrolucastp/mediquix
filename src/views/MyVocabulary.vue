<template>
  <div class="my-vocabulary">
    <div>
      <h1>Vocabulário Médico</h1>
      <SelectorsComponent />
    </div>

    <div>
      <div class="filter-options">
        <button @click="toggleHighlightDuplicates">
          {{ highlightDuplicates ? 'Remover Destaque' : 'Destacar Duplicatas' }}
        </button>
        <button @click="removeDuplicates">Remover Duplicatas</button>
        <button @click="toggleOnlyActive">
          {{ onlyActive ? 'Exibir todos os itens' : 'Exibir apenas itens ativos' }}
        </button>
        <button @click="activateAll">Ativar todos</button>
        <button @click="deactivateAll">Desativar todos</button>
        <button @click="openAddWordModal">Adicionar Palavra</button>
        <div class="search-word">
          <input type="text" v-model="searchTerm" placeholder="Buscar palavra ou definição..." />
          <button @click="searchWords">Pesquisar</button>
        </div>
      </div>

      <div class="counter">
        <p>Total de termos: <span>{{ displayedWords.length }}</span></p>
      </div>

      <div class="vocabulary-list">
        <div
          v-for="(word, index) in displayedWords"
          :key="word.word + index"
          class="term-item"
          :class="{ duplicate: highlightDuplicates && duplicateMap[wordKey(word)] > 1 }"
        >
          <div class="view-container" v-if="!editingIndices.includes(index)">
            <h2>{{ word.word }}</h2>
            <p class="clue">{{ word.clue }}</p>
            <p class="specialties">Especialidades: {{ formatSpecialties(word.specialties) }}</p>
            <p class="difficulty">Dificuldade: {{ formatDifficulty(word.difficulty) }}</p>
            <div class="icons-container">
              <span class="icon edit-icon" @click="toggleEditMode(index)">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#2980b9" d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM21.41 6.34c.38-.38.38-1.02 0-1.41l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.83z"/>
                </svg>
              </span>
              <span class="icon delete-icon" @click="deleteWord(index)">
                <svg width="32" height="28" viewBox="0 0 24 22">
                  <path fill="#e74c3c" d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1z"/>
                </svg>
              </span>
              <input type="checkbox" v-model="word.isActive" @change="toggleActive(word)" title="Ativar/Desativar" />
            </div>
          </div>

          <div class="edit-container" v-else>
            <input type="text" v-model="editData[index].word" placeholder="Palavra" />
            <textarea v-model="editData[index].clue" placeholder="Dica"></textarea>
            <div class="specialties-select">
              <label v-for="(spec, i) in vocabularyStore.specialties" :key="i">
                <input type="checkbox" :value="i" v-model="editData[index].specialties" />
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
    </div>

    <div class="modal" v-if="showAddModal">
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
              <input type="checkbox" :value="i" v-model="newWord.specialties" />
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
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useVocabularyStore } from '@/store/vocabularyStore'
import SelectorsComponent from '@/components/SelectorsComponent.vue'
import { saveWordsToLocalStorage } from '@/data/vocabularyData'

const vocabularyStore = useVocabularyStore();

const highlightDuplicates = ref(false);
const onlyActive = ref(false);
const searchTerm = ref('');
const showAddModal = ref(false);

const editingIndices = ref([]);
const editData = reactive({});

function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
const duplicateMap = computed(() => {
  const counts = {};
  vocabularyStore.words.forEach(word => {
    const key = normalize(word.word);
    counts[key] = (counts[key] || 0) + 1;
  });
  return counts;
});

const displayedWords = computed(() => {
  let words = vocabularyStore.words;
  if (onlyActive.value) {
    words = words.filter(w => w.isActive);
  }
  if (searchTerm.value.trim() !== '') {
    const term = searchTerm.value.trim().toLowerCase();
    words = words.filter(w => w.word.toLowerCase().includes(term) || w.clue.toLowerCase().includes(term));
  }
  return words;
});

function toggleHighlightDuplicates() {
  highlightDuplicates.value = !highlightDuplicates.value;
}

function removeDuplicates() {
  if (confirm('Deseja realmente remover todas as duplicatas, mantendo apenas uma instância de cada palavra?')) {
    const unique = {};
    vocabularyStore.words.forEach(item => {
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
  if (confirm('Deseja realmente ativar todos os itens?')) {
    vocabularyStore.words.forEach(item => item.isActive = true);
    saveWordsToLocalStorage(vocabularyStore.words);
  }
}

function deactivateAll() {
  if (confirm('Deseja realmente desativar todos os itens?')) {
    vocabularyStore.words.forEach(item => item.isActive = false);
    saveWordsToLocalStorage(vocabularyStore.words);
  }
}

function openAddWordModal() {
  showAddModal.value = true;
}

function closeAddWordModal() {
  showAddModal.value = false;
}

const newWord = reactive({
  word: '',
  clue: '',
  specialties: [],
  difficulty: null,
});

function addNewWord() {
  if (!newWord.word.trim() || !newWord.clue.trim() || !newWord.difficulty || newWord.specialties.length === 0) {
    alert('Preencha todos os campos corretamente.');
    return;
  }
  const exists = vocabularyStore.words.some(item =>
    normalize(item.word) === newWord.word.trim().toLowerCase()
  );
  if (exists && !confirm('A palavra já existe. Deseja adicionar outra instância?')) {
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
  newWord.word = '';
  newWord.clue = '';
  newWord.specialties = [];
  newWord.difficulty = null;
}

function deleteWord(index) {
  if (confirm(`Deseja realmente deletar o termo "${displayedWords.value[index].word}"?`)) {
    const wordToDelete = displayedWords.value[index];
    const idx = vocabularyStore.words.findIndex(w => w.word === wordToDelete.word);
    if (idx !== -1) {
      vocabularyStore.words.splice(idx, 1);
      saveWordsToLocalStorage(vocabularyStore.words);
    }
  }
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
    alert('A palavra não pode estar vazia.');
    return;
  }
  const idx = vocabularyStore.words.findIndex(w => w.word === displayedWords.value[index].word);
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
}

function formatSpecialties(specialtiesArray) {
  return specialtiesArray.map(i => vocabularyStore.specialties[i]).join(', ');
}

function formatDifficulty(diff) {
  const map = { 1: 'Fácil', 2: 'Média', 3: 'Difícil' };
  return map[diff] || 'Desconhecida';
}

function wordKey(word) {
  return normalize(word.word);
}
</script>

<style scoped>
.my-vocabulary {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-y: clip;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
}
.filter-options button {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
}
.filter-options button:hover {
  background-color: #2980b9;
}
.search-word {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.counter {
  text-align: center;
  margin-bottom: 1rem;
}
.vocabulary-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.term-item {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.view-container h2 {
  margin: 0;
}
.icons-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
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
</style>
