import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Jesse Burcsik",
  description:
    "Technology leader and civic contributor. Building things that matter.",
  openGraph: {
    title: "Jesse Burcsik",
    description:
      "Technology leader and civic contributor. Building things that matter.",
    url: "https://burcsik.ca",
    siteName: "Jesse Burcsik",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
