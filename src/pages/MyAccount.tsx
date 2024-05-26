import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import User from "../components/user/User";

export function MyAccount() {
  return <div>
    <Flex h="100vh" p="1rem">
      <Sidebar/>
      <Flex w="100%" direction="column">
        <User />
      </Flex>
    </Flex>
  </div>
}