"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { cityHref, toSlug, useUserLocation } from "../context/LocationContext";

const placeholders = ["4 Crore+ Businesses", "3.3 Crore+ Products & Services"];

// Location + search strip for screens below `lg` (the desktop navbar has its own).
function PinLocation() {
  const router = useRouter();
  const { location, cityLabel, pincode, openModal } = useUserLocation();
  const [query, setQuery] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIsSwapped((v) => !v), 2600);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) router.push(cityHref(location, toSlug(query)));
  };

  return (
    <div className="relative overflow-hidden bg-night-950 lg:hidden">
      <div aria-hidden className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-brand-500/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-10 -bottom-20 h-40 w-40 rounded-full bg-magenta-500/30 blur-3xl" />
      <div className="container-x relative flex flex-col gap-2.5 py-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={openModal}
          className="flex min-w-0 shrink-0 items-center gap-2 text-left text-white sm:max-w-[40%]"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm">
            <FaLocationDot />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">
              {cityLabel ? `${cityLabel} ${pincode}` : "Set your location"}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-cyan-300">
              Update location <IoIosArrowDown />
            </span>
          </span>
        </button>

        <form onSubmit={handleSearch} role="search" className="flex flex-1 items-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 focus-within:ring-cyan-300/60">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${isSwapped ? placeholders[1] : placeholders[0]}`}
            aria-label="Search businesses"
            className="min-w-0 flex-1 bg-transparent px-4 py-1.5 text-sm text-white outline-none placeholder:text-slate-400"
          />
          <button type="submit" aria-label="Search" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
            <FaMagnifyingGlass className="text-sm" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default PinLocation;
