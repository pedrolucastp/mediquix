<template>
  <div class="game-container" :class="{ dark: isDarkMode }">
    <h1>{{ title }}</h1>
    
    <SelectorsComponent
      v-if="showSelectors"
      @specialty-change="handleSpecialtyChange"
      @difficulty-change="handleDifficultyChange"
    />

    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-else-if="loading" class="loading">
      <font-awesome-icon icon="circle-notch" spin size="2x" />
      <p>Loading...</p>
    </div>

    <div v-else class="game-content">
      <slot />
    </div>

    <div v-if="score !== undefined" class="score-container">
      <p class="score">Score: {{ score }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUIStore } from '@/store/ui';
import SelectorsComponent from '@/components/common/Selectors/SelectorsComponent.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  showSelectors: {
    type: Boolean,
    default: true
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
  }
});

const emit = defineEmits(['specialty-change', 'difficulty-change']);

const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);

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
  align-items: center;
  padding: var(--spacing-md);
  height: 100%;
  overflow: auto;
}

h1 {
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
}

.game-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  }
}
</style>