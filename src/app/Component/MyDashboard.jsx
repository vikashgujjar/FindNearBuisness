"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaClock,
  FaTriangleExclamation,
  FaPen,
  FaEnvelopeOpenText,
  FaEye,
  FaStar,
  FaArrowPointer,
  FaArrowUp,
  FaArrowDown,
  FaArrowRight,
  FaHeart,
  FaListUl,
} from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { Reveal, Stagger, StaggerItem, CountUp } from "@/app/ui/motion";
import { StatusChip } from "@/app/ui/blocks";
import { useUserLocation, cityHref } from "@/app/context/LocationContext";
import { useApi, formatDate, listingHref, galleryHref, vendorHref } from "@/app/lib/api";
import { MapGrid, Glow } from "@/app/ui/decor";
import { Avatar } from "@/app/ui/Avatar";
import { useAuth } from "@/app/context/AuthContext";
function Cu(e) {
  let { labels, series, loading } = e,
    [i, r] = useState(null),
    o = Math.max(4, ...series),
    d = [0, Math.ceil(o / 2), o],
    c = (e) => 30 + (series.length > 1 ? (e / (series.length - 1)) * 602 : 0),
    x = (e) => 10 + (1 - e / o) * 166,
    m = series.map((e, s) => `${s ? "L" : "M"}${c(s).toFixed(1)} ${x(e).toFixed(1)}`).join(" "),
    h = series.length ? `${m} L${c(series.length - 1).toFixed(1)} ${176} L${c(0).toFixed(1)} ${176} Z` : "",
    u = Math.max(1, Math.ceil(labels.length / 6));
  return series.length ? (
    <div className="relative">
      <svg
        viewBox={`0 0 ${640} ${200}`}
        className="w-full touch-pan-y"
        role="img"
        aria-label={`Leads per ${labels.length > 13 ? "day" : "period"}: ${series.reduce((e, s) => e + s, 0)} in total`}
        onPointerMove={(e) => {
          let s = e.currentTarget.getBoundingClientRect(),
            l = Math.round(((((e.clientX - s.left) / s.width) * 640 - 30) / 602) * (series.length - 1));
          r(Math.min(series.length - 1, Math.max(0, l)));
        }}
        onPointerLeave={() => r(null)}
      >
        {d.map((e) => (
          <g key={e}>
            <line x1={30} x2={632} y1={x(e)} y2={x(e)} stroke="#E2E8F0" strokeWidth="1" />
            <text x={22} y={x(e) + 4} textAnchor="end" fontSize="11" fill="#94A3B8">
              {e}
            </text>
          </g>
        ))}
        {labels.map((e, s) =>
          s % u == 0 ? (
            <text key={e} x={c(s)} y={194} textAnchor={0 === s ? "start" : "middle"} fontSize="11" fill="#94A3B8">
              {e}
            </text>
          ) : null,
        )}
        <path d={h} fill="#0A8EF8" fillOpacity="0.1" />
        <path d={m} fill="none" stroke="#0A8EF8" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        {null !== i && (
          <>
            <line x1={c(i)} x2={c(i)} y1={10} y2={176} stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx={c(i)} cy={x(series[i])} r="5" fill="#0A8EF8" stroke="#fff" strokeWidth="2" />
          </>
        )}
      </svg>
      {null !== i && (
        <div
          className="pointer-events-none absolute top-0 -translate-x-1/2 whitespace-nowrap rounded-xl bg-night-900 px-3 py-1.5 text-xs text-white shadow-card"
          style={{
            left: `${Math.min(88, Math.max(12, (c(i) / 640) * 100))}%`,
          }}
        >
          <span className="text-slate-300">{labels[i]}</span> <b>{series[i]}</b> {1 === series[i] ? "lead" : "leads"}
        </div>
      )}
      <table className="sr-only">
        <caption>Leads by date</caption>
        <tbody>
          {labels.map((e, s) => (
            <tr key={e}>
              <th>{e}</th>
              <td>{series[s]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="h-48 animate-pulse rounded-2xl bg-mist" aria-busy={loading} />
  );
}
let h = [
  ["7", "7 days"],
  ["30", "30 days"],
  ["90", "90 days"],
  ["365", "12 months"],
];
function Cf(props) {
  let { user } = props;
  if (user?.role !== "customer" || !["pending", "rejected"].includes(user.vendor_status)) return null;
  let t = "pending" === user.vendor_status;
  return (
    <Reveal className="panel flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center">
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${t ? "bg-pin-400/20 text-amber-600" : "bg-rose-500/10 text-rose-600"}`}
      >
        {t ? <FaClock /> : <FaTriangleExclamation />}
      </span>
      <div className="flex-1">
        <p className="font-bold text-night-900">
          {t ? "Your business account request is under review" : "Your business account request was not approved"}
        </p>
        <p className="text-sm text-slate-500">
          {t
            ? "We'll email you as soon as it is approved."
            : user.vendor_rejection_reason || "You can update your details and apply again."}
        </p>
      </div>
      {!t && (
        <Link href="/become-vendor" className="btn-primary btn-sm">
          Apply again
        </Link>
      )}
    </Reveal>
  );
}
function Cj(props) {
  let { title, editHref, editLabel, viewHref, viewLabel, name, rows, avatar, avatarName, since } = props;
  return (
    <Reveal className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h5 className="font-bold text-night-900">{title}</h5>
        <Link href={editHref} className="btn-ghost btn-sm">
          <FaPen className="text-[10px]" /> {editLabel}
        </Link>
      </div>
      <div className="p-5">
        <Link href={viewHref} className="group relative block overflow-hidden rounded-2xl">
          <img
            loading="lazy"
            decoding="async"
            src="/img/dashboard/dashbordleft2.webp"
            alt=""
            className="h-24 w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950/80 to-transparent" />
          <div className="absolute inset-0 flex items-center gap-3 p-4">
            <Avatar
              src={avatar}
              name={avatarName || name}
              alt=""
              textClass="text-lg"
              className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-white"
            />
            <div className="text-white">
              <h4 className="font-bold">{name}</h4>
              <p className="text-xs text-slate-300">
                {"Member since "}
                {since}
              </p>
            </div>
          </div>
        </Link>
        <dl className="mt-4 divide-y divide-slate-100 text-sm">
          {rows.map((e) => {
            let [s, t] = e;
            return (
              <div key={s} className="flex justify-between gap-3 py-2">
                <dt className="text-slate-500">{s}</dt>
                <dd className="truncate font-semibold text-night-900">{t}</dd>
              </div>
            );
          })}
        </dl>
        <Link href={viewHref} className="btn-dark mt-4 w-full">
          {viewLabel}
        </Link>
      </div>
    </Reveal>
  );
}
function Cv() {
  var e, s, t, n, o, v, g, p, b, j, f, N, w, y, k, _, L, P, S, A, M, F, E, R, C, B, T, X;
  let { location } = useUserLocation(),
    [Q, W] = useState("30"),
    { data, loading, error } = useApi(`/vendor/dashboard?period=${Q}`, {
      cacheable: false,
    });
  if (error)
    return (
      <p className="panel p-6 text-center text-sm text-rose-600" role="alert">
        {error.message}
      </p>
    );
  let z = data?.leads?.change,
    Z = [
      {
        title: "Leads",
        value: data?.leads?.total,
        sub: `${data?.leads?.new ?? 0} new · ${data?.leads?.response_rate ?? 0}% answered`,
        href: "lead",
        icon: FaEnvelopeOpenText,
        color: "from-brand-500 to-cyan-500",
      },
      {
        title: "Listing views",
        value: data?.listings?.views,
        sub: `${data?.listings?.active ?? 0} active · ${data?.listings?.pending ?? 0} pending`,
        href: "listing",
        icon: FaEye,
        color: "from-night-700 to-brand-500",
      },
      {
        title: "Reviews",
        value: data?.reviews?.total,
        sub: `${data?.reviews?.average ?? 0} average rating`,
        href: "reviews",
        icon: FaStar,
        color: "from-magenta-400 to-magenta-500",
      },
      {
        title: "Ad clicks",
        value: data?.ads?.clicks,
        sub: `${data?.ads?.running ?? 0} running · ${data?.ads?.views ?? 0} views`,
        href: "summary",
        icon: FaArrowPointer,
        color: "from-cyan-400 to-brand-500",
      },
    ],
    H = [
      ["Listings", data?.listings?.total, "listing"],
      ["Products", data?.content?.products, "my-products"],
      ["Offers", data?.content?.offers, "my-offers"],
      ["Events", data?.content?.events, "my-events"],
      ["Blog posts", data?.content?.blogs, "blog"],
    ];
  return (
    <>
      <Stagger key={data ? "live" : "wait"} gap={0.08} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Z.map((e) => {
          let { title, value, sub, href, icon: Icon, color } = e;
          return (
            <StaggerItem key={title}>
              <Link
                href={cityHref(location, href)}
                className="group panel flex h-full flex-col p-4 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-5"
              >
                <span className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white`}>
                  <Icon />
                </span>
                <span className="mt-3 font-display text-3xl font-extrabold text-night-900">
                  <CountUp to={value ?? 0} duration={1} />
                </span>
                <h4 className="font-bold text-night-900">{title}</h4>
                <p className="text-xs text-slate-500">{sub}</p>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
      <Reveal className="panel p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h5 className="font-bold text-night-900">Leads over time</h5>
            {null != z && (
              <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                {z >= 0 ? <FaArrowUp className="text-emerald-500" /> : <FaArrowDown className="text-rose-500" />}
                {Math.abs(z)}% compared to the previous period
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-1 rounded-full bg-mist p-1">
            {h.map((e) => {
              let [s, t] = e;
              return (
                <button
                  key={s}
                  type="button"
                  aria-pressed={Q === s}
                  onClick={() => W(s)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${Q === s ? "bg-night-900 text-white" : "text-slate-500"}`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
        <Cu labels={data?.leads?.labels || []} series={data?.leads?.series || []} loading={loading} />
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="panel p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="font-bold text-night-900">Recent leads</h5>
            <Link
              href={cityHref(location, "lead")}
              className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:underline"
            >
              {"All leads "}
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
          {data?.recent_leads?.length === 0 && (
            <p className="py-6 text-center text-sm text-slate-400">Enquiries about your business appear here.</p>
          )}
          <ul className="divide-y divide-slate-100">
            {(data?.recent_leads || []).map((e) => {
              var s;
              return (
                <li key={e.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-night-900">{e.name}</p>
                    <p className="truncate text-xs text-slate-400">
                      {[e.about, formatDate(e.created_at?.replace(" ", "T"))].filter(Boolean).join(" \xb7 ")}
                    </p>
                  </div>
                  <StatusChip status={e.status} />
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal className="panel p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="font-bold text-night-900">Top listings</h5>
            <Link
              href={cityHref(location, "listing")}
              className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:underline"
            >
              {"All listings "}
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
          {data?.top_listings?.length === 0 && (
            <p className="py-6 text-center text-sm text-slate-400">Add your first listing to start getting views.</p>
          )}
          <ul className="divide-y divide-slate-100">
            {(data?.top_listings || []).map((e) => {
              var s;
              return (
                <li key={e.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  {"active" === e.status ? (
                    <Link
                      href={listingHref(e.slug)}
                      className="min-w-0 truncate font-semibold text-night-900 hover:text-brand-600"
                    >
                      {e.name}
                    </Link>
                  ) : (
                    <span className="min-w-0 truncate font-semibold text-night-900">{e.name}</span>
                  )}
                  <span className="flex shrink-0 items-center gap-1.5 text-xs text-slate-500">
                    <FaEye className="text-slate-300" /> {e.views ?? 0}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
      <Reveal className="panel p-5 sm:p-6">
        <h5 className="mb-4 font-bold text-night-900">Your content</h5>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {H.map((e) => {
            let [s, t, a] = e;
            return (
              <Link
                key={s}
                href={cityHref(location, a)}
                className="rounded-2xl bg-mist p-3 text-center transition hover:bg-brand-50"
              >
                <span className="block font-display text-xl font-extrabold text-night-900">{t ?? 0}</span>
                <span className="block text-xs text-slate-500">{s}</span>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </>
  );
}
let MyDashboard = () => {
  var e, s, t, a, n;
  let { user } = useAuth(),
    { location } = useUserLocation(),
    { data } = useApi("/account"),
    p = data?.counts || {},
    N = user?.role === "customer",
    w = user?.role === "vendor",
    y = formatDate(user?.joined_at),
    k = [
      {
        count: p.liked ?? 0,
        title: "Liked Listings",
        link: cityHref(location, "liked"),
        total: "Total no of Liked Listing",
        icon: FaHeart,
        color: "from-night-700 to-brand-500",
      },
      {
        count: p.enquiries ?? 0,
        title: "Enquiries",
        link: cityHref(location, "lead"),
        total: "Total no of enquiry",
        icon: FaEnvelopeOpenText,
        color: "from-cyan-400 to-brand-500",
      },
      {
        count: p.reviews ?? 0,
        title: "Reviews",
        link: cityHref(location, "reviews"),
        total: "Total no of reviews written",
        icon: FaListUl,
        color: "from-brand-500 to-cyan-500",
      },
    ],
    _ = data?.recent_liked;
  return (
    <CommonDashLayout>
      <Reveal className="relative overflow-hidden rounded-3xl bg-night-950 p-6 text-white sm:p-8">
        <MapGrid opacity={0.5} />
        <Glow className="-right-10 -top-10 h-48 w-48" color="bg-magenta-500/40" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
          <img
            loading="lazy"
            decoding="async"
            src="/img/dashboard/mydashboard.webp"
            alt=""
            className="h-16 w-16 rounded-2xl object-cover ring-2 ring-white/20"
          />
          <div>
            <span className="eyebrow-dark">{w ? "Business dashboard" : "User dashboard"}</span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              {"Welcome back, "}
              <span className="text-gradient-cool">{(w && user?.company_name) || user?.name}</span>
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              {w
                ? "See how your business is doing and manage your listings, leads and ads."
                : "Keep track of the businesses you like, the enquiries you send and the reviews you write."}
            </p>
          </div>
        </div>
      </Reveal>
      <Cf user={user} />
      {w ? (
        <Cv />
      ) : (
        <Stagger gap={0.1} className="grid gap-4 sm:grid-cols-3">
          {k.map((e) => {
            let { count, title, link, total, icon: Icon, color } = e;
            return (
              <StaggerItem key={title}>
                <Link
                  href={link}
                  className="group panel flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white`}
                  >
                    <Icon />
                  </span>
                  <span className="mt-4 font-display text-4xl font-extrabold text-night-900">
                    <CountUp to={count} duration={1.2} />
                  </span>
                  <h4 className="font-bold text-night-900">{title}</h4>
                  <p className="text-xs text-slate-500">{total}</p>
                  <FaArrowRight className="mt-3 text-xs text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}
      <div className="grid gap-5 lg:grid-cols-2">
        <Cj
          title="Profile Page"
          editHref="/edit-profile"
          editLabel="Edit Profile page"
          viewHref={user ? galleryHref(user.id) : "/gallery"}
          viewLabel="Visit My Profile Page"
          name={user?.name}
          avatar={user?.avatar}
          since={y}
          rows={[
            ["Name", user?.name],
            ["Following", String(p.following ?? 0).padStart(2, "0")],
            ["City", user?.city || "—"],
            ["Email", user?.email],
          ]}
        />
        <Cj
          title="Business Page"
          editHref={N ? "/become-vendor" : cityHref(location, "business-profile")}
          editLabel={N ? "Upgrade to business" : "Edit business page"}
          viewHref={N ? "/become-vendor" : user ? vendorHref(user.id) : "/view-business"}
          viewLabel={N ? "List your business" : "View Business page"}
          name={N ? "Your business here" : user?.company_name || user?.name}
          avatarName={user?.name}
          avatar={user?.avatar}
          since={y}
          rows={
            N
              ? [
                  ["Status", user?.vendor_status === "pending" ? "Under review" : "No business listed yet"],
                  ["Cost", "Free plan available"],
                ]
              : [
                  ["Name", user?.company_name || user?.name],
                  ["Plan", user?.plan?.name || "Free plan"],
                ]
          }
        />
      </div>
      {!w && (
        <Reveal className="panel p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="font-bold text-night-900">Recently liked</h5>
            <Link href="/service" className="btn-primary btn-sm">
              Explore more
            </Link>
          </div>
          {_ && 0 === _.length && (
            <p className="py-6 text-center text-sm text-slate-400">Tap the heart on any listing to save it here.</p>
          )}
          <Stagger key={_ ? "live" : "static"} gap={0.04} className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {(_
              ? _.map((e) => {
                  var s;
                  return {
                    name: e.name,
                    img: e.cover_image || e.logo || "/img/dashboard/dashbordblog.webp",
                    createDate: e.category?.name || e.city || "",
                    href: listingHref(e),
                  };
                })
              : []
            ).map((e) => (
              <StaggerItem key={e.name}>
                <Link href={e.href} className="group block overflow-hidden rounded-2xl bg-mist">
                  <div className="relative overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={e.img}
                      alt=""
                      className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="chip absolute left-2 top-2 bg-white/90 text-night-900">{e.createDate}</span>
                  </div>
                  <h3 className="line-clamp-2 p-3 text-sm font-semibold text-night-900 group-hover:text-brand-600">
                    {e.name}
                  </h3>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      )}
    </CommonDashLayout>
  );
};
export default MyDashboard;
