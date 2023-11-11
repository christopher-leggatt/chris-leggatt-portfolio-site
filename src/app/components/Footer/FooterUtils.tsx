import { siteMetadata } from "@/app/data/siteMetadata";
import { FiGithub as Github, FiCodepen as Codepen } from "react-icons/fi";
import { AiOutlineLinkedin as Linkedin } from "react-icons/ai";

export const navigation = {
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
      href: siteMetadata.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Github",
      href: siteMetadata.github,
      icon: <Github />,
    },
    {
      name: "Codepen",
      href: siteMetadata.codepen,
      icon: <Codepen />,
    },
  ],
};
