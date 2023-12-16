import { customMetadata } from "@/app/data/metadata";
import { FiGithub as Github, FiCodepen as Codepen } from "react-icons/fi";
import { AiOutlineLinkedin as Linkedin } from "react-icons/ai";

export const footerNavigation = {
  general: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ],
  specifics: [{ name: "Toolbox", href: "/toolbox" }],
  extra: [
    { name: "Changelog", href: "/changelog" },
    { name: "Meet up", href: "/meetup" },
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
