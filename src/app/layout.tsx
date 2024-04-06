// Library Imports
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Project Imports
import Header from '../layout/MainLayout/Header'
import Drawer from '@/layout/MainLayout/Drawer';
import CHeader from '../_components/CHeader'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const logged = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return logged ? (
    <html lang="en">
      <body className={"h-full"}>
      <Header/>
      <Drawer/>
      {children}</body>
    </html>
  ): (
      <html lang="en">
        <body className={"h-full"}>
          <CHeader/>
          {children}
        </body>
      </html>
  )
}
