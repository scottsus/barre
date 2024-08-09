import "~/styles/globals.css";

import localFont from "next/font/local";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Barre Angels",
  description: "Korean-inspired fitness",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const catchyMagerFont = localFont({
  src: "../../public/fonts/catchy-mager-regular.ttf",
  display: "swap",
  variable: "--font-catchy-mager",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-screen overflow-x-hidden ${catchyMagerFont.variable} font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
