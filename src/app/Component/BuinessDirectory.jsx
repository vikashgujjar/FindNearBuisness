import React from "react";
import Link from "next/link";

export default function BusinessDirectory() {
  return (
    <div className="bg-[#20344c] px-5 md:px-8 xl:px-32 py-10">
      <div className="flex items-center justifys-center bg-gradient-to-b from-[#ffea31] to-[#ffbe5e] rounded-lg shadow-xl shadow-black/80 overflow-hidden py-0 lg:py-5 text-center w-full">
        <div className="flex lg:grid grid-cols-6 xl:flex py-8 flex-col lg:flex-row w-full  items-center justify-between px-5">
          <img
            src="/img/business Directory/business Directory.webp"
            alt="Business Directory"
            className="mb-6 lg:col-span-1 w-[80px] xl:w-[100px] rounded-lg  h-auto"
          />
          <div className="lg:col-span-4">
            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              #1 Business Directory and Service Provider
            </h4>
            <p className="text-gray-800 lg:max-w-[80%] mx-auto  text-center text-sm font-semibold mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
          </div>
          <Link href="/mybusiness" className="col-span-1">
            <span className="bg-[#20344c]  text-white font-medium text-xs py-3 px-6 rounded-full hover:bg-[#162a3a] transition duration-300">
              Add my business
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
