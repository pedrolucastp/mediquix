<template>
  <div class="perks-menu" v-if="authStore.isAuthenticated">
    <div class="perks-list">
      <div v-for="perk in perks" :key="perk.id" class="perk-item">
        <BaseButton
          :variant="activePerks.has(perk.id) ? 'accent' : 'outline'"
          :icon="perk.icon"
          @click="handlePerkActivation(perk.id)"
          :disabled="pointsStore.totalPoints < perk.cost || activePerks.has(perk.id)"
          class="perk-button"
        >
          <div class="perk-info">
            <span class="perk-name">{{ perk.name }}</span>
            <span class="perk-cost">{{ perk.cost }} pontos</span>
          </div>
        </BaseButton>
        <div class="perk-tooltip">
          {{ perk.description }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="login-prompt">
    <p>Faça login para usar perks no jogo</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useGamePoints, PERKS } from '@/composables/useGamePoints';
import { usePointsStore } from '@/store/points';
import { useAuthStore } from '@/store/auth';
import BaseButton from '../base/BaseButton.vue';

const props = defineProps({
  availablePerks: {
    type: Array,
    default: () => ['hint', 'extra_time', 'skip']
  }
});

const emit = defineEmits(['perk-activated']);

const { usePerk } = useGamePoints();
const pointsStore = usePointsStore();
const authStore = useAuthStore();

const activePerks = ref(new Set());

const perks = computed(() => 
  props.availablePerks
    .map(perkId => PERKS[perkId])
    .filter(Boolean)
);

async function handlePerkActivation(perkId) {
  if (!authStore.isAuthenticated) return;
  
  if (await usePerk(perkId)) {
    activePerks.value.add(perkId);
    emit('perk-activated', perkId);
    
    // Remove perk from active state after a delay
    setTimeout(() => {
      activePerks.value.delete(perkId);
    }, 5000); // 5 seconds
  }
}
</script>

<style scoped>
.perks-menu {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
}

.perks-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.perk-item {
  position: relative;
}

.perk-button {
  min-width: 120px;
}

.perk-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.perk-name {
  font-weight: 500;
}

.perk-cost {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.perk-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--surface-color);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 10;
  pointer-events: none;
}

.perk-item:hover .perk-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-8px);
}

@media (max-width: 768px) {
  .perks-list {
    flex-direction: column;
  }

  .perk-button {
    width: 100%;
  }
}

.login-prompt {
  text-align: center;
  padding: var(--spacing-md);
  color: var(--text-secondary);
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}
</style>