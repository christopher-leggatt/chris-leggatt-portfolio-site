import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavLinkProps } from "@/app/lib/interfaces";
import { useRouter } from "next/router";

export const linksArray = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/resume", text: "Resume" },
  { href: "/stats", text: "Stats" },
  { href: "/toolbox", text: "Toolbox" },
];

export const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <ChakraLink
        fontWeight={isActive ? "bold" : "normal"}
        color={isActive ? "teal.500" : "gray.500"}
        _hover={{
          color: "gray.900",
          textDecoration: "none",
        }}
        _dark={{
          color: isActive ? "teal.400" : "gray.400",
          _hover: {
            color: "gray.200",
          },
        }}
        display={{ base: "none", md: "inline-block" }}
        borderRadius="full"
      >
        {text}
      </ChakraLink>
    </NextLink>
  );
};
