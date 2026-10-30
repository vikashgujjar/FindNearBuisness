"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { useUserLocation } from "../context/LocationContext";
import { dashHref, dashTabs, isActiveTab } from "./dashNav";

// Collapsible icon rail used on tablet widths.
export default function DashLeftOpen() {
  const pathName = usePathname();
  const { location } = useUserLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className={`${open ? "w-[230px]" : "w-[60px]"} overflow-hidden rounded-3xl bg-white p-2 shadow-card ring-1 ring-slate-100 transition-all duration-300`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mb-2 grid h-11 w-11 place-items-center rounded-2xl bg-mist text-xl text-night-900 transition hover:bg-brand-50"
        aria-label={open ? "Collapse menu" : "Expand menu"}
        aria-expanded={open}
      >
        {open ? <MdClose /> : <MdOutlineMenu />}
      </button>
      <ul className="space-y-0.5">
        {dashTabs.map((tab) => {
          const active = isActiveTab(pathName, tab);
          return (
            <li key={tab.title}>
              <Link
                href={dashHref(location, tab)}
                title={tab.title}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${
                  active ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-mist"
                }`}
              >
                <img src={tab.icon} alt="" className="h-5 w-5 shrink-0" />
                {open && <span className="whitespace-nowrap">{tab.title}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
