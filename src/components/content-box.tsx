import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContextBoxProps {
  children?: ReactNode;
}

const boxShadowDefault = "1px 4px 18px 3px rgb(0 0 0 / 9%)"
const boxShadowSmall = "-1px 7px 17px 1px rgb(0 0 0 / 20%)"

export function ContentBox({ children }: ContextBoxProps) {
  return <Flex w="100%" h="100%" py={[2, 2, 3]} pt={[2, 2, 3]} pr={[2, 2, 3]} pl={[2, 2, 0]} maxH="100dvh">
    <Flex
      pt={3}
      pr={3}
      maxH="100dvh"
      h="100%"
      w="100%"
      paddingTop="5rem"
      borderRadius="3xl"
      bg="linear-gradient( #F6F6F600 0%, #F6F6F6 15%)"
      border="1px solid #d1d1d1"
      boxShadow={[boxShadowSmall, boxShadowSmall, boxShadowDefault]}
    >
      {children}
    </Flex>
  </Flex>;
}
