/* eslint-disable react/no-unescaped-entities */
import { customMetadata } from "@/app/data/metadata";
import Image from "next/image";
import PopoverLink from "@/app/(components)/PopoverLink";
import ButtonLink from "../(components)/buttons/ButtonLink";
import { ToolboxButton } from "./AboutClient";
import { TimelineItem, TimelineList } from "../(components)/Timeline/Timeline";
import { getExperience } from "@/lib/experience-db";
import { ButtonType } from "@/types/enums";
import AboutProfile from "@/app/assets/images/about_profile.jpg";
import Hardware from "@/app/assets/images/hardware.webp";

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
        I'm Chris, a full stack developer and <PopoverLink href={customMetadata.codepen}>creative coder</PopoverLink>, transitioning from
        the world of automotive manufacturing and quality control. My journey
        has been driven by a lifelong passion for learning and an innate ability
        to adapt and solve problems, a trait I've honed due to my <PopoverLink href="https://en.wikipedia.org/wiki/Constriction_ring_syndrome">limb differences.</PopoverLink>
        These experiences have not just shaped my approach to
        challenges but also fueled my curiosity in technology.
      </p>
      <p>
        My career in the industrial sector, spanning nearly two decades, has
        been foundational in developing my troubleshooting skills, team-building
        abilities, and a robust work ethic. However, the physical demands of the
        industry prompted me to seek a new path, one that aligns with my
        deep-seated interests in both technical and creative domains.
      </p>
      <div>
        <div className="hidden md:block md:float-left">
          <Image
            className="md:mr-8"
            src={AboutProfile}
            placeholder="blur"
            width={340}
            height={448}
            alt="article cover"
          />
        </div>
        <p>
          I've always been intrigued by the intersection of technology and
          creativity, finding joy in sketching, drumming, and reading. The world
          of coding and computer science, once a distant fascination, became a
          tangible goal as I dabbled in <PopoverLink href={experience![1].company_url}>online coding modules</PopoverLink> and began building
          my first projects. This exploration led me to enroll in BrainStation's
          <PopoverLink href="https://brainstation.io/online/software-engineering-bootcamp">Software Engineering course - </PopoverLink>one of the best decisions I've ever made.
        </p>
        <p>
          The intensive program at BrainStation was a catalyst in my
          development. It deepened my understanding of object-oriented
          programming, full-stack development, and project workflow. It also
          equipped me with a clear vision for my future in the tech industry.
        </p>
        <p>
          Today, I'm <PopoverLink href={customMetadata.linkedin}>#opentowork,</PopoverLink> enthusiastic about embarking on new projects
          and collaborations. I am eager to dive into new programming languages,
          connect with like-minded individuals in the tech community, and hone
          my code-jutsu. With my blend of industrial experience and fresh
          software engineering skills, I am ready to contribute, learn, and grow
          in this new chapter of my career 😊
        </p>
        <div></div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Coding experience</h2>
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
          <p>I keep a list of the tech I use to those who are interested.</p>
          <ToolboxButton />
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-3xl group-hover:opacity-75 object-cover"
            src={Hardware}
            placeholder="blur"
            alt="article cover"
          />
        </div>
      </div>
    </>
  );
};

export default About;
