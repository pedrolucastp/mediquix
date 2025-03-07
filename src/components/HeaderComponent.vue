<template>
  <header :class="{ dark: isDarkMode }">
    <DarkModeToggle />
    <router-link to="/">
      <h1>MediQuix</h1>
    </router-link>

    <div id="auth-container">
      <div v-if="!authStore.initialized">Loading...</div>
      <div v-else>
        <div v-if="!authStore.user">
          <button class="auth-btn" @click="openAuthModal">
            <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
            Login / Sign Up
          </button>
        </div>
        <div v-else class="user-area">
          <p>
            Olá,
            {{ authStore.user.username || authStore.user.email.split("@")[0] }}
          </p>
          <button class="auth-btn" @click="openSettingsModal">
            <font-awesome-icon :icon="['fas', 'cog']" />
          </button>

          <button class="auth-btn" @click="handleLogout">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        class="modal-overlay"
        v-if="showAuthModal"
        @click.self="closeAuthModal"
      >
        <div class="modal-content">
          <button class="close-button" @click="closeAuthModal">&times;</button>
          <div v-if="!isSignup">
            <h3>Login</h3>
            <input type="email" v-model="loginEmail" placeholder="Email" />
            <input
              type="password"
              v-model="loginPassword"
              placeholder="Password"
            />
            <button class="modal-btn" @click="handleLogin">
              <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
              Login
            </button>
            <p>
              Don't have an account?
              <span class="toggle-link" @click="toggleForm">Sign up</span>
            </p>
          </div>
          <div v-else>
            <h3>Sign Up</h3>
            <input type="email" v-model="signupEmail" placeholder="Email" />
            <input
              type="password"
              v-model="signupPassword"
              placeholder="Password"
            />
            <button class="modal-btn" @click="handleSignup">
              <font-awesome-icon :icon="['fas', 'user-plus']" />
              Sign Up
            </button>
            <p>
              Already have an account?
              <span class="toggle-link" @click="toggleForm">Login</span>
            </p>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        class="modal-overlay"
        v-if="showSettingsModal"
        @click.self="closeSettingsModal"
      >
        <div class="modal-content">
          <button class="close-button" @click="closeSettingsModal">
            &times;
          </button>
          <h3>User Settings</h3>
          <div v-if="!authStore.user">
            <p>
              Please
              <span class="toggle-link" @click="handleLoginClick">login</span>
              or
              <span class="toggle-link" @click="handleRegisterClick"
                >register</span
              >
              to set your default settings.
            </p>
          </div>
          <div v-else>
            <label>
              Username:
              <input
                type="text"
                v-model="settings.username"
                :disabled="!authStore.user"
              />
            </label>
            <label>
              Default Difficulty:
              <select
                v-model.number="settings.default_difficulty"
                :disabled="!authStore.user"
              >
                <option value="1">Fácil</option>
                <option value="2">Média</option>
                <option value="3">Difícil</option>
              </select>
            </label>
            <label>
              Default Specialty:
              <select
                v-model.number="settings.default_speciality"
                :disabled="!authStore.user"
              >
                <option
                  v-for="(spec, index) in specialties"
                  :key="index"
                  :value="index"
                >
                  {{ spec }}
                </option>
              </select>
            </label>
            <button
              class="modal-btn"
              @click="saveSettings"
              :disabled="!authStore.user"
            >
              <font-awesome-icon :icon="['fas', 'save']" />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "../store/auth";
import { useVocabularyStore } from "../store/vocabularyStore";
import { useDarkModeStore } from "../store/darkModeStore";
import DarkModeToggle from "./DarkModeToggle.vue";

const authStore = useAuthStore();
const vocabularyStore = useVocabularyStore();
const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);

const showAuthModal = ref(false);
const isSignup = ref(false);
const loginEmail = ref("");
const loginPassword = ref("");
const signupEmail = ref("");
const signupPassword = ref("");

function openAuthModal() {
  showAuthModal.value = true;
}

function closeAuthModal() {
  showAuthModal.value = false;
  isSignup.value = false;
}

function toggleForm() {
  isSignup.value = !isSignup.value;
}

async function handleLogin() {
  try {
    await authStore.login(loginEmail.value, loginPassword.value);
    closeAuthModal();
  } catch (error) {
    alert(error.message);
  }
}

async function handleSignup() {
  try {
    await authStore.signup(signupEmail.value, signupPassword.value);
    closeAuthModal();
  } catch (error) {
    alert(error.message);
  }
}

async function handleLogout() {
  try {
    await authStore.logout();
  } catch (error) {
    alert(error.message);
  }
}

const showSettingsModal = ref(false);
const settings = ref({
  username: "",
  default_difficulty: 1,
  default_speciality: 0,
});

const specialties = vocabularyStore.specialties;

function openSettingsModal() {
  if (authStore.user && authStore.user.settings) {
    settings.value = { ...authStore.user.settings };
  }
  showSettingsModal.value = true;
}

function closeSettingsModal() {
  showSettingsModal.value = false;
}

async function saveSettings() {
  try {
    await authStore.updateUserSettings(settings.value);
    closeSettingsModal();
  } catch (error) {
    alert("Error saving settings: " + error.message);
  }
}

function handleLoginClick() {
  closeSettingsModal();
  openAuthModal();
}

function handleRegisterClick() {
  closeSettingsModal();
  openAuthModal();
  toggleForm();
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

header a {
  text-decoration: none;
  color: var(--accent-color);
}

header h1 {
  margin: 0;
  font-weight: 600;
  font-size: 28px;
}

.user-area {
  display: flex;
  gap: 8px;
  align-items: center;
}

.auth-btn,
.modal-btn {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.auth-btn:hover,
.modal-btn:hover {
  background-color: #2980b9;
  color: white;
}

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
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input,
select {
  width: 100%;
  padding: 0.3rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.toggle-link {
  color: var(--accent-color);
  cursor: pointer;
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  background: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
  /* background-color: white; */
  color: var(--primary-color);
}

header.dark button {
  border-color: var(--dark-text-color);
  color: var(--dark-text-color);
}

header.dark button:hover {
  /* background-color: var(--dark-text-color); */
  color: var(--dark-background-color);
}
</style>