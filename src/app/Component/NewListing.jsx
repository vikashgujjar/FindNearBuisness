"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function NewListing() {
  const [listing, setListig] = useState(false);

  const [selectedListing, setSelectedListing] = useState("");

  // Handle change when a new option is selected
  const handleChange = (event) => {
    setSelectedListing(event.target.value);
  };
  console.log(listing)
  return (
    <>
      <div className="bg-[url('/img/sign/sign1.webp')]  lg:h-[90vh]">
        <div className="bg-[rgba(0,0,0,0.71)] h-full flex items-center justify-center px-4 py-16">
          <div className="w-full  md:max-w-[70%] lg:max-w-[55%] xl:max-w-[45%] sm:max-w-[90%] mx-auto bg-white rounded-md shadow-lg">
          <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

            <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              Create New
            </div>

            <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
              <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
                Add New Listing
              </h5>

              <div className="space-y-6">
                {/* Create new Points  */}
                <div className="flex text-center flex-col text-nowrap md:flex-row space-y-5 md:space-y-0 gap-x-5">
                  <Link
                    href="/addnewlisting"
                    className="px-5 w-full py-3 rounded-full text-white font-semibold bg-[#51C0FF]"
                  >
                    Create listing from scratch
                  </Link>
                  <button
                    onClick={() => setListig(!listing)}
                    className="px-5 w-full py-3 rounded-full text-white font-semibold bg-[#7FCCBB]"
                  >
                    Create duplicate listing
                  </button>
                </div>

                {listing && (
                  <div>
                    <div>
                      <select
                        name="listing_id"
                        id="listing_id"
                        className="chosen-select form-control px-2  w-full border-none outline-none "
                        value={selectedListing}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Listing Name
                        </option>
                        <option value="LIST395">test</option>
                        <option value="LIST394">dfzhfhd</option>
                        <option value="LIST393">Iei</option>
                        <option value="LIST392">phoenix mall</option>
                        <option value="LIST391">Ocha Thai Cuisine</option>
                        <option value="LIST389">Core real estates</option>
                        <option value="LIST384">
                          Gill Automobiles and Services
                        </option>
                        <option value="LIST381">Titan Wedding Hall</option>
                        <option value="LIST380">Taj Hotels</option>
                        <option value="LIST378">ccc</option>
                        <option value="LIST375">Hello</option>
                        <option value="LIST268">Premium gardens</option>
                        <option value="LIST267">
                          Beach luxury villa gardens
                        </option>
                        <option value="LIST266">GOS Villas</option>
                        <option value="LIST247">Super bike showroom</option>
                        <option value="LIST238">Benz cars showroom</option>
                        <option value="LIST207">Smith Luxury Villas</option>
                        <option value="LIST164">
                          Ø§Ø¨Ù†Ù‰ Ù…ÙˆÙ‚Ø¹Ùƒ Ù…Ø¹Ù†Ø§
                        </option>
                        <option value="LIST163">
                          BizBookBusiness Directory Template
                        </option>
                        <option value="LIST130">
                          Tour and Travel html Template
                        </option>
                        <option value="LIST129">Smart Digital Products</option>
                      </select>
                    
                    </div>
                    <div className="mt-3">
                        <input type="text" placeholder="New Listing Name * "  className="border w-full h-full py-3 outline-none px-4"/>
                      </div>

                      <div className="mt-5">
                          <button className="hover:bg-blue-400 px-5 w-full py-3 rounded-full text-white font-semibold bg-[#51C0FF]"> Create Now</button>
                      </div>
                  </div>

                )}
                
                

                {/* Input Section */}
                <hr />
                <div className="text-center text-lg uppercase">
                  <Link href="/dashboard">Go to user dashboard &gt;&gt;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
