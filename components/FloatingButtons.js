import React from "react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
    
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/94713675980"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="WhatsApp"
      >
        <img
          src="/Img/WhatsApp.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </a>

      {/* Telegram Button */}
      <a
        href="https://t.me/premisupport"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        aria-label="Telegram"
      >
        <img
          src="/Img/telegram.png"
          alt="Telegram"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
};

export default FloatingButtons;
