import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import { useChatContext } from "./chat-context";
import { FormEvent } from "react";
import { chatStoreActions } from "./chat-store";
import { useChatHook } from "./chat-hook";

export default function Promptbar() {
  const { promptRef } = useChatContext();
  const { sendMessage } = useChatHook()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = event.currentTarget["message-input"].value as string;

    if (!message?.trim()) return

    sendMessage(message);
    if (promptRef?.current) {
      promptRef.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex w="100%" p={4} pt={6}>
        <Flex
          display="flex"
          bgColor="#DDDDDD"
          h="fit-content"
          p={2}
          borderRadius="xl"
          w="100%"
          gap={2}
          transitionProperty="bgColor"
          transitionDuration="normal"
          _hover={{
            bgColor: "#d1d1d1",
          }}
          __css={{
            "&:has(input:focus)": {
              bgColor: "#d1d1d1",
              outlineWidth: "2px",
              outlineStyle: "solid",
              outlineColor: "brand",
            },
          }}
        >
          <Input
            flex={1}
            ref={promptRef}
            bgColor="transparent"
            border="none"
            placeholder="Digite uma mensagem"
            _focusVisible={{
              border: "none",
              outline: "none",
            }}
            name="message-input"
          />
          <IconButton
            type="submit"
            aria-label="Enviar"
            colorScheme="teal"
            icon={<FiSend />}
          />
        </Flex>
      </Flex>
    </form>
  );
}
