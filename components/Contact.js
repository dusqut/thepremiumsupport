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
            <div className="shadow-md p-4 rounded-lg flex items-center justify-center w-full md:w-1/3">
            <img src="/Img/WhatsApp.png" alt="WhatsApp" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium">WhatsApp</p>
            </div>

            {/* Email Button */}
            <div className="shadow-md p-4 rounded-lg flex items-center justify-center w-full md:w-1/3">
            <img src="/Img/email.png" alt="Email" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium">E-Mail</p>
            </div>

            {/* Messenger Button */}
            <div className="shadow-md p-4 rounded-lg flex items-center justify-center w-full md:w-1/3">
            <img src="/Img/msg.png" alt="Messenger" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium">Messenger</p>
            </div>

            {/* Telegram Button */}
            <div className="shadow-md p-4 rounded-lg flex items-center justify-center w-full md:w-1/3">
            <img src="/Img/telegram.png" alt="Messenger" className="w-8 h-8 mr-2" />
            <p className="text-lg font-medium">Telegram</p>
            </div>
        </div>
</div>


  )
}

export default Contact