"use client";

import Link from "next/link";
import { FaStar, FaArrowRight } from "react-icons/fa6";
function Servicelist(props) {
  let { item, href, big = false } = props;
  return (
    <Link
      href={href}
      className={`group relative block h-full overflow-hidden rounded-3xl bg-night-900 ${big ? "min-h-[260px] sm:min-h-[340px]" : "min-h-[170px] sm:min-h-[200px]"}`}
    >
      <img
        loading="lazy"
        decoding="async"
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/30 to-transparent" />
      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-night-900">
        <FaStar className="text-pin-500" /> {item.rating.toFixed(1)}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <h3 className={`font-bold capitalize ${big ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}>
          {item.title}
        </h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-300 sm:text-sm">
          <span className="whitespace-nowrap">
            {item.reviews}
            {" Reviews"}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-400 xs:block" />
          <span className="whitespace-nowrap">
            {item.listings}
            {" Listings"}
          </span>
          <span className="ml-auto hidden h-8 w-8 translate-x-2 place-items-center rounded-full bg-white text-night-900 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:grid">
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
}
export default Servicelist;
