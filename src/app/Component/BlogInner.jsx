"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import { PageHero } from "../ui/page";
import { Reveal } from "../ui/motion";
import { ArticleCover, AuthorCard, RegisterForm, ShareBar } from "./ArticleParts";

const otherPosts = [
  "SPA and facial for free",
  "Full body massage",
  "50% offer today",
  "Benefits of massage",
  "Advantages of daily workout",
];

export default function BlogInner() {
  const [search, setSearch] = useState("");
  const posts = otherPosts.filter((t) => t.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Blog"
        title="12 Days Fitness"
        highlight="Challenges"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }, { label: "12 Days Fitness Challenges" }]}
        waveFill="#F4F5FB"
      />

      <div className="container-x grid gap-6 pb-10 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0 space-y-6">
          <ArticleCover image="/img/viewBusiness/product3.webp" date={<>JAN<br />07</>} title="12 Days Fitness Challenges" />
          <Reveal as="article" className="panel space-y-4 p-6 leading-relaxed text-slate-600 sm:p-8">
            <p className="text-lg font-semibold text-night-900">
              Celebrate as the sights, sounds and aromas of Asia come alive during this local San Diego festival that’s fit for the whole family happening weekends
              January 11, 2020 - February 2, 2020 (to include Monday, January 20, 2020.)
            </p>
            <p>
              You won’t want to miss SeaWorld San Diego’s one-of-a-kind Lunar New Year celebration, featuring an incredible Chinese acrobats show, local performers,
              and delicious culinary delights. Dig into the Asian-inspired offerings of Ramen, Lo Mein, Bao Buns, Dim Sum, rice dishes and more.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
              readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem
              ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
            </p>
          </Reveal>
          <ShareBar title="Share this post" />
        </div>

        <aside className="min-w-0 space-y-5">
          <RegisterForm />
          <AuthorCard />
          <Reveal className="panel p-6">
            <h3 className="mb-4 text-lg font-bold text-night-900">Other posts</h3>
            <label className="flex items-center gap-3 rounded-full border border-slate-200 bg-mist px-4 focus-within:border-brand-500 focus-within:bg-white">
              <FaMagnifyingGlass className="text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search all posts"
                className="w-full bg-transparent py-2.5 text-sm outline-none"
              />
            </label>
            <ul className="mt-4 space-y-1">
              {posts.map((title) => (
                <li key={title}>
                  <Link href="/blog-inner" className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-mist hover:text-brand-600">
                    {title}
                    <FaArrowRight className="text-xs opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              {posts.length === 0 && <li className="px-3 py-4 text-sm text-slate-400">No posts found.</li>}
            </ul>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
