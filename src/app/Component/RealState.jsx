"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { HiCheck } from "react-icons/hi";
import { FaLocationDot, FaPhone, FaEnvelope, FaWhatsapp, FaHeart, FaRegHeart, FaCircleCheck, FaSliders } from "react-icons/fa6";
import { PageHero } from "../ui/blocks";
import { Stagger, StaggerItem } from "../ui/motion";
import { cityHref, getCityLabel, useUserLocation } from "../context/LocationContext";

const filterLabels = ["Filter", "Categories", "Sub-Categories", "Features", "Rating"];

const categoryOptions = ["Automobiles", "Real Estate", "Wedding halls", "Transportation", "Sports", "Education", "Hotels and Resorts", "Spa and Facial", "Hospitals", "Electricals"];
const subCategories = ["Villas", "Independent house", "Plots and Lands"];
const features = ["Trusted services provider", "Premium services", "Verified services", "Trending services", "Offers and discounts", "Latest updated", "Most likes"];

const listing = {
  title: "Rolexo Villas in California",
  image: "/img/realestate/card.webp",
  address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
  phone: "7904462944",
  email: "thedirectoryfinder@gmail.com",
  rating: 2,
};
const data = Array.from({ length: 7 }, (_, i) => ({ ...listing, id: i }));

