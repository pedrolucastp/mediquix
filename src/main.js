import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useAuthStore } from './store/auth'
import { useUIStore } from './store/ui'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/icons'

const initializeApp = async () => {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)
  app.component('font-awesome-icon', FontAwesomeIcon)

  // Initialize stores
  const authStore = useAuthStore()
  const uiStore = useUIStore()

  // Set initial dark mode from localStorage
  document.documentElement.classList.toggle('dark', uiStore.isDarkMode)

  // Wait for auth initialization before mounting
  await authStore.initAuthState()

  app.mount('#app')
}

initializeApp()
