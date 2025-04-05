<template>
  <div class="selectors-container" :class="{ dark: isDarkMode }">
    <BaseButton
      variant="outline"
      icon="sliders-h"
      class="collapse-toggle"
      @click="toggleCollapse"
    >
      <span class="toggle-text">
        {{ isExpanded ? 'Ocultar Filtros' : 'Mostrar Filtros' }}
      </span>
    </BaseButton>

    <Transition name="fade">
      <div class="collapsible-content" :class="{ expanded: isExpanded }">
        <div class="controls">
          <div class="controls-option">
            <BaseSelect
              v-model="selectedSpecialty"
              :options="specialtyOptions"
              label="Especialidade"
              placeholder="Selecione a especialidade"
            />
          </div>
          <div class="controls-option">
            <BaseSelect
              v-model="selectedDifficulty"
              :options="difficultyOptions"
              label="Dificuldade"
              placeholder="Selecione a dificuldade"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSettingsStore } from '@/store/settings';
import { useUIStore } from '@/store/ui';
import { specialties } from '@/data/defaultSpecialties';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';

const emit = defineEmits(['specialty-change', 'difficulty-change']);
const settingsStore = useSettingsStore();
const uiStore = useUIStore();

const isDarkMode = computed(() => uiStore.isDarkMode);
const isExpanded = ref(false);

// Convert specialties array to options format
const specialtyOptions = computed(() => [
  { value: 'all', label: 'Todas' },
  ...specialties.map((specialty, index) => ({
    value: index.toString(),
    label: specialty
  }))
]);

// Define difficulty options
const difficultyOptions = [
  { value: 'all', label: 'Todas' },
  { value: '1', label: 'Fácil' },
  { value: '2', label: 'Média' },
  { value: '3', label: 'Difícil' }
];

// Two-way binding with settingsStore
const selectedSpecialty = computed({
  get: () => settingsStore.selectedSpecialty,
  set: (value) => {
    settingsStore.setSpecialty(value);
    emit('specialty-change', value);
  }
});

const selectedDifficulty = computed({
  get: () => settingsStore.selectedDifficulty,
  set: (value) => {
    settingsStore.setDifficulty(value);
    emit('difficulty-change', value);
  }
});

function toggleCollapse() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.selectors-container {
  margin: var(--spacing-md) 0;
}

.collapse-toggle {
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.collapsible-content {
  overflow: hidden;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.collapsible-content.expanded {
  height: auto;
  opacity: 1;
  visibility: visible;
  margin-top: var(--spacing-md);
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--spacing-md);
  padding: 0 var(--spacing-md);
}

.controls-option {
  min-width: 200px;
}

@media (max-width: 768px) {
  .controls {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .controls-option {
    width: 100%;
  }
}
</style>