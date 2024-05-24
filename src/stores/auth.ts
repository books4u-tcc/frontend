import { create } from "zustand";

interface AuthStore {
  authenticated: boolean
}

export const useAuthStore = create<AuthStore>(set => ({
  authenticated: false
}))

const { setState, getState } = useAuthStore

export const authStoreActions = {
  login() {
    console.log('aaaaaaaaaa')
    setState({ authenticated: true })
  },

  logout() {
    setState({ authenticated: false })
  }
}