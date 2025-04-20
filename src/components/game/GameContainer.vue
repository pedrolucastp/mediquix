<template>
  <div class="game-container" :class="{ dark: isDarkMode }">
    <h1>{{ title }}</h1>
    
    <GameMenuBar
      :gameInstructions="gameInstructions"
      :availablePerks="availablePerks"
      @specialty-change="handleSpecialtyChange"
      @difficulty-change="handleDifficultyChange"
    >
      <template #settings>
        <slot name="game-settings"></slot>
      </template>
      <template #info>
        <slot name="game-info"></slot>
      </template>
    </GameMenuBar>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-else-if="loading" class="loading">
      <font-awesome-icon icon="circle-notch" spin size="2x" />
      <p>Carregando...</p>
    </div>

    <div v-else class="game-content">
      <slot />
    </div>

    <div v-if="score !== undefined" class="score-container">
      <p class="score">Pontuação: {{ score }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, shallowRef, watch } from 'vue';
import { useUIStore } from '@/store/ui';
import GameMenuBar from './GameMenuBar.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  gameInstructions: {
    type: String,
    required: true
  },
  error: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  score: {
    type: Number,
    default: undefined
  },
  availablePerks: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['specialty-change', 'difficulty-change']);

const uiStore = useUIStore();
const isDarkMode = shallowRef(uiStore.isDarkMode);

watch(() => uiStore.isDarkMode, (newValue) => {
  isDarkMode.value = newValue;
}, { flush: 'post' });

function handleSpecialtyChange(value) {
  emit('specialty-change', value);
}

function handleDifficultyChange(value) {
  emit('difficulty-change', value);
}
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--spacing-md);
  overflow: auto;
}

h1 {
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
  text-align: center;
}

.game-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.error-message {
  color: var(--error-color);
  text-align: center;
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  border: 1px solid var(--error-color);
  border-radius: var(--radius-md);
  background-color: var(--surface-color);
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  margin: var(--spacing-xl) 0;
}

.loading p {
  margin: 0;
}

.score-container {
  margin-top: var(--spacing-md);
  text-align: center;
}

.score {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0;
}

/* Dark mode styles */
.dark h1 {
  color: var(--dark-text-color);
}

.dark .error-message {
  background-color: var(--dark-surface-color);
}

.dark .loading {
  color: var(--dark-text-secondary);
}

.dark .score {
  color: var(--dark-primary-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .game-container {
    padding: var(--spacing-sm);
    justify-content: flex-start;
  }
}
</style>