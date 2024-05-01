import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ChatContainerProps {
  children?: ReactNode
}

export function ChatContainer({ children }: ChatContainerProps) {
  return ( 
    <Flex w="100%" h="100%" m="0 auto 0 auto" minW="600px" overflowY="scroll" borderRadius="1rem 1rem 0 0" bg="#F6F6F6">
      <Flex w="100%" gap={3} direction="column" padding="1rem 5rem 1rem 5rem">
        {children}
      </Flex>
    </Flex>
  )
}