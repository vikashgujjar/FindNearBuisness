"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegCopy, FaCheck, FaArrowLeft, FaTicket } from "react-icons/fa6";
import { PageHero, HeroSearch } from "../ui/page";
import { Stagger, StaggerItem } from "../ui/motion";

const coupons = [
  { image: "/img/couponDeal/coupon.webp", title: "Reliance Fresh", expires: "31, Mar 2021", couponVal: "REL10%", couponDesc: "Reliance Fresh" },
  { image: "/img/couponDeal/coupon.webp", title: "Trends", expires: "26, Mar 2021", couponVal: "REL10%", couponDesc: "Trends" },
  { image: "/img/couponDeal/coupon.webp", title: "Rn53 Themes Offers", expires: "25, Mar 2021", couponVal: "RN53OFFER", couponDesc: "Rn53 Themes" },
  { image: "/img/couponDeal/coupon.webp", title: "Future Touch 50% Offer", expires: "23, Dec 2021", couponVal: "BIZ50%", couponDesc: "Future Touch" },
];

function CouponCard({ coupon }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(coupon.couponVal);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div className="panel relative flex h-full flex-col overflow-hidden">
      {/* ticket notches */}
      <span aria-hidden className="absolute -left-3 top-[96px] h-6 w-6 rounded-full bg-mist" />
      <span aria-hidden className="absolute -right-3 top-[96px] h-6 w-6 rounded-full bg-mist" />

      <div className="flex items-center gap-4 p-5">
        <img src={coupon.image} alt={coupon.title} className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow" />
        <div className="min-w-0">
          <h3 className="font-bold text-night-900">{coupon.title}</h3>
          <p className="text-xs text-slate-500">Expires {coupon.expires}</p>
        </div>
      </div>
      <div className="mx-5 border-t-2 border-dashed border-slate-200" />

      <div className="flex flex-1 flex-col justify-center p-5">
        <AnimatePresence mode="wait" initial={false}>
          {revealed ? (
            <motion.div key="code" initial={{ opacity: 0, rotateX: -60 }} animate={{ opacity: 1, rotateX: 0 }} exit={{ opacity: 0 }} className="text-center">
              <p className="text-sm text-slate-500">🎉 Here’s your code for <b className="text-night-900">{coupon.couponDesc}</b></p>
              <button
                type="button"
                onClick={copy}
                className="mx-auto mt-3 flex items-center gap-3 rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50 px-5 py-3 font-display text-xl font-extrabold tracking-widest text-brand-700"
              >
                {coupon.couponVal}
                {copied ? <FaCheck className="text-base text-emerald-500" /> : <FaRegCopy className="text-base" />}
              </button>
              <button type="button" onClick={() => setRevealed(false)} className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-600">
                <FaArrowLeft /> Back
              </button>
            </motion.div>
          ) : (
            <motion.div key="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-between gap-3">
              <a href="/terms" className="text-xs text-slate-500 underline hover:text-brand-600">Terms & Conditions Apply</a>
              <button type="button" onClick={() => setRevealed(true)} className="btn-primary">
                <FaTicket /> Get Coupon
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function CouponDeals() {
  const [query, setQuery] = useState("");
  const list = coupons.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="bg-mist">
      <PageHero
        eyebrow="Save more"
        title="Coupons"
        highlight="& Deals"
        subtitle="Post your events, seminars, webinars, festivals, and more"
        waveFill="#F4F5FB"
      >
        <HeroSearch placeholder="Search deals in your city..." value={query} onChange={(e) => setQuery(e.target.value)} />
      </PageHero>

      <div className="container-x pb-16">
        <Stagger gap={0.08} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {list.map((coupon) => (
            <StaggerItem key={coupon.title}>
              <CouponCard coupon={coupon} />
            </StaggerItem>
          ))}
        </Stagger>
        {list.length === 0 && <p className="py-16 text-center text-slate-400">No deals match “{query}”.</p>}
      </div>
    </div>
  );
}
