import { Flex, Link, List, ListItem } from "@chakra-ui/react";
import logoBig from '../../assets/logo-big.svg'

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
        
        <a href="/">
        <img src={logoBig}></img>
        </a>

      </Flex>
      <Flex h="75%" minH="100px">
        <List
          w="90%"
          fontSize="100%"
          spacing={3}
          mt="1rem"
          color="#616161"
        >
          <ListItem
            fontWeight="semibold"
            boxShadow="default"
            borderRadius="2xl"
            bg="#F0F0F0"
            borderWidth="8px"
            borderColor="#F0F0F0"
            noOfLines={1}
            color="#006D86"
            textAlign="center"
          >
            Nova Conversa
          </ListItem>
          <ListItem
            fontWeight="semibold"
            boxShadow="default"
            borderRadius="2xl"
            bg="#F0F0F0"
            borderWidth="8px"
            borderColor="#F0F0F0"
            noOfLines={1}
          >
            Recomendação de livro
          </ListItem>
          <ListItem
            fontWeight="semibold"
            boxShadow="default"
            borderRadius="2xl"
            bg="#F0F0F0"
            borderWidth="8px"
            borderColor="#F0F0F0"
            noOfLines={1}
          >
            Livros basileiros
          </ListItem>
          <ListItem
            fontWeight="semibold"
            boxShadow="default"
            borderRadius="2xl"
            bg="#F0F0F0"
            borderWidth="8px"
            borderColor="#F0F0F0"
            noOfLines={1}
          >
            Livros americanos de romance
          </ListItem>
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
          <ListItem>
            <a href="/about">
              Sobre
            </a>
            </ListItem>

            <ListItem>
            <a href="/myaccount">
              Minha conta
            </a>
            </ListItem>
          <ListItem>Log Out</ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
