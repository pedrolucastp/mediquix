import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { allWords as initialAllWords } from '@/data/vocabularyData';
import { specialties } from '@/data/defaultSpecialties';
import { useSettingsStore } from '../settings';

export const useVocabularyStore = defineStore('vocabulary', () => {
  const words = ref(initialAllWords);
  const settingsStore = useSettingsStore();

  // Getters
  const filteredWords = computed(() => {
    let result = words.value.filter(word => word.isActive);
    
    if (settingsStore.selectedSpecialty !== 'all') {
      const specialtyIndex = parseInt(settingsStore.selectedSpecialty);
      result = result.filter(word => word.specialties.includes(specialtyIndex));
    }
    
    if (settingsStore.selectedDifficulty !== 'all') {
      const difficultyLevel = parseInt(settingsStore.selectedDifficulty);
      result = result.filter(word => word.difficulty === difficultyLevel);
    }
    
    return result;
  });

  // Actions
  function updateWords(newWords) {
    words.value = newWords;
  }

  function getRandomWords(count = 10) {
    const available = filteredWords.value;
    if (available.length === 0) return [];
    
    const result = [];
    const usedIndices = new Set();

    while (result.length < count && usedIndices.size < available.length) {
      const randomIndex = Math.floor(Math.random() * available.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        result.push(available[randomIndex]);
      }
    }

    return result;
  }

  function addWord(word) {
    words.value.push({ ...word, isActive: true });
  }

  function removeWord(word) {
    const index = words.value.findIndex(w => w.word === word.word);
    if (index !== -1) {
      words.value.splice(index, 1);
    }
  }

  function toggleWordActive(word) {
    const target = words.value.find(w => w.word === word.word);
    if (target) {
      target.isActive = !target.isActive;
    }
  }

  return {
    words,
    specialties,
    filteredWords,
    updateWords,
    getRandomWords,
    addWord,
    removeWord,
    toggleWordActive
  };
});