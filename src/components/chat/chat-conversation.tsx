import { ChatBox } from "./chatbox";
import { useChatStore } from "./chat-store";
import { Fragment } from "react";
import { Onboarding } from "./onboarding";

export function ChatConversation() {
  const messages = useChatStore((s) => s.messages);

  if (!messages.length) {
    return <Onboarding />
  }

  return (
    <Fragment>
      {messages.map((msg, index) => (
        <ChatBox key={index} {...msg} />
      ))}
    </Fragment>
  );
}
