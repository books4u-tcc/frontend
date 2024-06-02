import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContextBoxProps {
  children?: ReactNode;
}

export function ContentBox({ children }: ContextBoxProps) {
  return <Flex w="100%" h="100%" minW="600px" py={3} pr={3} maxH="100dvh">
    <Flex
      py={3}
      pr={3}
      maxH="100dvh"
      h="100%"
      w="100%"
      paddingTop="5rem"
      borderRadius="3xl"
      bg="linear-gradient( #F6F6F600 0%, #F6F6F6 15%)"
      border="1px solid #E2E2E2"
      boxShadow="1px 1px 18px 3px rgb(0 0 0 / 6%)"
    >
      {children}
    </Flex>
  </Flex>;
}
