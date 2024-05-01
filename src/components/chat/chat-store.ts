import { createStore } from "zustand";

export interface ChatConversationStore {
  threadId: string
}

export const useChatStore = createStore<ChatConversationStore>((set) => ({

}))