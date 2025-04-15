<template>
  <button :class="[
    'base-button',
    variant,
    { icon: !!icon, disabled: disabled, loading: loading },
    { dark: isDarkMode }
  ]" :disabled="disabled || loading" :type="type" @click="$emit('click', $event)">
    <font-awesome-icon v-if="icon" :icon="['fas', icon]" :size="iconSize" :class="{ 'fa-icon': loading }" />
    <span v-if="$slots.default" :class="{ 'with-icon': icon && !loading }">
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
  loading: {
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

.base-button.loading {
  cursor: wait;
  opacity: 0.7;
}

.base-button.loading .with-icon {
  opacity: 0;
}

.base-button .with-icon {
  color: inherit;
}

@media (max-width: 768px) {
  .with-icon {
    font-size: 0.8rem;
  }
}

.base-button.loading .fa-icon {
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

/* Dark mode styles */
.base-button.dark {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

.base-button.dark:hover:not(:disabled) {
  background-color: rgba(99, 179, 237, 0.2);
  border-color: var(--dark-primary-color);
  transform: translateY(-1px);
}

.base-button.dark.primary {
  background-color: var(--dark-primary-color);
  border-color: var(--dark-primary-color);
  color: var(--dark-text-color);
}

.base-button.dark.primary:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.base-button.dark.secondary {
  background-color: var(--dark-secondary-color);
  border-color: var(--dark-secondary-color);
  color: var(--dark-text-color);
}

.base-button.dark.accent {
  background-color: var(--dark-accent-color);
  border-color: var(--dark-accent-color);
  color: var(--dark-text-color);
}

.base-button.dark.outline {
  /* background-color: transparent; */
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

.base-button.dark.outline:hover:not(:disabled) {
  background-color: var(--dark-hover-color);
  border-color: var(--dark-primary-color);
}

.base-button.dark .with-icon {
  color: var(--dark-text-color);
}

/* Toggle button styles */
.base-button.outline.toggle {
  min-width: 120px;
  position: relative;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  transition: all 0.3s ease;
}

.base-button.outline.toggle.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.base-button.outline.toggle:hover:not(:disabled) {
  transform: translateY(-1px);
  background-color: var(--surface-color);
}

.base-button.outline.toggle.active:hover:not(:disabled) {
  background-color: var(--primary-color);
  opacity: 0.9;
}

/* Dark mode support */
.base-button.dark.outline.toggle {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

.base-button.dark.outline.toggle:hover:not(:disabled) {
  background-color: var(--dark-hover-color);
}

.base-button.dark.outline.toggle.active {
  background-color: var(--dark-primary-color);
  border-color: var(--dark-primary-color);
  color: var(--dark-text-color);
}

.base-button.dark.outline.toggle.active:hover:not(:disabled) {
  opacity: 0.9;
  background-color: var(--dark-primary-color);
}
</style>