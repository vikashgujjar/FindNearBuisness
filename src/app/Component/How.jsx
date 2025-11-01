"use client"
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function How() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "How to create new listing?", answer: "You can create a new listing by navigating to the 'Create Listing' page and filling out the required details." },
    { question: "How to change free listing to premium listing?", answer: "Upgrade your listing by selecting the premium package in your account settings." },
    { question: "How can I change my user type?", answer: "Go to your profile settings and select the appropriate user type." },
    { question: "How to make Payment?", answer: "Payments can be made using credit cards, PayPal, or other available payment methods." },
    { question: "How to create Ads?", answer: "Ads can be created from the Ads section in your dashboard." },
    { question: "What is user type?", answer: "User types include General User and Service Provider, each with different access levels." },
    { question: "How to contact support team?", answer: "You can reach our support team through the contact form or support email available on the website." },
  ];
  return (
    <>
      <div className={`bg-[url('/img/sign/sign1.webp')]    relative`}>
        {/* <div className="absolute inset-0  " /> */}
        <div className=" relative h-full  px-5 sm:px-8 flex flex-col py-10 xl:py-16 bg-[rgba(0,0,0,0.71)] items-center justify-center ">
            <div className="max-w-2xl mx-auto bg-white rounded-md shadow-lg">
            <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

              <div className="bg-teal-400 font-bold rounded-md text-white text-xs  tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
                How
              </div>

              <div className="space-y-6">
              <div className=" mx-auto border p-6 bg-white shadow-lg rounded-lg">
     <div className="text-center">
     <h4 className="text-xl font-semibold mb-4">How</h4>
      <p className="mb-6 text-gray-600">
        Here you can learn about this "Directory Finder Website" and find solutions for your doubts.
      </p>
     </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <div
              className="flex justify-between items-center cursor-pointer py-2 text-lg font-medium"
              onClick={() => toggleCollapse(index)}
            >
              {faq.question}
              <svg
                className={`w-5 h-5 transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16L6 10H18L12 16Z" />
              </svg>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
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
    </>
  );
}
