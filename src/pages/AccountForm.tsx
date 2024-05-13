import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import { Register } from "../components/account/register";

export default function AccountForm(){
    return(
    <Flex h="100vh" p="1rem">
      <Sidebar/>
      <Flex w="100%" direction="column">
        <Register/>
      </Flex>
    </Flex>
    )
}