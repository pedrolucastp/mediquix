<template>
  <header>
    <h1>MedQuix</h1>
    <!-- If user is not logged in, show a button to open the auth modal -->
    <div id="auth-container">
      <div v-if="!authStore.initialized">
        Loading...
      </div>
      <div v-else>
        <div v-if="!authStore.user">
          <button @click="openModal">Login / Sign Up</button>
        </div>
        <div v-else>
          <p>Bem-vindo, {{ authStore.user.email.split('@')[0] }}</p>
          <button @click="handleLogout">Logout</button>
        </div>
      </div>
    </div>

    <!-- Auth Modal -->
    <transition name="fade">
      <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-button" @click="closeModal">&times;</button>
          <div v-if="!isSignup">
            <h3>Login</h3>
            <input type="email" v-model="loginEmail" placeholder="Email" />
            <input type="password" v-model="loginPassword" placeholder="Password" />
            <button @click="handleLogin">Login</button>
            <p>
              Don't have an account?
              <span class="toggle-link" @click="toggleForm">Sign up</span>
            </p>
          </div>
          <div v-else>
            <h3>Sign Up</h3>
            <input type="email" v-model="signupEmail" placeholder="Email" />
            <input type="password" v-model="signupPassword" placeholder="Password" />
            <button @click="handleSignup">Sign Up</button>
            <p>
              Already have an account?
              <span class="toggle-link" @click="toggleForm">Login</span>
            </p>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'

const authStore = useAuthStore()

// Modal state and form values
const showModal = ref(false)
const isSignup = ref(false)
const loginEmail = ref('')
const loginPassword = ref('')
const signupEmail = ref('')
const signupPassword = ref('')

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function toggleForm() {
  isSignup.value = !isSignup.value
}

async function handleLogin() {
  try {
    await authStore.login(loginEmail.value, loginPassword.value)
    closeModal()
  } catch (error) {
    alert(error.message)
  }
}

async function handleSignup() {
  try {
    await authStore.signup(signupEmail.value, signupPassword.value)
    closeModal()
  } catch (error) {
    alert(error.message)
  }
}

async function handleLogout() {
  try {
    await authStore.logout()
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
}

/* Modal overlay and content */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  max-width: 400px;
  width: 90%;
}

.close-button {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.toggle-link {
  color: var(--accent-color);
  cursor: pointer;
  text-decoration: underline;
}

/* Fade transition for modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
