import { Button, Collapse, Flex, Grid } from "@chakra-ui/react";
import menuIcon from "../../assets/icons/menu.svg";
import logoBig from "../../assets/logo-big.svg";
import { SidebarSignedIn } from "./sidebar-signedin";
import { SidebarSignedOut } from "./sidebar-signedout";
import { useAuthStore } from "../../stores/auth";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const authenticated = useAuthStore((s) => s.authenticated);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log(authenticated);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth > 767 ? (
    <Flex w="100%" h="100vh" flexDir="column" justifySelf="start" px={3} py={5}>
      <Flex flexDir="column" h="100%" w="100%" alignItems="center" gap={4}>
        <RouterLink to="/">
          <img src={logoBig}></img>
        </RouterLink>

        {authenticated ? <SidebarSignedIn /> : <SidebarSignedOut />}
      </Flex>
    </Flex>
  ) : (
    <Flex
      w="100%"
      flexDir="column"
      justifySelf="start"
      position="relative"
      px={3}
      py={5}
    >
      <Grid
        w="100%"
        templateColumns="1fr 3fr"
        alignItems="center"
        justifyContent="center"
      >
        <Flex justifyContent="center">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            bg="transparent"
            p="0"
            maxW="80px"
          >
            <img src={menuIcon} width="50%" />
          </Button>
        </Flex>
        <Flex ml="20%">
          <RouterLink to="/">
            <img width="50%" src={logoBig}></img>
          </RouterLink>
        </Flex>
      </Grid>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          flexDir="column"
          h="100%"
          w="100%"
          mt="25px"
          alignItems="center"
          gap={4}
        >
          {authenticated ? <SidebarSignedIn /> : <SidebarSignedOut />}
        </Flex>
      </Collapse>
    </Flex>
  );
}
