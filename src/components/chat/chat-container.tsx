import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ChatContainerProps {
  children?: ReactNode
}

export function ChatContainer({ children }: ChatContainerProps) {
  return <Flex direction="column" gap={3}>
    {children}
  </Flex>
}