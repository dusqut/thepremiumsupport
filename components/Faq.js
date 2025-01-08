"use client";

import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I see feedback from your previous customers?",
      answer:
        "You click Here to see reviews on our Facebook page.",
      linkText: "Here",
      linkUrl: "https://www.facebook.com/ThePremiumSupport/",
    },
    {
      question: "How can I get in touch?",
      answer:
        "You can ask to join our Telegram group that notifies instant updates. You can follow our official Facebook page, Instagram page, and website.",
    },
    {
      question: "Do you have any discounts?",
      answer:
        "Yes, discounted prices are mentioned below for each product. Please note that prices change from time to time.",
    },
    {
      question: "What guarantee do I have?",
      answer:
        "We provide the subscription with a warranty, and the user should not violate any policies or deactivate the subscription manually. The subscription can be verified for some platforms, while some don't.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "No. But we can provide installments for some platforms like ChatGPT 4, Netflix, etc.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-900 py-12 px-8" id="faq">
      <h2 className="text-4xl font-bold mb-4">
        Frequently Asked <span className="text-purple-500">Questions</span>
      </h2>
      <p className="text-400 mb-8">
        We know you have some questions in mind, we have tried to list the most important ones.
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
                {faq.answer.includes("Here") ? (
                  <span>
                    {faq.answer.split("Here")[0]}
                    <a
                      href={faq.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 underline"
                    >
                      {faq.linkText}
                    </a>
                    {faq.answer.split("Here")[1]}
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
