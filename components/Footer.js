import React from "react";

const Footer = () => {
  return (
    <footer className="bg-100 text-700 py-8 border-t border-gray-300">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/Img/logo.png" alt="Premium Support Logo" className="w-8 h-8 mr-2" />
            <h3 className="text-lg font-bold">The Premium Support</h3>
          </div>
          <p className="text-sm">
            Premium Support was established in 2023 to provide discounts on various platforms. We provide reliable service with a service warranty.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/ThePremiumSupport/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-gray-500"></i>
            </a>
            <a href="https://instagram.com/ThePremiumSupport/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-gray-500"></i>
            </a>
            <a href="https://linkedin.com/ThePremiumSupport/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-gray-500"></i>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#AllProducts" className="hover:underline">
                All Products
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="/Terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/Privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        <p>Copyright 2025 &copy; Premium Support - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
