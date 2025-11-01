// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from 'swiper/modules';
// import { IoStar } from "react-icons/io5";

// const StarRating = ({ count }) => (
//   <div className="flex text-2xl  justify-center text-[#FFAC15] py-4">
//     {Array.from({ length: count }, (_, index) => (
//       <IoStar key={index} />
//     ))}
//   </div>
// );

// const TestmonialCard = ({ image, desc, name }) => (
//   <div className="card mx-auto w-[250px] bg-white shadow-lg p-5 rounded-lg">
//     <div>
//       <img
//         src={image}
//         alt={name}
//          className="w-24 h-24 mx-auto object-cover rounded-full mb-4 border-4 border-[#3190E7]"
//       />
//       <p className="text-gray-700 text-center text-xs mb-3 ">{desc}</p>
//       <StarRating count={5} />
//     </div>
//     <button className="font-semibold relative z-10 mx-auto block -mb-8 px-5 py-2 rounded-md text-xs bg-[#3190E7] text-white">

//       {name}
//     </button>
//   </div>
// );

// const Testmonial = () => {
//   const testMonailData = [
//     {
//       image: "/img/testmonial/testmonailImg1.webp",
//       desc: "Exceptional service! Highly recommended",
//       name: "MICHAEL TEDDY",
//     },
//     {
//       image: "/img/testmonial/testmonailImg2.webp",
//       desc: "Professional and efficient. 10/10 would hire again.",
//       name: "EMILIANO AQUILANI",
//     },
//     {
//       image: "/img/testmonial/testmonailImg3.webp",
//       desc: "Great experience with this company. Will definitely use again!",
//       name: "IAN OWEN",
//     },
//     {
//       image: "/img/testmonial/testmonailImg4.webp",
//       desc: "Outstanding work. Exceeded my expectations.",
//       name: "MICHAEL TEDDY",
//     },
//     {
//       image: "/img/testmonial/testmonailImg5.webp",
//       desc: "Very satisfied with the results. Thank you!",
//       name: "ANNA ITURBE",
//     },
//   ];

//   return (
//     <div className="px-5 md:px-8 xl:px-32  py-5 ">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay, Pagination]}
//               breakpoints={{
//           640: { slidesPerView: 1, spaceBetween: 20 },
//           768: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 4, spaceBetween: 30 },
//         }}
//         className=" custom-swiper h-[350px] "
//       >
//         {testMonailData.map((elm, index) => (
//           <SwiperSlide key={index} className="">
//             <TestmonialCard {...elm} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testmonial;

"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

export default function Testmonial() {
  const prevRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button

  const testMonailData = [
    {
      image: "/img/testmonial/testmonailImg1.webp",
      desc: "Exceptional service! The team was incredibly professional, responsive, and attentive to my needs. They went above and beyond to deliver results that exceeded my expectations. I highly recommend them to anyone looking for top-notch service.",
      name: "MICHAEL TEDDY",
    },
    {
      image: "/img/testmonial/testmonailImg2.webp",
      desc: "Professional and efficient. The entire process was smooth, and communication was excellent from start to finish. They truly understand the client's vision and work diligently to bring it to life. 10/10 would hire again for future projects!",
      name: "EMILIANO AQUILANI",
    },
    {
      image: "/img/testmonial/testmonailImg3.webp",
      desc: "Great experience with this company. Their attention to detail and dedication to delivering high-quality work were impressive. They took the time to understand my requirements and executed everything flawlessly. I will definitely use their services again in the future!",
      name: "IAN OWEN",
    },
    {
      image: "/img/testmonial/testmonailImg4.webp",
      desc: "Outstanding work. From the initial consultation to the final delivery, every aspect of the project was handled with care and expertise. They exceeded my expectations in terms of quality, efficiency, and professionalism. I couldn’t be happier with the results!",
      name: "MICHAEL TEDDY",
    },
    {
      image: "/img/testmonial/testmonailImg5.webp",
      desc: "Very satisfied with the results. The team was incredibly skilled and knowledgeable, making the entire process seamless and stress-free. They provided excellent support and guidance throughout the project, ensuring that everything met my requirements perfectly. Thank you for the amazing work!",
      name: "ANNA ITURBE",
    },
  ];

  return (
    <div className="relative   ">
      <div className="space-y-20 bg-[url('/successstory/successstory-bg.webp')] bg-cover bg- text-black py-5 ">
        <div className="px-5 md:px-8 xl:px-32 grid grid-cols-1 lg:grid-cols-3 gap-y-10 xl:gap-y-0 gap-x-5 items-start">
          <div className="col-span-1 space-y-5">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold">
              What people say <br /> about us
            </h3>
            <p className="text-sm text-justify md:text-base  ">
              We strongly support best practice sharing across our <br />{" "}
              operations around the world and across various transportation
              sectors
            </p>
            <div className="relative space-x-2 flex justify-start">
              <button
                ref={prevRef}
                className="w-10 h-10 md:w-12 md:h-12 text-[#fff] bg-blue-400 hover:bg-blue-800 hover:text-white flex items-center justify-center text-lg md:text-2xl  group rounded-full transition-all duration-500 ease-in-out"
              >
                <IoArrowBack className="group-hover:-translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 md:w-12 md:h-12 text-[#fff] bg-blue-400 hover:bg-blue-800 hover:text-white flex items-center justify-center text-lg md:text-2xl group rounded-full transition-all duration-500 ease-in-out"
              >
                <IoArrowForward className="group-hover:translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2">
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
                640: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 1, spaceBetween: 20 },
                1024: { slidesPerView: 1, spaceBetween: 20 },
                1280: { slidesPerView: 1, spaceBetween: 25 },
              }}
            >
              {testMonailData.map((story, index) => (
                <SwiperSlide key={index} className="xl:pb-10 ">
                  <div className="relative   ">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full relative border border-gray-200 overflow-hidden ">
                      <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] bg-blue-50 rounded-full"></div>

                      <p className="text-gray-600 text-justify sm:text-start text-lg relative z-10">
                        {story.desc}
                      </p>

                      <div className="mt-4 relative z-10">
                        <p className="font-bold text-lg text-gray-900">
                          {story.name}
                        </p>
                        <p className="text-gray-500 text-sm">Customers</p>
                      </div>

                      <div className="mt-2 flex relative z-10">
                        {Array(5)
                          .fill("")
                          .map((_, index) => (
                            <span
                              key={index}
                              className="text-yellow-500 text-xl"
                            >
                              ★
                            </span>
                          ))}
                      </div>
                    </div>
                    <div className="absolute bottom-[10px] right-[20px] border-4 border-yellow-500 rounded-lg overflow-hidden w-16 h-16">
                      <img
                        src={story.image}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
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
