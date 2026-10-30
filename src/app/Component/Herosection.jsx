"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaLocationDot,
  FaMagnifyingGlass,
  FaHotel,
  FaUserDoctor,
  FaHouseChimney,
  FaSpa,
  FaCarSide,
  FaUtensils,
  FaStar,
  FaTicket,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MapGrid, Glow, Wave } from "../ui/decor";
import { Stagger, StaggerItem, CountUp, popIn } from "../ui/motion";
import { cityHref, toSlug, useUserLocation } from "../context/LocationContext";

const words = ["Doctors", "Hotels", "Salons", "Plumbers", "Real Estate", "Caterers"];

const quickChips = [
  { text: "B2B", sub: "Quick Quote", imageUrl: "/img/herosection/1.webp", dot: "bg-cyan-400" },
  { text: "Repair & Service", sub: "Nearest vendor", imageUrl: "/img/herosection/2.webp", dot: "bg-brand-400" },
  { text: "Real estate", sub: "Finest agents", imageUrl: "/img/herosection/3.webp", dot: "bg-magenta-400" },
  { text: "Doctors", sub: "Book now", imageUrl: "/img/herosection/4.webp", dot: "bg-pin-400" },
];

const stats = [
  { to: 24, suffix: "M", label: "Businesses", img: "/img/cardimg/img1.webp" },
  { to: 1200, suffix: "", label: "Services offered", img: "/img/cardimg/img2.webp" },
  { to: 5, suffix: "M", label: "Visitors", img: "/img/cardimg/img3.webp" },
  { to: 2, suffix: "k+", label: "Premium users", img: "/img/cardimg/img4.webp" },
];

