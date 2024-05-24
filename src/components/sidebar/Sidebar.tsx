import { Flex, List, ListItem } from "@chakra-ui/react";
import logoBig from '../../assets/logo-big.svg'
import { SidebarButton } from "./sidebar-button";
import { SidebarSignedIn } from "./sidebar-signedin";

export default function Sidebar() {
  return (
    <Flex
      w="20%"
      h="100%"
      minW="100px"
      flexDir="column"
      mr="1rem"
      justifySelf="start"
    >
      <Flex
        flexDir="row"
        h="15%"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <img src={logoBig}></img>
      </Flex>
      <Flex h="75%" minH="100px">
        <List
          w="90%"
          fontSize="100%"
          spacing={3}
          mt="1rem"
          color="#616161"
        >
          <SidebarSignedIn />
        </List>
      </Flex>
      <Flex
        h="10%"
        minH="100px"
        alignItems="center"
        justifyContent="start"
        bg="white"
      >
        <List
          fontFamily="Verdana, Geneva, sans-serif"
          fontSize="110%"
          color="#616161"
        >
          <ListItem>Sobre</ListItem>
          <ListItem>Log Out</ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
