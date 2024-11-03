import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useUserStore } from "./userStore";
import { apiClient } from "../client/api";
import { authStoreActions } from "../../stores/auth";
import { chatStoreActions } from "../chat/chat-store";
import { useNavigate } from "react-router-dom";

export default function DeleteAccount() {
  const isLoading = useUserStore((s) => s.isLoading);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const toast = useToast()
  const navigate = useNavigate()
  const [isDeleteLoading, setIsDeleteLoading] = useState(false)

  async function deleteAccount() {
    setIsDeleteLoading(true)
    try {
      await apiClient.deleteAccount()
      toast({
        title: 'Conta removida com sucesso!',
        status: 'success'
      })
      authStoreActions.logout()
      chatStoreActions.clear()
      navigate('/auth/login')
    } catch(error) {
      console.error(error)
      toast({
        title: 'Ocorreu um erro ao remover sua conta!',
        status: 'error'
      })
    } finally {
      setIsDeleteLoading(false)
    }
  }

  return (
    <>
      <Button colorScheme="red" onClick={onOpen} isDisabled={isLoading}>
        Excluir conta
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deseja remover sua conta?
            </AlertDialogHeader>

            <AlertDialogBody>
              Essa operação não pode ser revertida.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button bg="#D66565" color="white" onClick={deleteAccount} ml={3} isLoading={isDeleteLoading}>
                Excluir conta
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
