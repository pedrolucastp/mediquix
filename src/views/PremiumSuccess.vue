<template>
  <div class="premium-result">
    <div class="result-card success">
      <font-awesome-icon icon="crown" class="result-icon" size="3x" />
      <h1>Pagamento Aprovado!</h1>
      <p>Seu acesso Premium foi ativado com sucesso.</p>
      <p>Agora você tem acesso a todo o conteúdo exclusivo do MediQuix!</p>
      <BaseButton @click="goToHome" variant="primary">
        Voltar ao Início
      </BaseButton>
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

.result-card.success {
  border-top: 4px solid var(--success-color);
}

.result-icon {
  color: var(--success-color);
  margin-bottom: var(--spacing-md);
}

h1 {
  color: var(--success-color);
  margin-bottom: var(--spacing-md);
}

p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
}

button {
  margin-top: var(--spacing-md);
}
</style>