"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWandMagicSparkles, FaClone } from "react-icons/fa6";
import { FormShell } from "../ui/page";

const existing = [
  ["LIST395", "test"], ["LIST394", "dfzhfhd"], ["LIST393", "Iei"], ["LIST392", "phoenix mall"], ["LIST391", "Ocha Thai Cuisine"],
  ["LIST389", "Core real estates"], ["LIST384", "Gill Automobiles and Services"], ["LIST381", "Titan Wedding Hall"], ["LIST380", "Taj Hotels"],
  ["LIST378", "ccc"], ["LIST375", "Hello"], ["LIST268", "Premium gardens"], ["LIST267", "Beach luxury villa gardens"], ["LIST266", "GOS Villas"],
  ["LIST247", "Super bike showroom"], ["LIST238", "Benz cars showroom"], ["LIST207", "Smith Luxury Villas"],
  ["LIST163", "BizBookBusiness Directory Template"], ["LIST130", "Tour and Travel html Template"], ["LIST129", "Smart Digital Products"],
];

export default function NewListing() {
  const [duplicate, setDuplicate] = useState(false);
  const [selectedListing, setSelectedListing] = useState("");

  return (
    <FormShell
      badge="Create new"
      title="Add New Listing"
      subtitle="Start fresh, or copy one of your existing listings."
      footer={<Link href="/dashboard" className="hover:text-white">Go to user dashboard →</Link>}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href="/addnewlisting" className="group flex flex-col gap-3 rounded-3xl bg-brand-gradient p-5 text-white shadow-glow transition hover:-translate-y-1">
          <FaWandMagicSparkles className="text-2xl" />
          <span className="font-bold">Create listing from scratch</span>
          <span className="text-xs text-white/80">Step-by-step wizard</span>
        </Link>
        <button
          type="button"
          onClick={() => setDuplicate((v) => !v)}
          aria-expanded={duplicate}
          className={`flex flex-col gap-3 rounded-3xl p-5 text-left transition hover:-translate-y-1 ${duplicate ? "bg-night-900 text-white" : "bg-mist text-night-900 ring-1 ring-slate-200"}`}
        >
          <FaClone className="text-2xl text-cyan-500" />
          <span className="font-bold">Create duplicate listing</span>
          <span className={`text-xs ${duplicate ? "text-slate-400" : "text-slate-500"}`}>Copy an existing listing</span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {duplicate && (
          <motion.form
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4 pt-6">
              <div>
                <label htmlFor="listing_id" className="field-label">Listing to copy</label>
                <select name="listing_id" id="listing_id" className="field" value={selectedListing} onChange={(e) => setSelectedListing(e.target.value)} required>
                  <option value="" disabled>Listing Name</option>
                  {existing.map(([id, name]) => <option key={id} value={id}>{name}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="new_listing_name" className="field-label">New Listing Name *</label>
                <input id="new_listing_name" type="text" placeholder="New Listing Name *" className="field" required />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 text-base">Create Now</button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </FormShell>
  );
}
