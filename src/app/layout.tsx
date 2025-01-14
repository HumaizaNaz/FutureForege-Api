import type { Metadata } from "next";

import "./globals.css";
import { Inter } from 'next/font/google'
import "./globals.css";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] })




  


export const metadata: Metadata = {
  title: "FutureForge",
  description: "This is a blog website for Innovation in Technology",
  icons: {
    icon: "/humo.png",  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased`}
      > 
        {children}
     <Footer/>
      </body>
    </html>
  );
}
