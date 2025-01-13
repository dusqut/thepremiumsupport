"use client";
import React, { useState } from "react";
import Link from "next/link";

const PaymentMethods = () => {
  const [showCryptoWallet, setShowCryptoWallet] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0xA245683C7A75a398Ef2e41c630807F9ada78c6cF");
    alert("Wallet address copied to clipboard!");
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center py-16 ">
      {/* Left: Single Circular Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src="/Img/paymentMethods.png"
          alt="Payment Methods Icons"
          className="w-[80%] max-w-lg"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 text-center md:text-left px-4">
        <h2 className="text-3xl font-bold">
        Payment <span className="text-purple-500">Methods</span>
        </h2>
        <p className="mb-6 mt-4">
          We accept your payment in any of the following categories. When you
          transfer, you may mention your name and the platform you want to buy in
          the remark section.
        </p>
        <ul>
          <li className="mb-2 flex items-center">
            <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
            Online Bank transfers
          </li>
          
          <button
          onClick={() => setShowQR(!showQR)}
          className="w-half bg-yellow-500 bg-opacity-30 hover:bg-yellow-500 font-semibold py-2 px-4 rounded-lg shadow-lg transition-all"
        >
          UPI (India) / China UnionPay 
        </button>
        {showQR && (
          <div className="mt-4 bg-white p-2 rounded-lg shadow-lg text-gray-900">
            <p className="font-semibold">
              Scan for Pay
            </p>
            <img
              src="/Img/qr.jpg"
              alt="QR COde"
              className="w-32 h-32 mx-auto"
            />
          </div>

        )}

          
          <li className="mb-2 flex items-center">
            <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
            Wise
          </li>
          <li className="mb-2 flex items-center">
            <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
            Payoneer
          </li>
          <li className="mb-2 flex items-center">
            <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
            Skrill
          </li>
        </ul>
        <button
          onClick={() => setShowCryptoWallet(!showCryptoWallet)}
          className="w-half bg-yellow-500 bg-opacity-30 hover:bg-yellow-600 font-semibold py-2 px-4 rounded-lg shadow-lg transition-all"
        >
          Crypto Payments
        </button>
        {showCryptoWallet && (
          <div className="mt-4 bg-white p-4 rounded-lg shadow-lg text-gray-900">
            <p className="font-semibold">
              Pay any EVM-compatible coin or token like USDT, USDC, ETH, AVAX,
              OP & BNB.
            </p>
            <p className="mt-2">
              <span className="font-bold">Wallet Address:</span>{" "}
              <span className="text-gray-700">0xA245683C7A75a398Ef2e41c630807F9ada78c6cF</span>
            </p>
            <button
              onClick={handleCopy}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition-all"
            >
              Copy Wallet Address
            </button>
          </div>

        )}

        
        <div className="mt-6">
          <Link href="https://wa.me/94713675980">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg text-lg hover:from-yellow-600 hover:to-yellow-400 transition duration-300">
              Contact Now for Shop →
            </button>
          </Link>
        </div>
      </div>
    </div>

    </div>
  );
};

export default PaymentMethods;