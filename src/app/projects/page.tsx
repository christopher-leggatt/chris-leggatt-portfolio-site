import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import ButtonLink from "./ButtonLink";
import { useColorModeValue } from "@chakra-ui/react";

export const metadata = {
  title: "Projects",
};

const Projects: React.FC = () => {
  return (
    <>
      <VStack spacing={4} textAlign="center">
        <Heading
          as="h1"
          size="xl"
          textTransform="uppercase"
          color="indigo.500"
          _dark={{ color: "teal.400" }}
        >
          Projects
        </Heading>
        <Text fontSize="4xl" fontWeight="bold" maxW="2xl" mx="auto">
          An exhaustive list of my works.
        </Text>
      </VStack>
      <Text fontSize="sm">More to come 😉</Text>

      <VStack spacing={12} mt={6}>
        <Box
          position="relative"
          w="full"
          overflow="hidden"
          borderRadius="3xl"
          bgGradient={useColorModeValue(
            "linear(to-b, slate.50, indigo.200)",
            "linear(to-b, slate.800, indigo.900)"
          )}
          borderColor={useColorModeValue("slate.100", "slate.700")}
          borderWidth="1px"
        >
          <Box
            w="full"
            h="1px"
            bgGradient="linear(to-r, transparent, indigo.300, transparent)"
            _dark={{
              bgGradient: "linear(to-r, transparent, indigo.600, transparent)",
            }}
          ></Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} minH="500px">
            <VStack
              spacing={4}
              m={8}
              textAlign={{ base: "center", md: "left" }}
              alignSelf="end"
            >
              <Heading as="h2">Convenient Cannabis E-commerce site</Heading>
              <Text>This is a description</Text>
              <ButtonLink text="Visit Convenient Cannabis >" href="#" />
            </VStack>
            <Box
              position={{ md: "absolute" }}
              top="4"
              right={{ md: "-200px" }}
              w={{ md: "800px" }}
            >
              <Image
                objectFit="fill"
                src="/public/static/hardware.webp"
                alt="Convenient Cannabis E-commerce site Home Page"
                width={900}
                height={552}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </>
  );
};

export default Projects;
