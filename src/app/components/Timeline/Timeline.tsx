import { createIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { TimelineBullet } from "../icons/TimelineBullet";

export const TimelineList = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

type Props = {
  title: string;
  meta: string;
  link?: string | undefined | null;
  meta_small?: string;
  content: any;
  children?: ReactNode;
};

export const TimelineItem = ({
  title,
  meta,
  link = null,
  meta_small,
  content,
}: Props) => {
  return (
    <Box
      position="relative"
      display="grid"
      gridTemplateColumns={{ md: "repeat(5, 1fr)" }}
      gap={{ md: 10 }}
      mx={12}
      pb={12}
      _before={{
        content: `""`,
        display: "block",
        height: "full",
        position: "absolute",
        left: { base: "-25px", md: "-37px" },
        borderLeft: "2px",
        borderColor: useColorModeValue("gray.300", "gray.700"),
      }}
    >
      <Box position="relative" pb={12} gridColumn={{ md: "span 2" }}>
        <Box position="sticky" top="28">
          <Icon
            as={TimelineBullet}
            color="gray.500"
            bg={useColorModeValue("white", "dark")}
            borderRadius="full"
            position="absolute"
            left={{ base: "-38px", md: "-50px" }}
            boxSize="7"
          />

          <Heading as="h3" p={0} m={0}>
            {title}
          </Heading>

          {link ? (
            <ChakraLink href={link} p={0} m={0}>
              {meta}
            </ChakraLink>
          ) : (
            <Text p={0} m={0}>
              {meta}
            </Text>
          )}
          <Text p={0} m={0} fontSize="sm" color="gray.500">
            {meta_small}
          </Text>
        </Box>
      </Box>
      <Box
        position="relative"
        pb={4}
        mt={{ md: "-6" }}
        borderBottom={{ md: "2px" }}
        borderColor={{ md: useColorModeValue("gray.300", "gray.400") }}
        gridColumn={{ md: "span 3" }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></Box>
    </Box>
  );
};
