import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useUIStore } from './store/ui/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/icons'

const initializeApp = async () => {
  // Create app instance
  const app = createApp(App)
  const pinia = createPinia()
  
  // Register core plugins
  app.use(pinia)
  app.use(router)
  app.component('font-awesome-icon', FontAwesomeIcon)

  // Initialize critical stores first
  const uiStore = useUIStore()

  // Set initial dark mode from localStorage before mount
  document.documentElement.classList.toggle('dark', uiStore.isDarkMode)

  // Mount app immediately
  app.mount('#app')
}

// Initialize app with error boundary
initializeApp().catch(error => {
  console.error('App initialization error:', error)
  // Could add error reporting service here
})
