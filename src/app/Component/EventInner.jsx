"use client";
import React from "react";
import { FaCalendarDays, FaClock, FaLocationDot, FaUser, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa6";
import { PageHero } from "../ui/page";
import { Reveal } from "../ui/motion";
import { ArticleCover, AuthorCard, RegisterForm, ShareBar } from "./ArticleParts";

const info = [
  { icon: FaCalendarDays, label: "Date", value: "07, Jan 2020" },
  { icon: FaClock, label: "Time", value: "12:00AM" },
  { icon: FaLocationDot, label: "Address", value: "3738 Grim Avenue, California" },
  { icon: FaUser, label: "Contact Person", value: "Rebecca G Torres" },
  { icon: FaPhone, label: "Phone", value: "987654855" },
  { icon: FaEnvelope, label: "Email", value: "rebecca@business.com" },
  { icon: FaGlobe, label: "Website", value: "www.rebecca.com" },
];

export default function EventInner() {
  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Event"
        title="Lunar New Year"
        highlight="2020"
        crumbs={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }, { label: "Lunar New Year 2020" }]}
        waveFill="#F4F5FB"
      />

      <div className="container-x grid gap-6 pb-10 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0 space-y-6">
          <ArticleCover image="/img/blogInner/event-inner.webp" date={<>JAN<br />07</>} title="Lunar New Year 2020" />
          <Reveal className="panel space-y-4 p-6 leading-relaxed text-slate-600 sm:p-8">
            <p className="text-lg font-semibold text-night-900">
              Celebrate as the sights, sounds and aromas of Asia come alive during this local San Diego festival that’s fit for the whole family happening weekends
              January 11, 2020 - February 2, 2020 (to include Monday, January 20, 2020.)
            </p>
            <p>
              You won’t want to miss SeaWorld San Diego’s one-of-a-kind Lunar New Year celebration, featuring an incredible Chinese acrobats show, local performers,
              and delicious culinary delights. Dig into the Asian-inspired offerings of Ramen, Lo Mein, Bao Buns, Dim Sum, rice dishes and more.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
              readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem
              ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </Reveal>
          <ShareBar title="Share this event" />
        </div>

        <aside className="min-w-0 space-y-5">
          <RegisterForm />
          <Reveal className="panel p-6">
            <h3 className="mb-4 text-lg font-bold text-night-900">Event information</h3>
            <ul className="space-y-3">
              {info.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-3 text-sm">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon /></span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">{label}</span>
                    {label === "Website" ? (
                      <a href={`https://${value}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 hover:underline">{value}</a>
                    ) : (
                      <span className="block break-words font-semibold text-night-900">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="panel p-6">
            <h3 className="mb-4 text-lg font-bold text-night-900">Location</h3>
            <iframe
              title="Event location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1548773.41947498!2d-73.979506!3d40.69714100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1740026389098!5m2!1sen!2sin"
              className="h-56 w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <AuthorCard />
        </aside>
      </div>
    </div>
  );
}
