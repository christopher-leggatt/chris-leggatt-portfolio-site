import { GetStaticProps } from "next";
import { TimelineItem, TimelineList } from "../components/Timeline/Timeline";
import { metadata as meta } from "../layout";
import path from "path";
import fs from "fs/promises";
import { ChangelogProps } from "../interfaces";

export const metadata = {
    title: 'Changelog',
  }

const Changelog: React.FC<ChangelogProps> = ({
  completedItems,
  activeItems,
}) => {
  return (
    <>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Changelog
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          What&apos;s new and upcoming
        </span>
      </h1>

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
    </>
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
