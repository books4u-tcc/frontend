import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChatCard } from "./chat-card";
import { useChatHook } from "./chat-hook";

export interface RecommendationCardProps {
  title: string;
  author: string;
  imageSrc?: string;
  link?: string;
}

export function RecommendationCard(props: RecommendationCardProps) {
  const { sendMessage } = useChatHook()

  function showDetails() {
    sendMessage(
      `Me conte mais sobre o livro ${props.title} de ${props.author}`
    );
  }
  return (
    <ChatCard _hover={{}} as="div" maxW={180}>
      <Flex flexDir="column" gap={2} alignItems="center">
        <Image src={props.imageSrc} borderRadius="md" h={240} zIndex={1000} />

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
        <Button
          w="100%"
          size="sm"
          bg="blackAlpha.100"
          _hover={{
            bg: "blackAlpha.300",
          }}
          variant="ghost"
          zIndex={1000}
          onClick={showDetails}
        >
          Ver detalhes
        </Button>
        {props.link && (
          <Button
            w="100%"
            size="sm"
            colorScheme="teal"
            as="a"
            href={props.link}
            target="_blank"
            zIndex={1000}
          >
            Comprar
          </Button>
        )}
      </Flex>
    </ChatCard>
  );
}
