import { customMetadata } from "@/app/data/metadata";
import { FiGithub as Github, FiCodepen as Codepen } from "react-icons/fi";
import { AiOutlineLinkedin as Linkedin } from "react-icons/ai";
import NextLink from "next/link";
import { FooterNavigation } from "@/app/interfaces";
import { LinkGroupProps } from "@/app/types";

export const footerNavigation: FooterNavigation = {
  general: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ],
  specifics: [
    { name: "Stats", href: "/stats" },
    { name: "Toolbox", href: "/toolbox" },
  ],
  extra: [
    { name: "Changelog", href: "/changelog" },
    { name: "Meet up", href: "/meetup" },
    { name: "Resume", href: "/resume" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: customMetadata.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Github",
      href: customMetadata.github,
      icon: <Github />,
    },
    {
      name: "Codepen",
      href: customMetadata.codepen,
      icon: <Codepen />,
    },
  ],
};

export const LinkGroup = ({ title, array }: LinkGroupProps) => {
  const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  return (
    <div className="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <h3 className="text-sm font-semibold tracking-wider uppercase">
          {capitalizeFirstLetter(title)}
        </h3>
        <div role="list" className="mt-4 space-y-4">
          {array.map((item, index) => (
            <NextLink key={item.name} href={item.href} passHref legacyBehavior>
              <span className="block text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                {item.name}
              </span>
            </NextLink>
          ))}
          {title === "extra" && (
            <a
              target="_blank"
              href={customMetadata.resume}
              className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
              rel="noreferrer"
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
