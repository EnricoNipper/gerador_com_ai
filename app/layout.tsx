import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";


import ToasterProvider from "@/components/toaster-provider";
import CrispProvider from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI SaaS Platform."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="pt-br">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <CrispProvider />
        <body className={inter.className}>
          
          <ToasterProvider />
          {children}
        </body>
      </html>
    
  );
}
