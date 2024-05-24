import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { ChatContainer } from "../components/chat/chat-container";
import Sidebar from "../components/sidebar/Sidebar";
import { ChatContextProvider } from "../components/chat/chat-context";

export function Home() {
  return (
    <div>
      <Grid h="100dvh" templateColumns={['200px 3fr', '200px 3fr', '340px 3fr']}>
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem>
          <Flex w="100%" h="100%" direction="column">
            <ChatContextProvider>
              <ChatContainer />
            </ChatContextProvider>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
}
