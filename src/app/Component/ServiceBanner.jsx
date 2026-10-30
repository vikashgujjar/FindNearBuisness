"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionHeading } from "../ui/decor";
import { Reveal } from "../ui/motion";
import { cityHref } from "../context/LocationContext";

const banners = [
  { src: "/img/filteredData2/banner1.webp", path: "Coupon-deals" },
  { src: "/img/Servicelist/serviceBanner2.webp", path: "realestate" },
  { src: "/img/filteredData2/banner2.webp", path: "Coupon-deals" },
  { src: "/img/Servicelist/serviceBanner1.webp", path: "realestate" },
  { src: "/img/filteredData2/banner3.webp", path: "Coupon-deals" },
];

const ServiceBanner = ({ loc }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative py-14 sm:py-20">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Offers"
            title="Hot deals on"
            highlight="your street"
            subtitle="Fresh coupons and promotions from businesses around you."
          />
          <div className="hidden gap-2 sm:flex">
            <button ref={prevRef} aria-label="Previous deal" className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 text-lg transition hover:border-brand-500 hover:bg-brand-500 hover:text-white">
              <IoArrowBack />
            </button>
            <button ref={nextRef} aria-label="Next deal" className="grid h-12 w-12 place-items-center rounded-full bg-night-900 text-lg text-white transition hover:bg-brand-600">
              <IoArrowForward />
            </button>
          </div>
        </div>

        <Reveal className="mt-8">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            spaceBetween={16}
            slidesPerView={1.08}
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="deals-swiper !pb-10"
          >
            {banners.map((b, i) => (
              <SwiperSlide key={i}>
                <Link href={cityHref(loc, b.path)} className="group block overflow-hidden rounded-3xl shadow-card">
                  <img
                    src={b.src}
                    alt="Offer banner"
                    className="aspect-[2.4/1] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
};

export default ServiceBanner;
