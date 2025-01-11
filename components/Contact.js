import React from 'react'

function Contact() {
  return (
    <div className="container mx-auto py-8">
        <h2 className="text-center text-xl font-bold mb-4">Contact Us for Offer Delivery</h2>
        <p className="text-center mb-6">
            You can contact us from any of the following channels, and the offer will be delivered privately once paid.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* WhatsApp Button */}
            <a
            href="https://wa.me/94713675980?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md p-4 rounded-lg flex items-center justify-center w-full md:w-1/3 hover:shadow-lg transition-shadow"
            >
            <img src="/Img/WhatsApp.png" alt="WhatsApp" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium">WhatsApp</p>
            </a>

            {/* Email Button */}
            <a
            href="mailto:premiumsuppores@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md p-4 rounded-lg flex items-center justify-center w-full md:w-1/3 hover:shadow-lg transition-shadow"
            >
            <img src="/Img/email.png" alt="Email" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium">E-Mail</p>
            </a>

            {/* Messenger Button */}
            <a
            href="https://m.me/ThePremiumSupport"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md p-4 rounded-lg flex items-center justify-center w-full md:w-1/3 hover:shadow-lg transition-shadow"
            >
            <img src="/Img/msg.png" alt="Messenger" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium">Messenger</p>
            </a>

            {/* Telegram Button */}
            <a
            href="https://t.me/dePremiumSupport"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md p-4 rounded-lg flex items-center justify-center w-full md:w-1/3 hover:shadow-lg transition-shadow"
            >
            <img src="/Img/telegram.png" alt="Messenger" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium">Telegram</p>
            </a>
        </div>
        </div>



  )
}

export default Contact