"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import DashLeftOpen from "./DashLeftOpen";
import { useUserLocation } from "../context/LocationContext";
import { dashHref, dashTabs, isActiveTab } from "./dashNav";
import { DotGrid } from "../ui/decor";

// Swipeable tab strip so phones can move between dashboard pages.
function MobileTabs() {
  const pathName = usePathname();
  const { location } = useUserLocation();
  const activeRef = useRef(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathName]);

  return (
    <nav aria-label="Dashboard" className="no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 md:hidden">
      {dashTabs.map((tab) => {
        const active = isActiveTab(pathName, tab);
        return (
          <Link
            key={tab.title}
            ref={active ? activeRef : null}
            href={dashHref(location, tab)}
            aria-current={active ? "page" : undefined}
            className={`flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition ${
              active ? "bg-night-900 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"
            }`}
          >
            <img src={tab.icon} alt="" className="h-4 w-4" />
            {tab.title}
          </Link>
        );
      })}
    </nav>
  );
}

function CommonDashLayout({ children }) {
  return (
    <div className="relative bg-mist">
      <DotGrid className="inset-x-0 top-0 h-80 w-full [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="container-x relative py-6 sm:py-10">
        <MobileTabs />
        <div className="flex items-start gap-5 xl:grid xl:grid-cols-[250px_minmax(0,1fr)_300px] xl:gap-6">
          <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto pb-4 no-scrollbar xl:block">
            <DashLeft />
          </aside>
          <div className="sticky top-24 hidden md:block xl:hidden">
            <DashLeftOpen />
          </div>
          <main className="min-w-0 flex-1 space-y-6">
            {children}
            <div className="xl:hidden">
              <DashRight />
            </div>
          </main>
          <aside className="hidden xl:block">
            <DashRight />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CommonDashLayout;
