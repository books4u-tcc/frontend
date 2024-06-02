import { useDisclosure, Text, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, FormControl, FormLabel, Input, FormErrorMessage, AlertDialogFooter } from "@chakra-ui/react"
import React, { useRef } from "react"
import { useForm } from "react-hook-form";

interface FormData {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export default function changePassword() {

    const cancelRef = useRef<HTMLButtonElement>(null);
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onSubmit = (data: FormData) => {
    console.log(Object.values(data));
    };


    return (
        <>
            <Button bg="#ECECEC" onClick={onOpen} color="black">
                Mudar senha
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Mudar senha
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <form onSubmit={handleSubmit(onSubmit)}>


                                <FormControl isInvalid={Boolean(errors.currentPassword)} mb={4}>
                                    <FormLabel>Senha atual</FormLabel>
                                    <Input
                                        type="password"
                                        {...register("currentPassword", {
                                            required: "Senha atual é obrigatória",
                                            minLength: { value: 6, message: "Senha deve ter no mínimo 6 caracteres" }
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors.currentPassword && errors.currentPassword.message && <Text>{errors.currentPassword.message}</Text>}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={Boolean(errors.newPassword)} mb={4}>
                                    <FormLabel>Nova senha</FormLabel>
                                    <Input
                                        type="password"
                                        {...register("newPassword", {
                                            required: "Nova senha é obrigatória",
                                            minLength: { value: 6, message: "Senha deve ter no mínimo 6 caracteres" }
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors.newPassword && errors.newPassword.message && <Text>{errors.newPassword.message}</Text>}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={Boolean(errors.confirmNewPassword)} mb={4}>
                                    <FormLabel>Confirmar nova senha</FormLabel>
                                    <Input
                                        type="password"
                                        {...register("confirmNewPassword", {
                                            required: "Confirmação da nova senha é obrigatória",
                                            validate: value => value === watch("newPassword") || "As senhas não coincidem"
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors.confirmNewPassword && errors.confirmNewPassword.message && <Text>{errors.confirmNewPassword.message}</Text>}
                                    </FormErrorMessage>
                                </FormControl>


                                <Button onClick={onClose} ref={cancelRef}>
                                    Cancelar
                                </Button>

                                <Button bg='#3F8EA8' type="submit" ml={3} color="white">
                                    Mudar senha
                                </Button>

                            </form>
                        </AlertDialogBody>

                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}