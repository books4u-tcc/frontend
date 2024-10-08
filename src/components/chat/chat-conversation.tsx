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

  // useEffect(() => {
  //   let active = true;
  //   if (conversationId !== lastConversationId && conversationId !== storeConversationId) {
  //     setLastConversationId(conversationId)
  //     chatStoreActions.clear();
  //     chatStoreActions.setLoading(true);

  //     if (conversationId) {
  //       apiClient
  //         .getConversationMessages(conversationId)
  //         .then(({ data }) => {
  //           if (active) {
  //             chatStoreActions.setMessages(data.messages.map(msg => ({
  //               state: 'normal',
  //               children: msg.message,
  //               position: 'right'
  //             })), conversationId)
  //           }
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         })
  //         .finally(() => {
  //           if (active) {
  //             chatStoreActions.setLoading(false)
  //           }
  //         });
  //     } else {
  //       chatStoreActions.setLoading(false);
  //     }

  //     return () => {
  //       console.log('deact')
  //       active = false
  //     }
  //   }
  // }, [conversationId, isLoading, lastConversationId, storeConversationId]);

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
        <Flex gap={5}>
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
