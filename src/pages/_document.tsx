/* eslint-disable @next/next/no-page-custom-font */
import { ReactNode } from "react";
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import theme from "../app/styles/theme";

const MyDocument = ({ children }: { children: ReactNode }) => {
  return (
    <Html lang="en">
      <Head>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link
          href="/static/favicons/android-chrome-192x192.png"
          rel="android-chrome-icon"
          sizes="192x192"
        />
        <link
          href="/static/favicons/android-chrome-512x512.png"
          rel="android-chrome-icon"
          sizes="512x512"
        />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
