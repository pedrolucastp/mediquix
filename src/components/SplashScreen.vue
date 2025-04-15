<template>
  <Transition name="splash">
    <div v-show="visible" class="splash-screen" ref="splashRef">
      <div class="splash-content">
        <!-- Preload logo with loading="eager" -->
        <img 
          class="splash-logo" 
          src="/src/assets/logo.svg" 
          alt="MediQuix Logo" 
          width="90"
          height="90"
          loading="eager"
          fetchpriority="high"
        />
        <h1 class="splash-title">MediQuix</h1>
        <p class="splash-subtitle">Medicina na Ponta da Língua</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

/**
 * @component SplashScreen
 * @description App splash screen with logo, app name, and subtitle for medicine students.
 */
const visible = ref(true)
const splashRef = ref(null)

// Reduced animation timings for better performance
const ANIMATIONS = {
  popIn: 0.4,    // Reduced from 0.7
  delay: 1.2,    // Reduced from 2.2
  fadeOut: 0.4,  // Reduced from 0.6
  buffer: 0.1
}

onMounted(() => {
  // Use requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    if (splashRef.value) {
      Object.entries(ANIMATIONS).forEach(([key, value]) => {
        splashRef.value.style.setProperty(`--animation-${key}`, `${value}s`)
      })
    }

    // Calculate total duration in milliseconds
    const totalDuration = (ANIMATIONS.popIn + ANIMATIONS.delay) * 1000

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        visible.value = false
      }, { timeout: totalDuration })
    } else {
      setTimeout(() => {
        visible.value = false
      }, totalDuration)
    }
  })
})
</script>

<style scoped>
.splash-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Simplified gradient for better performance */
  background: linear-gradient(135deg, #1976d2 0%, #43cea2 100%);
  contain: content; /* Add CSS containment */
  will-change: opacity; /* Optimize for animations */
}

.splash-content {
  text-align: center;
  color: #fff;
  transform-origin: center;
  animation: popIn var(--animation-popIn) cubic-bezier(0.2, 0, 0.2, 1);
  contain: layout style; /* Add CSS containment */
}

.splash-logo {
  width: 90px;
  height: 90px;
  margin-bottom: 1.2rem;
  /* Optimized shadow using opacity */
  filter: drop-shadow(0 4px 8px rgba(25,118,210,0.2));
  will-change: transform;
}

.splash-title {
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(25,118,210,0.15);
}

.splash-subtitle {
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  opacity: 0.92;
  margin-bottom: 0;
}

@keyframes popIn {
  from { 
    transform: scale(0.8);
    opacity: 0;
  }
  to { 
    transform: scale(1);
    opacity: 1;
  }
}

/* Optimize Vue transitions */
.splash-enter-active {
  animation: none; /* Remove redundant animation */
  transition: opacity var(--animation-popIn) cubic-bezier(0.2, 0, 0.2, 1);
}

.splash-leave-active {
  transition: opacity var(--animation-fadeOut) cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}
</style>
