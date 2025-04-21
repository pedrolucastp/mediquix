<template>
  <div class="points-display">
    <div class="points-info">
      <BaseButton 
        variant="accent"
        icon="gift"
        @click="claimDailyPoints"
        :loading="loading"
        :disabled="!canClaimDailyPoints"
        :title="buttonTitle"
      >
        Pontos Diários
      </BaseButton>
      <div class="points-balance">
        <font-awesome-icon icon="coins" class="points-icon" />
        <span class="total-points">{{ pointsStore.totalPoints }}</span>
        <!-- <span class="points-breakdown" v-if="pointsStore.freePoints > 0">
          ({{ pointsStore.freePoints }} grátis)
        </span> -->
      </div>
      
    </div>

    <BaseModal v-model="showPurchaseModal" title="Comprar Pontos">
      <div class="purchase-form">
        <div class="points-calculator">
          <label>Quantidade de Pontos:</label>
          <input 
            type="number" 
            v-model="pointsAmount" 
            min="5"
            :step="paymentsStore.POINTS_PER_BRL * 1"
          />
          <p class="price-preview">
            Preço: R$ {{ calculatePrice(pointsAmount) }}
          </p>
        </div>

        <BaseButton
          variant="primary"
          icon="shopping-cart"
          @click="purchasePoints"
          :loading="loading"
          :disabled="!pointsAmount || pointsAmount < 5"
        >
          Comprar Pontos
        </BaseButton>
      </div>
    </BaseModal>

    <BaseModal v-model="showPixModal" title="Pagamento PIX">
      <div class="pix-container" v-if="pixData">
        <template v-if="pixData.point_of_interaction?.transaction_data?.qr_code_base64">
          <h3>Escaneie o QR Code para pagar</h3>
          <img 
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
                :value="pixData.point_of_interaction.transaction_data.qr_code" 
              />
              <BaseButton @click="copyPixCode" icon="copy">
                Copiar
              </BaseButton>
            </div>
          </div>
        </template>
      </div>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { usePointsStore } from '@/store/points';
import { usePaymentsStore } from '@/store/payments';
import BaseButton from './base/BaseButton.vue';
import BaseModal from './base/BaseModal.vue';

const pointsStore = usePointsStore();
const paymentsStore = usePaymentsStore();

const loading = ref(false);
const showPurchaseModal = ref(false);
const showPixModal = ref(false);
const pointsAmount = ref(50);
const pixData = ref(null);

// Use computed instead of ref for daily points availability
const canClaimDailyPoints = computed(() => pointsStore.canClaimFreePoints);
const buttonTitle = computed(() => canClaimDailyPoints.value ? 'Clique para reivindicar seus pontos diários' : 'Pontos diários não disponíveis');

onMounted(() => {
  // Initialize points data
  pointsStore.initializePoints();
});

async function claimDailyPoints() {
  loading.value = true;
  try {
    await pointsStore.claimDailyPoints();
  } finally {
    loading.value = false;
  }
}

function calculatePrice(points) {
  return Math.ceil(points / paymentsStore.POINTS_PER_BRL);
}

async function purchasePoints() {
  if (!pointsAmount.value) return;
  
  loading.value = true;
  showPurchaseModal.value = false;
  showPixModal.value = true;
  
  try {
    const payment = await paymentsStore.purchasePoints(pointsAmount.value);
    pixData.value = payment;
  } catch (error) {
    console.error('Error purchasing points:', error);
  } finally {
    loading.value = false;
  }
}

async function copyPixCode() {
  if (pixData.value?.point_of_interaction?.transaction_data?.qr_code) {
    await navigator.clipboard.writeText(
      pixData.value.point_of_interaction.transaction_data.qr_code
    );
  }
}
</script>

<style scoped>
.points-display {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.points-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.points-balance {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 1.1rem;
  color: var(--text-color);
}

.points-icon {
  color: var(--accent-color);
}

.total-points {
  font-weight: 600;
}

.points-breakdown {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.purchase-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.points-calculator {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.points-calculator input {
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 1rem;
}

.price-preview {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.pix-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.pix-qr-code {
  width: 200px;
  height: 200px;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
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
</style>