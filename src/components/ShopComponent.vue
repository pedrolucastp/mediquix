<template>
  <div class="shop-container">
    <div class="products-grid">
      <div class="product-card">
        <h2>Apoie o MediQuix</h2>
        <div class="supporter-perks">
          <h3>Benefícios do Apoiador:</h3>
          <ul>
            <li>
              <font-awesome-icon icon="unlock" class="perk-icon" />
              Acesso ilimitado a todos os jogos
            </li>
            <li>
              <font-awesome-icon icon="star" class="perk-icon" />
              Conteúdo exclusivo e especialidades extras
            </li>
            <li>
              <font-awesome-icon icon="heart" class="perk-icon" />
              Ajude a manter o projeto vivo e crescendo
            </li>
          </ul>
        </div>
        <div class="price-container">
          <div class="price">R$ {{ (PREMIUM_PRICE).toFixed(2) }}</div>
          <span class="price-period">contribuição única</span>
        </div>

        <BaseButton
          variant="primary"
          @click="handlePurchase"
          :disabled="!isAuthenticated || isLoading"
          :loading="isLoading"
        >
          {{ isAuthenticated ? 'Apoiar via PIX' : 'Faça login para apoiar' }}
        </BaseButton>
      </div>
    </div>

    <!-- PIX Modal -->
    <BaseModal v-model="pixModalVisible" title="Pagamento PIX">
      <div class="pix-container">
        <template v-if="paymentsStore.loading">
          <div class="loading-container">
            <font-awesome-icon icon="circle-notch" size="3x" class="loading-icon" spin />
            <p>Gerando QR Code PIX...</p>
          </div>
        </template>
        
        <template v-else-if="pixData">
          <h3>Escaneie o QR Code para pagar</h3>
          <img 
            v-if="pixData.point_of_interaction?.transaction_data?.qr_code_base64" 
            :src="`data:image/png;base64,${pixData.point_of_interaction.transaction_data.qr_code_base64}`" 
            alt="QR Code PIX" 
            class="pix-qr-code" 
          />
          <div class="pix-code">
            <p>Ou copie o código PIX:</p>
            <div class="copy-area">
              <input 
                type="text" 
                readonly 
                :value="pixData.point_of_interaction?.transaction_data?.qr_code" 
              />
              <BaseButton @click="copyPixCode" icon="copy">
                Copiar
              </BaseButton>
            </div>
            <p class="helper-text">
              Após o pagamento, seu acesso Premium será ativado automaticamente.
              Não é necessário enviar comprovante.
            </p>
          </div>
        </template>

        <template v-else>
          <div class="payment-error">
            <font-awesome-icon icon="exclamation-circle" size="3x" class="error-icon" />
            <h3>Erro no Pagamento</h3>
            <p>O pagamento foi cancelado ou ocorreu um erro.</p>
            <div class="button-group">
              <BaseButton @click="handlePurchase" variant="primary">
                Tentar Novamente
              </BaseButton>
              <BaseButton @click="closePixModal" variant="outline">
                Cancelar
              </BaseButton>
            </div>
          </div>
        </template>
      </div>
    </BaseModal>

    <!-- Success Modal -->
    <BaseModal v-model="successModalVisible" title="Pagamento Aprovado!">
      <div class="success-container">
        <font-awesome-icon icon="check-circle" size="3x" class="success-icon" />
        <h3>Parabéns! Você agora é um Apoiador Premium!</h3>
        <p>Seu pagamento foi confirmado e seu acesso Premium já está ativo.</p>
        <div class="premium-benefits">
          <h4>Seus benefícios:</h4>
          <ul>
            <li>
              <font-awesome-icon icon="unlock" class="benefit-icon" />
              Acesso ilimitado a todos os jogos
            </li>
            <li>
              <font-awesome-icon icon="star" class="benefit-icon" />
              Conteúdo exclusivo e especialidades extras
            </li>
          </ul>
        </div>
        <BaseButton @click="closeSuccessModal" variant="primary" icon="crown">
          Começar a Usar
        </BaseButton>
      </div>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useAuthStore } from '@/store/auth';
import { usePaymentsStore } from '@/store/payments';
import { useUIStore } from '@/store/ui';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseModal from '@/components/base/BaseModal.vue';

const authStore = useAuthStore();
const paymentsStore = usePaymentsStore();
const uiStore = useUIStore();

const { isAuthenticated } = authStore;
const isLoading = ref(false);
const pixModalVisible = ref(false);
const successModalVisible = ref(false);
const pixData = ref(null);

const PREMIUM_PRICE = 1.99;

// Watch for premium status changes
watch(
  () => authStore.isPremium,
  (isPremium) => {
    if (isPremium) {
      // Show success modal and hide PIX modal when payment is confirmed
      pixModalVisible.value = false;
      successModalVisible.value = true;
      uiStore.setSuccess('Pagamento aprovado! Seu acesso Premium foi ativado.');
    }
  }
);

async function handlePurchase() {
  if (!isAuthenticated) return;

  try {
    isLoading.value = true;
    pixModalVisible.value = true;
    
    const payment = await paymentsStore.purchasePremium();
    if (payment) {
      pixData.value = payment;
    }
  } catch (error) {
    uiStore.setError('premium', error.message);
  } finally {
    isLoading.value = false;
  }
}

function closeSuccessModal() {
  successModalVisible.value = false;
  // router.push('/premium-success');
}

function closePixModal() {
  pixModalVisible.value = false;
  pixData.value = null;
}

async function copyPixCode() {
  if (pixData.value?.point_of_interaction?.transaction_data?.qr_code) {
    await navigator.clipboard.writeText(pixData.value.point_of_interaction.transaction_data.qr_code);
    uiStore.setSuccess('Código PIX copiado!');
  }
}
</script>

<style scoped>
.shop-container {
  padding: var(--spacing-lg);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.product-card {
  background: var(--surface-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.supporter-perks {
  margin: var(--spacing-md) 0;
  text-align: left;
}

.supporter-perks h3 {
  font-size: 1.1em;
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
}

.supporter-perks ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.supporter-perks li {
  padding: var(--spacing-sm) 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.perk-icon {
  color: var(--accent-color);
}

.price-container {
  margin: var(--spacing-md) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price {
  font-size: 2em;
  font-weight: bold;
  color: var(--accent-color);
}

.price-period {
  font-size: 0.9em;
  color: var(--text-muted);
}

.pix-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
}

.pix-qr-code {
  width: 200px;
  height: 200px;
  border: 1px solid var(--border-color);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  background: white;
}

.pix-code {
  width: 100%;
}

.copy-area {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.copy-area input {
  flex: 1;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-family: monospace;
}

.helper-text {
  font-size: 0.875em;
  color: var(--text-muted);
  margin-top: var(--spacing-md);
  text-align: center;
}

.loading-container {
  text-align: center;
}

.loading-icon {
  color: var(--accent-color);
  margin-bottom: var(--spacing-md);
}

.payment-error {
  text-align: center;
}

.error-icon {
  color: var(--error-color);
  margin-bottom: var(--spacing-md);
}

.button-group {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-top: var(--spacing-md);
}

.success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-lg);
}

.success-icon {
  color: var(--success-color);
  margin-bottom: var(--spacing-md);
}

.premium-benefits {
  margin: var(--spacing-lg) 0;
  text-align: left;
  width: 100%;
}

.premium-benefits h4 {
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
}

.premium-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.premium-benefits li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
}

.benefit-icon {
  color: var(--accent-color);
}
</style>