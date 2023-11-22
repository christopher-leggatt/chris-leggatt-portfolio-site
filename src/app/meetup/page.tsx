import { GetStaticProps } from "next";
import { customMetadata } from "../data/metadata";
import path from "path";
import fs from "fs/promises";
import { MeetupItem } from "./MeetupUtils";
import { MeetupProps } from "../interfaces";

export const metadata = {
  title: "Meetup",
};

const Meetup: React.FC<MeetupProps> = ({ meetupContent }) => {
  return (
    <>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Meetup
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A list of people I would love to meet in real life.
        </span>
      </h1>
      <p>
        The internet provides wonderful opportunities to be introduced to
        amazing people. Here&apos;s a list of individuals I would love to meet
        face to face! Want to meet up or be added to the list? Send me a{" "}
        <a target="_blank" href={customMetadata.linkedin} rel="noreferrer">
          message on LinkedIn!
        </a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
        <div className="col-span-12">
          <div className="mt-12">
            <div className="grid grid-cols-3">
              {meetupContent.map((item, index) => (
                <MeetupItem
                  key={index}
                  id={`item-${index}`}
                  name={item.name}
                  link={item.link}
                  checked={item.checked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
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
