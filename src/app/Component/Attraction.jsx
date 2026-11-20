"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import { DotGrid, Blob, SectionHeading } from "@/app/ui/decor";
import { Stagger, StaggerItem, popIn } from "@/app/ui/motion";
import { cityHref, toSlug } from "@/app/context/LocationContext";
import { Cw } from "@/app/Component/Herosection";
function B(e) {
  let { categories = [], onClose } = e,
    [r, l] = useState(""),
    o = useRef(),
    d = categories.filter((e) => e.title.toLowerCase().includes(r.toLowerCase()));
  return (
    useEffect(() => {
      let e = (e) => {
          o.current && !o.current.contains(e.target) && onClose();
        },
        a = (e) => "Escape" === e.key && onClose();
      return (
        document.addEventListener("mousedown", e),
        document.addEventListener("keydown", a),
        () => {
          document.removeEventListener("mousedown", e), document.removeEventListener("keydown", a);
        }
      );
    }, [onClose]),
    (
      <motion.div
        className="fixed inset-0 z-[9999] flex items-end justify-center bg-night-950/60 backdrop-blur-sm sm:items-center sm:p-4"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <motion.div
          ref={o}
          role="dialog"
          aria-modal="true"
          aria-label="Sub categories"
          className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white p-6 shadow-card-hover sm:rounded-3xl"
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 30,
          }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-night-900">Choose a sub-category</h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="grid h-10 w-10 place-items-center rounded-full bg-mist text-night-900"
            >
              <FaXmark />
            </button>
          </div>
          <label className="mt-4 flex items-center gap-3 rounded-full border border-slate-200 bg-mist px-4 focus-within:border-brand-500 focus-within:bg-white">
            <FaMagnifyingGlass className="text-slate-400" />
            <input
              type="text"
              placeholder="Search category..."
              value={r}
              onChange={(e) => l(e.target.value)}
              className="w-full bg-transparent py-3 text-sm outline-none"
            />
          </label>
          <ul className="mt-4 space-y-2">
            {d.length > 0 ? (
              d.map((e, a) => (
                <li
                  key={a}
                  className="group flex cursor-pointer items-center justify-between rounded-2xl bg-mist px-4 py-3 font-medium capitalize text-night-900 transition hover:bg-brand-50 hover:text-brand-600"
                >
                  {e.href ? (
                    <Link href={e.href} className="flex-1">
                      {e.icon && <span className="mr-2">{e.icon}</span>}
                      {e.title}
                    </Link>
                  ) : (
                    <span>
                      {e.icon && <span className="mr-2">{e.icon}</span>}
                      {e.title}
                    </span>
                  )}
                  <FaArrowRight className="text-xs opacity-0 transition group-hover:opacity-100" />
                </li>
              ))
            ) : (
              <li className="py-6 text-center text-slate-400">No categories found.</li>
            )}
          </ul>
        </motion.div>
      </motion.div>
    )
  );
}
let Attraction = (props) => {
  let { loc, categories } = props,
    r = categories?.length
      ? categories.map((e) => {
          var t;
          return {
            id: e.id,
            name: e.name,
            slug: e.slug,
            img: e.icon || "/img/attraction/viewall.webp",
            count: e.listings_count,
            subCategory: e.children?.length
              ? e.children.map((e) => ({
                  title: e.name,
                  href: cityHref(loc, toSlug(e.name)),
                }))
              : undefined,
          };
        })
      : [
          {
            id: 1,
            listing: 0,
            name: "Hotel",
            img: "/img/attraction/allAttraction/hotel.webp",
            link: "/attraction/2",
          },
          {
            id: 2,
            listing: 0,
            name: "Spa",
            img: "/img/attraction/allAttraction/spa-and-relax.webp",
            link: "/attraction/2",
          },
          {
            id: 3,
            listing: 0,
            name: "Astrologer",
            img: "/img/attraction/allAttraction/astrology.webp",
            link: "/attraction/2",
          },
          {
            id: 4,
            listing: 0,
            name: "Education",
            img: "/img/attraction/allAttraction/graduation.webp",
            link: "/attraction/2",
            subCategory: [
              {
                title: "school",
                icon: "",
              },
              {
                title: "college",
                icon: "",
              },
              {
                title: "Hobby Classes",
                icon: "",
              },
              {
                title: "Tutorials",
                icon: "",
              },
              {
                title: "Vocational Course Training Center",
                icon: "",
              },
            ],
          },
          {
            id: 5,
            listing: 0,
            name: "Packer & Mover",
            img: "/img/attraction/allAttraction/tracking.webp",
            link: "/attraction/2",
          },
          {
            id: 6,
            listing: 0,
            name: "Wedding",
            img: "/img/attraction/allAttraction/wedding.webp",
            link: "/attraction/2",
          },
          {
            id: 7,
            listing: 0,
            name: "Hospital",
            img: "/img/attraction/allAttraction/hospital-building.webp",
            link: "/attraction/2",
          },
          {
            id: 8,
            listing: 0,
            name: "Real Estate",
            img: "/img/attraction/allAttraction/property.webp",
            link: "/attraction/2",
          },
          {
            id: 9,
            listing: 0,
            name: "AC Service",
            img: "/img/attraction/allAttraction/service.webp",
            link: "/attraction/2",
          },
          {
            id: 11,
            listing: 0,
            name: "Body Massage Centers",
            img: "/img/attraction/allAttraction/massage.webp",
            link: "/attraction/2",
          },
          {
            id: 12,
            listing: 0,
            name: "Beauty Spa",
            img: "/img/attraction/allAttraction/relax.webp",
            link: "/attraction/2",
          },
          {
            id: 13,
            listing: 0,
            name: "Car Hire",
            img: "/img/attraction/allAttraction/transport.webp",
            link: "/attraction/2",
          },
          {
            id: 14,
            listing: 0,
            name: "Caterers",
            img: "/img/attraction/allAttraction/catering.webp",
            link: "/attraction/2",
          },
          {
            id: 15,
            listing: 0,
            name: "Chartered Accountant",
            img: "/img/attraction/allAttraction/accounting.webp",
            link: "/attraction/2",
          },
          {
            id: 16,
            listing: 0,
            name: "Computer Training Institutes",
            img: "/img/attraction/allAttraction/elearning.webp",
            link: "/attraction/2",
          },
          {
            id: 17,
            listing: 0,
            name: "Courier Services",
            img: "/img/attraction/allAttraction/delivery-service.webp",
            link: "/attraction/2",
          },
          {
            id: 18,
            listing: 0,
            name: "Computer & Laptop Repair & Services",
            img: "/img/attraction/allAttraction/3d-computer.webp",
            link: "/attraction/2",
          },
          {
            id: 19,
            listing: 0,
            name: "Car Repair & Services",
            img: "/img/attraction/allAttraction/maintenance.webp",
            link: "/attraction/2",
          },
          {
            id: 20,
            listing: 0,
            name: "Dermatologists",
            img: "/img/attraction/allAttraction/dermatologist (3).webp",
            link: "/attraction/2",
          },
          {
            id: 21,
            listing: 0,
            name: "Dentists",
            img: "/img/attraction/allAttraction/dental-checkup.webp",
            link: "/attraction/2",
          },
          {
            id: 22,
            listing: 0,
            name: "Electricians",
            img: "/img/attraction/allAttraction/engineering.webp",
            link: "/attraction/2",
          },
          {
            id: 23,
            listing: 0,
            name: "Event Organizer",
            img: "/img/attraction/allAttraction/organizer.webp",
            link: "/attraction/2",
          },
          {
            id: 25,
            listing: 0,
            name: "Fabricators",
            img: "/img/attraction/allAttraction/fabric.webp",
            link: "/attraction/2",
          },
          {
            id: 26,
            listing: 0,
            name: "Furniture Repair Services",
            img: "/img/attraction/allAttraction/repair.webp",
            link: "/attraction/2",
          },
          {
            id: 28,
            listing: 0,
            name: "House keeping Services",
            img: "/img/attraction/allAttraction/janitorial-service.webp",
            link: "/attraction/2",
          },
          {
            id: 29,
            listing: 0,
            name: "Hobbies",
            img: "/img/attraction/allAttraction/mental-health.webp",
            link: "/attraction/2",
          },
          {
            id: 30,
            listing: 0,
            name: "Interior Designers",
            img: "/img/attraction/allAttraction/staircase.webp",
            link: "/attraction/2",
          },
          {
            id: 31,
            listing: 0,
            name: "Internet Website Designers",
            img: "/img/attraction/allAttraction/responsive-design.webp",
            link: "/attraction/2",
          },
          {
            id: 32,
            listing: 0,
            name: "Jewellery Showrooms",
            img: "/img/attraction/allAttraction/jewelry.webp",
            link: "/attraction/2",
          },
          {
            id: 33,
            listing: 0,
            name: "Lawyers",
            img: "/img/attraction/allAttraction/lawyer.webp",
            link: "/attraction/2",
          },
          {
            id: 34,
            listing: 0,
            name: "Transporters",
            img: "/img/attraction/allAttraction/delivery-man.webp",
            link: "/attraction/2",
          },
          {
            id: 35,
            listing: 0,
            name: "Photographers",
            img: "/img/attraction/allAttraction/photographer.webp",
            link: "/attraction/2",
          },
          {
            id: 36,
            listing: 0,
            name: "Nursing Services",
            img: "/img/attraction/allAttraction/dermatologist.webp",
            link: "/attraction/2",
          },
          {
            id: 37,
            listing: 0,
            name: "Printing & Publishing Services",
            img: "/img/attraction/allAttraction/paper.webp",
            link: "/attraction/2",
          },
          {
            id: 38,
            listing: 0,
            name: "Placement Services",
            img: "/img/attraction/allAttraction/elearning.webp",
            link: "/attraction/2",
          },
          {
            id: 39,
            listing: 0,
            name: "Pest Control Services",
            img: "/img/attraction/allAttraction/calendar.webp",
            link: "/attraction/2",
          },
          {
            id: 40,
            listing: 0,
            name: "Painting Contractors",
            img: "/img/attraction/allAttraction/paint.webp",
            link: "/attraction/2",
          },
          {
            id: 41,
            listing: 0,
            name: "Packers & Movers",
            img: "/img/attraction/allAttraction/logistic.webp",
            link: "/attraction/2",
          },
          {
            id: 42,
            listing: 0,
            name: "Scrap Dealers",
            img: "/img/attraction/allAttraction/scrap.webp",
            link: "/attraction/2",
          },
          {
            id: 43,
            listing: 0,
            name: "Scrap Buyers",
            img: "/img/attraction/allAttraction/product.webp",
            link: "/attraction/2",
          },
          {
            id: 44,
            listing: 0,
            name: "Registration Consultants",
            img: "/img/attraction/allAttraction/lawyer (1).webp",
            link: "/attraction/2",
          },
          {
            id: 45,
            listing: 0,
            name: "Security System",
            img: "/img/attraction/allAttraction/private-account.webp",
            link: "/attraction/2",
          },
          {
            id: 46,
            listing: 0,
            name: "Coaching",
            img: "/img/attraction/allAttraction/instructor.webp",
            link: "/attraction/2",
          },
          {
            id: 47,
            listing: 0,
            name: "Vocational training",
            img: "/img/attraction/allAttraction/presentation.webp",
            link: "/attraction/2",
          },
        ],
    [l, d] = useState(false),
    [m, h] = useState(""),
    [u, v] = useState(""),
    [b, f] = useState(false),
    [S, y] = useState([]);
  useEffect(() => {
    let e = setTimeout(() => v(m), 300);
    return () => clearTimeout(e);
  }, [m]);
  let k = useMemo(() => r.filter((e) => e.name.toLowerCase().includes(u.toLowerCase())), [u, r]),
    j = (e) => cityHref(loc, toSlug(e.name));
  useEffect(
    () => (
      (document.body.style.overflow = l ? "hidden" : ""),
      () => {
        document.body.style.overflow = "";
      }
    ),
    [l],
  );
  let C = (e) => {
      y(e), f(true);
    },
    N =
      "group relative flex h-full flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:ring-brand-200 sm:gap-3 sm:rounded-3xl sm:p-5",
    T = (e) => {
      var a;
      let { attraction } = e;
      return (
        <>
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-mist transition duration-300 group-hover:bg-brand-50 sm:h-16 sm:w-16">
            <span className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 blur-lg transition duration-300 group-hover:opacity-30" />
            <img
              loading="lazy"
              decoding="async"
              src={attraction.img}
              alt=""
              className="relative h-7 w-7 object-contain sm:h-9 sm:w-9"
            />
          </span>
          <span className="line-clamp-2 text-[11px] font-semibold leading-tight text-night-900 sm:text-sm">
            {attraction.name}
          </span>
          <span className="hidden text-xs text-slate-400 sm:block">
            {attraction.count ?? 1}
            {" Listings"}
          </span>
        </>
      );
    },
    D = r.slice(0, 11);
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <DotGrid className="right-0 top-0 h-64 w-1/2 [mask-image:radial-gradient(circle_at_top_right,#000,transparent_70%)]" />
      <Blob className="-left-24 bottom-0 h-72 w-72 opacity-70" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Categories"
          title="What do you"
          highlight="need today?"
          subtitle="Tap a category to see trusted businesses in your neighbourhood."
        />
        <Stagger gap={0.04} className="mt-10 grid grid-cols-4 gap-2.5 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:mt-14">
          {D.map((e, a) => (
            <StaggerItem key={e.id} variants={popIn} className={a >= 7 ? "hidden md:block" : ""}>
              {e.subCategory ? (
                <button type="button" onClick={() => C(e.subCategory)} className={`${N} w-full`}>
                  <T attraction={e} />
                </button>
              ) : (
                <Link href={j(e)} className={N}>
                  <T attraction={e} />
                </Link>
              )}
            </StaggerItem>
          ))}
          <StaggerItem variants={popIn}>
            <button
              type="button"
              onClick={() => d(true)}
              className="group relative flex h-full w-full flex-col items-center gap-2 rounded-2xl bg-brand-50 p-3 text-center ring-1 ring-brand-100 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:ring-brand-200 sm:gap-3 sm:rounded-3xl sm:p-5"
            >
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white transition duration-300 sm:h-16 sm:w-16">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/attraction/viewall.webp"
                  alt=""
                  className="h-7 w-7 object-contain transition duration-300 group-hover:scale-110 sm:h-9 sm:w-9"
                />
              </span>
              <span className="text-[11px] font-semibold leading-tight text-brand-700 sm:text-sm">View All</span>
              <span className="hidden text-xs text-slate-400 sm:block">{r.length}+ Categories</span>
            </button>
          </StaggerItem>
        </Stagger>
      </div>
      {b && <B categories={S} onClose={() => f(false)} />}
      <AnimatePresence>
        {l && (
          <>
            <motion.div
              key={"overlay"}
              className="fixed inset-0 z-[90] bg-night-950/60 backdrop-blur-sm"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => d(false)}
            />
            <Cw
              key={"drawer"}
              filteredAttractions={k}
              searchTerm={m}
              setSearchTerm={h}
              onClose={() => d(false)}
              getLocationHref={j}
              handlePopupOpen={C}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Attraction;
