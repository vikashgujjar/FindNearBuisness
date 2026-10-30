"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import PopUpForm from "./TalkPop";
import HaveAnAccount from "./HaveAnAccount";

const menuItems = [
  { title: "Success Stories", href: "#Success" },
  { title: "Benefits", href: "#Benefits" },
  { title: "Plans", href: "#Plans" },
  { title: "Features", href: "#Features" },
  { title: "FAQs", href: "#FAQs" },
];

export default function AdvertiseNav() {
  const [mobileBar, setMobileBar] = useState(false);
  const [talkPop, setTalkPop] = useState(false);
  const [haveAccountCheck, setHaveAccountCheck] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition ${scrolled ? "bg-white/85 shadow-card backdrop-blur-xl" : "bg-white"}`}>
      <nav className="container-x flex h-16 items-center justify-between gap-4 lg:h-[76px]">
        <Link href="/" aria-label="Future Touch home">
          <img src="/img/logo/logo.webp" alt="Future IT Touch" className="w-[130px] lg:w-[170px]" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-mist hover:text-night-900">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={() => setTalkPop(true)} className="btn-primary hidden sm:inline-flex">
            <FaPhoneVolume /> Talk to Us
          </button>
          <button onClick={() => setHaveAccountCheck(true)} className="hidden rounded-full px-3 py-2 text-sm font-semibold text-night-900 hover:text-brand-600 lg:block">
            Login
          </button>
          <button
            onClick={() => setMobileBar(!mobileBar)}
            aria-label={mobileBar ? "Close menu" : "Open menu"}
            aria-expanded={mobileBar}
            className="grid h-11 w-11 place-items-center rounded-full bg-mist text-2xl lg:hidden"
          >
            {mobileBar ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileBar && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <ul className="container-x space-y-1 py-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a href={item.href} onClick={() => setMobileBar(false)} className="block rounded-2xl px-4 py-3 font-semibold text-night-900 hover:bg-mist">
                    {item.title}
                  </a>
                </li>
              ))}
              <li className="grid grid-cols-2 gap-2 pt-2">
                <button onClick={() => setTalkPop(true)} className="btn-primary"><FaPhoneVolume /> Talk to Us</button>
                <button onClick={() => setHaveAccountCheck(true)} className="btn-ghost">Login</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {talkPop && <PopUpForm setTalkPop={setTalkPop} />}
      {haveAccountCheck && <HaveAnAccount setHaveAccountCheck={setHaveAccountCheck} />}
    </header>
  );
}
