import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "NextUI test - upwork",
  description: "NextUI test - upwork, a Next.js UI library. 🚀",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-slate-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class" }}>
          <div className="relative flex flex-col h-screen">
            <main className=" ">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
