"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaArrowTrendUp, FaPhoneVolume, FaTrophy } from "react-icons/fa6";
import { Glow, MapGrid, Wave } from "../ui/decor";
import { CountUp, Stagger, StaggerItem } from "../ui/motion";
import PhoneStart from "./PhoneStart";

const growBenefits = ["Rank Ahead of Your Competition", "Find Ready to Buy Customers Instantly", "Track Leads & Competition Trends"];
const bars = [28, 40, 34, 52, 61, 74, 92];

// Animated "your growth" dashboard (replaces the external stock image).
function GrowthVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <motion.div
        className="glass rounded-[2rem] p-6 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Monthly leads</p>
            <p className="font-display text-4xl font-extrabold text-white"><CountUp to={1284} /></p>
          </div>
          <span className="chip bg-emerald-400/15 text-emerald-300"><FaArrowTrendUp /> +38%</span>
        </div>
        <div className="mt-6 flex h-40 items-end gap-2.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className={`flex-1 rounded-t-xl ${i === bars.length - 1 ? "bg-brand-gradient" : "bg-white/15"}`}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 120, damping: 16 }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-slate-500">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <span key={d}>{d}</span>)}
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-3 -top-6 flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-2xl sm:-left-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1 }}
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-pin-400 text-night-900"><FaTrophy /></span>
        <div>
          <p className="text-[10px] font-bold uppercase text-slate-400">Search rank</p>
          <p className="font-display font-extrabold text-night-900">#1 in your area</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-2xl sm:-right-8"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white">
          <span className="absolute inset-0 animate-ping-slow rounded-xl bg-brand-500/40" />
          <FaPhoneVolume />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase text-slate-400">New enquiry</p>
          <p className="text-sm font-bold text-night-900">Customer is calling…</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AdvertiseHero() {
  return (
    <section className="relative overflow-hidden bg-night-950 text-white">
      <MapGrid opacity={0.6} />
      <Glow className="-left-24 top-0 h-96 w-96" color="bg-brand-600/40" />
      <Glow className="-right-24 bottom-10 h-96 w-96" color="bg-magenta-500/25" />

      <div className="container-x relative grid items-center gap-16 pb-28 pt-12 sm:pb-36 sm:pt-16 lg:grid-cols-2 lg:pb-44">
        <Stagger onLoad gap={0.1}>
          <StaggerItem>
            <span className="eyebrow-dark">Advertise with Future Touch</span>
          </StaggerItem>
          <StaggerItem as="h1" className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-6xl">
            <span className="text-gradient-cool">Grow</span> your business, <br className="hidden sm:block" />
            one search at a time.
          </StaggerItem>
          <StaggerItem as="p" className="mt-5 max-w-lg text-base text-slate-300 sm:text-lg">
            Advertise with <b className="text-white">FutureTouch</b> – your gateway to digital success.
          </StaggerItem>
          <StaggerItem className="mt-8 max-w-xl">
            <PhoneStart dark />
          </StaggerItem>
          <StaggerItem as="ul" className="mt-6 space-y-2.5">
            {growBenefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm font-semibold text-slate-200 sm:text-base">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cyan-400/20 text-[11px] text-cyan-300"><FaCheck /></span>
                {b}
              </li>
            ))}
          </StaggerItem>
          <StaggerItem as="p" className="mt-6 text-xs text-slate-500">
            By continuing, you agree to our{" "}
            <a href="/terms" className="text-slate-300 hover:underline">Terms of Use</a>, <a href="/privacy" className="text-slate-300 hover:underline">Privacy</a>, &amp;{" "}
            <span className="text-slate-300">Infringement Policy</span>.
          </StaggerItem>
        </Stagger>

        <GrowthVisual />
      </div>
      <Wave fill="#fff" />
    </section>
  );
}
