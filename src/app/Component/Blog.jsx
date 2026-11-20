"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { PageHero, HeroSearch } from "@/app/ui/blocks";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { useApi, formatDate, blogHref } from "@/app/lib/api";
let u = Array.from(
  {
    length: 8,
  },
  (e, t) => ({
    id: t + 1,
    imageSrc: "/img/blog/blog1.webp",
    date: "10, Dec 2019",
    title: "Source and URL tracking",
  }),
);
function Blog() {
  let [e, t] = useState(""),
    { data, error } = useApi("/blogs?per_page=50", {
      auth: false,
    }),
    m = (
      data?.data
        ? data.data.map((e) => ({
            id: e.id,
            imageSrc: e.image || "/img/blog/blog1.webp",
            date: formatDate(e.published_at, {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            title: e.title,
            href: blogHref(e.slug),
          }))
        : error
          ? u
          : []
    ).filter((t) => t.title.toLowerCase().includes(e.toLowerCase()));
  return (
    <div className="bg-mist">
      <PageHero
        eyebrow="Stories"
        title="Blogs"
        highlight={"& insights"}
        subtitle="Here post your events, seminar, webinar, festivals and more"
        waveFill="#F3F8FE"
      >
        <HeroSearch placeholder="Search blogs" value={e} onChange={(e) => t(e.target.value)} />
      </PageHero>
      <div className="container-x pb-16">
        <Stagger gap={0.06} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {m.map((e, t) => (
            <StaggerItem key={e.id} className={0 === t ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
              <Link
                href={e.href || "/blog-inner"}
                className="group panel relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative flex-1 overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={e.imageSrc}
                    alt=""
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${0 === t ? "aspect-[16/10] h-full" : "aspect-[4/3]"}`}
                  />
                  <span className="chip absolute left-3 top-3 bg-white text-night-900 shadow">{e.date}</span>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <h2
                    className={`font-bold text-night-900 transition group-hover:text-brand-600 ${0 === t ? "text-xl" : ""}`}
                  >
                    {e.title}
                  </h2>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mist text-night-900 transition group-hover:bg-brand-gradient group-hover:text-white">
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        {!data && !error && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-busy="true">
            {[...Array(8)].map((e, t) => (
              <div key={t} className="panel aspect-[4/3] animate-pulse bg-white" />
            ))}
          </div>
        )}
        {(data || error) && 0 === m.length && (
          <p className="py-16 text-center text-slate-400">{e ? <>No posts match “{e}”.</> : "No posts yet."}</p>
        )}
      </div>
    </div>
  );
}
export default Blog;
