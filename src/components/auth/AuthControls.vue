<template>
  <div class="auth-controls" :class="{ dark: isDarkMode }">
    <!-- Not logged in state -->
    <template v-if="!authStore.isAuthenticated">
      <BaseButton @click="showAuthModal = true" variant="primary" :disabled="isLoading">
        Login
      </BaseButton>
    </template>

    <!-- Logged in state -->
    <template v-else>
      <div class="user-area">
        <BaseButton @click="getApprouvedPaymentsHistory">
          <p class="user-email">
            <!-- add user icon -->
            <font-awesome-icon v-if="authStore.isPremium" class="premium-icon" icon="crown" title="Usuário Premium" />
            <font-awesome-icon :icon="['fas', 'user']" class="user-icon" />
            <!-- {{ authStore.user?.email }} -->
          </p>
        </BaseButton>

      </div>
    </template>



    <!-- User Modal -->
    <BaseModal v-model="showUserModal" title="Meu MediQuix">
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

        <!-- Donations Section hided for now-->
        <div class="profile-section donations-section" style ="display: none;">
          <h4>
            <font-awesome-icon icon="heart" class="section-icon" />
            Histórico de Apoio
          </h4>
          <div class="donations-content">
            <template v-if="isLoading">
              <div class="loading-state">
                <font-awesome-icon icon="circle-notch" spin />
                <span>Carregando doações...</span>
              </div>
            </template>
            <template v-else-if="donationsHistory?.count > 0">
              <div class="donation-stats">
                <div class="stat-item">
                  <span class="stat-label">Total Doado</span>
                  <span class="stat-value">R$ {{ totalDonations }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Doações</span>
                  <span class="stat-value">{{ donationsHistory.count }}</span>
                </div>
              </div>
            </template>
            <template v-else>
              <p class="empty-state">
                <font-awesome-icon icon="info-circle" />
                Você ainda não fez nenhuma doação
              </p>
            </template>
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
    </BaseModal>

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
  /* color: var(--text-color); */
  display: flex;
}

.toggle-link {
  color: var(--accent-color);
  cursor: pointer;
  text-decoration: underline;
}

.user-modal-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.user-info {
  display: flex;
  /* flex-direction: column; */
  gap: 2px;
}

.donations-info {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.dark .donations-info {
  color: var(--dark-text-secondary);
}

.auth-modal-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.app-intro {
  text-align: center;
  padding: var(--spacing-md);
}

.intro-logo {
  width: 80px;
  height: 80px;
  margin-bottom: var(--spacing-md);
}

.intro-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0 0 var(--spacing-sm);
}

.intro-text {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.9rem;
  color: var(--text-color);
}

.feature-icon {
  color: var(--primary-color);
  font-size: 1.2rem;
}

.auth-forms {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.auth-switch-text {
  text-align: center;
  margin: var(--spacing-sm) 0 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.auth-message {
  margin: 1rem 0;
  font-size: 0.9rem;
  color: var(--text-color-muted);
  text-align: center;
}

.form-title {
  text-align: center;
  color: var(--primary-color);
  margin: 0 0 var(--spacing-md);
  font-size: 1.3rem;
}

.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
}

.success-icon {
  color: var(--success-color);
  font-size: 2rem;
}

.dark .success-icon {
  color: var(--dark-success-color);
}

.error-message {
  color: var(--error-color);
  font-size: 0.9rem;
  text-align: center;
  margin-top: var(--spacing-sm);
}

.dark .error-message {
  color: var(--dark-error-color);
}

/* Dark mode styles */
.dark .intro-title {
  color: var(--dark-primary-color);
}

.dark .intro-text {
  color: var(--dark-text-secondary);
}

.dark .feature-item {
  color: var(--dark-text-color);
}

.dark .feature-icon {
  color: var(--dark-primary-color);
}

.dark .auth-switch-text {
  color: var(--dark-text-secondary);
}

.dark .auth-message {
  color: var(--dark-text-color-muted);
}

.dark .form-title {
  color: var(--dark-primary-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }
}

.user-profile {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.profile-section {
  padding: var(--spacing-md);
  background: var(--surface-color);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.dark .profile-section {
  background: var(--dark-surface-color);
  border-color: var(--dark-border-color);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.profile-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  background: var(--background-color);
  padding: var(--spacing-sm);
  border-radius: 50%;
}

.dark .profile-icon {
  color: var(--dark-primary-color);
  background: var(--dark-background-color);
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.profile-info h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-color);
}

.dark .profile-info h3 {
  color: var(--dark-text-color);
}

.member-status {
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.dark .member-status {
  color: var(--dark-text-secondary);
}

.section-icon {
  margin-right: var(--spacing-sm);
  color: var(--primary-color);
}

.dark .section-icon {
  color: var(--dark-primary-color);
}

.donations-section h4,
.actions-section h4 {
  margin: 0 0 var(--spacing-md);
  font-size: 1rem;
  color: var(--text-color);
  display: flex;
  align-items: center;
}

.dark .donations-section h4,
.dark .actions-section h4 {
  color: var(--dark-text-color);
}

.donations-content {
  min-height: 100px;
}

.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  height: 100px;
}

.dark .loading-state {
  color: var(--dark-text-secondary);
}

.donation-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-md);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-sm);
  background: var(--background-color);
  border-radius: var(--radius-sm);
}

.dark .stat-item {
  background: var(--dark-background-color);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.dark .stat-label {
  color: var(--dark-text-secondary);
}

.stat-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

.dark .stat-value {
  color: var(--dark-primary-color);
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  font-size: 0.9rem;
  height: 100px;
  margin: 0;
}

.dark .empty-state {
  color: var(--dark-text-secondary);
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-sm);
}

.action-button {
  width: 100%;
}

@media (max-width: 480px) {
  .quick-actions {
    grid-template-columns: 1fr;
  }

  .donation-stats {
    grid-template-columns: 1fr;
  }
}

.modal-text {
  text-align: center;
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
}

.dark .modal-text {
  color: var(--dark-text-secondary);
}
</style>