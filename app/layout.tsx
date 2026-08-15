import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahmoud | Front End Developer",
  description:
    "Mahmoud Alaa — Frontend Developer specializing in React, Next.js, and TypeScript, focused on building modern and responsive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full font-inter">
        <div className="top-fade"></div>
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <ToastContainer
          position="bottom-right"
          toastStyle={{ width: "min(320px, 80vw)" }}
        />
      </body>
    </html>
  );
}
