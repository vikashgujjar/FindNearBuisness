"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem, Reveal } from "../ui/motion";
import { cityHref, toSlug } from "../context/LocationContext";

const service = [
  {
    label: "b2b",
    desc: "Future IT Touch Pvt Ltd provides cutting-edge B2B solutions tailored to your business needs. Connect with verified vendors, explore enterprise-grade IT services, and leverage seamless integration tools to streamline your business operations.",
  },
  {
    label: "All india",
    desc: "Expand your business reach across India with our digital IT solutions. From lead generation to product promotion, Future IT Touch empowers businesses with robust online platforms, data-driven insights, and cloud-based management systems.",
  },
  {
    icon: "",
    label: "packers and movers",
    desc: "Enhance your logistics and supply chain efficiency with our technology-driven solutions for packers and movers. Track shipments, manage inventory, and optimize routes with our advanced tracking and automation tools.",
  },
  {
    label: "Order Food Online",
    desc: "Our innovative online ordering systems enable restaurants and food businesses to scale. Future IT Touch Pvt Ltd provides seamless food ordering platforms, payment integrations, and AI-driven recommendation engines.",
  },
  {
    label: "jobs",
    desc: "Simplify hiring and job searching with our AI-powered job portals. Whether you're an employer looking for top talent or a job seeker searching for the right opportunity, our digital recruitment solutions offer the best match.",
  },
  {
    icon: "",
    label: "movies",
    desc: "Streamline movie ticket bookings and entertainment experiences with our digital solutions. Future IT Touch Pvt Ltd provides secure and scalable online booking platforms, payment gateways, and real-time updates for cinemas.",
  },
  {
    label: "spa & salon",
    desc: "Revolutionize the wellness industry with our IT solutions for spas and salons. Enable online appointment bookings, manage customer relationships, and enhance customer experiences with smart scheduling software.",
  },
  {
    label: "repair & service",
    desc: "Our technology-driven solutions help service providers in repair and maintenance industries streamline customer requests, manage bookings, and optimize workflows efficiently.",
  },
  {
    icon: "",
    label: "Doctor Appointment",
    desc: "Digitize healthcare with our online appointment booking systems. Future IT Touch Pvt Ltd offers secure telemedicine platforms, automated scheduling, and real-time patient-doctor interactions.",
  },
  {
    label: "Real Estate Agents",
    desc: "Enhance property management and real estate searches with our intelligent digital platforms. Connect with trusted agents, explore rental and sale options, and stay updated on new real estate trends.",
  },
  {
    label: "online Recharge & bill payment",
    desc: "Future IT Touch Pvt Ltd offers seamless online recharge and bill payment solutions, ensuring smooth transactions for utilities such as electricity, gas, DTH, and mobile services.",
  },
];

export default function OneStop({ loc }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-14 sm:py-20">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="One-stop"
            title="One-stop solution for"
            highlight="every business need"
            subtitle="IT services, digital solutions and everyday services across India."
          />

          <Reveal className="text-sm leading-relaxed text-slate-500 sm:text-base">
            <p>
              Welcome to Future IT Touch, your trusted partner for all IT and digital solutions, helping businesses
              streamline operations, enhance online presence, and drive growth. We take pride in our commitment to
              delivering cutting-edge technology solutions tailored to your unique business needs.
            </p>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4">
                    Our services range from software development, website design, and digital marketing to cloud
                    computing, cybersecurity, and IT consulting. We cater to businesses of all sizes, from startups to
                    enterprises, providing expert solutions across various industries, including e-commerce, healthcare,
                    education, real estate, and more.
                  </p>
                  <p className="mt-4">
                    Our &apos;Free Consultation&apos; feature allows businesses to explore customized IT strategies. With seamless
                    support via phone, email, web, and mobile app, we ensure hassle-free service delivery. Our
                    &apos;Customer Reviews&apos; and &apos;Exclusive IT Deals&apos; sections help you make informed decisions and access the
                    best offers in the industry.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand-600"
            >
              {expanded ? "Read less" : "Read more"}
              <IoIosArrowDown className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </Reveal>
        </div>

        <h3 className="mt-14 text-lg font-bold text-night-900 sm:text-xl">
          Some of our services that will prove useful to you on a day-to-day basis
        </h3>
        <Stagger gap={0.05} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {service.map((elm, index) => (
            <StaggerItem key={elm.label}>
              <Link
                href={cityHref(loc, toSlug(elm.label))}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mist transition group-hover:bg-brand-50">
                    <img src={`/img/homeservice/${index + 1}.svg`} alt="" className="h-7 w-7" />
                  </span>
                  <h4 className="font-bold capitalize text-night-900 transition group-hover:text-brand-600">{elm.label}</h4>
                </div>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-500">{elm.desc}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-10 text-sm leading-relaxed text-slate-500">
          Future IT Touch Pvt Ltd brings you a variety of essential services designed for your leisure, health, and home
          convenience. Whether you&apos;re looking for Pest Control, Skin Care Clinics, Painters, Laundry Services, Interior
          Designers, Mobile Phone Repair, Vaccination Centres, Internet Service Providers, or more – we&apos;ve got you
          covered! With an extensive range of solutions under one roof, Future IT Touch Pvt Ltd is your &quot;One-Stop
          Destination&quot; for all your needs, ensuring seamless access to reliable and top-quality services.
        </p>
      </div>
    </section>
  );
}
