"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AttractionPop from "./AttractionPop";
import { useRouter } from "next/navigation"; // for App Router (Next.js 13+)

import AttractionPopSub from "./AttractionPopSub";

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

  // ✅ Debounce logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms debounce

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // ✅ Filtered list (cached)
  const filteredAttractions = useMemo(() => {
    return attractions.filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm, attractions]);

  const getLocationHref = (cate) => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${location?.replace(/\s+/g, "") || "default-location"}/${cate
      .toLowerCase()
      .split(" ")
      .join("-")}`;
  };

  // ✅ Lock scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = viewMore ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [viewMore]);

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupCategories, setPopupCategories] = useState([]);


  const handlePopupOpen = (subCategory) => {
    setPopupCategories(subCategory);
    setPopupVisible(true);
  };

  return (
    <>
      <div className="container mx-auto px-5 md:px-8 xl:px-32 my-9">
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {attractions.slice(0, 7).map((attraction) =>
            attraction.subCategory ? (
              // 👉 For attractions with subCategory - use onClick
              <div
                key={attraction.id}
                onClick={() => handlePopupOpen(attraction.subCategory)}
                className="border-b-2 hover:border-b-[#009dff] rounded-lg duration-200 text-xl shadow-es h-full cursor-pointer"
              >
                <div className="flex flex-col gap-2 md:flex-row items-center md:gap-4 bg-white shadow-md rounded-lg h-full p-2 md:p-4 lg:p-8 hover:shadow-lg">
                  <img
                    src={attraction.img}
                    alt={attraction.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div className="text-center md:text-left">
                    <h5 className="font-semibold leading-3 text-[10px] md:text-sm lg:text-lg">
                      {attraction.name}
                    </h5>
                    <span className="hidden md:block text-gray-500 text-xs">
                      1 Listings
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              // 👉 For attractions without subCategory - use Link
              <Link key={attraction.id} href={getLocationHref(attraction.name)}>
                <div className="border-b-2 hover:border-b-[#009dff] rounded-lg duration-200 text-xl shadow-es h-full cursor-pointer">
                  <div className="flex flex-col gap-2 md:flex-row items-center md:gap-4 bg-white shadow-md rounded-lg h-full p-2 md:p-4 lg:p-8 hover:shadow-lg">
                    <img
                      src={attraction.img}
                      alt={attraction.name}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                    <div className="text-center md:text-left">
                      <h5 className="font-semibold leading-3 text-[10px] md:text-sm lg:text-lg">
                        {attraction.name}
                      </h5>
                      <span className="hidden md:block text-gray-500 text-xs">
                        1 Listings
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}

          {/* View All Card */}
          {attractions.length > 8 && (
            <div
            onClick={() => setViewMore(true)}
              className="border-b-2 hover:border-b-[#009dff] rounded-lg duration-200 text-xl cursor-pointer h-full"
            >
              <div className="flex flex-col gap-2 md:flex-row items-center md:gap-4 bg-white shadow-md rounded-lg h-full p-2 md:p-4 lg:p-8 cursor-pointer hover:shadow-lg">
                <img
                  src="/img/attraction/viewall.webp"
                  alt="View All"
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div className="text-center md:text-left">
                  <h5 className="font-semibold leading-3 text-[10px] md:text-sm lg:text-lg">
                    View All
                  </h5>
                  <span className="hidden md:block text-gray-500 text-xs">
                    Categories
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {popupVisible && (
        <AttractionPopSub
          categories={popupCategories}
          onClose={() => setPopupVisible(false)}
        />
      )}

      {viewMore && (
        <>
          <div
            onClick={() => setViewMore(false)}
            className="fixed z-[998] inset-0 bg-black/40 backdrop-blur-sm"
          />
          <AttractionPop
            filteredAttractions={filteredAttractions}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onClose={() => setViewMore(false)}
            getLocationHref={getLocationHref}
            handlePopupOpen={handlePopupOpen}
          />
        </>
      )}
      
    </>
  );
};

export default Attractions;
