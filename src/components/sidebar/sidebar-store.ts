import { create } from "zustand";

export interface ConversationItem {
  id: string
  title: string
}

export interface SidebarStore {
  conversations: ConversationItem[]
}

export const useSidebarStore = create<SidebarStore>(() => ({
  conversations: []
}));

const { setState, getState } = useSidebarStore;

export const sidebarStoreActions = {
  setConversations(conversations: ConversationItem[]) {
    setState({ conversations })
  },

  addConversation(conversation: ConversationItem) {
    setState({ conversations: [
      conversation,
      ...getState().conversations
    ] })
  }
}