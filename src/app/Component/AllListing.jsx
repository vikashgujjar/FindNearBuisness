"use client";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import CommonDashLayout from "./CommonDashLayout";
export default function AllListing() {
  const listings = [
    {
      id: 1,
      imgage: "/img/dashboard/listing.webp",
      name: "test",
      date: "28, Mar 2021",
      rating: 0,
      views: 1,
      status: "Active",
    },
    {
      id: 2,
      imgage: "/img/dashboard/listing.webp",
      name: "dfzhfhd",
      date: "25, Mar 2021",
      rating: 0,
      views: 7,
      status: "Inactive",
    },
    {
      id: 3,
      imgage: "/img/dashboard/listing.webp",
      name: "Iei",
      date: "25, Mar 2021",
      rating: 0,
      views: 15,
      status: "Active",
    },
    {
      id: 4,
      imgage: "/img/dashboard/listing.webp",
      name: "Phoenix Mall",
      date: "13, Mar 2021",
      rating: 0,
      views: 10,
      status: "Active",
    },
    {
      id: 5,
      imgage: "/img/dashboard/listing.webp",
      name: "Ocha Thai Cuisine",
      date: "12, Mar 2021",
      rating: 5,
      views: 9,
      status: "Active",
    },
    {
      id: 6,
      imgage: "/img/dashboard/listing.webp",
      name: "Core Real Estates",
      date: "11, Mar 2021",
      rating: 0,
      views: 18,
      status: "Active",
    },
    {
      id: 7,
      imgage: "/img/dashboard/listing.webp",
      name: "Gill Automobiles and Services",
      date: "20, Feb 2021",
      rating: 0,
      views: 30,
      status: "Active",
    },
    {
      id: 8,
      imgage: "/img/dashboard/listing.webp",
      name: "Titan Wedding Hall",
      date: "07, Feb 2021",
      rating: 5,
      views: 27,
      status: "Active",
    },
    {
      id: 9,
      imgage: "/img/dashboard/listing.webp",
      name: "Taj Hotels",
      date: "24, Dec 2020",
      rating: 0,
      views: 16,
      status: "Active",
    },
  ];

  return (
    <>
      <CommonDashLayout>
        <div className="container mx-auto  bg-white p-4">
          <div className="bg-white ">
            <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

            {/* Title Section */}
            <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              All Listing
            </div>
            <div className="p-4  ">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold">Listing Details</h2>
                <a
                  href="/blog-form"
                  className="bg-gradient-to-t from-[#697480] to-[#9ba3ab] text-white px-2 py-1 text-xs font-semibold rounded hover:bg-blue-600"
                >
                  Add new Listing
                </a>
              </div>
              <div className="w-[300px] md:w-auto  overflow-x-auto  ">
                <table className="md:w-full w-[700px] table-auto border-collapse ">
                  <thead>
                    <tr className="">
                      <th className="border-y   p-2">No</th>
                      <th className="border-y   p-2">Listing Name</th>
                      <th className="border-y   p-2">Rating</th>
                      <th className="border-y   p-2">Views</th>
                      <th className="border-y   p-2">Status</th>
                      <th className="border-y   p-2">Edit</th>
                      <th className="border-y   p-2">Delete</th>
                      <th className="border-y   p-2">Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listings.map((listing, index) => (
                      <tr key={listing.id} className="text-start border-b">
                        <td className="border-y p-2">{index + 1}</td>
                        <td className="border-y p-2 flex items-center gap-2">
                          <img
                            src={listing.imgage}
                            alt={listing.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <span className="font-semibold text-xs">
                              {listing.name}
                            </span>
                            <p className="text-xs text-gray-500">
                              {listing.date}
                            </p>
                          </div>
                        </td>
                        <td className="border-y text-xs ">
                          <span className="px-2 py-1 bg-[#F7ED94]">
                            {" "}
                            {listing.rating}
                          </span>
                        </td>
                        <td className="border-y text-xs p-2">
                          <span className="px-2 py-1 bg-[#F7ED94]">
                            {listing.views}
                          </span>{" "}
                        </td>
                        <td className={`border-y p-2 text-xs   `}>
                          <span className="border-2 border-gray-100 px-2 rounded bg-[#579EDC] text-white">
                            {listing.status}
                          </span>
                        </td>
                        <td className="border-y p-2 text-xs">
                          <a
                            href="/newlisting"
                            className=" border-2 px-2 border-gray-200hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="border-y p-2 text-xs">
                          <a
                            href="/NabhaTahsil/listing"
                            className=" border-2 px-2 border-gray-200 hover:underline"
                          >
                            Delete
                          </a>
                        </td>
                        <td className="border-y p-2 text-xs">
                          <a
                            href="/all"
                            className=" hover:underline border-2 px-2 border-gray-200"
                          >
                            Preview
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </CommonDashLayout>
    </>
  );
}
