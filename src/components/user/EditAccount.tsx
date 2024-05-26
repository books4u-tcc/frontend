import { FormControl, FormLabel, Input, FormErrorMessage, Button, Text, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormData {
    Name: string;
    Email: string;
}

export default function EditAccount() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
    console.log(Object.values(data));
    };


    return (
        <Flex width={1000}>
        <form onSubmit={handleSubmit(onSubmit)} >


                                <FormControl isInvalid={Boolean(errors.Name)} mb={4}>
                                    <FormLabel ml={2}>Nome</FormLabel>
                                    <Input
                                        type="text"
                                        {...register("Name", {
                                        })}
                                        width={630}
                                        placeholder="Biblio Bob"
                                        ml={2}
                                    />
                                    <FormErrorMessage>
                                        {errors.Name && errors.Name.message && <Text>{errors.Name.message}</Text>}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={Boolean(errors.Email)} mb={4}>
                                    <FormLabel ml={2}>Email</FormLabel>
                                    <Input
                                        type="password"
                                        {...register("Email", {
                                        })}
                                        width={630}
                                        placeholder="bibliobob@email.com"
                                        ml={2}
                                    />
                                    <FormErrorMessage>
                                        {errors.Email && errors.Email.message && <Text>{errors.Email.message}</Text>}
                                    </FormErrorMessage>
                                </FormControl>

                                <Button bg='#3F8EA8' type="submit" ml={3} color="white" mb={3}>
                                    Salvar mudanças
                                </Button>

                            </form>
        </Flex>
    )
}