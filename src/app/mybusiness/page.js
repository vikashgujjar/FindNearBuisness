"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import PinLocation from "../Component/PinLocation";
import { PageHero } from "../ui/blocks";
import { Stagger, StaggerItem } from "../ui/motion";

const common = ["User dashboard", "Create duplicate listings", "Social media share", "Admin tips"];
const paidPerks = ["Get direct leads", "Verified listing", "Trusted listing", "Special offers", "Review control"];

const planFeature = [
  {
    planName: "Free plan",
    PlanDec: "For getting started",
    cost: "FREE",
    planFor: "Single user",
    planList: ["1 listing", "1 year(s) (duration)", "1 events", "1 blog posts", "1 photos", "1 videos", ...common],
  },
  {
    planName: "Standard plan",
    PlanDec: "Perfect for small teams",
    cost: 9,
    planFor: "Startup business",
    planList: ["1 listing", "1 year(s) (duration)", "5 events", "5 blog posts", "Email notification (leads)", "2 photos", "1 videos", ...paidPerks, ...common],
  },
  {
    planName: "Premium plan",
    PlanDec: "Best value for large teams",
    cost: 19,
    planFor: "Medium business",
    popular: true,
    planList: ["25 listings", "5 year(s) (duration)", "25 events", "25 blog posts", "Email notification (leads)", "5 photos", "2 videos", ...paidPerks, ...common],
  },
  {
    planName: "Premium Plus plan",
    PlanDec: "Made for enterprises",
    cost: 20,
    planFor: "Global business",
    planList: ["Unlimited listings", "10 year(s) (duration)", "Unlimited events", "Unlimited blog posts", "Email notification (leads)", "10 photos", "1 videos", ...paidPerks, ...common],
  },
];

export default function page() {
  return (
    <>
      <PinLocation />
      <PageHero
        eyebrow="World's Top 100+ country most"
        title="Choose your"
        highlight="pricing plan"
        subtitle="Cras nulla nulla, pulvinar sit amet nunc at, lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla."
        waveFill="#F4F5FB"
      />

      <div className="bg-mist pb-20">
        <Stagger gap={0.1} className="container-x grid items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
          {planFeature.map((plan) => (
            <StaggerItem
              key={plan.planName}
              className={`relative flex flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 ${
                plan.popular ? "bg-night-900 text-white shadow-glow xl:-mt-4 xl:pb-10" : "panel"
              }`}
            >
              {plan.popular && <span className="chip absolute right-5 top-5 bg-brand-gradient text-white">Most popular</span>}
              <h2 className={`text-lg font-bold ${plan.popular ? "text-white" : "text-night-900"}`}>{plan.planName}</h2>
              <p className={`text-sm ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>{plan.PlanDec}</p>
              <p className="mt-6 flex items-end gap-1 font-display">
                {plan.cost === "FREE" ? (
                  <span className="text-4xl font-extrabold">FREE</span>
                ) : (
                  <>
                    <span className="text-2xl font-bold">$</span>
                    <span className="text-5xl font-extrabold">{plan.cost}</span>
                  </>
                )}
              </p>
              <p className={`mt-1 text-xs ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>{plan.planFor}</p>

              <Link href="/user-login/sign" className={`mt-6 w-full ${plan.popular ? "btn-primary" : "btn-dark"}`}>Get Started</Link>

              <ul className="mt-6 space-y-2.5 text-sm">
                {plan.planList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] ${plan.popular ? "bg-cyan-400/20 text-cyan-300" : "bg-emerald-50 text-emerald-600"}`}>
                      <FaCheck />
                    </span>
                    <span className={plan.popular ? "text-slate-300" : "text-slate-600"}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/user-login/sign" className={`mt-6 text-center text-sm font-semibold ${plan.popular ? "text-cyan-300" : "text-brand-600"}`}>
                Add Listing →
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </>
  );
}
