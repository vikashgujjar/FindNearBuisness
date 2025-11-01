"use client";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";

export default function LocalSearch() {
  const [focus, setFocus] = useState(false);

  return (
    <div className="px-4 sm:px-6 md:px-10 xl:px-32 py-8 md:py-14 my-6 lg:mt-16 bg-[#F0F9FF] flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <div className="flex items-center gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left justify-center lg:justify-start">
          <img
            src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/growtxt.svg"
            alt="Grow Your Business"
            className="w-24 sm:w-28 md:w-32"
          />
          <h1 className="text-gray-800">Your Business</h1>
        </div>

        <p className="text-center lg:text-left text-base sm:text-lg md:text-xl font-semibold text-gray-700 px-2 sm:px-0">
          Advertise with <span className="text-blue-600">FutureTouch</span> –
          Your Gateway to Digital Success!
        </p>

        {/* Phone Input Form */}
        <form className="relative bg-white rounded-xl shadow-md p-3 pr-4 flex items-center gap-3 w-full max-w-lg mx-auto lg:mx-0">
          {/* Country Code */}
          <div className="flex items-center gap-1 text-gray-700 font-medium text-sm sm:text-base">
            <span
              className="w-5 h-5 bg-cover bg-center rounded-sm"
              style={{ backgroundImage: "url('/india-flag.png')" }}
            />
            <span>+91</span>
          </div>

          {/* Input Field with Floating Label */}
          <div className="relative flex-1">
            <input
              aria-label="Enter Mobile Number"
              className="w-full pl-2 pr-1 pt-4 pb-1 text-sm sm:text-base text-gray-800 outline-none border-none"
              inputMode="numeric"
              pattern="[0-9]*"
              name="mobile"
              autoComplete="off"
              maxLength="10"
              onFocus={() => setFocus(true)}
              onBlur={(e) => setFocus(e.target.value !== "")}
              required
            />
            <label
              className={`absolute left-2 transition-all duration-200 ${
                focus
                  ? "-top-2 text-xs text-blue-600 bg-white px-1 font-medium"
                  : "top-2.5 text-sm text-gray-500"
              }`}
            >
              Enter Mobile No
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm md:text-base font-medium px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap"
          >
            Get Started <FaArrowRightLong className="text-sm sm:text-base" />
          </button>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/img/Advertise/4.svg"
          alt="Local Business"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
