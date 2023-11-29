import { softwareData, techStackData } from "@/app/data/data";
import PopoverLink from "@/app/(components)/PopoverLink";
import { ToolboxProps } from "../interfaces";

export const metadata = {
  title: "Home",
};

const Toolbox: React.FC<ToolboxProps> = ({
  software = softwareData,
  techStack = techStackData,
}) => {
  return (
    <>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Toolbox
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Hardware and Software I use every day.
        </span>
      </h1>
      <div className="space-y-24">
        <div className="space-y-12">
          <h2>Software</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {software?.map((item, index) => (
              <div key={`${item.url}${index}`}>
                <h3 className="m-0 text-xl font-medium">{item.title}</h3>
                <div className="block space-x-4">
                  {item.types.map((tag: string) => (
                    <span key={tag} className="text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="m-0 mb-3 text-base">{item.description}</p>
                  {item.url && (
                    <span className="text-base">
                      <PopoverLink href={item.url}>Check it out</PopoverLink>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <h2>This Site & Tech Stack</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {techStack?.map((item, index) => (
              <div key={`${item.url}${index}`}>
                <h3 className="m-0 text-xl font-medium">{item.title}</h3>
                <div className="block space-x-4">
                  {item.types.map((tag: string) => (
                    <span key={tag} className="text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="m-0 mb-3 text-base">{item.description}</p>
                  {item.url && (
                    <span className="text-base">
                      <PopoverLink href={item.url}>Check it out</PopoverLink>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbox;
