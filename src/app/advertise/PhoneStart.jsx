"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

// "+91 | mobile number | Get Started" pill used by the advertise hero and footer CTA.
export default function PhoneStart({ dark = false }) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`flex flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:items-center sm:rounded-full ${dark ? "glass" : "bg-white shadow-card ring-1 ring-slate-100"}`}
    >
      <label className={`flex flex-1 items-center gap-2 rounded-full px-4 ${dark ? "bg-white/5" : "bg-mist"}`}>
        <span className={`border-r pr-3 text-sm font-bold ${dark ? "border-white/15 text-white" : "border-slate-200 text-night-900"}`}>🇮🇳 +91</span>
        <input
          aria-label="Enter Mobile Number"
          inputMode="numeric"
          pattern="[0-9]*"
          name="mobile"
          autoComplete="tel"
          maxLength={10}
          required
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/\D/g, ""))}
          placeholder="Enter mobile number"
          className={`min-w-0 flex-1 bg-transparent py-3 text-base outline-none ${dark ? "text-white placeholder:text-slate-400" : "text-night-900 placeholder:text-slate-400"}`}
        />
      </label>
      <button type="submit" className="btn-primary group py-3.5 sm:px-6">
        Get Started <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
      </button>
    </form>
  );
}
