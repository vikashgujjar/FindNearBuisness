"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClear, MdOutlineMenu } from "react-icons/md";
import { useUserLocation } from "@/app/context/LocationContext";
import { useDashTabs, isActiveTab, dashHref } from "@/app/Component/dashNav";
function DashLeftOpen() {
  let e = usePathname(),
    { location } = useUserLocation(),
    [s, n] = useState(false),
    c = useDashTabs();
  return (
    <div
      className={`${s ? "w-[230px]" : "w-[60px]"} overflow-hidden rounded-3xl bg-white p-2 shadow-card ring-1 ring-slate-100 transition-all duration-300`}
    >
      <button
        type="button"
        onClick={() => n(!s)}
        className="mb-2 grid h-11 w-11 place-items-center rounded-2xl bg-mist text-xl text-night-900 transition hover:bg-brand-50"
        aria-label={s ? "Collapse menu" : "Expand menu"}
        aria-expanded={s}
      >
        {s ? <MdClear /> : <MdOutlineMenu />}
      </button>
      <ul className="space-y-0.5">
        {c.map((l) => {
          let n = isActiveTab(e, l);
          return (
            <li key={l.title}>
              <Link
                href={dashHref(location, l)}
                title={l.title}
                aria-current={n ? "page" : undefined}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${n ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-mist"}`}
              >
                <img loading="lazy" decoding="async" src={l.icon} alt="" className="h-5 w-5 shrink-0" />
                {s && <span className="whitespace-nowrap">{l.title}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default DashLeftOpen;
