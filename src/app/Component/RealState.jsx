"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { HiCheck } from "react-icons/hi";
import {
  FaCircleCheck,
  FaHeart,
  FaRegHeart,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaSliders,
} from "react-icons/fa6";
import { PageHero } from "@/app/ui/blocks";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { useUserLocation, getCityLabel, toSlug } from "@/app/context/LocationContext";
import { useAuth } from "@/app/context/AuthContext";
import { AdSlot } from "@/app/ui/AdSlot";
import { listingHref, useApi, apiFetch, clearApiCache } from "@/app/lib/api";
let b = ["Categories", "Sub-Categories", "Features", "Rating"];
let j = Object.fromEntries(b.map((e) => [e, true]));
let w = [
  "Automobiles",
  "Real Estate",
  "Wedding halls",
  "Transportation",
  "Sports",
  "Education",
  "Hotels and Resorts",
  "Spa and Facial",
  "Hospitals",
  "Electricals",
];
let N = ["Villas", "Independent house", "Plots and Lands"];
let y = {
  "Trusted services provider": ["trusted", "1"],
  "Premium services": ["featured", "1"],
  "Verified services": ["verified", "1"],
  "Trending services": ["trending", "1"],
  "Offers and discounts": ["offers", "1"],
  "Latest updated": ["sort", "updated"],
  "Most likes": ["sort", "likes"],
};
let S = Object.keys(y);
let k = {
  title: "Rolexo Villas in California",
  image: "/img/realestate/card.webp",
  address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
  phone: "7904462944",
  email: "thedirectoryfinder@gmail.com",
  rating: 2,
};
let C = Array.from(
  {
    length: 7,
  },
  (e, t) => ({
    ...k,
    id: t,
    verified: true,
  }),
);
let P = (e) => ({
  id: e.id,
  slug: e.slug,
  href: listingHref(e),
  title: e.name,
  image: e.cover_image || e.logo || k.image,
  address: e.address,
  phone: e.phone,
  email: e.email,
  whatsapp: e.whatsapp || e.phone,
  rating: Math.round(Number(e.rating) || 0),
  verified: e.is_verified,
  liked: e.is_liked,
});
let R = [
  {
    name: "Core real estates",
    address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport",
    rate: "5.0",
    image: "/img/realestate/img1.webp",
  },
  {
    name: "Rolexo Villas in California",
    address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport",
    rate: "4.0",
    image: "/img/realestate/bg2.webp",
  },
  {
    name: "Orange pet shop",
    address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport",
    rate: "5.0",
    image: "/img/realestate/bg2.webp",
  },
  {
    name: "Best villas near you",
    address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport",
    rate: "5.0",
    image: "/img/realestate/bg2.webp",
  },
];
function C_(props) {
  let { value, className = "" } = props;
  return (
    <span className={`flex gap-0.5 text-pin-500 ${className}`}>
      {[1, 2, 3, 4, 5].map((e) => (e <= value ? <IoStar key={e} /> : <IoStarOutline key={e} />))}
    </span>
  );
}
function E(props) {
  let { title, children } = props;
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="panel p-5"
    >
      <h4 className="mb-3 text-sm font-bold text-night-900">{title}</h4>
      {children}
    </motion.div>
  );
}
function F(props) {
  let { entry, href, liked, onLike } = props;
  return (
    <article className="group panel flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex-row">
      <Link
        href={href}
        className="relative block aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:min-h-[13rem] sm:w-64 lg:w-72"
      >
        <img
          loading="lazy"
          decoding="async"
          src={entry.image}
          alt={entry.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 sm:absolute sm:inset-0"
        />
        <span className="chip absolute left-3 top-3 bg-emerald-500 text-white">Open</span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="flex items-center gap-2 text-lg font-bold leading-snug text-night-900">
              <Link href={href} className="transition hover:text-brand-600">
                {entry.title}
              </Link>
              {entry.verified && <FaCircleCheck className="shrink-0 text-cyan-500" title="Verified" />}
            </h3>
            <C_ value={entry.rating} className="mt-1 text-sm" />
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
          <li className="flex gap-2">
            <FaLocationDot className="mt-0.5 shrink-0 text-magenta-500" />
            {entry.address}
          </li>
          <li className="flex flex-wrap gap-x-5 gap-y-1.5">
            <span className="flex items-center gap-2">
              <FaPhone className="text-brand-500" />
              {entry.phone}
            </span>
            <span className="flex min-w-0 items-center gap-2">
              <FaEnvelope className="shrink-0 text-cyan-500" />
              <span className="truncate">{entry.email}</span>
            </span>
          </li>
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <Link href={href} className="btn-primary btn-sm">
            Get quote
          </Link>
          <a href={`tel:${entry.phone}`} className="btn-dark btn-sm">
            Call now
          </a>
          <a
            href={`https://wa.me/${entry.whatsapp || entry.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost btn-sm border-emerald-200 text-emerald-600"
          >
            <FaWhatsapp />
            {" WhatsApp"}
          </a>
        </div>
      </div>
    </article>
  );
}
let RealState = function () {
  var e, t, a;
  let l = useParams(),
    { location } = useUserLocation(),
    [d, k] = useState(j),
    [I, A] = useState(""),
    [T, M] = useState(null),
    [O, L] = useState({}),
    [U, D] = useState([]),
    [H, B] = useState([]),
    { isLoggedIn } = useAuth(),
    W = useRouter();
  useEffect(() => {
    window.matchMedia("(max-width: 1023px)").matches && k({});
  }, []);
  let G = d.Categories ? I : "",
    $ = d.Features ? H : [],
    V = d.Rating ? T : null,
    X =
      G ||
      (l?.cate
        ? decodeURIComponent(l.cate)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (e) => e.toUpperCase())
        : "Real Estate"),
    J = getCityLabel(location),
    { data } = useApi("/categories", {
      auth: false,
    }),
    { data: q } = useApi("/listings?sort=rating&per_page=4", {
      auth: false,
    }),
    Y = G ? toSlug(G) : l?.cate ? decodeURIComponent(l.cate) : "real-estate",
    K = data?.data?.find((e) => e.slug === Y || toSlug(e.name) === Y),
    Z = data
      ? (K?.children || []).filter((e) => e.listings_count > 0)
      : N.map((e) => ({
          name: e,
          slug: toSlug(e),
        })),
    ee = d["Sub-Categories"] ? U.filter((e) => Z.some((t) => t.slug === e)) : [],
    et = new URLSearchParams({
      category: Y,
      per_page: "50",
    });
  ee.length && et.set("subcategories", ee.join(",")),
    J && et.set("city", J),
    V && et.set("rating", V),
    $.forEach((e) => et.set(...y[e]));
  let { data: ea, loading, error } = useApi(`/listings?${et}`),
    el = useMemo(() => (ea?.data ? ea.data.map(P) : error ? C : null), [ea, error]),
    er = data?.data
      ? data.data
          .filter((e) => {
            var t;
            return e.listings_count > 0 || e.children?.some((e) => e.listings_count > 0);
          })
          .map((e) => e.name)
      : w,
    ei = q?.data
      ? q.data.map((e) => ({
          name: e.name,
          address: e.address,
          rate: Number(e.rating).toFixed(1),
          image: e.cover_image || e.logo,
          href: listingHref(e),
        }))
      : R,
    eo = (e, t) => e((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t])),
    ec = async (e) => {
      var t;
      if (!isLoggedIn) return W.push("/user-login/sign");
      let a = O[e.id] ?? e.liked;
      L((t) => ({
        ...t,
        [e.id]: !a,
      }));
      try {
        let t = await apiFetch(`/listings/${e.id}/like`, {
          method: "POST",
        });
        L((a) => ({
          ...a,
          [e.id]: t.liked,
        })),
          clearApiCache("/account");
      } catch (t) {
        L((t) => ({
          ...t,
          [e.id]: a,
        }));
      }
    },
    ed = b.filter((e) => ("Categories" !== e || er.length) && ("Sub-Categories" !== e || Z.length)),
    eu = ed.every((e) => d[e]),
    em = (e) =>
      k((t) =>
        "Filter" === e
          ? eu
            ? {}
            : j
          : {
              ...t,
              [e]: !t[e],
            },
      ),
    eh = ed.some((e) => d[e]);
  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Listings"
        title={X}
        highlight={J ? `in ${J}` : "near you"}
        subtitle={
          el
            ? `${ea?.meta?.total ?? el.length} verified businesses ready to help.`
            : "Finding verified businesses near you…"
        }
        crumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "All Category",
            href: "/service",
          },
          {
            label: X,
          },
        ]}
        waveFill="#F3F8FE"
      />
      <div className="container-x pb-16">
        <div className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <span className="mr-1 flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-500">
            <FaSliders />
            {" Filters"}
          </span>
          {["Filter", ...ed].map((e) => {
            let t = "Filter" === e ? eu : !!d[e];
            return (
              <button
                key={e}
                type="button"
                onClick={() => em(e)}
                aria-pressed={t}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${t ? "bg-night-900 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-brand-600"}`}
              >
                {t && <HiCheck />}
                {e}
              </button>
            );
          })}
        </div>
        <div className={`mt-6 grid grid-cols-[minmax(0,1fr)] gap-6 ${eh ? "lg:grid-cols-[300px_minmax(0,1fr)]" : ""}`}>
          {eh && (
            <aside className="min-w-0 space-y-4">
              <AnimatePresence>
                {d.Categories && er.length > 0 && (
                  <E key={"cat"} title="Categories">
                    <select
                      value={I}
                      onChange={(e) => {
                        A(e.target.value), D([]);
                      }}
                      className="field"
                      aria-label="Select category"
                    >
                      <option value="">Select Category</option>
                      {er.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </E>
                )}
                {d["Sub-Categories"] && Z.length > 0 && (
                  <E key={"sub"} title="Sub Category">
                    <div className="space-y-2">
                      {Z.map((e) => (
                        <label key={e.slug} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                          <input
                            type="checkbox"
                            checked={U.includes(e.slug)}
                            onChange={() => eo(D, e.slug)}
                            className="h-4 w-4 rounded accent-brand-500"
                          />{" "}
                          {e.name}
                        </label>
                      ))}
                    </div>
                  </E>
                )}
                {d.Features && (
                  <E key={"feat"} title="Features">
                    <div className="space-y-2">
                      {S.map((e) => (
                        <label key={e} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                          <input
                            type="checkbox"
                            checked={H.includes(e)}
                            onChange={() => eo(B, e)}
                            className="h-4 w-4 rounded accent-brand-500"
                          />{" "}
                          {e}
                        </label>
                      ))}
                    </div>
                  </E>
                )}
                {d.Rating && (
                  <E key={"rate"} title="Ratings">
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 0].map((e) => (
                        <label
                          key={e}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition ${T === e ? "bg-pin-400/20" : "hover:bg-mist"}`}
                        >
                          <input
                            type="radio"
                            name="rating"
                            checked={T === e}
                            onChange={() => M(e)}
                            className="accent-brand-500"
                          />
                          <C_ value={e} />
                        </label>
                      ))}
                    </div>
                  </E>
                )}
                {ei.length > 0 && (
                  <E key={"top"} title="Top Service Providers">
                    <ul className="space-y-3">
                      {ei.map((e) => (
                        <li key={e.name} className="relative flex items-center gap-3">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={e.image}
                            alt=""
                            className="h-11 w-11 shrink-0 rounded-xl object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-night-900">
                              {e.href ? (
                                <Link href={e.href} className="after:absolute after:inset-0 hover:text-brand-600">
                                  {e.name}
                                </Link>
                              ) : (
                                e.name
                              )}
                            </p>
                            <p className="truncate text-xs text-slate-400">{e.address}</p>
                          </div>
                          <span className="chip bg-emerald-50 text-emerald-600">{e.rate}</span>
                        </li>
                      ))}
                    </ul>
                  </E>
                )}
              </AnimatePresence>
              <AdSlot slot="listing_left" />
            </aside>
          )}
          <div className="min-w-0 space-y-4">
            <AdSlot slot="listing_top" />
            {el && (!loading || ea) ? (
              el.length ? (
                <Stagger key={et.toString()} gap={0.06} className="space-y-4">
                  {el.map((e) => {
                    var t;
                    return (
                      <StaggerItem key={e.id}>
                        <F
                          entry={e}
                          href={e.href || listingHref("rolexo-villas-in-california")}
                          liked={!!(O[e.id] ?? e.liked)}
                          onLike={() => ec(e)}
                        />
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              ) : (
                <div className="panel p-10 text-center">
                  <h3 className="text-lg font-bold text-night-900">No businesses found</h3>
                  <p className="mt-1 text-sm text-slate-500">Try another category or clear the filters.</p>
                </div>
              )
            ) : (
              <div className="space-y-4" aria-busy="true">
                {[0, 1, 2].map((e) => (
                  <div key={e} className="panel h-56 animate-pulse bg-white sm:h-48" />
                ))}
              </div>
            )}
            <AdSlot slot="listing_bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RealState;
