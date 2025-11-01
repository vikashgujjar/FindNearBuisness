"use client";
import Link from "next/link";
import React, { useState } from "react";
import BusinessDirectory from "../Component/BuinessDirectory";
export default function page() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      question: "How to create new listing?",
      answer:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
    },
    {
      question: "How to change free listing to premium listing?",
      answer:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      list: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
    {
      question: "How can I change my user type?",
      answer:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      list: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
    {
      question: "How to make Payment?",
      answer:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      list: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
    {
      question: "How to create Ads?",
      answer:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      list: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
    {
      question: "What is user type?",
      answer:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      subAnswers: [
        {
          title: "General User",
          text: "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
        },
        {
          title: "Service provider",
          text: "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
        },
      ],
    },
    {
      question: "How to contact support team?",
      answer:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
    },
  ];
  return (
    <>
      <div className="bg-[url('/img/sign/sign1.webp')] h-screen bg-center">
        <div className="bg-[rgba(0,0,0,0.71)] h-full flex items-center">
          <div className="w-full lg:max-w-[40%] mx-auto bg-white h-auto rounded-md shadow-lg relative">
            <div className="lg:w-[90%] mx-auto h-2 bg-gradient-to-br from-[#4c7af1] to-[#7fccbb] mb-6 rounded" />

            <div className="bg-teal-400 rounded-md text-white w-fit text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-2 uppercase">
              Frequently Asked Questions
            </div>

            <div className="space-y-4 mt-10">
              <div className="text-center  px-4">
                <h5 className="text-xl md:text-2xl font-bold text-gray-800">
                  Frequently Asked Questions
                </h5>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  Here you can learn about this "Directory Finder Website" and
                  you can
                  <br />
                  find the solution for your doubts.
                </p>
              </div>

              <div className="p-8 ">
                <ul className="">
                  {faq.map((faq, index) => (
                    <li
                      key={index}
                      className="border list-none border-gray-200 py-4 px-4"
                    >
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleCollapse(index)}
                      >
                        <h4 className="text-lg md:text-xl font-semibold text-gray-700">
                          {faq.question}
                        </h4>
                        <svg
                          className={`transition-transform duration-300 ${
                            activeIndex === index ? "transform rotate-180" : ""
                          }`}
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1.5em"
                          width="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 16L6 10H18L12 16Z"></path>
                        </svg>
                      </div>
                      {activeIndex === index && (
                        <div className="mt-2 text-gray-600">
                          <p className="text-sm md:text-base">{faq.answer}</p>
                          {faq.list && (
                            <ol className="list-decimal pl-5 mt-2 space-y-1">
                              {faq.list.map((item, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="text-sm md:text-base"
                                >
                                  {item}
                                </li>
                              ))}
                            </ol>
                          )}
                          {faq.subAnswers && (
                            <div className="mt-4 space-y-2">
                              {faq.subAnswers.map((sub, subIndex) => (
                                <div key={subIndex}>
                                  <h5 className="font-semibold text-gray-800 text-sm md:text-base">
                                    {sub.title}
                                  </h5>
                                  <p className="text-sm md:text-base">
                                    {sub.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="w-full text-center text-lg mt-4">
                  <Link className="skip " href="/dashboard">
                    Go to User Dashboard &gt;&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BusinessDirectory />
    </>
  );
}
