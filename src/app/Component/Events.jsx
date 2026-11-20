"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { PageHero, HeroSearch } from "@/app/ui/blocks";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { Avatar } from "@/app/ui/Avatar";
import { useApi, eventHref } from "@/app/lib/api";
let u = {
  hostImage: "/img/dashboard/dashbordleft.webp",
};
let h = [
  {
    imageUrl: "/img/events/1.webp",
    eventName: "New year celebration 2020",
    address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    hostName: "Directory Finder",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Online Marketers Meet-Up",
    address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    hostName: "Directory Finder",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Lunar New Year 2020",
    address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    hostName: "Directory Finder",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Poway Winter Festival",
    address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    hostName: "Directory Finder",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Car Fest 2020",
    address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    hostName: "Directory Finder",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Toyota Cars 20% Offer",
    address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    hostName: "Directory Finder",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Electrical Energy Saving Methods",
    address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    hostName: "Directory Finder",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "States Soccer World Cup 2022",
    address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    hostName: "Directory Finder",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Art Exhibition: Nature's Beauty",
    address: "Art Gallery, Downtown Street, Los Angeles, USA",
    hostName: "Artistic Creations",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Tech Summit 2022",
    address: "Convention Center, Silicon Valley, California, USA",
    hostName: "Tech Innovations Inc.",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Gaming Expo 2022",
    address: "Exhibition Hall, Downtown Street, San Francisco, USA",
    hostName: "GameZone Entertainment",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Food Fest: Taste of the World",
    address: "City Park, Downtown Avenue, Chicago, USA",
    hostName: "Foodie Delights LLC",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Fashion Show: Glamour & Style",
    address: "Fashion Arena, Rodeo Drive, Beverly Hills, USA",
    hostName: "Style Creations Inc.",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Music Concert: Melodies Unplugged",
    address: "Amphitheater, Central Park, Newyork, USA",
    hostName: "Harmony Productions",
  },
  {
    imageUrl: "/img/events/2.webp",
    eventName: "Fitness Expo: Health & Wellness",
    address: "Fitness Center, Main Street, Miami, USA",
    hostName: "FitLife Enterprises",
  },
].map((e) => ({
  ...e,
  ...u,
  date: "Dec 28",
  phone: "98765498465",
}));
function Events() {
  let [e, t] = useState(""),
    { data, error } = useApi("/events?per_page=50", {
      auth: false,
    }),
    u = (
      data?.data
        ? data.data.map((e) => {
            var t, a, n;
            return {
              imageUrl: e.image || "/img/events/2.webp",
              eventName: e.title,
              address: e.address,
              hostName: e.host?.company_name || e.host?.name || "Findbee",
              hostImage: e.host?.avatar,
              date: e.event_date
                ? new Date(e.event_date).toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })
                : "Soon ",
              phone: e.phone,
              href: eventHref(e.slug),
            };
          })
        : error
          ? h
          : []
    ).filter((t) => t.eventName.toLowerCase().includes(e.toLowerCase()));
  return (
    <div className="bg-mist">
      <PageHero
        eyebrow="What's on"
        title="Events"
        highlight="near you"
        subtitle="Here post your events, seminar, webinar, festivals and more"
        waveFill="#F3F8FE"
      >
        <HeroSearch placeholder="Search event in your city" value={e} onChange={(e) => t(e.target.value)} />
      </PageHero>
      <div className="container-x pb-16">
        <Stagger gap={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {u.map((e) => {
            let [t, a] = e.date.split(" ");
            return (
              <StaggerItem key={e.eventName}>
                <Link
                  href={e.href || "/events-inner"}
                  className="group panel flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={e.imageUrl}
                      alt={e.eventName}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-2xl bg-white px-3 py-1.5 text-center leading-tight shadow">
                      <span className="block text-[10px] font-bold uppercase text-magenta-500">{t}</span>
                      <span className="block font-display text-xl font-extrabold text-night-900">{a}</span>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-bold leading-snug text-night-900 transition group-hover:text-brand-600">
                      {e.eventName}
                    </h3>
                    <p className="mt-2 flex gap-2 text-xs text-slate-500">
                      <FaLocationDot className="mt-0.5 shrink-0 text-magenta-500" />
                      {e.address}
                    </p>
                    {e.phone && (
                      <p className="mt-1.5 flex items-center gap-2 text-xs text-slate-500">
                        <FaPhone className="text-brand-500" />
                        {e.phone}
                      </p>
                    )}
                    <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-3">
                      <Avatar
                        src={e.hostImage}
                        name={e.hostName}
                        alt=""
                        textClass="text-[10px]"
                        className="h-8 w-8 shrink-0 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">Hosted by</p>
                        <p className="truncate text-sm font-semibold text-night-900">{e.hostName}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
        {!data && !error && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-busy="true">
            {[...Array(8)].map((e, t) => (
              <div key={t} className="panel aspect-[3/4] animate-pulse bg-white" />
            ))}
          </div>
        )}
        {(data || error) && 0 === u.length && (
          <p className="py-16 text-center text-slate-400">
            {e ? <>No events match “{e}”.</> : "No upcoming events yet."}
          </p>
        )}
      </div>
    </div>
  );
}
export default Events;
