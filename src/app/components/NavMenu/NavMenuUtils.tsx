'use client';
import Link from "next/link";
import { NavLinkProps } from "@/app/interfaces";
import { usePathname } from "next/navigation";
import useAnimatedRouter from '@/hooks/useAnimatedRouter';

export const linksArray = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/resume", text: "Resume" },
  { href: "/stats", text: "Stats" },
  { href: "/toolbox", text: "Toolbox" },
];

export const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  // const router = useRouter();
  const { animatedRoute } = useAnimatedRouter();
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}
    onClick={() => {
      animatedRoute(href);
    }}
    passHref>
    <span
      className={`${
        isActive
          ? 'font-bold text-teal-500 dark:text-teal-400'
          : 'font-normal text-gray-500 dark:text-gray-400'
      } 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all`}
    >
      {text}
    </span>
  </Link>
    );
};
