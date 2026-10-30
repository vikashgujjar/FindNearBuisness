"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { PageHero, HeroSearch } from "../ui/page";
import { Stagger, StaggerItem } from "../ui/motion";

const blogData = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  imageSrc: "/img/blog/blog1.webp",
  date: "10, Dec 2019",
  title: "Source and URL tracking",
}));

export default function Blog() {
  const [query, setQuery] = useState("");
  const posts = blogData.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="bg-mist">
      <PageHero
        eyebrow="Stories"
        title="Blogs"
        highlight="& insights"
        subtitle="Here post your events, seminar, webinar, festivals and more"
        waveFill="#F4F5FB"
      >
        <HeroSearch placeholder="Search blogs" value={query} onChange={(e) => setQuery(e.target.value)} />
      </PageHero>

      <div className="container-x pb-16">
        <Stagger gap={0.06} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((blog, i) => (
            <StaggerItem key={blog.id} className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
              <Link href="/blog-inner" className="group panel relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={blog.imageSrc}
                    alt=""
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[16/10] h-full" : "aspect-[4/3]"}`}
                  />
                  <span className="chip absolute left-3 top-3 bg-white text-night-900 shadow">{blog.date}</span>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <h2 className={`font-bold text-night-900 transition group-hover:text-brand-600 ${i === 0 ? "text-xl" : ""}`}>{blog.title}</h2>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mist text-night-900 transition group-hover:bg-brand-gradient group-hover:text-white">
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        {posts.length === 0 && <p className="py-16 text-center text-slate-400">No posts match “{query}”.</p>}
      </div>
    </div>
  );
}
