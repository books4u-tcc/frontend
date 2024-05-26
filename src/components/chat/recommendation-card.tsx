import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ChatCard } from "./chat-card";

export interface RecommendationCardProps {
  title: string;
  author: string;
  imageSrc?: string;
}

export function RecommendationCard(props: RecommendationCardProps) {
  return (
    <ChatCard _hover={{}} as="div" maxW={180}>
      <Flex flexDir="column" gap={2} alignItems="center">
        <Image src="https://via.placeholder.com/140x200" borderRadius="sm" />

        <Text
          zIndex={10}
          color="brand"
          fontWeight="bold"
          fontSize="large"
          align="center"
        >
          {props.title}
        </Text>
        <Text zIndex={10} color="brand" fontSize="large" align="center">
          {props.author}
        </Text>
      </Flex>
    </ChatCard>
  );
}
