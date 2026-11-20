"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaAd } from "react-icons/fa";
import {
  FaTableCellsLarge,
  FaArrowRight,
  FaPhoneVolume,
  FaStore,
  FaLocationDot,
  FaMagnifyingGlass,
  FaBullhorn,
  FaLanguage,
} from "react-icons/fa6";
import { DashLeft } from "@/app/Component/DashLeft";
import { useUserLocation, cityHref, toSlug } from "@/app/context/LocationContext";
import { useAuth } from "@/app/context/AuthContext";
import { useApi } from "@/app/lib/api";
import LanguagePop from "@/app/Component/LanguagePop";
let j = [
  {
    name: "All Service",
    img: "/img/navbar/service1.webp",
    link: "/service",
  },
  {
    name: "Events",
    img: "/img/navbar/service2.webp",
    link: "/events",
  },
  {
    name: "Products",
    img: "/img/navbar/service3.webp",
    link: "/products",
  },
  {
    name: "Coupon & Deal",
    img: "/img/navbar/service4.webp",
    link: "/Coupon-deals",
  },
  {
    name: "Blogs",
    img: "/img/navbar/service5.webp",
    link: "/blogs",
  },
  {
    name: "Community",
    img: "/img/navbar/service6.webp",
    link: "/community",
  },
];
let y = [
  {
    category: "Wedding halls",
    count: 3,
  },
  {
    category: "Hotel & Food",
    count: 1,
  },
  {
    category: "Pet shop",
    count: 12,
  },
  {
    category: "Digital Products",
    count: 31,
  },
  {
    category: "Spa And Facial",
    count: 10,
  },
  {
    category: "Real Estate",
    count: 23,
  },
  {
    category: "Sports",
    count: 5,
  },
  {
    category: "Education",
    count: 5,
  },
  {
    category: "Electricals",
    count: 6,
  },
  {
    category: "Automobiles",
    count: 6,
  },
  {
    category: "Transportation",
    count: 2,
  },
  {
    category: "Hospitals",
    count: null,
  },
  {
    category: "Hotel And Resorts",
    count: null,
  },
];
let v = [
  "Automobiles",
  "Technology",
  "Electricals",
  "Education",
  "Sports",
  "Real Estate",
  "Wedding Halls",
  "Hospitals",
  "Pet Shop",
  "Restaurants",
  "Spa and Facial",
  "Transportation",
];
let N = ["4 Crore+ Businesses", "3.3 Crore+ Products & Services", "Doctors, Hotels, Salons…"];
let Navbar = function () {
  var e;
  let t = usePathname(),
    a = useRouter(),
    { location, cityLabel, pincode, openModal } = useUserLocation(),
    { user, logout } = useAuth(),
    { data } = useApi("/categories", {
      auth: false,
    }),
    [F, A] = useState(false),
    [L, _] = useState(false),
    [T, H] = useState(false),
    [q, I] = useState(false),
    [M, z] = useState(""),
    [R, D] = useState(""),
    [O, Y] = useState(0),
    [B, U] = useState(false),
    W = useRef(null);
  if (
    (useEffect(() => {
      let e = setInterval(() => Y((e) => (e + 1) % N.length), 2600);
      return () => clearInterval(e);
    }, []),
    useEffect(() => {
      let e = () => U(window.scrollY > 8);
      return (
        e(),
        window.addEventListener("scroll", e, {
          passive: true,
        }),
        () => window.removeEventListener("scroll", e)
      );
    }, []),
    useEffect(() => {
      _(false), A(false);
    }, [t]),
    useEffect(
      () => (
        (document.body.style.overflow = L ? "hidden" : ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [L],
    ),
    useEffect(() => {
      if (!F) return;
      let e = (e) => "Escape" === e.key && A(false),
        t = (e) => W.current && !W.current.contains(e.target) && A(false);
      return (
        document.addEventListener("keydown", e),
        document.addEventListener("mousedown", t),
        () => {
          document.removeEventListener("keydown", e), document.removeEventListener("mousedown", t);
        }
      );
    }, [F]),
    t?.includes("/advertise"))
  )
    return null;
  let Q = (
      data?.data?.length
        ? data.data.map((e) => ({
            category: e.name,
            slug: e.slug,
            count: e.listings_count || null,
          }))
        : y
    ).filter((e) => e.category.toLowerCase().includes(M.toLowerCase())),
    V = async () => {
      await logout(), a.push("/");
    },
    X = (e) => {
      e.preventDefault(), R.trim() && a.push(cityHref(location, toSlug(R)));
    };
  return (
    <>
      <header
        className={`sticky top-0 z-[60] w-full transition-all duration-300 ${B ? "bg-white/85 shadow-card backdrop-blur-xl" : "bg-white"}`}
      >
        <nav className="container-x flex h-16 items-center gap-3 lg:h-[76px] lg:gap-5" aria-label="Main">
          <Link href="/" className="shrink-0" aria-label="Findbee home">
            <img src="/img/logo/findbee.webp" alt="Findbee" className="h-auto w-[132px] sm:w-[150px] xl:w-[176px]" />
          </Link>
          <div ref={W} className="relative hidden lg:block" onMouseEnter={() => A(true)} onMouseLeave={() => A(false)}>
            <button
              type="button"
              onClick={() => A((e) => !e)}
              aria-expanded={F}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${F ? "bg-night-900 text-white" : "bg-mist text-night-900 hover:bg-brand-50"}`}
            >
              <FaTableCellsLarge className="text-[13px]" />
              Categories
              <IoIosArrowDown className={`transition-transform ${F ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {F && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="absolute left-0 top-full w-[min(920px,calc(100vw-80px))] pt-3"
                >
                  <div className="grid grid-cols-[220px_1fr_240px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card-hover">
                    <ul className="space-y-1 border-r border-slate-100 bg-mist/60 p-4">
                      {j.map((e) => (
                        <li key={e.name}>
                          <Link
                            href={e.link}
                            className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-night-900 transition hover:bg-white hover:shadow-card"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              src={e.img}
                              alt=""
                              className="h-8 w-8 rounded-xl object-cover"
                            />
                            {e.name}
                            <FaArrowRight className="ml-auto text-xs opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-base font-bold text-night-900">All Categories</h4>
                        <input
                          type="search"
                          value={M}
                          onChange={(e) => z(e.target.value)}
                          placeholder="Search category"
                          className="w-48 rounded-full border border-slate-200 bg-mist px-4 py-2 text-sm outline-none focus:border-brand-500"
                        />
                      </div>
                      <ul className="mt-4 grid max-h-[340px] grid-cols-2 gap-1 overflow-y-auto">
                        {Q.map((e) => (
                          <li key={e.category}>
                            <Link
                              href={cityHref(location, e.slug || toSlug(e.category))}
                              className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-600"
                            >
                              {e.category}
                              {null != e.count && (
                                <span className="rounded-full bg-mist px-2 py-0.5 text-[11px] font-bold text-slate-500">
                                  {e.count}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                        {0 === Q.length && (
                          <li className="col-span-2 px-3 py-6 text-sm text-slate-400">No category matches “{M}”.</li>
                        )}
                      </ul>
                    </div>
                    <div className="relative overflow-hidden bg-night-900 p-5 text-white">
                      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-magenta-500/40 blur-3xl" />
                      <p className="relative text-sm text-slate-300">
                        A few reasons you’ll love Online Business Directory
                      </p>
                      <a
                        href="tel:+917056997000"
                        className="relative mt-3 flex items-center gap-2 text-sm font-bold text-cyan-300"
                      >
                        <FaPhoneVolume />
                        {" +91-70569 97000"}
                      </a>
                      <div className="relative mt-6 space-y-2">
                        <Link
                          href="/user-login/sign"
                          className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20"
                        >
                          <FaAd />
                          {" Advertise with us"}
                        </Link>
                        <Link
                          href="/mybusiness"
                          className="flex items-center gap-2 rounded-2xl bg-brand-gradient px-4 py-3 text-sm font-semibold"
                        >
                          <FaStore />
                          {" Add your business"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="hidden min-w-0 flex-1 items-center rounded-full border border-slate-200 bg-mist p-1 transition focus-within:border-brand-500 focus-within:bg-white focus-within:shadow-glow lg:flex">
            <button
              type="button"
              onClick={openModal}
              className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-left shadow-sm transition hover:text-brand-600"
            >
              <FaLocationDot className="text-magenta-500" />
              <span className="max-w-[120px] truncate text-sm font-semibold">{cityLabel || "Set location"}</span>
              {pincode && <span className="text-xs text-slate-400">{pincode}</span>}
              <IoIosArrowDown className="text-xs text-slate-400" />
            </button>
            <form onSubmit={X} className="flex min-w-0 flex-1 items-center" role="search">
              <input
                type="text"
                value={R}
                onChange={(e) => D(e.target.value)}
                placeholder={`Search ${N[O]}`}
                aria-label="Search businesses"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                aria-label="Search"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-white"
              >
                <FaMagnifyingGlass className="text-sm" />
              </button>
            </form>
          </div>
          <div className="ml-auto hidden items-center gap-1 lg:flex xl:gap-2">
            <Link
              href="/advertise"
              className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-night-900 transition hover:text-brand-600"
            >
              <FaBullhorn className="text-magenta-500" />
              {" Advertise"}
            </Link>
            {user ? (
              <>
                <button
                  type="button"
                  onClick={V}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-night-900 transition hover:text-brand-600"
                >
                  Log out
                </button>
                <Link href="/dashboard" className="btn-primary whitespace-nowrap">
                  My account
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/user-login/sign/"
                  className="rounded-full px-3 py-2 text-sm font-semibold text-night-900 transition hover:text-brand-600"
                >
                  Sign in
                </Link>
                <Link href="/user-login" className="btn-primary whitespace-nowrap">
                  Create account
                </Link>
              </>
            )}
          </div>
          <div className="ml-2 hidden min-w-0 flex-1 items-center rounded-full border border-slate-200 bg-mist p-1 transition focus-within:border-brand-500 focus-within:bg-white md:flex lg:hidden">
            <button
              type="button"
              onClick={openModal}
              aria-label="Change location"
              className="flex max-w-[150px] shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-2 text-left shadow-sm transition hover:text-brand-600"
            >
              <FaLocationDot className="shrink-0 text-magenta-500" />
              <span className="truncate text-sm font-semibold">{cityLabel || "Location"}</span>
              <IoIosArrowDown className="shrink-0 text-xs text-slate-400" />
            </button>
            <form onSubmit={X} className="flex min-w-0 flex-1 items-center" role="search">
              <input
                type="text"
                value={R}
                onChange={(e) => D(e.target.value)}
                placeholder={`Search ${N[O]}`}
                aria-label="Search businesses"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                aria-label="Search"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-white"
              >
                <FaMagnifyingGlass className="text-sm" />
              </button>
            </form>
          </div>
          <button
            type="button"
            onClick={() => _(true)}
            aria-label="Open menu"
            className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-mist text-2xl text-night-900 lg:hidden"
          >
            <IoMdMenu />
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {L && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-night-950/60 backdrop-blur-sm lg:hidden"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => _(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[80] flex w-[88%] max-w-sm flex-col bg-white shadow-card-hover lg:hidden"
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
                stiffness: 320,
                damping: 34,
              }}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <img src="/img/logo/findbee.webp" alt="Findbee" className="w-[130px]" />
                <button
                  type="button"
                  onClick={() => _(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full bg-mist text-night-900"
                >
                  <RxCross1 />
                </button>
              </div>
              <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
                <button
                  type="button"
                  onClick={() => {
                    _(false), openModal();
                  }}
                  className="flex w-full items-center gap-3 rounded-2xl bg-night-900 p-4 text-left text-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient">
                    <FaLocationDot />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">Your location</span>
                    <span className="block truncate font-semibold">
                      {cityLabel ? `${cityLabel} ${pincode}` : "Set location"}
                    </span>
                  </span>
                  <IoIosArrowDown className="ml-auto" />
                </button>
                <div className="grid grid-cols-2 gap-2">
                  {user ? (
                    <>
                      <button type="button" onClick={V} className="btn-ghost">
                        Log out
                      </button>
                      <Link href="/dashboard" className="btn-primary">
                        My account
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link href="/user-login/sign" className="btn-ghost">
                        Sign in
                      </Link>
                      <Link href="/user-login" className="btn-primary">
                        Create account
                      </Link>
                    </>
                  )}
                </div>
                <div>
                  <h5 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Explore</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {j.map((e) => (
                      <Link
                        key={e.name}
                        href={e.link}
                        className="flex flex-col items-center gap-2 rounded-2xl bg-mist p-3 text-center text-xs font-semibold text-night-900"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={e.img}
                          alt=""
                          className="h-9 w-9 rounded-xl object-cover"
                        />
                        {e.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">All Categories</h5>
                  <div className="flex flex-wrap gap-2">
                    {v.map((e) => (
                      <Link
                        key={e}
                        href={cityHref(location, toSlug(e))}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:border-brand-500 hover:text-brand-600"
                      >
                        {e}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <Link
                    href="/advertise"
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 font-semibold text-night-900 hover:bg-mist"
                  >
                    <FaBullhorn className="text-magenta-500" />
                    {" Advertise"}
                  </Link>
                  <Link
                    href="/mybusiness"
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 font-semibold text-night-900 hover:bg-mist"
                  >
                    <FaStore className="text-brand-500" />
                    {" Add your business"}
                  </Link>
                  <button
                    type="button"
                    onClick={() => H(true)}
                    className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 font-semibold text-night-900 hover:bg-mist"
                  >
                    <FaLanguage className="text-cyan-500" />
                    {" Language"}
                  </button>
                </div>
                <div className="rounded-2xl border border-slate-100">
                  <button
                    type="button"
                    onClick={() => I((e) => !e)}
                    aria-expanded={q}
                    className="flex w-full items-center justify-between px-4 py-3 font-semibold text-night-900"
                  >
                    My Dashboard
                    <IoIosArrowDown className={`transition-transform ${q ? "rotate-180" : ""}`} />
                  </button>
                  {q && (
                    <div className="border-t border-slate-100 px-2 pb-2">
                      <DashLeft />
                    </div>
                  )}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      {T && <LanguagePop setLangPop={H} />}
    </>
  );
};
export default Navbar;
