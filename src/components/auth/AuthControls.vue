<template>
  <div class="auth-controls" :class="{ dark: isDarkMode }">
    <!-- Not logged in state -->
    <template v-if="!authStore.isAuthenticated">
      <BaseButton @click="showAuthModal = true" variant="primary" :disabled="isLoading">
        Login
      </BaseButton>
    </template>

    <!-- Logged in state - User Profile directly in drawer -->
    <template v-else>
      <div class="user-profile">
        <!-- User Info Section -->
        <div class="profile-section">
          <div class="profile-header">
            <font-awesome-icon :icon="['fas', 'user']" class="profile-icon" />
            <div class="profile-info">
              <h3>{{ authStore.username || authStore.user?.email }}</h3>
              <span class="member-status">
                <font-awesome-icon v-if="authStore.isPremium" icon="crown" class="premium-icon"
                  title="Usuário Premium" />
                {{ authStore.isPremium ? 'Membro Premium' : 'Membro Gratuito' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Quick Actions Section -->
        <div class="profile-section actions-section">
          <h4>
            <font-awesome-icon icon="bolt" class="section-icon" />
            Ações Rápidas
          </h4>
          <div class="quick-actions">
            <BaseButton @click="showShopModal = true" variant="primary" icon="heart" class="action-button">
              Apoiar MediQuix
            </BaseButton>
            <BaseButton @click="showSettingsModal = true" variant="secondary" icon="cog" class="action-button"
              :disabled="isLoading">
              Configurações
            </BaseButton>
            <BaseButton @click="handleLogout" variant="outline" icon="sign-out-alt" class="action-button"
              :disabled="isLoading">
              Sair
            </BaseButton>
          </div>
        </div>
      </div>
    </template>

    <!-- Shop Modal -->
    <BaseModal v-model="showShopModal" title="Apoie o MediQuix">
      <ShopComponent />
    </BaseModal>

    <!-- Auth Modal -->
    <BaseModal v-model="showAuthModal">
      <div class="auth-modal-content">
        <!-- App Introduction -->
        <div class="app-intro">
          <img src="@/assets/logo.svg" alt="MediQuix Logo" class="intro-logo" />
          <h2 class="intro-title">Aprendizado médico gamificado</h2>
          <p class="intro-text">
            MediQuix é um projeto acadêmico desenvolvido para ajudar estudantes de medicina
            a expandir seu vocabulário médico através de jogos interativos e divertidos.
          </p>
          <div class="feature-list">
            <div class="feature-item">
              <font-awesome-icon icon="gamepad" class="feature-icon" />
              <span>Jogos educativos</span>
            </div>
            <div class="feature-item">
              <font-awesome-icon icon="book-medical" class="feature-icon" />
              <span>Vocabulário especializado</span>
            </div>
            <div class="feature-item">
              <font-awesome-icon icon="chart-line" class="feature-icon" />
              <span>Acompanhe seu progresso</span>
            </div>
          </div>
        </div>

        <!-- Auth Forms -->
        <div class="auth-forms">
          <template v-if="!isSignup && !showForgotPassword && !showResetPassword">
            <BaseInput v-model="loginEmail" type="email" placeholder="Seu email" icon="envelope"
              :disabled="isLoading" />
            <BaseInput v-model="loginPassword" type="password" placeholder="Sua senha" icon="lock"
              :disabled="isLoading" />
            <BaseButton class="modal-btn" icon="sign-in-alt" :loading="isLoading" :disabled="isLoading"
              @click="handleLogin">
              {{ isLoading ? 'Entrando...' : 'Entrar' }}
            </BaseButton>
            <template v-if="showResendVerification">
              <p class="auth-message">Ainda não verificou seu email?</p>
              <BaseButton variant="secondary" icon="envelope" :loading="isResending" :disabled="isResending"
                @click="handleResendVerification">
                {{ isResending ? 'Reenviando...' : 'Reenviar email de verificação' }}
              </BaseButton>
            </template>
            <p class="auth-switch-text">
              <a class="toggle-link" @click="showForgotPassword = true">Esqueceu sua senha?</a>
            </p>
            <p class="auth-switch-text">
              Ainda não tem uma conta?
              <a class="toggle-link" @click="toggleForm">Criar conta</a>
            </p>
          </template>

          <template v-else-if="showForgotPassword">
            <!-- <h3 class="form-title">Recuperar Senha</h3> -->
            <template v-if="!resetEmailSent">
              <p class="auth-message">Digite seu email para receber instruções de recuperação de senha.</p>
              <BaseInput v-model="forgotPasswordEmail" type="email" placeholder="Seu email" icon="envelope"
                :disabled="isLoading" />
              <BaseButton class="modal-btn" icon="paper-plane" :loading="isLoading" :disabled="isLoading"
                @click="handleForgotPassword">
                {{ isLoading ? 'Enviando...' : 'Enviar instruções' }}
              </BaseButton>
            </template>
            <template v-else>
              <div class="success-message">
                <font-awesome-icon icon="check-circle" class="success-icon" />
                <p>Email enviado com sucesso!</p>
                <p class="auth-message">Verifique sua caixa de entrada para redefinir sua senha.</p>
              </div>
            </template>
            <p class="auth-switch-text">
              <a class="toggle-link" @click="handleBackToLogin">Voltar ao login</a>
            </p>
          </template>

          <template v-else-if="showResetPassword">
            <h3 class="form-title">Redefinir Senha</h3>
            <p class="auth-message">Digite sua nova senha para {{ resetEmail }}</p>
            <BaseInput v-model="newPassword" type="password" placeholder="Nova senha" icon="lock"
              :disabled="isLoading" />
            <BaseInput v-model="confirmPassword" type="password" placeholder="Confirme a nova senha" icon="lock"
              :disabled="isLoading" />
            <BaseButton class="modal-btn" icon="key" :loading="isLoading" :disabled="isLoading || !passwordsMatch"
              @click="handleResetPassword">
              {{ isLoading ? 'Alterando...' : 'Alterar Senha' }}
            </BaseButton>
            <p v-if="!passwordsMatch && newPassword && confirmPassword" class="error-message">
              As senhas não coincidem
            </p>
          </template>

          <template v-else>
            <BaseInput v-model="signupEmail" type="email" placeholder="Seu email" icon="envelope"
              :disabled="isLoading" />
            <BaseInput v-model="signupPassword" type="password" placeholder="Escolha uma senha segura" icon="lock"
              :disabled="isLoading" />
            <BaseButton class="modal-btn" icon="user-plus" :loading="isLoading" :disabled="isLoading"
              @click="handleSignup">
              {{ isLoading ? 'Criando conta...' : 'Criar conta' }}
            </BaseButton>
            <p class="auth-switch-text">
              Já tem uma conta?
              <a class="toggle-link" @click="toggleForm">Entrar</a>
            </p>
          </template>
        </div>
      </div>
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
          <BaseInput v-model="settings.username" label="Username" :disabled="!authStore.user || isLoading" />
          <BaseSelect v-model="settings.default_difficulty" :options="difficultyOptions" label="Default Difficulty"
            :disabled="!authStore.user || isLoading" />
          <BaseSelect v-model="settings.default_speciality" :options="specialtyOptions" label="Default Specialty"
            :disabled="!authStore.user || isLoading" />
        </template>
      </template>
      <template #footer>
        <BaseButton variant="primary" icon="save" :disabled="!authStore.user || isLoading" :loading="isLoading"
          @click="saveSettings">
          {{ isLoading ? 'Saving...' : 'Save Settings' }}
        </BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useUIStore } from '@/store/ui';
import { usePaymentsStore } from '@/store/payments';
import { specialties } from '@/data/defaultSpecialties';
import { useRoute, useRouter } from 'vue-router';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import BaseModal from '@/components/base/BaseModal.vue';
import ShopComponent from '@/components/ShopComponent.vue';

const authStore = useAuthStore();
const uiStore = useUIStore();
const paymentsStore = usePaymentsStore();
const isDarkMode = computed(() => uiStore.isDarkMode);
const isLoading = ref(false);
const isResending = ref(false);
const showResendVerification = ref(false);

// Auth state
const showAuthModal = ref(false);
const isSignup = ref(false);
const loginEmail = ref('');
const loginPassword = ref('');
const signupEmail = ref('');
const signupPassword = ref('');
const showForgotPassword = ref(false);
const forgotPasswordEmail = ref('');
const resetEmailSent = ref(false);
const showResetPassword = ref(false);
const resetEmail = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const actionCode = ref('');
const route = useRoute();
const router = useRouter();

const passwordsMatch = computed(() => 
  !newPassword.value || !confirmPassword.value || newPassword.value === confirmPassword.value
);

onMounted(async () => {
  // Check if we have a password reset code in the URL
  const oobCode = route.query.oobCode;
  if (oobCode) {
    try {
      showAuthModal.value = true;
      showResetPassword.value = true;
      actionCode.value = oobCode;
      resetEmail.value = await authStore.verifyResetCode(oobCode);
      // Remove the oobCode from URL
      router.replace({ query: {} });
    } catch (error) {
      showResetPassword.value = false;
    }
  }
});

async function handleResetPassword() {
  if (!passwordsMatch.value) return;
  
  try {
    isLoading.value = true;
    await authStore.confirmPasswordChange(actionCode.value, newPassword.value);
    showResetPassword.value = false;
    showForgotPassword.value = false;
    isSignup.value = false;
    // Clear the form
    newPassword.value = '';
    confirmPassword.value = '';
    actionCode.value = '';
    resetEmail.value = '';
  } catch (error) {
    // Error is handled by the store
  } finally {
    isLoading.value = false;
  }
}

// Settings state
const showSettingsModal = ref(false);
const settings = ref({
  username: '',
  default_difficulty: -1,
  default_speciality: -1,
});

// Donations history
const showUserModal = ref(false);
const donationsHistory = ref([]);
const totalDonations = ref("");

async function getApprouvedPaymentsHistory() {
  isLoading.value = true;
  showUserModal.value = true;
  try {
    donationsHistory.value = await paymentsStore.loadDonationsHistory();

    console.log('donations', donationsHistory.value);
    // Calculate total donations in BRL using donationsHistory.value.payments.amount
    totalDonations.value = donationsHistory.value.payments.reduce((acc, donation) => {
      return acc + donation.amount;
    }, 0).toFixed(2); // Convert to BRL format
  } catch (error) {
    console.error('Failed to load donations history:', error);
  } finally {
    isLoading.value = false;
  }
};


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
    isLoading.value = true;
    showResendVerification.value = false;
    await authStore.login(loginEmail.value, loginPassword.value);
    showAuthModal.value = false;
    // Close the drawer after successful login
    uiStore.toggleDrawer();
  } catch (error) {
    if (error.message.includes('email') && error.message.includes('verify')) {
      showResendVerification.value = true;
    }
    uiStore.setError('auth', error.message);
  } finally {
    isLoading.value = false;
  }
}

