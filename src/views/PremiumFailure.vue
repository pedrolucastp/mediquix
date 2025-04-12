<template>
  <div class="premium-result">
    <div class="result-card failure">
      <font-awesome-icon icon="times" class="result-icon" size="3x" />
      <h1>Pagamento não concluído</h1>
      <p>Infelizmente o pagamento não foi concluído ou foi cancelado.</p>
      <p>Caso queira tentar novamente, clique no botão abaixo.</p>
      <div class="button-group">
        <BaseButton @click="goToShop" variant="primary">
          Tentar Novamente
        </BaseButton>
        <BaseButton @click="goToHome" variant="outline">
          Voltar ao Início
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/base/BaseButton.vue';

const router = useRouter();

function goToHome() {
  router.push('/');
}

function goToShop() {
  router.push('/shop');
}
</script>

<style scoped>
.premium-result {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: var(--spacing-lg);
}

.result-card {
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  box-shadow: var(--shadow-md);
  max-width: 500px;
  width: 100%;
}

.result-card.failure {
  border-top: 4px solid var(--error-color);
}

.result-icon {
  color: var(--error-color);
  margin-bottom: var(--spacing-md);
}

h1 {
  color: var(--error-color);
  margin-bottom: var(--spacing-md);
}

p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
}

.button-group {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-top: var(--spacing-lg);
}
</style>