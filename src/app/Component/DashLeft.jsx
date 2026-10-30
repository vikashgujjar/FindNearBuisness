"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useUserLocation } from "../context/LocationContext";
import { dashHref, dashTabs, isActiveTab } from "./dashNav";

export function ProfileMini() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white text-center shadow-card ring-1 ring-slate-100">
      <div className="relative h-20 overflow-hidden">
        <img src="/img/dashboard/dashbordleft2.webp" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/80 to-magenta-500/70" />
      </div>
      <div className="-mt-10 px-4 pb-5">
        <img src="/img/dashboard/dashbordleft.webp" alt="Rn53 Themes" className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white" />
        <Link href="/gallery" className="mt-2 block font-bold text-night-900 hover:text-brand-600">Rn53 Themes</Link>
        <p className="text-xs text-slate-400">Joined 26, Mar 2021</p>
      </div>
    </div>
  );
}

export default function DashLeft() {
  const pathName = usePathname();
  const { location } = useUserLocation();

  return (
    <div className="space-y-4">
      <ProfileMini />
      <nav aria-label="Dashboard">
        <ul className="space-y-0.5">
          {dashTabs.map((tab) => {
            const active = isActiveTab(pathName, tab);
            return (
              <li key={tab.title}>
                <Link
                  href={dashHref(location, tab)}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${
                    active ? "text-brand-700" : "text-slate-600 hover:bg-white hover:text-night-900"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="dash-active"
                      className="absolute inset-0 rounded-2xl bg-white shadow-card ring-1 ring-brand-100"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {active && <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-brand-gradient" />}
                  <img src={tab.icon} alt="" className="relative h-5 w-5" />
                  <span className="relative">{tab.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
