import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

export default function Promptbar() {
  return (
    <Flex w="100%" p={4} pt={6}>
      <Flex
        bgColor="#DDDDDD"
        h="fit-content"
        p={2}
        borderRadius="xl"
        w="100%"
        gap={2}
        transitionProperty="all"
        transitionDuration="normal"
        _hover={{
            bgColor: '#d1d1d1'
        }}
      >
        <Input
          flex={1}
          bgColor="transparent"
          border="none"
          _focusVisible={{
            border: "none",
            outline: "none",
          }}
        />
        <IconButton aria-label="Enviar" colorScheme="teal" icon={<FiSend />} />
          
        </Flex>
    </Flex>
  );
}
