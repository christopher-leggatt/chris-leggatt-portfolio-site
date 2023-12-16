import "@/app/styles/globals.css";
import "@/app/styles/codeblocks.css";
import Providers from "./providers";
import { Metadata } from "next";
import { ReactNode } from "react";
import Rays from "@/app/assets/images/portfolio_rays.png";
import Footer from "@/app/(components)/Footer";
import NavMenu from "@/app/(components)/NavMenu/NavMenu";
import Image from "next/image";

const defaultBaseUrl = "http://localhost:3000";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || defaultBaseUrl;

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | chrisleggatt.dev",
    default: "chrisleggatt.dev",
  },
  authors: [{ name: "Chris Leggatt", url: baseUrl }],
  keywords: ["Next.js", "React", "JavaScript", "Typescript", "Tailwind"],
  description:
    "I'm Chris. I'm a software engineer. Welcome to my corner of the internet. I'm glad you're here!",
  openGraph: {
    title: "Chris Leggatt – full-stack engineer, creative developer.",
    description:
      "I'm Chris. I'm a software engineer. Welcome to my corner of the internet. I'm glad you're here!",
    url: baseUrl,
    siteName: "chrisleggatt.dev",
    images: [
      {
        url: "/chris_leggatt_portfolio_site_pic.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="prose-headings:font-headings">
        <Providers>
          <div className={` bg-white dark:bg-dark min-h-screen`}>
            <NavMenu />
            <main
              className={`flex overflow-hidden flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative pt-24`}
            >
              <Image
                className="absolute t-top-32 md:-top-72"
                src={Rays}
                alt="Rays"
                width={1280}
                height={995}
              />
              <div className="z-10">
                {children}
                <Footer />
              </div>
              <Image
                className="absolute -right-44 -bottom-64 md:right-0 md:-bottom-96 max-w-6xl"
                src={Rays}
                alt="Rays"
                width={1280}
                height={995}
              />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
