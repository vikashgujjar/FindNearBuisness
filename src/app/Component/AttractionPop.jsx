"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

const AttractionPop = ({ filteredAttractions, onClose, searchTerm, setSearchTerm, getLocationHref, handlePopupOpen }) => {
  const itemClass =
    "flex items-center gap-3 rounded-2xl bg-mist p-3 text-left transition hover:bg-brand-50 hover:ring-1 hover:ring-brand-200";

  const Body = ({ item }) => (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white">
        <img src={item.img} alt="" className="h-7 w-7 object-contain" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight text-night-900">{item.name}</span>
        <span className="text-xs text-slate-400">1 Listings</span>
      </span>
    </>
  );

  return (
    <motion.aside
      className="fixed inset-y-0 right-0 z-[95] flex w-full max-w-2xl flex-col bg-white shadow-card-hover"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 34 }}
      role="dialog"
      aria-modal="true"
      aria-label="All categories"
    >
      <div className="border-b border-slate-100 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-night-900 sm:text-2xl">All Categories</h2>
          <button onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full bg-mist text-night-900 transition hover:bg-brand-50">
            <FaXmark />
          </button>
        </div>
        <label className="mt-4 flex items-center gap-3 rounded-full border border-slate-200 bg-mist px-4 focus-within:border-brand-500 focus-within:bg-white">
          <FaMagnifyingGlass className="text-slate-400" />
          <input
            type="text"
            placeholder="Search category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent py-3 text-sm outline-none"
            autoFocus
          />
        </label>
      </div>

      <div className="grid flex-1 auto-rows-min grid-cols-1 gap-2.5 overflow-y-auto p-5 xs:grid-cols-2 sm:p-6">
        {filteredAttractions.length > 0 ? (
          filteredAttractions.map((item) =>
            item.subCategory ? (
              <button key={item.id} onClick={() => handlePopupOpen(item.subCategory)} className={itemClass}>
                <Body item={item} />
              </button>
            ) : (
              <Link key={item.id} href={getLocationHref(item.name)} className={itemClass}>
                <Body item={item} />
              </Link>
            )
          )
        ) : (
          <p className="col-span-full py-10 text-center text-slate-400">No categories found.</p>
        )}
      </div>
    </motion.aside>
  );
};

export default AttractionPop;
