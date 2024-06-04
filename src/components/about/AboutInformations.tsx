import { Flex, Link } from "@chakra-ui/react";

export default function AboutInformations() {
  return (
    <Flex w="100%" h="100%" marginLeft="18rem" flexDir="column">
      <Flex fontSize="250%">
        <h1>Sobre o Books4U</h1>
      </Flex>
      <Flex fontSize="100%" paddingTop="1rem">
        <h1>
          Esse site é um projeto de TCC que utiliza Inteligência Artifical para
          recomendar livros, de acordo com uma conversa de sugestões (escrever
          mais coisas aqui)
        </h1>
      </Flex>
      <Flex fontSize="250%">
        <h1>Projeto Github</h1>
      </Flex>
      <Flex fontSize="100%" paddingTop="1rem">
        <Link href="https://github.com/books4u-tcc/" target="_blank">
          <h1>github.com/books4u-tcc/</h1>
        </Link>
      </Flex>
    </Flex>
  );
}
