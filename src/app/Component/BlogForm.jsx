"use client";
import React from "react";
import Link from "next/link";

export default function AddBlogPost() {
  return (
    <div>
      <div className={`bg-[url('/img/sign/sign1.webp')] relative `}>
        <div className="relative h-full px-5 sm:px-8 flex flex-col py-10 xl:py-16 bg-[rgba(0,0,0,0.71)] items-center justify-center">
          <div className="max-w-2xl mx-auto bg-white rounded-md shadow-lg w-full">
            {/* Top Gradient Bar */}
            <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

            {/* Title */}
            <div className="bg-teal-400 font-bold rounded-md text-white text-xs tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              Add New Blog Post
            </div>

            {/* Card Content */}
            <div className="space-y-6">
              <div className="mx-auto border p-6 bg-white shadow-lg rounded-lg">
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4">Create Blog Post</h4>
                </div>

                {/* Blog Post Form */}
                <form
                  encType="multipart/form-data"
                  className="space-y-5"
                >
                  {/* Blog Name */}
                  <div>
                    <input
                      type="text"
                      name="blog_name"
                      placeholder="Post Name*"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  {/* Category Dropdown */}
                  <div>
                    <select
                      name="category_id"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="">Select Category</option>
                      <option value="23">Health</option>
                      <option value="22">Mens</option>
                      <option value="21">Fruits</option>
                      <option value="20">Baby care</option>
                      <option value="19">Toys</option>
                      <option value="18">Jewellery</option>
                      <option value="17">Shoes</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <textarea
                      name="blog_description"
                      placeholder="Post Details"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 h-28 resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Choose Banner Image
                    </label>
                    <div className="relative border border-dashed border-gray-300 rounded-md px-4 py-6 text-center cursor-pointer hover:border-blue-400 transition">
                      <span className="block text-sm text-gray-500 mb-2">
                        Upload a file
                      </span>
                      <svg
                        className="mx-auto mb-2 text-gray-400"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9V15H10V9H5L12 2L19 9H14Z"></path>
                      </svg>
                      <input
                        type="file"
                        name="blog_image"
                        accept="image/*,.jpg,.jpeg,.png"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="isenquiry"
                      id="evefmenab"
                      defaultChecked
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="evefmenab" className="text-sm text-gray-700">
                      Enquiry or Registration form enable
                    </label>
                  </div>


                        {/* Submit Button */}
      <button type="submit" className="mt-6 w-full bg-[#51C0FF] rounded-full text-white p-2 d hover:bg-[#43b0f0]">
        Submit
      </button>

      {/* Skip Link */}
      <Link href="/dashboard" className="block text-center mt-4  uppercase">
        Go to User Dashboard &gt;&gt;
      </Link>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
