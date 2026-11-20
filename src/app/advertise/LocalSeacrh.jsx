"use client";

import { MapGrid, Glow } from "@/app/ui/decor";
import { Reveal } from "@/app/ui/motion";
import { PhoneStart } from "@/app/advertise/PhoneStart";
function LocalSeacrh() {
  return (
    <section className="container-x py-10">
      <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] bg-night-950 p-6 text-white sm:p-12 lg:grid-cols-2">
        <MapGrid opacity={0.5} />
        <Glow className="-left-10 -top-10 h-64 w-64" color="bg-brand-600/40" />
        <div className="relative">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            <span className="text-gradient-cool">Grow</span>
            {" your business today"}
          </h2>
          <p className="mt-3 text-slate-300">
            {"Advertise with "}
            <b className="text-white">Findbee</b>
            {" – Your Gateway to Digital Success!"}
          </p>
          <div className="mt-6 max-w-lg">
            <PhoneStart dark />
          </div>
        </div>
        <img
          loading="lazy"
          decoding="async"
          src="/img/Advertise/4.svg"
          alt=""
          className="relative mx-auto max-h-72 w-full object-contain"
        />
      </Reveal>
    </section>
  );
}
export default LocalSeacrh;
