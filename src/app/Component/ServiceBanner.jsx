"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ServiceBanner = ({ loc }) => {
  const getLocationHref = () => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `/${location?.replace(/\s+/g, "") || "default-location"}/realestate`;
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".custom-prev")?.classList.remove("swiper-button-disabled");
      document.querySelector(".custom-next")?.classList.remove("swiper-button-disabled");
    }, 500);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 xl:px-32 py-6 md:py-10 xl:py-16 max-w-screen-2xl mx-auto">
      <div className="relative">
        <Swiper
          loop={true}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <Link href={getLocationHref()} className="block">
              <img
                src="/img/Servicelist/serviceBanner2.webp"
                alt="banner"
                className="w-full h-[140px] xs:h-[160px] sm:h-[180px] md:h-[190px] lg:h-[220px] object-cover rounded-md"
              />
            </Link>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <Link href={getLocationHref()} className="block">
              <img
                src="/img/Servicelist/serviceBanner1.webp"
                alt="banner"
                className="w-full h-[140px] xs:h-[160px] sm:h-[180px] md:h-[190px] lg:h-[220px] object-cover rounded-md"
              />
            </Link>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-white hover:bg-[#ffffff90] text-black p-2 sm:p-3 md:p-4 rounded-full shadow z-10">
          <IoIosArrowForward className="-rotate-180 text-lg sm:text-xl" />
        </button>
        <button className="custom-next absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white hover:bg-[#ffffff90] text-black p-2 sm:p-3 md:p-4 rounded-full shadow z-10">
          <IoIosArrowForward className="text-lg sm:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ServiceBanner;


