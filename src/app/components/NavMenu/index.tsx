import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useDisclosure,
  Link as ChakraLink,
  VStack,
  Button,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import DarkLogo from "@/app/assets/logo/portfolio_logo_dark.svg";
import LightLogo from "@/app/assets/logo/portfolio_logo_light.svg";
import { NavLink, linksArray } from "./NavMenuUtils";

const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      w="full"
      bg="white"
      opacity="50"
      color="gray.900"
      zIndex="50"
      backdropFilter="blur-lg"
      _dark={{ bg: "dark", color: "gray.100", bgOpacity: "50" }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="6xl"
        px={4}
        py={3}
        mx="auto"
        wrap="wrap"
      >
        <Flex justify="start" flex="1">
          <Link href="/" passHref>
            <Box display={{ base: "block", dark: "none" }}>
              <Image
                alt="Chris Leggatt"
                height={38}
                width={38}
                src={DarkLogo}
                blurDataURL={DarkLogo}
              />
            </Box>
          </Link>
          <Link href="/" passHref>
            <Box display={{ base: "none", dark: "block" }}>
              <Image
                alt="Chris Leggatt"
                height={38}
                width={38}
                src={LightLogo}
                blurDataURL={LightLogo}
              />
            </Box>
          </Link>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          variant="ghost"
        />

        <Flex
          display={{ base: "none", md: "flex" }}
          ml={10}
          alignItems="center"
          flexGrow={1}
        >
          {linksArray.map((link) => (
            <NavLink key={link.text} href={link.href} text={link.text} />
          ))}
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="end"
          flex="1"
          display={{ base: "none", md: "flex" }}
        >
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Flex>

      {isOpen && (
        <Box
          position="fixed"
          top="0"
          right="0"
          w="full"
          maxW="xs"
          p={6}
          bg="white"
          shadow="lg"
          rounded="3xl"
          zIndex="50"
          _dark={{ bg: "gray.800" }}
        >
          <IconButton
            position="absolute"
            top={5}
            right={5}
            icon={<CloseIcon />}
            aria-label="Close navigation"
            onClick={onClose}
            variant="ghost"
          />
          <VStack spacing={6} mt={6}>
            {linksArray.map((link, index) => (
              <Link key={`${link.text}-${index}`} href={link.href} passHref>
                <ChakraLink
                  _hover={{ color: "teal.400", textDecoration: "none" }}
                  _dark={{ _hover: { color: "teal.500" } }}
                >
                  {link.text}
                </ChakraLink>
              </Link>
            ))}
          </VStack>
          <Box
            pt={6}
            mt={6}
            borderTop="1px"
            borderColor="gray.200"
            _dark={{ borderColor: "gray.700" }}
          >
            <Button onClick={toggleColorMode} w="full" variant="ghost">
              {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              <Box as="span" ml={3}>
                {colorMode === "dark"
                  ? "Change to light theme"
                  : "Change to dark theme"}
              </Box>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NavMenu;
