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
import { useChatHook } from "./chat-hook";
import { useLoadMessages } from "./load-message-hook";

export function ChatConversation() {
  const { messages, isLoading, suggestions, conversationId: storeConversationId } = useChatStore();
  const { sendMessage } = useChatHook()
  const { conversationId } = useParams();
  const [lastConversationId, setLastConversationId] = useState<string | undefined>(undefined)

  const { focusPromptInput } = useChatContext();

  useLoadMessages();

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
        <Flex gap={[3, 3, 5]} justifyContent="center" flexDir={["column", "column", "row"]} flexWrap="wrap">
          {suggestions.map((s) => (
            <SuggestionCard onClick={() => sendMessage(s)}>
              {s}
            </SuggestionCard>
          ))}
          <SuggestionCard onClick={focusPromptInput}>Outros</SuggestionCard>
        </Flex>
      )}
    </Fragment>
  );
}
