import { useNavigate } from "react-router-dom";
import { apiClient } from "../client/api";
import { sidebarStoreActions } from "../sidebar/sidebar-store";
import { chatStoreActions, MessageItem, useChatStore } from "./chat-store";

export function useChatHook() {
  const navigate = useNavigate();

  async function sendMessage(msg: string) {
    async function createConversation(msg: string): Promise<MessageItem> {
      const { data: response } = await apiClient.createConversation();
      chatStoreActions.setConversationId(response.conversationId)
      sidebarStoreActions.addConversation({
        id: response.conversationId,
        title: 'TODO'
      })
  
      navigate(`conversations/${response.conversationId}`)
  
      return {
        state: "normal",
        children: response.messages[0].content,
      };
    }
  
    async function sendConversationMessage(
      conversationId: string,
      msg: string
    ): Promise<MessageItem> {
      const { data: response } = await apiClient.sendMessage(conversationId, msg);
  
      return {
        state: "normal",
        children: response.userMessage.content[0].text.value,
      };
    }

    chatStoreActions.addMessage({
      children: msg,
      position: "right",
    });
    chatStoreActions.addMessage({
      state: "loading",
      position: "left",
    });
    chatStoreActions.setSuggestions([]);

    try {
      const { conversationId } = useChatStore.getState();
      const responseMessage = conversationId
        ? await sendConversationMessage(conversationId, msg)
        : await createConversation(msg);

        chatStoreActions.editLastMessage(responseMessage);
    } catch (error) {
      console.error(error)
      chatStoreActions.editLastMessage({
        state: "error",
        children: "Ocorreu um erro! " + error,
      });
    }
  }

  return { sendMessage }
}