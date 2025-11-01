import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function Sucesss() {
  return (
    <div className="h-full">
      <div className=" max-w-lg mx-auto bg-white rounded-md shadow-lg ">
        <div className="lg:w-[90%] mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

        <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
     Step 6
   </div>

        <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
          <h3 className="text-center font-bold text-2xl md:text-3xl text-gray-800">Success</h3>

          <div className="space-y-6">
            <p className="text-center text-sm md:text-base text-gray-600">
              Your listing has been submitted successfully.
            </p>

            <div className="flex justify-center">
              <div className="bg-green-400 h-16 w-16 md:w-24 md:h-24 lg:h-32 lg:w-32 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl">
                <FaCheck />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-white text-center gap-y-4 md:gap-x-4 mt-6">
              <Link
                className="w-full md:w-auto px-6 py-3 rounded-full bg-blue-400 text-center font-medium hover:bg-blue-300 transition duration-300"
                href="/dashboard"
              >
                Go to User Dashboard
              </Link>
              <Link
                className="w-full md:w-auto px-6 py-3 rounded-full bg-blue-400 text-center font-medium hover:bg-blue-300 transition duration-300"
                href="/all"
              >
                Listing Preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
