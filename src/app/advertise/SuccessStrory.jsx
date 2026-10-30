"use client";
import React, { useRef } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { CountUp, Reveal } from "../ui/motion";

const list = [
  { name: "Rajesh Chhabria", comapenyname: "Chhabria & Sons", profession: "Business Owner", year: "13", img: "/img/Advertise/success1.webp" },
  { name: "Varshini R.", comapenyname: "GreenLeaf Café", profession: "Entrepreneur", year: "6", img: "/img/Advertise/success2.webp" },
  { name: "Amit Khurana", comapenyname: "TechSpark Solutions", profession: "Software Developer", year: "9", img: "/img/Advertise/success3.webp" },
  { name: "Nikita Sharma", comapenyname: "StyleHub Boutique", profession: "Fashion Designer", year: "5", img: "/img/Advertise/success4.avif" },
  { name: "Pooja Verma", comapenyname: "Bake n’ Bliss", profession: "Baker", year: "4", img: "/img/Advertise/success5.avif" },
];

export default function SuccessStory() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="Success" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[.8fr_2fr]">
        <Reveal className="space-y-5">
          <img src="/img/Advertise/2.svg" alt="" className="w-16 md:w-20" />
          <span className="eyebrow">Success stories</span>
          <h2 className="text-3xl font-extrabold text-night-900 sm:text-4xl">
            Real businesses, <span className="text-gradient">real growth</span>
          </h2>
          <p className="text-lg text-slate-500">
            <b className="font-display text-3xl font-extrabold text-night-900"><CountUp to={5.9} format={(n) => n.toFixed(1)} /> Lakh+</b> advertisers
          </p>
          <div className="flex gap-3">
            <button ref={prevRef} aria-label="Previous story" className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 text-xl transition hover:border-brand-500 hover:bg-brand-500 hover:text-white">
              <IoArrowBack />
            </button>
            <button ref={nextRef} aria-label="Next story" className="grid h-12 w-12 place-items-center rounded-full bg-night-900 text-xl text-white transition hover:bg-brand-600">
              <IoArrowForward />
            </button>
          </div>
        </Reveal>

        <Reveal className="min-w-0" delay={0.1}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 14 },
              640: { slidesPerView: 1.6, spaceBetween: 18 },
              768: { slidesPerView: 2.2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-4"
          >
            {list.map((item) => (
              <SwiperSlide key={item.name}>
                <article className="group relative overflow-hidden rounded-3xl">
                  <img src={item.img} alt={item.name} className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="chip bg-white/15 backdrop-blur">Customer for {item.year} years</span>
                    <h3 className="mt-3 text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-slate-300">{item.comapenyname} · {item.profession}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      View Business <FaArrowRightLong className="transition group-hover:translate-x-1" />
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
