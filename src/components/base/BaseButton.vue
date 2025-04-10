<template>
  <button
    :class="[
      'base-button',
      variant,
      { icon: !!icon, disabled: disabled },
      { dark: isDarkMode }
    ]"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
  >
    <font-awesome-icon v-if="icon" :icon="['fas', icon]" :size="iconSize" />
    <span v-if="$slots.default" :class="{ 'with-icon': icon }">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useUIStore } from '@/store/ui';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'accent', 'outline'].includes(value)
  },
  icon: {
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: '1x'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button'
  }
});

defineEmits(['click']);

const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);
</script>

<style scoped>
.base-button {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-color);
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.base-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.base-button.primary {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.base-button.secondary {
  background-color: var(--secondary-color);
  color: white;
  border-color: var(--secondary-color);
}

.base-button.accent {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.base-button.outline {
  background-color: transparent;
  border-color: transparent;
}

.base-button.icon {
  padding: var(--spacing-sm);
}

/* .with-icon {
  margin-left: var(--spacing-xs);
} */

/* Dark mode styles */
.base-button.dark {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

.base-button.dark:hover:not(:disabled) {
  background-color: var(--dark-primary-color);
  border-color: var(--dark-primary-color);
}

.base-button.dark.outline:hover:not(:disabled) {
  background-color: var(--dark-surface-color);
}
</style>