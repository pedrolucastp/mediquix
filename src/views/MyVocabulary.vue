<template>
  <div class="my-vocabulary">
    <div class="vocab-header">
      <h1>Meu Vocabulário</h1>
      <SelectorsComponent />
      <div class="options-and-searchbar">
        <BaseButton 
          variant="primary" 
          icon="sliders-h" 
          @click="openOptionsModal"
          class="options-btn"
        >
          Opções
        </BaseButton>
        <div class="search-word">
          <BaseInput
            v-model="searchTerm"
            placeholder="Buscar palavra ou definição..."
            icon="search"
            @keyup.enter="searchWords"
          />
        </div>
      </div>
    </div>

    <BaseModal
      v-model="showOptionsModal"
      title="Opções"
    >
      <div class="options-buttons">
        <BaseButton variant="primary" icon="plus" @click="openAddWordModal" class="option-btn">
          Adicionar Palavra
        </BaseButton>
        <BaseButton variant="primary" icon="check" @click="activateAll" class="option-btn">
          Ativar todos
        </BaseButton>
        <BaseButton variant="primary" icon="times" @click="deactivateAll" class="option-btn">
          Desativar todos
        </BaseButton>
        <BaseButton variant="primary" :icon="onlyActive ? 'eye' : 'eye-slash'" @click="toggleOnlyActive" class="option-btn">
          {{ onlyActive ? "Exibir todos" : "Exibir apenas ativos" }}
        </BaseButton>
        <BaseButton variant="primary" icon="highlighter" @click="toggleHighlightDuplicates" class="option-btn">
          {{ highlightDuplicates ? "Remover Destaque" : "Destacar Duplicatas" }}
        </BaseButton>
        <BaseButton variant="accent" icon="trash" @click="removeDuplicates" class="option-btn">
          Remover Duplicatas
        </BaseButton>
      </div>
    </BaseModal>

    <!-- <div class="counter">
      <p>Total de termos: <span>{{ displayedWords.length }}</span></p>
    </div> -->

    <div class="vocabulary-list">
      <div
        v-for="(word, index) in displayedWords"
        :key="word.word + index"
        class="term-item"
        :class="{
          duplicate: highlightDuplicates && duplicateMap[wordKey(word)] > 1,
          expanded: isExpanded(index)
        }"
        @click="!editingIndices.includes(index) && toggleExpansion(index)"
      >
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
            <span v-for="specIndex in word.specialties" 
                  :key="specIndex" 
                  class="specialty-tag">
              {{ vocabularyStore.specialties[specIndex] }}
            </span>
          </div>
          <div class="card-actions">
            <BaseButton 
              variant="outline" 
              icon="edit" 
              @click.stop="toggleEditMode(index)"
              size="sm"
            />
            <BaseButton 
              variant="outline" 
              icon="trash" 
              @click.stop="deleteWord(index)"
              size="sm"
            />
            <BaseButton 
              variant="outline" 
              :icon="word.isActive ? 'eye' : 'eye-slash'" 
              @click.stop="toggleActive(word)"
              size="sm"
            />
          </div>
        </div>

        <div class="edit-form" v-if="editingIndices.includes(index)">
          <BaseInput
            v-model="editData[index].word"
            label="Palavra"
            required
          />
          <BaseInput
            v-model="editData[index].clue"
            label="Dica"
            type="textarea"
            required
          />
          <div class="specialties-select">
            <label>Especialidades:</label>
            <div class="specialties-grid">
              <label v-for="(spec, i) in vocabularyStore.specialties" 
                     :key="i"
                     class="specialty-checkbox"
                     :class="{ selected: editData[index].specialties.includes(i) }">
                <input
                  type="checkbox"
                  :value="i"
                  v-model="editData[index].specialties"
                />
                <span class="specialty-label">{{ spec }}</span>
              </label>
            </div>
          </div>
          <BaseSelect
            v-model="editData[index].difficulty"
            :options="difficultyOptions"
            label="Dificuldade"
            required
          />
          <div class="edit-actions">
            <BaseButton 
              variant="primary" 
              icon="save" 
              @click="saveEdit(index)"
            >
              Salvar
            </BaseButton>
            <BaseButton 
              variant="outline" 
              icon="times" 
              @click="cancelEdit(index)"
            >
              Cancelar
            </BaseButton>
          </div>
        </div>
      </div>
    </div>

    <BaseModal
      v-model="showAddModal"
      title="Adicionar Nova Palavra"
    >
      <form @submit.prevent="addNewWord" class="add-word-form">
        <BaseInput
          v-model="newWord.word"
          label="Palavra"
          required
        />
        <BaseInput
          v-model="newWord.clue"
          label="Dica"
          type="textarea"
          required
        />
        <div class="specialties-select">
          <label>Especialidades:</label>
          <div class="specialties-grid">
            <label v-for="(spec, i) in vocabularyStore.specialties" 
                   :key="i"
                   class="specialty-checkbox"
                   :class="{ selected: newWord.specialties.includes(i) }">
              <input
                type="checkbox"
                :value="i"
                v-model="newWord.specialties"
              />
              <span class="specialty-label">{{ spec }}</span>
            </label>
          </div>
        </div>
        <BaseSelect
          v-model="newWord.difficulty"
          :options="difficultyOptions"
          label="Dificuldade"
          required
        />
        <div class="modal-actions">
          <BaseButton 
            type="submit" 
            variant="primary" 
            icon="plus"
          >
            Adicionar
          </BaseButton>
          <BaseButton 
            type="button" 
            variant="outline" 
            icon="times" 
            @click="closeAddWordModal"
          >
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

