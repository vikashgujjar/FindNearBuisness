"use client";
import React, { useState } from "react";

export default function CouponDeals() {
  const initialCoupons = [
    {
      image: "/img/couponDeal/coupon.webp",
      alt: "Reliance fresh",
      title: "Reliance Fresh",
      expires: "31, Mar 2021",
      termsUrl: "/terms",
      termsText: "Terms & Conditions Apply",
      buttonText: "Get Coupon",
      couponToogler: false,
      couponVal: "REL10%",
      couponDesc: "Reliance Fresh",
    },
    {
      image: "/img/couponDeal/coupon.webp",
      alt: "Trends",
      title: "Trends",
      expires: "26, Mar 2021",
      termsUrl: "/terms",
      termsText: "Terms & Conditions Apply",
      buttonText: "Get Coupon",
      couponToogler: false,
      couponVal: "REL10%",
      couponDesc: "Trends",
    },
    {
      image: "/img/couponDeal/coupon.webp",
      alt: "Rn53 Themes",
      title: "Rn53 Themes Offers",
      expires: "25, Mar 2021",
      termsUrl: "/terms",
      termsText: "Terms & Conditions Apply",
      buttonText: "Get Coupon",
      couponToogler: false,
      couponVal: "RN53OFFER",
      couponDesc: "Rn53 Themes",
    },
    {
      image: "/img/couponDeal/coupon.webp",
      alt: "Future Touch",
      title: "Future Touch 50% Offer",
      expires: "23, Dec 2021",
      termsUrl: "/terms",
      termsText: "Terms & Conditions Apply",
      buttonText: "Get Coupon",
      couponToogler: false,
      couponVal: "BIZ50%",
      couponDesc: "Future Touch",
    },
  ];

  const [coupons, setCoupons] = useState(initialCoupons);

  const toggleCoupon = (index) => {
    const updatedCoupons = coupons.map((item, i) =>
      i === index ? { ...item, couponToogler: !item.couponToogler } : item
    );
    setCoupons(updatedCoupons);
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[20vh] md:h-[35vh] lg:h-[45vh] overflow-hidden">
        <img
          src="/img/couponDeal/couponDeal1.webp"
          alt="Coupon Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Coupons & Deals
          </h1>
        </div>
      </div>

      {/* Coupon Section */}
      <section className="py-12 px-5 md:px-8 xl:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <p className="text-gray-700">
            Post your events, seminars, webinars, festivals, and more
          </p>
          <input
            type="text"
            placeholder="Search event in your city..."
            className="mt-5 px-6 py-3 w-full md:w-1/2 rounded-full border focus:outline-none text-sm shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 max-w-md mx-auto"
            >
              {coupon.couponToogler ? (
                <div className="text-center space-y-5">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
                    🎉 Congratulations!
                  </h2>
                  <p className="text-gray-700 text-sm">
                    Here’s your code for{" "}
                    <span className="font-semibold text-gray-900">
                      {coupon.couponDesc}
                    </span>
                    :
                  </p>
                  <div className="bg-gray-100 py-3 px-6 rounded-lg inline-block">
                    <h6 className="font-bold text-xl tracking-wider text-gray-900">
                      {coupon.couponVal}
                    </h6>
                  </div>
                  <button
                    onClick={() => toggleCoupon(index)}
                    className="px-6 py-2 bg-gradient-to-tr from-purple-700 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition"
                  >
                    ⬅ Back
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <img
                      src={coupon.image}
                      alt={coupon.alt}
                      className="w-16 h-16 rounded-lg object-cover shadow"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {coupon.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl">
                    <div className="text-left">
                      <p className="text-xs text-gray-500">EXPIRES:</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {coupon.expires}
                      </p>
                      <a
                        href={coupon.termsUrl}
                        className="text-xs text-blue-600 underline hover:text-blue-800"
                      >
                        {coupon.termsText}
                      </a>
                    </div>
                    <button
                      onClick={() => toggleCoupon(index)}
                      className="px-5 py-2 bg-gradient-to-tr from-purple-700 to-pink-500 text-white text-sm rounded-full font-semibold hover:scale-105 transition"
                    >
                      {coupon.buttonText}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
