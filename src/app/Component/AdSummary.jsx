"use client";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import CommonDashLayout from "./CommonDashLayout";
function AdSummary() {
  const adsData = [
    {
      id: 1,
      position: "Home page Bottom",
      startDate: "31, Mar 2021",
      endDate: "29, Apr 2021",
      duration: "0 Days",
      status: "InActive",
      views: "1k",
      clicks: "642",
    },
    {
      id: 2,
      position: "All listing page Top",
      startDate: "17, Jun 2020",
      endDate: "30, Jun 2022",
      duration: "743 Days",
      status: "Active",
      views: "1k",
      clicks: "642",
    },
    {
      id: 3,
      position: "Listing detail page Bottom",
      startDate: "03, Jun 2020",
      endDate: "23, Jul 2020",
      duration: "50 Days",
      status: "Active",
      views: "1k",
      clicks: "642",
    },
  ];

  const [activeTab, setActiveTab] = useState("");
  return (
    <CommonDashLayout>
     <div>
  {/* Top Gradient Bar */}
  <div className="w-full h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

  {/* Section Title */}
  <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
    Paid Ads
  </div>

  {/* Container */}
  <div className="container mx-auto px-4 py-6">
    {/* Heading and Buttons */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
      <h2 className="text-base sm:text-lg font-semibold">Your Banner Ads</h2>

      <div className="flex flex-col sm:flex-row gap-2">
        <a
          href="/ads-form"
          className="bg-gradient-to-t from-[#697480] to-[#9ba3ab] text-white px-3 py-2 text-xs font-semibold rounded hover:bg-blue-600 text-center"
        >
          Post your Ads
        </a>
        <a
          href="/ads-pricing"
          className="bg-gradient-to-t from-[#697480] to-[#9ba3ab] text-white px-3 py-2 text-xs font-semibold rounded hover:bg-blue-600 text-center"
        >
          Pricing and other details
        </a>
      </div>
    </div>

    {/* Table */}
  <div className="overflow-x-auto w-[300px] md:w-full">
  <table className="w-full min-w-[600px] border border-gray-300 text-[10px] sm:text-xs md:text-sm rounded-lg">
    <thead className="bg-gray-100">
      <tr className="text-gray-700 text-center">
        <th className="p-2 sm:p-3 border">No</th>
        <th className="p-2 sm:p-3 border">Ads Position</th>
        <th className="p-2 sm:p-3 border">Start Date</th>
        <th className="p-2 sm:p-3 border">End Date</th>
        <th className="p-2 sm:p-3 border">Duration</th>
        <th className="p-2 sm:p-3 border">Status</th>
        <th className="p-2 sm:p-3 border">Views</th>
        <th className="p-2 sm:p-3 border">Clicks</th>
      </tr>
    </thead>
    <tbody>
      {adsData.map((ad, index) => (
        <tr key={ad.id} className="text-center hover:bg-gray-50">
          <td className="p-2 sm:p-3 border">{index + 1}</td>
          <td className="p-2 sm:p-3 border">{ad.position}</td>
          <td className="p-2 sm:p-3 border">{ad.startDate}</td>
          <td className="p-2 sm:p-3 border">{ad.endDate}</td>
          <td className="p-2 sm:p-3 border">{ad.duration}</td>
          <td className="p-2 sm:p-3 border">
            <span className="px-2 py-1 rounded text-white bg-[#579edc] text-[10px] sm:text-xs">
              {ad.status}
            </span>
          </td>
          <td className="p-2 sm:p-3 border">
            <span className="bg-[#f7ed94] px-2 py-1 rounded text-[10px] sm:text-xs">
              {ad.views}
            </span>
          </td>
          <td className="p-2 sm:p-3 border">
            <span className="bg-[#f7ed94] px-2 py-1 rounded text-[10px] sm:text-xs">
              {ad.clicks}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    {/* Notes Section */}
    <div className="mt-10 p-4 bg-[#e5f7ff] text-[#668796] border border-[#d0e9f4] text-sm sm:text-[13px] leading-relaxed rounded-lg">
      <p>
        <b>Notes:</b> Before starting your ad payment, you must check the
        pricing details and positions. Click the "Pricing and other details"
        button above to learn more. Once your payment is processed, your
        invoice will be available in your "Payment Invoice" page, and your ad
        will run until the end date.
      </p>
    </div>
  </div>
</div>

    </CommonDashLayout>
  );
}

export default AdSummary;
