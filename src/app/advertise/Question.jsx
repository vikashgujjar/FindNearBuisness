"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Question() {
  const faq = [
    {
      question: "How do I get started with Future Touch Ads?",
      answer:
        "To get started with Future Touch Ads, simply sign up on our platform and create your ad campaign. Our user-friendly interface will guide you through the process.",
    },
    {
      question: "What benefits do Future Touch Ads offer?",
      answer:
        "Future Touch Ads provide enhanced visibility, targeted audience reach, and detailed analytics to optimize your marketing campaigns efficiently.",
    },
    {
      question: "Can I track my ad performance?",
      answer:
        "Yes! Future Touch Ads offer real-time analytics, helping you monitor engagement, clicks, and conversions to improve your ad strategies.",
    },
    {
      question: "Are Future Touch Ads suitable for small businesses?",
      answer:
        "Absolutely! Future Touch Ads are designed to support businesses of all sizes, offering scalable solutions to maximize marketing efforts.",
    },
    {
      question: "What types of ads can I create with Future Touch Ads?",
      answer:
        "You can create various ad formats, including display ads, video ads, and targeted search ads to reach the right audience effectively.",
    },
    {
      question: "How much does it cost to run Future Touch Ads?",
      answer:
        "The cost varies based on your budget and ad strategy. You can set daily limits and bid amounts to control your expenses.",
    },
    {
      question: "Is there customer support available for Future Touch Ads?",
      answer:
        "Yes! Our support team is available 24/7 to assist you with any queries or issues related to your ad campaigns.",
    },
    {
      question: "Can I edit or pause my ad campaigns anytime?",
      answer:
        "Yes! You have full control over your campaigns, allowing you to edit, pause, or restart ads as needed.",
    },
    {
      question: "Do Future Touch Ads work on mobile devices?",
      answer:
        "Yes! Our ads are optimized for all devices, ensuring a seamless experience for mobile and desktop users alike.",
    },
    {
      question: "How do I target the right audience with Future Touch Ads?",
      answer:
        "You can define your audience based on demographics, interests, and behaviors to ensure your ads reach the right people.",
    },
    {
      question: "What payment methods do you accept for Future Touch Ads?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and bank transfers, for easy and secure transactions.",
    },
    {
      question: "Can I see a preview of my ad before publishing?",
      answer:
        "Yes! Future Touch Ads provides a live preview feature, allowing you to review your ad before it goes live.",
    },
    {
      question: "How long does it take for my ads to start running?",
      answer:
        "Once approved, your ads typically start running within a few hours, ensuring quick campaign execution.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleHandler = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="FAQs" className="px-4 sm:px-6 md:px-12 xl:px-32 py-8 sm:py-12">
      <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-center md:text-left">
        Got a question?
      </h2>

      <div className="mt-6 space-y-4">
        {faq.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 hover:border-blue-600 rounded-xl transition-all bg-white shadow-sm cursor-pointer"
              onClick={() => toggleHandler(index)}
              aria-expanded={isActive}
            >
              <div className="flex justify-between items-center p-4 sm:p-5">
                <h3 className="font-semibold text-base sm:text-lg md:text-xl pr-4 text-gray-800">
                  {item.question}
                </h3>
                <div
                  className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-blue-100 flex items-center justify-center transform transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDown className="text-lg sm:text-xl text-blue-700" />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out px-4 sm:px-5 text-gray-600 text-sm sm:text-base ${
                  isActive ? "max-h-[400px] pb-4" : "max-h-0"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
