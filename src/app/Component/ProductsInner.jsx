"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCircleCheck, FaCheck } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { PageHero } from "@/app/ui/blocks";
import { Reveal, Stagger, StaggerItem } from "@/app/ui/motion";
import { Avatar } from "@/app/ui/Avatar";
import { useAuth } from "@/app/context/AuthContext";
import { useQueryParam, useApi, apiFetch, formatPrice, galleryHref, formatDate } from "@/app/lib/api";
let p = {
  name: "Weight Loss Digital Products",
  price: 52,
  discount_percent: 20,
  is_verified: true,
  images: [
    "/img/ProductsInner/ProductsInner2.webp",
    "/img/ProductsInner/product4.webp",
    "/img/ProductsInner/ProductsInner3.webp",
    "/img/ProductsInner/ProductsInner1.webp",
  ],
  highlights: [
    "Money back policy",
    "1 day delivery",
    "Best chosen for weight loss",
    "Loss 10 kg in 7 days",
    "Improve immunity",
    "Carry It Along 2 in 1 Laptop",
    "12.3 inch Quad HD LED Backlit PixelSense",
    "10 Point Multi-touch, 3:2 Aspect Ratio, 267 ppi",
    "Light Laptop without Optical Disk Drive",
    "Windows 10 OS",
    "EMI starting from $50/month",
    "1 Year Onsite Warranty",
  ],
  specifications: [
    {
      label: "Published year",
      value: "2020",
    },
    {
      label: "Available",
      value: "Yes",
    },
    {
      label: "Sales Package",
      value: "2 in 1 Laptop, Power Adaptor, User Guide, Warranty Documents",
    },
    {
      label: "Model Number",
      value: "M1866",
    },
    {
      label: "Part Number",
      value: "PUV-00028",
    },
    {
      label: "Series",
      value: "Surface Pro 7",
    },
    {
      label: "Color",
      value: "Matte Black",
    },
    {
      label: "Type",
      value: "2 in 1 Laptop",
    },
    {
      label: "Battery Backup",
      value: "Upto 10.5 hours",
    },
  ],
  tags: ["Laptops", "Electronic Items", "Products", "Microsoft", "Offers", "Surface"],
  description:
    "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
  category: {
    name: "Electronics",
  },
};
function ProductsInner() {
  var e, t, a, n, v, f, b, j, y;
  let N = useRouter(),
    { user, isLoggedIn } = useAuth(),
    P = useQueryParam("slug"),
    { data } = useApi("/products?per_page=1", {
      auth: false,
      skip: null !== P,
    }),
    I = P || data?.data?.[0]?.slug,
    { data: C, error } = useApi(I ? `/products/${encodeURIComponent(I)}` : null, {
      auth: false,
    }),
    [T, D] = useState(null),
    E = error?.status === 404,
    O = C?.data || (error && !E ? p : null),
    R = async (e) => {
      if (!isLoggedIn) return N.push("/user-login/sign");
      if (O?.slug) {
        D({
          busy: e,
        });
        try {
          let t = await apiFetch("/enquiries", {
            method: "POST",
            body: {
              name: user.name,
              email: user.email,
              phone: user.phone,
              product: O.slug,
              message: "buy" === e ? `I would like to buy "${O.name}".` : `Please send me a quote for "${O.name}".`,
            },
          });
          D({
            ok: t.message,
          });
        } catch (e) {
          D({
            error: e.message,
          });
        }
      }
    };
  if (E)
    return (
      <div className="bg-mist py-24">
        <div className="container-x panel mx-auto max-w-lg p-10 text-center">
          <h1 className="text-2xl font-bold text-night-900">Product not found</h1>
          <p className="mt-2 text-sm text-slate-500">This product may have been removed.</p>
          <Link href="/products" className="btn-primary mt-6">
            Browse products
          </Link>
        </div>
      </div>
    );
  if (!O)
    return (
      <div className="bg-mist" aria-busy="true">
        <div className="h-48 bg-mist" />
        <div className="container-x grid gap-6 pb-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <div className="panel aspect-square animate-pulse bg-white" />
          <div className="panel h-96 animate-pulse bg-white" />
        </div>
      </div>
    );
  let L = O.images?.length ? O.images : O.image ? [O.image] : [];
  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Product"
        title={O.category?.name || "Products"}
        crumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "All Category",
            href: "/products",
          },
          {
            label: O.name,
          },
        ]}
        waveFill="#F3F8FE"
      />
      <div className="container-x grid gap-6 pb-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <Reveal className="panel overflow-hidden p-3">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              loop={L.length > 1}
              className="deals-swiper !pb-8"
            >
              {L.map((e) => (
                <SwiperSlide key={e}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={e}
                    alt={O.name}
                    className="aspect-square w-full rounded-2xl bg-mist object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => R("quote")}
              disabled={!!T?.busy}
              className="btn-dark py-3 disabled:opacity-60"
            >
              {T?.busy === "quote" ? "Sending…" : "Get Quote"}
            </button>
            <button
              type="button"
              onClick={() => R("buy")}
              disabled={!!T?.busy}
              className="btn-primary py-3 disabled:opacity-60"
            >
              {T?.busy === "buy" ? "Sending…" : "Buy Now"}
            </button>
          </div>
          {T?.ok && (
            <p className="mt-3 text-sm font-semibold text-emerald-600" role="status">
              {T.ok}
            </p>
          )}
          {T?.error && (
            <p className="mt-3 text-sm font-semibold text-rose-600" role="alert">
              {T.error}
            </p>
          )}
        </div>
        <div className="min-w-0 space-y-5">
          <Reveal className="panel p-6">
            {O.is_verified && (
              <span className="chip bg-cyan-400/15 text-cyan-500">
                <FaCircleCheck />
                {" Verified"}
              </span>
            )}
            <h2 className="mt-3 text-2xl font-extrabold text-night-900 sm:text-3xl">{O.name}</h2>
            <div className="mt-3 flex items-center gap-3">
              <span className="font-display text-3xl font-extrabold text-gradient">{formatPrice(O.price)}</span>
              {O.old_price > O.price && (
                <span className="text-lg text-slate-400 line-through">{formatPrice(O.old_price)}</span>
              )}
              {O.discount_percent > 0 && (
                <span className="chip bg-pin-500 text-night-900">{O.discount_percent}% off</span>
              )}
            </div>
          </Reveal>
          {O.highlights?.length > 0 && (
            <Reveal className="panel p-6">
              <h3 className="mb-4 font-bold text-night-900">Highlights</h3>
              <Stagger as="ul" gap={0.03} className="grid gap-2.5 sm:grid-cols-2">
                {O.highlights.map((e) => (
                  <StaggerItem key={e} as="li" className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-[10px] text-emerald-600">
                      <FaCheck />
                    </span>
                    {e}
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          )}
          <Reveal className="panel p-6">
            <h3 className="mb-3 font-bold text-night-900">Description</h3>
            <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
              {O.description || "No description added yet."}
            </p>
          </Reveal>
          {O.specifications?.length > 0 && (
            <Reveal className="panel p-6">
              <h3 className="mb-3 font-bold text-night-900">Specifications</h3>
              <dl className="divide-y divide-slate-100 text-sm">
                {O.specifications.map((e) => (
                  <div key={e.label} className="grid grid-cols-[130px_1fr] gap-4 py-2.5 sm:grid-cols-[180px_1fr]">
                    <dt className="text-slate-500">{e.label}</dt>
                    <dd className="font-semibold text-night-900">{e.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
          {O.tags?.length > 0 && (
            <Reveal className="panel p-6">
              <h3 className="mb-3 font-bold text-night-900">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {O.tags.map((e) => (
                  <span key={e} className="rounded-full bg-mist px-3 py-1.5 text-sm text-slate-600">
                    {e}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
          <Link
            href={O.vendor ? galleryHref(O.vendor.id) : "/profile"}
            className="panel flex items-center gap-4 p-5 transition hover:shadow-card-hover"
          >
            <Avatar
              src={O.vendor ? O.vendor.avatar : "/img/dashboard/use.webp"}
              name={O.vendor?.company_name || O.vendor?.name}
              alt=""
              textClass="text-lg"
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-xs text-slate-400">Created by</p>
              <h4 className="font-bold text-night-900">
                {O.vendor ? O.vendor.company_name || O.vendor.name : "Claude D Dial"}
              </h4>
              <p className="text-xs text-slate-500">
                {"Joined on "}
                {O.vendor
                  ? formatDate(O.vendor.joined_at, {
                      month: "short",
                      year: "numeric",
                    })
                  : "Jan 2020"}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductsInner;
