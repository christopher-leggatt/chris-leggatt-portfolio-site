import { customMetadata } from "@/app/data/metadata";
import { FiGithub as Github, FiCodepen as Codepen } from "react-icons/fi";
import { AiOutlineLinkedin as Linkedin } from "react-icons/ai";
import { VStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { FooterNavigation } from "@/app/interfaces";
import { LinkGroupProps } from "@/app/types";

export const footerNavigation: FooterNavigation = {
  general: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ],
  specifics: [
    { name: "Stats", href: "/stats" },
    { name: "Toolbox", href: "/toolbox" },
  ],
  extra: [
    { name: "Changelog", href: "/changelog" },
    { name: "Meet up", href: "/meetup" },
    { name: "Resume", href: "/resume" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: customMetadata.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Github",
      href: customMetadata.github,
      icon: <Github />,
    },
    {
      name: "Codepen",
      href: customMetadata.codepen,
      icon: <Codepen />,
    },
  ],
};

export const LinkGroup = ({ title, array }: LinkGroupProps) => {
  const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  return (
    <VStack align="start" spacing={4}>
      <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
      {capitalizeFirstLetter(title)}
      </Text>
      {array.map((item) => (
        <NextLink key={item.name} href={item.href} passHref>
          <ChakraLink fontSize="base" _hover={{ textDecoration: "underline" }}>
            {item.name}
          </ChakraLink>
        </NextLink>
      ))}
      {/* {title === "extra" && (
        <ChakraLink
          href={customMetadata.resume}
          isExternal
          fontSize="base"
          _hover={{ textDecoration: "underline" }}
        >
          Resume
        </ChakraLink>
      )} */}
    </VStack>
  );
};
