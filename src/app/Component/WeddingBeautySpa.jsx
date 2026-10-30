"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { DotGrid, SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem } from "../ui/motion";
import { cityHref } from "../context/LocationContext";

const data = [
  {
    heading: "Wedding Requisites",
    accent: "from-magenta-500 to-pin-500",
    list: [
      { label: "Banquet Halls", src: "/img/WeddingBeautySpa/1.webp" },
      { label: "Bridal Requisite", src: "/img/WeddingBeautySpa/2.webp" },
      { label: "Caterers", src: "/img/WeddingBeautySpa/3.webp" },
    ],
  },
  {
    heading: "Beauty & Spa",
    accent: "from-brand-500 to-magenta-500",
    list: [
      { label: "Beauty Parlours", src: "/img/WeddingBeautySpa/4.avif" },
      { label: "Spa & Massages", src: "/img/WeddingBeautySpa/5.webp" },
      { label: "Salons", src: "/img/WeddingBeautySpa/6.avif" },
    ],
  },
  {
    heading: "Repairs & Services",
    accent: "from-cyan-400 to-brand-500",
    list: [
      { label: "AC Service", src: "/img/WeddingBeautySpa/7.avif" },
      { label: "Car Service", src: "/img/WeddingBeautySpa/8.webp" },
      { label: "Bike Service", src: "/img/WeddingBeautySpa/9.webp" },
    ],
  },
  {
    heading: "Daily Needs",
    accent: "from-pin-400 to-magenta-500",
    list: [
      { label: "Movies", src: "/img/WeddingBeautySpa/10.webp" },
      { label: "Grocery", src: "/img/WeddingBeautySpa/11.avif" },
      { label: "Electrician", src: "/img/WeddingBeautySpa/12.webp" },
    ],
  },
];

export default function WeddingBeautySpa({ loc }) {
  const href = cityHref(loc, "realestate");

  return (
    <section className="relative overflow-hidden bg-mist py-14 sm:py-20">
      <DotGrid className="inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Life moments"
          title="Everything for"
          highlight="life’s big days"
          subtitle="From the wedding hall to the weekly groceries — sorted in one place."
        />

        <Stagger gap={0.1} className="mt-10 grid gap-5 lg:mt-14 xl:grid-cols-2">
          {data.map((group) => (
            <StaggerItem key={group.heading} className="rounded-3xl bg-white p-4 shadow-card sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-3 text-lg font-bold text-night-900 sm:text-xl">
                  <span className={`h-8 w-1.5 rounded-full bg-gradient-to-b ${group.accent}`} />
                  {group.heading}
                </h3>
                <Link href={href} className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all">
                  See all <FaArrowRight className="text-xs" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                {group.list.map((item) => (
                  <Link key={item.label} href={href} className="group relative overflow-hidden rounded-2xl">
                    <img src={item.src} alt={item.label} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110 sm:aspect-square" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-transparent to-transparent" />
                    <p className="absolute inset-x-0 bottom-0 p-2 text-center text-[11px] font-semibold text-white sm:p-3 sm:text-sm">{item.label}</p>
                  </Link>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
