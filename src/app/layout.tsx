import TopRays from "@/app/assets/images/portfolio_header_bg.png";
import BottomRays from "@/app/assets/images/portfolio_footer_bg.png";
import Footer from "@/app/components/Footer";
import NavMenu from "@/app/components/NavMenu";
import PageTransition from "@/app/components/PageTransition";
import Image from "next/image";
import { Providers } from "./providers";
import { Metadata } from "next";
import { ILayoutProps } from "./interfaces";

export const metadata: Metadata = {
  title: {
    template: "%s | chrisleggatt.dev",
    default: "chrisleggatt.dev",
  },
  authors: [{ name: "Chris Leggatt", url: "https://chrisleggatt.dev" }],
  keywords: ["Next.js", "React", "JavaScript", "Typescript", "ChakraUi"],
  description:
    "I'm Chris. I'm a software engineer. Welcome to my corner of the internet. I'm glad you're here!",
  openGraph: {
    title: "Chris Leggatt – full-stack engineer, creative developer.",
    description:
      "I'm Chris. I'm a software engineer. Welcome to my corner of the internet. I'm glad you're here!",
    url: "https://chrisleggattdev.ca",
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

const RootLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <div className={`bg-white dark:bg-dark min-h-screen`}>
        <body className="prose-headings:font-headings">
          <Providers>
            <NavMenu />
            <main
              className={`flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative pt-24`}
            >
              <div className="absolute overflow-hidden -top-32 md:-top-72 md:right-36">
                <Image
                  className="absolute top-0 right-0"
                  src={TopRays}
                  alt=""
                  width={924}
                  height={718}
                  unoptimized
                />
              </div>
              <div className="z-10">
                <PageTransition>{children}</PageTransition>
                <Footer />
              </div>
              <div className="absolute bottom-0 overflow-hidden">
                <Image
                  className="absolute -right-44 -bottom-64 md:right-0 md:-bottom-96"
                  src={BottomRays}
                  alt=""
                  width={924}
                  height={718}
                  unoptimized
                />
              </div>
            </main>
          </Providers>
        </body>
      </div>
    </html>
  );
};

export default RootLayout;
