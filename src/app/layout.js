import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Co Hat",
  description: "Co Hat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
