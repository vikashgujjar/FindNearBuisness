"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function DashRight() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 60) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1 w-full px-2 sm:px-4 mb-6">
      {/* Promote My Business */}
      <div className="relative group rounded-lg shadow-md overflow-hidden">
        <img
          src="/img/dashboard/dashboardRight1.webp"
          alt="Promote Business"
          className="w-full h-56 sm:h-64 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-[#cac42680]"></div>
        <div className="absolute inset-0 z-20 p-4 sm:p-6 text-white">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            Promote my business
          </h3>
          <p className="text-sm sm:text-base mb-4">
            Your listing shows on top of category pages.
          </p>
          <Link
            href="/start-now"
            className="inline-block bg-[#d7d006] hover:bg-[#ff9800] px-4 py-2 text-sm font-semibold rounded-lg"
          >
            Start now
          </Link>
        </div>
      </div>

      {/* Your Points */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48 sm:h-56">
          <img
            src="/img/dashboard/dashboardRight2.webp"
            alt="Your Points"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-900">
            <h6 className="font-bold text-lg sm:text-xl">Your Points</h6>
            <p className="text-4xl sm:text-5xl font-bold">{count}</p>
          </div>
        </div>
        <div className="p-4 sm:p-6 text-sm space-y-3">
          <h6 className="font-semibold">Earn more credit points</h6>
          <p>
            Use these points to promote your listing.{" "}
            <span className="text-blue-500 font-semibold cursor-pointer">
              Click here
            </span>{" "}
            for demo
          </p>
          <Link
            href="/buy-point"
            className="inline-block bg-[#E75772] px-4 py-2 rounded-full text-white text-sm"
          >
            BUY POINTS
          </Link>
        </div>
      </div>

      {/* Payment Info */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-t-lg">
          <h6 className="text-sm font-semibold">Payment Information</h6>
        </div>
        <div className="p-4 sm:p-6 grid grid-cols-2 text-sm gap-y-3 text-gray-700">
          <ul className="space-y-2 font-medium">
            <li>Plan Name:</li>
            <li>Start Date:</li>
            <li>Expiry Date:</li>
            <li>Duration:</li>
            <li>Remaining Days:</li>
            <li>Checkout Cost:</li>
            <li>Payment Status:</li>
          </ul>
          <ul className="space-y-2 text-gray-600">
            <li>Premium Plus</li>
            <li>26, Mar 2021</li>
            <li>26, Mar 2031</li>
            <li>10 years</li>
            <li>3638</li>
            <li>$20</li>
            <li className="font-bold text-red-500">PENDING</li>
          </ul>
          <div className="col-span-2 mt-2">
            <Link
              href="/payment"
              className="inline-block bg-[#4CAF50] text-white text-sm px-4 py-2 rounded-md"
            >
              Pay Now
            </Link>
          </div>
        </div>
      </div>

      {/* Last Week Report */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-t-lg">
          <h6 className="text-sm font-semibold">Last Week Report</h6>
        </div>
        <div className="p-4 grid grid-cols-3 text-center text-sm gap-px">
          {[
            ["ENQUIRY", "00", "Leads"],
            ["VIEWS", "02", "Listings"],
            ["VIEWS", "00", "Events"],
            ["VIEWS", "01", "Blogs"],
            ["VIEWS", "00", "Products"],
            ["MESSAGES", "00", "Inbox"],
          ].map(([label, value, sub], idx) => (
            <div
              key={idx}
              className={`p-3 border ${idx < 3 ? "border-b" : ""} ${
                idx % 3 !== 2 ? "border-r" : ""
              }`}
            >
              <span className="text-gray-400">{label}</span>
              <h6 className="text-lg font-bold">{value}</h6>
              <span className="text-gray-400">{sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Community Members */}
      <div className="relative group rounded-lg shadow-md overflow-hidden">
        <img
          src="/img/dashboard/dashboardRight1.webp"
          alt="Community Members"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-[#3f51b5d9]"></div>
        <div className="absolute inset-0 z-20 p-4 sm:p-6 text-white">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            Community members
          </h3>
          <p className="text-sm sm:text-base mb-4">
            Follow your favorite business users and grow your online business
            now.
          </p>
          <Link
            href="/community"
            className="inline-block bg-[#03A9F4] hover:bg-[#ff9800] px-4 py-2 rounded-lg text-white text-sm font-semibold"
          >
            Community
          </Link>
        </div>
      </div>
    </div>
  );
}
