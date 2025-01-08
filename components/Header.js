"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between fixed top-0 left-0 w-full z-50 p-4 bg-background text-foreground shadow-md">
      {/* Left Section: Title */}
      <div className="text-xl font-bold ml-4">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <img src="/Img/logo.png" alt="Logo" className="w-6 h-6 mr-2" />
            <span>The Premium Support</span>
          </a>
        </Link>
      </div>



      {/* Center Section: Navigation Links */}
      <nav className="flex space-x-8 text-lg font-semibold">
        <a href="#about" className="hover:text-gray-500 transition-colors">
          About
        </a>
        <a href="#AllProducts" className="hover:text-yellow-300 transition-colors">
          All Products
        </a>
        <a href="#faq" className="hover:text-gray-500 transition-colors">
          FAQs
        </a>
        <a href="#contact" className="hover:text-yellow-300 transition-colors">
          Contact
        </a>
      </nav>

      {/* Right Section: Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-gray-200 shadow-md mr-4 hover:scale-110 transition-transform"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}
