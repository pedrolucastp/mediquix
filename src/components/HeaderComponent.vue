<template>
  <header>
    <h1>MedQuix</h1>
    <div id="auth-container">
      <div v-if="!authStore.initialized">
        Loading...
      </div>
      <div v-else>
        <div v-if="!authStore.user">
          <div v-if="!isSignup">
            <h3>Login</h3>
            <input type="email" v-model="loginEmail" placeholder="Email" />
            <input type="password" v-model="loginPassword" placeholder="Password" />
            <button @click="handleLogin">Login</button>
            <p>Don't have an account? <span @click="toggleForm">Sign up</span></p>
          </div>
          <div v-else>
            <h3>Sign Up</h3>
            <input type="email" v-model="signupEmail" placeholder="Email" />
            <input type="password" v-model="signupPassword" placeholder="Password" />
            <button @click="handleSignup">Sign Up</button>
            <p>Already have an account? <span @click="toggleForm">Login</span></p>
          </div>
        </div>
        <div v-else>
          <p>Bem-vindo, {{ authStore.user.email }}</p>
          <button @click="handleLogout">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
export default {
  setup() {
    const authStore = useAuthStore()
    const isSignup = ref(false)
    const loginEmail = ref('')
    const loginPassword = ref('')
    const signupEmail = ref('')
    const signupPassword = ref('')

    function toggleForm() {
      isSignup.value = !isSignup.value
    }

    async function handleLogin() {
      try {
        await authStore.login(loginEmail.value, loginPassword.value)
      } catch (error) {
        alert(error.message)
      }
    }

    async function handleSignup() {
      try {
        await authStore.signup(signupEmail.value, signupPassword.value)
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

    return {
      authStore,
      isSignup,
      loginEmail,
      loginPassword,
      signupEmail,
      signupPassword,
      toggleForm,
      handleLogin,
      handleSignup,
      handleLogout,
    }
  },
}
</script>

<style scoped>
</style>
