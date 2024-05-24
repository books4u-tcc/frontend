import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiAlertCircle } from "react-icons/fi";
import {
  RecommendationCard,
  RecommendationCardProps,
} from "./recommendation-card";

export interface ChatboxProps {
  state?: "normal" | "loading" | "error";
  children?: ReactNode;
  position?: "left" | "right";
  recommendations?: RecommendationCardProps[];
}

export function ChatBox(props: ChatboxProps) {
  const isLeft = props.position === "left";
  const state = props.state ?? "normal";
  const recommendations = props.recommendations;

  return (
    <Flex
      flexDir="column"
      alignItems="start"
      gap={6}
      alignSelf={isLeft ? "start" : "end"}
      textAlign={isLeft ? "start" : "end"}
      maxW="85%"
    >
      <Flex
        fontWeight="semibold"
        boxShadow="default"
        borderRadius="2xl"
        bgGradient="linear(to-tr, #EFEFEF, #FEFEFE)"
        px="6"
        py="2"
        width="auto"
      >
        {state === "normal" ? props.children : null}

        {state === "loading" ? <Spinner /> : null}

        {state === "error" ? (
          <Box color="red.600" display="flex" alignItems="center" gap={2}>
            <FiAlertCircle />
            <Text>Houve um erro ao gerar esse mensagem!</Text>
          </Box>
        ) : null}
      </Flex>

      {recommendations && recommendations?.length > 0 && (
        <Flex gap={5}>
          {recommendations.map((r) => (
            <RecommendationCard {...r} />
          ))}
        </Flex>
      )}
    </Flex>
  );
}
