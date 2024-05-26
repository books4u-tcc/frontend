import { Flex, Grid, GridItem, Text, Button } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import { Register } from "../components/account/register";
import React, { useState } from "react";
import { Login } from "../components/account/login";
import { PageScaffold } from "./PageScaffold";

interface Props {
  type: "register" | "login";
}

const AccountForm: React.FC<Props> = ({ type = "login" }) => {
  const [pageType, setPageType] = useState(type);
  return (
    <PageScaffold>
      <Flex
        w="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {pageType === "register" ? (
          <>
            <Register />
            <>
              <Text display="inline-block">Já possui uma conta?</Text>
              <Button
                display="inline-block"
                background="none"
                border="none"
                color="blue"
                onClick={() => setPageType("login")}
              >
                Entrar
              </Button>
            </>
          </>
        ) : (
          <>
            <Login />
            <Text>Ainda não possui uma conta?</Text>
            <Button
              background="none"
              border="none"
              color="blue"
              onClick={() => setPageType("register")}
            >
              Criar conta
            </Button>
          </>
        )}
      </Flex>
    </PageScaffold>
  );
};

export default AccountForm;
