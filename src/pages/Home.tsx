import { Box } from "@chakra-ui/react";
import { ChatContainer } from "../components/chat/chat-container";
import { ChatBox } from "../components/chat/chatbox";

export function Home() {
  return <div>
    <Box m={3}>
        <ChatContainer>
          <ChatBox position="left">teste de mensagem na esquerda</ChatBox>
          <ChatBox position="left">teste de mensagem na esquerda denovo</ChatBox>

          <ChatBox>teste de mensagem na direita</ChatBox>
          <ChatBox>msg de loading:</ChatBox>
          <ChatBox state="loading" position="left" />
          <ChatBox>msg de erro:</ChatBox>
          <ChatBox state="error" position="left" />
        </ChatContainer>
      </Box>
  </div>
}