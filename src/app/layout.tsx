import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Book Store For WSG",
  description: "Best Book Store Project for WSG Classe",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", url: "/favicon-16x16.png" },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="mx-auto max-w-7xl" data-role="main-app-container">
            <div className="flex w-full flex-col gap-3">
              <Navbar />
              <div className="">{children}</div>
            </div>
            <Footer />
          </div>
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
