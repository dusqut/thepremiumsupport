import React from 'react'
import Link from "next/link";

function PaymentMethods() {
  return (
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
      <li className="mb-2 flex items-center">
        <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
        Card Payments
      </li>
      <li className="mb-2 flex items-center">
        <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
        UPI
      </li>
      <li className="mb-2 flex items-center">
        <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
        Wise
      </li>
      <li className="mb-2 flex items-center">
        <span className="w-4 h-4 bg-blue-500 inline-block rounded-full mr-2"></span>
        Crypto Payments
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
    <div className="mt-6">
      <Link href="https://wa.me/94713675980">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg text-lg hover:from-yellow-600 hover:to-yellow-400 transition duration-300">
          Contact Now for Shop →
        </button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default PaymentMethods