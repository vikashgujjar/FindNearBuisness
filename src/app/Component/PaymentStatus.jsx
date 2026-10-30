"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaCreditCard } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard } from "../ui/page";

const details = [
  ["Start Date", "26 Mar 2021"],
  ["Expiry Date", "26 Mar 2031"],
  ["Duration", "10 years"],
  ["Remaining Days", "3638"],
  ["Check Amount", "$20"],
];

const billing = [
  { placeholder: "Full Name *", defaultValue: "Rn53 Themes", readOnly: true },
  { name: "user_country", placeholder: "Country", defaultValue: "Australia" },
  { name: "user_state", placeholder: "State", defaultValue: "Sydney" },
  { name: "user_city", placeholder: "City *", defaultValue: "Sydney", required: true },
  { name: "user_address", placeholder: "Village & Street Name", defaultValue: "No 27, Pointing street, Sydney, Australia", wide: true },
  { name: "user_zip_code", placeholder: "Postcode/ZIP", defaultValue: "65448811" },
  { name: "user_contact_name", placeholder: "Contact Person *", defaultValue: "John Smith", required: true },
  { name: "user_contact_mobile", placeholder: "Contact Number", defaultValue: "2211446688" },
  { name: "user_contact_email", placeholder: "Contact Email *", defaultValue: "rn53themes@gmail.com", required: true },
];

export default function PaymentStatus() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CommonDashLayout>
      <DashCard badge="Payment" title="Payment Status" action={<Link href="/plan-change-form" className="btn-ghost btn-sm">Change My Plan</Link>}>
        <div className="relative overflow-hidden rounded-3xl bg-night-900 p-6 text-white">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-magenta-500/40 blur-2xl" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <img src="/img/dashboard/dashbordleft.webp" alt="" className="h-20 w-20 rounded-2xl object-cover ring-2 ring-white/20" />
            <div className="flex-1">
              <p className="text-sm text-slate-400">Rn53 Themes</p>
              <h2 className="text-2xl font-extrabold">Premium Plus</h2>
              <span className="chip mt-2 bg-pin-400 text-night-900">Payment Pending</span>
            </div>
          </div>
          <dl className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {details.map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{k}</dt>
                <dd className="mt-1 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h3 className="mb-3 mt-8 font-bold text-night-900">Select your payment option</h3>
        <div className={`overflow-hidden rounded-3xl ring-1 transition ${isChecked ? "ring-brand-300" : "ring-slate-200"}`}>
          <button type="button" onClick={() => setIsChecked((v) => !v)} aria-expanded={isChecked} className="flex w-full items-center gap-3 p-5 text-left font-semibold text-night-900">
            <span className={`grid h-5 w-5 place-items-center rounded-full border-2 ${isChecked ? "border-brand-500" : "border-slate-300"}`}>
              {isChecked && <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}
            </span>
            <FaCreditCard className="text-brand-500" /> Razor Pay Payment Gateway
          </button>

          <AnimatePresence initial={false}>
            {isChecked && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="space-y-5 border-t border-slate-100 p-5">
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><FaStar className="text-pin-500" /> You can pay with your credit card if you don’t have a Razor Pay account.</li>
                    <li className="flex items-center gap-2"><FaStar className="text-pin-500" /> What is Razor Pay?</li>
                  </ul>
                  <form name="payment_razor_pay_form" id="payment_razor_pay_form" method="post" action="">
                    <h4 className="mb-3 font-bold text-night-900">Billing Details</h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {billing.map((f) => (
                        <input
                          key={f.placeholder}
                          type="text"
                          name={f.name}
                          placeholder={f.placeholder}
                          aria-label={f.placeholder}
                          defaultValue={f.defaultValue}
                          readOnly={f.readOnly}
                          required={f.required}
                          className={`field ${f.wide ? "sm:col-span-2" : ""}`}
                        />
                      ))}
                    </div>
                    <button type="submit" name="payment_razor_pay_form_submit" className="btn-primary mt-5 px-7 py-3">Start Payment</button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DashCard>
    </CommonDashLayout>
  );
}
