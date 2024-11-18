import { Button, Flex, Text } from "@chakra-ui/react";
import { ContentBox } from "../components/content-box";
import { PageScaffold } from "./PageScaffold";
import { Login } from "../components/account/login";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <PageScaffold>
      <ContentBox>
        <Flex
          w="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Login />
          <Text>Ainda não possui uma conta?</Text>
          <Button
            background="none"
            border="none"
            color="blue"
            as={Link}
            to="/auth/register"
          >
            Criar conta
          </Button>
        </Flex>
      </ContentBox>
    </PageScaffold>
  );
}
