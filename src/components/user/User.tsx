import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  List,
  ListItem,
  useDisclosure,
  Text,
  Tooltip,
  Collapse,
  Box,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import user from "../../assets/user.png";
import edit from "../../assets/editIcon.png";
import AlertDialogChangePassword from "./ChangePassword";
import AlertDialogDeleteAccount from "./DeleteAccount";
import EditAccount from "./EditAccount";
import { FaEdit, FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export default function User() {
  const { isOpen, onToggle } = useDisclosure();

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

          <Flex direction="column" w="100%" justifyContent="left" fontSize="medium">
              <Text fontWeight="bold" color="black">Biblio Bob</Text>
              <Text fontWeight="medium" color="#8C8C8C">bibliobob@email.com</Text>
          </Flex>

          <Tooltip hasArrow label="Editar conta" bg="#373737" color="white">
            <IconButton
              variant="ghost"
              size="lg"
              onClick={onToggle}
              aria-label="Editar conta"
              icon={<Icon as={FaEdit} />}
            />
          </Tooltip>
        </Flex>

          <Collapse in={isOpen}>
            <EditAccount />
          </Collapse>
      </Flex>

      <Flex
      w="100%"
        alignItems="center"
        justifyContent="end"
        gap={4}
      >
        <AlertDialogChangePassword />
        <AlertDialogDeleteAccount />
      </Flex>
    </Flex>
  );
}
