import { defineStore } from 'pinia';
import { ref, watch, computed } from 'vue';

const DEFAULT_SETTINGS = {
  selectedSpecialty: 'all',
  selectedDifficulty: 'all',
  defaultSpecialty: 0,
  defaultDifficulty: 1,
  autoSaveEnabled: true,
  notificationsEnabled: true,
  language: 'pt-BR'
};

export const useSettingsStore = defineStore('settings', () => {
  // Load settings from localStorage or use defaults
  const loadInitialSettings = () => {
    const stored = localStorage.getItem('userSettings');
    return stored ? { ...DEFAULT_SETTINGS, ...JSON.parse(stored) } : DEFAULT_SETTINGS;
  };

  const settings = ref(loadInitialSettings());

  // Persist settings changes
  watch(settings, (newSettings) => {
    localStorage.setItem('userSettings', JSON.stringify(newSettings));
  }, { deep: true });

  // Getters
  const selectedSpecialty = computed(() => settings.value.selectedSpecialty);
  const selectedDifficulty = computed(() => settings.value.selectedDifficulty);

  // Actions
  function updateSettings(newSettings) {
    settings.value = { ...settings.value, ...newSettings };
  }

  function resetToDefaults() {
    settings.value = { ...DEFAULT_SETTINGS };
  }

  function setSpecialty(value) {
    settings.value.selectedSpecialty = value;
  }

  function setDifficulty(value) {
    settings.value.selectedDifficulty = value;
  }

  function setDefaultPreferences(preferences) {
    if (preferences.defaultSpecialty !== undefined) {
      settings.value.defaultSpecialty = preferences.defaultSpecialty;
    }
    if (preferences.defaultDifficulty !== undefined) {
      settings.value.defaultDifficulty = preferences.defaultDifficulty;
    }
  }

  return {
    settings,
    selectedSpecialty,
    selectedDifficulty,
    updateSettings,
    resetToDefaults,
    setSpecialty,
    setDifficulty,
    setDefaultPreferences
  };
});