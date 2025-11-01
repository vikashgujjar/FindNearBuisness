// import React from "react";
// import {  FaArrowRightLong } from "react-icons/fa6";
// import { FaLongArrowAltRight } from "react-icons/fa";

// export default function SuccessStory() {
//   const list = [
//     {
//       name: "Rajesh Chhabria",
//       comapenyname: "Chhabria & Sons",
//       profession: "Business Owner",
//       year: "13",
//       bg: "bg-[#FFF3F7]",
//       img: "https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fimg.jdmagicbox.com%2Fclient_videos%2FBangalore%2Fbangalore_rajesh-chhabria_1713166740.jpg&w=640&q=75",
//     },
//     {
//       name: "Rajesh Chhabria",
//       comapenyname: "Chhabria & Sons",
//       profession: "Business Owner",
//       year: "13",
//       bg: "bg-[#DEF7FF]",
//       img: "https://www.justdial.com/Advertise/_next/image?url=https%3A%2F%2Fimg.jdmagicbox.com%2Fclient_videos%2FBangalore%2Fbangalore_varshini_1713165848.jpg&w=640&q=75",
//     },
//     {
//       name: "Rajesh Chhabria",
//       comapenyname: "Chhabria & Sons",
//       profession: "Business Owner",
//       year: "13",
//       bg: "bg-[#EFF1FB]",
//       img: "https://media.istockphoto.com/id/1360178437/photo/indian-groceries-business-man-noting-orders-while-talking-with-customer-on-mobile-phone-at.jpg?s=612x612&w=0&k=20&c=uPN7_Rgeuktugb6jT8CSuZxcPERbygxaGBTKOJzzP58=",
//     },
//   ];

//   return (
//     <div id="Success" className="bg-[#FFFCF4] px-5 md:px-12 xl:px-32 py-5 md:py-10 flex flex-col lg:flex-row items-start justify-between gap-10">
//       <div className="w-full lg:w-1/3 space-y-6">
//         <img src="/img/Advertise/2.svg" alt="growth" className="w-12 md:w-32" />
//         <h4 className="font-bold text-2xl md:text-3xl font-serif">Success Stories</h4>
//         <p className="text-lg md:text-xl">5.9 Lakh+ Advertisers</p>
//         <button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 rounded-md text-white font-semibold px-4 py-2 transition">
//           <span>See All Stories</span>
//           <FaLongArrowAltRight className="text-lg mt-1 group-hover:translate-x-1 transition-transform duration-200" />
//         </button>
//       </div>

//       {/* Right Section - Stories */}
//       <div className="w-full lg:w-2/3 overflow-hidden">
//         <div className="flex lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 overflow-x-auto lg:overflow-hidden snap-x snap-mandatory scroll-smooth">
//           {list.map((item, index) => (
//             <div key={index} className="min-w-[80%] sm:min-w-[60%] lg:w-auto snap-start">
//               <div className="w-full h-[220px] md:h-[280px] bg-white shadow-md rounded-t-lg overflow-hidden">
//                 <img src={item.img} alt="Success Story" className="w-full h-full object-cover" />
//               </div>

//               <div className={`${item.bg} p-4 rounded-b-lg shadow-md space-y-2`}>
//                 <h6 className="text-lg md:text-xl font-bold">{item.name}</h6>
//                 <p className="text-base md:text-lg text-gray-600">{item.comapenyname}</p>
//                 <p className="text-sm md:text-base text-gray-400">{item.profession}</p>

//                 <div className="pt-5">
//                   <p className="text-sm md:text-base text-gray-700">Customer since {item.year} years</p>
//                   <button className="flex items-center gap-x-2 text-blue-800 font-semibold hover:text-blue-600 transition">
//                     View Business <FaArrowRightLong className="pt-1" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

export default function SuccessStory() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const list = [
    {
      name: "Rajesh Chhabria",
      comapenyname: "Chhabria & Sons",
      profession: "Business Owner",
      year: "13",
      bg: "bg-[#FFF3F7]",
      img: "/img/Advertise/success1.webp",
    },
    {
      name: "Varshini R.",
      comapenyname: "GreenLeaf Café",
      profession: "Entrepreneur",
      year: "6",
      bg: "bg-[#DEF7FF]",
      img: "/img/Advertise/success2.webp",
    },
    {
      name: "Amit Khurana",
      comapenyname: "TechSpark Solutions",
      profession: "Software Developer",
      year: "9",
      bg: "bg-[#EFF1FB]",
      img: "/img/Advertise/success3.webp",
    },
    {
      name: "Nikita Sharma",
      comapenyname: "StyleHub Boutique",
      profession: "Fashion Designer",
      year: "5",
      bg: "bg-[#E7FBEF]",
      img: "/img/Advertise/success4.avif",
    },

    {
      name: "Pooja Verma",
      comapenyname: "Bake n’ Bliss",
      profession: "Baker",
      year: "4",
      bg: "bg-[#F3E8FF]",
      img: "/img/Advertise/success5.avif",
    },
  ];

  return (
    <div id="Success" className="relative">
      <div className="relative bg-cover bg-center text-black py-10">
        {/* Gradient Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFFCF4] to-[#0f65a737] opacity-40 -z-10 blur-lg"></div>

        <div className="px-5 md:px-8 xl:px-32 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-8 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <img
              src="/img/Advertise/2.svg"
              alt="growth"
              className="w-12 md:w-24"
            />
            <h4 className="font-bold text-2xl md:text-3xl font-serif">
              Success Stories
            </h4>
            <p className="text-lg md:text-xl">5.9 Lakh+ Advertisers</p>

            {/* Swiper Navigation Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                ref={prevRef}
                className="w-10 h-10 md:w-12 md:h-12 group text-white bg-black hover:bg-gray-700 flex items-center justify-center text-lg md:text-2xl rounded-full transition-all duration-300"
              >
                <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 md:w-12 md:h-12 group text-white bg-black hover:bg-gray-700 flex items-center justify-center text-lg md:text-2xl rounded-full transition-all duration-300"
              >
                <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="lg:col-span-2 w-full">
            <Swiper
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 15 },
                640: { slidesPerView: 1.2, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 25 },
                1280: { slidesPerView: 3, spaceBetween: 30 },
              }}
            >
              {list.map((item, index) => (
                <SwiperSlide key={index} className="pb-10">
                  <div className="w-full rounded-xl overflow-hidden shadow-md bg-white">
                    {/* Image */}
                    <div className="h-[220px] md:h-[260px]">
                      <img
                        src={item.img}
                        alt="Success Story"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className={`${item.bg} p-4 space-y-2`}>
                      <h6 className="text-lg md:text-xl font-bold">
                        {item.name}
                      </h6>
                      <p className="text-base text-gray-600">
                        {item.comapenyname}
                      </p>
                      <p className="text-sm text-gray-400">{item.profession}</p>

                      <div className="pt-4">
                        <p className="text-sm text-gray-700">
                          Customer since {item.year} years
                        </p>
                        <button className="flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-600 transition text-sm">
                          View Business{" "}
                          <FaArrowRightLong className="mt-[2px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
