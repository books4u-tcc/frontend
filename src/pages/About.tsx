import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import AboutInformations from "../components/about/AboutInformations";

export function About() {
    return <div>
        <Flex h="100vh" p="1rem">
      <Sidebar/>
      <Flex w="100%" direction="column">
        <AboutInformations />
      </Flex>
    </Flex>
    </div>
}