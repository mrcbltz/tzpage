import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

import "./globals.css";
import { HeroHeader } from "@/components/home/header";


const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400'], // dobierz do potrzeb
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Taktyka życia",
  description: "Profesjonalna pomoc psychologiczna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <HeroHeader />
        {children}
      </body>
    </html>
  );
}
