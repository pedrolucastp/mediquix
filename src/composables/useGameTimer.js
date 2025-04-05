import { ref, onUnmounted } from 'vue';

export function useGameTimer(options = {}) {
  const {
    initialTime = 60,
    tickRate = 10,
    onTimeUp = () => {},
    autoStart = false
  } = options;

  const timeLeft = ref(initialTime);
  const timerDisplay = ref(initialTime.toString());
  let timer = null;

  function startTimer() {
    clearTimer();
    const initialTimeMs = timeLeft.value * 1000;
    let remainingTime = initialTimeMs;

    timer = setInterval(() => {
      remainingTime -= tickRate;
      timeLeft.value = remainingTime / 1000;
      timerDisplay.value = (remainingTime / 1000).toFixed(0);

      if (remainingTime <= 0) {
        clearTimer();
        onTimeUp();
      }
    }, tickRate);
  }

  function pauseTimer() {
    clearTimer();
  }

  function resetTimer() {
    clearTimer();
    timeLeft.value = initialTime;
    timerDisplay.value = initialTime.toString();
  }

  function clearTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Auto-start if configured
  if (autoStart) {
    startTimer();
  }

  // Clean up on component unmount
  onUnmounted(() => {
    clearTimer();
  });

  return {
    timeLeft,
    timerDisplay,
    startTimer,
    pauseTimer,
    resetTimer,
    clearTimer
  };
}