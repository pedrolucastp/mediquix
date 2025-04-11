<template>
  <div class="input-container" :class="{ dark: isDarkMode }">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :required="required"
        :class="['base-input', { 'with-icon': !!icon }]"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
      />
      <font-awesome-icon
        v-if="icon"
        :icon="['fas', icon]"
        class="input-icon"
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
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
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
  maxlength: {
    type: Number,
    default: undefined
  },
  icon: {
    type: String,
    default: ''
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
    default: () => `input-${Math.random().toString(36).substring(2, 9)}`
  }
});

defineEmits(['update:modelValue', 'blur', 'focus']);

const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  width: 100%;
}

.input-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.base-input {
  width: 100%;
  padding: var(--spacing-sm);
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--surface-color);
  color: var(--text-color);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.base-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(44, 110, 171, 0.1);
}

.base-input:disabled {
  background-color: var(--background-color);
  cursor: not-allowed;
  opacity: 0.7;
}

.base-input.with-icon {
  padding-right: calc(var(--spacing-lg) + var(--spacing-sm));
}

.input-icon {
  position: absolute;
  right: var(--spacing-sm);
  color: var(--text-secondary);
  pointer-events: none;
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
.dark .input-label {
  color: var(--dark-text-secondary);
}

.dark .base-input {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

.dark .base-input:hover:not(:disabled) {
  border-color: var(--dark-text-secondary);
}

.dark .base-input:focus {
  border-color: var(--dark-primary-color);
  box-shadow: 0 0 0 2px var(--dark-focus-color);
}

.dark .base-input:disabled {
  background-color: var(--dark-background-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-secondary);
}

.dark .input-icon {
  color: var(--dark-text-secondary);
}

.dark .hint-text {
  color: var(--dark-text-secondary);
}

.dark .error-text {
  color: var(--error-color);
}
</style>