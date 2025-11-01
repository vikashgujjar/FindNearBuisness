"use client"
import React, { useState } from "react";

export default function HelpSupport() {
    const [HelpSupport,setHelpSupport]=useState(false)
  return (
    <div className="hidden md:block">
      <button onClick={()=>setHelpSupport(true)} className="btn-ser-need-ani z-[999]">Help & Support</button>

      <div className={`fixed ${HelpSupport?"right-0 md:right-4":"-right-96"}   duration-300 bottom-4 z-[100] bg-white shadow-2xl rounded-lg  w-full max-w-sm`}>
       <div className="px-6 pt-4 lg:pt-6">
         {/* Close Button */}
         <button onClick={()=>setHelpSupport(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M12 10.586L16.95 5.637l1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.637 7.05 7.05 5.637 12 10.586z"></path>
          </svg>
        </button>

        {/* Title */}
        <div className="mb-2 lg:mb-4">
          <h3 className="text-sm text-center font-semibold text-gray-600">
            What service do you need?{" "}
            <span className="block text-lg font-bold text-gray-700">
              Future Touch will help you
            </span>
          </h3>
        </div>

        {/* Form */}
        <form className="space-y-2 lg:space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="enquiry_name"
              placeholder="Enter name*"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="enquiry_email"
              placeholder="Enter email*"
              required
              pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
              title="Invalid email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Input */}
          <div>
            <input
              type="text"
              name="enquiry_mobile"
              placeholder="Enter mobile number *"
              required
              pattern="[7-9]{1}[0-9]{9}"
              title="Phone number starting with 7-9 and remaining 9 digits with 0-9"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Select */}
          <div>
            <select
              name="enquiry_category"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="19">Wedding halls</option>
              <option value="18">Hotel & Food</option>
              <option value="17">Pet shop</option>
              <option value="16">Digital Products</option>
              <option value="15">Spa and Facial</option>
              <option value="10">Real Estate</option>
              <option value="8">Sports</option>
              <option value="7">Education</option>
              <option value="6">Electricals</option>
              <option value="5">Automobiles</option>
              <option value="3">Transportation</option>
              <option value="2">Hospitals</option>
              <option value="1">Hotels And Resorts</option>
            </select>
          </div>

          {/* Message Input */}
          <div>
            <textarea
              name="enquiry_message"
              placeholder="Enter your query or message"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full font-bold bg-[#fb5a4e] text-white py-2 px-4 rounded-md hover:opacity-90 transition"
          >
            Submit Requirements
          </button>

          
        </form>
       </div>
        <div className="help-support-img"></div>
      </div>
    </div>
  );
}
