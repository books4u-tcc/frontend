import { Flex } from "@chakra-ui/react";


export default function AboutInformations() {
    return (
        <Flex w="90%" h="100%" bg="#F4F4F4" paddingTop="5rem" marginLeft="4rem" my="2rem" boxShadow="default" borderRadius="5px">
            <Flex w="50%" h="50%" marginLeft="18rem" flexDir="column">
                <Flex fontSize="250%">
                <h1>Sobre o BiblioBot</h1>
                </Flex>
                <Flex fontSize="100%" paddingTop="1rem">
                <h1>Esse site é um projeto de TCC que utiliza Inteligência Artifical para recomendar livros, de acordo com uma conversa de sugestões (escrever mais coisas aqui)</h1>
                </Flex>
                <Flex fontSize="250%">
                <h1>Projeto Github</h1>
                </Flex>
                <Flex fontSize="100%" paddingTop="1rem">
                <h1>github.com/books4u-tcc/</h1>
                </Flex>
            </Flex>
        </Flex>
    )
}