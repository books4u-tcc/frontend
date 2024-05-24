import { Flex, Icon, Text } from "@chakra-ui/react";
import { LuLightbulb } from "react-icons/lu";
import './sidebar.css'

export function SidebarTip() {
  return (
    <Flex flexDir="column" alignItems="center">
      <div className="arrow" />
      <Flex
      bg="teal.500"
      color="white"
      borderRadius="2xl"
      px={4}
      py={3}
      gap={2}
      alignItems="center"
    >
      <Icon as={LuLightbulb} h={6} w={6} />
      <Text fontSize="sm" fontWeight="medium" align="center">
        Entre para manter suas conversas!
      </Text>
    </Flex>

    </Flex>
  );
}
