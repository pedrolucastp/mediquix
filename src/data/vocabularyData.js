import { defaultWords } from './defaultWords';

function loadWordsFromLocalStorage() {
  const storedWords = localStorage.getItem('vocabularyWords');
  if (storedWords) {
    return JSON.parse(storedWords);
  } else {
    const initializedWords = defaultWords.map(word => ({
      ...word,
      isActive: true
    }));
    localStorage.setItem('vocabularyWords', JSON.stringify(initializedWords));
    return initializedWords;
  }
}

export const allWords = loadWordsFromLocalStorage();

export function saveWordsToLocalStorage(words) {
  localStorage.setItem('vocabularyWords', JSON.stringify(words));
}

export function syncLocalStorageWithFirestore(cloudWords) {
  console.log('syncLocalStorageWithFirestore', cloudWords);
  saveWordsToLocalStorage(cloudWords);
}
