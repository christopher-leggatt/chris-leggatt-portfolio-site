import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { softwareData, techStackData } from "@/app/lib/data";
import PopoverLink from "@/app/components/PopoverLink";

export const metadata = {
  title: "Home",
};

const Toolbox: React.FC<ToolboxProps> = ({
  software = softwareData,
  techStack = techStackData,
}) => {
  return (
      <VStack spacing={24}>
        <Box textAlign="center">
          <Heading
            as="h1"
            size="lg"
            color="indigo.500"
            textTransform="uppercase"
          >
            Toolbox
          </Heading>
          <Text fontSize="4xl" fontWeight="bold" mt={2}>
            Software I use every day.
          </Text>
        </Box>

        <VStack spacing={12}>
          <Heading as="h2" size="lg">
            Software
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={12}>
            {software?.map((item, index) => (
              <Box key={`${item.url}${index}`}>
                <Heading as="h3" size="md" mb={4}>
                  {item.title}
                </Heading>
                <HStack spacing={4}>
                  {item.types.map((tag) => (
                    <Text key={tag} fontSize="sm">
                      #{tag}
                    </Text>
                  ))}
                </HStack>
                <Text mt={4}>{item.description}</Text>
                {item.url && (
                  <PopoverLink href={item.url}>
                    Check it out
                  </PopoverLink>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack spacing={12}>
          <Heading as="h2" size="lg">
            This Site & Tech Stack
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={12}>
            {techStack?.map((item, index) => (
              <Box key={`${item.url}${index}`}>
                <Heading as="h3" size="md" mb={4}>
                  {item.title}
                </Heading>
                <HStack spacing={4}>
                  {item.types.map((tag) => (
                    <Text key={tag} fontSize="sm">
                      #{tag}
                    </Text>
                  ))}
                </HStack>
                <Text mt={4}>{item.description}</Text>
                {item.url && (
                  <PopoverLink href={item.url}>
                    Check it out
                  </PopoverLink>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
  );
};

export default Toolbox;