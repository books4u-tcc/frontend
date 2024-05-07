import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ChatConversation } from "./chat-conversation";
import Promptbar from "./promptbar";

export function ChatContainer() {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      m="0 auto 0 auto"
      minW="600px"
      borderRadius="lg"
      bg="linear-gradient( #F6F6F600 0%, #F6F6F6 15%)"
    >
      <Flex
        flex={1}
        w="100%"
        gap={3}
        direction="column"
        padding="1rem 5rem 1rem 5rem"
        overflowY="auto"
      >
        <ChatConversation />
      </Flex>

      <Promptbar />
    </Flex>
  );
}
