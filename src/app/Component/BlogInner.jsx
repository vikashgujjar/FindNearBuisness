"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { PageHero } from "@/app/ui/blocks";
import { Reveal } from "@/app/ui/motion";
import { splitTitle, ArticleCover, DateBadge, ShareBar, RegisterForm, AuthorCard } from "@/app/Component/ArticleParts";
import { useQueryParam, useApi, blogHref, galleryHref, formatDate } from "@/app/lib/api";
let x = [
  "SPA and facial for free",
  "Full body massage",
  "50% offer today",
  "Benefits of massage",
  "Advantages of daily workout",
];
function BlogInner() {
  var e, t, s;
  let [i, g] = useState(""),
    p = useParams(),
    u = useQueryParam("slug"),
    b = p?.blog ? decodeURIComponent(p.blog) : null,
    { data, error } = useApi("/blogs?per_page=50", {
      auth: false,
    }),
    v = b || u || (null === u ? data?.data?.[0]?.slug : undefined),
    { data: N, error: w } = useApi(v ? `/blogs/${encodeURIComponent(v)}` : null, {
      auth: false,
    }),
    y = N?.data,
    _ = !y && (w || error) && w?.status !== 404,
    k = (
      data?.data
        ? data.data
            .filter((e) => e.slug !== y?.slug)
            .map((e) => ({
              title: e.title,
              href: blogHref(e.slug),
            }))
        : x.map((e) => ({
            title: e,
            href: "/blog-inner",
          }))
    ).filter((e) => e.title.toLowerCase().includes(i.toLowerCase()));
  if (w?.status === 404 || (data && !data.data?.length && !v))
    return (
      <div className="bg-mist py-24">
        <div className="container-x panel mx-auto max-w-lg p-10 text-center">
          <h1 className="text-2xl font-bold text-night-900">Post not found</h1>
          <p className="mt-2 text-sm text-slate-500">This post may have been removed.</p>
          <Link href="/blogs" className="btn-primary mt-6">
            See all posts
          </Link>
        </div>
      </div>
    );
  if (!y && !_)
    return (
      <div className="bg-mist" aria-busy="true">
        <div className="h-48" />
        <div className="container-x grid gap-6 pb-10 lg:grid-cols-[1fr_380px]">
          <div className="panel aspect-[16/9] animate-pulse bg-white" />
          <div className="panel h-96 animate-pulse bg-white" />
        </div>
      </div>
    );
  let S = y
    ? splitTitle(y.title)
    : {
        title: "12 Days Fitness",
        highlight: "Challenges",
      };
  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Blog"
        title={S.title}
        highlight={S.highlight}
        crumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Blogs",
            href: "/blogs",
          },
          {
            label: y ? y.title : "12 Days Fitness Challenges",
          },
        ]}
        waveFill="#F3F8FE"
      />
      <div className="container-x grid gap-6 pb-10 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0 space-y-6">
          <ArticleCover
            image={y?.image || "/img/viewBusiness/product3.webp"}
            date={
              y ? (
                DateBadge(y.published_at)
              ) : (
                <>
                  JAN
                  <br />
                  07
                </>
              )
            }
            title={y ? y.title : "12 Days Fitness Challenges"}
          />
          {y ? (
            <Reveal
              as="article"
              className={
                "panel p-6 leading-relaxed text-slate-600 sm:p-8 [&_p:first-child]:text-lg [&_p:first-child]:font-semibold [&_p:first-child]:text-night-900"
              }
            >
              <div
                className="space-y-4"
                dangerouslySetInnerHTML={{
                  __html: y.body || `<p>${y.excerpt || ""}</p>`,
                }}
              />
            </Reveal>
          ) : (
            <Reveal as="article" className="panel space-y-4 p-6 leading-relaxed text-slate-600 sm:p-8">
              <p className="text-lg font-semibold text-night-900">
                Celebrate as the sights, sounds and aromas of Asia come alive during this local San Diego festival
                that’s fit for the whole family happening weekends January 11, 2020 - February 2, 2020 (to include
                Monday, January 20, 2020.)
              </p>
              <p>
                You won’t want to miss SeaWorld San Diego’s one-of-a-kind Lunar New Year celebration, featuring an
                incredible Chinese acrobats show, local performers, and delicious culinary delights. Dig into the
                Asian-inspired offerings of Ramen, Lo Mein, Bao Buns, Dim Sum, rice dishes and more.
              </p>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, making it look like readable English.
              </p>
            </Reveal>
          )}
          <ShareBar title="Share this post" />
        </div>
        <aside className="min-w-0 space-y-5">
          {(!y || y.enquiry_enabled) && <RegisterForm type="blogs" slug={y?.slug} />}
          {y?.author ? (
            <AuthorCard
              href={galleryHref(y.author.id)}
              name={y.author.company_name || y.author.name}
              joined={`Joined on ${formatDate(y.author.joined_at, {
                month: "short",
                year: "numeric",
              })}`}
              image={y.author.avatar}
            />
          ) : (
            <AuthorCard />
          )}
          <Reveal className="panel p-6">
            <h3 className="mb-4 text-lg font-bold text-night-900">Other posts</h3>
            <label className="flex items-center gap-3 rounded-full border border-slate-200 bg-mist px-4 focus-within:border-brand-500 focus-within:bg-white">
              <FaMagnifyingGlass className="text-slate-400" />
              <input
                type="text"
                value={i}
                onChange={(e) => g(e.target.value)}
                placeholder="Search all posts"
                className="w-full bg-transparent py-2.5 text-sm outline-none"
              />
            </label>
            <ul className="mt-4 space-y-1">
              {k.map((e) => {
                let { title, href } = e;
                return (
                  <li key={title}>
                    <Link
                      href={href}
                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-mist hover:text-brand-600"
                    >
                      {title}
                      <FaArrowRight className="text-xs opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                );
              })}
              {0 === k.length && <li className="px-3 py-4 text-sm text-slate-400">No posts found.</li>}
            </ul>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
export default BlogInner;
