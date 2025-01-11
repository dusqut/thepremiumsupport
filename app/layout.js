import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';
import Header from "../components/Header";
import Link from "next/link";
import FloatingButtons from "@/components/FloatingButtons";

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
  description: "Most Reliable Digital Service Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
