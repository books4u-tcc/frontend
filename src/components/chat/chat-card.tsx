import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ChatCardProps extends FlexProps {
  children?: ReactNode;
}

export function ChatCard({ children, ...props }: ChatCardProps) {
  return (
    <Flex
      as="button"
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
      {...props}
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

      {children}
    </Flex>
  );
}
