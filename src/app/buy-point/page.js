"use client";
import React, { useState } from "react";
import BusinessDirectory from "../Component/BuinessDirectory";
import { FormShell } from "../ui/blocks";

const methods = ["Paytm", "PayPal", "Stripe", "RazorPay"];

export default function Page() {
  const [points, setPoints] = useState("");
  const [method, setMethod] = useState("");

  return (
    <>
      <FormShell badge="Buy points" title="Hi, Rn53 Themes!" subtitle="Top up points to promote your listings.">
        <div className="space-y-5">
          <div className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700 ring-1 ring-emerald-200">
            <span>Your existing points</span>
            <span className="font-display text-2xl font-extrabold">60</span>
          </div>
          <p className="text-xs text-slate-500">Cost of 1 point = $1</p>

          <div>
            <label htmlFor="points" className="field-label">Please Enter Points</label>
            <input id="points" type="number" min="1" value={points} onChange={(e) => setPoints(e.target.value)} className="field" />
            {points > 0 && <p className="mt-2 text-sm text-slate-500">You’ll pay <b className="text-night-900">${points}</b></p>}
          </div>

          <fieldset>
            <legend className="field-label">Payment Mode</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {methods.map((m) => (
                <label
                  key={m}
                  className={`cursor-pointer rounded-2xl border-2 px-3 py-3 text-center text-sm font-semibold transition ${
                    method === m ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 text-slate-600 hover:border-brand-200"
                  }`}
                >
                  <input type="radio" name="payment" value={m} checked={method === m} onChange={() => setMethod(m)} className="sr-only" />
                  {m}
                </label>
              ))}
            </div>
          </fieldset>

          <button type="button" className="btn-primary w-full py-3.5 text-base">Pay Now</button>
        </div>
      </FormShell>
      <BusinessDirectory />
    </>
  );
}
