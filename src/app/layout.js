import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HelpSupport from "./Component/HelpSupport";
import FixedFooterLinks from "./Component/FixedFooterLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Find Businesses Near You on Local Search Engine - Future Touch",
  description: "Innovating technology solutions for a brighter future",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <FixedFooterLinks/>
        <HelpSupport/>
      </body>
    </html>
  );
}
