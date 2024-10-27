import AboutInformations from "../components/about/AboutInformations";
import { PageScaffold } from "./PageScaffold";
import { ContentBox } from "../components/content-box";
import { Box } from "@chakra-ui/react";

export function About() {
  return (
    <PageScaffold>
      <ContentBox>
        <AboutInformations />
      </ContentBox>
    </PageScaffold>
  );
}
