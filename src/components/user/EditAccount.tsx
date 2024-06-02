import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormData {
  Name: string;
  Email: string;
}

export default function EditAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(Object.values(data));
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
          {...register("Name", { value: "Biblio Bob"})}
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
          {...register("Email", { value: "bibliobob@email.com"})}
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
      <Button colorScheme="teal" type="submit" ml={3} color="white" mb={3}>
        Salvar mudanças
      </Button>
      </Flex>
    </Flex>
  );
}
