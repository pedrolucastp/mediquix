import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useAuthStore } from './store/auth'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './icons'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

const authStore = useAuthStore()
authStore.initAuthState()

app.mount('#app')
