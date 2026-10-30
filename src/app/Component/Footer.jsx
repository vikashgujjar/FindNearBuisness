"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { MapGrid, Skyline } from "../ui/decor";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";

const countries = [
  { name: "Australia", url: "http://www.domainname.au" },
  { name: "UK", url: "http://www.domainname.uk" },
  { name: "USA", url: "http://www.domainname.usa" },
  { name: "India", url: "http://www.domainname.in" },
  { name: "Germany", url: "http://www.domainname.ge" },
  { name: "China", url: "http://www.domainname.ch" },
  { name: "France", url: "http://www.domainname.fr" },
];

const columns = [
  {
    title: "Top Category",
    links: ["Digital Products", "Spa and Facial", "Real Estate", "Sports", "Education", "Electricals", "Automobiles", "Transportation"].map(
      (label) => ({ label, href: "/realestate" })
    ),
  },
  {
    title: "Trending Category",
    links: ["Hospitals", "Hotels And Resorts", "Automobiles", "Real Estate", "Sports", "Education", "Electricals"].map((label) => ({
      label,
      href: "/realestate",
    })),
  },
  {
    title: "Help & Support",
    links: [
      { label: "About Us", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Feedback", href: "/feedback" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
  {
    title: "Popular Categories",
    links: [
      { label: "Wedding halls in London", href: "/realestate" },
      { label: "Schools in Chennai", href: "/realestate" },
      { label: "Schools in New York", href: "/dashboard" },
      { label: "Real estate in Illinois", href: "/dashboard" },
      { label: "Real estate in Chennai", href: "/dashboard" },
      { label: "Events in Thailand", href: "/dashboard" },
      { label: "Flat for rent in melborn", href: "/dashboard" },
    ],
  },
];

const socials = [
  { href: "https://www.linkedin.com/feed/", img: "/img/social/linkdinFuture.webp", label: "LinkedIn" },
  { href: "https://x.com/?lang=en", img: "/img/social/twitter.webp", label: "Twitter" },
  { href: "https://www.facebook.com/", img: "/img/social/fb.webp", label: "Facebook" },
  { href: "https://www.google.com/", img: "/img/social/google.webp", label: "Google" },
  { href: "https://www.youtube.com/", img: "/img/social/youtube.webp", label: "YouTube" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-night-950 text-slate-300 sm:mt-32">
      {/* skyline sits on top of the footer */}
      <Skyline className="-top-[59px] left-0 h-[60px] w-full sm:-top-[89px] sm:h-[90px]" fill="#070920" />
      <MapGrid className="inset-0 h-full w-full" opacity={0.5} />

      <div className="container-x relative pb-8 pt-4">
        {/* support card */}
        <Reveal className="relative -mt-4 overflow-hidden rounded-3xl bg-brand-gradient p-6 text-white shadow-glow sm:p-8">
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Free support</p>
              <h3 className="mt-1 text-xl font-bold sm:text-2xl">We’re here whenever you need us.</h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:+917056997000" className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-night-900 transition hover:-translate-y-0.5">
                <FaPhoneVolume className="text-brand-600" /> +91-70569 97000
              </a>
              <a href="mailto:info@futureittouch.com" className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold ring-1 ring-white/30 transition hover:bg-white/25">
                <FaEnvelope /> info@futureittouch.com
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_2.8fr]">
          {/* brand + contact */}
          <Reveal className="space-y-6">
            <div className="inline-block rounded-2xl bg-white p-3">
              <img src="/img/logo/logo.webp" alt="Future IT Touch" className="w-[170px]" />
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <FaLocationDot className="mt-1 shrink-0 text-magenta-400" />
                Sector 34 A, Near Mukat Hospital, Chandigarh 160022
              </li>
              <li className="flex gap-3">
                <FaPhoneVolume className="mt-1 shrink-0 text-cyan-300" />
                <a href="tel:+917056997000" className="hover:text-white">+91-70569 97000</a>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-brand-400" />
                <a href="mailto:info@futureittouch.com" className="break-all hover:text-white">info@futureittouch.com</a>
              </li>
            </ul>
            <div>
              <h4 className="mb-3 text-sm font-bold text-white">Download Our Free Mobile Apps</h4>
              <div className="flex gap-3">
                <Link href="/"><img src="/img/fotter/gplay.webp" alt="Google Play" className="h-10 w-auto" /></Link>
                <Link href="/"><img src="/img/fotter/appstore.webp" alt="App Store" className="h-10 w-auto" /></Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-white">Follow Us</h4>
              <ul className="flex gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-white/20"
                    >
                      <img src={s.img} alt="" className="h-5 w-5 object-contain" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* link columns */}
          <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map((col) => (
              <StaggerItem key={col.title}>
                <h4 className="mb-4 text-sm font-bold text-white">{col.title}</h4>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="inline-block text-slate-400 transition hover:translate-x-1 hover:text-cyan-300">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <ul className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {countries.map((c) => (
            <li key={c.name}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 transition hover:border-cyan-300/50 hover:text-white"
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-slate-500 sm:text-left">
          Copyright © 2017-{currentYear}. Proudly powered by{" "}
          <a href="https://futuretouch.in/" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-300 hover:text-white">
            Future IT Touch Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
