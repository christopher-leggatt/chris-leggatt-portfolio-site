'use client'
import Image from "next/image";
import Link from "next/link";
import LightLogo from '@/app/assets/logo/portfolio_logo_light.svg'
import DarkLogo from '@/app/assets/logo/portfolio_logo_dark.svg'
import { NavLink, linksArray } from "./NavMenuUtils";
import { Sun } from "@/app/components/icons/Sun";
import { Moon } from "@/app/components/icons/Moon";
import { Hamburger } from "@/app/components/icons/Hamburger";
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";


const NavMenu = () => {
  const [mounted, setMounted] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
      <div className="fixed z-50 w-full text-gray-900 bg-white bg-opacity-50 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-50">
        <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto sm:px-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Profile Picture</span>
            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Chris Leggatt"
                  height={38}
                  width={38}
                  src={DarkLogo}
                  blurDataURL={DarkLogo}
                  className="rounded-full"
                />
              </span>
            </Link>
            <Link href="/" passHref>
              <span className="hidden dark:block">
                <Image
                  alt="Chris Leggatt"
                  height={38}
                  width={38}
                  src={LightLogo}
                  blurDataURL={LightLogo}
                  className="rounded-full"
                />
              </span>
            </Link>
          </div>
          <div
            className="-my-2 -mr-2 md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <div className="bg-gray-200 dark:bg-midnight text-gray-600 dark:text-gray-300 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state">
              <span className="sr-only">Open menu</span>
              <Hamburger />
            </div>
          </div>
          <nav className="hidden space-x-8 text-lg md:flex">
            {linksArray.map((item, index) => {
              return (
                <NavLink key={index} href={item.href} text={item.text} />
              )
            })}
          </nav>

          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-midnight general-ring-state"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {mounted && (
                <div>{resolvedTheme === "dark" ? <Sun /> : <Moon />}</div>
              )}
            </button>
          </div>
        </div>
      </div>
  );
};

export default NavMenu;
