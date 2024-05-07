import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface SuggestionCardProps {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void
}

export function SuggestionCard({ children, icon, onClick }: SuggestionCardProps) {
  return (
    <Flex
      as="button"
      onClick={onClick}
      bg="brandGradientHover"
      shadow="default"
      borderRadius="2xl"
      px={4}
      py={6}
      overflow="hidden"
      position="relative"
      transitionProperty="all"
      transitionDuration="normal"
      _hover={{
        shadow: "defaultHovered",
        "& .suggestion-background": {
          bg: "transparent",
        },
      }}
    >
      {/* background */}
      <Box
        transitionProperty="all"
        transitionDuration="normal"
        bg="whiteAlpha.600"
        position="absolute"
        left={0}
        top={0}
        w="100%"
        h="100%"
        zIndex={1}
        className="suggestion-background"
      />

      <Box zIndex={10}>{icon}</Box>
      <Text zIndex={10} color="brand" fontWeight="bold" fontSize="large">
        {children}
      </Text>
    </Flex>
  );
}
