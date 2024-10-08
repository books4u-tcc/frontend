import { Flex, Text } from "@chakra-ui/react";
import bookSearchIcon from "../../assets/icons/book-search.svg";
import { SuggestionCard } from "./suggestion-card";
import { chatStoreActions } from "./chat-store";
import { useChatContext } from "./chat-context";
import { useChatHook } from "./chat-hook";

export function Onboarding() {
  const { focusPromptInput } = useChatContext()
  const { sendMessage } = useChatHook()

  return (
    <Flex
      direction="column"
      justifyContent="flex-end"
      w="100%"
      h="100%"
      alignItems="center"
      gap={5}
    >
      <img src={bookSearchIcon} />
      <Text align="center" color="brand" fontSize="x-large">
        <p>Bem vindo ao Books4U</p>
        <p>Como posso te ajudar hoje?</p>
      </Text>

      <Flex gap={5}>
        <SuggestionCard
          onClick={() => sendMessage("Me recomende livros clássicos")}
        >
          Livros clássicos
        </SuggestionCard>
        <SuggestionCard
          onClick={() => sendMessage("Me recomende histórias de romance")}
        >
          Histórias de romance
        </SuggestionCard>
        <SuggestionCard
          onClick={() => sendMessage("Me recomende artigos interessantes")}
        >
          Artigos interessantes
        </SuggestionCard>
        <SuggestionCard onClick={focusPromptInput}>Outros</SuggestionCard>
      </Flex>
    </Flex>
  );
}
