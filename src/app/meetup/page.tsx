import { GetStaticProps } from "next";
import { customMetadata } from "../data/metadata";
import path from "path";
import fs from "fs/promises";
import { MeetupItem } from "./MeetupUtils";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { MeetupProps } from "../interfaces";

export const metadata = {
  title: "Meetup",
};

const Meetup: React.FC<MeetupProps> = ({ meetupContent }) => {
  return (
    <Box>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="lg" color="indigo.500" textTransform="uppercase">
          Meetup
        </Heading>
        <Heading as="h2" size="2xl">
          A list of people I would love to meet in real life.
        </Heading>
      </VStack>
      <Text>
        The internet provides wonderful opportunities to be introduced to
        amazing people. Here&apos;s a list of individuals I would love to meet
        face to face! Want to meet up or be added to the list? Send me a{" "}
        <a target="_blank" href={customMetadata.linkedin} rel="noreferrer">
          message on LinkedIn!
        </a>
      </Text>
      <Box className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {meetupContent.map((item, index) => (
          <MeetupItem
            key={index}
            id={`item-${index}`}
            name={item.name}
            link={item.link}
            checked={item.checked}
          />
        ))}
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "meetup.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      meetupContent: data,
    },
    revalidate: 1800,
  };
};
