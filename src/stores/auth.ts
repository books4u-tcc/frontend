import { create } from "zustand";

interface AuthStore {
  authenticated: boolean,
  token: string | null
}

export const useAuthStore = create<AuthStore>(set => ({
  authenticated: false,
  token: null
}))

const { setState, getState } = useAuthStore

export const authStoreActions = {
  login(token: string) {
    setState({ authenticated: true, token })
  },

  logout() {
    setState({ authenticated: false })
  }
}