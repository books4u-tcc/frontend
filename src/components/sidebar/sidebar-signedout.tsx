import { Flex, Link } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import { SidebarButton } from "./sidebar-button";
import { SidebarTip } from "./sidebar-tip";
import { Link as RouterLink } from "react-router-dom";

export function SidebarSignedOut() {
  return (
    <Fragment>
      <Flex flex={1} flexDir="column" w="100%" gap={2}>
        <SidebarButton as={RouterLink} to="/auth/login" highlighted>
          Entrar
        </SidebarButton>
        <SidebarButton as={RouterLink} to="/auth/register">
          Criar conta
        </SidebarButton>

        <SidebarTip />
      </Flex>

      <Flex flexDir="column" w="100%" color="#616161">
        <Link as={RouterLink} to="/about" w="100%"  textAlign={["center","center","start"]}>
          Sobre
        </Link>
      </Flex>
    </Fragment>
  );
}
