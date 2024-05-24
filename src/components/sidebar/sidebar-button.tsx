import { Button, ButtonProps, Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

export interface SidebarButtonProps extends ButtonProps {
  highlighted?: boolean
}

export function SidebarButton({ highlighted, ...props }: SidebarButtonProps) {
  return <Button
  w="100%"
  
  height="auto"
  fontWeight="semibold"
  borderRadius="2xl"
  colorScheme={highlighted ? 'teal': 'gray'}
  background={highlighted ? 'teal.100' : 'gray.100'}
  color={highlighted ? 'teal.600' : 'inherit'}
  px={3}
  py={3}
  {...props}
>
  <Flex alignItems="center"
  justifyContent="center"
  width="100%"
  noOfLines={1}
  display="block"
  >
  {
    props.children
  }
  </Flex>
</Button>
}