import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_shared/Navbar";
import Footer from "./_shared/Footer";
import ClientComponents from "./_components/ClientComponents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Career Abroad",
  description: "Its time to dream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>
          <ClientComponents>{children}</ClientComponents>
        </main>
        <Footer />
      </body>
    </html>
  );
}
