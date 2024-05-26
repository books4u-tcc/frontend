import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ChatConversation } from "./chat-conversation";
import Promptbar from "./promptbar";

export function ChatContainer() {
  return (
    <Flex w="100%" h="100%" minW="600px" py={3} pr={3} maxH="100dvh">
      <Flex
        flexDirection="column"
        w="100%"
        h="100%"
        borderRadius="3xl"
        bg="linear-gradient( #F6F6F600 0%, #F6F6F6 15%)"
        border="1px solid #E2E2E2"
        boxShadow="1px 1px 18px 3px rgb(0 0 0 / 6%)"
      >
        <Flex flex={1} flexDirection="column" height="100%">
          <Flex overflowY="auto" flex={1}>
            <Container
              maxWidth="container.xl"
              flex={1}
              display="flex"
              w="100%"
              gap={4}
              flexDirection="column"
              px={10}
              py={8}
            >
              <ChatConversation />
              <br />
            </Container>
          </Flex>

          <Promptbar />
        </Flex>
      </Flex>
    </Flex>
  );
}
