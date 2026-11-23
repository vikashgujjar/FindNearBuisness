"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBolt,
  FaCar,
  FaChevronLeft,
  FaChevronRight,
  FaCircleCheck,
  FaFire,
  FaHeart,
  FaLocationDot,
  FaMagnifyingGlass,
  FaPhone,
  FaRegCommentDots,
  FaRegHeart,
  FaStar,
  FaThumbsUp,
  FaWhatsapp,
} from "react-icons/fa6";
import { listingHref } from "@/app/lib/api";
import { countContact, distanceText, priceText, waHref } from "@/app/lib/category";

const FALLBACK_IMAGE = "/img/realestate/card.webp";
const BADGES = {
  top_search: ["Top search", FaMagnifyingGlass],
  trending: ["Trending", FaFire],
  popular: ["Popular", FaStar],
  top_rated: ["Top rated", FaStar],
  responsive: ["Responsive", FaBolt],
};
export const imageOf = (l) => l.photos?.[0] || l.logo || FALLBACK_IMAGE;

export function Rating({ listing, small = false }) {
  const value = Number(listing.rating) || 0;
  if (!value) return <span className="text-xs text-slate-400">No ratings yet</span>;
  const colour = value >= 4 ? "bg-emerald-600" : value >= 3 ? "bg-amber-500" : "bg-rose-500";
  return (
    <span className="flex items-center gap-2">
      <span className={`chip ${colour} text-white ${small ? "" : "px-3 py-1 text-xs"}`}>
        {value.toFixed(1)} <FaStar className="text-[0.8em]" />
      </span>
      <span className="text-xs text-slate-400">
        {Number(listing.reviews_count || 0).toLocaleString("en-IN")} {small ? "" : listing.reviews_count === 1 ? "Rating" : "Ratings"}
      </span>
    </span>
  );
}

// First click shows the number, then it can be called.
export function CallButton({ listing, className = "btn-dark btn-sm" }) {
  const [shown, setShown] = useState(false);
  if (!listing.phone) return null;
  return shown ? (
    <a href={`tel:${listing.phone}`} className={className}>
      <FaPhone className="text-xs" /> {listing.phone}
    </a>
  ) : (
    <button
      type="button"
      className={className}
      onClick={() => {
        setShown(true);
        countContact(listing.id, "call");
      }}
    >
      <FaPhone className="text-xs" /> Show number
    </button>
  );
}

export function WhatsAppButton({ listing, className = "btn-ghost btn-sm border-emerald-200 text-emerald-600", iconOnly = false }) {
  const href = waHref(listing.whatsapp || listing.phone);
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={`WhatsApp ${listing.name}`} onClick={() => countContact(listing.id, "whatsapp")}>
      <FaWhatsapp /> {!iconOnly && "WhatsApp"}
    </a>
  );
}

