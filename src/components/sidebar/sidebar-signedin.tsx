import { Fragment, useEffect } from "react";
import { SidebarButton } from "./sidebar-button";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { authStoreActions } from "../../stores/auth";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { apiClient } from "../client/api";
import { sidebarStoreActions, useSidebarStore } from "./sidebar-store";

export function SidebarSignedIn() {
  const [conversations] = useSidebarStore((s) => [s.conversations]);
  const navigate = useNavigate();
  const { conversationId } = useParams();

  function logout() {
    navigate("/auth/login");
    authStoreActions.logout();
  }

  // TODO: isso ta fazendo um req quando mudar a pag, podemos melhorar isso
  useEffect(() => {
    apiClient.getConversations().then((res) => {
      sidebarStoreActions.setConversations(res.data);
    });
  }, []);

  return (
    <Fragment>
      <Flex flex={1} flexDir="column" w="100%" gap={2} maxH={["300px", "300px", "calc(100dvh - 120px)"]} overflow="auto">
        <RouterLink to="/">
          <SidebarButton highlighted icon={<Icon w={6} h={6} as={FiPlus} />}>
            Nova conversa
          </SidebarButton>
        </RouterLink>
        {conversations.map((conversation) => (
          <RouterLink to={`/conversations/${conversation.id}`}>
            <SidebarButton
              key={conversation.id}
              active={!!conversationId && conversationId == conversation.id}
            >
              {conversation.title}
            </SidebarButton>
          </RouterLink>
        ))}
      </Flex>

      <Flex
        flexDir="column"
        w="100%"
        alignItems={["center", "center", "start"]}
        color="#616161"
      >
        <Link
          as={RouterLink}
          to="/about"
          w="100%"
          textAlign={["center", "center", "start"]}
        >
          Sobre
        </Link>
        <Link
          as={RouterLink}
          to="/account"
          w="100%"
          textAlign={["center", "center", "start"]}
        >
          Minha conta
        </Link>
        <Link
          onClick={logout}
          w="100%"
          textAlign={["center", "center", "start"]}
        >
          Log Out
        </Link>
      </Flex>
    </Fragment>
  );
}
