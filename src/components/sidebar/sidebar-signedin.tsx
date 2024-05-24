import { Fragment } from "react";
import { SidebarButton } from "./sidebar-button";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export function SidebarSignedIn() {
  return (
    <Fragment>
      <Flex flex={1} flexDir="column" w="100%" gap={2}>
        <SidebarButton highlighted icon={<Icon w={6} h={6} as={FiPlus} />}>
          Nova conversa
        </SidebarButton>
        <SidebarButton checked>Recomendação de livro teste</SidebarButton>
        <SidebarButton>Livros de romance</SidebarButton>
      </Flex>

      <Flex flexDir="column" w="100%" alignItems="start" color="#616161">
        <Link>Sobre</Link>
        <Link>Log Out</Link> <SidebarSignedIn />
      </Flex>
    </Fragment>
  );
}
