"use client";
import React from "react";
import Link from "next/link";
import { FaCheck, FaBriefcase, FaUser } from "react-icons/fa6";
import { PageHero } from "../ui/blocks";
import { Stagger, StaggerItem } from "../ui/motion";

const types = [
  {
    title: "Service Provider",
    icon: FaBriefcase,
    accent: "from-brand-500 to-magenta-500",
    items: ["User dashboard", "Profile page", "Reviews", "Like listings", "Get quote & send enquiry", "Followings", "Notifications", "Create new listing"],
  },
  {
    title: "General User",
    icon: FaUser,
    accent: "from-cyan-400 to-brand-500",
    items: ["User dashboard", "Profile page", "Reviews", "Followings", "Post your Ads", "Lead management", "Payment invoices", "Manage listing, event & blogs"],
  },
];

export default function Usertype() {
  return (
    <div className="bg-mist">
      <PageHero eyebrow="Account types" title="Choose your" highlight="user type" subtitle="Pick what fits you best — you can change it later from your dashboard." waveFill="#F4F5FB" />
      <Stagger gap={0.15} className="container-x grid max-w-5xl gap-6 pb-16 md:grid-cols-2">
        {types.map(({ title, icon: Icon, accent, items }) => (
          <StaggerItem key={title} className="panel flex flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className={`flex items-center gap-4 bg-gradient-to-r ${accent} p-6 text-white`}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 text-xl"><Icon /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{title}</p>
                <h2 className="text-xl font-extrabold">{title} can</h2>
              </div>
            </div>
            <ul className="flex-1 space-y-3 p-6">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600 sm:text-base">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-[11px] text-emerald-600"><FaCheck /></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-6 pt-0">
              <Link href="/user-login" className="btn-primary w-full py-3">Get Started</Link>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
