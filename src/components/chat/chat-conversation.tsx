import { Box, Flex } from "@chakra-ui/react";
import { ChatBox } from "./chatbox";

export function ChatConversation() {
  return (
    <Flex flex={1} w="100%" gap={3} direction="column" padding="1rem 5rem 1rem 5rem" overflowY="auto">
      <ChatBox position="left">teste de mensagem na esquerda</ChatBox>
      <ChatBox position="left">teste de mensagem na esquerda denovo</ChatBox>
      
      {
        new Array(10).fill(1).map(() =>[
          <ChatBox position="left">teste de mensagem na esquerda denovo</ChatBox>,
          <ChatBox position="right">teste de mensagem na direita denovo</ChatBox>
        ])
      }

      <ChatBox>teste de mensagem na direita</ChatBox>
      <ChatBox>msg de loading:</ChatBox>
      <ChatBox state="loading" position="left" />
      <ChatBox>msg de erro:</ChatBox>
      <ChatBox state="error" position="left" />
    </Flex>
  );
}