function Photos({ listing, href }) {
  const photos = listing.photos?.length ? listing.photos : [imageOf(listing)];
  const [index, setIndex] = useState(0);
  const step = (by) => setIndex((i) => (i + by + photos.length) % photos.length);
  return (
    <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:min-h-[13rem] sm:w-64 lg:w-72">
      <Link href={href} className="block h-full w-full">
        <img
          loading="lazy"
          decoding="async"
          src={photos[index]}
          alt={listing.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 sm:absolute sm:inset-0"
        />
      </Link>
      {listing.is_open != null && (
        <span className={`chip absolute left-3 top-3 text-white ${listing.is_open ? "bg-emerald-500" : "bg-slate-500"}`}>{listing.is_open ? "Open" : "Closed"}</span>
      )}
      {photos.length > 1 && (
        <>
          {[
            [-1, "left-2", FaChevronLeft, "Previous photo"],
            [1, "right-2", FaChevronRight, "Next photo"],
          ].map(([by, side, Icon, label]) => (
            <button
              key={label}
              type="button"
              onClick={() => step(by)}
              aria-label={`${label} of ${listing.name}`}
              className={`absolute ${side} top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-night-950/60 text-xs text-white transition hover:bg-night-950`}
            >
              <Icon />
            </button>
          ))}
          <span className="chip absolute bottom-3 right-3 bg-night-950/60 text-white">
            {index + 1}/{photos.length}
          </span>
        </>
      )}
    </div>
  );
}

export function ListingCard({ listing, coords, liked, onLike, onDeal, viewed }) {
  const href = listingHref(listing);
  const distance = distanceText(coords, listing);
  const price = priceText(listing);
  const badges = listing.badges || [];
  const tags = Object.values(listing.features || {}).flat().slice(0, 4);
  return (
    <article className="group panel flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex-row">
      <Photos listing={listing} href={href} />
      <div className="flex min-w-0 flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-bold leading-snug text-night-900">
              {badges.includes("recommended") && (
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-night-900 text-xs text-white" title="Recommended">
                  <FaThumbsUp />
                </span>
              )}
              <Link href={href} className="transition hover:text-brand-600">
                {listing.name}
              </Link>
              {listing.is_verified && <FaCircleCheck className="shrink-0 text-cyan-500" title="Verified" />}
              {listing.tagline && <span className="text-xs font-semibold text-slate-400">{listing.tagline}</span>}
            </h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <Rating listing={listing} />
              {badges
                .filter((b) => BADGES[b])
                .slice(0, 3)
                .map((b) => {
                  const [label, Icon] = BADGES[b];
                  return (
                    <span key={b} className="chip bg-brand-50 text-night-900">
                      <Icon className="text-pin-500" /> {label}
                    </span>
                  );
                })}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {listing.is_promoted ? (
              <span className="chip bg-pin-400 text-night-900" title="This business paid for this place">
                AD
              </span>
            ) : (
              listing.is_featured && <span className="chip bg-brand-50 text-brand-700">Featured</span>
            )}
            <button
              type="button"
              onClick={onLike}
              aria-label={liked ? "Remove from liked" : "Like listing"}
              aria-pressed={liked}
              className="grid h-10 w-10 place-items-center rounded-full bg-mist text-magenta-500 transition hover:scale-110"
            >
              {liked ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-500">
          {(listing.address || distance) && (
            <li className="flex gap-2">
              <FaLocationDot className="mt-0.5 shrink-0 text-magenta-500" />
              <span>
                {listing.address || listing.city}
                {distance && <span className="text-slate-400"> · {distance}</span>}
              </span>
            </li>
          )}
          {listing.landmark && (
            <li className="flex gap-2">
              <FaCar className="mt-0.5 shrink-0 text-brand-500" />
              {listing.landmark}
            </li>
          )}
          {listing.top_tag && (
            <li className="flex gap-2">
              <FaRegCommentDots className="mt-0.5 shrink-0 text-cyan-500" />
              <span>
                <b className="text-night-900">“{listing.top_tag.label}”</b> {listing.top_tag.count} {listing.top_tag.count === 1 ? "review" : "reviews"}
              </span>
            </li>
          )}
          {badges.includes("call_pickup") && (
            <li className="flex gap-2 font-semibold text-night-900">
              <FaBolt className="mt-0.5 shrink-0 text-pin-500" /> High call pick-up rate
            </li>
          )}
        </ul>
        {(price || tags.length > 0 || viewed) && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {price && <span className="chip bg-emerald-50 text-emerald-700">{price}</span>}
            {tags.map((t) => (
              <span key={t} className="chip bg-mist text-slate-600">
                {t}
              </span>
            ))}
            {viewed && <span className="chip border border-slate-200 text-slate-500">Viewed recently</span>}
          </div>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <button type="button" onClick={onDeal} className="btn-primary btn-sm">
            Get best deal
            {listing.response_minutes != null && listing.response_minutes <= 60 && <span className="font-normal">· {listing.response_minutes} min</span>}
          </button>
          <CallButton listing={listing} />
          <WhatsAppButton listing={listing} />
        </div>
      </div>
    </article>
  );
}

// Small card: top picks and quick responses.
export function MiniCard({ listing, onDeal }) {
  const href = listingHref(listing);
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
      <Link href={href} className="block aspect-[4/3] overflow-hidden">
        <img loading="lazy" decoding="async" src={imageOf(listing)} alt={listing.name} className="h-full w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-2.5">
        <Link href={href} className="truncate text-sm font-semibold text-night-900 hover:text-brand-600">
          {listing.name}
        </Link>
        <Rating listing={listing} small />
        <p className="truncate text-xs text-slate-400">{listing.locality || listing.city || listing.address}</p>
        <div className="mt-auto flex gap-1.5 pt-1.5">
          <button type="button" onClick={onDeal} className="btn-primary btn-sm min-w-0 flex-1 whitespace-nowrap px-1 text-xs">
            Best deal
          </button>
          <WhatsAppButton listing={listing} iconOnly className="btn-ghost btn-sm shrink-0 border-emerald-200 px-2 text-emerald-600" />
        </div>
      </div>
    </div>
  );
}
