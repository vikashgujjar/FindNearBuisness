"use client";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


export default function HaveAnAccount({ setHaveAccountCheck }) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
      <div className="w-full max-w-md lg:max-w-lg bg-white rounded-xl shadow-xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setHaveAccountCheck(false)}
          className="absolute right-4 top-4 text-xl text-gray-600 hover:text-black transition"
          aria-label="Close Login Modal"
        >
          <RxCross1 />
        </button>

        <div className="p-6">
          {/* Logo and Heading */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/img/logo/logo.webp"
              alt="Logo"
              className="w-[40%] object-contain"
            />
            <div>
              <h6 className="text-lg font-semibold text-gray-800">Welcome</h6>
              <p className="text-sm text-gray-500">Login for a seamless experience</p>
            </div>
          </div>

          {/* Mobile Number Input */}
          <form className="border border-blue-200 text-black bg-white rounded-lg p-3 shadow-sm flex items-center gap-3">
          <PhoneInput
              placeholder="Enter mobile number"

              country={'in'}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: '100%' }}
              containerStyle={{ flex: 1 }}

            />

          </form>



          <div className="flex  justify-center items-start gap-2 mt-4 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" id="terms" />
            <label htmlFor="terms" className="cursor-pointer">
              <p>I agree to the terms and conditions</p>
              <p className="text-xs text-gray-400">T&C's · Privacy Policy</p>
            </label>
          </div>

          <div className="mt-6 space-y-3">
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded-lg transition text-sm lg:text-base"
            >
              Login With OTP
            </button>
            <button
              type="button"
              className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition text-sm"
              onClick={() => setHaveAccountCheck(false)}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
