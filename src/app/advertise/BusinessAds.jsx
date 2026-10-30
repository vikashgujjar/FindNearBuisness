"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem } from "../ui/motion";

const ads = [
  "Maximize Your Visibility with Smart Category Choices",
  "Reach More Customers by Picking the Right Niche",
  "Boost Your Business by Listing in Targeted Categories",
];

export default function BusinessAds() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading align="left" eyebrow="Optimization" title="Boost your business with" highlight="Future Touch Ads" />
        <Stagger gap={0.12} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ads.map((dec, i) => (
            <StaggerItem key={dec} className={`group panel overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className="overflow-hidden">
                <img src="/img/Advertise/boost.webp" alt="" className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-lg font-bold leading-snug text-night-900">{dec}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-all group-hover:gap-3">
                  Learn More <FaArrowRightLong />
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
