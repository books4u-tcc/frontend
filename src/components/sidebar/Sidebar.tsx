import { Flex, List, ListItem } from "@chakra-ui/react";

export default function Sidebar(){
    return(
        <Flex w="20%" h="100%" minW="100px" flexDir="column" mr="1rem" bg="gray" justifySelf="start">
            <Flex h="80%" minH="100px" bg="#F0F0F0">1</Flex>
            <Flex h="20%" minH="100px">
                <List>
                    <ListItem>1</ListItem>
                    <ListItem>2</ListItem>
                    <ListItem>3</ListItem>
                </List>
            </Flex>
        </Flex>
    )
}