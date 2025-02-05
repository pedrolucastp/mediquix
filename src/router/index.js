import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import MemoryGame from '../views/MemoryGame.vue'
import WordSearchGame from '../views/WordSearchGame.vue'
import MyVocabulary from '../views/MyVocabulary.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/cards', name: 'MemoryGame', component: MemoryGame },
  { path: '/word-search', name: 'WordSearchGame', component: WordSearchGame },
  { path: '/my-vocabulary', name: 'MyVocabulary', component: MyVocabulary },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
