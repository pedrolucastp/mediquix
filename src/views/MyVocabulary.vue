<template>
  <div class="my-vocabulary">
    <div class="vocab-header">
      <h1>Meu Vocabulário</h1>
      <div class="vocab-controls">
        <div class="filters">
          <SelectorsComponent />
          <div class="filter-buttons">
            <BaseButton variant="primary" icon="plus" @click="openAddWordModal">
              Adicionar
            </BaseButton>
            <BaseButton variant="outline" :icon="onlyActive ? 'eye' : 'eye-slash'" @click="toggleOnlyActive"
              :class="{ active: onlyActive, toggle: true }">
              {{ onlyActive ? "Todos" : "Apenas ativos" }}
            </BaseButton>
            <BaseButton variant="outline" icon="highlighter" @click="toggleHighlightDuplicates"
              :class="{ active: highlightDuplicates }">
              {{ highlightDuplicates ? "Remover Destaque" : "Destacar Duplicatas" }}
            </BaseButton>
          </div>
        </div>
        <div class="search-word">
          <BaseInput v-model="searchTerm" placeholder="Buscar palavra ou definição..." icon="search"
            @keyup.enter="searchWords" />
        </div>
        <div class="actions">

          <!-- <BaseButton 
            variant="outline" 
            icon="ellipsis-h" 
            @click="openOptionsModal"
            class="options-btn"
          >
            Ações em Lote
          </BaseButton> -->
          <BaseButton variant="outline" icon="check-square" @click="toggleSelectionMode"
            :class="{ active: selectionMode }">
            {{ selectionMode ? "Cancelar Seleção" : "Selecionar" }}
          </BaseButton>
          <BaseButton variant="outline" icon="check" @click="selectAllWords" v-if="selectionMode">
            Selecionar Todos
          </BaseButton>
          <BaseButton variant="outline" icon="times" @click="deselectAllWords" v-if="selectionMode">
            Desselecionar Todos
          </BaseButton>
        </div>
      </div>
      <div class="results-info">
        <p class="results-count">{{ displayedWords.length }} termos encontrados</p>
      </div>
    </div>

    <!-- Batch Actions Modal -->
    <!-- <BaseModal
      v-model="showOptionsModal"
      title="Ações em Lote"
    >
      <div class="batch-actions">
        <div class="batch-section">
          <h4>Estado dos Termos</h4>
          <div class="batch-buttons">
            <BaseButton variant="outline" icon="check" @click="activateAll" class="batch-btn">
              Ativar Todos
            </BaseButton>
            <BaseButton variant="outline" icon="times" @click="deactivateAll" class="batch-btn">
              Desativar Todos
            </BaseButton>
          </div>
        </div>
        <div class="batch-section">
          <h4>Gerenciar Duplicatas</h4>
          <div class="batch-buttons">
            <BaseButton variant="accent" icon="trash" @click="removeDuplicates" class="batch-btn">
              Remover Duplicatas
            </BaseButton>
          </div>
        </div>
      </div>
    </BaseModal> -->

    <div class="vocabulary-list">
      <div v-for="(word, index) in displayedWords" :key="word.word + index" class="term-item" :class="{
        duplicate: highlightDuplicates && duplicateMap[wordKey(word)] > 1,
        expanded: isExpanded(index),
        selected: selectedWords.has(word)
      }" @click="!editingIndices.includes(index) && toggleExpansion(index)">
        <div class="card-header">
          <h2>{{ word.word }}</h2>
          <div class="card-badges">
            <span class="badge difficulty-badge" :class="'difficulty-' + word.difficulty">
              {{ formatDifficulty(word.difficulty) }}
            </span>
            <span class="badge active-badge" :class="{ 'is-active': word.isActive }">
              {{ word.isActive ? 'Ativo' : 'Inativo' }}
            </span>
          </div>
        </div>

        <div class="card-details" v-if="isExpanded(index)">
          <p class="clue">{{ word.clue }}</p>
          <div class="specialties-tags">
            <span v-for="specIndex in word.specialties" :key="specIndex" class="specialty-tag">
              {{ vocabularyStore.specialties[specIndex] }}
            </span>
          </div>
          <div class="card-actions">
            <BaseButton variant="outline" icon="edit" @click.stop="toggleEditMode(index)" size="sm" />
            <BaseButton variant="outline" icon="trash" @click.stop="deleteWord(index)" size="sm" />
            <BaseButton variant="outline" :icon="word.isActive ? 'eye' : 'eye-slash'" @click.stop="toggleActive(word)"
              size="sm" />
            <BaseButton variant="outline" icon="check-square" @click.stop="toggleWordSelection(word, $event)" size="sm"
              :class="{ active: selectedWords.has(word) }" v-if="selectionMode" />
          </div>
        </div>

        <div class="edit-form" v-if="editingIndices.includes(index)">
          <BaseInput v-model="editData[index].word" label="Palavra" required />
          <BaseInput v-model="editData[index].clue" label="Dica" type="textarea" required />
          <BaseSelect v-model="editData[index].difficulty" :options="difficultyOptions" label="Dificuldade" required />
          <div class="specialties-select">
            <label>Especialidades:</label>
            <div class="specialties-grid">
              <button v-for="(spec, i) in vocabularyStore.specialties" :key="i" type="button" class="specialty-button"
                :class="{ selected: editData[index].specialties.includes(i) }" @click="toggleEditSpecialty(index, i)">
                {{ spec }}
              </button>
            </div>
          </div>
          <div class="edit-actions">
            <BaseButton variant="primary" icon="save" @click="saveEdit(index)">
              Salvar
            </BaseButton>
            <BaseButton variant="outline" icon="times" @click="cancelEdit(index)">
              Cancelar
            </BaseButton>
          </div>
        </div>
      </div>
    </div>

    <BaseModal v-model="showAddModal" title="Adicionar Nova Palavra">
      <form @submit.prevent="validateAndAddWord" class="add-word-form">
        <div class="form-group">
          <BaseInput v-model="newWord.word" label="Palavra" required :error="formErrors.word"
            @input="validateField('word')" placeholder="Digite a palavra médica" />
          <BaseInput v-model="newWord.clue" label="Dica" type="textarea" required :error="formErrors.clue"
            @input="validateField('clue')" placeholder="Digite uma dica clara e concisa" />
        </div>
        <div class="difficulty-section">
          <BaseSelect v-model="newWord.difficulty" :options="difficultyOptions" label="Dificuldade" required
            :error="formErrors.difficulty" @change="validateField('difficulty')" />
          <p class="field-hint">Escolha o nível de dificuldade apropriado</p>
        </div>

        <div class="specialties-section">
          <label>Especialidades:</label>
          <p class="field-hint" :class="{ 'error-text': formErrors.specialties }">
            Selecione uma ou mais especialidades relacionadas
          </p>
          <div class="specialties-grid">
            <button v-for="(spec, i) in vocabularyStore.specialties" :key="i" type="button" class="specialty-button"
              :class="{
                selected: newWord.specialties.includes(i),
                'with-error': formErrors.specialties
              }" @click="toggleSpecialty(i)">
              {{ spec }}
            </button>
          </div>
        </div>


        <div v-if="isPreviewAvailable" class="word-preview">
          <h4>Pré-visualização</h4>
          <div class="preview-card">
            <h3>{{ newWord.word }}</h3>
            <p class="preview-clue">{{ newWord.clue }}</p>
            <div class="preview-tags">
              <span v-for="specIndex in newWord.specialties" :key="specIndex" class="preview-tag">
                {{ vocabularyStore.specialties[specIndex] }}
              </span>
              <span class="preview-difficulty" :class="'difficulty-' + newWord.difficulty">
                {{ formatDifficulty(newWord.difficulty) }}
              </span>
            </div>
          </div>
        </div>

        <div class="modal-actions">
          <BaseButton type="submit" variant="primary" icon="plus" :disabled="!isFormValid">
            Adicionar
          </BaseButton>
          <BaseButton type="button" variant="outline" icon="times" @click="closeAddWordModal">
            Cancelar
          </BaseButton>
        </div>
      </form>
    </BaseModal>

    <!-- Loading Overlay -->
    <transition name="fade">
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-content">
          <font-awesome-icon icon="circle-notch" size="2x" class="loading-spinner" />
          <p>{{ getLoadingMessage }}</p>
        </div>
      </div>
    </transition>

    <!-- Batch Actions Bar -->
    <div v-if="selectionMode && selectedWords.size > 0" class="batch-actions-bar">
      <div class="selected-count">
        <font-awesome-icon icon="check-square" />
        <span>{{ selectedWords.size }} selecionados</span>
      </div>
      <BaseButton variant="outline" icon="check" @click="activateSelectedWords">
        Ativar Selecionados
      </BaseButton>
      <BaseButton variant="outline" icon="times" @click="deactivateSelectedWords">
        Desativar Selecionados
      </BaseButton>
      <BaseButton variant="accent" icon="trash" @click="deleteSelectedWords">
        Excluir Selecionados
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useVocabularyStore } from "@/store/vocabulary";
import { useSettingsStore } from "@/store/settings";
import SelectorsComponent from "@/components/SelectorsComponent.vue";
import { saveWordsToLocalStorage } from "@/data/vocabularyData";
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import BaseModal from '@/components/base/BaseModal.vue';

