import Link from "next/link";
import { usePathname } from "next/navigation";
import { customMetadata } from "@/app/data/metadata";

interface NavLinkProps {
  href: string;
  text: string;
  isExternal?: boolean;
  className?: boolean;
}

interface RenderNavLinkProps {
  item: NavLinkProps;
  isMobile: boolean;
}

export const linksArray: NavLinkProps[] = [
  { href: "/", text: "Home", isExternal: false },
  { href: "/about", text: "About", isExternal: false },
  { href: "/projects", text: "Projects", isExternal: false },
  // Debug
  { href: customMetadata.resume, text: "Resume", isExternal: true },
  { href: "/toolbox", text: "Toolbox", isExternal: false },
];

export const RenderNavLink: React.FC<RenderNavLinkProps> = ({
  item,
  isMobile,
}) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  const linkClass = `${
    isActive
      ? "font-bold text-teal-500 dark:text-teal-400"
      : "font-normal text-gray-500 dark:text-gray-400"
  } ' ' ${
    isMobile
      ? "hover:text-teal-400 dark:hover:text-teal-500"
      : "hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all"
  }`;

  const linkContent = item.isExternal ? (
    <a
      href={item.href}
      className={linkClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item.text}
    </a>
  ) : (
    <Link href={item.href} passHref>
      <span className={linkClass}>{item.text}</span>
    </Link>
  );

  return isMobile ? <li>{linkContent}</li> : linkContent;
};