// Pin positions are percentages inside the radar circle.
const pins = [
  { x: 24, y: 28, icon: FaHotel, label: "Hotels", color: "from-brand-500 to-magenta-500" },
  { x: 74, y: 22, icon: FaUserDoctor, label: "Doctors", color: "from-cyan-400 to-brand-500" },
  { x: 82, y: 60, icon: FaHouseChimney, label: "Real Estate", color: "from-magenta-500 to-pin-500" },
  { x: 58, y: 82, icon: FaSpa, label: "Spa", color: "from-pin-400 to-magenta-500" },
  { x: 18, y: 66, icon: FaCarSide, label: "Car Service", color: "from-cyan-400 to-brand-600" },
  { x: 44, y: 14, icon: FaUtensils, label: "Caterers", color: "from-brand-400 to-cyan-400" },
];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative block h-[1.15em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          className="text-gradient-cool absolute left-0 top-0 whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CityRadar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[440px] lg:max-w-[520px]">
      {/* outer rotating ring */}
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/20" />
      <div className="absolute inset-[6%] rounded-full border border-white/10" />

      {/* map disc */}
      <motion.div
        className="absolute inset-[10%] overflow-hidden rounded-full bg-night-900 ring-1 ring-white/10"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <MapGrid className="inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,74,255,.35),transparent_60%)]" />
        {/* radar sweep */}
        <div className="absolute inset-0 animate-[spin-slow_6s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(46,230,245,.28),transparent_25%)]" />
      </motion.div>

      {/* routes from you to each pin */}
      <svg aria-hidden viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full">
        {pins.map((p, i) => (
          <motion.path
            key={p.label}
            d={`M50 50 Q ${(50 + p.x) / 2 + (i % 2 ? 8 : -8)} ${(50 + p.y) / 2 + (i % 2 ? -8 : 8)} ${p.x} ${p.y}`}
            fill="none"
            stroke="rgba(124,240,250,.55)"
            strokeWidth="0.45"
            strokeDasharray="1 1.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 3.2, delay: 1 + i * 0.5, repeat: Infinity, repeatDelay: pins.length * 0.5 - 1.6 }}
          />
        ))}
      </svg>

      {/* you are here */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((r) => (
          <span
            key={r}
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping-slow rounded-full border border-cyan-300/60"
            style={{ animationDelay: `${r}s` }}
          />
        ))}
        <span className="relative grid h-11 w-11 place-items-center rounded-full bg-white text-brand-600 shadow-glow">
          <FaLocationDot />
        </span>
      </div>

      {/* category pins */}
      <Stagger onLoad gap={0.12} delay={0.5} className="absolute inset-0">
        {pins.map(({ x, y, icon: Icon, label, color }, i) => (
          <StaggerItem key={label} variants={popIn} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
            <div className="-translate-x-1/2 -translate-y-full animate-float" style={{ animationDelay: `${i * 0.7}s` }}>
              <div className="flex flex-col items-center">
                <span className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${color} text-sm text-white shadow-lg ring-2 ring-white/80 sm:h-11 sm:w-11 sm:text-base`}>
                  <Icon />
                </span>
                <span className="-mt-0.5 h-2.5 w-0.5 bg-white/80" />
                <span className="mt-1 hidden whitespace-nowrap rounded-full bg-night-950/80 px-2 py-0.5 text-[10px] font-semibold text-white ring-1 ring-white/10 sm:block">
                  {label}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* floating listing card */}
      <motion.div
        className="glass absolute -left-1 top-[4%] w-[176px] rounded-2xl p-3 shadow-2xl sm:-left-6 sm:w-[210px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
      >
        <div className="flex items-center gap-2.5">
          <img src="/img/Servicelist/img1.webp" alt="" className="h-10 w-10 rounded-xl object-cover" />
          <div className="min-w-0">
            <p className="truncate text-xs font-bold text-white sm:text-sm">Titan Wedding Hall</p>
            <p className="text-[10px] text-slate-300 sm:text-xs">Wedding halls</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-pin-400">
          <FaStar /> 5.0 <span className="ml-auto rounded-full bg-cyan-400/15 px-2 py-0.5 text-[10px] text-cyan-300">Open</span>
        </div>
      </motion.div>

      {/* floating coupon card */}
      <motion.div
        className="absolute -right-1 bottom-[6%] flex items-center gap-2.5 rounded-2xl bg-white p-3 pr-4 text-night-900 shadow-2xl sm:-right-4"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 0.7 }}
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white">
          <FaTicket />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Coupon</p>
          <p className="text-sm font-extrabold">BIZ50% OFF</p>
        </div>
      </motion.div>
    </div>
  );
}

const Herosection = ({ loc }) => {
  const router = useRouter();
  const { cityLabel, pincode, openModal } = useUserLocation();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) router.push(cityHref(loc, toSlug(query)));
  };

  return (
    <section className="relative overflow-hidden bg-night-950 text-white">
      <MapGrid opacity={0.7} />
      <Glow className="-left-32 top-10 h-72 w-72 sm:h-96 sm:w-96" color="bg-brand-600/40" />
      <Glow className="-right-24 bottom-20 h-72 w-72 sm:h-[28rem] sm:w-[28rem]" color="bg-magenta-500/25" />

      <div className="container-x relative grid items-center gap-12 pb-24 pt-10 sm:pb-32 sm:pt-14 md:landscape:grid-cols-[1.1fr_.9fr] md:landscape:gap-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pb-40 lg:pt-16">
        <Stagger onLoad gap={0.1} className="relative z-10 max-w-2xl">
          <StaggerItem>
            <span className="eyebrow-dark">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              Live in {cityLabel || "your city"}
            </span>
          </StaggerItem>

          <StaggerItem as="h1" className="mt-5 text-[2.5rem] font-extrabold leading-[1.08] xs:text-5xl sm:text-6xl xl:text-7xl">
            Find the best
            <RotatingWord />
            near you.
          </StaggerItem>

          <StaggerItem as="p" className="mt-5 max-w-lg text-base text-slate-300 sm:text-lg">
            One search across 4 crore+ businesses, products and services — mapped around wherever you are.
          </StaggerItem>

          <StaggerItem>
            <form
              onSubmit={handleSearch}
              role="search"
              className="glass mt-8 flex flex-col gap-2 rounded-3xl p-2 shadow-2xl sm:flex-row sm:items-center sm:rounded-full"
            >
              <button
                type="button"
                onClick={openModal}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/15 sm:max-w-[200px]"
              >
                <FaLocationDot className="shrink-0 text-magenta-400" />
                <span className="truncate font-semibold">{cityLabel ? `${cityLabel} ${pincode}` : "Set location"}</span>
                <IoIosArrowDown className="ml-auto shrink-0 text-slate-400" />
              </button>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-white outline-none placeholder:text-slate-400"
              />
              <button type="submit" className="btn-primary py-3.5 text-base sm:px-7">
                <FaMagnifyingGlass /> Search
              </button>
            </form>
          </StaggerItem>

          <StaggerItem className="no-scrollbar -mx-4 mt-6 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {quickChips.map((chip) => (
              <Link
                key={chip.text}
                href={cityHref(loc, "realestate")}
                className="group flex shrink-0 items-center gap-2 rounded-full bg-white/[0.07] py-1.5 pl-1.5 pr-4 ring-1 ring-white/10 transition hover:bg-white/15"
              >
                <img src={chip.imageUrl} alt="" className="h-8 w-8 rounded-full object-cover" />
                <span className="text-sm font-semibold">{chip.text}</span>
                <span className="hidden items-center gap-1 text-xs text-slate-400 sm:flex">
                  <span className={`h-1.5 w-1.5 rounded-full ${chip.dot}`} />
                  {chip.sub}
                </span>
              </Link>
            ))}
          </StaggerItem>

          <StaggerItem className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/[0.05] p-3 ring-1 ring-white/10 sm:p-4">
                <img src={s.img} alt="" className="h-7 w-7 object-contain" />
                <p className="mt-2 font-display text-2xl font-extrabold sm:text-[1.7rem]">
                  <CountUp to={s.to} />
                  <span className="text-gradient-cool">{s.suffix}</span>
                </p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </StaggerItem>
        </Stagger>

        <div className="relative">
          <CityRadar />
        </div>
      </div>

      <Wave fill="#fff" />
    </section>
  );
};

export default Herosection;
