<template>
  <div class="success-container">
    <div class="success-card">
      <img src="@/assets/icons/check-circle.svg" alt="Success" class="success-icon" />
      <h2>Pagamento Confirmado!</h2>
      <p>Seu acesso premium foi ativado com sucesso.</p>
      <p v-if="isSubscription" class="subscription-info">
        Sua assinatura será renovada automaticamente todo mês.
      </p>
      <BaseButton @click="goToHome" variant="primary">
        Começar a usar
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import BaseButton from '@/components/base/BaseButton.vue';

const router = useRouter();
const authStore = useAuthStore();

const isSubscription = authStore.user?.subscriptionStatus === 'active';

onMounted(() => {
  // Refresh user data to update premium status
  authStore.fetchUserSettings();
});

function goToHome() {
  router.push('/');
}
</script>

<style scoped>
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height));
  padding: var(--spacing-lg);
}

.success-card {
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: var(--shadow-md);
}

.success-icon {
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-md);
  color: var(--success-color);
}

.subscription-info {
  margin: var(--spacing-md) 0;
  color: var(--text-muted);
  font-size: 0.9em;
}
</style>