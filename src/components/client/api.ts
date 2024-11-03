import axios from "axios"
import { Account, LoginPayload, LoginResponse, RegisterUserPayload } from "./types/auth"
import { useAuthStore } from "../../stores/auth"
import { ConversationResponseItem, CreateConversationResponse, ListMessagesResponse, SendMessageResponse } from "./types/conversation"

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL

if (!apiBaseUrl) {
  console.error("Missing api base url env!!")
}

const client = axios.create({
  baseURL: apiBaseUrl,

})

client.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiClient = {
  register(payload: RegisterUserPayload) {
    return client.post<Account>('/api/auth/register', payload)
  },

  login(payload: LoginPayload) {
    return client.post<LoginResponse>('/api/auth/login', payload)
  },

  getProfile() {
    return client.get<Account>('/api/auth/profile')
  },

  createConversation() {
    return client.post<CreateConversationResponse>('/api/conversations')
  },

  sendMessage(conversationId: string, message: string) {
    return client.post<SendMessageResponse>(`/api/conversations/${conversationId}/messages`, {
      message
    })
  },

  getConversations() {
    return client.get<ConversationResponseItem[]>('/api/conversations')
  },

  getConversationMessages(conversationId: string) {
    return client.get<ListMessagesResponse>(`/api/conversations/${conversationId}/messages`)
  }
}