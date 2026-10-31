"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FormShell } from "../ui/blocks";

const positions = [
  { value: "1", label: "Home page Bottom", price: 70 },
  { value: "2", label: "All listing page Top", price: 50 },
  { value: "3", label: "All listing page Bottom", price: 20 },
  { value: "4", label: "All listing page Left", price: 70 },
  { value: "5", label: "Listing detail page Right", price: 20 },
  { value: "6", label: "Listing detail page Bottom", price: 40 },
];

const AdsForm = () => {
  const [adPosition, setAdPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adLink, setAdLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Live cost preview from the chosen position and dates.
  const price = positions.find((p) => p.value === adPosition)?.price || 0;
  const days = startDate && endDate ? Math.max(0, Math.round((new Date(endDate) - new Date(startDate)) / 86400000) + 1) : 0;

  return (
    <FormShell
      badge="Create new Ads"
      title="Submit Your Ads"
      footer={<Link href="/dashboard" className="hover:text-white">Go to User Dashboard →</Link>}
    >
      <form name="create_ads_form" id="create_ads_form" onSubmit={handleSubmit} encType="multipart/form-data" noValidate className="space-y-5">
        <input type="hidden" value={days} name="ad_total_days" />
        <input type="hidden" value={price} name="ad_cost_per_day" />
        <input type="hidden" value={days * price} name="ad_total_cost" />

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="adposi" className="field-label">Choose Ads Position *</label>
            <Link href="/ads-pricing" className="mb-1.5 text-xs font-semibold text-brand-600 hover:underline">Pricing details</Link>
          </div>
          <select name="all_ads_price_id" required className="field" id="adposi" value={adPosition} onChange={(e) => setAdPosition(e.target.value)}>
            <option value="">Select Ads Position</option>
            {positions.map((p) => (
              <option key={p.value} value={p.value}>{p.label} ({p.price}$ /per day)</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="ad_start_date" className="field-label">Ad Start Date</label>
            <input type="date" name="ad_start_date" id="ad_start_date" className="field" required value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="ad_end_date" className="field-label">Ad End Date</label>
            <input type="date" name="ad_end_date" id="ad_end_date" className="field" required value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-2xl bg-mist p-4 text-center">
          <div><p className="text-[11px] font-bold uppercase text-slate-400">Days</p><p className="font-display text-xl font-extrabold">{days}</p></div>
          <div><p className="text-[11px] font-bold uppercase text-slate-400">Per day</p><p className="font-display text-xl font-extrabold">${price}</p></div>
          <div><p className="text-[11px] font-bold uppercase text-slate-400">Total</p><p className="font-display text-xl font-extrabold text-gradient">${days * price}</p></div>
        </div>

        <div>
          <label htmlFor="ad_enquiry_photo" className="field-label">Choose Ad Image</label>
          <input type="file" name="ad_enquiry_photo" id="ad_enquiry_photo" className="field file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand-600" required />
        </div>

        <div>
          <label htmlFor="ad_link" className="field-label">Advertisement External Link</label>
          <textarea id="ad_link" name="ad_link" className="field" placeholder="Enter the external link for the advertisement" required value={adLink} onChange={(e) => setAdLink(e.target.value)} />
        </div>

        <button type="submit" name="create_ad_submit" className="btn-primary w-full py-3.5 text-base">Publish This Ad</button>

        <p className="rounded-2xl border-l-4 border-pin-500 bg-pin-400/10 p-4 text-sm text-slate-600">
          <b>Notes:</b> Once you submit your Ad, the Admin or support team will contact you shortly.
        </p>
      </form>
    </FormShell>
  );
};

export default AdsForm;
