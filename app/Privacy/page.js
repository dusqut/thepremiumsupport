import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-100 text-800 px-8 py-16">
      <div className="max-w-4xl mx-auto shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">Privacy Policy</h1>
        <p className="text-lg mb-4">
          Your privacy is important to us. This privacy policy explains how we collect, use, and safeguard your information.<br></br>
        </p>

        <h2 className="text-2xl font-semibold mb-2">Information Collection</h2>
        <p className="mb-4">
          We collect information that you provide to us when signing up, purchasing a product, or contacting us through our website. This may include your name, email address, phone number, and payment details.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Use of Information</h2>
        <p className="mb-4">
          The information we collect is used to process transactions, improve our services, and communicate updates about our products. We do not sell or share your personal data with third parties.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies to enhance your experience on our website. Cookies are small text files stored on your device that help us understand how you interact with our content.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information. If you have any concerns about your privacy, feel free to contact us.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Changes to Policy</h2>
        <p className="mb-4">
          We reserve the right to update this privacy policy at any time. Please review this page periodically for any changes.
        </p>

        <p className="text-lg mt-6">
          If you have any questions about our privacy practices, please{" "}
          <a
            href="/#contact"
            className="text-blue-500 underline hover:text-blue-700"
          >
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default page