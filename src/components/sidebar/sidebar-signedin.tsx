import { Fragment } from "react";
import { SidebarButton } from "./sidebar-button";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { authStoreActions } from "../../stores/auth";
import { Link as RouterLink }  from 'react-router-dom'

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
        <Link as={RouterLink} to="/about" >Sobre</Link>
        <Link onClick={authStoreActions.logout}>Log Out</Link>
      </Flex>
    </Fragment>
  );
}
