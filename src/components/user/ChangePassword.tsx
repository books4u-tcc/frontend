import {
  useDisclosure,
  Text,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useUserStore } from "./userStore";
import { apiClient } from "../client/api";

interface FormData {
  newPassword: string;
  confirmNewPassword: string;
}

export default function ChangePassword() {
  const isLoading = useUserStore((s) => s.isLoading);

  const cancelRef = useRef<HTMLButtonElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isChangeLoading, setIsChangeLoading] = useState(false)

  const toast = useToast()


  const onSubmit = async (data: FormData) => {
    if (isChangeLoading) return
    
    setIsChangeLoading(true)
    
    try {
      await apiClient.updateProfile({
        password: data.newPassword
      })

      toast({
        title: 'Senha atualizada com sucesso!',
        status: 'success'
      })
      onClose()
    } catch (error) {
      console.error(error)
      toast({
        title: 'Ocorreu um erro ao atualizar a senha!',
        status: 'error'
      })
    } finally {
      setIsChangeLoading(false)
    }
  };

  return (
    <>
      <Button variant='ghost' colorScheme="blackAlpha" onClick={onOpen} isDisabled={isLoading}>
        Mudar senha
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Mudar senha
            </AlertDialogHeader>

            <AlertDialogBody>
              <form onSubmit={handleSubmit(onSubmit)}>

                <FormControl isInvalid={Boolean(errors.newPassword)} mb={4}>
                  <FormLabel>Nova senha</FormLabel>
                  <Input
                    type="password"
                    {...register("newPassword", {
                      required: "Nova senha é obrigatória",
                      minLength: {
                        value: 6,
                        message: "Senha deve ter no mínimo 6 caracteres",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.newPassword && errors.newPassword.message && (
                      <Text>{errors.newPassword.message}</Text>
                    )}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={Boolean(errors.confirmNewPassword)}
                  mb={4}
                >
                  <FormLabel>Confirmar nova senha</FormLabel>
                  <Input
                    type="password"
                    {...register("confirmNewPassword", {
                      required: "Confirmação da nova senha é obrigatória",
                      validate: (value) =>
                        value === watch("newPassword") ||
                        "As senhas não coincidem",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.confirmNewPassword &&
                      errors.confirmNewPassword.message && (
                        <Text>{errors.confirmNewPassword.message}</Text>
                      )}
                  </FormErrorMessage>
                </FormControl>

                <Button onClick={onClose} ref={cancelRef}>
                  Cancelar
                </Button>

                <Button bg="#3F8EA8" type="submit" ml={3} color="white" isLoading={isChangeLoading}>
                  Mudar senha
                </Button>
              </form>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
