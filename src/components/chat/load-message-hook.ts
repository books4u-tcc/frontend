import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { chatStoreActions, useChatStore } from "./chat-store";
import { apiClient } from "../client/api";
import { isAxiosError } from "axios";

export function useLoadMessages() {
  const { conversationId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    let active = true;
  
    if (conversationId && conversationId === useChatStore.getState().conversationId) {
      // ignora se mudou de pag mas é o mesmo conversation que foi criado
      return
    }
    chatStoreActions.clear();
    if (conversationId) {
      chatStoreActions.setLoading(true);
      apiClient
        .getConversationMessages(conversationId)
        .then(({ data }) => {
          if (active) {
            const messages = data.messages.reverse()
            chatStoreActions.setMessages(
              messages.map((msg) => ({
                state: "normal",
                children: msg.message,
                position: msg.role === 'assistant' ? 'left' : 'right',
              })),
              conversationId
            );
            const lastMessage = messages[messages.length - 1]
            if (lastMessage?.suggestions) {
              chatStoreActions.setSuggestions(lastMessage.suggestions)
            }
          }
        })
        .catch((error) => {
          if (isAxiosError(error) && (error.status === 404 || error.status === 401)) {
            navigate('/')
            chatStoreActions.clear()
          }
          console.error(error);
        })
        .finally(() => {
          if (active) {
            chatStoreActions.setLoading(false);
          }
        });
    } else {
      chatStoreActions.setLoading(false);
    }

    return () => {
      active = false;
    };
  }, [conversationId]);
}
