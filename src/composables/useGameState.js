import { ref, computed } from 'vue';
import { useVocabularyStore } from '@/store/vocabulary';

export function useGameState(options = {}) {
  const {
    minWords = 1,
    maxWords = 10,
    validateWord = () => true,
    onInsufficientWords = () => {}
  } = options;

  const vocabularyStore = useVocabularyStore();
  
  const gameStarted = ref(false);
  const gameWords = ref([]);
  const score = ref(0);
  const loading = ref(false);
  const error = ref('');

  const availableWords = computed(() => {
    return vocabularyStore.filteredWords.filter(word => 
      word.isActive && validateWord(word)
    );
  });

  function startGame() {
    loading.value = true;
    error.value = '';
    
    try {
      if (availableWords.value.length < minWords) {
        error.value = 'Não há palavras suficientes para iniciar o jogo. Por favor, ajuste os filtros.';
        onInsufficientWords();
        return false;
      }

      const shuffledWords = [...availableWords.value].sort(() => Math.random() - 0.5);
      gameWords.value = shuffledWords.slice(0, maxWords);
      score.value = 0;
      gameStarted.value = true;
      return true;
    } catch (e) {
      error.value = 'Ocorreu um erro ao iniciar o jogo.';
      return false;
    } finally {
      loading.value = false;
    }
  }

  function endGame() {
    gameStarted.value = false;
  }

  function updateScore(points) {
    score.value += points;
  }

  function resetGame() {
    score.value = 0;
    gameStarted.value = false;
    gameWords.value = [];
    error.value = '';
  }

  return {
    // State
    gameStarted,
    gameWords,
    score,
    loading,
    error,
    availableWords,

    // Actions
    startGame,
    endGame,
    updateScore,
    resetGame
  };
}