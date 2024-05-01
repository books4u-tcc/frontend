import { Flex } from "@chakra-ui/react";
import { ChatContainer } from "../components/chat/chat-container";
import { ChatBox } from "../components/chat/chatbox";
import Sidebar from "../components/sidebar/Sidebar";
import Promptbar from "../components/chat/promptbar";
import { ChatConversation } from "../components/chat/chat-conversation";

export function Home() {
  return <div>
    <Flex h="100vh" p="1rem">
      <Sidebar/>
      <Flex w="100%" direction="column">
        <ChatContainer>
          <ChatConversation />

          <Promptbar/>
        </ChatContainer>
        
      </Flex>
    </Flex>
  </div>
}