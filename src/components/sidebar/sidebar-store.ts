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
  },

  updateConversation(id: string, title: string) {
    setState(state => ({
      conversations: state.conversations.map(c => {
        if (c.id === id) {
          return { id, title }
        }
        return c
      })
    }))
  }
}