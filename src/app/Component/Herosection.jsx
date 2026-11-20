"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaLocationDot, FaMagnifyingGlass, FaArrowRight, FaXmark } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { DotGrid, Glow } from "@/app/ui/decor";
import { Stagger, StaggerItem, CountUp } from "@/app/ui/motion";
import { useUserLocation, cityHref, toSlug } from "@/app/context/LocationContext";
let v = ["/img/filteredData2/banner1.webp", "/img/filteredData2/banner2.webp", "/img/filteredData2/banner3.webp"];
let b = [
  {
    title: "B2B",
    sub: "Quick Quote",
    image: "/img/herosection/1.webp",
    bg: "from-[#0F7DD8] to-[#3b9cf0]",
  },
  {
    title: "Repair & Service",
    sub: "Get nearest Vendor",
    image: "/img/herosection/2.webp",
    bg: "from-[#2654A1] to-[#3f72c9]",
  },
  {
    title: "Real estate",
    sub: "Finest Agents",
    image: "/img/herosection/3.webp",
    bg: "from-[#0B1F5C] to-[#1B3A8F]",
  },
  {
    title: "Doctors",
    sub: "Book Now",
    image: "/img/herosection/4.webp",
    bg: "from-[#0891C8] to-[#18B4E8]",
  },
];
let f = [
  {
    to: 24,
    suffix: " Million",
    label: "Business",
    img: "/img/cardimg/img1.webp",
  },
  {
    to: 1200,
    suffix: "",
    label: "Services Offered",
    img: "/img/cardimg/img2.webp",
  },
  {
    to: 5,
    suffix: " Million",
    label: "Visitors",
    img: "/img/cardimg/img3.webp",
    pad: true,
  },
  {
    to: 2,
    suffix: "k+",
    label: "Premium Users",
    img: "/img/cardimg/img4.webp",
  },
];
let S = ["4 Crore+ Businesses", "3.3 Crore+ Products & Services"];
function Cy(e) {
  let { loc, href } = e,
    r = useRouter(),
    { cityLabel, pincode, openModal } = useUserLocation(),
    [v, b] = useState(""),
    [y, k] = useState(0);
  return (
    useEffect(() => {
      let e = setInterval(() => k((e) => (e + 1) % S.length), 2800);
      return () => clearInterval(e);
    }, []),
    (
      <Stagger onLoad gap={0.08} className="mb-5 md:hidden">
        <StaggerItem>
          <button
            type="button"
            onClick={openModal}
            className="flex w-full items-center gap-3 rounded-2xl bg-white p-3 text-left shadow-card ring-1 ring-slate-100"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm text-white">
              <FaLocationDot />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-bold text-night-900">
                {cityLabel ? `${cityLabel} ${pincode}` : "Set your location"}
              </span>
              <span className="text-xs font-semibold text-brand-600">Update location</span>
            </span>
            <IoIosArrowDown className="shrink-0 text-slate-400" />
          </button>
        </StaggerItem>
        <StaggerItem as="h2" className="mt-5 text-2xl font-extrabold leading-tight text-night-900">
          Search across
          <span className="relative mt-0.5 block h-[1.25em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={S[y]}
                className="text-gradient absolute inset-x-0 top-0 whitespace-nowrap"
                initial={{
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  y: "0%",
                  opacity: 1,
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {S[y]}
              </motion.span>
            </AnimatePresence>
          </span>
        </StaggerItem>
        <StaggerItem>
          <form
            onSubmit={(e) => {
              e.preventDefault(), v.trim() && r.push(cityHref(loc, toSlug(v)));
            }}
            role="search"
            className="mt-3 flex items-center rounded-full bg-white p-1.5 shadow-card-hover ring-1 ring-slate-100 focus-within:ring-brand-300"
          >
            <FaMagnifyingGlass className="ml-3 shrink-0 text-slate-400" />
            <input
              type="text"
              value={v}
              onChange={(e) => b(e.target.value)}
              placeholder="Search businesses, services…"
              aria-label="Search businesses"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-base text-night-900 outline-none placeholder:text-slate-400"
            />
            <button type="submit" className="btn-primary px-4 py-2.5">
              Search
            </button>
          </form>
        </StaggerItem>
        <StaggerItem className="mt-5 grid grid-cols-4 gap-2">
          {f.map((e) => (
            <Link
              key={e.label}
              href={href}
              className="flex flex-col items-center gap-1.5 rounded-2xl bg-white px-1 py-3 text-center shadow-card ring-1 ring-slate-100"
            >
              <img loading="lazy" decoding="async" src={e.img} alt="" className="h-8 w-8 object-contain" />
              <span className="text-[10px] font-semibold leading-tight text-night-900 xs:text-[11px]">
                {e.pad ? "05" : e.to.toLocaleString("en-IN")}
                {e.suffix} {e.label}
              </span>
            </Link>
          ))}
        </StaggerItem>
      </Stagger>
    )
  );
}
let Herosection = (props) => {
  let { loc, banners, bannersLoading } = props,
    l = useRef(null),
    o = useRef(null),
    c = cityHref(loc, "realestate");
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <DotGrid className="inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_60%)]" />
      <Glow className="-left-32 -top-24 h-96 w-96" color="bg-brand-200/60" />
      <Glow className="-right-24 top-20 h-80 w-80" color="bg-magenta-400/15" />
      <div className="container-x relative pb-12 pt-6 sm:pb-16 sm:pt-8">
        <h1 className="sr-only">Find trusted businesses near you</h1>
        <Cy loc={loc} href={c} />
        <Stagger onLoad gap={0.08} className="grid gap-4 xl:grid-cols-[minmax(0,0.843fr)_minmax(0,1fr)]">
          <StaggerItem className="group relative min-w-0 overflow-hidden rounded-3xl shadow-card-hover">
            {bannersLoading ? (
              <div className="aspect-[2.35/1] h-full w-full animate-pulse bg-brand-100" />
            ) : (
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                loop
                autoplay={{
                  delay: 3e3,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                onBeforeInit={(e) => {
                  (e.params.navigation.prevEl = l.current), (e.params.navigation.nextEl = o.current);
                }}
                navigation={{
                  prevEl: l.current,
                  nextEl: o.current,
                }}
                className="hero-swiper h-full"
              >
                {(banners?.length
                  ? banners.map((e) => ({
                      src: e.image,
                      link: e.link,
                    }))
                  : v.map((e) => ({
                      src: e,
                    }))
                ).map((e, a) => {
                  let { src, link } = e;
                  return (
                    <SwiperSlide key={src}>
                      <Link href={link || c} className="block h-full">
                        <img
                          loading="eager"
                          fetchPriority={0 === a ? "high" : undefined}
                          decoding="async"
                          src={src}
                          alt={`Banner ${a + 1}`}
                          className="aspect-[2.35/1] h-full w-full object-cover"
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
            <button
              ref={l}
              aria-label="Previous banner"
              className="absolute left-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-night-900 shadow transition hover:bg-white hidden lg:grid lg:opacity-0 lg:group-hover:opacity-100"
            >
              <IoIosArrowForward className="rotate-180" />
            </button>
            <button
              ref={o}
              aria-label="Next banner"
              className="absolute right-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-night-900 shadow transition hover:bg-white hidden lg:grid lg:opacity-0 lg:group-hover:opacity-100"
            >
              <IoIosArrowForward />
            </button>
          </StaggerItem>
          <StaggerItem className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {b.map((e) => (
              <Link
                key={e.title}
                href={c}
                className={`group relative flex aspect-[316/480] flex-col overflow-hidden xl:aspect-auto rounded-3xl bg-gradient-to-br ${e.bg} p-3.5 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
              >
                <div className="relative z-10">
                  <h3 className="text-base font-bold leading-tight">{e.title}</h3>
                  <p className="mt-1 text-xs leading-snug text-white/85 xl:max-w-[60%]">{e.sub}</p>
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-bottom transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${e.image})`,
                  }}
                />
                <span className="relative z-10 mt-auto grid h-8 w-8 place-items-center rounded-full bg-white/25 backdrop-blur transition group-hover:bg-white group-hover:text-night-900">
                  <FaArrowRight className="text-xs" />
                </span>
              </Link>
            ))}
          </StaggerItem>
        </Stagger>
        <Stagger gap={0.1} className="mt-10 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
          {f.map((e) => (
            <StaggerItem key={e.label}>
              <div className="group flex h-full flex-col items-center rounded-3xl bg-white p-4 text-center shadow-card ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-6">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist transition group-hover:bg-brand-50 sm:h-16 sm:w-16">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={e.img}
                    alt=""
                    className="h-9 w-9 object-contain sm:h-11 sm:w-11"
                  />
                </span>
                <h3 className="mt-4 text-base font-bold text-night-900 sm:text-lg">
                  <CountUp
                    to={e.to}
                    format={(a) =>
                      e.pad ? String(Math.round(a)).padStart(2, "0") : Math.round(a).toLocaleString("en-IN")
                    }
                  />
                  {e.suffix} {e.label}
                </h3>
                <p className="mt-2 hidden text-sm text-slate-500 sm:block">
                  {"Choose from a collection of handpicked luxury villas & apartments"}
                </p>
                <Link href={c} className="btn-dark btn-sm mt-4 sm:mt-5">
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
let Cw = (props) => {
  let { filteredAttractions, onClose, searchTerm, setSearchTerm, getLocationHref, handlePopupOpen } = props,
    d =
      "flex items-center gap-3 rounded-2xl bg-mist p-3 text-left transition hover:bg-brand-50 hover:ring-1 hover:ring-brand-200",
    Cm = (e) => {
      var a;
      let { item } = e;
      return (
        <>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white">
            <img loading="lazy" decoding="async" src={item.img} alt="" className="h-7 w-7 object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-tight text-night-900">{item.name}</span>
            <span className="text-xs text-slate-400">
              {item.count ?? 1}
              {" Listings"}
            </span>
          </span>
        </>
      );
    };
  return (
    <motion.aside
      className="fixed inset-y-0 right-0 z-[95] flex w-full max-w-2xl flex-col bg-white shadow-card-hover"
      initial={{
        x: "100%",
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 34,
      }}
      role="dialog"
      aria-modal="true"
      aria-label="All categories"
    >
      <div className="border-b border-slate-100 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-night-900 sm:text-2xl">All Categories</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 place-items-center rounded-full bg-mist text-night-900 transition hover:bg-brand-50"
          >
            <FaXmark />
          </button>
        </div>
        <label className="mt-4 flex items-center gap-3 rounded-full border border-slate-200 bg-mist px-4 focus-within:border-brand-500 focus-within:bg-white">
          <FaMagnifyingGlass className="text-slate-400" />
          <input
            type="text"
            placeholder="Search category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent py-3 text-sm outline-none"
            autoFocus
          />
        </label>
      </div>
      <div className="grid flex-1 auto-rows-min grid-cols-1 gap-2.5 overflow-y-auto p-5 xs:grid-cols-2 sm:p-6">
        {filteredAttractions.length > 0 ? (
          filteredAttractions.map((e) =>
            e.subCategory ? (
              <button key={e.id} onClick={() => handlePopupOpen(e.subCategory)} className={d}>
                <Cm item={e} />
              </button>
            ) : (
              <Link key={e.id} href={getLocationHref(e)} className={d}>
                <Cm item={e} />
              </Link>
            ),
          )
        ) : (
          <p className="col-span-full py-10 text-center text-slate-400">No categories found.</p>
        )}
      </div>
    </motion.aside>
  );
};
export { Cw };
export default Herosection;
