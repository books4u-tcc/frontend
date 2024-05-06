import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ChatContainerProps {
  children?: ReactNode
}

export function ChatContainer({ children }: ChatContainerProps) {
  return ( 
    <Flex direction="column" w="100%" h="100%" m="0 auto 0 auto" minW="600px" borderRadius="lg" bg="linear-gradient( #F6F6F600 0%, #F6F6F6 15%)">
      
        {children}
      
    </Flex>
  )
}