import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/component/shared/Cursor";
import BackToTop from "@/component/shared/BackToTop";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "Rabby Khan - MERN Stack Developer",
  description: "Rabby Khan - MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className={`${inter.className} bg-accent`}>
        <Cursor />
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
