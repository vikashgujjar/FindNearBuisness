"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import BusinessDirectory from "../Component/BuinessDirectory";
import { FormShell } from "../ui/blocks";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <FormShell
        badge="Change my plan"
        title="Hi Rn53,"
        footer={<Link href="/dashboard" className="hover:text-white">Go to user dashboard →</Link>}
      >
        <div className="mb-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-mist p-4">
            <p className="text-[11px] font-bold uppercase text-slate-400">Current plan</p>
            <p className="font-bold text-night-900">Premium Plus</p>
          </div>
          <div className="rounded-2xl bg-mist p-4">
            <p className="text-[11px] font-bold uppercase text-slate-400">Expires</p>
            <p className="font-bold text-night-900">07, Apr 2034</p>
          </div>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/payment");
          }}
        >
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="plan" className="field-label">Choose your plan</label>
              <Link href="/mybusiness" className="mb-1.5 text-xs font-semibold text-brand-600 hover:underline">Plan details</Link>
            </div>
            <select id="plan" className="field" required defaultValue="">
              <option value="">Choose your plan</option>
              <option value="4">Premium Plus - $20/year</option>
            </select>
          </div>
          <button name="plan_type_submit" className="btn-primary w-full py-3.5 text-base">Change</button>
        </form>
      </FormShell>
      <BusinessDirectory />
    </>
  );
}
