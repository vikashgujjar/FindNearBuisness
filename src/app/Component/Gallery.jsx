"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { Glow, MapGrid } from "../ui/decor";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";
import { ShareBar } from "./ArticleParts";

const tabs = [
  { name: "All", id: "all" },
  { name: "Listings", id: "listings" },
  { name: "Blog Posts", id: "BlogPosts" },
  { name: "Events", id: "Events" },
  { name: "Followers", id: "Followers" },
];

const listingTitles = ["Sony Musics 2", "Sony Music", "IPM Business Software", "Royal Real Estates", "Appers Premium Independent Houses", "Capital five star hotels", "Hard Rocks Hotels"];
const listings = listingTitles.map((title, i) => ({ id: i, title, image: "/img/gallery/gallerListing1.webp", address: "No:2, 4th Avenue, Newyork, USA, Near to Airport" }));

const blogPosts = ["12 Days Fitness Challenge", "Bike Racing Techniques", "Best Island In The World", "Online Marketing 2020", "Home Interior Design Trends", "Home Interior Design Trends"].map((title) => ({
  title,
  date: "07, Jan 2020",
  image: "/img/gallery/galleryblog.webp",
}));

const events = [
  { title: "Surfing Competition Hawaii", date: "18 Mar", location: "4754 Grove Avenue, Hawaii" },
  { title: "Food eating challenge", date: "18 Jan", location: "1297 Stuart Street, Pennsylvania" },
  { title: "College Volley Ball Tournaments 2021", date: "18 Jan", location: "Lynn B Morgan, Garden City, New York" },
  { title: "States Soccer World Cup 2022", date: "25 Jan", location: "2826 Lamberts Branch Road, Miami, Florida" },
];

const socials = [
  { link: "https://www.linkedin.com/feed/", img: "linkdinFuture.webp", alt: "LinkedIn" },
  { link: "https://x.com/?lang=en", img: "twitter.webp", alt: "Twitter" },
  { link: "https://www.facebook.com/", img: "fb.webp", alt: "Facebook" },
  { link: "https://www.google.com/", img: "google.webp", alt: "Google" },
  { link: "https://www.youtube.com/", img: "youtube.webp", alt: "YouTube" },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-36">
      <h3 className="mb-5 text-xl font-bold text-night-900 sm:text-2xl">{title}</h3>
      {children}
    </section>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [following, setFollowing] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-mist">
      {/* profile header */}
      <section className="relative overflow-hidden bg-night-950 text-white">
        <img src="/img/gallery/dashboardRight1.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/85 to-night-950/40" />
        <MapGrid opacity={0.4} />
        <Glow className="-left-20 top-0 h-72 w-72" color="bg-brand-600/40" />
        <Stagger onLoad className="container-x relative flex flex-col items-center gap-6 py-12 text-center md:flex-row md:text-left">
          <StaggerItem>
            <img src="/img/gallery/galllerpic.webp" alt="Claude D Dial" className="h-32 w-32 rounded-full object-cover ring-4 ring-white/20 sm:h-40 sm:w-40" />
          </StaggerItem>
          <StaggerItem className="flex-1">
            <h1 className="text-3xl font-extrabold sm:text-4xl">Claude D Dial</h1>
            <p className="mt-1 text-sm text-slate-300">City: 07, Jan 2000</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {["9 Listings", "6 Blogs", "4 Events", "6 Following"].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/15">{item}</span>
              ))}
            </div>
            <ul className="mt-4 flex justify-center gap-2 md:justify-start">
              {socials.map((s) => (
                <li key={s.alt}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.alt} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                    <img src={`/img/social/${s.img}`} alt="" className="h-4 w-4 object-contain" />
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem>
            <button type="button" onClick={() => setFollowing((v) => !v)} className={following ? "btn-dark bg-white/10 hover:bg-white/20" : "btn-primary"}>
              {following ? "Unfollow" : "Follow"}
            </button>
          </StaggerItem>
        </Stagger>
      </section>

      {/* tabs */}
      <nav aria-label="Profile sections" className="sticky top-16 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl lg:top-[76px]">
        <ul className="container-x no-scrollbar flex gap-1 overflow-x-auto py-2">
          {tabs.map((t) => (
            <li key={t.id} className="shrink-0">
              <a
                href={`#${t.id}`}
                className={`block rounded-full px-4 py-2 text-sm font-semibold transition ${active === t.id ? "bg-night-900 text-white" : "text-slate-500 hover:bg-mist"}`}
              >
                {t.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="all" className="container-x space-y-14 py-10">
        <Section id="listings" title="All Listings">
          <Stagger gap={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listings.map((l) => (
              <StaggerItem key={l.id} className="group panel flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-card-hover">
                <Link href="/gallery" className="block overflow-hidden">
                  <img src={l.image} alt={l.title} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <h5 className="font-bold text-night-900">{l.title}</h5>
                  <p className="mt-1 flex gap-2 text-xs text-slate-500"><FaLocationDot className="mt-0.5 shrink-0 text-magenta-500" />{l.address}</p>
                  <Link href="/all" className="btn-ghost btn-sm mt-4 self-start">Get Quote</Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section id="BlogPosts" title="Blog posts">
          <Stagger gap={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <StaggerItem key={i}>
                <Link href="/blogs" className="group panel block overflow-hidden transition hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="chip absolute left-3 top-3 bg-white text-night-900">{post.date}</span>
                  </div>
                  <h2 className="flex items-center justify-between gap-3 p-4 font-bold text-night-900">
                    {post.title} <FaArrowRight className="shrink-0 text-xs text-slate-300 group-hover:text-brand-500" />
                  </h2>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section id="Events" title="Events">
          <Stagger gap={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((ev) => (
              <StaggerItem key={ev.title}>
                <Link href="/events" className="group relative block overflow-hidden rounded-3xl">
                  <img src="/img/gallery/galleryblog.webp" alt="" className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <span className="chip bg-brand-gradient">{ev.date}</span>
                    <p className="mt-2 font-bold leading-snug">{ev.title}</p>
                    <p className="mt-1 text-xs text-slate-300">{ev.location}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section id="Followers" title="Followers">
          <Stagger gap={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <StaggerItem key={i} className="panel flex items-center gap-4 p-4">
                <img src="/img/gallery/galleryProfile.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-night-900">Rachel</h5>
                  <p className="text-xs text-slate-500">City: <span className="font-semibold text-slate-700">Airzona</span></p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <ShareBar />
      </div>
    </div>
  );
}
