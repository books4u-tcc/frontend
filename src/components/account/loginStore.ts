import { create } from "zustand";

export interface LoginStore {
  view: 'login' | 'register',
  setView(view: 'login' | 'register'): void
}

export const useLoginStore = create<LoginStore>(set => ({
  view: 'login',
  setView(view) {
    set({ view })
  },
}))