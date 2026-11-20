"use client";

import { useRef } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { Reveal, CountUp } from "@/app/ui/motion";
let d = [
  {
    name: "Rajesh Chhabria",
    comapenyname: "Chhabria & Sons",
    profession: "Business Owner",
    year: "13",
    img: "/img/Advertise/success1.webp",
  },
  {
    name: "Varshini R.",
    comapenyname: "GreenLeaf Caf\xe9",
    profession: "Entrepreneur",
    year: "6",
    img: "/img/Advertise/success2.webp",
  },
  {
    name: "Amit Khurana",
    comapenyname: "TechSpark Solutions",
    profession: "Software Developer",
    year: "9",
    img: "/img/Advertise/success3.webp",
  },
  {
    name: "Nikita Sharma",
    comapenyname: "StyleHub Boutique",
    profession: "Fashion Designer",
    year: "5",
    img: "/img/Advertise/success4.avif",
  },
  {
    name: "Pooja Verma",
    comapenyname: "Bake n’ Bliss",
    profession: "Baker",
    year: "4",
    img: "/img/Advertise/success5.avif",
  },
];
function SuccessStrory() {
  let e = useRef(null),
    t = useRef(null);
  return (
    <section id="Success" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[.8fr_2fr]">
        <Reveal className="space-y-5">
          <img loading="lazy" decoding="async" src="/img/Advertise/2.svg" alt="" className="w-16 md:w-20" />
          <span className="eyebrow">Success stories</span>
          <h2 className="text-3xl font-extrabold text-night-900 sm:text-4xl">
            {"Real businesses, "}
            <span className="text-gradient">real growth</span>
          </h2>
          <p className="text-lg text-slate-500">
            <b className="font-display text-3xl font-extrabold text-night-900">
              <CountUp to={5.9} format={(e) => e.toFixed(1)} />
              {" Lakh+"}
            </b>
            {" advertisers"}
          </p>
          <div className="flex gap-3">
            <button
              ref={e}
              aria-label="Previous story"
              className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 text-xl transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
            >
              <IoArrowBackOutline />
            </button>
            <button
              ref={t}
              aria-label="Next story"
              className="grid h-12 w-12 place-items-center rounded-full bg-night-900 text-xl text-white transition hover:bg-brand-600"
            >
              <IoArrowForwardOutline />
            </button>
          </div>
        </Reveal>
        <Reveal className="min-w-0" delay={0.1}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: e.current,
              nextEl: t.current,
            }}
            onBeforeInit={(s) => {
              (s.params.navigation.prevEl = e.current), (s.params.navigation.nextEl = t.current);
            }}
            autoplay={{
              delay: 3e3,
              disableOnInteraction: false,
            }}
            loop
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 1.6,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-4"
          >
            {d.map((e) => (
              <SwiperSlide key={e.name}>
                <article className="group relative overflow-hidden rounded-3xl">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={e.img}
                    alt={e.name}
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="chip bg-white/15 backdrop-blur">
                      {"Customer for "}
                      {e.year}
                      {" years"}
                    </span>
                    <h3 className="mt-3 text-xl font-bold">{e.name}</h3>
                    <p className="text-sm text-slate-300">
                      {e.comapenyname}
                      {" \xb7 "}
                      {e.profession}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      {"View Business "}
                      <FaArrowRightLong className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
export default SuccessStrory;
