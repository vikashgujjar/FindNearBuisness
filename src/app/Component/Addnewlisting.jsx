"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ListingDeatils from "./ListingDeatils";
import Servicesprovider from "./Servicesprovider";
import SpecialOffer from "./SpecialOffer";
import VideoGallery from "./VideoGallery";
import OtherInformation from "./OtherInformation";
import Sucesss from "./Sucesss";
import { Glow, MapGrid } from "../ui/decor";

const steps = [
  { step: 1, stepHeading: "Basic Info", title: "Listing Details", Comp: ListingDeatils },
  { step: 2, stepHeading: "Service", title: "Services provided", Comp: Servicesprovider },
  { step: 3, stepHeading: "Offers", title: "Special offers", Comp: SpecialOffer },
  { step: 4, stepHeading: "Map", title: "Media, map & 360 view", Comp: VideoGallery },
  { step: 5, stepHeading: "Other", title: "Other Information", Comp: OtherInformation },
  { step: 6, stepHeading: "Done", title: "Success", Comp: Sucesss },
];

export default function Addnewlisting() {
  const [tab, setActiveTab] = useState(1);
  const [dir, setDir] = useState(1);
  const current = steps[tab - 1];
  const go = (n) => {
    setDir(n > tab ? 1 : -1);
    setActiveTab(n);
  };
  const progress = ((tab - 1) / (steps.length - 1)) * 100;

  return (
    <section className="relative overflow-hidden bg-night-950 px-4 py-10 sm:py-16">
      <MapGrid opacity={0.55} />
      <Glow className="-left-24 top-10 h-80 w-80" color="bg-brand-600/35" />
      <Glow className="-right-24 bottom-10 h-80 w-80" color="bg-magenta-500/25" />

      <div className="relative mx-auto w-full max-w-3xl">
        {/* stepper */}
        <div className="relative mb-8">
          <div className="absolute left-5 right-5 top-5 h-1 rounded-full bg-white/10 sm:left-7 sm:right-7 sm:top-7" />
          <motion.div
            className="absolute left-5 right-5 top-5 h-1 origin-left rounded-full bg-cool-gradient sm:left-7 sm:right-7 sm:top-7"
            initial={false}
            animate={{ scaleX: progress / 100 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
          <ol className="relative flex justify-between">
            {steps.map((s) => {
              const done = s.step < tab;
              const active = s.step === tab;
              return (
                <li key={s.step} className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => go(s.step)}
                    aria-current={active ? "step" : undefined}
                    aria-label={`Step ${s.step}: ${s.stepHeading}`}
                    className={`grid h-10 w-10 place-items-center rounded-full text-sm font-bold transition duration-300 sm:h-14 sm:w-14 ${
                      active ? "scale-110 bg-brand-gradient text-white shadow-glow" : done ? "bg-cyan-400 text-night-950" : "bg-night-800 text-slate-400 ring-1 ring-white/15 hover:text-white"
                    }`}
                  >
                    {done ? <FaCheck /> : s.step}
                  </button>
                  <span className={`hidden text-xs font-semibold sm:block ${active ? "text-white" : "text-slate-400"}`}>{s.stepHeading}</span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* step card */}
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-card-hover">
          <div className="h-1.5 bg-brand-gradient" />
          <div className="p-6 sm:p-10">
            <span className="eyebrow">Step {tab} of {steps.length}</span>
            <h1 className="mt-3 text-2xl font-extrabold text-night-900 sm:text-3xl">{current.title}</h1>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={tab}
                custom={dir}
                initial={{ opacity: 0, x: 40 * dir }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 * dir }}
                transition={{ duration: 0.3 }}
                className="mt-7"
              >
                <current.Comp setActiveTab={go} />
              </motion.div>
            </AnimatePresence>

            {tab < steps.length && (
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                {tab > 1 && tab < 6 ? (
                  <Link href="/realestate" className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400 hover:text-brand-600">
                    Skip this »
                  </Link>
                ) : (
                  <span />
                )}
                <div className="flex gap-3">
                  {tab > 1 && (
                    <button type="button" onClick={() => go(tab - 1)} className="btn-ghost flex-1 sm:flex-none">
                      <FaArrowLeft className="text-xs" /> Previous
                    </button>
                  )}
                  <button type="button" onClick={() => go(tab + 1)} className="btn-primary flex-1 sm:flex-none">
                    {tab === 5 ? "Finish" : "Next"} <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
