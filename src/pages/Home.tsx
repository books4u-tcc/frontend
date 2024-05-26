import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { ChatContainer } from "../components/chat/chat-container";
import Sidebar from "../components/sidebar/Sidebar";
import { ChatContextProvider } from "../components/chat/chat-context";
import { PageScaffold } from "./PageScaffold";

export function Home() {
  return (
    <PageScaffold>
      <ChatContextProvider>
        <ChatContainer />
      </ChatContextProvider>
    </PageScaffold>
  );
}
