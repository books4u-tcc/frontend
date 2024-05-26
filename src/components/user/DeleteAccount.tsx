import { useDisclosure, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from "@chakra-ui/react"
import React, { useRef } from "react"

export default function DeleteAccount() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null);


    return (
        <>
        <Button bg="#D66565" color="white" onClick={onOpen}>
        Excluir conta
        </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Deseja remover sua conta?
            </AlertDialogHeader>

            <AlertDialogBody>
              Essa operação não pode ser revertida.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button bg="#D66565" color="white" onClick={onClose} ml={3}>
                Excluir conta
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
    )

}