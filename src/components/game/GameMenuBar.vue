<template>
  <div class="game-menu-bar">
    <div class="menu-section">
      <button class="menu-button perks-button" @click="showPerksModal = true">
        <font-awesome-icon icon="star" />
        <span class="points-display">{{ points }} pts</span>
      </button>
    </div>

    <div class="menu-section">
      <button class="menu-button" @click="showSettingsModal = true">
        <font-awesome-icon icon="cog" />
      </button>
    </div>

    <div class="menu-section">
      <button class="menu-button" @click="showInfoModal = true">
        <font-awesome-icon icon="info-circle" />
      </button>
    </div>
  </div>

  <BaseModal v-model="showPerksModal" title="Perks Disponíveis">
    <div class="perks-content">
      <div class="points-info">
        <p class="points-total">Seus pontos: {{ points }}</p>
      </div>
      
      <div class="perks-grid">
        <div v-for="perk in perks" :key="perk.id" class="perk-item">
          <button 
            class="perk-button" 
            :class="{ 'perk-button--disabled': points < perk.cost }"
            @click="activatePerk(perk.id)"
            :disabled="points < perk.cost"
          >
            <font-awesome-icon :icon="perk.icon" size="lg" />
            <div class="perk-info">
              <span class="perk-name">{{ perk.name }}</span>
              <span class="perk-cost">{{ perk.cost }} pts</span>
            </div>
            <p class="perk-description">{{ perk.description }}</p>
          </button>
        </div>
      </div>
    </div>
  </BaseModal>

  <BaseModal v-model="showSettingsModal" title="Configurações do Jogo">
    <div class="settings-content">
      <SelectorsComponent @specialty-change="onSpecialtyChange" @difficulty-change="onDifficultyChange" />
      <div class="game-settings">
        <slot name="settings"></slot>
      </div>
    </div>
  </BaseModal>

  <BaseModal v-model="showInfoModal" title="Como Jogar">
    <div class="info-content">
      <div class="game-info">
        <p>{{ gameInstructions }}</p>
      </div>
      <slot name="info"></slot>
    </div>
  </BaseModal>
</template>

<script setup>
import { ref, computed } from 'vue';
import BaseModal from '../base/BaseModal.vue';
import SelectorsComponent from '../SelectorsComponent.vue';
import { useGamePoints } from '@/composables/useGamePoints';

const props = defineProps({
  gameInstructions: {
    type: String,
    required: true
  },
  availablePerks: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['specialty-change', 'difficulty-change', 'perk-activated']);

const showSettingsModal = ref(false);
const showInfoModal = ref(false);
const showPerksModal = ref(false);

const { points, POINTS_CONFIG } = useGamePoints();

const PERK_DETAILS = {
  hint: {
    id: 'hint',
    name: 'Dica',
    description: 'Revela uma letra ou parte da resposta',
    icon: 'lightbulb',
    cost: POINTS_CONFIG.PERK_COSTS.hint
  },
  extra_time: {
    id: 'extra_time',
    name: 'Tempo Extra',
    description: '+30 segundos de tempo',
    icon: 'clock',
    cost: POINTS_CONFIG.PERK_COSTS.extra_time
  },
  skip: {
    id: 'skip',
    name: 'Pular',
    description: 'Pula para a próxima questão',
    icon: 'forward',
    cost: POINTS_CONFIG.PERK_COSTS.skip
  },
  open_third_card: {
    id: 'open_third_card',
    name: 'Terceira Carta',
    description: 'Permite abrir três cartas simultaneamente',
    icon: 'layer-group',
    cost: POINTS_CONFIG.PERK_COSTS.open_third_card
  }
};

const perks = computed(() => 
  props.availablePerks.map(perkId => PERK_DETAILS[perkId])
);

function onSpecialtyChange(value) {
  emit('specialty-change', value);
}

function onDifficultyChange(value) {
  emit('difficulty-change', value);
}

function activatePerk(perkId) {
  emit('perk-activated', perkId);
  showPerksModal.value = false;
}
</script>

<style scoped>
.game-menu-bar {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  position: relative;
  justify-content: center;
}

.menu-section {
  position: relative;
}

.menu-button {
  padding: var(--spacing-sm);
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--text-color);
  transition: all 0.2s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.perks-button {
  width: auto;
  padding: var(--spacing-sm) var(--spacing-md);
  gap: var(--spacing-sm);
}

.points-display {
  font-weight: 600;
  color: var(--primary-color);
}

.menu-button:hover {
  background: var(--background-color);
  border-color: var(--primary-color);
}

.settings-content,
.info-content,
.perks-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.game-info {
  color: var(--text-color);
  line-height: 1.6;
}

.game-info p {
  margin: 0;
  white-space: pre-line;
}

.points-info {
  text-align: center;
  padding: var(--spacing-md);
  background: var(--background-color);
  border-radius: var(--radius-md);
}

.points-total {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0;
}

.perks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.perk-item {
  display: flex;
}

.perk-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  width: 100%;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-color);
}

.perk-button:hover:not(.perk-button--disabled) {
  background: var(--background-color);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.perk-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.perk-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.perk-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.perk-cost {
  font-size: 0.9rem;
  color: var(--primary-color);
}

.perk-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;
}

/* Dark mode support */
:deep(.dark) .menu-button {
  background: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

:deep(.dark) .menu-button:hover {
  background: var(--dark-background-color);
  border-color: var(--dark-primary-color);
}

:deep(.dark) .game-info {
  color: var(--dark-text-color);
}

:deep(.dark) .points-info {
  background: var(--dark-background-color);
}

:deep(.dark) .perk-button {
  background: var(--dark-surface-color);
  border-color: var(--dark-border-color);
  color: var(--dark-text-color);
}

:deep(.dark) .perk-button:hover:not(.perk-button--disabled) {
  background: var(--dark-background-color);
  border-color: var(--dark-primary-color);
}

:deep(.dark) .perk-description {
  color: var(--dark-text-secondary);
}

/* Responsive styles */
@media (max-width: 768px) {
  .perks-button {
    padding: var(--spacing-sm);
    width: 40px;
  }
  
  .points-display {
    display: none;
  }
}
</style>