"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Herosection = ({ loc }) => {
  const [swiperHover, setSwiperHover] = useState(false);
  const getLocationHref = () => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${
      location?.replace(/\s+/g, "") || "default-location"
    }/Coupon-deals`;
  };
  const getLocationHref2 = () => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${location?.replace(/\s+/g, "") || "default-location"}/realestate`;
  };
  console.log(swiperHover);
  const filteredData2 = [
    "/img/filteredData2/banner1.webp",
    "/img/filteredData2/banner2.webp",
    "/img/filteredData2/banner3.webp",
  ];

  const filteredData = [
    {
      bgColor: "bg-[#0F7DD8]",
      text: "B2B",
      spanText: "Qucik  Quote",
      imageUrl: "/img/herosection/1.webp",
    },
    {
      bgColor: "bg-[#2654A1]",
      text: "Repair & Service ",
      spanText: "Get nearest Vendor ",
      imageUrl: "/img/herosection/2.webp",
    },
    {
      bgColor: "bg-[#6769D0]",
      text: "Real estate",
      spanText: "Finest Agents",
      imageUrl: "/img/herosection/3.webp",
    },
    {
      bgColor: "bg-[#00AC7D]",
      text: "Doctors",
      spanText: "Book Now",
      imageUrl: "/img/herosection/4.webp",
    },
  ];

  const t = (key) => {
    const translations = {
      title: "",
    };
    return translations[key];
  };

  return (
    <div className="my-6">
      <div className="flex flex-row px-5 md:px-8 xl:px-32 justify-between gap-4 w-full items-center">
        {/* Left Side - Swiper */}

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full relative  xl:w-3/6 h-[140px] md:h-[250px] lg:h-[250px] "
        >
          {filteredData2.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col rounded-2xl overflow-hidden bg-white"
              onMouseLeave={() => setSwiperHover(false)}
              onMouseEnter={() => setSwiperHover(true)}
            >
              {" "}
              <Link href={getLocationHref()}>
                <img
                  src={item}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <button
            onMouseEnter={() => setSwiperHover(true)}
            className={`${
              swiperHover ? "opacity-100" : "opacity-0"
            } transition-all custom-prev duration-100   absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#00000094] text-white p-2 rounded-full shadow-md  z-50`}
          >
            <IoIosArrowForward className="-rotate-180" />
          </button>
          <button
            onMouseEnter={() => setSwiperHover(true)}
            className={`${
              swiperHover ? "opacity-100" : "opacity-0"
            } transition-all custom-next duration-100 absolute z-50 top-1/2 right-4 transform -translate-y-1/2 bg-[#0000009a] text-white p-2 rounded-full shadow-md `}
          >
            <IoIosArrowForward className="" />
          </button>
        </Swiper>
        {/* Right Side - Static Images with Background Image for Text */}
        <div className="hidden lg:flex flex-row gap-4 lg:w-3/6">
          {filteredData.map((item, index) => (
            <Link
              href={getLocationHref2()}
              key={index}
              className={`rounded-2xl overflow-hidden h-[100px] md:h-[150px] lg:h-[250px] flex-1 relative ${
                item.bgColor ? item.bgColor : ""
              }`}
            >
              {item.imageUrl ? (
                <div
                  className="h-full w-full bg-cover bg-center absolute z-20 top-0 left-0"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
              ) : null}

              <div className="relative z-10 h-full  p-5   ">
                <h6 className="text-white text-lg font-semibold">
                  {" "}
                  {item.text}
                </h6>
                <p className="text-sm text-[#d3d3d3]">{item.spanText}</p>
              </div>
              <div className="relative  w-full text-white z-50 bottom-4">
                <div className="group absolute  bottom-2 w-full flex items-center">
                  <Link
                    href={getLocationHref2()}
                    className="text-[#0d6efd]  bg-transparent group-hover:bg-white flex items-center w-fit rounded-r-md px-1 py-1 shadow-md transform transition-transform duration-500 -translate-x-5  group-hover:translate-x-0"
                  >
                    <span className="hidden group-hover:inline-block transition-all duration-500 ease-in-out">
                      Explore
                    </span>
                    <IoIosArrowForward className="ml-4 font-bold text-base text-white group-hover:text-blue-500" />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
