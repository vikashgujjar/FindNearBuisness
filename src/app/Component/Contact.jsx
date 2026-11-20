"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar, FaLocationDot } from "react-icons/fa6";
import { SectionHeading, Contours, Wave, MapGrid, Glow } from "@/app/ui/decor";
import { Stagger, StaggerItem, Reveal } from "@/app/ui/motion";
import { cityHref } from "@/app/context/LocationContext";
import { listingHref, useFormPost } from "@/app/lib/api";
import { P, F, I } from "@/app/Component/Citycategoire";
import Servicelist from "@/app/Component/Servicelist";
let Contact = (props) => {
  let { loc, trending } = props,
    i = trending?.length
      ? trending.map((e) => {
          var a;
          return {
            title: e.name,
            category: e.category?.name,
            description: e.address,
            rating: e.rating ? Number(e.rating).toFixed(1) : null,
            img: e.cover_image || "/img/Servicelist/img1.webp",
            href: listingHref(e),
          };
        })
      : P;
  return (
    <>
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Explore"
            title="Explore city"
            highlight="categories"
            subtitle="The most-loved categories around you, ranked by reviews and listings."
          />
          <Stagger gap={0.08} className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:grid-rows-2">
            <StaggerItem className="col-span-2 lg:row-span-2">
              <Servicelist item={F} href={cityHref(loc, "realestate")} big />
            </StaggerItem>
            {I.map((e) => (
              <StaggerItem key={e.title}>
                <Servicelist item={e} href={cityHref(loc, "realestate")} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="relative overflow-hidden bg-mist py-14 sm:py-20">
        <Contours className="-right-40 -top-40 h-[560px] w-[560px]" />
        <Contours className="-bottom-60 -left-40 h-[520px] w-[520px]" stroke="rgba(248,168,8,.12)" />
        <div className="container-x relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Trending"
              title="Trending"
              highlight="near you"
              subtitle="Discover the best services in your city, handpicked for you."
            />
            <Link href={cityHref(loc, "all")} className="btn-ghost self-start bg-white sm:self-auto">
              {"View all "}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
          <Stagger
            gap={0.06}
            className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4"
          >
            {i.map((e) => (
              <StaggerItem key={e.title} className="w-[78%] shrink-0 snap-start xs:w-[62%] sm:w-auto">
                <Link
                  href={e.href || cityHref(loc, "all")}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={e.img}
                      alt={e.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-night-950/75 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      {e.category}
                    </span>
                    {e.rating && (
                      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-night-900">
                        <FaStar className="text-pin-500" /> {e.rating}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-bold leading-snug text-night-900 transition group-hover:text-brand-600">
                      {e.title}
                    </h3>
                    <p className="mt-2 flex gap-2 text-xs text-slate-500">
                      <FaLocationDot className="mt-0.5 shrink-0 text-magenta-500" />
                      <span className="line-clamp-2">{e.description}</span>
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
};
let R = [
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
let H =
  "w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/60 focus:bg-white/10";
let O = () => {
  let { status, onSubmit } = useFormPost("/enquiries", (e) => ({
    ...e,
    type: "requirement",
  }));
  return (
    <section className="relative overflow-hidden bg-night-950 py-24 text-white sm:py-32 lg:py-40">
      <Wave flip fill="#F3F8FE" />
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
            highlight="Findbee"
            subtitle="Share your requirements with us, and we’ll connect you with the right service providers to fulfill your needs effectively."
          />
          <Stagger gap={0.18} className="relative mt-10">
            <motion.span
              aria-hidden
              className="absolute bottom-10 left-[27px] top-8 w-0.5 origin-top rounded-full bg-gradient-to-b from-cyan-400 via-brand-500 to-cyan-500"
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
              }}
            />
            {R.map((e, a) => (
              <StaggerItem key={e.title} className="relative flex gap-5 pb-8 last:pb-0">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-night-800 ring-1 ring-white/15">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={e.imgSrc}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-[11px] font-bold">
                    {a + 1}
                  </span>
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-bold sm:text-xl">{e.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400 sm:text-base">{e.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <Reveal y={40} className="glass relative rounded-[2rem] p-6 shadow-2xl sm:p-8">
          <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact Form">
            <h3 className="text-2xl font-bold sm:text-3xl">What are you looking for?</h3>
            <p className="text-sm text-slate-400">We usually reply within a few hours.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Name
                </label>
                <input type="text" id="name" name="name" required placeholder="Enter your name" className={H} />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Email
                </label>
                <input type="email" id="email" name="email" required placeholder="Enter your email" className={H} />
              </div>
            </div>
            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400"
              >
                Service Required
              </label>
              <select id="service" name="service" defaultValue="" className={`${H} [&>option]:text-night-900`}>
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Web Development">Web Development</option>
                <option value="SEO">SEO</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="App Development">App Development</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400"
              >
                Message
              </label>
              <textarea id="message" name="message" rows="4" placeholder="Enter your message" className={H} />
            </div>
            {status?.ok && (
              <p className="text-sm font-semibold text-emerald-300" role="status">
                {status.ok}
              </p>
            )}
            {status?.error && (
              <p className="text-sm font-semibold text-rose-300" role="alert">
                {status.error}
              </p>
            )}
            <button
              type="submit"
              disabled={status?.busy}
              className="btn-primary w-full py-3.5 text-base disabled:opacity-60"
            >
              {status?.busy ? "Sending…" : "Submit"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
export { O };
export default Contact;
