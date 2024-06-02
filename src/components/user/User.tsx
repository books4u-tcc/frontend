import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, List, ListItem, useDisclosure, Text, Tooltip, Collapse, Box } from "@chakra-ui/react"
import user from "../../assets/user.png"
import edit from "../../assets/editIcon.png"
import AlertDialogChangePassword from "./ChangePassword"
import AlertDialogDeleteAccount from "./DeleteAccount"
import EditAccount from "./EditAccount"
import React from "react"

export default function User() {


    const { isOpen, onToggle } = useDisclosure();

    
        return (
            <Flex
                w="70%"
                minW="200px"
                h="100%"
                justifyContent="center"
                alignItems="center"
                minH="100px"
                flexDirection="column" // Alteração para flex direção de coluna para dispositivos menores
                
            >
                <Flex
                    w={["100%", "70%", "60%"]} // Tamanhos diferentes para diferentes tamanhos de tela
                    h="auto"
                    borderRadius="10px"
                    bg="#ECECEC"
                    boxShadow="default"
                    mb="20px" // Margem inferior para dispositivos móveis
                    flexDirection="row"   
                >
                    <Flex justifyContent="center" alignItems="center" maxW="15%" minW="15%" m="1%">
                        <img src={user} alt="userIcon" style={{ maxWidth: "100%" }} />
                    </Flex>

                    <Flex w="100%" justifyContent="left" alignItems="center">
                        <List fontWeight="semibold" fontSize="125%" flexDir="column">
                            {/* Tamanhos de fonte diferentes para diferentes tamanhos de tela */}
                            <ListItem color="black">
                                Biblio Bob
                            </ListItem>
                            <ListItem color="#8C8C8C">
                                bibliobob@email.com
                            </ListItem>
                        </List>
                    </Flex>

                    <Tooltip hasArrow label="Editar conta" bg="#373737" color="white">

                    <Flex justifyContent="center" alignItems="center" m="1%" width="20%">
                        <Button onClick={onToggle} bg="#ECECEC">
                            <img src={edit} alt="editIcon" style={{ maxWidth: "50%" }} />
                        </Button>
                        
                    </Flex>
                    
                    </Tooltip>

                </Flex>

                <Flex
                    w={["100%", "70%", "60%"]} // Tamanhos diferentes para diferentes tamanhos de tela
                    h="auto"
                    borderRadius="10px"
                    bg="#ECECEC"
                    boxShadow="default"
                    mb="20px" // Margem inferior para dispositivos móveis
                    flexDirection="row"
                >
                            <Collapse in={isOpen}>
                                <Flex>
                                    <EditAccount />
                                </Flex>
                            </Collapse>
                </Flex>


                <Flex w="60%" h="10%"
                    alignItems="center" justifyContent="right" flexDir="row">
                    <AlertDialogChangePassword />
                    <AlertDialogDeleteAccount />
                </Flex>

            </Flex>
        )
    }

