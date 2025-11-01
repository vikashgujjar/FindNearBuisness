"use client"
import React, { useState } from "react";
import Link from "next/link";
const AdsForm = () => {
  // Define state variables for form inputs
  const [adPosition, setAdPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adLink, setAdLink] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
<section className="login-reg relative py-12  bg-[url('/img/sign/sign1.webp')]">
    <div className="absolute inset-0 bg-black/50
    "></div>
  <div className="container relative mx-auto px-6">
    <div className="row">
      <div className="login-main add-list max-w-3xl mx-auto bg-white px-8 pb-4 rounded-lg shadow-lg">
        <div className="lg:w-[90%] mx-auto h-2 bg-gradient-to-br from-[#4c7af1] to-[#7fccbb] mb-6 rounded" />
        <div className="bg-teal-400 rounded-md text-white w-fit text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-2 uppercase">
        Create new Ads
        </div>

        <div className="log mt-8">
          <div className="login">
            <h4 className="text-2xl font-bold mb-6">Submit Your Ads</h4>
            <form
              name="create_ads_form"
              id="create_ads_form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              noValidate
            >
              <input
                type="hidden"
                value=""
                name="ad_total_days"
                id="ad_total_days"
                className="validate"
              />
              <input
                type="hidden"
                value=""
                name="ad_cost_per_day"
                id="ad_cost_per_day"
                className="validate"
              />
              <input
                type="hidden"
                value=""
                name="ad_total_cost"
                id="ad_total_cost"
                className="validate"
              />
              <ul>
                <li>
                  {/* Choose Ads Position */}
                  <div className="mb-6">
                    <label htmlFor="adposi" className="block text-sm font-medium text-gray-700 mb-2">
                      Choose Ads Position *
                    </label>
                    <select
                      name="all_ads_price_id"
                      required
                      className="form-control block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="adposi"
                      value={adPosition}
                      onChange={(e) => setAdPosition(e.target.value)}
                    >
                      <option value="">Select Ads Position</option>
                      <option mytag="70" value="1">
                        Home page Bottom (70$ /per day)
                      </option>
                      <option mytag="50" value="2">
                        All listing page Top (50$ /per day)
                      </option>
                      <option mytag="20" value="3">
                        All listing page Bottom (20$ /per day)
                      </option>
                      <option mytag="70" value="4">
                        All listing page Left (70$ /per day)
                      </option>
                      <option mytag="20" value="5">
                        Listing detail page Right (20$ /per day)
                      </option>
                      <option mytag="40" value="6">
                        Listing detail page Bottom (40$ /per day)
                      </option>
                    </select>
                    <Link href="/ads-pricing" className="text-blue-600 text-sm mt-2 inline-block">
                      Pricing details
                    </Link>
                  </div>
                  
                  {/* Start Date */}
                  <div className="mb-6">
                    <label htmlFor="ad_start_date" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Start Date (MM/DD/YYYY)
                    </label>
                    <input
                      type="date"
                      name="ad_start_date"
                      id="ad_start_date"
                      className="form-control block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  {/* End Date */}
                  <div className="mb-6">
                    <label htmlFor="ad_end_date" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad End Date (MM/DD/YYYY)
                    </label>
                    <input
                      type="date"
                      name="ad_end_date"
                      id="ad_end_date"
                      className="form-control block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  {/* Ad Image Upload */}
                  <div className="mb-6">
                    <label htmlFor="ad_enquiry_photo" className="block text-sm font-medium text-gray-700 mb-2">
                      Choose Ad Image
                    </label>
                    <input
                      type="file"
                      name="ad_enquiry_photo"
                      id="ad_enquiry_photo"
                      className="form-control block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* External Link */}
                  <div className="mb-6">
                    <label htmlFor="ad_link" className="block text-sm font-medium text-gray-700 mb-2">
                      Advertisement External Link
                    </label>
                    <textarea
                      id="ad_link"
                      name="ad_link"
                      className="form-control block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter the external link for the advertisement"
                      required
                      value={adLink}
                      onChange={(e) => setAdLink(e.target.value)}
                    />
                  </div>
                </li>
              </ul>

              {/* Submit Button */}
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  name="create_ad_submit"
                  className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Publish This Ad
                </button>
                <div className="mt-4">
                  <Link href="/dashboard" className="text-blue-600 text-sm">
                    Go to User Dashboard &gt;&gt;
                  </Link>
                </div>
              </div>
            </form>

            {/* Notes */}
            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700">
                <b>Notes:</b> Once you submit your Ad, the Admin or support team will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default AdsForm;
