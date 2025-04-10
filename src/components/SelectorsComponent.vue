<template>
  <div class="selectors-container">
    <button class="collapse-toggle" @click="toggleCollapse">
      <span class="toggle-text" v-if="isExpanded">
        Especialidade &nbsp;
        <svg class="toggle-icon" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 8l6 6c.3.3.3.7 0 1s-.7.3-1 0l-5-5-5 5c-.3.3-.7.3-1 0s-.3-.7 0-1l6-6z"/>
        </svg>
        &nbsp;Dificuldade
      </span>
      <span class="toggle-text" v-else>
        Especialidade &nbsp;
        <svg class="toggle-icon" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 16.5l-6-6c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l5 5 5-5c.3-.3.7-.3 1 0s.3.7 0 1l-6 6z"/>
        </svg>
        &nbsp;Dificuldade
      </span>
    </button>
    <transition name="fade">
      <div class="collapsible-content" :class="{ expanded: isExpanded }">
        <div class="controls">
          <div class="controls-option">
            <select id="specialty-select" v-model="selectedSpecialty">
              <option value="all">Todas</option>
              <option v-for="(spec, index) in specialties" :key="index" :value="index">
                {{ spec }}
              </option>
            </select>
          </div>
          <div class="controls-option">
            <select id="difficulty-select" v-model="selectedDifficulty">
              <option value="all">Todas</option>
              <option value="1">Fácil</option>
              <option value="2">Média</option>
              <option value="3">Difícil</option>
            </select>
          </div>
        </div>
        <div class="word-counter">
          Total de palavras: {{ filteredWordsCount }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useSettingsStore } from '@/store/settings'
import { specialties } from '@/data/defaultSpecialties.js'
import { useVocabularyStore } from '@/store/vocabulary'

const emit = defineEmits(['specialty-change', 'difficulty-change'])
const settingsStore = useSettingsStore()
const vocabularyStore = useVocabularyStore()

const selectedSpecialty = computed({
  get: () => settingsStore.selectedSpecialty,
  set: (value) => settingsStore.setSpecialty(value)
})

const selectedDifficulty = computed({
  get: () => settingsStore.selectedDifficulty,
  set: (value) => settingsStore.setDifficulty(value)
})

const filteredWordsCount = computed(() => {
  let result = vocabularyStore.words;
  if (selectedSpecialty.value !== 'all') {
    const specialtyIndex = parseInt(selectedSpecialty.value);
    result = result.filter(word => word.specialties.includes(specialtyIndex));
  }
  if (selectedDifficulty.value !== 'all') {
    const difficultyLevel = parseInt(selectedDifficulty.value);
    result = result.filter(word => word.difficulty === difficultyLevel);
  }
  return result.length;
})

watch(selectedSpecialty, (newVal) => {
  emit('specialty-change', newVal)
})
watch(selectedDifficulty, (newVal) => {
  emit('difficulty-change', newVal)
})

const isExpanded = ref(false)
function toggleCollapse() {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.selectors-container {
  margin: 1rem 0;
}

.collapse-toggle {
  background: none;
  border: none;
  color: var(--secondary-color, #333);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  transition: transform 0.3s ease, color 0.3s ease;
  margin: 0 auto;
}
.collapse-toggle:hover {
  color: var(--primary-color, #2ecc71);
  transform: scale(1.1);
}
.toggle-icon {
  transition: transform 0.3s ease;
}
.collapse-toggle .toggle-text {
  display: flex;
  align-items: center;
}

.collapsible-content {
  overflow: hidden;
  transition: all 0.5s ease;
  visibility: hidden;
  height: 0;
}
.collapsible-content.expanded {
  visibility: visible;
  height: auto;
  margin-top: 10px;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 0 10px;
}

.controls-option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

select {
  background: var(--select-background, #fff);
  border: 1px solid var(--select-border, #ccc);
  border-radius: var(--select-border-radius, 4px);
  padding: 10px;
  font-size: var(--select-font-size, 1rem);
  color: var(--select-color, #333);
  cursor: pointer;
  width: 100%;
}
#specialty-select {
  max-width: 200px;
}
#difficulty-select {
  width: 100px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.word-counter {
  text-align: center;
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--secondary-color, #333);
}

@media only screen and (max-width: 768px) {
  .controls {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  #specialty-select, #difficulty-select {
    width: 100%;
  }
}
</style>
