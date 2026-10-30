"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FaAd } from "react-icons/fa";
import {
  FaStore,
  FaLocationDot,
  FaMagnifyingGlass,
  FaBullhorn,
  FaArrowRight,
  FaPhoneVolume,
  FaLanguage,
  FaTableCellsLarge,
} from "react-icons/fa6";
import LanguagePop from "./LanguagePop";
import DashLeft from "./DashLeft";
import { cityHref, toSlug, useUserLocation } from "../context/LocationContext";

const allService = [
  { name: "All Service", img: "/img/navbar/service1.webp", link: "/service" },
  { name: "Events", img: "/img/navbar/service2.webp", link: "/events" },
  { name: "Products", img: "/img/navbar/service3.webp", link: "/products" },
  { name: "Coupon & Deal", img: "/img/navbar/service4.webp", link: "/Coupon-deals" },
  { name: "Blogs", img: "/img/navbar/service5.webp", link: "/blogs" },
  { name: "Community", img: "/img/navbar/service6.webp", link: "/community" },
];

const allCategory = [
  { category: "Wedding halls", count: 3 },
  { category: "Hotel & Food", count: 1 },
  { category: "Pet shop", count: 12 },
  { category: "Digital Products", count: 31 },
  { category: "Spa And Facial", count: 10 },
  { category: "Real Estate", count: 23 },
  { category: "Sports", count: 5 },
  { category: "Education", count: 5 },
  { category: "Electricals", count: 6 },
  { category: "Automobiles", count: 6 },
  { category: "Transportation", count: 2 },
  { category: "Hospitals", count: null },
  { category: "Hotel And Resorts", count: null },
];

const sideBarCategory = [
  "Automobiles", "Technology", "Electricals", "Education", "Sports", "Real Estate",
  "Wedding Halls", "Hospitals", "Pet Shop", "Restaurants", "Spa and Facial", "Transportation",
];

const placeholders = ["4 Crore+ Businesses", "3.3 Crore+ Products & Services", "Doctors, Hotels, Salons…"];

