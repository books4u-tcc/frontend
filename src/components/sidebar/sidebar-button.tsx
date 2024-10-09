import { Button, ButtonProps, Flex, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiCheckCircle } from "react-icons/fi";

export interface SidebarButtonProps
  extends Pick<ButtonProps, "as" | "children"> {
  highlighted?: boolean;
  checked?: boolean;
  icon?: ReactNode;
  to?: string;
}

export function SidebarButton({ highlighted, ...props }: SidebarButtonProps) {
  return (
    <Button
      w="100%"
      height="auto"
      fontWeight="semibold"
      fontSize={["xx-small", "xs", "sm"]}
      textOverflow="ellipsis"
      borderRadius="2xl"
      display="flex"
      gap={1}
      alignItems="center"
      justifyContent="center"
      colorScheme={highlighted ? "teal" : "gray"}
      background={highlighted ? "teal.100" : "gray.100"}
      _hover={{
        background: highlighted ? "teal.200" : "gray.300",
      }}
      _active={{
        background: highlighted ? "teal.300" : "gray.500",
      }}
      variant={highlighted ? "ghost" : undefined}
      color={highlighted ? "teal.600" : "inherit"}
      px={3}
      py={3}
      rightIcon={
        props.checked ? (
          <Icon color="teal" h={5} w={5} as={FiCheckCircle} />
        ) : undefined
      }
      {...props}
    >
      {props.icon}
      <Flex noOfLines={1} display="block">
        {props.children}
      </Flex>
    </Button>
  );
}
