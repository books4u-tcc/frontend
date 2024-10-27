import { Button, ButtonProps, Flex, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiCheckCircle } from "react-icons/fi";
import './sidebar-button.scss'

export interface SidebarButtonProps
  extends Pick<ButtonProps, "as" | "children"> {
  highlighted?: boolean;
  checked?: boolean;
  active?: boolean
  icon?: ReactNode;
  to?: string;
}

export function SidebarButton({ highlighted, active, ...props }: SidebarButtonProps) {
  return (
    <Button
    className={'sidebar-button'
      + (highlighted ? ' highlighted' : '')
      + (active ? ' active' : '')

    }
      w="100%"
      height="auto"
      fontWeight="semibold"
      fontSize="sm"
      textOverflow="ellipsis"
      borderRadius="2xl"
      display="flex"
      gap={1}
      alignItems="center"
      justifyContent="center"
      colorScheme={highlighted ? "teal" : "gray"}
      variant={highlighted ? "ghost" : undefined}
      color={highlighted ? "teal.600" : "inherit"}
      px={[1, 1, 3]}
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
