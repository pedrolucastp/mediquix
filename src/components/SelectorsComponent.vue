<template>
  <div class="selectors-container">
    <button class="collapse-toggle" @click="toggleCollapse">
      <template v-if="isExpanded">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 8l6 6c.3.3.3.7 0 1s-.7.3-1 0l-5-5-5 5c-.3.3-.7.3-1 0s-.3-.7 0-1l6-6z"
          />
        </svg>
      </template>
      <template v-else>
        Especialidade 
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 16.5l-6-6c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l5 5 5-5c.3-.3.7-.3 1 0s.3.7 0 1l-6 6z"
          />
        </svg>
        Dificuldade
      </template>
    </button>

    <div class="collapsible-content" :class="{ expanded: isExpanded }">
      <div class="controls-option">
        <label for="specialty-select">Especialidade</label>
        <select id="specialty-select" v-model="selectedSpecialty">
          <option value="all">Todas</option>
          <option v-for="(spec, index) in specialties" :key="index" :value="index">
            {{ spec }}
          </option>
        </select>
      </div>
      <div class="controls-option">
        <label for="difficulty-select">Dificuldade</label>
        <select id="difficulty-select" v-model="selectedDifficulty">
          <option value="all">Todas</option>
          <option value="1">Fácil</option>
          <option value="2">Média</option>
          <option value="3">Difícil</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useSettingsStore } from '@/store/userSettings'
import { specialties } from '@/data/defaultSpecialties.js'

const emit = defineEmits(['specialty-change', 'difficulty-change'])

const settingsStore = useSettingsStore()

const selectedSpecialty = computed({
  get: () => settingsStore.selectedSpecialty,
  set: (value) => settingsStore.setSpecialty(value)
})

const selectedDifficulty = computed({
  get: () => settingsStore.selectedDifficulty,
  set: (value) => settingsStore.setDifficulty(value)
})

watch(selectedSpecialty, (newVal, oldVal) => {
  emit('specialty-change', newVal)
})

watch(selectedDifficulty, (newVal, oldVal) => {
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
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.collapsible-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.collapsible-content.expanded {
  max-height: 100px;
}

.controls-option {
  margin: 0.5rem 0;
}
</style>
