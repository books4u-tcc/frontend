import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChatCard } from "./chat-card";
import { useChatHook } from "./chat-hook";

export interface RecommendationCardProps {
  title: string;
  author: string;
  imageSrc?: string;
  link?: string;
}

export function RecommendationCard(props: RecommendationCardProps) {
  const { sendMessage } = useChatHook();

  function showDetails() {
    sendMessage(
      `Me conte mais sobre o livro ${props.title} de ${props.author}`
    );
  }
  return (
    <ChatCard _hover={{}} as="div" minW={180} w="100%">
      <Flex
        flexDir="column"
        
        alignItems="center"
        justifyContent="space-between"
        h="100%"
      >
        <Flex width="100%" flexDir="column" alignItems="center" gap={2}>
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
        </Flex>

        <Flex width="100%" flexDir="column">
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
      </Flex>
    </ChatCard>
  );
}
