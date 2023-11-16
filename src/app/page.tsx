import {
  Button as ChakraButton,
  Box,
  Text,
  Avatar,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";
import Divider from "@/app/components/icons/Divider";
// import { GetStaticProps } from 'next';
import { customMetadata } from "./data/metadata";
import { useRouter } from "next/router";

export const metadata = {
  title: "Home",
};

const Home = () => {
  const { push } = useRouter();
  return (
    <Box>
      <VStack spacing={6} textAlign="center" align="start">
        <Box
          display={{ md: "grid" }}
          gridTemplateColumns={{ md: "repeat(6, 1fr)" }}
          alignItems="center"
          mt={{ base: 12, md: 24 }}
        >
          <Text
            as="h1"
            fontSize={{ base: "4xl", sm: "5xl" }}
            fontWeight="bold"
            gridColumn={{ md: "span 5 / span 5" }}
            order={{ md: 1 }}
          >
            I&apos;m{" "}
            <Text as="span" color="teal.500">
              Chris
            </Text>
            a dedicated and passionate software engineer, with a background in
            quality control.
          </Text>
          <Box order={{ md: 2 }}>
            <Avatar
              name="Chris Leggatt"
              borderRadius="full"
              boxSize="160px"
              src={customMetadata.avatarUrl}
            />
          </Box>
        </Box>
        <HStack spacing={4}>
          <ChakraButton
            colorScheme="teal"
            variant="solid"
            onClick={() => push("/resume")}
          >
            My resume
          </ChakraButton>
          <ChakraButton
            colorScheme="gray"
            variant="outline"
            onClick={() => push("/about")}
          >
            More about me
          </ChakraButton>
        </HStack>
      </VStack>
      <Center>
        <Divider />
      </Center>
      <Box my={16} />
      <Box mt={16}>{/* Additional content goes here */}</Box>
    </Box>
  );
};

export default Home;
