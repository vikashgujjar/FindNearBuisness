"use client";

import Link from "next/link";
import { FaStar, FaArrowRight } from "react-icons/fa6";
import { Blob, SectionHeading } from "@/app/ui/decor";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { cityHref } from "@/app/context/LocationContext";
import { listingHref } from "@/app/lib/api";
let Citycategoire = [
  {
    category: "Top Branding Real Estate",
    items: [
      {
        image: "/img/topexplore/topexplore1.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
      {
        image: "/img/topexplore/topexplore2.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
        rating: 3,
      },
      {
        image: "/img/topexplore/topexplore3.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
        rating: 3,
      },
      {
        image: "/img/topexplore/topexplore4.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
      {
        image: "/img/topexplore/topexplore5.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
    ],
  },
  {
    category: "Top Branding Digital Products",
    items: [
      {
        image: "/img/topexplore/topexplore6.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore7.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore8.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore9.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
        rating: 3,
      },
      {
        image: "/img/topexplore/topexplore10.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
        rating: 3,
      },
    ],
  },
  {
    category: "Top Branding Hospitals",
    items: [
      {
        image: "/img/topexplore/topexplore11.webp",
        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
      },
      {
        image: "/img/topexplore/topexplore12.webp",
        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3,
      },
      {
        image: "/img/topexplore/topexplore13.webp",
        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
      },
      {
        image: "/img/topexplore/topexplore14.webp",
        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3,
      },
      {
        image: "/img/topexplore/topexplore15.webp",
        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3,
      },
    ],
  },
];
let D = ["from-brand-500 to-cyan-500", "from-cyan-400 to-brand-500", "from-night-700 to-brand-500"];
let A = (props) => {
  let { loc, topRated } = props,
    i = cityHref(loc, "all"),
    r = topRated?.length
      ? (function (e) {
          let a = {};
          return (
            e.forEach((e) => {
              var t;
              let s = e.category?.name || "Businesses";
              (a[s] || (a[s] = [])).push({
                image: e.logo || e.cover_image,
                title: e.name,
                description: e.address,
                rating: Number(e.rating) || undefined,
                href: listingHref(e),
              });
            }),
            Object.entries(a)
              .sort((e, a) => a[1].length - e[1].length)
              .slice(0, 3)
              .map((e) => {
                let [a, t] = e;
                return {
                  category: `Top Branding ${a}`,
                  items: t.slice(0, 5),
                };
              })
          );
        })(topRated)
      : Citycategoire;
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <Blob className="-right-32 top-10 h-96 w-96 opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Leaderboard"
          title="Top brands in"
          highlight="your city"
          subtitle="lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla."
        />
        <Stagger gap={0.12} className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {r.map((e, a) => (
            <StaggerItem
              key={e.category}
              className={`overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-100 ${2 === a ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative overflow-hidden bg-gradient-to-r ${D[a % D.length]} px-5 py-5 text-white`}>
                <span
                  aria-hidden
                  className="absolute -right-4 -top-8 font-display text-[110px] font-extrabold leading-none text-white/15"
                >
                  {String(a + 1).padStart(2, "0")}
                </span>
                <p className="relative text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Top 5</p>
                <h3 className="relative text-lg font-bold">{e.category}</h3>
              </div>
              <ol className="divide-y divide-slate-100">
                {e.items.map((e, a) => (
                  <li key={a}>
                    <Link
                      href={e.href || i}
                      className="group flex items-center gap-3 px-5 py-3.5 transition hover:bg-mist"
                    >
                      <span className="w-6 font-display text-sm font-extrabold text-slate-300 group-hover:text-brand-500">
                        {String(a + 1).padStart(2, "0")}
                      </span>
                      <img
                        loading="lazy"
                        decoding="async"
                        src={e.image}
                        alt={e.title}
                        className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white shadow"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-night-900">{e.title}</h4>
                        <p className="truncate text-xs text-slate-500">{e.description}</p>
                      </div>
                      {e.rating ? (
                        <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600">
                          <FaStar className="text-[10px]" /> {e.rating.toFixed(1)}
                        </span>
                      ) : (
                        <FaArrowRight className="shrink-0 text-xs text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
                      )}
                    </Link>
                  </li>
                ))}
              </ol>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};
let F = {
  title: "Hotel and resort",
  image: "/img/Servicelist/serviceList2.webp",
  rating: 3,
  reviews: 2,
  listings: 9,
};
let I = [
  {
    title: "Automobiles",
    image: "/img/Servicelist/serviceList3.webp",
    rating: 3,
    reviews: 4,
    listings: 9,
  },
  {
    title: "wedding halls",
    image: "/img/Servicelist/servicelist4.webp",
    rating: 3,
    reviews: 2,
    listings: 6,
  },
  {
    title: "Digital Products",
    image: "/img/Servicelist/serviceList5.webp",
    rating: 3,
    reviews: 3,
    listings: 23,
  },
  {
    title: "Real Estate",
    image: "/img/Servicelist/serviceList6.webp",
    rating: 3,
    reviews: 2,
    listings: 23,
  },
];
let P = [
  {
    title: "Titan Wedding Hall",
    category: "Wedding halls",
    description: "Titan wedding happ, North street, No 2, Neyyork, USA",
    rating: "5.0",
    img: "/img/Servicelist/img1.webp",
  },
  {
    title: "IPM Business Software",
    category: "Digital Products",
    description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    img: "/img/Servicelist/serviceList3.webp",
  },
  {
    title: "Gill Automobiles and Services",
    category: "Automobiles",
    description: "North street, No 2, Newyork, USA",
    img: "/img/Servicelist/serviceListn1.webp",
  },
  {
    title: "Rachel Taj Hotels",
    category: "Hotels And Resorts",
    description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    rating: "3.0",
    img: "/img/Servicelist/serviceListn2.webp",
  },
  {
    title: "Rolexo Villas in California",
    category: "Real Estate",
    description: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
    rating: "5.0",
    img: "/img/Servicelist/serviceListn6.webp",
  },
  {
    title: "Joseph Multispeciality Hospital",
    category: "Hospitals",
    description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    img: "/img/Servicelist/serviceListn7.webp",
  },
  {
    title: "The Spa at Mandarin Oriental",
    category: "Spa",
    description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    rating: "4.0",
    img: "/img/Servicelist/serviceListn8.webp",
  },
  {
    title: "Green Healthcare Hospital",
    category: "Hospitals",
    description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    rating: "3.0",
    img: "/img/Servicelist/serviceListn9.webp",
  },
];
export { A, P, F, I };
export default Citycategoire;
