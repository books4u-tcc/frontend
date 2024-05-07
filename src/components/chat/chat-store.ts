import { create } from "zustand";
import { ChatboxProps } from "./chatbox";
import { mockedMessages, mockedSuggestions, mockRecommendations, usedMessages } from "./mock-messages";
import { wait } from "../../utils";
import { RecommendationCardProps } from "./recommendation-card";

interface MessageItem extends ChatboxProps {}

interface RecommendationItem extends RecommendationCardProps {}

export interface ChatConversationStore {
  messages: MessageItem[]
  suggestions: string[]
  recommendations: RecommendationItem[]
}

export const useChatStore = create<ChatConversationStore>((set) => ({
  messages: [],
  suggestions: [],
  recommendations: []
}))

const { setState, getState } = useChatStore

export const chatStoreActions = {
  setSuggestions(suggestions: string[]) {
    setState({
      suggestions
    })
  },

  setRecommendations(recommendations: RecommendationItem[]) {
    setState({
      recommendations
    })
  },

  addMessage(msg: MessageItem) {
    setState(store => ({
      messages: [...store.messages, msg]
    }))
  },
  
  editLastMessage(updates: Partial<MessageItem>) {
    const lastMessage = getState().messages.slice(-1)[0]
    const newMessage = {
      ...lastMessage,
      ...updates
    }
    setState(store => ({
      messages: [...store.messages.slice(0, -1), newMessage]
    }))
  },
  
  async sendMessage(msg: string) {
    this.addMessage({
      children: msg,
      position: 'right'
    })
    this.addMessage({
      state: 'loading',
      position: 'left'
    })
    this.setSuggestions([])
    const nextResponseMessage = mockedMessages[usedMessages.value++]

    await wait(300)

    this.editLastMessage({
      state: 'normal',
      children: nextResponseMessage ?? 'Ótimo, aqui estão minhas sugestões:'
    })

    if (!nextResponseMessage) {
      this.setRecommendations(mockRecommendations)
    }

    const sugg = mockedSuggestions[usedMessages.value - 1]
    this.setSuggestions(sugg ?? [])
  }
}