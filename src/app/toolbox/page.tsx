import PopoverLink from "@/app/(components)/PopoverLink/PopoverLink";
import { getToolbox } from "@/lib/toolbox-db";
import { mongoose } from "@typegoose/typegoose";

interface ToolboxItem {
  url: string;
  title: string;
  types: string[];
  description: string;
}

interface ToolboxProps {
  software: ToolboxItem[];
  tech_stack: ToolboxItem[];
  site: ToolboxItem[];
  _id: mongoose.Types.ObjectId | string;
}

export const metadata = {
  title: "Toolbox",
};

const Toolbox = async () => {
  const { toolbox } = (await getToolbox()) as { toolbox: ToolboxProps };
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
            {toolbox?.software?.map((item, index) => (
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
          <h2>Tech Stack</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {toolbox?.tech_stack?.map((item, index) => (
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
          <h2>This Site</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {toolbox?.site?.map((item, index) => (
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
