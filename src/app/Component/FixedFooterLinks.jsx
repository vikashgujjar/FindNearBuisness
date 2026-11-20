"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
let o = [
  {
    href: "/",
    imgSrc: "/img/FixedFooterLink/footerPhone1.webp",
    label: "Home",
  },
  {
    href: "/service",
    imgSrc: "/img/FixedFooterLink/footerPhone2.webp",
    label: "Services",
  },
  {
    href: "/user-login/sign",
    imgSrc: "/img/FixedFooterLink/leads.webp",
    label: "Leads",
  },
  {
    href: "/products",
    imgSrc: "/img/FixedFooterLink/footerPhone4.webp",
    label: "Products",
  },
  {
    href: "/blogs",
    imgSrc: "/img/FixedFooterLink/footerPhone5.webp",
    label: "Blogs",
  },
];
function FixedFooterLinks() {
  let e = usePathname() || "/";
  if (e.includes("/advertise")) return null;
  let t = (t) => ("/" === t ? "/" === e : e.startsWith(t));
  return (
    <nav
      aria-label="Quick links"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-night-950/95 backdrop-blur-xl md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <ul className="mx-auto flex h-16 max-w-md items-stretch justify-between px-2">
        {o.map((e) => {
          let a = t(e.href);
          return (
            <li key={e.label} className="relative flex-1">
              <Link
                href={e.href}
                className="relative flex h-full flex-col items-center justify-center gap-1"
                aria-current={a ? "page" : undefined}
              >
                {a && (
                  <motion.span
                    layoutId="bottom-nav-pill"
                    className="absolute inset-x-2 inset-y-1.5 rounded-2xl bg-brand-gradient opacity-90"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}
                <img loading="lazy" decoding="async" src={e.imgSrc} alt="" className="relative h-6 w-6" />
                <span className={`relative text-[11px] font-semibold ${a ? "text-white" : "text-slate-400"}`}>
                  {e.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default FixedFooterLinks;
