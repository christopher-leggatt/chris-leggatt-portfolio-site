import Image from "next/image";
import ButtonLink from "./ProjectButtonLink";
import { customMetadata } from "../data/metadata";
import CapstoneImage from "@/app/assets/images/projects_convenient_cannabis.png";
import PortfolioImage from "@/app/assets/images/projects_portfolio_site.png";
import PopoverLink from "../(components)/PopoverLink";

export const metadata = {
  title: "Projects",
};

const Projects: React.FC = () => {
  return (
    <>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          An exhaustive collection of my work(s). (More to come.)
        </span>
      </h1>

      <div className="space-y-12">
        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-indigo-900 to-indigo-200 dark:border-slate-700 border-slate-100">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent"></div>
          <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
            <div className="self-end col-span-1 m-8 text-center md:text-left">
              <h2 className="mt-0">Convenient Cannabis E-commerce site</h2>
              <p>
                My capstone project for BrainStation&apos;s SE course. A full
                stack website created with a friend&apos;s cannabis dispensary
                in mind.
              </p>
              <ButtonLink
                text="Visit Convenient Cannabis"
                href={customMetadata.capstone}
              />
            </div>
            <div className="md:absolute md:top-4 md:right-[-200px] md:w-[800px] object-fill">
              <Image
                src={CapstoneImage}
                placeholder="empty"
                width={900}
                height={552}
                alt="Convenient Cannabis on laptop"
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-purple-50 dark:from-purple-900/50 dark:to-fuchsia-700 to-fuchsia-300 dark:border-slate-700 border-slate-100">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-300 dark:via-fuchsia-600 to-transparent"></div>
        <div className="grid grid-cols-1 min-h-[500px] max-h-[500px] md:grid-cols-2">
          <div className="md:max-w-[650px] max-h-[500px] relative md:ml-5">
            <Image
              layout="fill"
              objectFit="contain"
              src={PortfolioImage}
              placeholder="empty"
              alt="Portfolio Site on tablet"
            />
          </div>
          <div className="self-center order-first col-span-1 m-8 text-center md:order-last md:text-left">
            <h2 className="mt-0">Portfolio Site</h2>
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              "<PopoverLink href="https://knowyourmeme.com/memes/xzibit-yo-dawg">Yo dawg,</PopoverLink> I herd you like portfolio sites..." My second major
              project, included here, until I complete another project or two.
              Stay tuned!
            </p>
            <ButtonLink
              text="Visit Portfolio Site"
              href={customMetadata.capstone}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
