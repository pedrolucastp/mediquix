import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'Home', 
      component: Home 
    },
    {
      path: '/quiz',
      name: 'QuickQuizGame',
      component: () => import(/* webpackChunkName: "quiz" */ '../views/QuickQuizGame.vue')
    },
    {
      path: '/cards',
      name: 'MemoryGame',
      component: () => import(/* webpackChunkName: "cards" */ '../views/MemoryGame.vue')
    },
    {
      path: '/word-search',
      name: 'WordSearchGame', 
      component: () => import(/* webpackChunkName: "word-search" */ '../views/WordSearchGame.vue')
    },
    {
      path: '/hangman',
      name: 'HangmanGame',
      component: () => import(/* webpackChunkName: "hangman" */ '../views/HangmanGame.vue')
    },
    {
      path: '/my-vocabulary',
      name: 'MyVocabulary',
      component: () => import(/* webpackChunkName: "my-vocabulary" */ '../views/MyVocabulary.vue')
    },
    {
      path: '/crosswords',
      name: 'CrosswordsGame',
      component: () => import(/* webpackChunkName: "crosswords" */ '../views/CrosswordsGame.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise(resolve => setTimeout(() => resolve(savedPosition), 50))
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Global navigation guard for auth
router.beforeEach((to, from, next) => {
  performance.mark('route-change-start')
  next()
})

router.afterEach((to) => {
  performance.mark('route-change-end')
  performance.measure('route-change', 'route-change-start', 'route-change-end')
  
  const measure = performance.getEntriesByName('route-change').pop()
  if (measure && measure.duration > 3000) {
    console.warn(`Slow navigation detected to ${to.path}: ${measure.duration}ms`)
  }
})

export default router
