import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useAuthStore } from '../auth';
import { doc, updateDoc, getDoc, increment } from 'firebase/firestore';
import { db } from '@/firebase';
import { useUIStore } from '../ui';

/**
 * @store points
 * @state {number} points - Purchased points
 * @state {number} freePoints - Free points
 * @state {Date|null} lastFreePointsUpdate - Last daily claim
 * @action addPoints - Add points (with error handling)
 * @action usePoints - Use points (with error handling)
 * @action claimDailyPoints - Claim daily points (with error handling)
 */
export const usePointsStore = defineStore('points', () => {
  const authStore = useAuthStore();
  const uiStore = useUIStore();
  const points = ref(0);
  const freePoints = ref(0);
  const lastFreePointsUpdate = ref(null);

  const totalPoints = computed(() => points.value + freePoints.value);
  const canClaimFreePoints = computed(() => {
    if (!lastFreePointsUpdate.value) return true;
    const now = new Date();
    const last = lastFreePointsUpdate.value.toDate();
    return now - last >= 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  });

  /**
   * @action initializePoints
   * @description Loads user points from Firestore
   */
  async function initializePoints() {
    if (!authStore.user?.uid) return;
    try {
      uiStore.setLoading('points', true);
      const userDoc = await getDoc(doc(db, 'users', authStore.user.uid));
      const userData = userDoc.data();
      points.value = userData.points || 0;
      freePoints.value = userData.freePoints || 0;
      lastFreePointsUpdate.value = userData.lastFreePointsUpdate;
      uiStore.setSuccess('points', 'Pontos carregados');
    } catch (error) {
      uiStore.setError('points', error.message);
      throw error;
    } finally {
      uiStore.setLoading('points', false);
    }
  }

  /**
   * @action addPoints
   * @param {number} amount - Points to add
   * @param {boolean} isFree - If points are free
   * @throws {Error} On failure
   */
  async function addPoints(amount, isFree = false) {
    if (!authStore.user?.uid) return;
    const userRef = doc(db, 'users', authStore.user.uid);
    const field = isFree ? 'freePoints' : 'points';
    try {
      uiStore.setLoading('points', true);
      await updateDoc(userRef, { [field]: increment(amount) });
      if (isFree) {
        freePoints.value += amount;
      } else {
        points.value += amount;
      }
      uiStore.setSuccess('points', 'Pontos adicionados com sucesso!');
    } catch (error) {
      // Rollback local state if needed
      if (isFree) freePoints.value -= amount;
      else points.value -= amount;
      uiStore.setError('points', error.message);
      throw error;
    } finally {
      uiStore.setLoading('points', false);
    }
  }

  /**
   * @action usePoints
   * @param {number} amount - Points to use
   * @throws {Error} On failure or insufficient points
   */
  async function usePoints(amount) {
    if (totalPoints.value < amount) {
      uiStore.setError('points', 'Pontos insuficientes');
      throw new Error('Insufficient points');
    }
    let remainingAmount = amount;
    try {
      uiStore.setLoading('points', true);
      // Use free points first
      if (freePoints.value > 0) {
        const freePointsToUse = Math.min(freePoints.value, remainingAmount);
        await updateDoc(doc(db, 'users', authStore.user.uid), {
          freePoints: increment(-freePointsToUse)
        });
        freePoints.value -= freePointsToUse;
        remainingAmount -= freePointsToUse;
      }
      // Use purchased points if needed
      if (remainingAmount > 0) {
        await updateDoc(doc(db, 'users', authStore.user.uid), {
          points: increment(-remainingAmount)
        });
        points.value -= remainingAmount;
      }
      uiStore.setSuccess('points', 'Pontos utilizados com sucesso!');
    } catch (error) {
      // Rollback local state if needed
      await initializePoints();
      uiStore.setError('points', error.message);
      throw error;
    } finally {
      uiStore.setLoading('points', false);
    }
  }

  /**
   * @action claimDailyPoints
   * @throws {Error} If not available or on failure
   */
  async function claimDailyPoints() {
    if (!canClaimFreePoints.value) {
      uiStore.setError('points', 'Pontos diários não disponíveis ainda');
      throw new Error('Daily points not available yet');
    }
    const userRef = doc(db, 'users', authStore.user.uid);
    try {
      uiStore.setLoading('points', true);
      await updateDoc(userRef, {
        freePoints: increment(10),
        lastFreePointsUpdate: new Date()
      });
      freePoints.value += 10;
      lastFreePointsUpdate.value = new Date();
      uiStore.setSuccess('points', 'Pontos diários resgatados!');
    } catch (error) {
      await initializePoints();
      uiStore.setError('points', error.message);
      throw error;
    } finally {
      uiStore.setLoading('points', false);
    }
  }

  if (authStore.user) {
    initializePoints();
  }

  return {
    points,
    freePoints,
    totalPoints,
    lastFreePointsUpdate,
    canClaimFreePoints,
    addPoints,
    usePoints,
    claimDailyPoints,
    initializePoints
  };
});