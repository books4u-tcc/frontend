import { useNavigate } from "react-router-dom";
import { apiClient } from "../client/api";
import { sidebarStoreActions } from "../sidebar/sidebar-store";
import { chatStoreActions, MessageItem, useChatStore } from "./chat-store";

export function useChatHook() {
  const navigate = useNavigate();

  function canSendMessage() {
    const messages = useChatStore.getState().messages
    const lastSentMessage = messages[messages.length - 1]

    return !lastSentMessage || lastSentMessage.state !== 'loading'
  }

  async function sendMessage(msg: string) {
    if (!canSendMessage()) return
    let startingConversationId = useChatStore.getState().conversationId
    
    function isStillSameConversation () {
      console.log(useChatStore.getState().conversationId, startingConversationId)
      return useChatStore.getState().conversationId === startingConversationId
    }

    async function createConversation(msg: string): Promise<MessageItem> {
      const { data: response } = await apiClient.createConversation();
      const conversation = response.conversation[0]

      if (!isStillSameConversation())
        throw new Error('Conversation changed while waiting response')

      chatStoreActions.setConversationId(conversation.id)
      startingConversationId = conversation.id
      sidebarStoreActions.addConversation({
        id: conversation.id,
        title: conversation.title
      })
  
      navigate(`conversations/${conversation.id}`)
  
      return sendConversationMessage(conversation.id, msg)
    }
  
    async function sendConversationMessage(
      conversationId: string,
      msg: string
    ): Promise<MessageItem> {
      const { data: response } = await apiClient.sendMessage(conversationId, msg);

      if (!isStillSameConversation())
        throw new Error('Conversation changed while waiting response')

      chatStoreActions.setSuggestions(response.options || []);
  
      return {
        position: 'left',
        children: response.message,
        state: 'normal',
        recommendations: response.recommendations?.map(rec => ({
          title: rec.name,
          author: rec.author || 'Autor desconhecido',
          imageSrc: rec.imageUrl || undefined,
          link: rec.externalLink || undefined
        }))
      }
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
      // if (!conversationId) {}
      const lastMessage = conversationId
        ? await sendConversationMessage(conversationId, msg)
        : await createConversation(msg);

        chatStoreActions.editLastMessage(lastMessage);

    } catch (error) {
      console.error(error)
      if (isStillSameConversation()) { 
        chatStoreActions.editLastMessage({
          state: "error",
          children: "Ocorreu um erro! " + error,
        });
      }
    }
  }

  return { sendMessage, canSendMessage }
}