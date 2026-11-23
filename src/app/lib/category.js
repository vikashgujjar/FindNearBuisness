"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { API_URL, useApi, formatPrice } from "@/app/lib/api";
import { useUserLocation, getCityLabel, getCityName, cityHref } from "@/app/context/LocationContext";

// ---------- which page is this ----------
const cityFromSlug = (slug) => slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// City and area of the address bar: /{city}/{category}/?area=Saha. The visitor's own city is written as in
// their location ("New Delhi" for /NewDelhi/); a page without a city uses where they are.
// `ready` is false until the browser is known.
export function usePlace() {
  const { location } = useUserLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const parts = window.location.pathname.split("/").filter(Boolean);
    setUrl({
      city: parts.length > 1 ? decodeURIComponent(parts[0]) : "",
      area: new URLSearchParams(window.location.search).get("area") || "",
    });
  }, []);
  const own = cityHref(location, "").split("/")[1] || "";
  if (!url) return { ready: false, area: "", city: "" };
  const noCity = !url.city || url.city === "default-location";
  const isOwn = url.city.toLowerCase() === own.toLowerCase();
  return { ready: true, area: url.area, city: (noCity ? getCityLabel(location) : isOwn ? getCityName(location) : cityFromSlug(url.city)) || "" };
}

export function useCategorySlug() {
  const params = useParams();
  return params?.cate ? decodeURIComponent(params.cate) : "real-estate";
}

// Banners, lead form, filters, FAQs… of a category page (GET /category-page); one request is shared by all parts of the page.
export function useCategoryPage(slug, place) {
  const query = new URLSearchParams({ category: slug, ...(place.city ? { city: place.city } : {}) });
  const { data } = useApi(place.ready ? `/category-page?${query}` : null, { auth: false });
  return data;
}

export const categoryHref = (city, slug, area) =>
  `/${encodeURIComponent((city || "default-location").trim().replace(/\s+/g, "-"))}/${encodeURIComponent(slug)}/${area ? `?area=${encodeURIComponent(area)}` : ""}`;

export const fillText = (text, category, city) =>
  String(text || "")
    .replaceAll("{category}", category)
    .replaceAll("{city}", city || "your city");

// ---------- listing helpers ----------
// Straight-line distance, or null when either position is unknown.
export function distanceText(coords, listing) {
  if (!coords || listing.lat == null || listing.lng == null) return null;
  const rad = (d) => (d * Math.PI) / 180;
  const a =
    Math.sin(rad(listing.lat - coords.lat) / 2) ** 2 +
    Math.cos(rad(coords.lat)) * Math.cos(rad(listing.lat)) * Math.sin(rad(listing.lng - coords.lng) / 2) ** 2;
  const km = 12742 * Math.asin(Math.min(1, Math.sqrt(a)));
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km < 10 ? km.toFixed(1) : Math.round(km)} km`;
}

export function priceText({ price_min: min, price_max: max }) {
  if (min == null && max == null) return null;
  if (min != null && max != null) return min === max ? formatPrice(min) : `${formatPrice(min)} – ${formatPrice(max)}`;
  return min != null ? `From ${formatPrice(min)}` : `Up to ${formatPrice(max)}`;
}

// wa.me needs the country code; 10-digit numbers are Indian.
export function waHref(number) {
  const digits = String(number || "").replace(/\D/g, "").replace(/^0+/, "");
  return digits ? `https://wa.me/${digits.length === 10 ? `91${digits}` : digits}` : null;
}

// Counted for the business owner; never blocks the call itself.
export function countContact(id, type) {
  try {
    fetch(`${API_URL}/listings/${id}/contact-click`, {
      method: "POST",
      keepalive: true,
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
    }).catch(() => {});
  } catch {}
}

// ---------- recently viewed (this browser only) ----------
const RECENT_KEY = "recent_listings";
export function recentListings() {
  try {
    const ids = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    return Array.isArray(ids) ? ids : [];
  } catch {
    return [];
  }
}
export function rememberListing(id) {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify([id, ...recentListings().filter((x) => x !== id)].slice(0, 50)));
  } catch {}
}
