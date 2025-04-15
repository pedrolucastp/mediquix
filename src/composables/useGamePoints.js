import { usePointsStore } from '@/store/points';

// Available perks and their configuration
export const PERKS = {
  hint: {
    id: 'hint',
    name: 'Dica',
    description: 'Revela uma letra ou dica adicional',
    cost: 5,
    icon: 'lightbulb'
  },
  extra_time: {
    id: 'extra_time',
    name: 'Tempo Extra',
    description: 'Adiciona 30 segundos ao tempo do jogo',
    cost: 3,
    icon: 'clock'
  },
  skip: {
    id: 'skip',
    name: 'Pular',
    description: 'Pula para a próxima palavra/questão',
    cost: 8,
    icon: 'forward'
  }
};

// Point values for different game actions
export const POINTS_CONFIG = {
  WORD_FOUND: 2,         // Finding a word in word search or completing in crosswords
  GAME_COMPLETION: 10,   // Finishing any game
  PERFECT_SCORE: 15,     // Perfect game (no mistakes, fast completion, etc)
  TIME_BONUS: 5,         // Completing within time limit
};

export function useGamePoints() {
  const pointsStore = usePointsStore();

  async function awardPoints(amount) {
    try {
      await pointsStore.addPoints(amount, true); // Add as free points
      return true;
    } catch (error) {
      console.error('Failed to award points:', error);
      return false;
    }
  }

  async function usePerk(perkId) {
    const perk = PERKS[perkId];
    if (!perk) throw new Error('Invalid perk');

    try {
      await pointsStore.usePoints(perk.cost);
      return true;
    } catch (error) {
      console.error('Failed to use perk:', error);
      return false;
    }
  }

  return {
    PERKS,
    POINTS_CONFIG,
    awardPoints,
    usePerk,
    totalPoints: pointsStore.totalPoints,
  };
}