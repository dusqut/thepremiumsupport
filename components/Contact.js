import React from 'react'

function Contact() {
  return (
    <div className="rounded-lg shadow-lg p-8 mt-12"  id="contact">
        <h2 className="text-3xl font-bold text-center mb-4">
            Contact Us for <span className="text-blue-600">Offer Delivery</span>
        </h2>
        <p className="text-600 text-center">
            You can contact us from any of the following channels and the offer will be delivered privately once paid.<br/> 
            <span className="text-red-500 font-bold"> Select One and Click on it.</span>
        </p>
        <div className="flex justify-center space-x-14 mt-8">
            {/* WhatsApp */}
            <div className="flex flex-col items-center bg-100 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
            <a href="https://wa.me/94713675980" target="_blank">
                <img
                    src="/Img/WhatsApp.png"
                    alt="WhatsApp"
                    className="w-12 h-12 mb-4"
                />
                <p className="text-lg font-semibold">WhatsApp</p>
            </a>
            
            </div>

            {/* Email */}
            <div className="flex flex-col items-center bg-100 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
                <a href="mailto:premiumsuppores@outlook.com" target="_blank">
                    <img
                        src="/Img/email.png"
                        alt="Email"
                        className="w-12 h-12 mb-4"
                    />
                    <p className="text-lg font-semibold">E-Mail</p>
                </a>
            </div>

            {/* Messenger */}
            <div className="flex flex-col items-center bg-100 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
                <a href="https://m.me/ThePremiumSupport/" target="_blank">
                    <img
                    src="/Img/msg.png"
                    alt="Messenger"
                    className="w-12 h-12 mb-4"
                    />
                    <p className="text-lg font-semibold">Messenger</p>
                </a>
            </div>
        </div>
        </div>

  )
}

export default Contact