import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HelpSupport from "./Component/HelpSupport";
import FixedFooterLinks from "./Component/FixedFooterLinks";
import Providers from "./Providers";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Find Businesses Near You on Local Search Engine - Future Touch",
  description: "Innovating technology solutions for a brighter future",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <FixedFooterLinks />
          <HelpSupport />
        </Providers>
      </body>
    </html>
  );
}
