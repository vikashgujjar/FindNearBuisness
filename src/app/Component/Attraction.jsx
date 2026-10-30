"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AttractionPop from "./AttractionPop";
import AttractionPopSub from "./AttractionPopSub";
import { Blob, DotGrid, SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem, popIn } from "../ui/motion";
import { cityHref, toSlug } from "../context/LocationContext";


const Attractions = ({ loc }) => {
  const attractions = [
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
  ];

  const [viewMore, setViewMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupCategories, setPopupCategories] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const filteredAttractions = useMemo(
    () => attractions.filter((item) => item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())),
    [debouncedSearchTerm]
  );

  const getLocationHref = (cate) => cityHref(loc, toSlug(cate));

  useEffect(() => {
    document.body.style.overflow = viewMore ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [viewMore]);

  const handlePopupOpen = (subCategory) => {
    setPopupCategories(subCategory);
    setPopupVisible(true);
  };

  const tileClass =
    "group relative flex h-full flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:ring-brand-200 sm:gap-3 sm:rounded-3xl sm:p-5";

  const TileBody = ({ attraction }) => (
    <>
      <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-mist transition duration-300 group-hover:bg-brand-50 sm:h-16 sm:w-16">
        <span className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 blur-lg transition duration-300 group-hover:opacity-30" />
        <img src={attraction.img} alt="" className="relative h-7 w-7 object-contain sm:h-9 sm:w-9" />
      </span>
      <span className="line-clamp-2 text-[11px] font-semibold leading-tight text-night-900 sm:text-sm">{attraction.name}</span>
      <span className="hidden text-xs text-slate-400 sm:block">1 Listings</span>
    </>
  );

  // Mobile shows 7 tiles + "View all"; desktop shows 11 + "View all".
  const visible = attractions.slice(0, 11);

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
          {visible.map((attraction, index) => (
            <StaggerItem key={attraction.id} variants={popIn} className={index >= 7 ? "hidden md:block" : ""}>
              {attraction.subCategory ? (
                <button type="button" onClick={() => handlePopupOpen(attraction.subCategory)} className={`${tileClass} w-full`}>
                  <TileBody attraction={attraction} />
                </button>
              ) : (
                <Link href={getLocationHref(attraction.name)} className={tileClass}>
                  <TileBody attraction={attraction} />
                </Link>
              )}
            </StaggerItem>
          ))}

          <StaggerItem variants={popIn}>
            <button
              type="button"
              onClick={() => setViewMore(true)}
              className="group relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-night-900 p-3 text-center text-white transition duration-300 hover:-translate-y-1 hover:shadow-glow sm:gap-3 sm:rounded-3xl sm:p-5"
            >
              <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-magenta-500/50 blur-2xl" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-lg font-bold sm:h-16 sm:w-16 sm:text-xl">
                {attractions.length}+
              </span>
              <span className="relative text-[11px] font-semibold sm:text-sm">View All</span>
              <span className="relative hidden text-xs text-slate-400 sm:block">Categories</span>
            </button>
          </StaggerItem>
        </Stagger>
      </div>

      {popupVisible && <AttractionPopSub categories={popupCategories} onClose={() => setPopupVisible(false)} />}

      <AnimatePresence>
        {viewMore && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[90] bg-night-950/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setViewMore(false)}
            />
            <AttractionPop
              key="drawer"
              filteredAttractions={filteredAttractions}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onClose={() => setViewMore(false)}
              getLocationHref={getLocationHref}
              handlePopupOpen={handlePopupOpen}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Attractions;
