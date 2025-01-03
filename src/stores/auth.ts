import { create } from "zustand";
import { apiClient } from "../components/client/api";

interface AuthStore {
  authenticated: boolean,
  token: string | null
}

export const useAuthStore = create<AuthStore>(() => ({
  authenticated: false,
  token: null
}))

const { setState, getState } = useAuthStore

export const authStoreActions = {
  login(token: string) {
    localStorage.setItem('auth-token', token)
    setState({ authenticated: true, token })
  },

  logout() {
    localStorage.removeItem('auth-token')
    setState({ authenticated: false })
  },

  async boot() {
    const token = localStorage.getItem('auth-token')
    if (!token) return

    setState({ token })
    try {
      await apiClient.getProfile()
      setState({ authenticated: true })
    } catch (error) {
      console.error(error)
      localStorage.removeItem('auth-token')
      setState({ authenticated: false, token: null })
    }
  }
}