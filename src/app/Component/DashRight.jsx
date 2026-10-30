"use client";

import React from "react";
import Link from "next/link";
import { FaRocket, FaUsers, FaCoins } from "react-icons/fa6";
import { CountUp, Stagger, StaggerItem } from "../ui/motion";

const payment = [
  ["Plan Name", "Premium Plus"],
  ["Start Date", "26, Mar 2021"],
  ["Expiry Date", "26, Mar 2031"],
  ["Duration", "10 years"],
  ["Remaining Days", "3638"],
  ["Checkout Cost", "$20"],
];

const report = [
  ["ENQUIRY", "00", "Leads"],
  ["VIEWS", "02", "Listings"],
  ["VIEWS", "00", "Events"],
  ["VIEWS", "01", "Blogs"],
  ["VIEWS", "00", "Products"],
  ["MESSAGES", "00", "Inbox"],
];

export default function DashRight() {
  return (
    <Stagger gap={0.08} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
      <StaggerItem className="relative overflow-hidden rounded-3xl bg-night-900 p-6 text-white">
        <img src="/img/dashboard/dashboardRight1.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-magenta-500/50 blur-2xl" />
        <div className="relative">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient"><FaRocket /></span>
          <h3 className="mt-4 text-lg font-bold">Promote my business</h3>
          <p className="mt-1 text-sm text-slate-300">Your listing shows on top of category pages.</p>
          <Link href="/start-now" className="btn-primary btn-sm mt-4">Start now</Link>
        </div>
      </StaggerItem>

      <StaggerItem className="panel overflow-hidden">
        <div className="relative bg-gradient-to-br from-pin-400 to-magenta-500 p-6 text-white">
          <FaCoins className="absolute right-5 top-5 text-4xl text-white/30" />
          <p className="text-sm font-semibold text-white/80">Your Points</p>
          <p className="font-display text-5xl font-extrabold"><CountUp to={60} duration={1.2} /></p>
        </div>
        <div className="space-y-3 p-5 text-sm text-slate-600">
          <h6 className="font-bold text-night-900">Earn more credit points</h6>
          <p>Use these points to promote your listing.</p>
          <Link href="/buy-point" className="btn-dark btn-sm">Buy points</Link>
        </div>
      </StaggerItem>

      <StaggerItem className="panel p-5">
        <div className="mb-4 flex items-center justify-between">
          <h6 className="font-bold text-night-900">Payment Information</h6>
          <span className="chip bg-pin-400/20 text-amber-600">PENDING</span>
        </div>
        <dl className="divide-y divide-slate-100 text-sm">
          {payment.map(([k, v]) => (
            <div key={k} className="flex justify-between py-2">
              <dt className="text-slate-500">{k}</dt>
              <dd className="font-semibold text-night-900">{v}</dd>
            </div>
          ))}
        </dl>
        <Link href="/payment" className="btn-primary mt-4 w-full">Pay Now</Link>
      </StaggerItem>

      <StaggerItem className="panel p-5">
        <h6 className="mb-4 font-bold text-night-900">Last Week Report</h6>
        <div className="grid grid-cols-3 gap-2">
          {report.map(([label, value, sub], idx) => (
            <div key={idx} className="rounded-2xl bg-mist p-3 text-center">
              <span className="block text-[9px] font-bold tracking-wider text-slate-400">{label}</span>
              <span className="block font-display text-xl font-extrabold text-night-900">{value}</span>
              <span className="block text-[11px] text-slate-500">{sub}</span>
            </div>
          ))}
        </div>
      </StaggerItem>

      <StaggerItem className="relative overflow-hidden rounded-3xl bg-brand-gradient p-6 text-white sm:col-span-2 xl:col-span-1">
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border-[24px] border-white/10" />
        <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white/20"><FaUsers /></span>
        <h3 className="relative mt-4 text-lg font-bold">Community members</h3>
        <p className="relative mt-1 text-sm text-white/80">Follow your favorite business users and grow your online business now.</p>
        <Link href="/community" className="relative mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-night-900">Community</Link>
      </StaggerItem>
    </Stagger>
  );
}
