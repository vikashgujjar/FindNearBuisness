"use client";
import React, { useState } from "react";
import { FaPlus, FaCheck } from "react-icons/fa6";
import { PageHero, HeroSearch } from "../ui/blocks";
import { Stagger, StaggerItem } from "../ui/motion";

const people = [
  { image: "/img/community/community1.webp", name: "Rn53 Themes" },
  { image: "/img/community/dashbordMickkle.webp", name: "Mickle" },
];
const communityData = Array.from({ length: 24 }, (_, i) =>
  i === 0 ? people[0] : i % 2 ? people[1] : { image: "/img/community/community1.webp", name: "Jony Deep Themes" }
).map((p, i) => ({ ...p, id: i }));

export default function Community() {
  const [query, setQuery] = useState("");
  const [following, setFollowing] = useState({});
  const list = communityData.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="bg-mist">
      <PageHero
        eyebrow="People"
        title="Community"
        subtitle="Post your events, seminars, webinars, festivals, and more"
        waveFill="#F4F5FB"
      >
        <HeroSearch placeholder="Search members" value={query} onChange={(e) => setQuery(e.target.value)} />
      </PageHero>

      <div className="container-x pb-16">
        <Stagger gap={0.03} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6">
          {list.map((m) => {
            const on = !!following[m.id];
            return (
              <StaggerItem key={m.id} className="panel group p-3 text-center transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={m.image} alt={m.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h6 className="mt-3 truncate text-sm font-bold text-night-900">{m.name}</h6>
                <button
                  type="button"
                  onClick={() => setFollowing((p) => ({ ...p, [m.id]: !on }))}
                  aria-pressed={on}
                  className={`mt-3 w-full rounded-full py-2 text-xs font-bold transition ${
                    on ? "bg-night-900 text-white" : "bg-brand-50 text-brand-600 hover:bg-brand-500 hover:text-white"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">{on ? <><FaCheck /> Following</> : <><FaPlus /> Follow</>}</span>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </div>
  );
}
