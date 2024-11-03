import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";

interface PageScaffoldProps {
  children?: ReactNode;
}

export function PageScaffold({ children }: PageScaffoldProps) {
  return (
    <Grid
      h="100%"
      minW="200px"
      templateColumns={["1fr", "1fr", "1fr 3fr", "1fr 3fr", "340px 3fr"]}
      templateRows={["var(--mobile-navbar-height)", "var(--mobile-navbar-height)", "auto"]}
    >
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem overflow="hidden" h={["calc(100dvh - var(--mobile-navbar-height))", "calc(100dvh - var(--mobile-navbar-height))", "auto"]}>
        <Flex w="100%" h="100%" direction="column">
          {children}
        </Flex>
      </GridItem>
    </Grid>
  );
}
