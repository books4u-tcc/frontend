import { ChatBox } from "./chatbox";
import { chatStoreActions, useChatStore } from "./chat-store";
import { Fragment, useEffect, useState } from "react";
import { Onboarding } from "./onboarding";
import { Center, Flex, Spinner } from "@chakra-ui/react";
import { SuggestionCard } from "./suggestion-card";
import { useChatContext } from "./chat-context";
import { RecommendationCard } from "./recommendation-card";
import { useParams } from "react-router-dom";
import { apiClient } from "../client/api";

export function ChatConversation() {
  const { messages, isLoading, suggestions } = useChatStore();
  const { conversationId } = useParams();
  const [lastConversationId, setLastConversationId] = useState<string | undefined>(undefined)

  const { focusPromptInput } = useChatContext();

  function startSuggestion(message: string) {
    chatStoreActions.sendMessage(message);
  }

  useEffect(() => {
    if (conversationId !== lastConversationId) {
      setLastConversationId(conversationId)
      chatStoreActions.clear();
      chatStoreActions.setLoading(true);

      if (conversationId) {
        apiClient
          .getConversationMessages(conversationId)
          .then(({ data }) => {
            chatStoreActions.setMessages(data.messages.map(msg => ({
              state: 'normal',
              children: msg.message,
              position: 'right'
            })), conversationId)
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => chatStoreActions.setLoading(false));
      }

      apiClient;
    }
  }, [conversationId, isLoading, lastConversationId]);

  console.log(conversationId, isLoading)

  if (isLoading) {
    return <Center h="100%">
      <Spinner />
    </Center>
  }

  if (!messages.length) {
    return <Onboarding />;
  }

  return (
    <Fragment>
      {messages.map((msg, index) => (
        <ChatBox key={index} {...msg} />
      ))}

      {suggestions.length > 0 && (
        <Flex gap={5}>
          {suggestions.map((s) => (
            <SuggestionCard onClick={() => startSuggestion(s)}>
              {s}
            </SuggestionCard>
          ))}
          <SuggestionCard onClick={focusPromptInput}>Outros</SuggestionCard>
        </Flex>
      )}
    </Fragment>
  );
}
