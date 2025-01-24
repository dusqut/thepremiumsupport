"use client";

import React, { useState } from "react";
import Link from 'next/link';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I see feedback from your previous customers?",
      textBefore: "You click ",
      linkText: "Here",
      linkUrl: "https://www.facebook.com/ThePremiumSupport/",
      textAfter: " to see reviews on our Facebook page.",
    },
    {
      question: "What are LinkedIn Premium benefits and Types?",
      textBefore: "click ",
      linkText: "Here",
      linkUrl: "https://thepremiumsupport.com/LinkedIn",
      textAfter: " to see information.",
    },
    {
      question: "How can I get in touch?",
      answer:
        "You can ask to join our Telegram or WhatsApp group that notifies instant updates. You can follow our official Facebook page, Instagram page, and website.",
    },
    {
      question: "How can I buy your services?",
      answer:
        "Please contact us first and we will request your information like email address to provide the service.",
    },
    {
      question: "What guarantee do I have?",
      answer:
        "We provide the subscription with a warranty, and the user should not violate any policies or deactivate the subscription manually. The subscription can be verified for some platforms, while some don't.",
    },
    {
      question: "Can I pay in installments?",
      answer: "No. But very few plans we can offer",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-6" id="faq">
      <h2 className="text-4xl font-bold mb-4">
        Frequently Asked <span className="text-purple-500">Questions</span>
      </h2>
      <p className="text-gray-400 mb-8">
        We know you have some questions in mind, we have tried to list the most
        important ones.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="cursor-pointer border border-gray-700 rounded-lg px-6 py-4 hover:bg-gray-400"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-gray-500">
                {openIndex === index ? "✕" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-4 text-gray-800">
                {faq.linkUrl ? (
                  <span>
                    {faq.textBefore}
                    <a
                      href={faq.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 underline"
                    >
                      {faq.linkText}
                    </a>
                    {faq.textAfter}
                  </span>
                ) : (
                  faq.answer
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
