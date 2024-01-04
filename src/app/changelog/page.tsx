import { TimelineItem, TimelineList } from "../(components)/Timeline/Timeline";
import { metadata as meta } from "../layout";
import { getChangelog } from "@/lib/changelog-db";
import { mongoose } from "@typegoose/typegoose";

interface ChangelogItem {
  title: string;
  date: Date;
  description: string;
}

interface ChangelogProps {
  completed: ChangelogItem[];
  upcoming: ChangelogItem[];
  _id: mongoose.Types.ObjectId | string;
}


export const metadata = {
  title: "Changelog",
};

const Changelog = async () => {
  const { changelog } = (await getChangelog()) as { changelog?: ChangelogProps };
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
        {changelog?.upcoming?.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            meta={new Date(item.date).toLocaleDateString(
              meta.openGraph?.locale || "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
            content={`<p>${item.description}</p>`}
          />
        ))}
      </TimelineList>

      <TimelineList>
        {changelog?.completed?.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            meta={new Date(item.date).toLocaleDateString(
              meta.openGraph?.locale || "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
            content={`<p>${item.description}</p>`}
          />
        ))}
      </TimelineList>
    </>
  );
};

export default Changelog;
