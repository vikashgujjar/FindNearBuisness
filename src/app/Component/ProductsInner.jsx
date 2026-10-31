"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaCircleCheck, FaCheck } from "react-icons/fa6";
import { PageHero } from "../ui/blocks";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";

const productFeatures = [
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
];

const productSpecifications = [
  { label: "Published year", value: "2020" },
  { label: "Available", value: "Yes" },
  { label: "Sales Package", value: "2 in 1 Laptop, Power Adaptor, User Guide, Warranty Documents" },
  { label: "Model Number", value: "M1866" },
  { label: "Part Number", value: "PUV-00028" },
  { label: "Series", value: "Surface Pro 7" },
  { label: "Color", value: "Matte Black" },
  { label: "Type", value: "2 in 1 Laptop" },
  { label: "Battery Backup", value: "Upto 10.5 hours" },
];

const tags = ["Laptops", "Electronic Items", "Products", "Microsoft", "Offers", "Surface"];

const images = [
  "/img/ProductsInner/ProductsInner2.webp",
  "/img/ProductsInner/product4.webp",
  "/img/ProductsInner/ProductsInner3.webp",
  "/img/ProductsInner/ProductsInner1.webp",
];

export default function ProductsInner() {
  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Product"
        title="Electronics"
        crumbs={[{ label: "Home", href: "/" }, { label: "All Category", href: "/products" }, { label: "Washing Machines" }]}
        waveFill="#F4F5FB"
      />

      <div className="container-x grid gap-6 pb-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        {/* gallery */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal className="panel overflow-hidden p-3">
            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} modules={[Autoplay, Pagination]} loop className="deals-swiper !pb-8">
              {images.map((src) => (
                <SwiperSlide key={src}>
                  <img src={src} alt="product" className="aspect-square w-full rounded-2xl bg-mist object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="#" className="btn-dark py-3">Get Quote</a>
            <a href="#" className="btn-primary py-3">Buy Now</a>
          </div>
        </div>

        {/* details */}
        <div className="space-y-5">
          <Reveal className="panel p-6">
            <span className="chip bg-cyan-400/15 text-cyan-500"><FaCircleCheck /> Verified</span>
            <h2 className="mt-3 text-2xl font-extrabold text-night-900 sm:text-3xl">Weight Loss Digital Products</h2>
            <div className="mt-3 flex items-center gap-3">
              <span className="font-display text-3xl font-extrabold text-gradient">$52</span>
              <span className="chip bg-magenta-500 text-white">20% off</span>
            </div>
          </Reveal>

          <Reveal className="panel p-6">
            <h3 className="mb-4 font-bold text-night-900">Highlights</h3>
            <Stagger as="ul" gap={0.03} className="grid gap-2.5 sm:grid-cols-2">
              {productFeatures.map((f) => (
                <StaggerItem as="li" key={f} className="flex gap-2 text-sm text-slate-600">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-[10px] text-emerald-600"><FaCheck /></span>
                  {f}
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal className="panel p-6">
            <h3 className="mb-3 font-bold text-night-900">Description</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout...
            </p>
          </Reveal>

          <Reveal className="panel p-6">
            <h3 className="mb-3 font-bold text-night-900">Specifications</h3>
            <dl className="divide-y divide-slate-100 text-sm">
              {productSpecifications.map((s) => (
                <div key={s.label} className="grid grid-cols-[130px_1fr] gap-4 py-2.5 sm:grid-cols-[180px_1fr]">
                  <dt className="text-slate-500">{s.label}</dt>
                  <dd className="font-semibold text-night-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="panel p-6">
            <h3 className="mb-3 font-bold text-night-900">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full bg-mist px-3 py-1.5 text-sm text-slate-600">{t}</span>
              ))}
            </div>
          </Reveal>

          <Link href="/profile" className="panel flex items-center gap-4 p-5 transition hover:shadow-card-hover">
            <img src="/img/dashboard/use.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="text-xs text-slate-400">Created by</p>
              <h4 className="font-bold text-night-900">Claude D Dial</h4>
              <p className="text-xs text-slate-500">Joined on Jan 2020</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
