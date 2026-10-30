"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaMagnifyingGlass, FaXmark, FaArrowRight } from "react-icons/fa6";

export default function AttractionPopSub({ categories = [], onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const popupRef = useRef();

  const filtered = categories.filter((cat) => cat.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) onClose();
    };
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-night-950/60 backdrop-blur-sm sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        ref={popupRef}
        role="dialog"
        aria-modal="true"
        aria-label="Sub categories"
        className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white p-6 shadow-card-hover sm:rounded-3xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-night-900">Choose a sub-category</h2>
          <button onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full bg-mist text-night-900">
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
          />
        </label>

        <ul className="mt-4 space-y-2">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <li
                key={index}
                className="group flex cursor-pointer items-center justify-between rounded-2xl bg-mist px-4 py-3 font-medium capitalize text-night-900 transition hover:bg-brand-50 hover:text-brand-600"
              >
                <span>
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.title}
                </span>
                <FaArrowRight className="text-xs opacity-0 transition group-hover:opacity-100" />
              </li>
            ))
          ) : (
            <li className="py-6 text-center text-slate-400">No categories found.</li>
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
}
