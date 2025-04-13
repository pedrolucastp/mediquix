<template>
  <div class="auth-controls" :class="{ dark: isDarkMode }">
    <!-- Not logged in state -->
    <template v-if="!authStore.isAuthenticated">
      <BaseButton @click="showAuthModal = true" variant="primary">
        Login / Cadastro
      </BaseButton>
    </template>

    <!-- Logged in state -->
    <template v-else>
      <div class="user-area">
        <font-awesome-icon 
          v-if="authStore.isPremium" 
          icon="crown" 
          class="premium-icon" 
          title="Usuário Premium" 
        />
        <p class="user-email">{{ authStore.user?.email }}</p>
        <BaseButton @click="showShopModal = true" variant="primary" icon="heart">
          Apoiar
        </BaseButton>
        <BaseButton @click="showSettingsModal = true" variant="secondary" icon="cog">
          Meu Usuário
        </BaseButton>
        <BaseButton @click="handleLogout" variant="secondary" icon="sign-out-alt">
          Logout
        </BaseButton>
      </div>
    </template>

    <!-- Shop Modal -->
    <BaseModal v-model="showShopModal" title="Apoie o MediQuix">
      <ShopComponent />
    </BaseModal>

    <!-- Auth Modal -->
    <BaseModal v-model="showAuthModal" :title="isSignup ? 'Cadastro' : 'Login'">
      <template v-if="!isSignup">
        <BaseInput
          v-model="loginEmail"
          type="email"
          placeholder="Email"
          icon="envelope"
        />
        <BaseInput
          v-model="loginPassword"
          type="password"
          placeholder="Password"
          icon="lock"
        />
        <BaseButton class="modal-btn" icon="sign-in-alt" @click="handleLogin">
          Login
        </BaseButton>
        <p class="login-or-signup-message">
          Don't have an account?
          <a class="toggle-link" @click="toggleForm">Sign up</a>
        </p>
      </template>
      <template v-else>
        <BaseInput
          v-model="signupEmail"
          type="email"
          placeholder="Email"
          icon="envelope"
        />
        <BaseInput
          v-model="signupPassword"
          type="password"
          placeholder="Password"
          icon="lock"
        />
        <BaseButton class="modal-btn" icon="user-plus" @click="handleSignup">
          Sign Up
        </BaseButton>
        <p>
          Already have an account?
          <a class="toggle-link" @click="toggleForm">Login</a>
        </p>
      </template>
    </BaseModal>

    <!-- Settings Modal -->
    <BaseModal v-model="showSettingsModal" title="Configurações">
      <template #default>
        <template v-if="!authStore.user">
          <p>
            Please
            <a class="toggle-link" @click="handleLoginClick">login</a>
            or
            <a class="toggle-link" @click="handleRegisterClick">register</a>
            to set your default settings.
          </p>
        </template>
        <template v-else>
          <BaseInput
            v-model="settings.username"
            label="Username"
            :disabled="!authStore.user || isSaving"
          />
          <BaseSelect
            v-model="settings.default_difficulty"
            :options="difficultyOptions"
            label="Default Difficulty"
            :disabled="!authStore.user || isSaving"
          />
          <BaseSelect
            v-model="settings.default_speciality"
            :options="specialtyOptions"
            label="Default Specialty"
            :disabled="!authStore.user || isSaving"
          />
        </template>
      </template>
      <template #footer>
        <BaseButton
          variant="primary"
          icon="save"
          :disabled="!authStore.user || isSaving"
          :loading="isSaving"
          @click="saveSettings"
        >
          {{ isSaving ? 'Saving...' : 'Save Settings' }}
        </BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useUIStore } from '@/store/ui';
import { specialties } from '@/data/defaultSpecialties';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import BaseModal from '@/components/base/BaseModal.vue';
import ShopComponent from '@/components/ShopComponent.vue';

const authStore = useAuthStore();
const uiStore = useUIStore();
const isDarkMode = computed(() => uiStore.isDarkMode);

// Auth state
const showAuthModal = ref(false);
const isSignup = ref(false);
const loginEmail = ref('');
const loginPassword = ref('');
const signupEmail = ref('');
const signupPassword = ref('');

// Settings state
const showSettingsModal = ref(false);
const settings = ref({
  username: '',
  default_difficulty: -1,
  default_speciality: -1,
});
const isSaving = ref(false);

// Shop state
const showShopModal = ref(false);

// Convert specialties array to options format
const specialtyOptions = computed(() => [
  { value: -1, label: 'Todas' },
  ...specialties.map((specialty, index) => ({
    value: index,
    label: specialty
  }))
]);

// Define difficulty options
const difficultyOptions = [
  { value: -1, label: 'Todas' },
  { value: 1, label: 'Fácil' },
  { value: 2, label: 'Média' },
  { value: 3, label: 'Difícil' }
];

// Auth methods
function toggleForm() {
  isSignup.value = !isSignup.value;
}

async function handleLogin() {
  try {
    await authStore.login(loginEmail.value, loginPassword.value);
    showAuthModal.value = false;
  } catch (error) {
    uiStore.setError('auth', error.message);
  }
}

async function handleSignup() {
  try {
    await authStore.signup(signupEmail.value, signupPassword.value);
    showAuthModal.value = false;
  } catch (error) {
    uiStore.setError('auth', error.message);
  }
}

async function handleLogout() {
  try {
    await authStore.logout();
  } catch (error) {
    uiStore.setError('auth', error.message);
  }
}

// Settings methods
async function saveSettings() {
  try {
    isSaving.value = true;
    await authStore.updateUserProfile(settings.value);
    showSettingsModal.value = false;
    uiStore.setSuccess('Configurações salvas com sucesso!');
  } catch (error) {
    uiStore.setError('settings', error.message);
  } finally {
    isSaving.value = false;
  }
}
</script>

<style scoped>
.auth-controls {
  display: flex;
  align-items: center;
}

.user-area {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.user-area p {
  margin: 0;
  font-size: 1.1rem;
}

.user-email {
  margin: 0;
  font-size: 1rem;
  color: var(--text-color);
}

.toggle-link {
  color: var(--accent-color);
  cursor: pointer;
  text-decoration: underline;
}

:deep(.modal-btn) {
  width: 100%;
  margin-top: var(--spacing-sm);
}

:deep(.base-input),
:deep(.base-select) {
  margin-bottom: var(--spacing-sm);
}

.premium-icon {
  color: gold;
  margin-right: var(--spacing-sm);
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}
</style>