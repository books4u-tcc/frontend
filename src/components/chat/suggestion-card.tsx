import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ChatCard } from "./chat-card";

export interface SuggestionCardProps {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

export function SuggestionCard({
  children,
  icon,
  onClick,
}: SuggestionCardProps) {
  return (
    <ChatCard onClick={onClick}>
      <Box zIndex={10}>{icon}</Box>
      <Text zIndex={10} color="brand" fontWeight="bold" fontSize={["small", "small", "medium", "large"]}>
        {children}
      </Text>
    </ChatCard>
  );
}
