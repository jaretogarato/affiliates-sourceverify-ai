import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SourceVerify Affiliate Program",
    template: "%s — SourceVerify Affiliates",
  },
  description:
    "Earn 25% recurring commission for 24 months by referring researchers to SourceVerify.",
  openGraph: {
    title: "SourceVerify Affiliate Program",
    description:
      "Earn 25% recurring commission for 24 months by referring researchers to SourceVerify.",
    siteName: "SourceVerify Affiliates",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
