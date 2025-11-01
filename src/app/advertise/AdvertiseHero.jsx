"use client";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function AdvertiseHero() {
  const growBenefits = [
    { desc: "Rank Ahead of Your Competition" },
    { desc: "Find Ready to Buy Customers Instantly" },
    { desc: "Track Leads & Competition Trends" },
  ];

  const [focus, setFocus] = useState(false);

  return (
    <div className="px-5 md:px-8 xl:px-32 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <div className="p-4 sm:p-6 md:p-10 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto">
          {/* Heading */}
          <div className="flex gap-2 items-center font-bold text-2xl lg:text-4xl xl:text-5xl">
            <img
              src="/img/Advertise/grow.svg"
              alt="Grow"
              className="w-20 sm:w-24 md:w-32"
            />
            <h5 className="text-gray-800">Your Business</h5>
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mt-2">
            Advertise with <span className="text-blue-600">FutureTouch</span> –
            Your Gateway to Digital Success!
          </p>

          {/* Mobile Number Form */}
          <form className="relative flex items-center gap-2 mt-5 border rounded-lg p-2 sm:p-3 shadow-md bg-white flex-wrap sm:flex-nowrap">
            {/* Country Code */}
            <span className="flex items-center gap-1 text-gray-700 font-medium text-sm sm:text-base">
              <span
                className="w-5 h-5 bg-cover bg-center"
                style={{ backgroundImage: "url('/india-flag.png')" }}
              ></span>
              <span>+91</span>
            </span>

            {/* Input */}
            <input
              aria-label="Enter Mobile Number"
              aria-required="true"
              className="border-0 outline-none px-3 py-2 w-full text-gray-700 text-sm sm:text-base"
              inputMode="numeric"
              pattern="[0-9]*"
              name="mobile"
              autoComplete="off"
              maxLength="10"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              required
            />

            {/* Floating Label */}
            <span
              className={`absolute transition-all duration-300 ease-in-out pointer-events-none text-xs sm:text-sm ${
                focus
                  ? "left-16 sm:left-20 top-[-10px] bg-white px-1 text-blue-600 font-semibold"
                  : "left-16 sm:left-20 top-[50%] transform -translate-y-1/2 text-gray-400"
              }`}
            >
              Enter Mobile No
            </span>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-nowrap group flex items-center gap-2 rounded-md text-white font-semibold px-4 py-2 mt-3 sm:mt-0 w-full sm:w-auto justify-center"
            >
              <span>Get Started</span>
              <FaLongArrowAltRight className="text-lg mt-[2px] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-6 space-y-3">
            {growBenefits.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src="/img/Advertise/1.svg"
                  alt="Grow"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <p className="text-sm sm:text-base font-semibold text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 font-medium mt-5">
            By continuing, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Terms of Use
            </span>
            ,{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Privacy
            </span>
            , &{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Infringement Policy
            </span>
            .
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://images.businessnewsdaily.com/app/uploads/2016/05/06125310/hire-the-right-people.png"
          alt="Advertise Visual"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
