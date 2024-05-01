import { Flex, List, ListItem } from "@chakra-ui/react";
import logo from "../../images/logo.png"

export default function Sidebar(){
    return(
        <Flex w="20%" h="100%" minW="100px" flexDir="column" mr="1rem" justifySelf="start">
                <Flex flexDir="row" h="15%" w="100%" alignItems="center" justifyContent="center">
                    <img src={logo}></img>
                </Flex>
            <Flex h="75%" minH="100px">                
                <List w="90%" fontFamily="Verdana, Geneva, sans-serif" fontSize="100%" spacing={3} mt="1rem" color="#616161">
                    <ListItem fontWeight="semibold" boxShadow="default" borderRadius="2xl" bg="#F0F0F0" borderWidth="8px" borderColor="#F0F0F0" noOfLines={1} color="#006D86" textAlign="center">Nova Conversa</ListItem>
                    <ListItem fontWeight="semibold" boxShadow="default" borderRadius="2xl" bg="#F0F0F0" borderWidth="8px" borderColor="#F0F0F0" noOfLines={1}>Recomendação de livro</ListItem>
                    <ListItem fontWeight="semibold" boxShadow="default" borderRadius="2xl" bg="#F0F0F0" borderWidth="8px" borderColor="#F0F0F0" noOfLines={1}>Livros basileiros</ListItem>
                    <ListItem fontWeight="semibold" boxShadow="default" borderRadius="2xl" bg="#F0F0F0" borderWidth="8px" borderColor="#F0F0F0" noOfLines={1}>Livros americanos de romance</ListItem>
                </List>
                
            </Flex>
            <Flex h="10%" minH="100px" alignItems="center" justifyContent="start" bg="white">
                <List fontFamily="Verdana, Geneva, sans-serif" fontSize="110%" color="#616161">
                    <ListItem>Sobre</ListItem>
                    <ListItem>Log Out</ListItem>
                </List>
            </Flex>
        </Flex>
    )
}