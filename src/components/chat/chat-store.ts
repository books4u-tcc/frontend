import { create } from "zustand";
import { ChatboxProps } from "./chatbox";
import { mockedMessages, usedMessages } from "./mock-messages";
import { wait } from "../../utils";

interface MessageItem extends ChatboxProps {}

export interface ChatConversationStore {
  messages: MessageItem[]
}

export const useChatStore = create<ChatConversationStore>((set) => ({
  messages: []
}))

const { setState, getState } = useChatStore

export const chatStoreActions = {
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
    const nextResponseMessage = mockedMessages[usedMessages.value++]

    await wait(300)

    this.editLastMessage({
      state: 'normal',
      children: nextResponseMessage ?? 'Não tenho mais o que dizer'
    })
  }
}