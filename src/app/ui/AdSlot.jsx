"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useApi, API_URL, listingHref } from "@/app/lib/api";
function AdSlot(props) {
  var t;
  let { slot, category, className = "" } = props,
    { data } = useApi(`/ads?slot=${slot}${category ? `&category=${encodeURIComponent(category)}` : ""}`, {
      auth: false,
      cacheable: false,
    }),
    [c, d] = useState(null);
  if (
    (useEffect(() => {
      let e = data?.data || [];
      d(e.length ? e[Math.floor(Math.random() * e.length)] : null);
    }, [data]),
    !c)
  )
    return null;
  let m = () => {
      try {
        fetch(`${API_URL}/ads/${c.id}/click`, {
          method: "POST",
          keepalive: true,
          headers: {
            Accept: "application/json",
          },
        });
      } catch (e) {}
    },
    h = (
      <img
        src={c.image}
        alt="Advertisement"
        loading="lazy"
        className={`block w-full object-cover ${"listing_left" === slot || "detail_right" === slot ? "aspect-square" : "aspect-[728/90] max-h-40"}`}
      />
    ),
    u = c.link?.startsWith("/");
  return (
    <div className={className}>
      <aside
        aria-label="Advertisement"
        className="relative overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100"
      >
        <span className="absolute right-2 top-2 z-10 rounded-full bg-night-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          Ad
        </span>
        {u ? (
          <Link href={c.link} onClick={m}>
            {h}
          </Link>
        ) : c.link ? (
          <a href={c.link} target="_blank" rel="noopener noreferrer sponsored" onClick={m}>
            {h}
          </a>
        ) : c.listing_slug ? (
          <Link href={listingHref(c.listing_slug)} onClick={m}>
            {h}
          </Link>
        ) : (
          h
        )}
      </aside>
    </div>
  );
}
export { AdSlot };
