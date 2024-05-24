import { Flex, Link } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import { SidebarButton } from "./sidebar-button";
import { SidebarTip } from "./sidebar-tip";

export function SidebarSignedOut() {
  return (
    <Fragment>
      <Flex flex={1} flexDir="column" w="100%" gap={2}>
        <SidebarButton highlighted >
          Entrar
        </SidebarButton>
        <SidebarButton>Criar conta</SidebarButton>

        <SidebarTip />
      </Flex>

      <Flex flexDir="column" w="100%" alignItems="start" color="#616161">
        <Link>Sobre</Link>
      </Flex>
    </Fragment>
  );
}
