"use client";
import Link from "next/link";
import React, { useState } from "react";
import BusinessDirectory from "../Component/BuinessDirectory";
export default function page() {
  return (
    <>
      <div className="bg-[url('/img/sign/sign1.webp')] h-screen bg-center ">
        <div className="bg-[rgba(0,0,0,0.71)] h-full flex items-center justify-center">
          <div className="w-full lg:max-w-[45%] md:max-w-[70%] sm:max-w-[90%] mx-auto bg-white h-auto rounded-md shadow-lg relative">
            <div className="lg:w-full mx-auto h-2 bg-gradient-to-br from-[#4c7af1] to-[#7fccbb] mb-6 rounded" />

            <div className="bg-teal-400 rounded-md text-white w-fit text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-2 uppercase">
              Start promotions
            </div>

            <div className="space-y-4 px-4 md:px-8 lg:px-16 py-8">
              <h5 className="text-xl md:text-2xl text-center font-bold text-gray-800">
                Start promotions
              </h5>

              <div className="form-inputs space-y-4">
                <select
                  name="listing"
                  id="listing"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm text-gray-400 font-bold"
                >
                  <option value="" disabled selected>
                    Choose Listing
                  </option>
                  <option value="test">Test</option>
                </select>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="start-date">
                    <span className="block mb-1 text-sm font-medium text-gray-700">
                      Start date
                    </span>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm text-gray-600"
                    />
                  </div>
                  <div className="end-date">
                    <span className="block mb-1 text-sm font-medium text-gray-700">
                      End date
                    </span>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm text-gray-600"
                    />
                  </div>
                </div>

                <div className="total-day-points flex flex-wrap gap-5 justify-center">
                  <div className="bg-yellow-100 p-4 flex flex-col items-center rounded-lg shadow-sm w-full sm:w-auto">
                    <h6 className="text-sm font-semibold text-gray-700 uppercase">
                      Total Days
                    </h6>
                    <p className="text-3xl font-bold text-gray-600">0</p>
                  </div>

                  <div className="bg-yellow-100 p-4 flex flex-col items-center rounded-lg shadow-sm w-full sm:w-auto">
                    <h6 className="text-sm font-semibold text-gray-700 uppercase">
                      Cost Per Day
                    </h6>
                    <p className="text-3xl font-bold text-gray-600">0</p>
                  </div>

                  <div className="bg-[#21D78D] p-4 flex flex-col items-center rounded-lg shadow-sm w-full sm:w-auto">
                    <h6 className="text-sm font-semibold text-white uppercase">
                      Total Points
                    </h6>
                    <p className="text-3xl font-bold text-white ">0</p>
                  </div>
                </div>

                <button className="w-full mt-5 block text-white bg-[#51C0FF] py-2 rounded-3xl hover:bg-[#429edc]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BusinessDirectory />
    </>
  );
}
