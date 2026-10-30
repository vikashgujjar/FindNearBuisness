"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { PageHero, HeroSearch } from "../ui/page";
import { Stagger, StaggerItem } from "../ui/motion";

const services = [
  {
    title: "Real Estate", count: 23, link: "/realestate", image: "/img/service/servicefooter1.webp",
    subcategories: [{ name: "Villas", count: 87 }, { name: "Independent House", count: 45 }, { name: "Plots and Lands", count: 80 }],
    sublink: "/Sonipat/realestate",
  },
  {
    title: "Hotels And Resorts", count: 987, link: "/hotels-resorts", image: "/img/service/servicefooter2.webp",
    subcategories: [{ name: "Street Food", count: 23 }, { name: "Coffee Shop", count: 234 }, { name: "Food Hotel", count: 423 }, { name: "Beach Resort", count: 52 }, { name: "Resort", count: 86 }, { name: "Hotels", count: 33 }],
    sublink: "/Sonipat/hotels-resorts",
  },
  {
    title: "Travel & Tourism", count: 456, link: "/travel", image: "/img/service/servicefooter4.webp",
    subcategories: [{ name: "Adventure", count: 120 }, { name: "Pilgrimage", count: 78 }, { name: "Luxury Travel", count: 65 }],
    sublink: "/Sonipat/travel",
  },
  {
    title: "Healthcare Services", count: 312, link: "/healthcare", image: "/img/service/servicefooter5.webp",
    subcategories: [{ name: "Hospitals", count: 95 }, { name: "Clinics", count: 110 }, { name: "Pharmacies", count: 75 }],
    sublink: "/Sonipat/healthcare",
  },
  {
    title: "Education & Training", count: 654, link: "/education", image: "/img/service/servicefooter6.webp",
    subcategories: [{ name: "Schools", count: 180 }, { name: "Colleges", count: 120 }, { name: "Coaching Centers", count: 90 }],
    sublink: "/Sonipat/education",
  },
  {
    title: "Automobiles & Services", count: 410, link: "/automobiles", image: "/img/service/servicefooter7.webp",
    subcategories: [{ name: "Car Rentals", count: 60 }, { name: "Bike Rentals", count: 40 }, { name: "Mechanic Shops", count: 85 }],
    sublink: "/Sonipat/automobiles",
  },
  {
    title: "IT & Software Solutions", count: 520, link: "/it-software", image: "/img/service/servicefooter8.webp",
    subcategories: [{ name: "Web Development", count: 150 }, { name: "Mobile App Development", count: 100 }, { name: "Cloud Services", count: 70 }],
    sublink: "/Sonipat/it-software",
  },
  {
    title: "Automobiles & Services", count: 610, link: "/automobiles", image: "/img/service/servicefooter9.webp",
    subcategories: [{ name: "Car Rentals", count: 60 }, { name: "Bike Rentals", count: 40 }, { name: "Mechanic Shops", count: 85 }],
    sublink: "/Sonipat/automobiles",
  },
];

export default function Service() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase();
  const list = services.filter(
    (s) => s.title.toLowerCase().includes(q) || s.subcategories.some((c) => c.name.toLowerCase().includes(q))
  );

  return (
    <div className="bg-mist">
      <PageHero
        eyebrow="Directory"
        title="All"
        highlight="Services"
        subtitle="Here post your events, seminar, webinar, festivals and more"
        waveFill="#F4F5FB"
      >
        <HeroSearch placeholder="Search a service" value={query} onChange={(e) => setQuery(e.target.value)} />
      </PageHero>

      <div className="container-x pb-16">
        <Stagger gap={0.06} className="grid gap-5 md:grid-cols-2">
          {list.map((service, i) => (
            <StaggerItem key={`${service.title}-${i}`} className="group panel flex flex-col overflow-hidden transition duration-300 hover:shadow-card-hover sm:flex-row">
              <Link href={service.link} className="relative block shrink-0 overflow-hidden sm:w-48 lg:w-56">
                <img src={service.image} alt={service.title} className="aspect-[16/9] h-full w-full object-cover transition duration-700 group-hover:scale-105 sm:aspect-auto" />
                <span className="chip absolute left-3 top-3 bg-night-950/75 text-white backdrop-blur">{service.count} listings</span>
              </Link>
              <div className="flex-1 p-5">
                <Link href={service.link} className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-bold text-night-900 transition group-hover:text-brand-600">{service.title}</h2>
                  <FaArrowRight className="shrink-0 text-xs text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
                </Link>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.subcategories.map((sub) => (
                    <Link
                      key={sub.name}
                      href={service.sublink}
                      className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                    >
                      {sub.name}
                      <span className="rounded-full bg-mist px-1.5 text-[10px] text-slate-500">{sub.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        {list.length === 0 && <p className="py-16 text-center text-slate-400">No services match “{query}”.</p>}
      </div>
    </div>
  );
}
