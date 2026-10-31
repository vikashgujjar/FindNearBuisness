"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLocationDot, FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { DotGrid, Glow } from "../ui/decor";
import { Stagger, StaggerItem, CountUp } from "../ui/motion";
import { cityHref, toSlug, useUserLocation } from "../context/LocationContext";

const banners = [
  "/img/Servicelist/serviceBanner2.webp",
  "/img/filteredData2/banner1.webp",
  "/img/Servicelist/serviceBanner1.webp",
  "/img/filteredData2/banner2.webp",
  "/img/filteredData2/banner3.webp",
];

const tiles = [
  { title: "B2B", sub: "Quick Quote", image: "/img/herosection/1.webp", bg: "from-[#0F7DD8] to-[#3b9cf0]" },
  { title: "Repair & Service", sub: "Get nearest Vendor", image: "/img/herosection/2.webp", bg: "from-[#2654A1] to-[#3f72c9]" },
  { title: "Real estate", sub: "Finest Agents", image: "/img/herosection/3.webp", bg: "from-[#6769D0] to-[#8b8df0]" },
  { title: "Doctors", sub: "Book Now", image: "/img/herosection/4.webp", bg: "from-[#00AC7D] to-[#1fd0a0]" },
];

const stats = [
  { to: 24, suffix: " Million", label: "Business", img: "/img/cardimg/img1.webp" },
  { to: 1200, suffix: "", label: "Services Offered", img: "/img/cardimg/img2.webp" },
  { to: 5, suffix: " Million", label: "Visitors", img: "/img/cardimg/img3.webp", pad: true },
  { to: 2, suffix: "k+", label: "Premium Users", img: "/img/cardimg/img4.webp" },
];

const Herosection = ({ loc }) => {
  const router = useRouter();
  const { cityLabel, pincode, openModal } = useUserLocation();
  const [query, setQuery] = useState("");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const href = cityHref(loc, "realestate");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) router.push(cityHref(loc, toSlug(query)));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <DotGrid className="inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_60%)]" />
      <Glow className="-left-32 -top-24 h-96 w-96" color="bg-brand-200/60" />
      <Glow className="-right-24 top-20 h-80 w-80" color="bg-magenta-400/15" />

      <div className="container-x relative pb-12 pt-8 sm:pb-16 sm:pt-10">
        {/* headline + search */}
        <Stagger onLoad gap={0.08} className="mx-auto max-w-4xl text-center">
          <StaggerItem as="h1" className="text-3xl font-extrabold leading-tight text-night-900 sm:text-4xl lg:text-5xl">
            Find trusted businesses <span className="text-gradient">near you</span>
          </StaggerItem>
          <StaggerItem as="p" className="mt-3 text-sm text-slate-600 sm:text-base">
            Search, compare and connect with local services in one place.
          </StaggerItem>
          <StaggerItem>
            <form
              onSubmit={handleSearch}
              role="search"
              className="mt-6 flex flex-col gap-2 rounded-3xl bg-white p-2 text-left shadow-card-hover ring-1 ring-slate-100 sm:flex-row sm:items-center sm:rounded-full"
            >
              <button
                type="button"
                onClick={openModal}
                aria-label="Change location"
                className="flex items-center gap-2 rounded-full bg-mist px-4 py-3 text-sm text-night-900 transition hover:bg-brand-50 sm:max-w-[200px]"
              >
                <FaLocationDot className="shrink-0 text-magenta-500" />
                <span className="truncate font-semibold">{cityLabel ? `${cityLabel} ${pincode}` : "Your location"}</span>
                <IoIosArrowDown className="ml-auto shrink-0 text-slate-400" />
              </button>
              <label className="flex min-w-0 flex-1 items-center gap-2 px-3">
                <FaMagnifyingGlass className="shrink-0 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for hotels, doctors, plumbers…"
                  aria-label="What are you looking for?"
                  className="min-w-0 flex-1 bg-transparent py-3 text-base text-night-900 outline-none placeholder:text-slate-400"
                />
              </label>
              <button type="submit" className="btn-primary py-3.5 text-base sm:px-7">Search</button>
            </form>
          </StaggerItem>
        </Stagger>

        {/* banner slider + category tiles */}
        <Stagger onLoad gap={0.08} delay={0.25} className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <StaggerItem className="group relative min-w-0 overflow-hidden rounded-3xl shadow-card-hover">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              className="hero-swiper h-full"
            >
              {banners.map((src, i) => (
                <SwiperSlide key={src}>
                  <Link href={href} className="block h-full">
                    <img src={src} alt={`Banner ${i + 1}`} className="aspect-[2.2/1] h-full w-full object-cover lg:aspect-auto lg:min-h-[280px]" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <button ref={prevRef} aria-label="Previous banner" className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-night-900 shadow transition hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
              <IoIosArrowForward className="rotate-180" />
            </button>
            <button ref={nextRef} aria-label="Next banner" className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-night-900 shadow transition hover:bg-white sm:opacity-0 sm:group-hover:opacity-100">
              <IoIosArrowForward />
            </button>
          </StaggerItem>

          <StaggerItem className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {tiles.map((t) => (
              <Link
                key={t.title}
                href={href}
                className={`group relative flex min-h-[180px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${t.bg} p-4 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:min-h-[240px] lg:min-h-[280px]`}
              >
                <div className="relative z-10">
                  <h3 className="text-lg font-bold leading-tight">{t.title}</h3>
                  <p className="mt-1 text-xs text-white/80 sm:text-sm">{t.sub}</p>
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-bottom transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${t.image})` }}
                />
                <span className="relative z-10 mt-auto grid h-8 w-8 place-items-center rounded-full bg-white/25 backdrop-blur transition group-hover:bg-white group-hover:text-night-900">
                  <FaArrowRight className="text-xs" />
                </span>
              </Link>
            ))}
          </StaggerItem>
        </Stagger>

        {/* stat cards */}
        <Stagger gap={0.1} className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="group flex h-full flex-col items-center rounded-3xl bg-white p-4 text-center shadow-card ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-6">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist transition group-hover:bg-brand-50 sm:h-16 sm:w-16">
                  <img src={s.img} alt="" className="h-9 w-9 object-contain sm:h-11 sm:w-11" />
                </span>
                <h3 className="mt-4 text-base font-bold text-night-900 sm:text-lg">
                  <CountUp to={s.to} format={(n) => (s.pad ? String(Math.round(n)).padStart(2, "0") : Math.round(n).toLocaleString("en-IN"))} />
                  {s.suffix} {s.label}
                </h3>
                <p className="mt-2 hidden text-sm text-slate-500 sm:block">Choose from a collection of handpicked luxury villas &amp; apartments</p>
                <Link href={href} className="btn-dark btn-sm mt-4 sm:mt-5">
                  Explore Now
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Herosection;
