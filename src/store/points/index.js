import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useAuthStore } from '../auth';
import { doc, updateDoc, getDoc, increment } from 'firebase/firestore';
import { db } from '@/firebase';

export const usePointsStore = defineStore('points', () => {
  const authStore = useAuthStore();
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

  async function initializePoints() {
    if (!authStore.user?.uid) return;
    
    const userDoc = await getDoc(doc(db, 'users', authStore.user.uid));
    const userData = userDoc.data();
    
    points.value = userData.points || 0;
    freePoints.value = userData.freePoints || 0;
    lastFreePointsUpdate.value = userData.lastFreePointsUpdate;
  }

  async function addPoints(amount, isFree = false) {
    if (!authStore.user?.uid) return;
    
    const userRef = doc(db, 'users', authStore.user.uid);
    const field = isFree ? 'freePoints' : 'points';
    
    await updateDoc(userRef, {
      [field]: increment(amount)
    });

    if (isFree) {
      freePoints.value += amount;
    } else {
      points.value += amount;
    }
  }

  async function usePoints(amount) {
    if (totalPoints.value < amount) {
      throw new Error('Insufficient points');
    }

    // First use free points
    let remainingAmount = amount;
    if (freePoints.value > 0) {
      const freePointsToUse = Math.min(freePoints.value, remainingAmount);
      await updateDoc(doc(db, 'users', authStore.user.uid), {
        freePoints: increment(-freePointsToUse)
      });
      freePoints.value -= freePointsToUse;
      remainingAmount -= freePointsToUse;
    }

    // Then use purchased points if needed
    if (remainingAmount > 0) {
      await updateDoc(doc(db, 'users', authStore.user.uid), {
        points: increment(-remainingAmount)
      });
      points.value -= remainingAmount;
    }
  }

  async function claimDailyPoints() {
    if (!canClaimFreePoints.value) {
      throw new Error('Daily points not available yet');
    }

    const userRef = doc(db, 'users', authStore.user.uid);
    await updateDoc(userRef, {
      freePoints: increment(10),
      lastFreePointsUpdate: new Date()
    });

    freePoints.value += 10;
    lastFreePointsUpdate.value = new Date();
  }

  // When user signs in, initialize their points
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