import { Box, Text } from "@chakra-ui/react";
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
      <Text zIndex={10} color="brandLight" fontWeight="semibold" fontSize={["medium", "medium", "medium", "large"]}>
        {children}
      </Text>
    </ChatCard>
  );
}
