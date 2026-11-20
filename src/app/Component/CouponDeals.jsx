"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaRegCopy, FaArrowLeft, FaTicket } from "react-icons/fa6";
import { PageHero, HeroSearch } from "@/app/ui/blocks";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { useApi, formatDate } from "@/app/lib/api";
let u = [
  {
    image: "/img/couponDeal/coupon.webp",
    title: "Reliance Fresh",
    expires: "31, Mar 2021",
    couponVal: "REL10%",
    couponDesc: "Reliance Fresh",
  },
  {
    image: "/img/couponDeal/coupon.webp",
    title: "Trends",
    expires: "26, Mar 2021",
    couponVal: "REL10%",
    couponDesc: "Trends",
  },
  {
    image: "/img/couponDeal/coupon.webp",
    title: "Rn53 Themes Offers",
    expires: "25, Mar 2021",
    couponVal: "RN53OFFER",
    couponDesc: "Rn53 Themes",
  },
  {
    image: "/img/couponDeal/coupon.webp",
    title: "Findbee 50% Offer",
    expires: "23, Dec 2021",
    couponVal: "BIZ50%",
    couponDesc: "Findbee",
  },
];
function Cm(props) {
  let { coupon } = props,
    [n, o] = useState(false),
    [c, d] = useState(false),
    u = async () => {
      try {
        await navigator.clipboard.writeText(coupon.couponVal), d(true), setTimeout(() => d(false), 1600);
      } catch (e) {}
    };
  return (
    <div className="panel relative flex h-full flex-col overflow-hidden">
      <span aria-hidden className="absolute -left-3 top-[96px] h-6 w-6 rounded-full bg-mist" />
      <span aria-hidden className="absolute -right-3 top-[96px] h-6 w-6 rounded-full bg-mist" />
      <div className="flex items-center gap-4 p-5">
        <img
          loading="lazy"
          decoding="async"
          src={coupon.image}
          alt={coupon.title}
          className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow"
        />
        <div className="min-w-0">
          <h3 className="font-bold text-night-900">{coupon.title}</h3>
          {coupon.expires && (
            <p className="text-xs text-slate-500">
              {"Expires "}
              {coupon.expires}
            </p>
          )}
        </div>
      </div>
      <div className="mx-5 border-t-2 border-dashed border-slate-200" />
      <div className="flex flex-1 flex-col justify-center p-5">
        <AnimatePresence mode="wait" initial={false}>
          {n ? (
            <motion.div
              key={"code"}
              initial={{
                opacity: 0,
                rotateX: -60,
              }}
              animate={{
                opacity: 1,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="text-center"
            >
              <p className="text-sm text-slate-500">
                {"\uD83C\uDF89 Here’s your code for "}
                <b className="text-night-900">{coupon.couponDesc}</b>
              </p>
              <button
                type="button"
                onClick={u}
                className="mx-auto mt-3 flex items-center gap-3 rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50 px-5 py-3 font-display text-xl font-extrabold tracking-widest text-brand-700"
              >
                {coupon.couponVal}
                {c ? <FaCheck className="text-base text-emerald-500" /> : <FaRegCopy className="text-base" />}
              </button>
              <button
                type="button"
                onClick={() => o(false)}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-600"
              >
                <FaArrowLeft />
                {" Back"}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={"cta"}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="flex items-center justify-between gap-3"
            >
              <a href="/terms" className="text-xs text-slate-500 underline hover:text-brand-600">
                {"Terms & Conditions Apply"}
              </a>
              <button type="button" onClick={() => o(true)} className="btn-primary">
                <FaTicket />
                {" Get Coupon"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
function CouponDeals() {
  let [e, t] = useState(""),
    { data, error } = useApi("/offers", {
      auth: false,
    }),
    l = (
      data?.data
        ? data.data
            .filter((e) => e.code)
            .map((e) => {
              var t;
              return {
                image: e.image || "/img/couponDeal/coupon.webp",
                title: e.title,
                expires: e.expires_at ? formatDate(e.expires_at) : null,
                couponVal: e.code,
                couponDesc: e.listing?.name || e.title,
              };
            })
        : error
          ? u
          : []
    ).filter((t) => t.title.toLowerCase().includes(e.toLowerCase()));
  return (
    <div className="bg-mist">
      <PageHero
        eyebrow="Save more"
        title="Coupons"
        highlight={"& Deals"}
        subtitle="Post your events, seminars, webinars, festivals, and more"
        waveFill="#F3F8FE"
      >
        <HeroSearch placeholder="Search deals in your city..." value={e} onChange={(e) => t(e.target.value)} />
      </PageHero>
      <div className="container-x pb-16">
        <Stagger gap={0.08} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {l.map((e) => (
            <StaggerItem key={e.title}>
              <Cm coupon={e} />
            </StaggerItem>
          ))}
        </Stagger>
        {!data && !error && (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" aria-busy="true">
            {[undefined, undefined, undefined, undefined].map((e, t) => (
              <div key={t} className="panel h-64 animate-pulse bg-white" />
            ))}
          </div>
        )}
        {(data || error) && 0 === l.length && (
          <p className="py-16 text-center text-slate-400">
            {e ? <>No deals match “{e}”.</> : "No deals right now. Check back soon."}
          </p>
        )}
      </div>
    </div>
  );
}
export default CouponDeals;
