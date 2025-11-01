"use client";
import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ProductsInner() {
  const productFeatures = [
    "Money back policy",
    "1 day delivery",
    "Best chosen for weight loss",
    "Loss 10 kg in 7 days",
    "Improve immunity",
    "Carry It Along 2 in 1 Laptop",
    "12.3 inch Quad HD LED Backlit PixelSense",
    "10 Point Multi-touch, 3:2 Aspect Ratio, 267 ppi",
    "Light Laptop without Optical Disk Drive",
    "Windows 10 OS",
    "EMI starting from $50/month",
    "1 Year Onsite Warranty",
  ];

  const productSpecifications = [
    { label: "Published year", value: "2020" },
    { label: "Available", value: "Yes" },
    {
      label: "Sales Package",
      value: "2 in 1 Laptop, Power Adaptor, User Guide, Warranty Documents",
    },
    { label: "Model Number", value: "M1866" },
    { label: "Part Number", value: "PUV-00028" },
    { label: "Series", value: "Surface Pro 7" },
    { label: "Color", value: "Matte Black" },
    { label: "Type", value: "2 in 1 Laptop" },
    { label: "Battery Backup", value: "Upto 10.5 hours" },
  ];

  return (
    <div>
      <div className="w-full h-auto bg-[url('/img/realestate/bg.webp')] bg-center bg-cover text-white py-20 xl:py-28 px-5 lg:px-10 xl:px-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#866a05d6] to-[#00000038] opacity-90"></div>
        <div className="relative">
          <h1 className="font-medium text-2xl lg:text-3xl mb-1 heading">
            Electronics
          </h1>
          <ul className="flex items-center gap-1 text-xs ">
            <li>Home</li>
            <li>
              <MdKeyboardArrowRight />
            </li>
            <li>All Category</li>
            <li>
              <MdKeyboardArrowRight />
            </li>
            <li>Washing Machines</li>
          </ul>
        </div>
      </div>

      <div className="px-5 md:px-8 xl:px-32 shadow-md rounded-sm  py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white lg:p-3 lg:gap-x-10">
          <div className="lg:col-span-1">
            <div className="sticky top-0">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop={true}
                className="mySwiper rounded-lg overflow-hidden shadow-lg"
              >
                <SwiperSlide>
                  <div className="w-full h-[250px] md:h-[300px]">
                    <img
                      src="/img/ProductsInner/ProductsInner2.webp"
                      alt="product"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[250px] md:h-[300px]">
                    <img
                      src="/img/ProductsInner/product4.webp"
                      alt="product"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[250px] md:h-[300px]">
                    <img
                      src="/img/ProductsInner/ProductsInner3.webp"
                      alt="product"
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[250px] md:h-[300px]">
                    <img
                      src="/img/ProductsInner/ProductsInner1.webp"
                      alt="product"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="flex  gap-x-5 text-white mt-5">
                <button className="w-full  py-3 text-center bg-[#425D75] rounded-lg transition duration-300 ease-in-out hover:bg-[#3a4e5d] shadow-lg">
                  Get Quote
                </button>
                <button className="w-full  py-3 text-center bg-[#FB641B] rounded-lg transition duration-300 ease-in-out hover:bg-[#e15f19] shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div className="p-4 shadow-md rounded-lg">
                <span className="text-white px-2 text-xs rounded bg-green-600 font-semibold">
                  Verified
                </span>
                <h1 className="text-2xl font-bold mt-2">
                  Weight Loss Digital Products
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg md:text-2xl lg:text-3xl font-bold">
                    $52
                  </span>
                  <span className="text-green-500 text-sm font-semibold">
                    20% off
                  </span>
                </div>
              </div>

              <div className="p-4 shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Highlights</h4>
                <ul className="space-y-1">
                  {productFeatures.map((elm, ind) => (
                    <li
                      key={ind}
                      className="flex items-center gap-x-2 font-medium text-gray-800 text-base"
                    >
                      <svg
                        className="bg-blue-400 text-blue-200 rounded-full"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 12L10 18V6L16 12Z"></path>
                      </svg>
                      {elm}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Description</h4>
                <p className="text-gray-600">
                  It is Link long-established fact that Link reader will be
                  distracted by the readable content of Link page when looking
                  at its layout...
                </p>
              </div>

              <div className="p-4 shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Specifications</h4>
                <ul className="space-y-1">
                  {productSpecifications.map((spec, index) => (
                    <li key={index} className="grid grid-cols-2">
                      <span className="font-medium text-gray-400">
                        {spec.label}
                      </span>
                      <div className="relative before:content-[':'] before:absolute before:-left-4">
                        {spec.value}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Laptops",
                    "Electronic Items",
                    "Products",
                    "Microsoft",
                    "Offers",
                    "Surface",
                  ].map((tag) => (
                    <button
                      key={tag}
                      className="text-gray-800 cursor-pointer text-xs py-1 px-3 bg-sky-100"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <Link href="/profile" className="p-4 shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Created by</h4>
                <div className="relative">
                  <div className="w-full h-[20vh] relative">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="w-full h-full bg-[url('/img/dashboard/dashbordleft2.webp')] bg-contain"></div>
                  </div>
                  <div className="flex flex-col items-center -mt-10 relative">
                    <img
                      src="/img/dashboard/use.webp"
                      alt="product"
                      className="w-24 h-24 lg:h-32 lg:w-32 rounded-full"
                    />
                    <h4 className="text-blue-400 font-bold mt-3">
                      Claude D Dial
                    </h4>
                    <p className="text-xs mt-3">Joined on Jan 2020</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
