import Image from "next/image";
import ButtonLink from "./ProjectButtonLink";

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
          A selection of my work(s). (More to come.)
        </span>
      </h1>

      <div className="space-y-12">
        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-indigo-900 to-indigo-200 dark:border-slate-700 border-slate-100">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent"></div>
          <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
            <div className="self-end col-span-1 m-8 text-center md:text-left">
              <h2 className="mt-0">Convenient Cannabis E-commerce site</h2>
              <p>This is a description</p>
              <ButtonLink text="Visit Convenient Cannabis" href="#" />
            </div>
            <div className="md:absolute md:top-4 md:right-[-200px] md:w-[800px]">
              <Image
                objectFit="fill"
                src="/public/static/hardware.webp"
                placeholder="blur"
                blurDataURL="/public/static/hardware.webp"
                width={900}
                height={552}
                layout="intrinsic"
                alt="Convenient Cannabis E-commerce site Home Page"
              />
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
};

export default Projects;
