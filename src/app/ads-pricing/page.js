"use client";
import React from "react";
import Link from "next/link";
import { FormShell } from "../ui/page";
import { Stagger, StaggerItem } from "../ui/motion";

const ads = [
  { id: 1, name: "Home page Bottom", size: "728 X 90 px", cost: "70$" },
  { id: 2, name: "All listing page Top", size: "728 X 90 px", cost: "50$" },
  { id: 3, name: "All listing page Bottom", size: "728 X 90 px", cost: "20$" },
  { id: 4, name: "All listing page Left", size: "300 X 300 px", cost: "70$" },
  { id: 5, name: "Listing detail page Right", size: "300 X 300 px", cost: "20$" },
  { id: 6, name: "Listing detail page Bottom", size: "728 X 90 px", cost: "40$" },
];

const AdsPricing = () => {
  return (
    <FormShell badge="Ad details" title="Ads pricing" subtitle="Pick a placement and start promoting your business." width="max-w-5xl">
      <Stagger gap={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad) => (
          <StaggerItem key={ad.id} className="flex flex-col overflow-hidden rounded-3xl bg-mist ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-card-hover">
            <img src="/img/dashboard/ads-pricing.webp" alt="ads preview" className="aspect-video w-full object-cover" />
            <div className="flex flex-1 flex-col p-5">
              <span className="font-display text-sm font-extrabold text-slate-300">{String(ad.id).padStart(2, "0")}</span>
              <h2 className="font-bold text-night-900">{ad.name}</h2>
              <p className="mt-1 text-xs text-slate-500">Size: {ad.size}</p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <p className="font-display text-2xl font-extrabold text-night-900">
                  {ad.cost}
                  <span className="text-xs font-semibold text-slate-400"> /day</span>
                </p>
                <Link href="/ads-form" className="btn-primary btn-sm">Post your Ads</Link>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </FormShell>
  );
};

export default AdsPricing;
