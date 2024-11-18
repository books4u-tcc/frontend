import { Container, Flex } from "@chakra-ui/react";
import { ChatConversation } from "./chat-conversation";
import Promptbar from "./promptbar";
import { ContentBox } from "../content-box";

export function ChatContainer() {
  return (
    <ContentBox>
      <Flex flex={1} w="100%" flexDirection="column" height="100%">
        <Flex overflowY="auto" flex={1}>
          <Container
            maxWidth="container.xl"
            flex={1}
            display="flex"
            w="100%"
            gap={4}
            flexDirection="column"
            px={[2, 2, 4, 10]}
            py={8}
          >
            <ChatConversation />
            <br />
          </Container>
        </Flex>

        <Promptbar />
      </Flex>
    </ContentBox>
  );
}
