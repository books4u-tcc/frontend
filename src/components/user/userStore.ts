import { create } from "zustand";
import { Account } from "../client/types/auth";
import { apiClient } from "../client/api";

interface UserStore {
  isLoading: boolean,
  account: Account | null
}

export const useUserStore = create<UserStore>(set => ({
  isLoading: true,
  account: null
}))


export const userStoreActions = {
  setLoading(isLoading: boolean) {
    useUserStore.setState({ isLoading })
  },

  async load() {
    this.setLoading(true)
    const { data } = await apiClient.getProfile()
    useUserStore.setState({ account: data })
    this.setLoading(false)
    return data
  }
}