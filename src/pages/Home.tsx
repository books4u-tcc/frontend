import { Flex } from "@chakra-ui/react";
import { ChatContainer } from "../components/chat/chat-container";
import { ChatBox } from "../components/chat/chatbox";
import Sidebar from "../components/sidebar/Sidebar";
import Promptbar from "../components/chat/promptbar";

export function Home() {
  return <div>
    <Flex h="100vh" p="1rem">
      <Sidebar/>
      <Flex w="100%" direction="column">
        <ChatContainer>
          <ChatBox position="left">teste de mensagem na esquerda</ChatBox>
          <ChatBox position="left">teste de mensagem na esquerda denovo</ChatBox>
          <ChatBox position="left">teste de mensagem na esquerda denovo</ChatBox>
          <ChatBox position="left">teste de mensagem na esquerda denovo</ChatBox>
          <ChatBox position="left">teste de mensagem na esquerda denovo</ChatBox>
          <ChatBox position="left">teste de mensagem na esquerda denovo</ChatBox>

          <ChatBox>teste de mensagem na direita</ChatBox>
          <ChatBox>msg de loading:</ChatBox>
          <ChatBox state="loading" position="left" />
          <ChatBox>msg de erro:</ChatBox>
          <ChatBox state="error" position="left" />
        </ChatContainer>
        <Promptbar/>
      </Flex>
    </Flex>
  </div>
}