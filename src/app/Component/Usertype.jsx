import React from "react";

export default function Usertype() {
  const userType = {
    serviceProvider: [
      "User dashboard",
      "Profile page",
      "Reviews",
      "Like listings",
      "Get quote & send enquiry",
      "Followings",
      "Notifications",
      "Create new listing",
    ],
    generalUser: [
      "User dashboard",
      "Profile page",
      "Reviews",
      "Followings",
      "Post your Ads",
      "Lead management",
      "Payment invoices",
      "Manage listing, event & blogs",
    ],
  };
  return (
    <div className="bg-[url('/img/sign/sign1.webp')]  bg-center md:min-h-screen ">
      <div className="bg-[rgba(0,0,0,0.75)] h-full py-10 px-6 md:px-8 xl:px-32  ">
        <img
          src="/img/sign/usertypelunch.webp"
          alt="userType"
          className="w-[200px] mx-auto  my-5 md:my-10"
        />
        <div className="grid md:grid-cols-2 items-center gap-6 h-full">
          {/* Service Provider Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h5 className="font-bold text-lg lg:text-2xl text-center uppercase text-gray-800 mb-6">
              Service Provider Can
            </h5>
            <ul className="space-y-4">
              {userType.serviceProvider.map((elm, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-4 text-gray-700 text-sm md:text-base"
                >
                  <span className="font-bold text-gray-900">{index + 1}.</span>
                  <span>{elm}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full  py-2 bg-[#8d4adae2] text-white font-semibold hover:bg-[#8D4ADA] uppercase rounded-md hover:bg-green-600">
              Get Started
            </button>
          </div>

          {/* General User Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h5 className="font-bold text-lg lg:text-2xl text-center uppercase text-gray-800 mb-6">
              General User Can
            </h5>
            <ul className="space-y-4">
              {userType.generalUser.map((elm, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-4 text-gray-700 text-sm md:text-base"
                >
                  <span className="font-bold text-gray-900">{index + 1}.</span>
                  <span>{elm}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 bg-[#8d4adae2] text-white font-semibold uppercase rounded-md hover:bg-[#8D4ADA]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
