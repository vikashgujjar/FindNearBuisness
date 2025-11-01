"use client";
import React, { useState } from "react";
import Link from "next/link";
import ListingDeatils from "./ListingDeatils";
import Servicesprovider from "./Servicesprovider";
import SpecialOffer from "./SpecialOffer";
import VideoGallery from "./VideoGallery";
import Success from "./Success";
import OtherInformation from "./OtherInformation";
import Sucesss from "./Sucesss";
export default function Addnewlisting() {
  const [tab, setActiveTab] = useState(1);
  const steps = [
    {
      step: 1,
      stepHeading: "Basic Info",

      cuurentTab: ListingDeatils,
    },
    {
      step: 2,
      stepHeading: "Service",
      cuurentTab: Servicesprovider,
    },
    {
      step: 3,
      stepHeading: "Offers",
      cuurentTab: SpecialOffer,
    },
    {
      step: 4,
      stepHeading: "Map",
      cuurentTab: VideoGallery,
    },
    {
      step: 5,
      stepHeading: "Other",
      cuurentTab: OtherInformation,
    },
    {
      step: 6,
      stepHeading: "Done",
      cuurentTab: Sucesss,
    },
  ];
  return (
    <div>
      <div
        className={`bg-[url('/img/sign/sign1.webp')]   ${
          tab == 1 || tab == 2 || tab == 3 || tab == 4
            ? "lg:min-h-[90vh]"
            : "h-screen"
        }`}
      >
        <div className="bg-[rgba(0,0,0,0.71)] h-full flex flex-col gap-y-10 items-center justify-center px-4 py-16">
          <div className="flex md:flex-wrap gap-y-5 items-center ">
            {steps.map((elm, index) => (
              <div key={index} className="flex items-center">
                <div
                  onClick={() => setActiveTab(elm.step)}
                  className={`rounded-full ${
                    tab == elm.step
                      ? "bg-green-400 text-white"
                      : "bg-white hover:bg-gray-400 hover:text-white"
                  } transition-all duration-200 text-xs cursor-pointer h-12 w-12  md:h-20 md:w-20 text-black sm:text-xs flex flex-col items-center justify-center `}
                >
                  <h6> step {elm.step}</h6>
                  <p className="hidden md:block">{elm.stepHeading}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-2 md:w-5 bg-white h-1" />
                )}
              </div>
            ))}
          </div>
          {steps.map(
            (elm, index) =>
              elm.step == tab && (
                <div key={index}>
                  <elm.cuurentTab setActiveTab={setActiveTab} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
