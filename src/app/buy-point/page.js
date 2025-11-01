"use client";
import Link from "next/link";
import React from "react";
import BusinessDirectory from "../Component/BuinessDirectory";

export default function Page() {
  return (
    <>
      <div className="bg-[url('/img/sign/sign1.webp')] h-screen">
        <div className="bg-[rgba(0,0,0,0.71)] h-full flex items-center justify-center px-4">
          <div className="w-full lg:max-w-[45%] md:max-w-[70%] sm:max-w-[90%] mx-auto bg-white rounded-md shadow-lg">
            <div className="lg:w-full mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

            <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              BUY POINTS
            </div>

            <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
              <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
                Hi, Rn53 Themes!!!
              </h5>

              <div className="space-y-6">
                {/* Existing Points Section */}
                <div className="text-center bg-[#DFFFF2] text-[#0b8c58] border border-green-400 rounded-md p-3">
                  <p>Your Existing Points - 60 | Cost of 1 point = $1</p>
                </div>

                {/* Input Section */}
                <div>
                  <h6 className="text-sm md:text-base font-medium mb-2">
                    Please Enter Points
                  </h6>
                  <input
                    type="text"
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                </div>

                {/* Payment Mode Section */}
                <div>
                  <h6 className="text-sm md:text-base font-medium mb-2">
                    Payment Mode
                  </h6>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <input id="Paytm" type="radio" name="payment" />
                      <label htmlFor="Paytm" className="text-sm">
                        Paytm
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input id="PayPal" type="radio" name="payment" />
                      <label htmlFor="PayPal" className="text-sm">
                        PayPal
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input id="Stripe" type="radio" name="payment" />
                      <label htmlFor="Stripe" className="text-sm">
                        Stripe
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input id="razorPay" type="radio" name="payment" />
                      <label htmlFor="razorPay" className="text-sm">
                        RazorPay
                      </label>
                    </div>
                  </div>

                  <button className="w-full mt-5 block text-white bg-[#51C0FF] py-2 rounded-3xl hover:bg-[#429edc]">
                    Pay Now
                  </button>
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
