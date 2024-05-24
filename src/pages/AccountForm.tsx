import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/sidebar/Sidebar";
import { Register } from "../components/account/register";

export default function AccountForm() {
  return (
    <Grid h="100dvh" templateColumns={["200px 3fr", "200px 3fr", "340px 3fr"]}>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem>
        <Flex w="100%" h="100%" direction="column">
          <Register />
        </Flex>
      </GridItem>
    </Grid>
  );
}
