<template>
  <div class="select-container" :class="{ dark: isDarkMode }">
    <label v-if="label" :for="id" class="select-label">{{ label }}</label>
    <div class="select-wrapper">
      <select
        :id="id"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        class="base-select"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="select-icon"
      />
    </div>
    <small v-if="error" class="error-text">{{ error }}</small>
    <small v-else-if="hint" class="hint-text">{{ hint }}</small>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUIStore } from '@/store/ui';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(option => 
        typeof option === 'object' && 
        'value' in option && 
        'label' in option
      );
    }
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => `select-${Math.random().toString(36).substring(2, 9)}`
  }
});

defineEmits(['update:modelValue']);

const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);
</script>

<style scoped>
.select-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  width: 100%;
}

.select-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.base-select {
  width: 100%;
  padding: var(--spacing-sm);
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--surface-color);
  color: var(--text-color);
  cursor: pointer;
  appearance: none;
  padding-right: calc(var(--spacing-lg) + var(--spacing-sm));
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.base-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(44, 110, 171, 0.1);
}

.base-select:disabled {
  background-color: var(--background-color);
  cursor: not-allowed;
  opacity: 0.7;
}

.select-icon {
  position: absolute;
  right: var(--spacing-sm);
  color: var(--text-secondary);
  pointer-events: none;
  transition: transform 0.2s ease;
}

.base-select:focus + .select-icon {
  transform: rotate(180deg);
}

.error-text {
  color: var(--error-color);
  font-size: 0.8rem;
}

.hint-text {
  color: var(--text-secondary);
  font-size: 0.8rem;
}

/* Dark mode styles */
.dark .select-label {
  color: var(--dark-text-secondary);
}

.dark .base-select {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

.dark .base-select:hover:not(:disabled) {
  border-color: var(--dark-text-secondary);
}

.dark .base-select:focus {
  border-color: var(--dark-primary-color);
  box-shadow: 0 0 0 2px var(--dark-focus-color);
}

.dark .base-select:disabled {
  background-color: var(--dark-background-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-secondary);
}

.dark .select-icon {
  color: var(--dark-text-secondary);
}

.dark .hint-text {
  color: var(--dark-text-secondary);
}

.dark .error-text {
  color: var(--error-color);
}

/* Option styles - these will affect the dropdown */
.dark .base-select option {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  padding: var(--spacing-sm);
}
</style>