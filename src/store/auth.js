import { defineStore } from 'pinia'
import {
  auth,
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  initAuthState
} from '../firebase'
import { useSettingsStore } from '@/store/userSettings'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    initialized: false
  }),
  getters: {
    userSettings: (state) =>
      (state.user && state.user.settings ? state.user.settings : null)
  },
  actions: {
    async initAuthState() {
      await initAuthState((user) => {
        this.user = user
        if (user) {
          this.fetchUserSettings()
        }
      })
      this.initialized = true
    },
    async signup(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        this.user = userCredential.user
        const defaultSettings = {
          username: email.split('@')[0],
          email: email,
          custom_vocabulary: [],
          default_difficulty: 1,
          default_speciality: 0,
        }
        await setDoc(doc(db, "users", this.user.uid), defaultSettings)
        this.user.settings = defaultSettings

        const settingsStore = useSettingsStore()
        settingsStore.setSpecialty(defaultSettings.default_speciality)
        settingsStore.setDifficulty(defaultSettings.default_difficulty)
      } catch (error) {
        console.error("Erro no signup:", error.message)
        throw error
      }
    },
    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        this.user = userCredential.user
        console.log('this.user', this.user)
        await this.fetchUserSettings()
      } catch (error) {
        console.error("Erro no login:", error.message)
        throw error
      }
    },
    async logout() {
      try {
        await signOut(auth)
        this.user = null
      } catch (error) {
        console.error("Erro no logout:", error.message)
        throw error
      }
    },
    async fetchUserSettings() {
      try {
        const userDocRef = doc(db, "users", this.user.uid)
        const docSnap = await getDoc(userDocRef)
        console.log('docSnap', docSnap)
        if (docSnap.exists()) {
          let settingsData = docSnap.data()
          console.log('settingsData', settingsData)

          const defaultSettings = {
            username: this.user.email.split('@')[0],
            email: this.user.email,
            default_difficulty: 1,
            default_speciality: 0,
            custom_vocabulary: [],
          }

          let missing = false
          for (const key in defaultSettings) {
            if (!(key in settingsData)) {
              settingsData[key] = defaultSettings[key]
              missing = true
            }
          }
          if (missing) {
            await updateDoc(userDocRef, settingsData)
          }

          this.user.settings = settingsData
          if (settingsData.username) {
            this.user.username = settingsData.username
          }

          const settingsStore = useSettingsStore()
          settingsStore.setSpecialty(settingsData.default_speciality ?? 'all')
          settingsStore.setDifficulty(settingsData.default_difficulty ?? 'all')
        }
      } catch (error) {
        console.error("Erro fetching user settings:", error.message)
      }
    },
    async updateUserSettings(newSettings) {
      try {
        const userDocRef = doc(db, "users", this.user.uid)
        await updateDoc(userDocRef, newSettings)
        this.user.settings = { ...this.user.settings, ...newSettings }
        if (newSettings.username) {
          this.user.username = newSettings.username
        }
        const settingsStore = useSettingsStore()
        settingsStore.setSpecialty(newSettings.default_speciality ?? settingsStore.selectedSpecialty)
        settingsStore.setDifficulty(newSettings.default_difficulty ?? settingsStore.selectedDifficulty)
      } catch (error) {
        console.error("Erro updating user settings:", error.message)
        throw error
      }
    }
  },
})
