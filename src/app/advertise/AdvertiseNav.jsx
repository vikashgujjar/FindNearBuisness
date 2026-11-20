"use client";

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "@/app/context/AuthContext";
import TalkPop from "@/app/advertise/TalkPop";
import HaveAnAccount from "@/app/advertise/HaveAnAccount";
let f = [
  {
    title: "Success Stories",
    href: "#Success",
  },
  {
    title: "Benefits",
    href: "#Benefits",
  },
  {
    title: "Plans",
    href: "#Plans",
  },
  {
    title: "Features",
    href: "#Features",
  },
  {
    title: "FAQs",
    href: "#FAQs",
  },
];
function AdvertiseNav() {
  let [e, t] = useState(false),
    [s, r] = useState(false),
    [u, h] = useState(false),
    [x, g] = useState(false),
    { isLoggedIn } = useAuth();
  return (
    useEffect(() => {
      let e = () => g(window.scrollY > 8);
      return (
        window.addEventListener("scroll", e, {
          passive: true,
        }),
        () => window.removeEventListener("scroll", e)
      );
    }, []),
    (
      <header
        className={`sticky top-0 z-50 w-full transition ${x ? "bg-white/85 shadow-card backdrop-blur-xl" : "bg-white"}`}
      >
        <nav className="container-x flex h-16 items-center justify-between gap-4 lg:h-[76px]">
          <Link href="/" aria-label="Findbee home">
            <img src="/img/logo/findbee.webp" alt="Findbee" className="w-[130px] lg:w-[170px]" />
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {f.map((e) => (
              <li key={e.title}>
                <a
                  href={e.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-mist hover:text-night-900"
                >
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={() => r(true)} className="btn-primary hidden sm:inline-flex">
              <FaPhoneVolume />
              {" Talk to Us"}
            </button>
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="hidden rounded-full px-3 py-2 text-sm font-semibold text-night-900 hover:text-brand-600 lg:block"
              >
                My account
              </Link>
            ) : (
              <button
                onClick={() => h(true)}
                className="hidden rounded-full px-3 py-2 text-sm font-semibold text-night-900 hover:text-brand-600 lg:block"
              >
                Login
              </button>
            )}
            <button
              onClick={() => t(!e)}
              aria-label={e ? "Close menu" : "Open menu"}
              aria-expanded={e}
              className="grid h-11 w-11 place-items-center rounded-full bg-mist text-2xl lg:hidden"
            >
              {e ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {e && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            >
              <ul className="container-x space-y-1 py-4">
                {f.map((e) => (
                  <li key={e.title}>
                    <a
                      href={e.href}
                      onClick={() => t(false)}
                      className="block rounded-2xl px-4 py-3 font-semibold text-night-900 hover:bg-mist"
                    >
                      {e.title}
                    </a>
                  </li>
                ))}
                <li className="grid grid-cols-2 gap-2 pt-2">
                  <button onClick={() => r(true)} className="btn-primary">
                    <FaPhoneVolume />
                    {" Talk to Us"}
                  </button>
                  {isLoggedIn ? (
                    <Link href="/dashboard" className="btn-ghost">
                      My account
                    </Link>
                  ) : (
                    <button onClick={() => h(true)} className="btn-ghost">
                      Login
                    </button>
                  )}
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        {s && createPortal(<TalkPop setTalkPop={r} />, document.body)}
        {u && createPortal(<HaveAnAccount setHaveAccountCheck={h} />, document.body)}
      </header>
    )
  );
}
export default AdvertiseNav;
