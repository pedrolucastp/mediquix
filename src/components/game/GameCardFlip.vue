<template>
  <div
    class="card"
    :class="cardClasses"
    :style="cardStyles"
    @click="!disabled && emit('click')"
  >
    <div class="card-inner" :style="innerStyles">
      <div class="card-front">
        <slot name="front">
          <font-awesome-icon :icon="['fas', 'question']" size="2x" />
        </slot>
      </div>
      <div class="card-back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, shallowRef, watch } from 'vue';
import { useUIStore } from '@/store/ui';

const props = defineProps({
  flipped: {
    type: Boolean,
    default: false
  },
  matched: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

// Use shallowRef for better performance on frequently changing props
const flippedState = shallowRef(props.flipped);
const matchedState = shallowRef(props.matched);

// Cache dark mode state
const uiStore = useUIStore();
const isDarkMode = shallowRef(uiStore.isDarkMode);

// Watch props efficiently
watch(() => props.flipped, (newVal) => {
  flippedState.value = newVal;
}, { flush: 'post' });

watch(() => props.matched, (newVal) => {
  matchedState.value = newVal;
}, { flush: 'post' });

// Cache class computation
const cardClasses = computed(() => ({
  flipped: flippedState.value,
  matched: matchedState.value,
  dark: isDarkMode.value
}));

// Cache style computation for transforms
const cardStyles = computed(() => ({
  transform: matchedState.value ? 'scale(0.95)' : undefined,
  willChange: flippedState.value ? 'transform' : undefined
}));

const innerStyles = computed(() => ({
  transform: flippedState.value ? 'rotateY(180deg)' : undefined
}));
</script>

<style scoped>
.card {
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
  user-select: none;
}

.card.matched {
  cursor: default;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: var(--spacing-md); */
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.card-front {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}

.card-back {
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  transform: rotateY(180deg) rotate(-12deg);
  font-size: 0.9rem;
  text-align: center;
}

/* Hover effects */
.card:not(.matched):hover .card-front {
  box-shadow: var(--shadow-md);
  transform: translateZ(10px);
}

/* Dark mode styles */
.dark .card-back {
  background-color: var(--dark-surface-color);
  color: var(--dark-text-color);
  border-color: var(--dark-border-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .card-front {
    font-size: 1.25rem;
  }

  .card-back {
    font-size: 0.8rem;
  }
}
</style>