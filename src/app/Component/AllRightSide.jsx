"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { Reveal } from "../ui/motion";

const companyInfo = [
  { label: "Available Villas", value: "12" },
  { label: "Booking Advance", value: "$500" },
  { label: "Contact Number", value: "986516876516" },
  { label: "WhatsApp", value: "65468764879" },
  { label: "Email ID", value: "booking@rolex.com" },
  { label: "Contact Name", value: "Bruce Mecho" },
  { label: "Website", value: "www.relexovillas.com" },
  { label: "Available Plots", value: "32" },
  { label: "Next Project Location", value: "Los Angeles" },
];

function Card({ title, highlight, children, className = "" }) {
  return (
    <Reveal className={`panel p-5 ${className}`}>
      {(title || highlight) && (
        <h3 className="mb-4 text-lg font-bold text-night-900">
          <span className="text-gradient">{highlight}</span> {title}
        </h3>
      )}
      {children}
    </Reveal>
  );
}

export default function AllRightSide({ move }) {
  const [formData, setFormData] = useState({
    enquiry_name: "Rn53 Themes",
    enquiry_email: "info@futureittouch.com",
    enquiry_mobile: "5522114422",
    enquiry_message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="space-y-5">
      <Reveal id={move} className="scroll-mt-40 overflow-hidden rounded-3xl bg-night-900 p-5 text-white shadow-card-hover">
        <h3 className="text-lg font-bold">Get Quote</h3>
        <p className="mt-1 text-xs text-slate-400">The business usually responds within a day.</p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input type="hidden" name="listing_id" value="385" />
          <input type="hidden" name="listing_user_id" value="325" />
          <input type="hidden" name="enquiry_sender_id" value="37" />
          <input type="hidden" name="enquiry_source" value="Website" />
          <input type="text" name="enquiry_name" required placeholder="Enter name*" value={formData.enquiry_name} onChange={handleChange} className="field border-white/10 bg-white/10 text-white focus:bg-white/15" />
          <input type="email" name="enquiry_email" required placeholder="Enter email*" value={formData.enquiry_email} onChange={handleChange} className="field border-white/10 bg-white/10 text-white focus:bg-white/15" />
          <input type="text" name="enquiry_mobile" required placeholder="Enter mobile number *" value={formData.enquiry_mobile} pattern="[7-9]{1}[0-9]{9}" onChange={handleChange} className="field border-white/10 bg-white/10 text-white focus:bg-white/15" />
          <textarea name="enquiry_message" rows="3" placeholder="Enter your query or message" value={formData.enquiry_message} onChange={handleChange} className="field border-white/10 bg-white/10 text-white focus:bg-white/15" />
          <button type="submit" className="btn-primary w-full py-3">Submit</button>
        </form>
      </Reveal>

      <Card highlight="Claim" title="Listing">
        <div className="flex items-center gap-4">
          <img src="/img/dashboard/all5.webp" alt="" className="h-14 w-14 shrink-0 rounded-2xl object-cover" />
          <div>
            <p className="text-sm font-semibold text-night-900">Claim the business</p>
            <Link href="/edit-business" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
              Suggest an edit <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </Card>

      <Reveal className="panel overflow-hidden text-center">
        <div className="relative h-24 bg-brand-gradient">
          <span className="chip absolute left-4 top-4 bg-white/20 text-white">Business Profile</span>
        </div>
        <div className="-mt-12 px-5 pb-6">
          <img src="/img/dashboard/dashbordleft.webp" alt="Profile" className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white" />
          <h4 className="mt-3 text-lg font-bold text-night-900">Rn53 Themes net</h4>
          <p className="mt-1 text-sm text-slate-500">28800 Orchard Lake Road, Suite 180, Farmington Hills, U.S.A</p>
          <div className="mt-4 flex justify-center gap-2">
            {[
              { href: "https://facebook.com", Icon: FaFacebook, label: "Facebook" },
              { href: "https://twitter.com", Icon: FaTwitter, label: "Twitter" },
              { href: "https://wa.me/917508575015", Icon: FaWhatsapp, label: "WhatsApp" },
              { href: "https://linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-mist text-brand-600 transition hover:bg-brand-500 hover:text-white">
                <Icon />
              </a>
            ))}
          </div>
          <Link href="/view-business" className="btn-dark mt-5 w-full">View Profile</Link>
          <p className="mt-3 text-xs text-slate-400">Get in touch with us</p>
        </div>
      </Reveal>

      <Card highlight="Our" title="Location">
        <iframe
          title="Business location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d403760.5698387298!2d-122.43759999999999!3d37.7577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1738742039223!5m2!1sen!2sin"
          className="h-56 w-full rounded-2xl border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Card>

      <Card highlight="Company" title="Info">
        <ul className="divide-y divide-slate-100 text-sm">
          {companyInfo.map((item) => (
            <li key={item.label} className="flex justify-between gap-4 py-2.5">
              <span className="text-slate-500">{item.label}</span>
              <span className="truncate text-right font-semibold text-night-900">{item.value}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Link href="/gallery" className="panel flex items-center gap-4 p-5 transition hover:shadow-card-hover">
        <img src="/img/dashboard/dashbordleft.webp" alt="" className="h-14 w-14 shrink-0 rounded-full object-cover" />
        <div className="flex-1">
          <p className="text-xs text-slate-400">Created by</p>
          <h5 className="font-bold text-night-900">Loki</h5>
          <p className="text-xs text-slate-500">Member Since Feb 2021</p>
        </div>
        <span className="chip bg-pin-400/20 text-amber-600"><FaStar /> 4.2</span>
      </Link>

      <div className="rounded-3xl bg-night-900 p-5 text-center text-white">
        <h3 className="font-bold">Who all are like this</h3>
      </div>
    </div>
  );
}
