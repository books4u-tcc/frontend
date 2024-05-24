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
}

export const useChatStore = create<ChatConversationStore>((set) => ({
  messages: [],
  suggestions: [],
}))

const { setState, getState } = useChatStore

export const chatStoreActions = {
  setSuggestions(suggestions: string[]) {
    setState({
      suggestions
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

    const isRecs = Array.isArray(nextResponseMessage)

    this.editLastMessage({
      state: 'normal',
      children: (isRecs ? nextResponseMessage[0] : nextResponseMessage) || 'Não sei responder isso',
      recommendations: isRecs ? nextResponseMessage[1] : undefined
    })

    const sugg = mockedSuggestions[usedMessages.value - 1]
    this.setSuggestions(sugg ?? [])
  }
}