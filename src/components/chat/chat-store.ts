import { create } from "zustand";
import { ChatboxProps } from "./chatbox";
import {
  mockedMessages,
  mockedSuggestions,
  mockRecommendations,
  usedMessages,
} from "./mock-messages";
import { wait } from "../../utils";
import { RecommendationCardProps } from "./recommendation-card";
import { apiClient } from "../client/api";

interface MessageItem extends ChatboxProps {}

interface RecommendationItem extends RecommendationCardProps {}

export interface ChatConversationStore {
  isLoading: boolean,
  conversationId: string | null;
  messages: MessageItem[];
  suggestions: string[];
}

export const useChatStore = create<ChatConversationStore>((set) => ({
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

  async createConversation(msg: string): Promise<MessageItem> {
    const { data: response } = await apiClient.createConversation();
    setState({
      conversationId: response.conversationId
    })

    return {
      state: "normal",
      children: response.messages[0].content,
    };
  },

  async sendConversationMessage(
    conversationId: string,
    msg: string
  ): Promise<MessageItem> {
    const { data: response } = await apiClient.sendMessage(conversationId, msg);

    return {
      state: "normal",
      children: response.userMessage.content[0].text.value,
    };
  },

  async sendMessage(msg: string) {
    this.addMessage({
      children: msg,
      position: "right",
    });
    this.addMessage({
      state: "loading",
      position: "left",
    });
    this.setSuggestions([]);

    try {
      const { conversationId } = getState();
      const responseMessage = conversationId
        ? await this.sendConversationMessage(conversationId, msg)
        : await this.createConversation(msg);

      this.editLastMessage(responseMessage);
    } catch (error) {
      console.error(error)
      this.editLastMessage({
        state: "error",
        children: "Ocorreu um erro! " + error,
      });
    }
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
