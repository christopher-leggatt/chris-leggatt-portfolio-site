import React, { useCallback, useState, useEffect } from "react";
import { Link as ChakraLink, Box, Image, useBoolean } from "@chakra-ui/react";
import NextLink from "next/link";

interface PopoverLinkProps {
  children: React.ReactNode;
  href: string;
}

const PopoverLink: React.FC<PopoverLinkProps> = ({ children, href }) => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isHovering, setIsHovering] = useBoolean(false);

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  const handleFetchImage = useCallback(
    async (url: string) => {
      const res = await fetch(`${origin}/api/link-preview?url=${url}`);
      const data = await res.json();
      setImagePreview(data.image);
    },
    [origin]
  );

  useEffect(() => {
    handleFetchImage(href);
    return () => setImagePreview("");
  }, [href, handleFetchImage]);

  return (
    <Box>
      <Box
        display={{ base: "none", md: "inline-block" }}
        position="relative"
        zIndex="10"
      >
        <NextLink href={href} passHref>
          <ChakraLink
            onMouseEnter={() => setIsHovering.on()}
            onMouseLeave={() => setIsHovering.off()}
            onFocus={() => setIsHovering.on()}
            onBlur={() => setIsHovering.off()}
            textDecoration={isHovering ? "underline" : "none"}
          >
            {children}
          </ChakraLink>
        </NextLink>
        {isHovering && (
          <NextLink href={href} passHref>
            <Box
              w="56"
              h="44"
              position="absolute"
              top="-195px"
              left="50%"
              transform="translate(-7rem, 8)"
              onMouseEnter={() => setIsHovering.on()}
              onMouseLeave={() => setIsHovering.off()}
              onFocus={() => setIsHovering.on()}
              onBlur={() => setIsHovering.off()}
            >
              {imagePreview ? (
                <Image
                  //   fill
                  objectFit="cover"
                  objectPosition="top"
                  w="56"
                  h="40"
                  bg="white"
                  borderRadius="md"
                  shadow="lg"
                  _hover={{ ring: 4, ringColor: "emerald.400" }}
                  src={imagePreview}
                  alt={typeof children === "string" ? children : "Link preview"}
                />
              ) : (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="56"
                  h="40"
                  bg="white"
                  borderRadius="md"
                  shadow="lg"
                  color="slate.800"
                >
                  Loading...
                </Box>
              )}
            </Box>
          </NextLink>
        )}
      </Box>
      <ChakraLink
        href={href}
        display={{ md: "none" }}
        onMouseEnter={() => setIsHovering.on()}
        onMouseLeave={() => setIsHovering.off()}
        onFocus={() => setIsHovering.on()}
        onBlur={() => setIsHovering.off()}
        textDecoration={isHovering ? "underline" : "none"}
      >
        {children}
      </ChakraLink>
    </Box>
  );
};

export default PopoverLink;
