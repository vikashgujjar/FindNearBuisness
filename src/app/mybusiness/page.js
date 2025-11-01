import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import PinLocation from "../Component/PinLocation";
import Link from "next/link";

export default function page() {
  const planFeature = [
    {
      planName: "Free plan",
      PlanDec: "For getting started",
      cost: "FREE",
      planFor: "Single user",
      planList: [
        "1 listing",
        "1 year(s) (duration)",
        "1 events",
        "1 blog posts",
        "User dashboard",
        "1 photos",
        "1 videos",
        "Create duplicate listings",
        "Social media share",
        "Admin tips",
      ],
    },
    {
      planName: "Standard  plan",
      PlanDec: "Perfect for small teams",
      cost: 9,
      planFor: "Startup business",
      cuurency: <FaDollarSign />,

      planList: [
        "1 listing",
        "1 year(s) (duration)",
        "5 events",
        "5 blog posts",
        "Get direct leads",
        "Email notification(leads)",
        "Verified listing",
        "Trusted listing",
        "Special offers",
        "User dashboard",
        "2 photos",
        "1 videos",
        "Create duplicate listings",
        "Social media share",
        "Review control",
        "Admin tips",
      ],
    },
    {
      planName: "Premium plan",
      PlanDec: "Best value for large teams",
      cost: 19,
      planFor: "Medium business",
      cuurency: <FaDollarSign />,

      planList: [
        "25 listings",
        "5 year(s) (duration)",
        "25 events",
        "25 blog posts",
        "Get direct leads",
        "Email notification (leads)",
        "Verified listing",
        "Trusted listing",
        "Special offers",
        "User dashboard",
        "5 photos",
        "2 videos",
        "Create duplicate listings",
        "Social media share",
        "Review control",
        "Admin tips",
      ],
    },
    {
      planName: "Premium Plus plan",
      PlanDec: "Made for enterprises",
      cost: 20,
      planFor: "Global business",
      cuurency: <FaDollarSign />,

      planList: [
        "Unlimited listings",
        "10 year(s) (duration)",
        "Unlimited events",
        "Unlimited blog posts",
        "Get direct leads",
        "Email notification (leads)",
        "Verified listing",
        "Trusted listing",
        "Special offers",
        "User dashboard",
        "10 photos",
        "1 videos",
        "Create duplicate listings",
        "Social media share",
        "Review control",
        "Admin tips",
      ],
    },
  ];
  return (
    <>
      <PinLocation />
      <div className="px-5 md:px-8 xl:px-32 my-5 md:my-16">
        <div className="text-center space-y-4 md:space-y-6">
          <p className="text-sm md:text-base text-gray-600">
            World's Top 100+ country most
          </p>
          <h6 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900">
            Choose your pricing plan
          </h6>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
            Cras nulla nulla, pulvinar sit amet nunc at, lacinia viverra lectus.
            Fusce imperdiet ullamcorper metus eu fringilla.
          </p>
        </div>

        <div className="py-5 md:py-10 mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {planFeature.map((elm, index) => (
              <li
                key={index}
                className={`${
                  elm.planName === "Premium plan" ? "bg-[#FFFBDE]" : "bg-white"
                } rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105`}
              >
                <div className="bg-[#FFF5B0] text-center py-5">
                  <h5 className="text-[#4d4d4d] font-bold text-lg md:text-xl">
                    {elm.planName}
                  </h5>
                  <p className="text-sm md:text-base text-gray-600">
                    {elm.PlanDec}
                  </p>
                </div>
                <div className="p-6 text-center space-y-6">
                  <h5 className="font-bold flex justify-center items-center text-2xl md:text-3xl text-gray-900">
                    {elm.cuurency && elm.cuurency} {elm.cost}
                  </h5>
                  <p className="text-sm text-gray-600">{elm.planFor}</p>
                  <Link
                    href="/user-login/sign"
                    className="inline-block border border-green-500 rounded-md text-gray-900 font-semibold text-sm tracking-wide px-8 py-2 uppercase transition-colors duration-300 ease-in-out group-hover:bg-green-500 group-hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Add Listing
                  </Link>
                  <ul className="space-y-3 text-left">
                    {elm.planList.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <svg
                          stroke="currentColor"
                          fill="green"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM16.4524 8.22183L11.5019 13.1709L8.67421 10.3431L7.25999 11.7574L11.5026 16L17.8666 9.63604L16.4524 8.22183Z"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/user-login/sign">
                    <div className="bg-[#25c16f] text-white my-6 font-semibold text-xs tracking-wider py-2 md:py-3 px-5 rounded-md uppercase transition-transform duration-300 transform hover:scale-105">
                      Get Started
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
