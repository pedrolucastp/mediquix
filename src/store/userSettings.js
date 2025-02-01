import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    selectedSpecialty: 'all',
    selectedDifficulty: 'all',
  }),
  actions: {
    setSpecialty(value) {
      this.selectedSpecialty = value;
    },
    setDifficulty(value) {
      this.selectedDifficulty = value;
    }
  }
});
