<template>
  <div class="shop-container">
    <h2>Premium Perks</h2>
    
    <div class="products-grid">
      <div class="product-card">
        <h3>MediQuix Premium</h3>
        <p>Acesso ilimitado a todas as funcionalidades do MediQuix</p>
        <p class="price">R$ 19,90<span v-if="isRecurring">/mês</span></p>
        
        <div class="payment-options">
          <!-- Subscription Toggle -->
          <div class="subscription-toggle">
            <label>
              <input type="checkbox" v-model="isRecurring">
              Assinatura Mensal
            </label>
            <span class="helper-text">Renovação automática mensal</span>
          </div>

          <!-- Payment Method Selection -->
          <div class="payment-method">
            <label>Método de Pagamento:</label>
            <div class="method-options">
              <button 
                :class="['method-button', { active: paymentMethod === 'pix' }]"
                @click="paymentMethod = 'pix'"
              >
                PIX
              </button>
              <button 
                :class="['method-button', { active: paymentMethod === 'wallet' }]"
                @click="paymentMethod = 'wallet'"
              >
                Carteira Digital
              </button>
            </div>
          </div>
        </div>

        <BaseButton
          variant="primary"
          @click="handlePurchase"
          :disabled="!isAuthenticated || isLoading"
          :loading="isLoading"
        >
          {{ isAuthenticated ? 'Comprar Premium' : 'Faça login para comprar' }}
        </BaseButton>
      </div>
    </div>

    <!-- PIX Modal -->
    <BaseModal v-model="pixModalVisible" title="Pagamento PIX">
      <div v-if="pixData" class="pix-container">
        <h3>Escaneie o QR Code para pagar</h3>
        <img :src="'data:image/png;base64,' + pixData.qrCodeImage" alt="QR Code PIX" class="pix-qr-code" />
        <div class="pix-code">
          <p>Ou copie o código PIX:</p>
          <div class="copy-area">
            <input type="text" readonly :value="pixData.qrCode" />
            <BaseButton @click="copyPixCode" icon="copy">
              Copiar
            </BaseButton>
          </div>
          <p class="expiry-text">Código válido por 24 horas</p>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

// Payment options state
const isRecurring = ref(false);
const paymentMethod = ref('pix');

// PIX state
const pixModalVisible = ref(false);
const pixData = ref(null);

async function handlePurchase() {
  try {
    isLoading.value = true;
    const payment = await paymentsStore.purchasePremium({
      isRecurring: isRecurring.value,
      paymentMethod: paymentMethod.value
    });

    if (payment.redirectUrl) {
      // For wallet payments, redirect to payment page
      window.location.href = payment.redirectUrl;
    } else if (payment.qrCode) {
      // For PIX payments, show QR code
      pixData.value = payment;
      pixModalVisible.value = true;
    }
  } catch (error) {
    uiStore.setError('premium', error.message);
  } finally {
    isLoading.value = false;
  }
}

async function copyPixCode() {
  if (pixData.value?.qrCode) {
    await navigator.clipboard.writeText(pixData.value.qrCode);
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.product-card {
  background-color: var(--surface-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
}

.price {
  font-size: 1.25em;
  font-weight: bold;
  color: var(--primary-color);
  margin: var(--spacing-md) 0;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
}

.subscription-toggle {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.helper-text {
  font-size: 0.875em;
  color: var(--text-muted);
}

.payment-method {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.method-options {
  display: flex;
  gap: var(--spacing-sm);
}

.method-button {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background: var(--surface-color);
  cursor: pointer;
  transition: all 0.2s ease;
}

.method-button.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
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

.expiry-text {
  font-size: 0.875em;
  color: var(--text-muted);
  margin-top: var(--spacing-sm);
  text-align: center;
}
</style>