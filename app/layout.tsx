import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

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
const syneV = localFont({
  src: "./fonts/SyneV.woff",
  variable: "--font-syne-v",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio Thomas GUERIN",
  description: "Version Next JS de mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${syneV.variable}`}>
        {children}
      </body>
    </html>
  );
}
