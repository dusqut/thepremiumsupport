"use client";

import React, { useState } from "react";

const Contact = () => {
  const [showWeChat, setShowWeChat] = useState(false);

  const handleWeChatClick = () => {
    setShowWeChat((prev) => !prev);
  };

  return (
    <div className="contact-section">
      <h2 className="text-center text-2xl font-bold mb-6">Contact Us on Any Media</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="grid grid-cols-2 gap-4">

          {/* WhatsApp Button */}
          <button
            onClick={() => window.open("https://wa.me/94713675980", "_blank")}
            className="flex items-center px-4 py-2 rounded-lg bg-green-500 text-white shadow-md hover:bg-green-600"
          >
            <img
                src="/Img/WhatsApp.png"
                alt="WhatsApp icon"
                className="w-12 h-12 mx-auto"
              />
            WhatsApp
          </button>

          {/* Email Button */}
          <button
            onClick={() => (window.location.href = "mailto:premiumsuppores@outlook.com")}
            className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600"
          >
            <img
                src="/Img/email.png"
                alt="email icon"
                className="w-12 h-12 mx-auto"
              />
            Email
          </button>

          {/* Messenger Button */}
          <button
            onClick={() => (window.location.href = "https://m.me/ThePremiumSupport")}
            className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600"
          >
            <img
                src="/Img/msg.png"
                alt="Messenger icon"
                className="w-12 h-12 mx-auto"
              />
            Messenger
          </button>

          {/* Instagram Button */}
          <button
            onClick={() => (window.location.href = "https://www.instagram.com/ThePremiumSupport/")}
            className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600"
          >
            <img
                src="/Img/Instagram.png"
                alt="Instagram icon"
                className="w-12 h-12 mx-auto"
              />
            Instagram
          </button>

          {/* Telegram Button */}
          <button
            onClick={() => (window.location.href = "https://t.me/dePremiumSupport")}
            className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600"
          >
            <img
                src="/Img/telegram.png"
                alt="telegram icon"
                className="w-12 h-12 mx-auto"
              />
              Telegram
          </button>

          {/* WeChat Button */}
          <button
            onClick={handleWeChatClick}
            className="flex items-center px-4 py-2 rounded-lg bg-teal-500 text-white shadow-md hover:bg-teal-600"
          >
            <img
                src="/Img/wechat.png"
                alt="wechat icon"
                className="w-12 h-12 mx-auto"
              />
            WeChat
          </button>

          {/* WeChat QR Code or ID Display */}
          {showWeChat && (
            <div className="mt-4 p-4 border rounded-lg bg-white shadow-lg text-center">
              <img
                src="/Img/wechatQR.jpg"
                alt="WeChat QR Code"
                className="w-32 h-32 mx-auto"
              />
              <p className="mt-4 text-sm text-gray-600">ID: wxid_m01wclyb2e6222</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
