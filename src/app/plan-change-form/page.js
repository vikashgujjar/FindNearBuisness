"use client";
import Link from "next/link";
import React from "react";
import BusinessDirectory from "../Component/BuinessDirectory";

export default function Page() {
  return (
    <>
      <div className="bg-[url('/img/sign/sign1.webp')] h-screen">
        <div className="bg-[rgba(0,0,0,0.71)] h-full flex items-center justify-center px-4">
          <div className="w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[45%] mx-auto bg-white rounded-md shadow-lg">
            <div className="w-full h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

            <div className="bg-teal-400 rounded-md text-white text-xs font-semibold tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              Change My Plan
            </div>

            <div className="space-y-6 px-4 sm:px-6 md:px-8 lg:px-12 py-8">
              <h5 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-gray-800">
                Change My Plan
              </h5>

              <p className="text-center text-sm sm:text-base text-gray-600 leading-relaxed">
                Hi Rn53,
                <br />
                Your Current Plan: <strong>Premium Plus</strong>
                <br />
                Expiration Date: <strong>07, Apr 2034</strong>
              </p>

              <form className="space-y-4">
                <div className="relative">
  <select
    className="appearance-none w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
    required
  >
    <option value="">Choose your plan</option>
    <option value="4">Premium Plus - $20/year</option>
  </select>

  <Link
    href="/mybusiness"
    className="text-blue-600 text-xs underline absolute right-2 bg-white top-2"
  >
    Plan details
  </Link>
</div>


                <Link href="/payment">
                  <button
                    name="plan_type_submit"
                    className="w-full text-white mt-4 bg-[#51C0FF] py-2 rounded-3xl hover:bg-[#429edc] transition duration-200"
                  >
                    Change
                  </button>
                </Link>
              </form>

              <div className="text-center">
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-700 underline hover:text-blue-600 transition"
                >
                  Go to user dashboard &gt;&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BusinessDirectory />
    </>
  );
}
