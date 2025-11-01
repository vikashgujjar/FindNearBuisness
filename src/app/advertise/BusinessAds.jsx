import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function BusinessAds() {
  const ads = [
    {
      bg: "bg-[#FFF3F7]",
      img: "/img/Advertise/boost.webp",
      dec: "Maximize Your Visibility with Smart Category Choices"
    },
    {
      bg: "bg-[#DEF7FF]",
      img: "/img/Advertise/boost.webp",
      dec: "Reach More Customers by Picking the Right Niche"
    },
    {
      bg: "bg-[#EFF1FB]",
      img: "/img/Advertise/boost.webp",
      dec: "Boost Your Business by Listing in Targeted Categories"
    }
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 xl:px-32 py-6 md:py-12 bg-[#F9FCFF]">
      <h6 className="font-bold text-xl sm:text-2xl md:text-3xl text-center lg:text-left leading-snug">
        Boost Your Business with Future Touch Ads Optimization
      </h6>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {ads.map((ad, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow-md ${ad.bg} flex flex-col`}
          >
            {/* Image */}
            <div className="w-full aspect-video">
              <img
                src={ad.img}
                alt="Business Ad"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="bg-white flex flex-col justify-between p-4 sm:p-5 md:p-6 flex-1">
              <p className="text-gray-800 font-semibold text-base sm:text-lg md:text-xl leading-snug">
                {ad.dec}
              </p>
              <button className="text-blue-700 text-sm sm:text-base md:text-lg flex items-center gap-2 font-semibold mt-4 hover:underline">
                Learn More <FaArrowRightLong className="mt-[2px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
