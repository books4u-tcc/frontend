import { Flex, FormControl, FormLabel, Input, Text, Button, FormErrorMessage } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormData{
    name: string,
    password: string
}

export function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(Object.values(data));
    };


    return(
        <Flex flexDir="column" textAlign="center" p={4} maxW="md" mx="auto">
            <Text fontSize="2xl" mb={4}>Criar conta</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mb={4}>
                    <Input
                        variant="input"
                        placeholder="Nome"
                        type="text" 
                        {...register("name", { 
                            required: "Nome é obrigatório",
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message && <Text>{errors.name.message}</Text>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={Boolean(errors.password)} mb={4}>
                    <Input 
                        variant="input"
                        placeholder="Senha"
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

                <Button type="submit" colorScheme="blue" mt={4}>Entrar</Button>
            </form>
        </Flex>
    );
}