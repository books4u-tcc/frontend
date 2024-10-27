import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  Grid,
  Icon,
  IconButton,
  Show,
  useOutsideClick,
} from "@chakra-ui/react";
import menuIcon from "../../assets/icons/menu.svg";
import logoBig from "../../assets/logo-big.svg";
import { SidebarSignedIn } from "./sidebar-signedin";
import { SidebarSignedOut } from "./sidebar-signedout";
import { useAuthStore } from "../../stores/auth";
import { Link as RouterLink } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Sidebar() {
  const authenticated = useAuthStore((s) => s.authenticated);

  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  });

  return (
    <Fragment>
      <Show above="md">
        <Flex
          w="100%"
          h="100vh"
          flexDir="column"
          justifySelf="start"
          px={3}
          py={5}
        >
          <Flex flexDir="column" h="100%" w="100%" alignItems="center" gap={4}>
            <RouterLink to="/">
              <img src={logoBig}></img>
            </RouterLink>

            {authenticated ? <SidebarSignedIn /> : <SidebarSignedOut />}
          </Flex>
        </Flex>
      </Show>
      <Show below="md">
        <Flex
          w="100%"
          h="fit-content"
          minH="var(--mobile-navbar-height)"
          alignItems="center"
          justify="space-between"
          position="absolute"
          px={4}
          ref={ref}
          zIndex={200}
          background="white"
        >
          <Center
            position="absolute"
            left={0}
            top={0}
            width="100%"
            height="100%"
          >
            <RouterLink to="/">
              <img width="120px" src={logoBig}></img>
            </RouterLink>
          </Center>

          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            bg="transparent"
            aria-label="Abrir menu"
            icon={<Icon as={FiMenu} width={8} height={8} color="teal" />}
          />

          <Box
            position="absolute"
            background="white"
            borderRadius="0 0 12px 12px"
            left={0}
            top="var(--mobile-navbar-height)"
            width="100%"
            zIndex={200}
            height="fit-content"
          >
            <Collapse in={isOpen} animateOpacity>
              <Flex
                flexDir="column"
                h="100%"
                w="100%"
                mt="25px"
                alignItems="center"
                gap={4}
                px={2}
                pb={4}
              >
                {authenticated ? <SidebarSignedIn /> : <SidebarSignedOut />}
              </Flex>
            </Collapse>
          </Box>
        </Flex>

        <Box
          background={isOpen ? "rgba(0, 0, 0, 0.4)" : "transparent"}
          pointerEvents={isOpen ? "inherit" : "none"}
          transitionProperty="background"
          transitionDuration="normal"
          position="absolute"
          top={0}
          left={0}
          height="100%"
          width="100%"
          zIndex={100}
        />
      </Show>
    </Fragment>
  );
}