const estate = [
  { name: "Core real estates", address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport", rate: "5.0", image: "/img/realestate/img1.webp" },
  { name: "Rolexo Villas in California", address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport", rate: "4.0", image: "/img/realestate/bg2.webp" },
  { name: "Orange pet shop", address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport", rate: "5.0", image: "/img/realestate/bg2.webp" },
  { name: "Best villas near you", address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport", rate: "5.0", image: "/img/realestate/bg2.webp" },
];

function Stars({ value, className = "" }) {
  return (
    <span className={`flex gap-0.5 text-pin-500 ${className}`}>
      {[1, 2, 3, 4, 5].map((s) => (s <= value ? <IoStar key={s} /> : <IoStarOutline key={s} />))}
    </span>
  );
}

function FilterBlock({ title, children }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="panel p-5"
    >
      <h4 className="mb-3 text-sm font-bold text-night-900">{title}</h4>
      {children}
    </motion.div>
  );
}

function ListingCard({ entry, href, liked, onLike }) {
  return (
    <article className="group panel flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex-row">
      <Link href={href} className="relative block aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:w-64 lg:w-72">
        <img src={entry.image} alt={entry.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="chip absolute left-3 top-3 bg-emerald-500 text-white">Open</span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="flex items-center gap-2 text-lg font-bold leading-snug text-night-900">
              <Link href={href} className="transition hover:text-brand-600">{entry.title}</Link>
              <FaCircleCheck className="shrink-0 text-cyan-500" title="Verified" />
            </h3>
            <Stars value={entry.rating} className="mt-1 text-sm" />
          </div>
          <button
            type="button"
            onClick={onLike}
            aria-label={liked ? "Remove from liked" : "Like listing"}
            aria-pressed={liked}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist text-magenta-500 transition hover:scale-110"
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>

        <ul className="mt-3 space-y-1.5 text-sm text-slate-500">
          <li className="flex gap-2"><FaLocationDot className="mt-0.5 shrink-0 text-magenta-500" />{entry.address}</li>
          <li className="flex flex-wrap gap-x-5 gap-y-1.5">
            <span className="flex items-center gap-2"><FaPhone className="text-brand-500" />{entry.phone}</span>
            <span className="flex min-w-0 items-center gap-2"><FaEnvelope className="shrink-0 text-cyan-500" /><span className="truncate">{entry.email}</span></span>
          </li>
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <Link href={href} className="btn-primary btn-sm">Get quote</Link>
          <a href={`tel:${entry.phone}`} className="btn-dark btn-sm">Call now</a>
          <a href={`https://wa.me/${entry.phone}`} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm border-emerald-200 text-emerald-600">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

function RealState() {
  const params = useParams();
  const { location } = useUserLocation();
  const [active, setActive] = useState({ Filter: true });
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [liked, setLiked] = useState({});

  const categoryName = params?.cate
    ? decodeURIComponent(params.cate).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Real Estate";
  const city = getCityLabel(location);
  const detailHref = cityHref(location, "all");
  const toggle = (label) => setActive((prev) => ({ ...prev, [label]: !prev[label] }));
  const sidebar = filterLabels.some((l) => active[l]);

  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Listings"
        title={categoryName}
        highlight={city ? `in ${city}` : "near you"}
        subtitle={`${data.length} verified businesses ready to help.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "All Category", href: "/service" }, { label: categoryName }]}
        waveFill="#F4F5FB"
      />

      <div className="container-x pb-16">
        {/* filter toggles */}
        <div className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <span className="mr-1 flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-500">
            <FaSliders /> Filters
          </span>
          {filterLabels.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => toggle(label)}
              aria-pressed={!!active[label]}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                active[label] ? "bg-night-900 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-brand-600"
              }`}
            >
              {active[label] && <HiCheck />}
              {label}
            </button>
          ))}
        </div>

        <div className={`mt-6 grid gap-6 ${sidebar ? "lg:grid-cols-[300px_1fr]" : ""}`}>
          {sidebar && (
            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <AnimatePresence>
                {active.Filter && (
                  <FilterBlock key="top" title="Top Service Providers">
                    <ul className="space-y-3">
                      {estate.map((item) => (
                        <li key={item.name} className="flex items-center gap-3">
                          <img src={item.image} alt="" className="h-11 w-11 shrink-0 rounded-xl object-cover" />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-night-900">{item.name}</p>
                            <p className="truncate text-xs text-slate-400">{item.address}</p>
                          </div>
                          <span className="chip bg-emerald-50 text-emerald-600">{item.rate}</span>
                        </li>
                      ))}
                    </ul>
                  </FilterBlock>
                )}
                {active.Categories && (
                  <FilterBlock key="cat" title="Categories">
                    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="field" aria-label="Select category">
                      <option value="">Select Category</option>
                      {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </FilterBlock>
                )}
                {active["Sub-Categories"] && (
                  <FilterBlock key="sub" title="Sub Category">
                    <div className="space-y-2">
                      {subCategories.map((s) => (
                        <label key={s} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                          <input type="checkbox" className="h-4 w-4 rounded accent-brand-500" /> {s}
                        </label>
                      ))}
                    </div>
                  </FilterBlock>
                )}
                {active.Features && (
                  <FilterBlock key="feat" title="Features">
                    <div className="space-y-2">
                      {features.map((f) => (
                        <label key={f} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                          <input type="checkbox" className="h-4 w-4 rounded accent-brand-500" /> {f}
                        </label>
                      ))}
                    </div>
                  </FilterBlock>
                )}
                {active.Rating && (
                  <FilterBlock key="rate" title="Ratings">
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 0].map((r) => (
                        <label
                          key={r}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition ${selectedRating === r ? "bg-pin-400/20" : "hover:bg-mist"}`}
                        >
                          <input type="radio" name="rating" checked={selectedRating === r} onChange={() => setSelectedRating(r)} className="accent-brand-500" />
                          <Stars value={r} />
                        </label>
                      ))}
                    </div>
                  </FilterBlock>
                )}
              </AnimatePresence>
            </aside>
          )}

          <Stagger gap={0.06} className="space-y-4">
            {data.map((entry) => (
              <StaggerItem key={entry.id}>
                <ListingCard
                  entry={entry}
                  href={detailHref}
                  liked={!!liked[entry.id]}
                  onLike={() => setLiked((p) => ({ ...p, [entry.id]: !p[entry.id] }))}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  );
}

export default RealState;
