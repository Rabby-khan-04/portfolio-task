import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/component/shared/BackToTop";
import Cursor from "@/component/shared/Cursor";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "Rabby Khan - MERN Stack Developer",
  description: "Rabby Khan - MERN Stack Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-accent`}>
        <Cursor />
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
