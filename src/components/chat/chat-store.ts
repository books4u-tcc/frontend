import { create } from "zustand";
import { ChatboxProps } from "./chatbox";
import { RecommendationCardProps } from "./recommendation-card";

export interface MessageItem extends ChatboxProps {}

export interface RecommendationItem extends RecommendationCardProps {}

export interface ChatConversationStore {
  isLoading: boolean,
  conversationId: string | null;
  messages: MessageItem[];
  suggestions: string[];
}

export const useChatStore = create<ChatConversationStore>(() => ({
  isLoading: false,
  conversationId: null,
  messages: [],
  suggestions: [],
}));

const { setState, getState } = useChatStore;

export const chatStoreActions = {
  setLoading(isLoading: boolean) {
    setState({ isLoading })
  },

  setConversationId(conversationId: string | null) {
    setState({ conversationId })
  },

  setSuggestions(suggestions: string[]) {
    setState({
      suggestions,
    });
  },

  setMessages(messages: MessageItem[], conversationId: string) {
    setState({
      messages,
      conversationId
    });
  },

  addMessage(msg: MessageItem) {
    setState((store) => ({
      messages: [...store.messages, msg],
    }));
  },

  editLastMessage(updates: Partial<MessageItem>) {
    const lastMessage = getState().messages.slice(-1)[0];
    const newMessage = {
      ...lastMessage,
      ...updates,
    };
    setState((store) => ({
      messages: [...store.messages.slice(0, -1), newMessage],
    }));
  },

  clear() {
    setState({
      isLoading: false,
      conversationId: null,
      messages: [],
      suggestions: []
    })
  },
};
