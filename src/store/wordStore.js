import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { allWords as initialAllWords } from '../data/vocabularyData'
import { useSettingsStore } from './userSettings'

export const useWordStore = defineStore('words', () => {
  const allWords = ref(initialAllWords)

  const settingsStore = useSettingsStore()

  const filteredWords = computed(() => {
    let result = allWords.value
    if (settingsStore.selectedSpecialty !== 'all') {
      const specialtyIndex = parseInt(settingsStore.selectedSpecialty)
      result = result.filter(word => word.specialties.includes(specialtyIndex))
    }
    if (settingsStore.selectedDifficulty !== 'all') {
      const difficultyLevel = parseInt(settingsStore.selectedDifficulty)
      result = result.filter(word => word.difficulty === difficultyLevel)
    }
    return result
  })

  function getQuizWords(count = 10) {
    const shuffled = [...filteredWords.value].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }

  function setAllWords(words) {
    allWords.value = words
  }
  

  return {
    allWords,
    filteredWords,
    getQuizWords,
    setAllWords,
  }
})
