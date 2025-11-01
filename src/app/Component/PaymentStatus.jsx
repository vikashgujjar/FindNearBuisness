"use client";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import Link from "next/link";
import CommonDashLayout from "./CommonDashLayout";

export default function PaymentStatus() {
  const [isChecked, setIsChecked] = useState(false);

  const paymnetToggler = (e) => {
    setIsChecked((preVal) => !preVal);
  };

  console.log(isChecked);

  const [activeTab, setActiveTab] = useState("");

  return (
    <CommonDashLayout>
      <div className="px-4 py-6">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-md shadow-lg">
          {/* Gradient Header */}
          <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

          {/* Title Section */}
          <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
            Payment
          </div>

          {/* Header Buttons */}
          <div className="flex flex-row md:items-center justify-between px-4 md:px-6 py-4 gap-4">
            <button className="font-bold text-sm md:text-base">
              Payment Status
            </button>
            <Link
              href="/plan-change-form"
              className="bg-[#8A939C] text-white text-xs  px-4 py-2 font-semibold rounded-md hover:bg-gray-700"
            >
              Change My Plan
            </Link>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-6 px-4 py-6 bg-white rounded-lg shadow-md">
            {/* Image Section */}
            <div className="flex justify-center items-center">
              <img
                src="/img/dashboard/dashbordleft.webp"
                alt="Dashboard"
                className=" w-[200px]  rounded-full lg:w-[300px] aspect-square h-auto max-w-xs md:max-w-sm lg:rounded-md shadow"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-4">
                <h4 className="font-semibold text-gray-700">Name:</h4>
                <p className="text-gray-900">Rn53 Themes</p>
              </div>

              <div className="flex items-center font-bold gap-4 text-[#03A9F4]">
                <h4 className=" text-2xl ">Plan Name:</h4>
                <p className="text-xl">Premium Plus</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-700">
                <div className="flex text-sm">
                  <span className="font-semibold ">Start Date:</span>
                  <span className="text-gray-900">26 Mar 2021</span>
                </div>
                <div className="flex text-xs">
                  <span className="font-semibold">Expiry Date:</span>
                  <span className="text-gray-900">26 Mar 2031</span>
                </div>
                <div className="flex text-sm">
                  <span className="font-semibold">Duration:</span>
                  <span className="text-gray-900">10 years</span>
                </div>
                <div className="flex text-sm">
                  <span className="font-semibold">Remaining Days:</span>
                  <span className="text-gray-900">3638</span>
                </div>
                <div className="flex justify-center bg-[#06D7BB] text-white text-sm lg:text-xs p-2 rounded-2xl">
                  <span className="font-semibold">Check Amount:</span>
                  <span className="">$20</span>
                </div>
                <div className="flex justify-center bg-[#06D7BB] text-white text-sm lg:text-xs p-2 rounded-2xl">
                  <span className="font-semibold">Payment Status:</span>
                  <span className=" font-semibold">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-lg font-semibold my-5 ml-3">
          Select your payment option
        </h4>

        <div className=" p-4 bg-[#FFFBF1]">
          <div className=" p-1">
            {/* Header */}
            <div
              onClick={paymnetToggler}
              className="mb-4 cursor-pointer flex items-center gap-x-3 ml-3"
            >
              <span
                className={`rounded-full block w-4 h-4  ${
                  !isChecked ? "border-2 border-black" : "bg-black"
                }`}
              ></span>
              Razor Pay Payment Gateway
            </div>

            <div
              className={`razor-container ${isChecked ? "block" : "hidden"}`}
            >
              {/* Payment Note */}
              <div className="text-[#7e5d3a] font-semibold p-4 rounded-md -600 mb-6">
                <p className="flex items-center gap-2 text-sm mb-2">
                  <span className="">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                    </svg>
                  </span>
                  You can pay with your credit card if you don’t have a Razor
                  Pay account.
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <span className="">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                    </svg>
                  </span>
                  What is Razor Pay?
                </p>
              </div>

              {/* Billing Details */}
              <form
                name="payment_razor_pay_form"
                id="payment_razor_pay_form"
                method="post"
                action=""
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Billing Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      placeholder="Full Name *"
                      readOnly
                      defaultValue="Rn53 Themes"
                    />
                  </div>
                  {/* Country */}
                  <div>
                    <input
                      type="text"
                      name="user_country"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      placeholder="Country"
                      defaultValue="Australia"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <input
                      type="text"
                      name="user_state"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      placeholder="State"
                      defaultValue="Sydney"
                    />
                  </div>
                  {/* City */}
                  <div>
                    <input
                      type="text"
                      name="user_city"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      placeholder="City *"
                      required
                      defaultValue="Sydney"
                    />
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      name="user_address"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      placeholder="Village & Street Name"
                      defaultValue="No 27, Pointing street, Sydney, Australia"
                    />
                  </div>

                  {/* Zip Code */}
                  <div>
                    <input
                      type="text"
                      name="user_zip_code"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      placeholder="Postcode/ZIP"
                      defaultValue="65448811"
                    />
                  </div>
                  {/* Contact Person */}
                  <div>
                    <input
                      type="text"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      name="user_contact_name"
                      placeholder="Contact Person *"
                      required
                      defaultValue="John Smith"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <input
                      type="text"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      name="user_contact_mobile"
                      placeholder="Contact Number"
                      defaultValue="2211446688"
                    />
                  </div>
                  {/* Contact Email */}
                  <div>
                    <input
                      type="text"
                      className="form-input py-2 px-2 border w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                      name="user_contact_email"
                      placeholder="Contact Email *"
                      required
                      defaultValue="rn53themes@gmail.com"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  name="payment_razor_pay_form_submit"
                  className="mt-6  px-4 bg-[#51C0FF] w-fit text-white font-medium py-2 rounded-md hover:bg-teal-600"
                >
                  Start Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CommonDashLayout>
  );
}
