import { ReactNode } from "react";
import { Box, Container, useColorModeValue, VStack } from "@chakra-ui/react";
import TopRays from "@/app/assets/images/portfolio_header_bg.png";
import BottomRays from "@/app/assets/images/portfolio_footer_bg.png";
import Footer from "@/app/components/Footer";
import NavMenu from "@/app/components/NavMenu";
import PageTransition from "@/app/components/PageTransition";
import Image from "next/image";
import { Providers } from "./providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | chrisleggatt.dev",
    default: "chrisleggatt.dev",
  },
  authors: [{ name: "Chris Leggatt", url: "https://chrisleggatt.dev" }],
  // headerTitle: "Chris' Portfolio",
  keywords: ["Next.js", "React", "JavaScript", "Typescript", "ChakraUi"],
  description:
    "I'm Chris. I'm a software engineer. Welcome to my corner of the internet. I'm glad you're here!",
  openGraph: {
    title: "Chris Leggatt – full-stack engineer, creative developer.",
    description:
      "I'm Chris. I'm a software engineer. Welcome to my corner of the internet. I'm glad you're here!",
    url: "https://chrisleggattdev.ca",
    siteName: "chrisleggatt.dev",
    images: [
      {
        url: "/chris_leggatt_portfolio_site_pic.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box
            bg={useColorModeValue("white", "dark")}
            color={useColorModeValue("black", "white")}
            minH="100vh"
          >
            <NavMenu />
            <Container
              as="main"
              maxW="6xl"
              centerContent
              p={4}
              bg={useColorModeValue("white", "dark")}
              position="relative"
              pt="24"
            >
              <Box
                position="absolute"
                overflow="hidden"
                top={{ base: "-8rem", md: "-18rem" }}
                right={{ base: "-9rem", md: "0" }}
                zIndex="hide"
              >
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  zIndex="hide"
                  overflow="hidden"
                >
                  <Image
                    src={TopRays}
                    alt="Header background"
                    width={924}
                    height={718}
                    // unoptimized
                  />
                </Box>
              </Box>

              <VStack spacing={8} position="relative" zIndex="docked">
                <PageTransition>{children}</PageTransition>
                <Footer />
              </VStack>

              <Box
                position="absolute"
                bottom="0"
                overflow="hidden"
                right={{ base: "-11rem", md: "0" }}
                zIndex="hide"
              >
                <Box
                  position="absolute"
                  right={{ base: "-11rem", md: "0" }}
                  bottom={{ base: "-16rem", md: "-24rem" }}
                  zIndex="hide"
                  overflow="hidden"
                >
                  <Image
                    src={BottomRays}
                    alt="Footer background"
                    width={924}
                    height={718}
                    // unoptimized
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
