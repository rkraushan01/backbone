
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PointerZone",
  description: "Trust of students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        
        {/* <div className="relative w-full flex items-center justify-center ">
          <Navbar/>
        </div> */}
        <Navbar2 />
       
        {children}
        
        </body>
    </html>
  );
}
