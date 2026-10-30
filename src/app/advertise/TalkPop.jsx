"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRightLong, FaHeadset } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PopUpForm({ setTalkPop }) {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setTalkPop(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [setTalkPop]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-night-950/60 backdrop-blur-sm sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setTalkPop(false)}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Talk to us"
        className="w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-card-hover sm:rounded-3xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-24 bg-brand-gradient">
          <button onClick={() => setTalkPop(false)} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white">
            <RxCross1 />
          </button>
        </div>
        <div className="-mt-10 flex flex-col items-center gap-4 px-6 pb-8 text-center">
          <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-3xl text-brand-600 shadow-card ring-4 ring-white">
            <span className="absolute inset-0 animate-ping-slow rounded-full bg-brand-500/20" />
            <FaHeadset />
          </span>
          <p className="text-slate-600">
            Ms. Neha will assist you on an initial call <b className="text-night-900">to help select the right plan for your business.</b>
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full flex-col gap-3 sm:flex-row">
            <PhoneInput
              country="in"
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: "100%", height: "48px", borderRadius: "14px", border: "1px solid #e2e8f0", background: "#F4F5FB" }}
              buttonStyle={{ borderRadius: "14px 0 0 14px", border: "1px solid #e2e8f0" }}
              containerStyle={{ flex: 1 }}
            />
            <button type="submit" className="btn-primary group h-12">
              Call Now <FaArrowRightLong className="transition group-hover:translate-x-1" />
            </button>
          </form>
          <p className="text-sm text-slate-500">
            Get a voice call with our advisor now — <b className="text-night-900">let us answer your questions instantly.</b>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
