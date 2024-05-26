import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import AboutInformations from "../components/about/AboutInformations";
import { PageScaffold } from "./PageScaffold";

export function About() {
  return (
    <PageScaffold>
      <AboutInformations />
    </PageScaffold>
  );
}