async function handleSignup() {
  try {
    isLoading.value = true;
    await authStore.signup(signupEmail.value, signupPassword.value);
    showAuthModal.value = false;
    uiStore.setSuccess('Verifique seu email para ativar sua conta.');
  } catch (error) {
    uiStore.setError('auth', error.message);
  } finally {
    isLoading.value = false;
  }
}

async function handleResendVerification() {
  try {
    isResending.value = true;
    await authStore.resendVerificationEmail();
    showResendVerification.value = false;
  } catch (error) {
    uiStore.setError('auth', error.message);
  } finally {
    isResending.value = false;
  }
}

async function handleForgotPassword() {
  try {
    await authStore.forgotPassword(forgotPasswordEmail.value);
    resetEmailSent.value = true;
  } catch (error) {
    // Error is already handled by the store
  }
}

function handleBackToLogin() {
  showForgotPassword.value = false;
  resetEmailSent.value = false;
}

async function handleLogout() {
  try {
    isLoading.value = true;
    await authStore.logout();
    showUserModal.value = false;
  } catch (error) {
    uiStore.setError('auth', error.message);
  } finally {
    isLoading.value = false;
  }
}

// Settings methods
async function saveSettings() {
  try {
    isLoading.value = true;
    await authStore.updateUserProfile(settings.value);
    showSettingsModal.value = false;
    uiStore.setSuccess('Configurações salvas com sucesso!');
  } catch (error) {
    uiStore.setError('settings', error.message);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.auth-controls {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.user-profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.profile-section {
  width: 100%;
  padding: var(--spacing-md);
  background: var(--background-color);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.profile-icon {
  font-size: 2rem;
  color: var(--primary-color);
  background: var(--surface-color);
  padding: var(--spacing-sm);
  border-radius: 50%;
}

.profile-info {
  flex: 1;
}

.profile-info h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
}

.member-status {
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: 2px;
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-sm);
}

.action-button {
  width: 100%;
  justify-content: flex-start;
  text-align: left;
  padding: var(--spacing-sm) var(--spacing-md);
}

/* Dark mode adjustments */
.dark .profile-section {
  background: var(--dark-background-color);
  border-color: var(--dark-border-color);
}

.dark .profile-icon {
  background: var(--dark-surface-color);
  color: var(--dark-primary-color);
}

.dark .profile-info h3 {
  color: var(--dark-text-color);
}

.dark .member-status {
  color: var(--dark-text-secondary);
}

.dark .action-button {
  background-color: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

.dark .action-button:hover {
  background-color: var(--dark-hover-color);
  border-color: var(--dark-primary-color);
}
</style>