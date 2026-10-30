"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaUser, FaConciergeBell, FaImages, FaGift, FaGlobe, FaStar, FaRegCommentDots,
  FaFacebook, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope,
} from "react-icons/fa";
import { FaWhatsapp, FaLocationDot, FaCircleCheck } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import AllRightSide from "./AllRightSide";
import { Glow, MapGrid } from "../ui/decor";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";

const navItems = [
  { id: "ld-abo", label: "About", icon: <FaUser /> },
  { id: "ld-ser", label: "Services", icon: <FaConciergeBell /> },
  { id: "ld-gal", label: "Gallery", icon: <FaImages /> },
  { id: "ld-off", label: "Offers", icon: <FaGift /> },
  { id: "ld-360", label: "360 View", icon: <FaGlobe /> },
  { id: "ld-rev", label: "Write Review", icon: <FaStar /> },
];

const areas = ["Sablon", "Saco", "Santa Cruz Garden", "Napa County", "Los Angeles County", "Franco County", "Monterey County"];

const reviews = [
  {
    id: 1,
    name: "Rn53 Themes",
    date: "07, Mar 2021",
    rating: 5,
    image: "/img/dashboard/alll4.webp",
    review:
      "Rolexo Villas is well-known to all as a premier builder of villas and apartments. Even though they have various departments they stay united in giving the customers the best service. I really had a good service right from on time delivery, quality of work, perfection in work completion. The relationship does not end in just in hand over but they stand strong in all tuff times for the commitment given. After 3+ years of handover they addressed the compound wall cracks which expanded and in a week condition. They still respond to any queries / faults on time and track it to closure.",
  },
];

const ratingBars = [
  { label: "Excellent", width: "100%", color: "bg-emerald-500" },
  { label: "Good", width: "80%", color: "bg-emerald-400" },
  { label: "Satisfactory", width: "60%", color: "bg-pin-400" },
  { label: "Below Average", width: "40%", color: "bg-orange-400" },
  { label: "Poor", width: "20%", color: "bg-magenta-500" },
];

function Block({ id, title, highlight, children }) {
  return (
    <Reveal as="section" id={id} className="panel scroll-mt-40 p-5 sm:p-7">
      <h2 className="mb-5 text-xl font-bold text-night-900 sm:text-2xl">
        <span className="text-gradient">{highlight}</span> {title}
      </h2>
      {children}
    </Reveal>
  );
}

