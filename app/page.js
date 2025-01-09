"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Image from 'next/image'
import Link from "next/link";
import ProductList from "../components/ProductList";
import PaymentMethods from "@/components/PaymentMethods";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import About from "@/components/About";
import Footer from "@/components/Footer";



export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
   
    <main className="min-h-screen bg-custom-gradient text-foreground  items-center px-12 mt-0">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-8 py-16">

      <div className="w-full lg:w-1/2">
        <h1 className="text-6xl font-extrabold leading-tight">
          Premium <br />
          <span className="text-indigo-400">Support</span> <br />
          Subscriptions <br />
          <span className="text-indigo-600">Offers</span>
        </h1>
        <p className="text-lg mt-6">
          We facilitate the enhancement of your account to Premium or Pro
          versions <br/> through exclusive coupon codes, voucher links, and
          invitation offers.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link href="https://wa.me/94713675980">
            <button className="bg-indigo-600 hover:bg-yellow-500 text-white font-medium py-3 px-6 rounded-lg">
              Contact Us
            </button>
          </Link>
          
          <Link href="#AllProducts">
            <button className="text-indigo-400 hover:text-yellow-500 font-medium py-3 px-6 flex items-center space-x-2">
              <span>Explore All Products</span>
              <span className="text-lg">→</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-end">
        <img
          src="/Img/girl.png"
          alt="Girl"
          className="relative -translate-x-8"
        />
      </div>
      </section>
      
      {/* Divider */}
      <div className="h-8 bg-transparent"></div>
      
      {/* New Section: Best Selling Offers */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Best Selling <span className="text-purple-500">Offers</span>
          </h2>
          <p className="text-yellow-450 mt-2"
            style={{textShadow: "1px 1px 2px rgba(0, 0, 0.1, 0.1)"}}
          >
            The activation method is unique for each product
          </p>

        </div>
      </section>

      <section>
        <ProductList />
      </section>
      <div className="flex justify-center mt-6">
        <Link href="https://wa.me/94713675980">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold rounded-full shadow-lg flex items-center hover:from-green-600 hover:to-green-400 transition duration-300">
            Confirm Your Order via WhatsApp
            <span className="ml-2">→</span>
          </button>
        </Link>
      </div>
      <PaymentMethods />
      <Contact/>
      <Faq/>
      <About/>
      <Footer/>
        
    </main>
  );
}



