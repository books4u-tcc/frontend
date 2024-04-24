import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Center } from "@chakra-ui/react";
import { ChatBox } from "./components/chat/chatbox";
import { ChatContainer } from "./components/chat/chat-container";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
