<template>
  <div class="selectors-container">
    <button class="filters-button" @click="showModal = true">
      <span class="filters-label">Filtros</span>
      <span class="filters-summary" v-if="hasActiveFilters">
        {{ activeFiltersText }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <path fill="currentColor" d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
      </svg>
    </button>

    <BaseModal v-model="showModal" title="Filtros">
      <div class="modal-content">
        <div class="filter-section">
          <h3>Especialidade</h3>
          <select id="specialty-select" v-model="selectedSpecialty" class="filter-select">
            <option value="all">Todas</option>
            <option v-for="(spec, index) in specialties" :key="index" :value="index">
              {{ spec }}
            </option>
          </select>
        </div>

        <div class="filter-section">
          <h3>Dificuldade</h3>
          <select id="difficulty-select" v-model="selectedDifficulty" class="filter-select">
            <option value="all">Todas</option>
            <option value="1">Fácil</option>
            <option value="2">Média</option>
            <option value="3">Difícil</option>
          </select>
        </div>

        <div class="word-counter">
          Total de palavras: {{ filteredWordsCount }}
        </div>

        <div class="modal-actions">
          <BaseButton variant="outline" @click="resetFilters">
            Limpar Filtros
          </BaseButton>
          <BaseButton variant="primary" @click="applyFilters">
            Aplicar
          </BaseButton>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useSettingsStore } from '@/store/settings'
import { specialties } from '@/data/defaultSpecialties.js'
import { useVocabularyStore } from '@/store/vocabulary'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const emit = defineEmits(['specialty-change', 'difficulty-change'])
const settingsStore = useSettingsStore()
const vocabularyStore = useVocabularyStore()

const showModal = ref(false)
const tempSelectedSpecialty = ref('all')
const tempSelectedDifficulty = ref('all')

const selectedSpecialty = computed({
  get: () => settingsStore.selectedSpecialty,
  set: (value) => {
    tempSelectedSpecialty.value = value
  }
})

const selectedDifficulty = computed({
  get: () => settingsStore.selectedDifficulty,
  set: (value) => {
    tempSelectedDifficulty.value = value
  }
})

const hasActiveFilters = computed(() => {
  return settingsStore.selectedSpecialty !== 'all' || settingsStore.selectedDifficulty !== 'all'
})

const activeFiltersText = computed(() => {
  const filters = []
  if (settingsStore.selectedSpecialty !== 'all') {
    filters.push(specialties[settingsStore.selectedSpecialty])
  }
  if (settingsStore.selectedDifficulty !== 'all') {
    const difficultyMap = { '1': 'Fácil', '2': 'Média', '3': 'Difícil' }
    filters.push(difficultyMap[settingsStore.selectedDifficulty])
  }
  return filters.join(' • ')
})

const filteredWordsCount = computed(() => {
  let result = vocabularyStore.words
  if (tempSelectedSpecialty.value !== 'all') {
    const specialtyIndex = parseInt(tempSelectedSpecialty.value)
    result = result.filter(word => word.specialties.includes(specialtyIndex))
  }
  if (tempSelectedDifficulty.value !== 'all') {
    const difficultyLevel = parseInt(tempSelectedDifficulty.value)
    result = result.filter(word => word.difficulty === difficultyLevel)
  }
  return result.length
})

function applyFilters() {
  settingsStore.setSpecialty(tempSelectedSpecialty.value)
  settingsStore.setDifficulty(tempSelectedDifficulty.value)
  emit('specialty-change', tempSelectedSpecialty.value)
  emit('difficulty-change', tempSelectedDifficulty.value)
  showModal.value = false
}

function resetFilters() {
  tempSelectedSpecialty.value = 'all'
  tempSelectedDifficulty.value = 'all'
  settingsStore.setSpecialty('all')
  settingsStore.setDifficulty('all')
  emit('specialty-change', 'all')
  emit('difficulty-change', 'all')
  showModal.value = false
}

watch(() => showModal.value, (newVal) => {
  if (newVal) {
    tempSelectedSpecialty.value = settingsStore.selectedSpecialty
    tempSelectedDifficulty.value = settingsStore.selectedDifficulty
  }
})
</script>

<style scoped>
.selectors-container {
  position: relative;
  /* z-index: 100; */
}

.filters-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-color);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.filters-button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
  border-color: var(--primary-color);
}

.filters-label {
  font-weight: 600;
}

.filters-summary {
  color: var(--primary-color);
  font-size: 0.85rem;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-md);
}

.filter-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.filter-section h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-color);
}

.filter-select {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--surface-color);
  color: var(--text-color);
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.filter-select:hover {
  border-color: var(--primary-color);
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
}

.word-counter {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  padding: var(--spacing-md) 0;
  border-top: 1px solid var(--border-color);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  border-top: 1px solid var(--border-color);
  padding-top: var(--spacing-md);
}

@media (max-width: 768px) {
  .filters-button {
    width: 100%;
    justify-content: space-between;
  }

  .filters-summary {
    max-width: 150px;
  }

  .modal-actions {
    flex-direction: column;
  }

  .modal-actions button {
    width: 100%;
  }
}

:deep(.dark) .filters-button {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

:deep(.dark) .filters-summary {
  color: var(--dark-primary-color);
}

:deep(.dark) .filter-select {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

:deep(.dark) .word-counter {
  color: var(--dark-text-secondary);
  border-color: var(--dark-border-color);
}
</style>
