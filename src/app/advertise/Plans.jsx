"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMagnifyingGlass,
  FaBookOpen,
  FaCreditCard,
  FaBullseye,
  FaChartLine,
  FaHeadset,
  FaCheck,
} from "react-icons/fa6";
import { SectionHeading } from "@/app/ui/decor";
import { Reveal } from "@/app/ui/motion";
let c = [
  {
    name: "Standard",
    color: "text-emerald-600",
    originalPrice: "₹ 132/Day",
    discount: "25% Off",
    finalPrice: "₹99",
    perDay: true,
  },
  {
    name: "Premium",
    color: "text-magenta-500",
    originalPrice: "₹ 199/Day",
    discount: "25% Off",
    finalPrice: "₹149",
    perDay: true,
  },
  {
    name: "Pro",
    color: "text-brand-600",
    originalPrice: "₹ 266/Day",
    discount: "25% Off",
    finalPrice: "₹199",
    perDay: true,
  },
  {
    name: "Growth",
    color: "text-brand-600",
    originalPrice: "Get Max Exposure",
    discount: "List in",
    finalPrice: "Top 5",
  },
];
let d = [
  {
    title: "Search Visibility",
    icon: FaMagnifyingGlass,
    values: ["1X", "2X", "3X", "Guaranteed Top Visibility"],
  },
  {
    title: "Open Catalogue",
    icon: FaBookOpen,
    values: [true, true, true, true],
  },
  {
    title: "Payment Solutions",
    icon: FaCreditCard,
    values: [true, true, true, true],
  },
  {
    title: "Smart Lead System",
    icon: FaBullseye,
    values: [true, true, true, true],
  },
  {
    title: "Competitor Analysis",
    icon: FaChartLine,
    values: [true, true, true, true],
  },
  {
    title: "Premium Customer Support",
    icon: FaHeadset,
    values: [true, true, true, true],
  },
];
let Cm = (e) => {
  let { v } = e;
  return true === v ? (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-[11px] text-emerald-600">
      <FaCheck />
    </span>
  ) : (
    <span className="font-semibold text-night-900">{v}</span>
  );
};
function Plans() {
  let [e, t] = useState("Premium");
  return (
    <section id="Plans" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Plans"
          title="Choose a plan and"
          highlight="start growing"
          subtitle="Simple daily pricing. Upgrade or pause any time."
        />
        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:hidden">
          {c.map((s, i) => {
            let n = e === s.name;
            return (
              <button
                key={s.name}
                type="button"
                onClick={() => t(s.name)}
                className={`w-[78%] shrink-0 snap-center rounded-3xl p-5 text-left transition xs:w-[60%] sm:w-[42%] ${n ? "bg-night-900 text-white shadow-glow" : "panel"}`}
              >
                <h3 className={`text-xl font-extrabold ${n ? "text-white" : s.color}`}>{s.name}</h3>
                <p className={`text-xs line-through ${n ? "text-slate-500" : "text-slate-400"}`}>{s.originalPrice}</p>
                <p className="text-xs text-pin-500">{s.discount}</p>
                <p className="font-display text-3xl font-extrabold">
                  {s.finalPrice}
                  {s.perDay && <span className="text-xs font-normal opacity-60">{" /Day"}</span>}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {d.map((e) => (
                    <li key={e.title} className="flex items-center justify-between gap-2">
                      <span className={n ? "text-slate-300" : "text-slate-500"}>{e.title}</span>
                      {true === e.values[i] ? (
                        <FaCheck className="shrink-0 text-emerald-400" />
                      ) : (
                        <span className="text-right text-xs font-bold">{e.values[i]}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
        <Reveal className="panel mt-12 hidden overflow-hidden lg:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[32%] p-6 text-left align-bottom">
                  <p className="text-sm font-normal text-slate-500">Tap a plan to compare</p>
                </th>
                {c.map((s) => {
                  let i = e === s.name;
                  return (
                    <th key={s.name} className="p-3">
                      <button
                        type="button"
                        onClick={() => t(s.name)}
                        className={`relative w-full rounded-3xl p-5 text-center transition ${i ? "text-white" : "hover:bg-mist"}`}
                      >
                        {i && (
                          <motion.span
                            layoutId="plan-active"
                            className="absolute inset-0 rounded-3xl bg-night-900 shadow-glow"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative block">
                          <span className={`block text-xl font-extrabold ${i ? "text-white" : s.color}`}>{s.name}</span>
                          <span className="block text-xs text-slate-400 line-through">{s.originalPrice}</span>
                          <span className="block text-xs text-pin-500">{s.discount}</span>
                          <span className="block font-display text-2xl font-extrabold">
                            {s.finalPrice}
                            {s.perDay && <span className="text-xs font-normal opacity-60">{" /Day"}</span>}
                          </span>
                        </span>
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {d.map((t) => {
                let { title, icon: Icon, values } = t;
                return (
                  <tr key={title} className="border-t border-slate-100">
                    <td className="p-5">
                      <span className="flex items-center gap-3 font-semibold text-night-900">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                          <Icon />
                        </span>
                        {title}
                      </span>
                    </td>
                    {values.map((t, s) => (
                      <td key={s} className={`p-5 text-center text-sm ${e === c[s].name ? "bg-brand-50/50" : ""}`}>
                        <Cm v={t} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
export default Plans;
