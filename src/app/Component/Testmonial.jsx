"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { Glow, MapGrid, SectionHeading, Wave } from "../ui/decor";
import { Reveal } from "../ui/motion";

const testMonailData = [
  {
    image: "/img/testmonial/testmonailImg1.webp",
    desc: "Exceptional service! The team was incredibly professional, responsive, and attentive to my needs. They went above and beyond to deliver results that exceeded my expectations. I highly recommend them to anyone looking for top-notch service.",
    name: "MICHAEL TEDDY",
  },
  {
    image: "/img/testmonial/testmonailImg2.webp",
    desc: "Professional and efficient. The entire process was smooth, and communication was excellent from start to finish. They truly understand the client's vision and work diligently to bring it to life. 10/10 would hire again for future projects!",
    name: "EMILIANO AQUILANI",
  },
  {
    image: "/img/testmonial/testmonailImg3.webp",
    desc: "Great experience with this company. Their attention to detail and dedication to delivering high-quality work were impressive. They took the time to understand my requirements and executed everything flawlessly. I will definitely use their services again in the future!",
    name: "IAN OWEN",
  },
  {
    image: "/img/testmonial/testmonailImg4.webp",
    desc: "Outstanding work. From the initial consultation to the final delivery, every aspect of the project was handled with care and expertise. They exceeded my expectations in terms of quality, efficiency, and professionalism. I couldn’t be happier with the results!",
    name: "MICHAEL TEDDY",
  },
  {
    image: "/img/testmonial/testmonailImg5.webp",
    desc: "Very satisfied with the results. The team was incredibly skilled and knowledgeable, making the entire process seamless and stress-free. They provided excellent support and guidance throughout the project, ensuring that everything met my requirements perfectly. Thank you for the amazing work!",
    name: "ANNA ITURBE",
  },
];

export default function Testmonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-night-950 py-24 text-white sm:py-32 lg:py-40">
      <Wave flip fill="#fff" />
      <Wave fill="#fff" />
      <MapGrid opacity={0.35} />
      <Glow className="-right-24 top-1/4 h-96 w-96" color="bg-magenta-500/25" />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            dark
            align="left"
            eyebrow="Testimonials"
            title="What people say"
            highlight="about us"
            subtitle="We strongly support best practice sharing across our operations around the world and across various transportation sectors."
          />

          {/* avatars double as navigation */}
          <div className="mt-8 flex -space-x-3">
            {testMonailData.map((t, i) => (
              <button
                key={i}
                type="button"
                onClick={() => swiperRef.current?.slideToLoop(i)}
                aria-label={`Show review by ${t.name}`}
                className={`relative h-12 w-12 overflow-hidden rounded-full ring-4 transition duration-300 ${
                  active === i ? "z-10 scale-110 ring-brand-500" : "ring-night-950 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={t.image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <button ref={prevRef} aria-label="Previous review" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-xl transition hover:border-white hover:bg-white hover:text-night-900">
              <IoArrowBack />
            </button>
            <button ref={nextRef} aria-label="Next review" className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-xl shadow-glow transition hover:scale-105">
              <IoArrowForward />
            </button>
          </div>
        </div>

        <Reveal y={40} className="min-w-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActive(s.realIndex)}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            slidesPerView={1}
          >
            {testMonailData.map((story, index) => (
              <SwiperSlide key={index}>
                <figure className="glass relative rounded-[2rem] p-6 sm:p-10">
                  <FaQuoteLeft className="text-4xl text-brand-400/60 sm:text-5xl" />
                  <blockquote className="mt-5 text-base leading-relaxed text-slate-200 sm:text-xl sm:leading-relaxed">
                    {story.desc}
                  </blockquote>
                  <figcaption className="mt-8 flex flex-wrap items-center gap-4">
                    <img src={story.image} alt={story.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20" />
                    <div>
                      <p className="font-display font-bold tracking-wide">{story.name}</p>
                      <p className="text-sm text-slate-400">Customer</p>
                    </div>
                    <div className="ml-auto flex gap-0.5 text-pin-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
