import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { chatStoreActions, useChatStore } from "./chat-store";
import { apiClient } from "../client/api";
import { isAxiosError } from "axios";
import { ListMessagesResponseMessage, ListMessagesResponseMessageRecommendation } from "../client/types/conversation";

export function useLoadMessages() {
  const { conversationId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    if (
      conversationId &&
      conversationId === useChatStore.getState().conversationId
    ) {
      // ignora se mudou de pag mas é o mesmo conversation que foi criado
      return;
    }
    chatStoreActions.clear();

    function handleRecommendations(msg: ListMessagesResponseMessage) {
      if (msg.suggestions?.[0] && typeof msg.suggestions?.[0] === "object") {
        return (msg.suggestions as ListMessagesResponseMessageRecommendation[]).map((s) => ({
          title: s.title,
          author: s.author || "Autor desconhecido",
          imageSrc: s.imageUrl || undefined,
          link: s.externalLink || undefined,
        }));
      }
    }

    if (conversationId) {
      chatStoreActions.setLoading(true);
      apiClient
        .getConversationMessages(conversationId)
        .then(({ data }) => {
          if (active) {
            const messages = data.messages.reverse();
            chatStoreActions.setMessages(
              messages.map((msg) => ({
                state: "normal",
                children: msg.message,
                position: msg.role === "assistant" ? "left" : "right",
                recommendations: handleRecommendations(msg),
              })),
              conversationId
            );
            const lastMessage = messages[messages.length - 1]
            if (lastMessage?.suggestions?.[0] && typeof lastMessage.suggestions[0] === 'string') {
              chatStoreActions.setSuggestions(lastMessage.suggestions as string[])
            }
          }
        })
        .catch((error) => {
          if (
            isAxiosError(error) &&
            (error.status === 404 || error.status === 401)
          ) {
            navigate("/");
            chatStoreActions.clear();
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
