"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Contours } from "../ui/decor";
import { Reveal } from "../ui/motion";

export default function BusinessDirectory() {
  return (
    <section className="container-x py-12 sm:py-16">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-6 text-white shadow-glow sm:p-10">
        <Contours className="-right-20 -top-24 h-96 w-96" stroke="rgba(255,255,255,.18)" />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center">
          <img
            src="/img/business Directory/business Directory.webp"
            alt=""
            className="h-16 w-16 shrink-0 rounded-2xl bg-white/15 object-contain p-2 sm:h-20 sm:w-20"
          />
          <div className="flex-1">
            <h2 className="text-xl font-extrabold sm:text-2xl lg:text-3xl">#1 Business Directory and Service Provider</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour.
            </p>
          </div>
          <Link
            href="/mybusiness"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-night-900 transition hover:-translate-y-0.5"
          >
            Add my business
            <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
