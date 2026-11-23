"use client";

import Link from "next/link";
import { FaPhoneVolume, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { Skyline, MapGrid } from "@/app/ui/decor";
import { Reveal, Stagger, StaggerItem } from "@/app/ui/motion";
let c = [
  {
    name: "Australia",
    url: "http://www.domainname.au",
  },
  {
    name: "UK",
    url: "http://www.domainname.uk",
  },
  {
    name: "USA",
    url: "http://www.domainname.usa",
  },
  {
    name: "India",
    url: "http://www.domainname.in",
  },
  {
    name: "Germany",
    url: "http://www.domainname.ge",
  },
  {
    name: "China",
    url: "http://www.domainname.ch",
  },
  {
    name: "France",
    url: "http://www.domainname.fr",
  },
];
let d = [
  {
    title: "Top Category",
    links: [
      "Digital Products",
      "Spa and Facial",
      "Real Estate",
      "Sports",
      "Education",
      "Electricals",
      "Automobiles",
      "Transportation",
    ].map((e) => ({
      label: e,
      href: "/realestate",
    })),
  },
  {
    title: "Trending Category",
    links: ["Hospitals", "Hotels And Resorts", "Automobiles", "Real Estate", "Sports", "Education", "Electricals"].map(
      (e) => ({
        label: e,
        href: "/realestate",
      }),
    ),
  },
  {
    title: "Help & Support",
    links: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Feedback",
        href: "/feedback",
      },
      {
        label: "Contact Us",
        href: "/contact",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Return Policy",
        href: "/return-policy",
      },
      {
        label: "Refund Policy",
        href: "/refund-policy",
      },
      {
        label: "Terms and Conditions",
        href: "/terms-and-conditions",
      },
    ],
  },
  {
    title: "Popular Categories",
    links: [
      {
        label: "Wedding halls in London",
        href: "/realestate",
      },
      {
        label: "Schools in Chennai",
        href: "/realestate",
      },
      {
        label: "Schools in New York",
        href: "/dashboard",
      },
      {
        label: "Real estate in Illinois",
        href: "/dashboard",
      },
      {
        label: "Real estate in Chennai",
        href: "/dashboard",
      },
      {
        label: "Events in Thailand",
        href: "/dashboard",
      },
      {
        label: "Flat for rent in melborn",
        href: "/dashboard",
      },
    ],
  },
];
let m = [
  {
    href: "https://www.linkedin.com/feed/",
    img: "/img/social/linkdinFuture.webp",
    label: "LinkedIn",
  },
  {
    href: "https://x.com/?lang=en",
    img: "/img/social/twitter.webp",
    label: "Twitter",
  },
  {
    href: "https://www.facebook.com/",
    img: "/img/social/fb.webp",
    label: "Facebook",
  },
  {
    href: "https://www.google.com/",
    img: "/img/social/google.webp",
    label: "Google",
  },
  {
    href: "https://www.youtube.com/",
    img: "/img/social/youtube.webp",
    label: "YouTube",
  },
];
let Footer = () => {
  let e = new Date().getFullYear();
  return (
    <footer className="relative mt-24 bg-night-950 text-slate-300 sm:mt-32">
      <Skyline className="-top-[59px] left-0 h-[60px] w-full sm:-top-[89px] sm:h-[90px]" fill="#060F33" />
      <MapGrid className="inset-0 h-full w-full" opacity={0.5} />
      <div className="container-x relative pb-8 pt-4">
        <Reveal className="relative -mt-4 overflow-hidden rounded-3xl bg-brand-gradient p-6 text-white shadow-glow sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-2xl"
          />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Free support</p>
              <h3 className="mt-1 text-xl font-bold sm:text-2xl">We’re here whenever you need us.</h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+917056997000"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-night-900 transition hover:-translate-y-0.5"
              >
                <FaPhoneVolume className="text-brand-600" />
                {" +91-70569 97000"}
              </a>
              <a
                href="mailto:info@futureittouch.com"
                className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold ring-1 ring-white/30 transition hover:bg-white/25"
              >
                <FaEnvelope />
                {" info@futureittouch.com"}
              </a>
            </div>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_2.8fr]">
          <Reveal className="space-y-6">
            <div className="inline-block rounded-2xl bg-white p-3">
              <img src="/img/logo/findbee.webp" alt="Findbee" className="w-[190px] rounded-2xl bg-white px-3 py-2" />
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <FaLocationDot className="mt-1 shrink-0 text-magenta-400" />
                Sector 34 A, Near Mukat Hospital, Chandigarh 160022
              </li>
              <li className="flex gap-3">
                <FaPhoneVolume className="mt-1 shrink-0 text-cyan-300" />
                <a href="tel:+917056997000" className="hover:text-white">
                  +91-70569 97000
                </a>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-brand-400" />
                <a href="mailto:info@futureittouch.com" className="break-all hover:text-white">
                  info@futureittouch.com
                </a>
              </li>
            </ul>
            <div>
              <h4 className="mb-3 text-sm font-bold text-white">Download Our Free Mobile Apps</h4>
              <div className="flex gap-3">
                <Link href="/">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/img/fotter/gplay.webp"
                    alt="Google Play"
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="/">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/img/fotter/appstore.webp"
                    alt="App Store"
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-white">Follow Us</h4>
              <ul className="flex gap-2">
                {m.map((e) => (
                  <li key={e.label}>
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={e.label}
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-white/20"
                    >
                      <img loading="lazy" decoding="async" src={e.img} alt="" className="h-5 w-5 object-contain" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {d.map((e) => (
              <StaggerItem key={e.title}>
                <h4 className="mb-4 text-sm font-bold text-white">{e.title}</h4>
                <ul className="space-y-2.5 text-sm">
                  {e.links.map((e) => (
                    <li key={e.label}>
                      <Link
                        href={e.href}
                        className="inline-block text-slate-400 transition hover:translate-x-1 hover:text-cyan-300"
                      >
                        {e.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <ul className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {c.map((e) => (
            <li key={e.name}>
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 transition hover:border-cyan-300/50 hover:text-white"
              >
                {e.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-slate-500 sm:text-left">
          Copyright © 2017-{e}. Proudly powered by{" "}
          <a href="/" className="font-semibold text-slate-300 hover:text-white">
            Findbee
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
