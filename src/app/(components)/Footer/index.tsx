// "use client";
// Debug
import NextLink from "next/link";
import { customMetadata } from "@/app/data/metadata";
import { footerNavigation } from "./FooterUtils";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="z-50 w-custom relative -left-4 bg-white bg-opacity-50 dark:bg-dark backdrop-filter backdrop-blur-lg dark:bg-opacity-50">
      <footer className="z-52 max-w-6xl mx-4 6xl:mx-auto text-gray-900 dark:text-gray-100">
        {/* <footer> */}
        <hr />

        <div>
          <div className="grid grid-cols-2 gap-8 xl:grid-cols-8">
            <div className="md:grid md:grid-cols-2 md:gap-8 xl:col-span-2">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  General
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {footerNavigation.general.map((item) => (
                    <span key={item.name} className="block">
                      <NextLink href={item.href} passHref legacyBehavior>
                        <span className="inline text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                          {item.name}
                        </span>
                      </NextLink>
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-semibold tracking-wider uppercase sm:mt-0">
                  Specifics
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {footerNavigation.specifics.map((item) => (
                    <span key={item.name} className="block">
                      <NextLink href={item.href} passHref legacyBehavior>
                        <span className="inline text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                          {item.name}
                        </span>
                      </NextLink>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-none xl:col-span-6">
              <div className="xl:col-span-1">
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Extra
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {footerNavigation.extra.map((item) => (
                    <span key={item.name} className="block">
                      <NextLink href={item.href} passHref legacyBehavior>
                        <span className="inline text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                          {item.name}
                        </span>
                      </NextLink>
                    </span>
                  ))}
                  <div className="block">
                    <a
                      target="_blank"
                      href={customMetadata.resume}
                      className="inline font-normal text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                      rel="noreferrer"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:col-start-12 xl:col-span-1 xl:flex xl:flex-col xl:items-end">
                <h3 className="text-sm font-semibold tracking-wider uppercase xl:text-end">
                  View My Capstone Demo
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  <a
                    href="https://www.loom.com/share/dc938f87732e4b298519ac3fc9e1b653"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="layout space-y-0 w-auto xl:w-64"
                      src="https://cdn.loom.com/sessions/thumbnails/dc938f87732e4b298519ac3fc9e1b653-1696271012768-with-play.gif"
                      alt="Capstone Demo Thumbnail"
                      width={60}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author and Social Icons */}
        <div className="flex items-center justify-between mt-12">
          <div className="flex items-center order-2 space-x-6">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 important"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon &&
                  React.cloneElement(item.icon, { "aria-hidden": true })}
              </a>
            ))}
          </div>
          <p className="order-1 text-base">
            &copy; {new Date().getFullYear()} {customMetadata.author}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
