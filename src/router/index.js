import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuickQuizGame from '../views/QuickQuizGame.vue'
import MemoryGame from '../views/MemoryGame.vue'
import WordSearchGame from '../views/WordSearchGame.vue'
import HangmanGame from '../views/HangmanGame.vue'
import MyVocabulary from '../views/MyVocabulary.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quiz', name: 'QuickQuizGame', component: QuickQuizGame },
  { path: '/cards', name: 'MemoryGame', component: MemoryGame },
  { path: '/word-search', name: 'WordSearchGame', component: WordSearchGame },
  { path: '/hangman', name: 'HangmanGame', component: HangmanGame },
  { path: '/my-vocabulary', name: 'MyVocabulary', component: MyVocabulary },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
