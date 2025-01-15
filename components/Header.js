"use client";

// Header.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Close the menu on navigation
  const handleMenuClick = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
        
        <Head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1791479201615748'); 
              fbq('track', 'PageView');
            `,
          }}
        ></script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="/Img/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          <Link href="/" className="text-xl font-bold dark:text-white">
            The Premium Support
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">About</Link>
          <Link href="/#AllProducts" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">All Products</Link>
          <Link href="/#faq" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">FAQs</Link>
          <Link href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">Contact</Link>
        </nav>

        {/* Right Section: Dark Mode Toggle */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-gray-200 shadow-md mr-4 hover:scale-110 transition-transform"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
          >
            {isMenuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500" onClick={handleMenuClick}>
              About
            </Link>
            <Link href="/#AllProducts" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500" onClick={handleMenuClick}>
              All Products
            </Link>
            <Link href="/#faq" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500" onClick={handleMenuClick}>
              FAQs
            </Link>
            <Link href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500" onClick={handleMenuClick}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
