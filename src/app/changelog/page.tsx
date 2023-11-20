import { GetStaticProps } from "next";
import { TimelineItem, TimelineList } from "../components/Timeline/Timeline";
import { metadata as meta } from "../layout";
import path from "path";
import fs from "fs/promises";
import { ChangelogProps } from "../interfaces";
import { Box, Heading, VStack } from "@chakra-ui/react";

export const metadata = {
    title: 'Changelog',
  }

const Changelog: React.FC<ChangelogProps> = ({
  completedItems,
  activeItems,
}) => {
  return (
    <Box>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="lg" color="indigo.500" textTransform="uppercase">
          Changelog
        </Heading>
        <Heading as="h2" size="2xl">
          What&apos;s new and upcoming
        </Heading>
      </VStack>

      <TimelineList>
        {activeItems.map((activeItem, index) => (
          <TimelineItem
            key={index}
            title={activeItem.title}
            meta={new Date(activeItem.date).toLocaleDateString(
              meta.openGraph?.locale,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
            content={`<p>${activeItem.description}</p>`}
          />
        ))}
      </TimelineList>

      <TimelineList>
        {completedItems.map((completedItem, index) => (
          <TimelineItem
            key={index}
            title={completedItem.title}
            meta={new Date(completedItem.date).toLocaleDateString(
              meta.openGraph?.locale,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
            content={`<p>${completedItem.description}</p>`}
          />
        ))}
      </TimelineList>
    </Box>
  );
};

export default Changelog;

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "changelog.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      completedItems: data.completed,
      activeItems: data.active,
    },
    revalidate: 1800,
  };
};
