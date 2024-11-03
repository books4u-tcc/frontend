import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiClient } from "../client/api";
import { userStoreActions, useUserStore } from "./userStore";

interface FormData {
  Name: string;
  Email: string;
}

export default function EditAccount() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const account = useUserStore(s => s.account)
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()

  useEffect(() => {
    if (!account) return

    setValue('Name', account.displayName)
    setValue('Email', account.email)
  }, [account])

  const onSubmit = async (data: FormData) => {
    if (isLoading) return
    
    setIsLoading(true)
    
    try {
      await apiClient.updateProfile({
        displayName: data.Name,
        email: data.Email
      })

      toast({
        title: 'Dados atualizados com sucesso!',
        status: 'success'
      })
      
      userStoreActions.updateUser({
        displayName: data.Name,
        email: data.Email
      })
    } catch (error) {
      console.error(error)
      toast({
        title: 'Ocorreu um erro ao atualizar os dados da conta!',
        status: 'error'
      })
    } finally {
      setIsLoading(false)
    }
  };


  return (
    <Flex
      direction="column"
      width="100%"
      px={3}
      gap={3}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={Boolean(errors.Name)} width="100%">
        <FormLabel>Nome</FormLabel>
        <Input
          type="text"
          width="100%"
          {...register("Name", { value: account?.displayName })}
          placeholder="Nome"
          bg="blackAlpha.100"
        />
        <FormErrorMessage>
          {errors.Name && errors.Name.message && (
            <Text>{errors.Name.message}</Text>
          )}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.Email)}>
        <FormLabel>Email</FormLabel>
        <Input
          width="100%"
          {...register("Email", { value: account?.email })}
          placeholder="Email"
          bg="blackAlpha.100"
        />
        <FormErrorMessage>
          {errors.Email && errors.Email.message && (
            <Text>{errors.Email.message}</Text>
          )}
        </FormErrorMessage>
      </FormControl>

      <Flex justifyContent="end">
      <Button isLoading={isLoading} colorScheme="teal" type="submit" ml={3} color="white" mb={3}>
        Salvar mudanças
      </Button>
      </Flex>
    </Flex>
  );
}
