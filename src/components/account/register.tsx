import { Flex, FormControl, FormLabel, Input, Text, Button, FormErrorMessage } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { authStoreActions } from "../../stores/auth";
import { useNavigate } from "react-router-dom";

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();

    const navigate = useNavigate()

    const onSubmit = async (data: FormData) => {
        console.log(Object.values(data));

        authStoreActions.login()
        navigate('/')
    };

    return (
        <Flex flexDir="column" p={4} maxW="md" mx="auto">
            <Text fontSize="2xl" mb={4}>Criar conta</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={Boolean(errors.name)} mb={4}>
                    <FormLabel>Nome</FormLabel>
                    <Input 
                        type="text" 
                        {...register("name", { 
                            required: "Nome é obrigatório",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "Nome inválido"
                            },
                            minLength: { value: 1, message: "Nome deve ter no mínimo um caracteres" } 
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message && <Text>{errors.name.message}</Text>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={Boolean(errors.email)} mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        type="email" 
                        {...register("email", { 
                            required: "Email é obrigatório", 
                            pattern: { 
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                                message: "Email inválido" 
                            } 
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message && <Text>{errors.email.message}</Text>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={Boolean(errors.password)} mb={4}>
                    <FormLabel>Senha</FormLabel>
                    <Input 
                        type="password" 
                        {...register("password", { 
                            required: "Senha é obrigatória", 
                            minLength: { value: 6, message: "Senha deve ter no mínimo 6 caracteres" } 
                        })}
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message && <Text>{errors.password.message}</Text>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={Boolean(errors.confirmPassword)} mb={4}>
                    <FormLabel>Confirmar Senha</FormLabel>
                    <Input 
                        type="password" 
                        {...register("confirmPassword", { 
                            required: "Confirmação de senha é obrigatória", 
                            validate: value => value === watch("password") || "As senhas não coincidem"
                        })}
                    />
                    <FormErrorMessage>
                        {errors.confirmPassword && errors.confirmPassword.message && <Text>{errors.confirmPassword.message}</Text>}
                    </FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="blue" mt={4}>Registrar</Button>
            </form>
        </Flex>
    );
}
