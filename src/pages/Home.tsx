import { Flex } from "@chakra-ui/react";
import { ChatContainer } from "../components/chat/chat-container";
import Sidebar from "../components/sidebar/Sidebar";
import { ChatContextProvider } from "../components/chat/chat-context";

export function Home() {
  return (
    <div>
      <Flex h="100vh" p="1rem">
        <Sidebar />
        <Flex w="100%" direction="column">
          <ChatContextProvider>
            <ChatContainer />
          </ChatContextProvider>
        </Flex>
      </Flex>
    </div>
  );
}
