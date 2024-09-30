import { Flex, Text, Button } from "@chakra-ui/react";
import { Register } from "../components/account/register";
import React, { useState } from "react";
import { Login } from "../components/account/login";
import { PageScaffold } from "./PageScaffold";
import { ContentBox } from "../components/content-box";
import { useLoginStore } from "../components/account/loginStore";

const AccountForm: React.FC = () => {
  const { view, setView } = useLoginStore()
  return (
    <PageScaffold>
      <ContentBox>
        <Flex
          w="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {view === "register" ? (
            <>
              <Register />
              <>
                <Text display="inline-block">Já possui uma conta?</Text>
                <Button
                  display="inline-block"
                  background="none"
                  border="none"
                  color="blue"
                  onClick={() => setView("login")}
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
                onClick={() => setView("register")}
              >
                Criar conta
              </Button>
            </>
          )}
        </Flex>
      </ContentBox>
    </PageScaffold>
  );
};

export default AccountForm;
