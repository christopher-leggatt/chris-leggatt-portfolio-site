"use client";
import Image from "next/image";
import Link from "next/link";
import LightLogo from "@/app/assets/logo/portfolio_logo_light.svg";
import DarkLogo from "@/app/assets/logo/portfolio_logo_dark.svg";
import { RenderNavLink, linksArray } from "./NavMenuUtils";
import { Sun } from "@/app/(components)/icons/Sun";
import { Moon } from "@/app/(components)/icons/Moon";
import { Hamburger } from "@/app/(components)/icons/Hamburger";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { customMetadata } from "@/app/data/metadata";

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
        <div className="-my-2 -mr-2 md:hidden" onClick={() => setIsOpen(true)}>
          <div className="bg-gray-200 dark:bg-midnight text-gray-600 dark:text-gray-300 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state">
            <span className="sr-only">Open menu</span>
            <Hamburger />
          </div>
        </div>
        <nav className="hidden space-x-8 text-lg md:flex">
          {linksArray.map((item, index) => {
            return <RenderNavLink key={index} item={item} isMobile={false} />;
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
      {/* Conditional rendering here to ensure that dialog portal isn't removed on route change. */}
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 md:hidden"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />

          <div className="fixed w-full max-w-xs p-6 text-base font-semibold text-gray-900 bg-white shadow-lg rounded-3xl top-4 right-4 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only">Close navigation</span>
              <svg
                viewBox="0 0 10 10"
                className="w-2.5 h-2.5 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <ul className="space-y-6">
              {linksArray.map((item, index) => {
                return (
                  <RenderNavLink key={index} item={item} isMobile={true} />
                );
              })}

              {/* <li>
                <Link href="/" passHref>
                  <span className="hover:text-teal-400 dark:hover:text-teal-500">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <span className="hover:text-teal-400 dark:hover:text-teal-500">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects" passHref>
                  <span className="hover:text-teal-400 dark:hover:text-teal-500">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href={customMetadata.resume}
                  className="hover:text-teal-400 dark:hover:text-teal-500"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link href="/toolbox" passHref>
                  <span className="hover:text-teal-400 dark:hover:text-teal-500">
                    Toolbox
                  </span>
                </Link>
              </li> */}
            </ul>
            <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-200/10">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="flex items-center justify-center w-full py-3 bg-gray-200 rounded-full dark:bg-midnight-hover general-ring-state"
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
              >
                {mounted && (
                  <>
                    <div>{resolvedTheme === "dark" ? <Sun /> : <Moon />}</div>
                    {resolvedTheme === "dark" ? (
                      <p className="ml-3 font-semibold">
                        Change to light theme
                      </p>
                    ) : (
                      <p className="ml-3 font-semibold">Change to dark theme</p>
                    )}
                  </>
                )}
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default NavMenu;
