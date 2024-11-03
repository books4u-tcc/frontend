import { ChatContainer } from "../components/chat/chat-container";
import { ChatContextProvider } from "../components/chat/chat-context";
import { PageScaffold } from "./PageScaffold";

export function ConversationPage() {
  return (
    <PageScaffold>
      <ChatContextProvider>
        <ChatContainer />
      </ChatContextProvider>
    </PageScaffold>
  );
}
