"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { Reveal } from "../ui/motion";

// Shared pieces for the event and blog detail pages.

export function RegisterForm({ title = "Register Now" }) {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const withIcon = (Icon, input) => (
    <label className="relative block">
      <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />
      {input}
    </label>
  );

  return (
    <Reveal className="overflow-hidden rounded-3xl bg-night-900 p-6 text-white shadow-card-hover">
      <h3 className="text-xl font-bold">{title}</h3>
      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        {withIcon(FaUser, <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter name*" className="field border-white/10 bg-white/10 pl-10 text-white focus:bg-white/15" />)}
        {withIcon(
          FaEnvelope,
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
            title="Invalid email address"
            placeholder="Enter email*"
            className="field border-white/10 bg-white/10 pl-10 text-white focus:bg-white/15"
          />
        )}
        {withIcon(
          FaPhone,
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[7-9]{1}[0-9]{9}"
            title="Phone number should start with 7-9 and contain 10 digits"
            placeholder="Enter mobile number*"
            className="field border-white/10 bg-white/10 pl-10 text-white focus:bg-white/15"
          />
        )}
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your query or message" rows="3" className="field border-white/10 bg-white/10 text-white focus:bg-white/15" />
        <button type="submit" className="btn-primary w-full py-3">Submit</button>
      </form>
    </Reveal>
  );
}

export function AuthorCard({ href = "/gallery", name = "Claude D Dial", joined = "Joined on Jan 2020", image = "/img/blogInner/blogInner.webp" }) {
  return (
    <Link href={href} className="panel block overflow-hidden text-center transition hover:shadow-card-hover">
      <div className="h-20 bg-brand-gradient" />
      <div className="-mt-10 px-5 pb-5">
        <img src={image} alt="" className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white" />
        <h4 className="mt-2 font-bold text-night-900">{name}</h4>
        <p className="text-xs text-slate-500">{joined}</p>
      </div>
    </Link>
  );
}

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", bg: "bg-[#1877F2]" },
  { icon: <FaTwitter />, label: "Twitter", bg: "bg-sky-500" },
  { icon: <FaWhatsapp />, label: "WhatsApp", bg: "bg-emerald-500" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", bg: "bg-[#0A66C2]" },
];

export function ShareBar({ title = "Share this profile" }) {
  return (
    <Reveal className="panel flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
      <h5 className="font-bold text-night-900">{title}</h5>
      <ul className="grid grid-cols-2 gap-2 sm:flex">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a href="/gallery" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 ${link.bg}`}>
              {link.icon} {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

// Cover image with date stamp.
export function ArticleCover({ image, date, title }) {
  return (
    <Reveal className="relative overflow-hidden rounded-3xl">
      <img src={image} alt="" className="aspect-[16/9] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-5 sm:p-7">
        <span className="rounded-2xl bg-brand-gradient px-3 py-2 text-center font-display text-sm font-extrabold leading-tight text-white shadow-glow">
          {date}
        </span>
        <h2 className="text-xl font-extrabold text-white sm:text-3xl">{title}</h2>
      </div>
    </Reveal>
  );
}
