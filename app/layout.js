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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CYCGHCYPNM"></Script>
        <Script id="google-analytics">
          {
            `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());  
              gtag('config', 'G-CYCGHCYPNM');`
          }
        </Script>

        <Script>
          {
            `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1791479201615748');
          fbq('track', 'PageView');`
          }
          </Script>
          <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1791479201615748&ev=PageView&noscript=1"
          /></noscript>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
            <div className="wrapper">
              {children}
            </div>
            <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