function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { location, cityLabel, pincode, openModal } = useUserLocation();

  const [megaOpen, setMegaOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [langPop, setLangPop] = useState(false);
  const [dashOpen, setDashOpen] = useState(false);
  const [catQuery, setCatQuery] = useState("");
  const [query, setQuery] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setPlaceholderIdx((i) => (i + 1) % placeholders.length), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setDrawer(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e) => e.key === "Escape" && setMegaOpen(false);
    const onClick = (e) => megaRef.current && !megaRef.current.contains(e.target) && setMegaOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  // Hooks above must always run; the advertise page has its own navbar.
  if (pathname?.includes("/advertise")) return null;

  const filteredCategories = allCategory.filter((c) =>
    c.category.toLowerCase().includes(catQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) router.push(cityHref(location, toSlug(query)));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[60] w-full transition-all duration-300 ${
          scrolled ? "bg-white/85 shadow-card backdrop-blur-xl" : "bg-white"
        }`}
      >
        <nav className="container-x flex h-16 items-center gap-3 lg:h-[76px] lg:gap-5" aria-label="Main">
          <Link href="/" className="shrink-0" aria-label="Future Touch home">
            <img src="/img/logo/logo.webp" alt="Future IT Touch" className="h-auto w-[132px] sm:w-[150px] xl:w-[176px]" />
          </Link>

          {/* Desktop: categories mega menu */}
          <div
            ref={megaRef}
            className="relative hidden lg:block"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                megaOpen ? "bg-night-900 text-white" : "bg-mist text-night-900 hover:bg-brand-50"
              }`}
            >
              <FaTableCellsLarge className="text-[13px]" />
              Categories
              <IoIosArrowDown className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22 }}
                  className="absolute left-0 top-full w-[min(920px,calc(100vw-80px))] pt-3"
                >
                  <div className="grid grid-cols-[220px_1fr_240px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card-hover">
                    <ul className="space-y-1 border-r border-slate-100 bg-mist/60 p-4">
                      {allService.map((s) => (
                        <li key={s.name}>
                          <Link
                            href={s.link}
                            className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-night-900 transition hover:bg-white hover:shadow-card"
                          >
                            <img src={s.img} alt="" className="h-8 w-8 rounded-xl object-cover" />
                            {s.name}
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
                          value={catQuery}
                          onChange={(e) => setCatQuery(e.target.value)}
                          placeholder="Search category"
                          className="w-48 rounded-full border border-slate-200 bg-mist px-4 py-2 text-sm outline-none focus:border-brand-500"
                        />
                      </div>
                      <ul className="mt-4 grid grid-cols-2 gap-1">
                        {filteredCategories.map((c) => (
                          <li key={c.category}>
                            <Link
                              href={cityHref(location, toSlug(c.category))}
                              className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-600"
                            >
                              {c.category}
                              {c.count != null && (
                                <span className="rounded-full bg-mist px-2 py-0.5 text-[11px] font-bold text-slate-500">{c.count}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                        {filteredCategories.length === 0 && (
                          <li className="col-span-2 px-3 py-6 text-sm text-slate-400">No category matches “{catQuery}”.</li>
                        )}
                      </ul>
                    </div>

                    <div className="relative overflow-hidden bg-night-900 p-5 text-white">
                      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-magenta-500/40 blur-3xl" />
                      <p className="relative text-sm text-slate-300">A few reasons you’ll love Online Business Directory</p>
                      <a href="tel:+917056997000" className="relative mt-3 flex items-center gap-2 text-sm font-bold text-cyan-300">
                        <FaPhoneVolume /> +91-70569 97000
                      </a>
                      <div className="relative mt-6 space-y-2">
                        <Link href="/user-login/sign" className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20">
                          <FaAd /> Advertise with us
                        </Link>
                        <Link href="/mybusiness" className="flex items-center gap-2 rounded-2xl bg-brand-gradient px-4 py-3 text-sm font-semibold">
                          <FaStore /> Add your business
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop: location + search */}
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
            <form onSubmit={handleSearch} className="flex min-w-0 flex-1 items-center" role="search">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${placeholders[placeholderIdx]}`}
                aria-label="Search businesses"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-slate-400"
              />
              <button type="submit" aria-label="Search" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                <FaMagnifyingGlass className="text-sm" />
              </button>
            </form>
          </div>

          {/* Desktop: actions */}
          <div className="ml-auto hidden items-center gap-1 lg:flex xl:gap-2">
            <Link href="/advertise" className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-night-900 transition hover:text-brand-600">
              <FaBullhorn className="text-magenta-500" /> Advertise
            </Link>
            <Link href="/user-login/sign/" className="rounded-full px-3 py-2 text-sm font-semibold text-night-900 transition hover:text-brand-600">
              Sign in
            </Link>
            <Link href="/user-login" className="btn-primary whitespace-nowrap">
              Create account
            </Link>
          </div>

          {/* Mobile / tablet: menu button */}
          <button
            type="button"
            onClick={() => setDrawer(true)}
            aria-label="Open menu"
            className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-mist text-2xl text-night-900 lg:hidden"
          >
            <IoMdMenu />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-night-950/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[80] flex w-[88%] max-w-sm flex-col bg-white shadow-card-hover lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <img src="/img/logo/logo.webp" alt="Future IT Touch" className="w-[130px]" />
                <button
                  type="button"
                  onClick={() => setDrawer(false)}
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
                    setDrawer(false);
                    openModal();
                  }}
                  className="flex w-full items-center gap-3 rounded-2xl bg-night-900 p-4 text-left text-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient">
                    <FaLocationDot />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">Your location</span>
                    <span className="block truncate font-semibold">{cityLabel ? `${cityLabel} ${pincode}` : "Set location"}</span>
                  </span>
                  <IoIosArrowDown className="ml-auto" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <Link href="/user-login/sign" className="btn-ghost">Sign in</Link>
                  <Link href="/user-login" className="btn-primary">Create account</Link>
                </div>

                <div>
                  <h5 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Explore</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {allService.map((s) => (
                      <Link key={s.name} href={s.link} className="flex flex-col items-center gap-2 rounded-2xl bg-mist p-3 text-center text-xs font-semibold text-night-900">
                        <img src={s.img} alt="" className="h-9 w-9 rounded-xl object-cover" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">All Categories</h5>
                  <div className="flex flex-wrap gap-2">
                    {sideBarCategory.map((name) => (
                      <Link
                        key={name}
                        href={cityHref(location, toSlug(name))}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:border-brand-500 hover:text-brand-600"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <Link href="/advertise" className="flex items-center gap-3 rounded-2xl px-3 py-3 font-semibold text-night-900 hover:bg-mist">
                    <FaBullhorn className="text-magenta-500" /> Advertise
                  </Link>
                  <Link href="/mybusiness" className="flex items-center gap-3 rounded-2xl px-3 py-3 font-semibold text-night-900 hover:bg-mist">
                    <FaStore className="text-brand-500" /> Add your business
                  </Link>
                  <button
                    type="button"
                    onClick={() => setLangPop(true)}
                    className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 font-semibold text-night-900 hover:bg-mist"
                  >
                    <FaLanguage className="text-cyan-500" /> Language
                  </button>
                </div>

                <div className="rounded-2xl border border-slate-100">
                  <button
                    type="button"
                    onClick={() => setDashOpen((v) => !v)}
                    aria-expanded={dashOpen}
                    className="flex w-full items-center justify-between px-4 py-3 font-semibold text-night-900"
                  >
                    My Dashboard
                    <IoIosArrowDown className={`transition-transform ${dashOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dashOpen && (
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

      {langPop && <LanguagePop setLangPop={setLangPop} />}
    </>
  );
}

export default NavBar;
