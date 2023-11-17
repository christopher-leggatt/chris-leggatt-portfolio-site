import {
  Box,
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  IconButton,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { customMetadata } from "@/app/data/metadata";
import { footerNavigation, LinkGroup } from "./FooterUtils";

const Footer = () => {
  return (
    <Box as="footer" py={8}>
      <HStack
        maxW="6xl"
        mx="auto"
        px={4}
        justify="space-between"
        align="center"
      >
        <VStack spacing={4} align="start">
          {/* General Links */}
          <LinkGroup title="general" array={footerNavigation.general} />
          {/* <VStack align="start" spacing={4}>
            <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
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
          </VStack> */}

          {/* Specifics Links */}
          <LinkGroup title="specifics" array={footerNavigation.specifics} />

          {/* <VStack align="start" spacing={4}>
            <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
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
          </VStack> */}

          {/* Extra Links */}
          <LinkGroup title="extra" array={footerNavigation.extra} />

          {/* <VStack align="start" spacing={4}>
            <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
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
          </VStack> */}
          {/* Video Thumbnail */}
          <VStack>
            <NextLink
              href="https://www.loom.com/share/dc938f87732e4b298519ac3fc9e1b653"
              passHref
            >
              <ChakraLink isExternal>
                <Text mb={2}>Capstone Demo by Chris Leggatt - Watch Video</Text>
                <Image
                  src="https://cdn.loom.com/sessions/thumbnails/dc938f87732e4b298519ac3fc9e1b653-1696271012768-with-play.gif"
                  alt="Capstone Demo Thumbnail"
                  maxW="300px"
                />
              </ChakraLink>
            </NextLink>
          </VStack>
        </VStack>
      </HStack>

      {/* Author and Social Icons */}
      <HStack spacing={6} justify="space-between">
        <HStack spacing={6}>
          {footerNavigation.social.map((item) => (
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
    </Box>
  );
};

export default Footer;
