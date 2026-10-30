"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", imgSrc: "/img/FixedFooterLink/footerPhone1.webp", label: "Home" },
  { href: "/service", imgSrc: "/img/FixedFooterLink/footerPhone2.webp", label: "Services" },
  { href: "/user-login/sign", imgSrc: "/img/FixedFooterLink/leads.webp", label: "Leads" },
  { href: "/products", imgSrc: "/img/FixedFooterLink/footerPhone4.webp", label: "Products" },
  { href: "/blogs", imgSrc: "/img/FixedFooterLink/footerPhone5.webp", label: "Blogs" },
];

export default function FixedFooterLinks() {
  const pathname = usePathname() || "/";
  if (pathname.includes("/advertise")) return null;

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav
      aria-label="Quick links"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-night-950/95 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex h-16 max-w-md items-stretch justify-between px-2">
        {navLinks.map((elm) => {
          const active = isActive(elm.href);
          return (
            <li key={elm.label} className="relative flex-1">
              <Link href={elm.href} className="relative flex h-full flex-col items-center justify-center gap-1" aria-current={active ? "page" : undefined}>
                {active && (
                  <motion.span
                    layoutId="bottom-nav-pill"
                    className="absolute inset-x-2 inset-y-1.5 rounded-2xl bg-brand-gradient opacity-90"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <img src={elm.imgSrc} alt="" className="relative h-6 w-6" />
                <span className={`relative text-[11px] font-semibold ${active ? "text-white" : "text-slate-400"}`}>{elm.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
