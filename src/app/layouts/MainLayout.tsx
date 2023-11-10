import { ReactNode } from 'react';
import { Box, Container, useColorModeValue, VStack } from "@chakra-ui/react";
import TopRays from "@/app/assets/images/portfolio_header_bg.png";
import BottomRays from "@/app/assets/images/portfolio_footer_bg.png";
import Footer from "@/app/components/Footer/Footer";
import Head from "next/head";
import NavMenu from "@/app/components/NavMenu/NavMenu";
import { PageTransition } from "@/app/components/PageTransition/PageTransition";
import { PageType } from "@/app/lib/types";
import siteMetadata from "@/app/data/siteMetadata";
import { useRouter } from "next/router";
import Image from "next/image";

const MainLayout = ({ children }: { children: ReactNode }) => {  
  const router = useRouter();
  const bgColor = useColorModeValue("white", "dark");
  const color = useColorModeValue("black", "white");

  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: null,
    type: PageType.WEBSITE,
    canonicalUrl: `${siteMetadata.siteUrl}${router.asPath}`,
    date: null,
    isArticle: false,
  };

  return (
    <Box bg={bgColor} color={color} minH="100vh">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        <meta name="application-name" content="&nbsp;" />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Chris Leggatt" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent(
            meta.title
          )}${
            meta.imageUrl ? `&imgSrc=${meta.imageUrl}` : ""
          }&description=${encodeURIComponent(meta.description)}`}
        />
      </Head>
      <NavMenu />
      <Container
        as="main"
        maxW="6xl"
        centerContent
        p={4}
        bg={bgColor}
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
              unoptimized
            />
          </Box>
        </Box>

        <VStack spacing={8} position="relative" zIndex="docked">
          {/* <PageTransition>{children}</PageTransition> */}
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
              unoptimized
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