const vocabularyStore = useVocabularyStore();
const settingsStore = useSettingsStore();

const highlightDuplicates = ref(false);
const onlyActive = ref(false);
const searchTerm = ref("");
const showAddModal = ref(false);
const showOptionsModal = ref(false);
const selectionMode = ref(false);
const selectedWords = ref(new Set());

const expandedIndices = ref([]);
const editingIndices = ref([]);
const editData = reactive({});

const isLoading = ref(false);
const actionInProgress = ref('');

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

// function activateAll() {
//   if (confirm("Deseja realmente ativar todos os itens?")) {
//     vocabularyStore.words.forEach((item) => (item.isActive = true));
//     saveWordsToLocalStorage(vocabularyStore.words);
//   }
// }

// function deactivateAll() {
//   if (confirm("Deseja realmente desativar todos os itens?")) {
//     vocabularyStore.words.forEach((item) => (item.isActive = false));
//     saveWordsToLocalStorage(vocabularyStore.words);
//   }
// }

// function openOptionsModal() {
//   showOptionsModal.value = true;
// }

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

const formErrors = reactive({
  word: null,
  clue: null,
  specialties: null,
  difficulty: null,
});

const isFormValid = computed(() => {
  return !Object.values(formErrors).some(error => error !== null);
});

const isPreviewAvailable = computed(() => {
  return newWord.word.trim() && newWord.clue.trim() && newWord.specialties.length > 0 && newWord.difficulty;
});

