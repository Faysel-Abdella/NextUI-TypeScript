import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

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
      <body className="min-h-screen bg-slate-300 font-sans antialiased">
        <div className="relative flex flex-col h-screen bg-slate-300">
          <main className=" bg-slate-300">{children}</main>
        </div>
      </body>
    </html>
  );
}
