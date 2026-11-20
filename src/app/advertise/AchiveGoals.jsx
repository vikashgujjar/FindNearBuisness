"use client";

import { SectionHeading } from "@/app/ui/decor";
import { Stagger, StaggerItem } from "@/app/ui/motion";
let r = [
  {
    img: "/img/Advertise/goal1.svg",
    desc: "Rank Ahead of Your Competition",
  },
  {
    img: "/img/Advertise/goal2.svg",
    desc: "Find Ready to Buy Customers Instantly",
  },
  {
    img: "/img/Advertise/goal3.svg",
    desc: "Track Leads & Competition Trends",
  },
];
function AchiveGoals() {
  return (
    <section id="Benefits" className="relative scroll-mt-20 overflow-hidden bg-mist py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Benefits" title="Findbee Ads help you" highlight="achieve your goals" />
        <Stagger gap={0.15} className="mt-12 grid gap-5 sm:grid-cols-3">
          {r.map((e, t) => (
            <StaggerItem
              key={e.desc}
              className="group panel relative overflow-hidden p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-card-hover"
            >
              <span aria-hidden className="absolute right-4 top-2 font-display text-7xl font-extrabold text-slate-100">
                {t + 1}
              </span>
              <img
                loading="lazy"
                decoding="async"
                src={e.img}
                alt=""
                className="relative mx-auto h-24 w-24 object-contain transition duration-500 group-hover:scale-110"
              />
              <p className="relative mt-5 text-lg font-bold text-night-900">{e.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
export default AchiveGoals;
