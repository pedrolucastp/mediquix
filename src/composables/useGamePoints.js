import { computed } from 'vue';
import { usePointsStore } from '@/store/points';

// Point values for different game actions
export const POINTS_CONFIG = {
  WORD_FOUND: 2,         // Finding a word in word search or completing in crosswords
  GAME_COMPLETION: 10,   // Finishing any game
  PERFECT_SCORE: 15,     // Perfect game (no mistakes, fast completion, etc)
  TIME_BONUS: 5,         // Completing within time limit
  PERK_COSTS: {
    hint: 5,
    extra_time: 3,
    skip: 8,
    open_third_card: 6
  }
};

export function useGamePoints() {
  const pointsStore = usePointsStore();
  const points = computed(() => pointsStore.points);

  async function awardPoints(amount) {
    await pointsStore.addPoints(amount);
  }

  async function usePerk(perkId) {
    const cost = POINTS_CONFIG.PERK_COSTS[perkId];
    if (!cost || points.value < cost) {
      return false;
    }
    await pointsStore.deductPoints(cost);
    return true;
  }

  return {
    points,
    POINTS_CONFIG,
    awardPoints,
    usePerk
  };
}