"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { Contours } from "../ui/decor";
import { Reveal } from "../ui/motion";

export default function StillQuestion() {
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] bg-brand-50 p-6 sm:p-10 lg:grid-cols-2">
        <Contours className="-right-24 -top-24 h-96 w-96" />
        <div className="relative">
          <span className="eyebrow">Support</span>
          <h2 className="mt-3 text-2xl font-extrabold text-night-900 sm:text-3xl">Still having questions?</h2>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6">
            <label htmlFor="still-q" className="sr-only">Your question</label>
            <textarea
              id="still-q"
              className="field h-40 resize-none bg-white"
              placeholder="Write your query here and we’ll get back to you within 2 working days..."
            />
            <button type="submit" className="btn-primary mt-3"><FaPaperPlane /> Submit</button>
          </form>
        </div>
        <img src="/img/Advertise/3.svg" alt="" className="relative mx-auto max-h-80 w-full object-contain" />
      </Reveal>
    </section>
  );
}
