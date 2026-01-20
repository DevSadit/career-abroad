import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Parkinsans } from "next/font/google";
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
  description: "Your Global Journey Partner",
};

const parkinsans = Parkinsans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // regular and bold
  variable: "--font-parkinsans", // optional CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parkinsans.className} antialiased`}
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