async function addNewWord() {
  if (
    !newWord.word.trim() ||
    !newWord.clue.trim() ||
    !newWord.difficulty ||
    newWord.specialties.length === 0
  ) {
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
  switch(actionInProgress.value) {
    case 'adding':
      return 'Adicionando palavra...';
    case 'editing':
      return 'Salvando alterações...';
    case 'toggling':
      return 'Atualizando estado...';
    default:
      return 'Carregando...';
  }
});
</script>

<style scoped>
.my-vocabulary {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md);
  gap: var(--spacing-md);
}

.vocab-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.options-and-searchbar {
  display: flex;
  gap: var(--spacing-md);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.search-word {
  flex: 1;
}

.options-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  width: 100%;
}

.option-btn {
  width: 100%;
}

.vocabulary-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  overflow-y: auto;
  position: relative;
}

.term-item {
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--surface-color);
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
  background-color: var(--background-color);
  transform: scale(1.02);
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
  background-color: var(--surface-color);
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

.active-badge {
  background-color: var(--surface-color);
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

.specialty-checkbox {
  position: relative;
  cursor: pointer;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: var(--spacing-sm);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  background-color: transparent;
}

.specialty-checkbox:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: var(--primary-color);
}

.specialty-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.specialty-label {
  flex: 1;
  text-align: center;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.specialty-checkbox.selected {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

/* Dark mode support */
:deep(.dark) .specialty-checkbox {
  border-color: var(--dark-border-color);
}

:deep(.dark) .specialty-checkbox:hover {
  border-color: var(--dark-primary-color);
}

:deep(.dark) .specialty-checkbox.selected {
  background-color: var(--dark-primary-color);
  border-color: var(--dark-primary-color);
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
:deep(.dark) .term-item {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
}

:deep(.dark) .term-item.expanded {
  background-color: var(--dark-background-color);
}

:deep(.dark) .clue {
  color: var(--dark-text-secondary);
}

:deep(.dark) .badge {
  background-color: var(--dark-surface-color);
}

/* Responsive design */
@media (max-width: 768px) {
  .options-and-searchbar {
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
</style>
