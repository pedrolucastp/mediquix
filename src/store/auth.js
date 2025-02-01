import { defineStore } from 'pinia'
import {
  auth,
  db,
  doc,
  setDoc,
  getDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  initAuthState
} from '../firebase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    initialized: false,
  }),
  actions: {
    initAuthState() {
      initAuthState((user) => {
        this.user = user
        this.initialized = true 
      })
    },
    async signup(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        this.user = userCredential.user
        await setDoc(doc(db, "users", this.user.uid), { words: [] })
      } catch (error) {
        console.error("Erro no signup:", error.message)
        throw error
      }
    },
    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        this.user = userCredential.user
        // const docRef = doc(db, "users", this.user.uid)
        // const docSnap = await getDoc(docRef)
        // if (docSnap.exists()) {
        //   console.log("dados do usuario", docSnap.data())
        // }
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
    }
  },
})
