<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import { useUIStore } from '@/store/ui';
import BaseInput from '../base/BaseInput.vue';
import BaseButton from '../base/BaseButton.vue';
import BaseModal from '../base/BaseModal.vue';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const uiStore = useUIStore();

const showResetModal = ref(false);
const mode = ref('');
const oobCode = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const processing = ref(false);
const verificationComplete = ref(false);

onMounted(async () => {
  // Get the mode and oob code from the URL
  const urlParams = new URLSearchParams(window.location.search);
  mode.value = urlParams.get('mode');
  oobCode.value = urlParams.get('oobCode');

  if (mode.value === 'resetPassword' && oobCode.value) {
    try {
      processing.value = true;
      await authStore.verifyResetCode(oobCode.value);
      verificationComplete.value = true;
      showResetModal.value = true;
      // Clean up the URL without refreshing the page
      window.history.replaceState({}, document.title, '/');
    } catch (error) {
      uiStore.setError('resetPassword', 'Link inválido ou expirado. Por favor, solicite uma nova redefinição de senha.');
      router.push('/');
    } finally {
      processing.value = false;
    }
  }
});

async function handlePasswordReset() {
  if (newPassword.value !== confirmPassword.value) {
    uiStore.setError('resetPassword', 'As senhas não coincidem');
    return;
  }

  try {
    processing.value = true;
    await authStore.confirmPasswordChange(oobCode.value, newPassword.value);
    uiStore.setSuccess('resetPassword', 'Senha alterada com sucesso');
    showResetModal.value = false;
    router.push('/');
  } catch (error) {
    uiStore.setError('resetPassword', error.message);
  } finally {
    processing.value = false;
  }
}

function handleModalClose() {
  if (!processing.value) {
    showResetModal.value = false;
    router.push('/');
  }
}
</script>

<template>
  <BaseModal
    v-model="showResetModal"
    title="Redefinir Senha"
    :show-close="!processing"
    @close="handleModalClose"
  >
    <div v-if="mode === 'resetPassword'" class="reset-password-form">
      <div v-if="verificationComplete" class="form-content">
        <BaseInput
          v-model="newPassword"
          type="password"
          placeholder="Nova senha"
          :disabled="processing"
        />
        
        <BaseInput
          v-model="confirmPassword"
          type="password"
          placeholder="Confirme a nova senha"
          :disabled="processing"
        />
        
        <BaseButton
          @click="handlePasswordReset"
          :loading="processing"
          :disabled="!newPassword || !confirmPassword || processing"
        >
          Confirmar nova senha
        </BaseButton>
      </div>
      
      <div v-else-if="processing" class="loading-state">
        <p>Verificando...</p>
      </div>
    </div>
  </BaseModal>
</template>

<style scoped>
.reset-password-form {
  width: 100%;
  text-align: center;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
}
</style>