export default function All() {
  const [rating, setRating] = useState(3);
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [formData, setFormData] = useState({
    reviewName: "Rn53 Themes",
    reviewMobile: "5522114422",
    reviewEmail: "info@futureittouch.com",
    reviewCity: "",
    reviewMessage: "",
  });

  // Highlight the section currently on screen in the sticky nav.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", formData);
  };

  return (
    <div className="bg-mist">
      {/* cover */}
      <section className="relative overflow-hidden bg-night-950 text-white">
        <img src="/img/dashboard/all1.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/80 to-night-950/40" />
        <MapGrid opacity={0.4} />
        <Glow className="-right-20 -top-20 h-80 w-80" color="bg-magenta-500/30" />

        <Stagger onLoad gap={0.08} className="container-x relative flex flex-col gap-6 py-10 sm:py-14 lg:flex-row lg:items-end lg:justify-between">
          <StaggerItem className="flex flex-col gap-5 sm:flex-row sm:items-end">
            <img src="/img/dashboard/all1.webp" alt="Rolexo Villas" className="h-24 w-24 shrink-0 rounded-3xl object-cover ring-4 ring-white/20 sm:h-32 sm:w-32" />
            <div>
              <span className="chip bg-emerald-500 text-white">Open now</span>
              <h1 className="mt-2 flex flex-wrap items-center gap-2 text-2xl font-extrabold sm:text-4xl">
                Rolexo Villas in California <FaCircleCheck className="text-xl text-cyan-300" title="Verified" />
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                <span className="chip bg-pin-500 text-night-900">5.0</span>
                <span className="flex gap-0.5 text-pin-400">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</span>
                <span className="text-slate-300">526 Reviews</span>
              </div>
              <p className="mt-3 flex gap-2 text-sm text-slate-300">
                <FaLocationDot className="mt-0.5 shrink-0 text-magenta-400" /> 28800 Orchard Lake Road, Suite 180, Farmington Hills, U.S.A.
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                <FaEnvelope className="text-cyan-300" /> thedirectoryfinder@gmail.com
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <a href="tel:7904462944" className="btn-primary"><FaPhoneAlt /> Call Now</a>
            <a href="https://wa.me/7904462944" target="_blank" rel="noopener noreferrer" className="btn-dark bg-emerald-500 hover:bg-emerald-600"><FaWhatsapp /> WhatsApp</a>
            <button type="button" className="btn-dark bg-white/10 hover:bg-white/20"><IoIosThumbsUp /> 1 Like</button>
            <a href="#quote" className="btn-dark bg-white/10 hover:bg-white/20"><FaRegCommentDots /> Get Quote</a>
          </StaggerItem>
        </Stagger>
      </section>

      {/* sticky section nav */}
      <nav aria-label="Listing sections" className="sticky top-16 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl lg:top-[76px]">
        <ul className="container-x no-scrollbar flex gap-1 overflow-x-auto py-2">
          {navItems.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeId === item.id ? "bg-night-900 text-white" : "text-slate-500 hover:bg-mist hover:text-night-900"
                }`}
              >
                <span className="text-xs">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-x grid gap-6 py-8 lg:grid-cols-[1fr_360px] lg:py-12">
        <div className="min-w-0 space-y-6">
          <Block id="ld-abo" highlight="About" title="Rolexo Villas in California">
            <div className="mb-4 flex gap-2">
              {[FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin].map((Icon, i) => (
                <span key={i} className="grid h-9 w-9 place-items-center rounded-full bg-mist text-brand-600"><Icon /></span>
              ))}
            </div>
            <p className="leading-relaxed text-slate-600">
              <b className="text-night-900">Rolexo Villas in California</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum....
            </p>
          </Block>

          <Block id="ld-ser" highlight="Service" title="Offered">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="group relative overflow-hidden rounded-2xl">
                  <img src={`/img/dashboard/offered${num}.webp`} alt="Villas Plots" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white">Villas Plots</h3>
                </div>
              ))}
            </div>
            <h3 className="mb-3 mt-7 font-bold text-night-900">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span key={area} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600">{area}</span>
              ))}
            </div>
          </Block>

          <Block id="ld-gal" highlight="Photo" title="Gallery">
            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} loop modules={[Autoplay, Pagination]} className="deals-swiper overflow-hidden rounded-2xl !pb-8">
              {["/img/photoGallery/gallery3.webp", "/img/photoGallery/gallery1.webp", "/img/photoGallery/gallery2.webp"].map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={src} alt={`Gallery image ${i + 1}`} className="aspect-[16/9] w-full rounded-2xl object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Block>

          <Block id="ld-off" highlight="Special" title="Offers">
            <div className="flex flex-col gap-5 rounded-2xl bg-mist p-4 sm:flex-row">
              <img src="/img/dashboard/all1.webp" alt="" className="aspect-video w-full rounded-xl object-cover sm:w-56" />
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-night-900">Villa Offer 10%</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Special booking March offer. It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <span className="mt-3 font-display text-2xl font-extrabold text-gradient">$5000</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/all" className="btn-dark btn-sm">View More</Link>
                  <a href="#quote" className="btn-primary btn-sm">Send Enquiry</a>
                </div>
              </div>
            </div>
          </Block>

          <Block id="ld-360" highlight="360" title="Degree View">
            <iframe
              title="360-degree view"
              src="https://www.google.com/maps/embed?pb=!4v1615094507523!6m8!1m7!1sCAoSLEFGMVFpcFAxZ0hoalZZU25Wb2xDbVVROWdZNlYxWnc2UGU1YjVDckVjeEYz!2m2!1d37.779626!2d-122.5134699!3f256.26044!4f13.954989999999995!5f0.7820865974627469"
              className="h-72 w-full rounded-2xl border-0 sm:h-96"
              allowFullScreen
              loading="lazy"
            />
          </Block>

          <Block id="ld-rev" highlight="Write Your" title="Review">
            <p className="text-sm text-slate-500">Writing great reviews may help others discover the places that are just apt for them. Here are a few tips to write a good review:</p>
            <div className="my-5 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" onClick={() => setRating(star)} aria-label={`${star} star`} className="p-0.5 text-2xl transition hover:scale-125">
                  <FaStar className={star <= rating ? "text-pin-500" : "text-slate-300"} />
                </button>
              ))}
              <span className="ml-2 text-sm font-semibold text-slate-500">{rating} Star</span>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
              <input type="text" name="reviewName" value={formData.reviewName} readOnly className="field" placeholder="Name" />
              <input type="text" name="reviewMobile" value={formData.reviewMobile} readOnly className="field" placeholder="Mobile Number" />
              <input type="email" name="reviewEmail" value={formData.reviewEmail} readOnly className="field" placeholder="Email" />
              <input type="text" name="reviewCity" value={formData.reviewCity} onChange={handleChange} className="field" placeholder="City" />
              <textarea name="reviewMessage" value={formData.reviewMessage} onChange={handleChange} className="field sm:col-span-2" placeholder="Write your review" rows="4" />
              <button type="submit" className="btn-primary sm:col-span-2 sm:justify-self-start">Submit Review</button>
            </form>
          </Block>

          <Reveal className="panel p-5 sm:p-7">
            <h2 className="mb-5 text-xl font-bold text-night-900 sm:text-2xl"><span className="text-gradient">User</span> Reviews</h2>
            <div className="grid gap-6 md:grid-cols-[200px_1fr]">
              <div className="rounded-2xl bg-night-900 p-5 text-center text-white">
                <p className="font-display text-5xl font-extrabold">5.0</p>
                <div className="mt-2 flex justify-center gap-0.5 text-pin-400">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                <p className="mt-2 text-xs text-slate-400">based on {reviews.length} reviews</p>
              </div>
              <ul className="space-y-2.5">
                {ratingBars.map((b) => (
                  <li key={b.label} className="grid grid-cols-[110px_1fr] items-center gap-3 text-sm text-slate-600">
                    <span>{b.label}</span>
                    <span className="h-2.5 overflow-hidden rounded-full bg-mist">
                      <span className={`block h-full rounded-full ${b.color}`} style={{ width: b.width }} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="mt-6 space-y-4">
              {reviews.map((review) => (
                <li key={review.id} className="flex gap-4 rounded-2xl bg-mist p-4">
                  <img src={review.image} alt={review.name} className="h-12 w-12 shrink-0 rounded-full object-cover" />
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3">
                      <h3 className="font-bold text-night-900">{review.name}</h3>
                      <span className="flex gap-0.5 text-xs text-pin-500">{[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}</span>
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{review.review}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="panel p-5 sm:p-7">
            <h2 className="mb-5 text-xl font-bold text-night-900 sm:text-2xl">Related listings</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Core real estates", "Museo Villas and Plots", "ccc"].map((name) => (
                <Link key={name} href="/all" className="group overflow-hidden rounded-2xl bg-mist">
                  <img src="/img/dashboard/allBottom.webp" alt={name} className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105" />
                  <p className="p-3 font-semibold text-night-900">{name}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        <aside className="min-w-0">
          <AllRightSide move="quote" />
        </aside>
      </div>
    </div>
  );
}
