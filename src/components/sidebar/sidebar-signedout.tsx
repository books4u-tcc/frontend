import { Flex, Link } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import { SidebarButton } from "./sidebar-button";
import { SidebarTip } from "./sidebar-tip";
import { Link as RouterLink } from "react-router-dom";

export function SidebarSignedOut() {
  return (
    <Fragment>
      <Flex flex={1} flexDir="column" w="100%" gap={2}>
        <SidebarButton as={RouterLink} to="/account/auth" highlighted>
          Entrar
        </SidebarButton>
        <SidebarButton as={RouterLink} to="/account/auth">
          Criar conta
        </SidebarButton>

        <SidebarTip />
      </Flex>

      <Flex flexDir="column" w="100%" alignItems="start" color="#616161">
        <Link as={RouterLink} to="/about">
          Sobre
        </Link>
      </Flex>
    </Fragment>
  );
}
