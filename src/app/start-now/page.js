"use client";
import React from "react";
import BusinessDirectory from "../Component/BuinessDirectory";
import { FormShell } from "../ui/page";

export default function page() {
  return (
    <>
      <FormShell badge="Start promotions" title="Start promotions" subtitle="Your listing shows on top of category pages for the dates you choose.">
        <form className="space-y-5">
          <div>
            <label htmlFor="listing" className="field-label">Listing</label>
            <select name="listing" id="listing" className="field" defaultValue="">
              <option value="" disabled>Choose Listing</option>
              <option value="test">Test</option>
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="sp-start" className="field-label">Start date</label>
              <input id="sp-start" type="date" className="field" />
            </div>
            <div>
              <label htmlFor="sp-end" className="field-label">End date</label>
              <input id="sp-end" type="date" className="field" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-pin-400/15 p-4">
              <p className="text-[11px] font-bold uppercase text-slate-500">Total Days</p>
              <p className="font-display text-3xl font-extrabold text-night-900">0</p>
            </div>
            <div className="rounded-2xl bg-pin-400/15 p-4">
              <p className="text-[11px] font-bold uppercase text-slate-500">Cost / Day</p>
              <p className="font-display text-3xl font-extrabold text-night-900">0</p>
            </div>
            <div className="rounded-2xl bg-brand-gradient p-4 text-white">
              <p className="text-[11px] font-bold uppercase text-white/80">Total Points</p>
              <p className="font-display text-3xl font-extrabold">0</p>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full py-3.5 text-base">Submit</button>
        </form>
      </FormShell>
      <BusinessDirectory />
    </>
  );
}
