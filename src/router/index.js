import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuickQuizGame from '../views/QuickQuizGame.vue'
import MemoryGame from '../views/MemoryGame.vue'
import WordSearchGame from '../views/WordSearchGame.vue'
import HangmanGame from '../views/HangmanGame.vue'
import MyVocabulary from '../views/MyVocabulary.vue'
import CrosswordsGame from '../views/CrosswordsGame.vue'
import ShopComponent from '../components/ShopComponent.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quiz', name: 'QuickQuizGame', component: QuickQuizGame },
  { path: '/cards', name: 'MemoryGame', component: MemoryGame },
  { path: '/word-search', name: 'WordSearchGame', component: WordSearchGame },
  { path: '/hangman', name: 'HangmanGame', component: HangmanGame },
  { path: '/my-vocabulary', name: 'MyVocabulary', component: MyVocabulary },
  { path: '/crosswords', name: 'CrosswordsGame', component: CrosswordsGame },
  { path: '/shop', name: 'Shop', component: ShopComponent },
  {
    path: '/premium/success',
    name: 'PremiumSuccess',
    component: () => import('@/views/PremiumSuccess.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/premium/failure',
    name: 'PremiumFailure',
    component: () => import('@/views/PremiumFailure.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
