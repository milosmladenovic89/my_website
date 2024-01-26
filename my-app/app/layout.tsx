
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.module.css";
import NavBar from "./components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milos Mladenovic",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
