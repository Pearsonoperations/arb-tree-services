import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ARB Tree Services | Professional Tree Surgeons in Dudley",
  description:
    "ARB Tree Services — 40 years of professional tree surgery in Dudley, West Midlands. NVQ qualified, fully insured. Tree felling, crown reduction, stump grinding, emergency callout. Call 07986 173679.",
  keywords:
    "tree surgeon Dudley, tree surgery West Midlands, tree felling Dudley, stump grinding, crown reduction, emergency tree removal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
