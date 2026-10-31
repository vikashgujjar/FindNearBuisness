"use client";
import Link from "next/link";
import { FaStar, FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { Contours, SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem } from "../ui/motion";
import { cityHref } from "../context/LocationContext";

const featured = {
  title: "Hotel and resort",
  image: "/img/Servicelist/serviceList2.webp",
  rating: 3.0,
  reviews: 2,
  listings: 9,
};

const services = [
  { title: "Automobiles", image: "/img/Servicelist/serviceList3.webp", rating: 3.0, reviews: 4, listings: 9 },
  { title: "wedding halls", image: "/img/Servicelist/servicelist4.webp", rating: 3.0, reviews: 2, listings: 6 },
  { title: "Digital Products", image: "/img/Servicelist/serviceList5.webp", rating: 3.0, reviews: 3, listings: 23 },
  { title: "Real Estate", image: "/img/Servicelist/serviceList6.webp", rating: 3.0, reviews: 2, listings: 23 },
];

const serviseList2 = [
  { title: "Titan Wedding Hall", category: "Wedding halls", description: "Titan wedding happ, North street, No 2, Neyyork, USA", rating: "5.0", img: "/img/Servicelist/img1.webp" },
  { title: "IPM Business Software", category: "Digital Products", description: "No:2, 4th Avenue, Newyork, USA, Near to Airport", img: "/img/Servicelist/serviceList3.webp" },
  { title: "Gill Automobiles and Services", category: "Automobiles", description: "North street, No 2, Newyork, USA", img: "/img/Servicelist/serviceListn1.webp" },
  { title: "Rachel Taj Hotels", category: "Hotels And Resorts", description: "No:2, 4th Avenue, Newyork, USA, Near to Airport", rating: "3.0", img: "/img/Servicelist/serviceListn2.webp" },
  { title: "Rolexo Villas in California", category: "Real Estate", description: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.", rating: "5.0", img: "/img/Servicelist/serviceListn6.webp" },
  { title: "Joseph Multispeciality Hospital", category: "Hospitals", description: "No:2, 4th Avenue, Newyork, USA, Near to Airport", img: "/img/Servicelist/serviceListn7.webp" },
  { title: "The Spa at Mandarin Oriental", category: "Spa", description: "No:2, 4th Avenue, Newyork, USA, Near to Airport", rating: "4.0", img: "/img/Servicelist/serviceListn8.webp" },
  { title: "Green Healthcare Hospital", category: "Hospitals", description: "No:2, 4th Avenue, Newyork, USA, Near to Airport", rating: "3.0", img: "/img/Servicelist/serviceListn9.webp" },
];

function BentoCard({ item, href, big = false }) {
  return (
    <Link
      href={href}
      className={`group relative block h-full overflow-hidden rounded-3xl bg-night-900 ${big ? "min-h-[260px] sm:min-h-[340px]" : "min-h-[170px] sm:min-h-[200px]"}`}
    >
      <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/30 to-transparent" />
      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-night-900">
        <FaStar className="text-pin-500" /> {item.rating.toFixed(1)}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <h3 className={`font-bold capitalize ${big ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}>{item.title}</h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-300 sm:text-sm">
          <span className="whitespace-nowrap">{item.reviews} Reviews</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-400 xs:block" />
          <span className="whitespace-nowrap">{item.listings} Listings</span>
          <span className="ml-auto hidden h-8 w-8 translate-x-2 place-items-center rounded-full bg-white text-night-900 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:grid">
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
}

const Servicelist = ({ loc }) => {
  return (
    <>
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Explore"
            title="Explore city"
            highlight="categories"
            subtitle="The most-loved categories around you, ranked by reviews and listings."
          />

          <Stagger gap={0.08} className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:grid-rows-2">
            <StaggerItem className="col-span-2 lg:row-span-2">
              <BentoCard item={featured} href={cityHref(loc, "realestate")} big />
            </StaggerItem>
            {services.map((elm) => (
              <StaggerItem key={elm.title}>
                <BentoCard item={elm} href={cityHref(loc, "realestate")} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist py-14 sm:py-20">
        <Contours className="-right-40 -top-40 h-[560px] w-[560px]" />
        <Contours className="-bottom-60 -left-40 h-[520px] w-[520px]" stroke="rgba(240,61,168,.12)" />

        <div className="container-x relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Trending"
              title="Trending"
              highlight="near you"
              subtitle="Discover the best services in your city, handpicked for you."
            />
            <Link href={cityHref(loc, "all")} className="btn-ghost self-start bg-white sm:self-auto">
              View all <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <Stagger
            gap={0.06}
            className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4"
          >
            {serviseList2.map((service) => (
              <StaggerItem key={service.title} className="w-[78%] shrink-0 snap-start xs:w-[62%] sm:w-auto">
                <Link
                  href={cityHref(loc, "all")}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={service.img} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-night-950/75 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      {service.category}
                    </span>
                    {service.rating && (
                      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-night-900">
                        <FaStar className="text-pin-500" /> {service.rating}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-bold leading-snug text-night-900 transition group-hover:text-brand-600">{service.title}</h3>
                    <p className="mt-2 flex gap-2 text-xs text-slate-500">
                      <FaLocationDot className="mt-0.5 shrink-0 text-magenta-500" />
                      <span className="line-clamp-2">{service.description}</span>
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
};

export default Servicelist;
