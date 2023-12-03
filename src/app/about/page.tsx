/* eslint-disable react/no-unescaped-entities */
import { customMetadata } from "@/app/data/metadata";
import Image from "next/legacy/image";
import PopoverLink from "@/app/(components)/PopoverLink";
import { ButtonLink } from "../(components)/buttons/ButtonLink";
import { ToolboxButton } from "./AboutClient";
import { TimelineItem, TimelineList } from "../(components)/Timeline/Timeline";
import { getExperience } from "@/lib/experience-db";

export const metadata = {
  title: "About",
};

const About = async () => {
  const { experience } = await getExperience();

  return (
    <>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A little bit of background.
        </span>
      </h1>
      <p>
        I&apos;m Chris, a full stack developer,{" "}
        <PopoverLink href={customMetadata.codepen}>creative coder</PopoverLink>,
        and lifelong learner who decided to take a new life path from automotive
        manufacturing and quality control. My mission is to translate
        user-focussed designs into pixel-perfect websites/applications while
        adding to my repertoire of software disciplines.
      </p>
      <p>
        I began my tech journey last year with online modules and quickly
        developed a passion for the worlds that coding can create, Now, having
        graduated BrainStation's Software Engineering course, I&apos;m{" "}
        <PopoverLink href={customMetadata.github}>#opentowork</PopoverLink> and
        hitting the ground running, developing new{" "}
        <PopoverLink href={customMetadata.github}>
          projects/collaborations
        </PopoverLink>
        , learning new languages and connecting with new people in this newfound
        space.
      </p>
      <div>
        <div className="hidden md:block md:float-left">
          <Image
            className="md:mr-8"
            src="/static/hardware.webp"
            placeholder="blur"
            blurDataURL="/static/hardware.webp"
            width={340}
            height={448}
            alt="article cover"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis
        </p>
        <p>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <div></div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Here's a brief rundown of my most recent experiences.</p>
        {experience && experience.length > 0 && (
          <TimelineList>
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                meta={item.company}
                link={item.company_url}
                meta_small={item.duration}
                content={item.description}
              />
            ))}
          </TimelineList>
        )}
      </div>
      <ButtonLink buttonType={ButtonType.PRIMARY} href={customMetadata.resume}>
        View my resume
      </ButtonLink>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3">
          <h2>My skillset</h2>
          <p>
            I keep a list of the software I use to those who are interested.
          </p>
          <ToolboxButton />
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-3xl group-hover:opacity-75 object-cover"
            src="/static/hardware.webp"
            placeholder="blur"
            blurDataURL="/static/hardware.webp"
            width={260}
            height={260}
            alt="article cover"
          />
        </div>
      </div>
    </>
  );
};

export default About;
