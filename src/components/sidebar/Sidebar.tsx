import { Flex, Link, List, ListItem } from "@chakra-ui/react";
import logoBig from "../../assets/logo-big.svg";
import { SidebarButton } from "./sidebar-button";
import { SidebarSignedIn } from "./sidebar-signedin";
import { SidebarSignedOut } from "./sidebar-signedout";
import { useAuthStore } from "../../stores/auth";

export default function Sidebar() {
  const authenticated = useAuthStore(s => s.authenticated)

  return (
    <Flex w="100%" h="100%" flexDir="column" justifySelf="start" px={3} py={5}>
      <Flex flexDir="column" h="100%" w="100%" alignItems="center" gap={4}>
        <img src={logoBig}></img>

        { authenticated ? <SidebarSignedIn /> : <SidebarSignedOut />}
      </Flex>
    </Flex>
  );
}
