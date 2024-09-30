import {
  Flex,
  useDisclosure,
  Text,
  Tooltip,
  Collapse,
  Icon,
  IconButton,
  useToast,
  Skeleton,
} from "@chakra-ui/react";
import AlertDialogChangePassword from "./ChangePassword";
import AlertDialogDeleteAccount from "./DeleteAccount";
import EditAccount from "./EditAccount";
import { FaEdit } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useEffect } from "react";
import { userStoreActions, useUserStore } from "./userStore";

export default function User() {
  const { isOpen, onToggle } = useDisclosure();
  const { account, isLoading } = useUserStore();
  const toast = useToast();

  useEffect(() => {
    userStoreActions.load().catch((err) =>
      toast({
        title: "Ocorreu um erro!",
        description: String(err),
        status: "error",
      })
    );
  }, []);

  return (
    <Flex
      maxW={500}
      gap={4}
      mx="auto"
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column" // Alteração para flex direção de coluna para dispositivos menores
    >
      <Flex
        w="100%"
        h="auto"
        borderRadius="10px"
        bg="#ECECEC"
        boxShadow="default"
        flexDirection="column"
        p={4}
        border="1px solid #D1D1D1"
      >
        <Flex alignItems="center" gap={3}>
          <Flex
            justifyContent="center"
            alignItems="center"
            background="blackAlpha.300"
            borderRadius="100%"
            p={5}
          >
            <Icon w={16} h={16} as={FiUser} />
          </Flex>

          <Flex
            direction="column"
            w="100%"
            justifyContent="left"
            fontSize="medium"
            gap={1}
          >
            <Skeleton isLoaded={!isLoading}>
              <Text fontWeight="bold" color="black">
                {account?.displayName ?? "loading"}
              </Text>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Text fontWeight="medium" color="#8C8C8C">
                {account?.email ?? "loading"}
              </Text>
            </Skeleton>
          </Flex>

          <Tooltip hasArrow label="Editar conta" bg="#373737" color="white">
            <IconButton
              variant="ghost"
              size="lg"
              onClick={onToggle}
              aria-label="Editar conta"
              icon={<Icon as={FaEdit} />}
              isDisabled={isLoading}
            />
          </Tooltip>
        </Flex>

        <Collapse in={isOpen}>
          <EditAccount />
        </Collapse>
      </Flex>

      <Flex w="100%" alignItems="center" justifyContent="end" gap={4}>
        <AlertDialogChangePassword />
        <AlertDialogDeleteAccount />
      </Flex>
    </Flex>
  );
}
