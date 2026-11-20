"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useFormPost } from "@/app/lib/api";
function PhoneStart(props) {
  let { dark = false } = props,
    [s, l] = useState(""),
    { status, onSubmit } = useFormPost("/enquiries", (e) => ({
      type: "advertise",
      name: "Advertise lead",
      phone: `+91 ${e.mobile}`,
      message: "Wants to get started with advertising (call back requested).",
    }));
  return (
    <>
      <form
        onSubmit={(e) => onSubmit(e).then(() => l(""))}
        className={`flex flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:items-center sm:rounded-full ${dark ? "glass" : "bg-white shadow-card ring-1 ring-slate-100"}`}
      >
        <label className={`flex flex-1 items-center gap-2 rounded-full px-4 ${dark ? "bg-white/5" : "bg-mist"}`}>
          <span
            className={`border-r pr-3 text-sm font-bold ${dark ? "border-white/15 text-white" : "border-slate-200 text-night-900"}`}
          >
            🇮🇳 +91
          </span>
          <input
            aria-label="Enter Mobile Number"
            inputMode="numeric"
            pattern="[0-9]*"
            name="mobile"
            autoComplete="tel"
            maxLength={10}
            required
            value={s}
            onChange={(e) => l(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter mobile number"
            className={`min-w-0 flex-1 bg-transparent py-3 text-base outline-none ${dark ? "text-white placeholder:text-slate-400" : "text-night-900 placeholder:text-slate-400"}`}
          />
        </label>
        <button type="submit" className="btn-primary group py-3.5 sm:px-6">
          {status?.busy ? "Sending…" : "Get Started"}{" "}
          <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
        </button>
      </form>
      {status?.ok && (
        <p className={`mt-2 text-sm font-semibold ${dark ? "text-emerald-300" : "text-emerald-600"}`} role="status">
          Thanks! Our team will call you shortly.
        </p>
      )}
      {status?.error && (
        <p className={`mt-2 text-sm font-semibold ${dark ? "text-rose-300" : "text-rose-600"}`} role="alert">
          {status.error}
        </p>
      )}
    </>
  );
}
export { PhoneStart };
