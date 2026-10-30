"use client";
import React from "react";
import Link from "next/link";
import { FaStar, FaArrowRight } from "react-icons/fa6";
import { Blob, SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem } from "../ui/motion";
import { cityHref } from "../context/LocationContext";

const cityData = [
  {
    category: "Top Branding Real Estate",
    items: [
      {
        image: "/img/topexplore/topexplore1.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
      {
        image: "/img/topexplore/topexplore2.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore3.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore4.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
      {
        image: "/img/topexplore/topexplore5.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
    ],
  },
  {
    category: "Top Branding Digital Products",
    items: [
      {
        image: "/img/topexplore/topexplore6.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore7.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore8.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore9.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore10.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
        rating: 3.0,
      },
    ],
  },
  {
    category: "Top Branding Hospitals",
    items: [
      {
        image: "/img/topexplore/topexplore11.webp",
        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
      },
      {
        image: "/img/topexplore/topexplore12.webp",

        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore13.webp",

        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
      },
      {
        image: "/img/topexplore/topexplore14.webp",

        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore15.webp",

        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3.0,
      },
    ],
  },
];

const headers = [
  "from-brand-500 to-magenta-500",
  "from-cyan-400 to-brand-500",
  "from-magenta-500 to-pin-500",
];

const Citycategoire = ({ loc }) => {
  const href = cityHref(loc, "all");

  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <Blob className="-right-32 top-10 h-96 w-96 opacity-60" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Leaderboard"
          title="Top brands in"
          highlight="your city"
          subtitle="lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla."
        />

        <Stagger gap={0.12} className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {cityData.map((categoryData, index) => (
            <StaggerItem
              key={categoryData.category}
              className={`overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-100 ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative overflow-hidden bg-gradient-to-r ${headers[index % headers.length]} px-5 py-5 text-white`}>
                <span aria-hidden className="absolute -right-4 -top-8 font-display text-[110px] font-extrabold leading-none text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="relative text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Top 5</p>
                <h3 className="relative text-lg font-bold">{categoryData.category}</h3>
              </div>

              <ol className="divide-y divide-slate-100">
                {categoryData.items.map((imageData, i) => (
                  <li key={i}>
                    <Link href={href} className="group flex items-center gap-3 px-5 py-3.5 transition hover:bg-mist">
                      <span className="w-6 font-display text-sm font-extrabold text-slate-300 group-hover:text-brand-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <img src={imageData.image} alt={imageData.title} className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white shadow" />
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-night-900">{imageData.title}</h4>
                        <p className="truncate text-xs text-slate-500">{imageData.description}</p>
                      </div>
                      {imageData.rating ? (
                        <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600">
                          <FaStar className="text-[10px]" /> {imageData.rating.toFixed(1)}
                        </span>
                      ) : (
                        <FaArrowRight className="shrink-0 text-xs text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
                      )}
                    </Link>
                  </li>
                ))}
              </ol>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Citycategoire;
