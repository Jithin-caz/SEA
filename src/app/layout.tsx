import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Space Engineers Association",
  description: "Official website of the Space Engineers Association(SEA)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="LYF1k84kAYUjyLYfeegK9AeVs8aV_jG_ZXNsP0osMdM" />
        <meta name="keywords" content="Space Engineers, Space Engineering, SEA, Space Engineers Association, Aerospace, Engineering" />
        <meta name="author" content="Space Engineers Association" />
        <meta property="og:title" content="Space Engineers Association" />
        <meta property="og:description" content="Official website of the Space Engineers Association (SEA)" />
        <meta property="og:image" content="https://www.spaceengineers.in/images/Logo/logo.png" />
        <meta property="og:url" content="https://www.spaceengineers.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.spaceengineers.in/" />
        <link rel="icon" href="/images/Logo/logo.ico" />
        <title>Space Engineers Association</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
