import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";

interface PageScaffoldProps {
  children?: ReactNode;
}

export function PageScaffold({ children }: PageScaffoldProps) {
  return (
    <Grid h="100dvh" minW="200px" templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 2fr", "340px 3fr"]}>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem>
        <Flex w="100%" h="100%" direction="column">
          {children}
        </Flex>
      </GridItem>
    </Grid>
  );
}
