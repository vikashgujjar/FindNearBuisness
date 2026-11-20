"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { MapGrid, Glow } from "@/app/ui/decor";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { ShareBar } from "@/app/Component/ArticleParts";
import { useAuth } from "@/app/context/AuthContext";
import { Avatar } from "@/app/ui/Avatar";
import {
  useQueryParam,
  useApi,
  apiFetch,
  listingHref,
  formatDate,
  blogHref,
  eventHref,
  galleryHref,
} from "@/app/lib/api";
let p = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Listings",
    id: "listings",
  },
  {
    name: "Blog Posts",
    id: "BlogPosts",
  },
  {
    name: "Events",
    id: "Events",
  },
  {
    name: "Followers",
    id: "Followers",
  },
];
let u = [
  "Sony Musics 2",
  "Sony Music",
  "IPM Business Software",
  "Royal Real Estates",
  "Appers Premium Independent Houses",
  "Capital five star hotels",
  "Hard Rocks Hotels",
].map((e, t) => ({
  id: t,
  title: e,
  image: "/img/gallery/gallerListing1.webp",
  address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
}));
let b = [
  "12 Days Fitness Challenge",
  "Bike Racing Techniques",
  "Best Island In The World",
  "Online Marketing 2020",
  "Home Interior Design Trends",
  "Home Interior Design Trends",
].map((e) => ({
  title: e,
  date: "07, Jan 2020",
  image: "/img/gallery/galleryblog.webp",
}));
let f = [
  {
    title: "Surfing Competition Hawaii",
    date: "18 Mar",
    location: "4754 Grove Avenue, Hawaii",
  },
  {
    title: "Food eating challenge",
    date: "18 Jan",
    location: "1297 Stuart Street, Pennsylvania",
  },
  {
    title: "College Volley Ball Tournaments 2021",
    date: "18 Jan",
    location: "Lynn B Morgan, Garden City, New York",
  },
  {
    title: "States Soccer World Cup 2022",
    date: "25 Jan",
    location: "2826 Lamberts Branch Road, Miami, Florida",
  },
];
let w = [
  {
    link: "https://www.linkedin.com/feed/",
    img: "linkdinFuture.webp",
    alt: "LinkedIn",
  },
  {
    link: "https://x.com/?lang=en",
    img: "twitter.webp",
    alt: "Twitter",
  },
  {
    link: "https://www.facebook.com/",
    img: "fb.webp",
    alt: "Facebook",
  },
  {
    link: "https://www.google.com/",
    img: "google.webp",
    alt: "Google",
  },
  {
    link: "https://www.youtube.com/",
    img: "youtube.webp",
    alt: "YouTube",
  },
];
function Cv(props) {
  let { id, title, children } = props;
  return (
    <section id={id} className="scroll-mt-36">
      <h3 className="mb-5 text-xl font-bold text-night-900 sm:text-2xl">{title}</h3>
      {children}
    </section>
  );
}
function Cj(e) {
  let { error } = e;
  return error?.status === 404 ? (
    <div className="bg-mist py-24">
      <div className="container-x panel mx-auto max-w-lg p-10 text-center">
        <h1 className="text-2xl font-bold text-night-900">Profile not found</h1>
        <p className="mt-2 text-sm text-slate-500">This profile may have been removed.</p>
        <Link href="/community" className="btn-primary mt-6">
          Browse community
        </Link>
      </div>
    </div>
  ) : (
    <div className="bg-mist" aria-busy="true">
      <div className="h-72 animate-pulse bg-night-950" />
      <div className="container-x grid gap-6 py-10 lg:grid-cols-[1fr_380px]">
        <div className="panel h-96 animate-pulse bg-white" />
        <div className="panel h-96 animate-pulse bg-white" />
      </div>
    </div>
  );
}
function Gallery() {
  let [e, t] = useState("all"),
    [s, i] = useState(true),
    y = useRouter(),
    { user, isLoggedIn } = useAuth(),
    { data, error } = (function () {
      var e, t;
      let s = useQueryParam("id"),
        { data: a } = useApi("/community?per_page=1", {
          auth: false,
          skip: null !== s,
        }),
        l = s || a?.data?.[0]?.id;
      return useApi(l ? `/vendors/${encodeURIComponent(l)}` : null, {
        cacheable: false,
      });
    })(),
    I = data?.data,
    P = !data && error && 404 !== error.status;
  useEffect(() => {
    data && i(!!data.is_following);
  }, [data]);
  let C = async () => {
    if (!I) return i((e) => !e);
    if (!isLoggedIn) return y.push("/user-login/sign");
    try {
      let e = await apiFetch(`/users/${I.id}/follow`, {
        method: "POST",
      });
      i(e.following);
    } catch (e) {}
  };
  if (
    (useEffect(() => {
      let e = new IntersectionObserver((e) => e.forEach((e) => e.isIntersecting && t(e.target.id)), {
        rootMargin: "-40% 0px -55% 0px",
      });
      return (
        p.forEach((t) => {
          let s = document.getElementById(t.id);
          s && e.observe(s);
        }),
        () => e.disconnect()
      );
    }, [data]),
    !data && !P)
  )
    return <Cj error={error} />;
  let E = I ? I.company_name || I.name : "Claude D Dial",
    B = I
      ? [
          `${I.listings_count} Listings`,
          `${I.blogs_count} Blogs`,
          `${I.events_count} Events`,
          `${I.following_count} Following`,
        ]
      : ["9 Listings", "6 Blogs", "4 Events", "6 Following"],
    F = I
      ? [
          {
            link: I.linkedin,
            img: "linkdinFuture.webp",
            alt: "LinkedIn",
          },
          {
            link: I.twitter,
            img: "twitter.webp",
            alt: "Twitter",
          },
          {
            link: I.facebook,
            img: "fb.webp",
            alt: "Facebook",
          },
          {
            link: I.website && (/^https?:\/\//.test(I.website) ? I.website : `https://${I.website}`),
            img: "google.webp",
            alt: "Website",
          },
          {
            link: I.youtube,
            img: "youtube.webp",
            alt: "YouTube",
          },
        ].filter((e) => e.link)
      : w,
    T = I
      ? data.listings.map((e) => ({
          id: e.id,
          title: e.name,
          image: e.cover_image || e.logo || "/img/gallery/gallerListing1.webp",
          address: e.address,
          href: listingHref(e),
        }))
      : u,
    L = I
      ? data.blogs.map((e) => ({
          title: e.title,
          date: formatDate(e.published_at),
          image: e.image || "/img/gallery/galleryblog.webp",
          href: blogHref(e.slug),
        }))
      : b,
    A = I
      ? data.events.map((e) => ({
          title: e.title,
          date: e.event_date
            ? new Date(e.event_date).toLocaleString("en-US", {
                day: "2-digit",
                month: "short",
              })
            : "",
          location: e.address,
          image: e.image,
          href: eventHref(e.slug),
        }))
      : f,
    R = I
      ? data.followers.map((e) => ({
          id: e.id,
          name: e.company_name || e.name,
          city: e.city,
          image: e.avatar,
          href: galleryHref(e.id),
        }))
      : [0, 1, 2].map((e) => ({
          id: e,
          name: "Rachel",
          city: "Airzona",
          image: "/img/gallery/galleryProfile.webp",
        }));
  return (
    <div className="bg-mist">
      <section className="relative overflow-hidden bg-night-950 text-white">
        <img
          loading="lazy"
          decoding="async"
          src={I?.cover_image || "/img/gallery/dashboardRight1.webp"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/85 to-night-950/40" />
        <MapGrid opacity={0.4} />
        <Glow className="-left-20 top-0 h-72 w-72" color="bg-brand-600/40" />
        <Stagger
          onLoad
          className="container-x relative flex flex-col items-center gap-6 py-12 text-center md:flex-row md:text-left"
        >
          <StaggerItem>
            <Avatar
              src={I ? I.avatar : "/img/gallery/galllerpic.webp"}
              name={E}
              textClass="text-5xl"
              className="h-32 w-32 rounded-full object-cover ring-4 ring-white/20 sm:h-40 sm:w-40"
            />
          </StaggerItem>
          <StaggerItem className="flex-1">
            <h1 className="text-3xl font-extrabold sm:text-4xl">{E}</h1>
            <p className="mt-1 text-sm text-slate-300">
              {I
                ? `City: ${I.city || "—"} · Joined ${formatDate(I.joined_at, {
                    month: "short",
                    year: "numeric",
                  })}`
                : "City: 07, Jan 2000"}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {B.map((e) => (
                <span key={e} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/15">
                  {e}
                </span>
              ))}
            </div>
            <ul className="mt-4 flex justify-center gap-2 md:justify-start">
              {F.map((e) => (
                <li key={e.alt}>
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={e.alt}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={`/img/social/${e.img}`}
                      alt=""
                      className="h-4 w-4 object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>
          {(!I || user?.id !== I.id) && (
            <StaggerItem>
              <button
                type="button"
                onClick={C}
                className={s ? "btn-dark bg-white/10 hover:bg-white/20" : "btn-primary"}
              >
                {s ? "Unfollow" : "Follow"}
              </button>
            </StaggerItem>
          )}
        </Stagger>
      </section>
      <nav
        aria-label="Profile sections"
        className="sticky top-16 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl lg:top-[76px]"
      >
        <ul className="container-x no-scrollbar flex gap-1 overflow-x-auto py-2">
          {p.map((t) => (
            <li key={t.id} className="shrink-0">
              <a
                href={`#${t.id}`}
                className={`block rounded-full px-4 py-2 text-sm font-semibold transition ${e === t.id ? "bg-night-900 text-white" : "text-slate-500 hover:bg-mist"}`}
              >
                {t.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div id="all" className="container-x space-y-14 py-10">
        <Cv id="listings" title="All Listings">
          <Stagger gap={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {T.map((e) => (
              <StaggerItem
                key={e.id}
                className="group panel flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <Link href={e.href || "/gallery"} className="block overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={e.image}
                    alt={e.title}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <h5 className="font-bold text-night-900">{e.title}</h5>
                  <p className="mt-1 flex gap-2 text-xs text-slate-500">
                    <FaLocationDot className="mt-0.5 shrink-0 text-magenta-500" />
                    {e.address}
                  </p>
                  <Link href={e.href ? `${e.href}#quote` : "/all"} className="btn-ghost btn-sm mt-4 self-start">
                    Get Quote
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          {0 === T.length && <p className="text-sm text-slate-500">No listings yet.</p>}
        </Cv>
        <Cv id="BlogPosts" title="Blog posts">
          <Stagger gap={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {L.map((e, t) => (
              <StaggerItem key={t}>
                <Link
                  href={e.href || "/blogs"}
                  className="group panel block overflow-hidden transition hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={e.image}
                      alt={e.title}
                      className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="chip absolute left-3 top-3 bg-white text-night-900">{e.date}</span>
                  </div>
                  <h2 className="flex items-center justify-between gap-3 p-4 font-bold text-night-900">
                    {e.title} <FaArrowRight className="shrink-0 text-xs text-slate-300 group-hover:text-brand-500" />
                  </h2>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          {0 === L.length && <p className="text-sm text-slate-500">No blog posts yet.</p>}
        </Cv>
        <Cv id="Events" title="Events">
          <Stagger gap={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {A.map((e) => (
              <StaggerItem key={e.title}>
                <Link href={e.href || "/events"} className="group relative block overflow-hidden rounded-3xl">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={e.image || "/img/gallery/galleryblog.webp"}
                    alt=""
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <span className="chip bg-brand-gradient">{e.date}</span>
                    <p className="mt-2 font-bold leading-snug">{e.title}</p>
                    <p className="mt-1 text-xs text-slate-300">{e.location}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          {0 === A.length && <p className="text-sm text-slate-500">No events yet.</p>}
        </Cv>
        <Cv id="Followers" title="Followers">
          <Stagger gap={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {R.map((e) => (
              <StaggerItem key={e.id} className="panel relative flex items-center gap-4 p-4">
                <Avatar
                  src={e.image}
                  name={e.name}
                  alt=""
                  textClass="text-lg"
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-bold text-night-900">
                    {e.href ? (
                      <Link href={e.href} className="after:absolute after:inset-0 hover:text-brand-600">
                        {e.name}
                      </Link>
                    ) : (
                      e.name
                    )}
                  </h5>
                  <p className="text-xs text-slate-500">
                    {"City: "}
                    <span className="font-semibold text-slate-700">{e.city || "—"}</span>
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          {0 === R.length && <p className="text-sm text-slate-500">No followers yet.</p>}
        </Cv>
        <ShareBar />
      </div>
    </div>
  );
}
export default Gallery;
