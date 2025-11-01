"use client";
import React, { useState } from "react";
import Link from "next/link";
const AdsForm = () => {
    const ads = [
        {
          id: 1,
          name: "Home page Bottom",
          preview: "/img/dashboard/ads-pricing.webp",
          size: "728 X 90 px",
          cost: "70$",
          link: "/ads-form",
        },
        {
          id: 2,
          name: "All listing page Top",
          preview: "/img/dashboard/ads-pricing.webp",
          size: "728 X 90 px",
          cost: "50$",
          link: "/ads-form",
        },
        {
          id: 3,
          name: "All listing page Bottom",
          preview: "/img/dashboard/ads-pricing.webp",
          size: "728 X 90 px",
          cost: "20$",
          link: "/ads-form",
        },
        {
          id: 4,
          name: "All listing page Left",
          preview: "/img/dashboard/ads-pricing.webp",
          size: "300 X 300 px",
          cost: "70$",
          link: "/ads-form",
        },
        {
          id: 5,
          name: "Listing detail page Right",
          preview: "/img/dashboard/ads-pricing.webp",
          size: "300 X 300 px",
          cost: "20$",
          link: "/ads-form",
        },
        {
          id: 6,
          name: "Listing detail page Bottom",
          preview: "/img/dashboard/ads-pricing.webp",
          size: "728 X 90 px",
          cost: "40$",
          link: "/ads-form",
        },
      ];
  return (
    <section className="login-reg relative py-12  bg-[url('/img/sign/sign1.webp')]">
      <div
        className="absolute inset-0 bg-black/50
    "
      ></div>
      <div className="container relative mx-auto px-6">
        <div className="">
          <div className="login-main add-list max-w-3xl mx-auto bg-white px-8 pb-4 rounded-lg shadow-lg">
            <div className="lg:w-[90%] mx-auto h-2 bg-gradient-to-br from-[#4c7af1] to-[#7fccbb] mb-6 rounded" />
            <div className="bg-teal-400 rounded-md text-white w-fit text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-2 uppercase">
              Ad details
            </div>

            <div className="overflow-x-auto">
  <table className="table-auto w-full text-left border-collapse">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 text-sm font-medium text-gray-700">No</th>
        <th className="px-4 py-2 text-sm font-medium text-gray-700">Ads Name</th>
        <th className="px-4 py-2 text-sm font-medium text-gray-700">Ads Preview</th>
        <th className="px-4 py-2 text-sm font-medium text-gray-700">Ads Size</th>
        <th className="px-4 py-2 text-sm font-medium text-gray-700">Cost P/Day</th>
        <th className="px-4 py-2 text-sm font-medium text-gray-700">Start Ads</th>
      </tr>
    </thead>
    <tbody>
      {ads.map((ad) => (
        <tr key={ad.id} className="border-t hover:bg-gray-50 text-nowrap">
          <td className="px-4 py-2 text-center">{ad.id}</td>
          <td className="px-4 py-2 text-center">{ad.name}</td>
          <td className="px-4 py-2 text-center">
            <img src={ad.preview} alt="ads" className="w-auto lg:w-[400px] mx-auto" />
          </td>
          <td className="px-4 py-2 text-center">{ad.size}</td>
          <td className="px-4 py-2 text-center">{ad.cost}</td>
          <td className="px-4 py-2 text-center">
            <Link href={ad.link} className="text-black px-2 rounded bg-[#F7ED94] text-xs  py-1">
              Post your Ads
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsForm;