function validateField(field) {
  switch (field) {
    case 'word':
      formErrors.word = newWord.word.trim() ? null : 'A palavra é obrigatória.';
      break;
    case 'clue':
      formErrors.clue = newWord.clue.trim() ? null : 'A dica é obrigatória.';
      break;
    case 'specialties':
      formErrors.specialties = newWord.specialties.length > 0 ? null : 'Selecione pelo menos uma especialidade.';
      break;
    case 'difficulty':
      formErrors.difficulty = newWord.difficulty ? null : 'Selecione um nível de dificuldade.';
      break;
    default:
      break;
  }
}

async function validateAndAddWord() {
  validateField('word');
  validateField('clue');
  validateField('specialties');
  validateField('difficulty');

  if (!isFormValid.value) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  try {
    isLoading.value = true;
    actionInProgress.value = 'adding';

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
    await saveWordsToLocalStorage(vocabularyStore.words);
    closeAddWordModal();
    newWord.word = "";
    newWord.clue = "";
    newWord.specialties = [];
    newWord.difficulty = null;
  } catch (error) {
    console.error('Error adding word:', error);
    alert('Ocorreu um erro ao adicionar a palavra. Tente novamente.');
  } finally {
    isLoading.value = false;
    actionInProgress.value = '';
  }
}

