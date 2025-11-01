import React from "react";

export default function AchieveGoals() {
  const achieveGoals = [
    {
      img: "/img/Advertise/goal1.svg",
      desc: "Rank Ahead of Your Competition",
    },
    {
      img: "/img/Advertise/goal2.svg",
      desc: "Find Ready to Buy Customers Instantly",
    },
    {
      img: "/img/Advertise/goal3.svg",
      desc: "Track Leads & Competition Trends",
    },
  ];

  return (
    <div id="Benefits" className="px-5 md:px-10 xl:px-32 py-10 md:py-16">
      <h5 className="text-2xl md:text-3xl xl:text-4xl font-bold font-serif text-center text-gray-800 leading-snug">
        FutureTouch Ads Help You Achieve Your Goals 🚀
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {achieveGoals.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
          >
            <img
              src={item.img}
              alt={item.desc}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
