"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapGrid, Glow, SectionHeading, Wave } from "../ui/decor";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";

const steps = [
  {
    imgSrc: "/img/contactimg/blog.webp",
    title: "Tell us more about your requirements",
    description: "Imagine making your presence known online through a local directory. Your competitors are already...",
  },
  {
    imgSrc: "/img/contactimg/shield.webp",
    title: "We connect with the right service provider",
    description: "Advertising your business to local audiences opens up numerous opportunities...",
  },
  {
    imgSrc: "/img/contactimg/general.webp",
    title: "Happy with our service",
    description: "Even local businesses need brand management and a strong image. Build yours effectively...",
  },
];

const field =
  "w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/60 focus:bg-white/10";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-night-950 py-24 text-white sm:py-32 lg:py-40">
      <Wave flip fill="#F4F5FB" />
      <Wave fill="#fff" />
      <MapGrid opacity={0.45} />
      <Glow className="-left-20 top-1/3 h-80 w-80" color="bg-brand-600/30" />
      <Glow className="-right-20 bottom-0 h-80 w-80" color="bg-cyan-400/15" />

      <div className="container-x relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            dark
            align="left"
            eyebrow="How it works"
            title="What service do you need?"
            highlight="Future Touch"
            subtitle="Share your requirements with us, and we’ll connect you with the right service providers to fulfill your needs effectively."
          />

          <Stagger gap={0.18} className="relative mt-10">
            {/* route line linking the steps */}
            <motion.span
              aria-hidden
              className="absolute bottom-10 left-[27px] top-8 w-0.5 origin-top rounded-full bg-gradient-to-b from-cyan-400 via-brand-500 to-magenta-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />

            {steps.map((item, index) => (
              <StaggerItem key={item.title} className="relative flex gap-5 pb-8 last:pb-0">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-night-800 ring-1 ring-white/15">
                  <img src={item.imgSrc} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-[11px] font-bold">
                    {index + 1}
                  </span>
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-bold sm:text-xl">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal y={40} className="glass relative rounded-[2rem] p-6 shadow-2xl sm:p-8">
          <form className="space-y-4" aria-label="Contact Form">
            <h3 className="text-2xl font-bold sm:text-3xl">What are you looking for?</h3>
            <p className="text-sm text-slate-400">We usually reply within a few hours.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Name</label>
                <input type="text" id="name" placeholder="Enter your name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Email</label>
                <input type="email" id="email" placeholder="Enter your email" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Service Required</label>
              <select id="service" defaultValue="" className={`${field} [&>option]:text-night-900`}>
                <option value="" disabled>Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="seo">SEO</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="app-development">App Development</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Message</label>
              <textarea id="message" rows="4" placeholder="Enter your message" className={field} />
            </div>
            <button type="submit" className="btn-primary w-full py-3.5 text-base">Submit</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
