import {
  Flex,
  FormControl,
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
import { AxiosError } from "axios";

interface FormData {
  email: string;
  password: string;
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();
  const toast = useToast()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await apiClient.login({
        email: data.email,
        password: data.password,
      });
      authStoreActions.login(response.data.accessToken);
      navigate("/");
    } catch (error) {
      const msg =
        error instanceof AxiosError
          ? error.response?.data?.message
          : "Tente novamente mais tarde";
      toast({
        status: "error",
        title: "Ocorreu um erro ao logar!",
        description: msg,
      });
    }
    console.log(Object.values(data));
  };

  return (
    <Flex flexDir="column" textAlign="center" p={4} maxW="md" mx="auto">
      <Text fontSize="2xl" mb={4}>
        Entrar
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4}>
          <Input
            variant="input"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "Email é obrigatório",
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

        <Button type="submit" colorScheme="blue" mt={4}>
          Entrar
        </Button>
      </form>
    </Flex>
  );
}
