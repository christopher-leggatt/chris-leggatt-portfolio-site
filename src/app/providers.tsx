"use client";
import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "next-themes";
import { ModalProvider } from "@/contexts/ModalContext";

const defaultBaseUrl = "http://localhost:3000";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || defaultBaseUrl;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider domain={baseUrl} trackOutboundLinks={true}>
      <ThemeProvider attribute="class">
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    </PlausibleProvider>
  );
}
