import { Button, Flex, Text } from "@chakra-ui/react";
import { ContentBox } from "../components/content-box";
import { PageScaffold } from "./PageScaffold";
import { Register } from "../components/account/register";
import { Link } from "react-router-dom";

export function RegisterPage() {
  return (
    <PageScaffold>
      <ContentBox>
        <Flex
          w="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Register />

          <Text display="inline-block">Já possui uma conta?</Text>
          <Button
            display="inline-block"
            background="none"
            border="none"
            color="blue"
            as={Link}
            to="/auth/login"
          >
            Entrar
          </Button>
        </Flex>
      </ContentBox>
    </PageScaffold>
  );
}
