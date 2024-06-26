import { Flex, Link, List, ListItem } from "@chakra-ui/react";
import logoBig from "../../assets/logo-big.svg";
import { SidebarButton } from "./sidebar-button";
import { SidebarSignedIn } from "./sidebar-signedin";
import { SidebarSignedOut } from "./sidebar-signedout";
import { useAuthStore } from "../../stores/auth";
import { Link as RouterLink } from "react-router-dom";

export default function Sidebar() {
  const authenticated = useAuthStore((s) => s.authenticated);

  console.log(authenticated);

  return (
    <Flex w="100%" h="100%" flexDir="column" justifySelf="start" px={3} py={5}>
      <Flex flexDir="column" h="100%" w="100%" alignItems="center" gap={4}>
        <RouterLink to="/">
          <img src={logoBig}></img>
        </RouterLink>

        {authenticated ? <SidebarSignedIn /> : <SidebarSignedOut />}
      </Flex>
    </Flex>
  );
}
