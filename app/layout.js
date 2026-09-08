import {
  Geist,
  Geist_Mono,
  Noto_Serif_Bengali,
  Parkinsans,
} from "next/font/google";
import "./globals.css";
import Navbar from "./_shared/Navbar";
import Footer from "./_shared/Footer";
import ClientComponents from "./_components/ClientComponents";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Career Abroad Mentor",
  description: "Your Global Journey Partner — Guidance for studying in Europe from Bangladesh.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Career Abroad Mentor",
    description: "Your Global Journey Partner — Guidance for studying in Europe from Bangladesh.",
    url: "https://ahsansuny.com",
    siteName: "Career Abroad Mentor",
    images: [
      {
        url: "https://ahsansuny.com/unnamed.png",
        width: 800,
        height: 800,
        alt: "Career Abroad Mentor",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Career Abroad Mentor",
    description: "Your Global Journey Partner — Guidance for studying in Europe from Bangladesh.",
    images: ["https://ahsansuny.com/unnamed.png"],
  },
};

const parkinsans = Parkinsans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // regular and bold
  variable: "--font-parkinsans", // optional CSS variable
  adjustFontFallback: false,
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bn",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parkinsans.variable} ${parkinsans.className} ${notoSerifBengali.variable} antialiased`}
      >
        <Navbar />
        <main>
          <ClientComponents>{children}</ClientComponents>
        </main>
        <Footer />

        <GoogleAnalytics gaId="G-ZCEWQN2PE6" />
      </body>
    </html>
  );
}
