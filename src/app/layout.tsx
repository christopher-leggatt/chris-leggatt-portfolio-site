import "@/app/styles/globals.css";
import "@/app/styles/codeblocks.css";
import "@/app/styles/custom-styles.css";
import Rays from "@/app/assets/images/portfolio_rays.png";
import Footer from "@/app/components/Footer";
import NavMenu from "@/app/components/NavMenu";
import Image from "next/legacy/image";
import Providers from "./providers";
import { Metadata } from "next";
import { LayoutProps } from "./interfaces";

const defaultBaseUrl = "http://localhost:3000";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || defaultBaseUrl;

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
              className={`flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative pt-24`}
            >
              <div className="absolute overflow-hidden -top-32 md:-top-72 md:right-36">
                <Image
                  className="absolute top-0 right-0"
                  src={Rays}
                  alt=""
                  width={924}
                  height={718}
                  unoptimized
                />
              </div>
              <div className="z-10">
                <div className="pageContent">{children}</div>
                <Footer />
              </div>
              <div className="image-container absolute overflow-hidden bottom-0">
                <Image
                  className="absolute -right-44 -bottom-64 md:right-0 md:-bottom-96"
                  src={Rays}
                  alt=""
                  width={924}
                  height={718}
                  unoptimized
                />
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
