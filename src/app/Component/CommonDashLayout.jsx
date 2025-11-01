"use client";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import Link from "next/link";
import DashLeftOpen from "./DashLeftOpen";

function CommonDashLayout({ children }) {
  return (
    <div className="px-5 md:pr-16  py-10 bg-[#F5F6FA] relative ">
      <div className="grid md:grid-cols-2 gap-y-10 gap-x-4  lg:grid-cols-4   ">
        <div className="hidden  xl:block xl:col-span-1   p-2 xl:p-5  ">
          <div className="sticky top-5">
            <DashLeft />
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-4 xl:col-span-2 flex items-start gap-4 xl:block ">
          <div className="sticky top-24 hidden md:block  xl:hidden">
            <DashLeftOpen />
          </div>
          <div className=" w-full space-y-4">
            {children}
            <div className="xl:hidden w-full mt-4">
              <DashRight />
            </div>
          </div>
        </div>

        <div className=" hidden xl:block md:col-span-2 lg:col-span-4   xl:col-span-1   bg-[#F5F6FA] sm:p-5">
          {/* right side  */}
          <DashRight />
        </div>
      </div>
    </div>
  );
}

export default CommonDashLayout;
