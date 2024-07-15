import { Inter } from "next/font/google";
import "../assets/styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Property-pulse",
  description: "find your dream rental property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}
