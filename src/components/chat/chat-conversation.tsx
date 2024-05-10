import { ChatBox } from "./chatbox";
import { chatStoreActions, useChatStore } from "./chat-store";
import { Fragment } from "react";
import { Onboarding } from "./onboarding";
import { Flex } from "@chakra-ui/react";
import { SuggestionCard } from "./suggestion-card";
import { useChatContext } from "./chat-context";
import { RecommendationCard } from "./recommendation-card";

export function ChatConversation() {
  const messages = useChatStore((s) => s.messages);
  const suggestions = useChatStore((s) => s.suggestions);
  const recommendations = useChatStore((s) => s.recommendations);

  const { focusPromptInput } = useChatContext();

  function startSuggestion(message: string) {
    chatStoreActions.sendMessage(message);
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

      {recommendations.length > 0 && (
        <Flex gap={5}>
          {recommendations.map((r) => (
            <RecommendationCard {...r} />
          ))}
        </Flex>
      )}
    </Fragment>
  );
}