function toggleEditMode(index) {
  if (editingIndices.value.includes(index)) {
    cancelEdit(index);
  } else {
    // Ensure the item is expanded when entering edit mode
    if (!isExpanded(index)) {
      toggleExpansion(index);
    }
    editingIndices.value.push(index);
    editData[index] = JSON.parse(JSON.stringify(displayedWords.value[index]));
  }
}

async function saveEdit(index) {
  const edited = editData[index];
  if (!edited.word.trim() || !edited.clue.trim() || !edited.difficulty || edited.specialties.length === 0) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  try {
    isLoading.value = true;
    actionInProgress.value = 'editing';

    const idx = vocabularyStore.words.findIndex(
      (w) => w.word === displayedWords.value[index].word
    );
    if (idx !== -1) {
      vocabularyStore.words[idx] = { ...edited };
      await saveWordsToLocalStorage(vocabularyStore.words);
    }
    // Clean up edit mode
    cancelEdit(index);
  } catch (error) {
    console.error('Error saving edit:', error);
    alert('Ocorreu um erro ao salvar as alterações. Tente novamente.');
  } finally {
    isLoading.value = false;
    actionInProgress.value = '';
  }
}

function cancelEdit(index) {
  const pos = editingIndices.value.indexOf(index);
  if (pos !== -1) {
    editingIndices.value.splice(pos, 1);
    delete editData[index]; // Clean up edit data
  }
}

async function toggleActive(word) {
  try {
    isLoading.value = true;
    actionInProgress.value = 'toggling';
    word.isActive = !word.isActive;
    await saveWordsToLocalStorage(vocabularyStore.words);
  } catch (error) {
    console.error('Error toggling active state:', error);
    word.isActive = !word.isActive; // Revert on error
    alert('Ocorreu um erro ao alterar o estado. Tente novamente.');
  } finally {
    isLoading.value = false;
    actionInProgress.value = '';
  }
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

const difficultyOptions = [
  { value: 1, label: 'Fácil' },
  { value: 2, label: 'Média' },
  { value: 3, label: 'Difícil' }
];

const getLoadingMessage = computed(() => {
  switch (actionInProgress.value) {
    case 'adding':
      return 'Adicionando palavra...';
    case 'editing':
      return 'Salvando alterações...';
    case 'toggling':
      return 'Atualizando estado...';
    case 'deleting':
      return 'Excluindo palavras...';
    default:
      return 'Carregando...';
  }
});

function toggleSelectionMode() {
  selectionMode.value = !selectionMode.value;
  if (!selectionMode.value) {
    selectedWords.value.clear();
  }
}

function toggleWordSelection(word, event) {
  event.stopPropagation();
  if (selectedWords.value.has(word)) {
    selectedWords.value.delete(word);
  } else {
    selectedWords.value.add(word);
  }
}

function selectAllWords() {
  displayedWords.value.forEach(word => {
    selectedWords.value.add(word);
  });
}

function deselectAllWords() {
  selectedWords.value.clear();
}

async function activateSelectedWords() {
  if (!selectedWords.value.size) return;
  try {
    isLoading.value = true;
    actionInProgress.value = 'toggling';
    for (const word of selectedWords.value) {
      word.isActive = true;
    }
    await saveWordsToLocalStorage(vocabularyStore.words);
    selectedWords.value.clear();
  } catch (error) {
    console.error('Error activating words:', error);
    alert('Ocorreu um erro ao ativar as palavras. Tente novamente.');
  } finally {
    isLoading.value = false;
    actionInProgress.value = '';
  }
}

async function deactivateSelectedWords() {
  if (!selectedWords.value.size) return;
  try {
    isLoading.value = true;
    actionInProgress.value = 'toggling';
    for (const word of selectedWords.value) {
      word.isActive = false;
    }
    await saveWordsToLocalStorage(vocabularyStore.words);
    selectedWords.value.clear();
  } catch (error) {
    console.error('Error deactivating words:', error);
    alert('Ocorreu um erro ao desativar as palavras. Tente novamente.');
  } finally {
    isLoading.value = false;
    actionInProgress.value = '';
  }
}

async function deleteSelectedWords() {
  if (!selectedWords.value.size) return;
  if (!confirm('Deseja realmente excluir todas as palavras selecionadas?')) return;

  try {
    isLoading.value = true;
    actionInProgress.value = 'deleting';
    vocabularyStore.words = vocabularyStore.words.filter(word => !selectedWords.value.has(word));
    await saveWordsToLocalStorage(vocabularyStore.words);
    selectedWords.value.clear();
  } catch (error) {
    console.error('Error deleting words:', error);
    alert('Ocorreu um erro ao excluir as palavras. Tente novamente.');
  } finally {
    isLoading.value = false;
    actionInProgress.value = '';
  }
}

function toggleSpecialty(index) {
  const pos = newWord.specialties.indexOf(index);
  if (pos === -1) {
    newWord.specialties.push(index);
  } else {
    newWord.specialties.splice(pos, 1);
  }
  validateField('specialties');
}

function toggleEditSpecialty(index, specialtyIndex) {
  const pos = editData[index].specialties.indexOf(specialtyIndex);
  if (pos === -1) {
    editData[index].specialties.push(specialtyIndex);
  } else {
    editData[index].specialties.splice(pos, 1);
  }
}
</script>

<style scoped>
.my-vocabulary {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  /* padding: var(--spacing-md); */
  gap: var(--spacing-md);
}

.vocab-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  position: relative;
}

