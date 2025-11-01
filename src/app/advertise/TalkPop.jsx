"use client";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
export default function PopUpForm({ setTalkPop }) {
  const [focus, setFocus] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  

  return (
    <div className="fixed inset-0 bg-black/50 z-20 flex justify-center items-center px-4">
      <div className="w-full max-w-md lg:max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-full h-20 bg-sky-100 flex justify-end items-center px-4">
          <button onClick={() => setTalkPop(false)} className="text-xl text-gray-700">
            <RxCross1 />
          </button>
        </div>

        <div className="px-6 flex flex-col items-center gap-4 -mt-14 pb-6">
          <img
            src="https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fakam.cdn.jdmagicbox.com%2Fimages%2Ficontent%2Flistingbusiness%2Fagent.png&w=256&q=75"
            alt="talk to us"
            className="w-20 lg:w-32"
          />

          <p className="text-sm lg:text-base text-gray-700 text-center">
            Ms. Neha will assist you on an initial call{" "}
            <strong className="text-black font-medium">to help select the right plan for your business.</strong>
          </p>

          <form className="border-2 border-blue-200 bg-white rounded-lg shadow p-3 flex items-center gap-3 w-full">
           
            <div className="relative flex-1">
            
              <PhoneInput
              country={'in'}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: '100%' }}
              containerStyle={{ flex: 1 }}
            />

            </div>

            <button
              type="submit"
              className="bg-blue-600 group  hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2"
            >
              Call Now <FaArrowRightLong className="text-base group-hover:translate-x-1 duration-200 transition-transform" />
            </button>
          </form>

          <hr className="w-full border-gray-200" />

          <p className="text-sm lg:text-base text-gray-700 text-center">
            Get a voice call with our advisor now —{" "}
            <span className="font-semibold text-black">let us answer your questions instantly.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
