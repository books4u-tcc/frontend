import { Box, Spinner, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiAlertCircle } from "react-icons/fi";

export interface ChatboxProps {
  state?: "normal" | "loading" | "error";
  children?: ReactNode;
  position?: "left" | "right";
}

export function ChatBox(props: ChatboxProps) {
  const isLeft = props.position === "left";
  const state = props.state ?? "normal";

  return (
    <Box
      alignSelf={isLeft ? "start" : "end"}
      textAlign={isLeft ? "start" : "end"}
      display="flex"
      fontWeight="semibold"
      boxShadow="default"
      borderRadius="2xl"
      bgGradient="linear(to-tr, #EFEFEF, #FEFEFE)"
      px="6"
      py="2"
    >
      {state === "normal" ? props.children : null}

      {state === "loading" ? <Spinner /> : null}

      {state === "error" ? (
        <Box color="red.600" display="flex" alignItems="center" gap={2}>
          <FiAlertCircle />
          <Text>Houve um erro ao gerar essa mensagem!</Text>
        </Box>
      ) : null}
    </Box>
  );
}