.vocab-controls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
}

.filters {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.filter-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

.actions {
  display: flex;
  gap: var(--spacing-md);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.search-word {
  flex: 1;
}

.results-info {
  text-align: center;
}

.results-count {
  font-size: 1rem;
  color: var(--text-secondary);
}

.batch-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.batch-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.batch-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

.batch-btn {
  width: 100%;
}

.vocabulary-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  overflow-y: auto;
  position: relative;
  padding-bottom: 80px;
  padding-top: 3px;
  /* Make space for the batch actions bar */
}

.term-item {
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  /* background-color: var(--surface-color); */
  transition: all 0.3s ease, height 0.3s ease, padding 0.3s ease;
  transform-origin: top;
  animation: slide-in 0.3s ease-out;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.term-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.term-item.expanded {
  /* background-color: var(--background-color); */
  /* transform: scale(1.02); */
}

.term-item.selected {
  border-color: var(--primary-color);
  background-color: rgba(52, 152, 219, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-badges {
  display: flex;
  gap: var(--spacing-sm);
}

.badge {
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.badge:hover {
  transform: translateY(-2px);
}

.difficulty-badge {
  /* background-color: var(--surface-color); */
}

.difficulty-1 {
  color: #2ecc71;
}

.difficulty-2 {
  color: #f1c40f;
}

.difficulty-3 {
  color: #e74c3c;
}

/* Dark mode improvements */
:deep(.dark) .difficulty-1 {
  color: #4ade80;
}

:deep(.dark) .difficulty-2 {
  color: #fbbf24;
}

:deep(.dark) .difficulty-3 {
  color: #fb7185;
}

:deep(.dark) .term-item {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

:deep(.dark) .term-item:hover {
  background-color: var(--dark-hover-color);
}

:deep(.dark) .term-item.expanded {
  background-color: var(--dark-background-color);
}

:deep(.dark) .clue {
  color: var(--dark-text-color);
}

:deep(.dark) .specialty-tag {
  background-color: var(--dark-primary-color);
  color: var(--dark-text-color);
}

:deep(.dark) .active-badge {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-secondary);
}

:deep(.dark) .active-badge.is-active {
  color: #4ade80;
}

:deep(.dark) .results-count {
  color: var(--dark-text-secondary);
}

:deep(.dark) .field-hint {
  color: var(--dark-text-secondary);
}

:deep(.dark) .duplicate {
  border-color: var(--dark-accent-color);
  background-color: rgba(252, 129, 129, 0.1);
}

:deep(.dark) .loading-content {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border: 1px solid var(--dark-border-color);
}

.active-badge {
  /* background-color: var(--surface-color); */
}

.active-badge.is-active {
  color: #2ecc71;
}

.card-details {
  margin-top: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  animation: fade-in 0.3s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.clue {
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--text-secondary);
  text-align: start;
}

.specialties-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.specialty-tag {
  padding: 4px 8px;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  animation: tag-pop 0.2s ease-out;
}

@keyframes tag-pop {
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.card-actions {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
}

.card-actions button {
  transition: all 0.2s ease;
}

.card-actions button:hover {
  transform: scale(1.1);
}

.edit-form {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  animation: fade-in 0.3s ease-out;
}

.edit-actions {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
}

.specialties-select {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--spacing-sm);
}

.specialty-button {
  cursor: pointer;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: var(--spacing-sm);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  /* color: var(--text-color); */
  transition: all 0.2s ease;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.specialty-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: var(--primary-color);
}

.specialty-button.selected {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

/* Dark mode support */
:deep(.dark) .specialty-button {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--text-color);
  /* background-color: var(--surface-color); */

}

:deep(.dark) .specialty-button:hover {
  border-color: var(--dark-primary-color);
}

:deep(.dark) .specialty-button.selected {
  background-color: var(--dark-primary-color);
  border-color: var(--dark-primary-color);
  color: white;
}

.duplicate {
  border-color: var(--accent-color);
  background-color: rgba(255, 99, 71, 0.1);
}

/* Loading overlay styles */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fade-in 0.2s ease-out;
}

.loading-content {
  background: var(--surface-color);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Dark mode support */
:deep(.dark) .loading-content {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border: 1px solid var(--dark-border-color);
}

.batch-actions-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: var(--surface-color); */
  padding: var(--spacing-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  z-index: 100;
  animation: slide-up 0.3s ease-out;
  border-top: 1px solid var(--border-color);
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}

:deep(.dark) .batch-actions-bar {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
}

.batch-actions-bar .selected-count {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
}

/* Responsive design */
@media (max-width: 768px) {
  .vocab-controls {
    flex-direction: column;
  }

  .actions {
    flex-direction: column;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }

  .specialties-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

.add-word-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.specialties-section,
.difficulty-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.field-hint {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xs);
}

.specialty-button {
  cursor: pointer;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: var(--spacing-sm);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  /* background-color: var(--surface-color); */
  /* color: var(--text-color); */
  transition: all 0.2s ease;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.specialty-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: var(--primary-color);
}

.specialty-button.selected {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.specialty-button.with-error {
  border-color: var(--error-color);
}

/* Dark mode support */
:deep(.dark) .specialty-button {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

:deep(.dark) .specialty-button:hover {
  border-color: var(--dark-primary-color);
}

:deep(.dark) .specialty-button.selected {
  background-color: var(--dark-primary-color);
  border-color: var(--dark-primary-color);
  color: white;
}

.word-preview {
  background-color: var(--background-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.word-preview h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.preview-card {
  /* background-color: var(--surface-color); */
  border-radius: var(--radius-sm);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
}

.preview-card h3 {
  margin: 0;
  color: var(--text-color);
  font-size: 1.2rem;
}

.preview-clue {
  color: var(--text-secondary);
  margin: var(--spacing-sm) 0;
  font-size: 0.95rem;
}

.preview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
}

.preview-tag {
  background-color: var(--primary-color);
  color: white;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
}

.preview-difficulty {
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  /* background-color: var(--surface-color); */
}

.modal-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

/* Dark mode support */
:deep(.dark) .word-preview {
  background-color: #1A202C; /* Match expanded term-item background */
}

:deep(.dark) .preview-card {
  background-color: #2D3748; /* Match term-item background */
}

:deep(.dark) .preview-card h3 {
  color: var(--dark-text-color);
}

:deep(.dark) .preview-clue {
  color: var(--dark-text-secondary);
}

:deep(.dark) .preview-difficulty {
  background-color: #2D3748;
  color: var(--dark-text-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .specialties-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .modal-actions {
    flex-direction: column;
  }

  .modal-actions button {
    width: 100%;
  }
}
</style>
