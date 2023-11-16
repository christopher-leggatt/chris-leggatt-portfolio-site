import {
  Box,
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { customMetadata } from "@/app/data/metadata";
import { navigation } from "./FooterUtils";

const Footer = () => {
  return (
    <Box as="footer" py={8}>
      <Box maxW="6xl" mx="auto" px={4}>
        <VStack spacing={8} align="stretch">
          <HStack spacing={8} wrap="wrap" justify="space-between">
            {/* General Links */}
            <VStack align="start" spacing={4}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
              >
                General
              </Text>
              {navigation.general.map((item) => (
                <NextLink key={item.name} href={item.href} passHref>
                  <ChakraLink
                    fontSize="base"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item.name}
                  </ChakraLink>
                </NextLink>
              ))}
            </VStack>

            {/* Specifics Links */}
            <VStack align="start" spacing={4}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
              >
                Specifics
              </Text>
              {navigation.specifics.map((item) => (
                <NextLink key={item.name} href={item.href} passHref>
                  <ChakraLink
                    fontSize="base"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item.name}
                  </ChakraLink>
                </NextLink>
              ))}
            </VStack>

            {/* Extra Links */}
            <VStack align="start" spacing={4}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
              >
                Extra
              </Text>
              {navigation.extra.map((item) => (
                <NextLink key={item.name} href={item.href} passHref>
                  <ChakraLink
                    fontSize="base"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item.name}
                  </ChakraLink>
                </NextLink>
              ))}
              <ChakraLink
                href={customMetadata.resume}
                isExternal
                fontSize="base"
                _hover={{ textDecoration: "underline" }}
              >
                Resume
              </ChakraLink>
            </VStack>
          </HStack>

          {/* Social Icons */}
          <HStack spacing={6} justify="space-between">
            <HStack spacing={6}>
              {navigation.social.map((item) => (
                <ChakraLink key={item.name} href={item.href} isExternal>
                  <IconButton
                    colorScheme="teal"
                    aria-label={`Link to ${item.name}`}
                    icon={item.icon}
                    variant="ghost"
                    w={7}
                    h={7}
                    transform={{
                      _hover: "rotate-[-4deg]",
                    }}
                    transition="all"
                  />
                </ChakraLink>
              ))}
            </HStack>
            <Text fontSize="base">
              &copy; {new Date().getFullYear()} {customMetadata.author}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Footer;
