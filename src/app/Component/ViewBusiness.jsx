"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp, FaFileInvoice } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Glow, MapGrid } from "../ui/decor";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";

const services = [
  { title: "Classified Templates", text: "Kick start your online presence with Bizbook Classified Templates. Template includes Classified ads, listing, products, events, blogs & community. Try it today!" },
  { title: "HTML Templates", text: "We design most beautiful website templates with the latest trend and user-friendly websites." },
  { title: "Custom Websites", text: "We are the leading custom website developers and custom HTML websites are usually the most important thing about an online presence." },
  { title: "Template Customization", text: "We offer professional website template customization for the templates we built and released here at styleshout. Choose a template and submit to us the customization requirements and we will work on the design until the desired result is achieved." },
  { title: "Available for freelance", text: "Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC." },
  { title: "Custom Directory Template", text: "We have to directory templates \"The Directory\" and \"Future Touch Directory Template\", If you are interested in our directory template and need any template related customization or addition work we will help you to integrate this." },
  { title: "Website re-design", text: "Are you looking for a website redesign? Our expert web designers can build attractive and wonderful websites for sustainable brands." },
];

const socials = [
  { href: "https://www.facebook.com/53themes", Icon: FaFacebookF, label: "Facebook" },
  { href: "https://twitter.com/53themes", Icon: FaTwitter, label: "Twitter" },
  { href: "https://wa.me/98769876987", Icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg", Icon: FaYoutube, label: "YouTube" },
];

export default function ViewBusiness() {
  const [formData, setFormData] = useState({ enquiry_name: "", enquiry_email: "", enquiry_mobile: "", enquiry_message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-mist">
      {/* cover + identity */}
      <section className="relative overflow-hidden bg-night-950 text-white">
        <img src="/img/viewBusiness/business.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/75 to-night-950/30" />
        <MapGrid opacity={0.35} />
        <Glow className="-right-20 top-0 h-80 w-80" color="bg-magenta-500/30" />
        <Stagger onLoad className="container-x relative flex flex-col gap-6 pb-10 pt-16 sm:pt-24 lg:flex-row lg:items-end">
          <StaggerItem>
            <img src="/img/viewBusiness/rn.webp" alt="Business logo" className="h-24 w-24 rounded-3xl bg-white object-contain p-2 sm:h-32 sm:w-32" />
          </StaggerItem>
          <StaggerItem className="min-w-0 flex-1">
            <h1 className="flex flex-wrap items-center gap-2 text-3xl font-extrabold sm:text-4xl">
              Rn53 Themes Net <FaCircleCheck className="text-xl text-cyan-300" />
            </h1>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><FaMapMarkerAlt className="mt-0.5 shrink-0 text-magenta-400" />28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A</li>
              <li className="flex flex-wrap gap-x-5 gap-y-2">
                <a href="tel:8765768675" className="flex items-center gap-2 hover:text-white"><FaPhone className="text-cyan-300" /> 8765768675</a>
                <a href="mailto:info@futureittouch.com" className="flex items-center gap-2 hover:text-white"><FaEnvelope className="text-brand-400" /> info@futureittouch.com</a>
                <a href="https://www.rn53themes.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><FaGlobe className="text-pin-400" /> www.rn53themes.net</a>
                <span className="flex items-center gap-2"><FaFileInvoice className="text-slate-400" /> Tax no: TX6543 HYG76</span>
              </li>
            </ul>
            <ul className="mt-4 flex gap-2">
              {socials.map(({ href, Icon, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Icon /></a>
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem className="grid grid-cols-3 gap-2 sm:flex">
            <a href="#home_enquiry_form" className="btn-primary">Get Quote</a>
            <a href="tel:8765768675" className="btn-dark bg-white/10 hover:bg-white/20">Call Now</a>
            <a href="https://wa.me/98769876987" target="_blank" rel="noopener noreferrer" className="btn-dark bg-emerald-500 hover:bg-emerald-600">WhatsApp</a>
          </StaggerItem>
        </Stagger>
      </section>

      <div className="container-x grid gap-6 py-10 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0 space-y-6">
          <Reveal className="panel p-6 sm:p-8">
            <span className="eyebrow">About Company</span>
            <h2 className="mt-3 text-2xl font-extrabold text-night-900 sm:text-3xl">Feel the professional Rn53 Themes - Easy to build your web presence</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Official website of Rn53 Themes, Affiliated to <Link href="/view-business" className="font-semibold text-brand-600">Themeforest</Link>. We provide the best
              HTML and <Link href="/view-business" className="font-semibold text-brand-600">fully functional website</Link> templates. Our services include template
              customization, custom template design, directory PHP template, HTML to PHP conversions, and more. We are one of the best web development team we always
              interesting to develop beautiful websites.
            </p>
            <Stagger gap={0.05} className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((s, i) => (
                <StaggerItem key={s.title} className="rounded-2xl bg-mist p-5">
                  <span className="font-display text-sm font-extrabold text-gradient">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-bold text-night-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            <Reveal className="panel overflow-hidden">
              <h2 className="px-5 pt-5 text-lg font-bold text-night-900">Products</h2>
              <Link href="/products-inner" className="group block p-5">
                <img src="/img/viewBusiness/product1.webp" alt="Product" className="aspect-video w-full rounded-2xl object-cover" />
                <h4 className="mt-3 font-semibold text-night-900 group-hover:text-brand-600">8 x 4 Metal Trailer - Exc Tyres</h4>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="font-bold text-night-900">$400</span>
                  <span className="text-slate-400 line-through">$500</span>
                  <span className="chip bg-magenta-500 text-white">20% off</span>
                </div>
              </Link>
            </Reveal>
            <Reveal className="panel overflow-hidden" delay={0.1}>
              <h2 className="px-5 pt-5 text-lg font-bold text-night-900">Events</h2>
              <Link href="/events-inner" className="group block p-5">
                <img src="/img/viewBusiness/product2.webp" alt="Event" className="aspect-video w-full rounded-2xl object-cover" />
                <h4 className="mt-3 font-semibold text-night-900 group-hover:text-brand-600">Digital Marketing Seminar 2020</h4>
              </Link>
            </Reveal>
            <Reveal className="panel overflow-hidden" delay={0.2}>
              <h2 className="px-5 pt-5 text-lg font-bold text-night-900">Blogs</h2>
              <Link href="/blog-inner" className="group block p-5">
                <img src="/img/viewBusiness/product3.webp" alt="Blog" className="aspect-video w-full rounded-2xl object-cover" />
                <h4 className="mt-3 font-semibold text-night-900 group-hover:text-brand-600">Digital Marketing</h4>
              </Link>
            </Reveal>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal className="rounded-3xl bg-night-900 p-6 text-white shadow-card-hover">
            <h4 className="text-xl font-bold">Send Enquiry</h4>
            <form name="home_enquiry_form" id="home_enquiry_form" onSubmit={handleSubmit} className="mt-5 scroll-mt-32 space-y-3">
              <input type="hidden" name="enquiry_source" value="Website" />
              <input type="text" name="enquiry_name" required placeholder="Enter name*" value={formData.enquiry_name} onChange={handleChange} className="field border-white/10 bg-white/10 text-white focus:bg-white/15" />
              <input
                type="email"
                name="enquiry_email"
                required
                placeholder="Enter email*"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                title="Invalid email address"
                value={formData.enquiry_email}
                onChange={handleChange}
                className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
              />
              <input
                type="text"
                name="enquiry_mobile"
                required
                placeholder="Enter mobile number *"
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number must start with 7-9 and be 10 digits long"
                value={formData.enquiry_mobile}
                onChange={handleChange}
                className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
              />
              <textarea name="enquiry_message" rows="3" placeholder="Enter your query or message" value={formData.enquiry_message} onChange={handleChange} className="field border-white/10 bg-white/10 text-white focus:bg-white/15" />
              <button type="submit" className="btn-primary w-full py-3">Submit</button>
            </form>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
