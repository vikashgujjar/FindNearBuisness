"use client";
import React, { useState } from "react";

const plans = [
  { name: "Standard", color: "text-[#139D71]", originalPrice: "₹ 132/Day", discount: "25% Off", finalPrice: "₹99" },
  { name: "Premium", color: "text-[#E52B8D]", originalPrice: "₹ 199/Day", discount: "25% Off", finalPrice: "₹149" },
  { name: "Pro", color: "text-[#4E49E9]", originalPrice: "₹ 266/Day", discount: "25% Off", finalPrice: "₹199" },
  { name: "Growth", color: "text-[#4E49E9]", originalPrice: "Get Max Exposure", discount: "List in", finalPrice: "Top 5" },
];

const features = [
  { title: "Search Visibility", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/premium_listing_icon_new.svg", values: ["1X", "2X", "3X", "Guaranteed Top Visibility"] },
  { title: "Open Catalogue", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/premium_listing_icon_new.svg", values: ["✔", "✔", "✔", "✔"] },
  { title: "Payment Solutions", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/premium_listing_icon_new.svg", values: ["✔", "✔", "✔", "✔"] },
  { title: "Smart Lead System", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/premium_listing_icon_new.svg", values: ["✔", "✔", "✔", "✔"] },
  { title: "Competitor Analysis", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/premium_listing_icon_new.svg", values: ["✔", "✔", "✔", "✔"] },
  { title: "Premium Customer Support", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/premium_listing_icon_new.svg", values: ["✔", "✔", "✔", "✔"] },
];

export default function Plans() {
  const [currentPlan, setCurrentPlan] = useState("Standard");

  return (
    <div id="Plans" className="px-4 md:px-10 xl:px-24 py-10 bg-white">
      <div className="overflow-x-auto w-full rounded-xl">
        <table className="w-full min-w-[800px] border border-gray-200 shadow-xl rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-700">
              <th className="w-[40%] p-4 align-top">
                <h5 className="text-lg sm:text-xl md:text-2xl font-bold font-serif mb-1">
                  Plans
                </h5>
                <p className="text-gray-600 text-sm sm:text-base">
                  Choose a plan and start growing your business today.
                </p>
              </th>
              {plans.map((plan, index) => (
                <th
                  key={index}
                  onClick={() => setCurrentPlan(plan.name)}
                  className="p-4 w-[20%] cursor-pointer hover:bg-blue-50 transition"
                >
                  <div
                    className={`p-4 rounded-lg text-center border ${
                      currentPlan === plan.name
                        ? "bg-[#ECF7FC] border-blue-400"
                        : "border-transparent"
                    } transition duration-300`}
                  >
                    <h5 className={`${plan.color} font-bold text-xl md:text-2xl`}>
                      {plan.name}
                    </h5>
                    <div className="text-sm line-through text-gray-400">
                      {plan.originalPrice}
                    </div>
                    <div className="text-xs text-amber-700 mb-1">{plan.discount}</div>
                    <h6 className="font-bold text-lg md:text-xl">
                      {plan.finalPrice}
                      {index !== 3 && (
                        <span className="text-xs text-gray-600 font-normal"> /Day</span>
                      )}
                    </h6>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr
                key={idx}
                className={`border-t hover:bg-gray-50 transition duration-300`}
              >
                <td className="p-4 flex items-center gap-2 text-sm md:text-base font-medium text-gray-700">
                  <img src={feature.icon} alt="icon" className="w-5 h-5" />
                  {feature.title}
                </td>
                {feature.values.map((value, index) => (
                  <td
                    key={index}
                    className="p-4 text-center text-sm md:text-base font-semibold text-gray-800"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
