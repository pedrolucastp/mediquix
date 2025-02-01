import { defineStore } from 'pinia';
import { specialties } from '../data/defaultSpecialties';
import { allWords } from '../data/vocabularyData';

export const useVocabularyStore = defineStore('vocabulary', {
  state: () => ({
    words: allWords,
    specialties: specialties,
  }),
  getters: {
    filteredWords: (state) => {
      return (specialty = 'all', difficulty = 'all') => {
        let filtered = state.words;
        if (specialty !== 'all') {
          const specialtyIndex = parseInt(specialty);
          filtered = filtered.filter(word => word.specialties.includes(specialtyIndex));
        }
        if (difficulty !== 'all') {
          const diff = parseInt(difficulty);
          filtered = filtered.filter(word => word.difficulty === diff);
        }
        return filtered;
      }
    },
  },
  actions: {
    updateWords(newWords) {
      this.words = newWords;
    },
  },
});
