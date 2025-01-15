import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';
import Header from "../components/Header";
import Link from "next/link";
import FloatingButtons from "@/components/FloatingButtons";
import Head from "next/head";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Support",
  deScription: "Most Reliable Digital Service Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CYCGHCYPNM"></Script>
            <Script id="google-analytics">
              {
                 `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());  
                  gtag('config', 'G-CYCGHCYPNM');`
              }
            </Script>
          </Head>
            <div className="wrapper">
              {children}
            </div>
            <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
