<template>
  <div class="failure-container">
    <div class="failure-card">
      <img src="@/assets/icons/alert-circle.svg" alt="Failure" class="failure-icon" />
      <h2>Falha no Pagamento</h2>
      <p>Não foi possível processar seu pagamento.</p>
      <div class="actions">
        <BaseButton @click="tryAgain" variant="primary">
          Tentar Novamente
        </BaseButton>
        <BaseButton @click="goToHome" variant="secondary">
          Voltar para Início
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/base/BaseButton.vue';

const router = useRouter();

function tryAgain() {
  router.push('/shop');
}

function goToHome() {
  router.push('/');
}
</script>

<style scoped>
.failure-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height));
  padding: var(--spacing-lg);
}

.failure-card {
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: var(--shadow-md);
}

.failure-icon {
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-md);
  color: var(--error-color);
}

.actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-top: var(--spacing-lg);
}
</style>