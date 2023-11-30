// "use client";
// Debug
import NextLink from "next/link";
import { customMetadata } from "@/app/data/metadata";
import { footerNavigation } from "./FooterUtils";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="z-50 w-screen text-gray-900 bg-white bg-opacity-50 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-50">
      <footer className="max-w-6xl mx-auto">
        {/* <footer> */}
        <hr />
        <div className="xl:grid xl:grid-cols-4 xl:gap-2">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  General
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {footerNavigation.general.map((item) => (
                    <NextLink
                      key={item.name}
                      href={item.href}
                      passHref
                      legacyBehavior
                    >
                      <span className="block text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                        {item.name}
                      </span>
                    </NextLink>
                  ))}
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Specifics
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {footerNavigation.specifics.map((item) => (
                    <NextLink
                      key={item.name}
                      href={item.href}
                      passHref
                      legacyBehavior
                    >
                      <span className="block text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                        {item.name}
                      </span>
                    </NextLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Extra
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  {footerNavigation.extra.map((item) => (
                    <NextLink
                      key={item.name}
                      href={item.href}
                      passHref
                      legacyBehavior
                    >
                      <span className="block text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                        {item.name}
                      </span>
                    </NextLink>
                  ))}
                  <a
                    target="_blank"
                    href={customMetadata.resume}
                    className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  View My Capstone Demo
                </h3>
                <div role="list" className="mt-4 space-y-4">
                  <a
                    href="https://www.loom.com/share/dc938f87732e4b298519ac3fc9e1b653"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="layout space-y-0 w-auto"
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
