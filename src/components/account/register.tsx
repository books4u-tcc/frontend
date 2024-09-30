import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { authStoreActions } from "../../stores/auth";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../client/api";
import { useLoginStore } from "./loginStore";
import { AxiosError } from "axios";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const { setView } = useLoginStore();
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      await apiClient.register({
        displayName: data.name,
        email: data.email,
        password: data.password,
      });
      toast({
        status: "success",
        title: "Conta criada com sucesso!",
      });
      setView("login");
    } catch (error) {
      const msg = error instanceof AxiosError ? error.response?.data?.message : "Tente novamente mais tarde"
      toast({
        status: "error",
        title: "Ocorreu um erro!",
        description: msg,
      });
    }
  };

  return (
    <Flex flexDir="column" textAlign="center" p={4} maxW="md" mx="auto">
      <Text fontSize="2xl" mb={4}>
        Criar conta
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.name)} mb={4}>
          <Input
            variant="input"
            placeholder="Nome"
            type="text"
            {...register("name", {
              required: "Nome é obrigatório",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Nome inválido",
              },
              minLength: {
                value: 1,
                message: "Nome deve ter no mínimo um caracteres",
              },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message && (
              <Text>{errors.name.message}</Text>
            )}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.email)} mb={4}>
          <Input
            variant="input"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email inválido",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message && (
              <Text>{errors.email.message}</Text>
            )}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.password)} mb={4}>
          <Input
            variant="input"
            placeholder="Senha"
            type="password"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter no mínimo 6 caracteres",
              },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message && (
              <Text>{errors.password.message}</Text>
            )}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.confirmPassword)} mb={4}>
          <Input
            variant="input"
            placeholder="Confirmar senha"
            type="password"
            {...register("confirmPassword", {
              required: "Confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch("password") || "As senhas não coincidem",
            })}
          />
          <FormErrorMessage>
            {errors.confirmPassword && errors.confirmPassword.message && (
              <Text>{errors.confirmPassword.message}</Text>
            )}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="blue" mt={4}>
          Registrar
        </Button>
      </form>
    </Flex>
  );
}
