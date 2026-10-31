import React from "react";
import Choose from "../Component/Choose";
import BusinessDirectory from "../Component/BuinessDirectory";
import { PageHero } from "../ui/blocks";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";
import { SectionHeading } from "../ui/decor";

const teamMembers = [
  { name: "John Smith", imgSrc: "/img/about/aboutTeam1.webp" },
  { name: "Lusia Ann", imgSrc: "/img/about/aboutTeam2.webp" },
  { name: "Mark Luberk", imgSrc: "/img/about/aboutTeam2.webp" },
  { name: "Anjalena Juley", imgSrc: "/img/about/aboutTeam3.webp" },
];

export default function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Who we are"
        title="About"
        highlight="Us"
        subtitle="Injected humour—There are many variations of passages of Lorem Ipsum available"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="container-x grid items-center gap-10 py-14 lg:grid-cols-2">
        <Reveal className="relative">
          <img src="/img/about/about1.webp" alt="" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card-hover" />
          <div className="absolute -bottom-6 -right-2 rounded-3xl bg-brand-gradient p-5 text-white shadow-glow sm:-right-6">
            <p className="font-display text-3xl font-extrabold">2017</p>
            <p className="text-xs text-white/80">Helping local businesses since</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="space-y-4 text-slate-600">
          <span className="eyebrow">Our story</span>
          <h2 className="text-3xl font-extrabold text-night-900 sm:text-4xl">
            Technology that helps <span className="text-gradient">businesses grow</span>
          </h2>
          <p>
            The digital landscape is evolving rapidly, and businesses need innovative solutions to stay ahead. At [Your IT Company Name], we specialize in
            delivering cutting-edge technology services that empower organizations to streamline operations and grow sustainably.
          </p>
          <p>
            With a customer-centric approach, we tailor solutions to meet the unique needs of each client. Our commitment to quality and industry expertise
            positions us as a trusted partner in the digital transformation journey.
          </p>
        </Reveal>
      </section>

      <Choose />

      <section className="container-x py-14">
        <SectionHeading
          eyebrow="Team"
          title="Our"
          highlight="Team"
          subtitle="Explore some of the best tips from around the world from our partners and friends. Lacinia viverra lectus."
        />
        <Stagger gap={0.1} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name} className="group panel overflow-hidden text-center transition duration-300 hover:-translate-y-2 hover:shadow-card-hover">
              <div className="h-20 bg-brand-gradient" />
              <img src={member.imgSrc} alt={member.name} className="mx-auto -mt-12 h-24 w-24 rounded-full object-cover ring-4 ring-white transition duration-500 group-hover:scale-105" />
              <div className="p-5 pt-3">
                <h3 className="text-lg font-bold text-night-900">{member.name}</h3>
                <p className="mt-2 text-sm text-slate-500">Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <BusinessDirectory />
    </div>
  );
}
