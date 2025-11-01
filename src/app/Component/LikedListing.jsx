"use client";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import Link from "next/link";
import { IoOpen } from "react-icons/io5";
import CommonDashLayout from "./CommonDashLayout";

function LikedListing() {
  const listings = [
    {
      id: 1,
      name: "The Royal Spa Center for Women",
      date: "08, Dec 2019",
      rating: 4,
      image: "/images/listings/41073ser6.jpg",
    },
    {
      id: 2,
      name: "Wedding Venues viki",
      date: "22, Jan 2020",
      rating: 0,
      image: "/images/listings/4797732622rn53themes.png",
    },
    {
      id: 3,
      name: "asjdklfasd",
      date: "23, Jan 2020",
      rating: 0,
      image: "/images/listings/26404cvs-gift-card-476x328.png",
    },
    {
      id: 4,
      name: "IPM Business Software",
      date: "22, Jan 2020",
      rating: 0,
      image: "/images/listings/56271pexels-photo-713148.jpeg",
    },
    {
      id: 5,
      name: "Forms hospitals",
      date: "22, Jan 2020",
      rating: 0,
      image:
        "/images/listings/20140doctor-sitting-in-front-of-his-desk-2182979.jpg",
    },
    {
      id: 6,
      name: "Test mest",
      date: "21, Jan 2020",
      rating: 0,
      image: "/images/listings/46980logo2.png",
    },
  ];

  const [likedData, setLikedData] = useState(listings);

  const handleDelete = (id) => {
    const updatedLikedData = likedData.filter((item) => item.id !== id);
    console.log(updatedLikedData, "updatedLikedData");
    setLikedData(updatedLikedData);
  };

    const [leftOpen,setLeftOpen]=useState(false)



  return (
    <>
  


<CommonDashLayout>
   <div className="container mx-auto ">
            <div className="w-full h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

            {/* Title Section */}
            <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              All Listings
            </div>
            <div className="p-4">
              <h2 className="text-sm font-semibold mb-4 ">
                All Liked Listings
              </h2>
               <div className="overflow-x-auto w-[300px] sm:w-full  ">
                <table className="  min-w-[600px]  text-xs">
                  <thead className="border-b ">
                    <tr className="text-gray-700 text-center">
                      <th className="p-3 border-b">No</th>
                      <th className="p-3 border-b">Listing Name</th>
                      <th className="p-3 border-b">Rating</th>
                      <th className="p-3 border-b">Remove</th>
                      <th className="p-3 border-b">Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {likedData.map((listing, index) => (
                      <tr
                        key={listing.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-3 border-b text-center">
                          {index + 1}
                        </td>
                        <td className="p-3 border-b flex items-center gap-2">
                          <img
                            className="w-12 h-12 rounded-md"
                            src={listing.image}
                            alt={listing.name}
                          />
                          <div>
                            <p className="font-medium">{listing.name}</p>
                            <span className="text-sm text-gray-500">
                              {listing.date}
                            </span>
                          </div>
                        </td>
                        <td className="p-3 border-b text-center">
                          <span className="px-2 py-1 rounded bg-[#f7ed94]">
                            {listing.rating}
                          </span>
                        </td>
                        <td className="p-3 border-b">
                          <button
                            onClick={() => handleDelete(listing.id)}
                            className=' className="text-[11px] p-1 border border-gray-300"'
                          >
                            Remove
                          </button>
                          {/* <a href="/RajpuraTahsil/listing" className="text-[11px] p-1 border border-gray-300">Remove</a> */}
                        </td>
                        <td className="p-3 border-b">
                          <Link
                            href="/all"
                            className="text-[11px] p-1 border border-gray-300"
                          >
                            Preview
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</CommonDashLayout>
    </>
  );
}

export default LikedListing;
