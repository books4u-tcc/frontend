import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { chatStoreActions, useChatStore } from "./chat-store";
import { apiClient } from "../client/api";

export function useLoadMessages() {
  const { conversationId } = useParams();

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
            chatStoreActions.setMessages(
              data.messages.map((msg) => ({
                state: "normal",
                children: msg.message,
                position: "right",
              })),
              conversationId
            );
          }
        })
        .catch((error) => {
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
