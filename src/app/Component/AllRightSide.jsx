"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaArrowRight, FaStar as FaStarFa6 } from "react-icons/fa6";
import { Reveal } from "@/app/ui/motion";
import { AdSlot } from "@/app/ui/AdSlot";
import { Avatar } from "@/app/ui/Avatar";
import { useAuth } from "@/app/context/AuthContext";
import { apiFetch, vendorHref, galleryHref, formatDate } from "@/app/lib/api";
function Cv(props) {
  let { title, highlight, children, className = "" } = props;
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
let f = [
  {
    label: "Available Villas",
    value: "12",
  },
  {
    label: "Booking Advance",
    value: "$500",
  },
  {
    label: "Contact Number",
    value: "986516876516",
  },
  {
    label: "WhatsApp",
    value: "65468764879",
  },
  {
    label: "Email ID",
    value: "booking@rolex.com",
  },
  {
    label: "Contact Name",
    value: "Bruce Mecho",
  },
  {
    label: "Website",
    value: "www.relexovillas.com",
  },
  {
    label: "Available Plots",
    value: "32",
  },
  {
    label: "Next Project Location",
    value: "Los Angeles",
  },
];
function AllRightSide(props) {
  var t;
  let { move, listing } = props,
    { user } = useAuth(),
    o = listing?.vendor,
    [c, h] = useState(null),
    [w, j] = useState({
      enquiry_name: "",
      enquiry_email: "",
      enquiry_mobile: "",
      enquiry_message: "",
    });
  useEffect(() => {
    user &&
      j((e) => ({
        ...e,
        enquiry_name: e.enquiry_name || user.name || "",
        enquiry_email: e.enquiry_email || user.email || "",
        enquiry_mobile: e.enquiry_mobile || user.phone || "",
      }));
  }, [user]);
  let y = (e) =>
      j({
        ...w,
        [e.target.name]: e.target.value,
      }),
    N = async (e) => {
      if ((e.preventDefault(), !listing?.id))
        return h({
          error: "This listing can't receive enquiries right now.",
        });
      h({
        busy: true,
      });
      try {
        let e = await apiFetch(`/listings/${listing.id}/enquiries`, {
          method: "POST",
          body: {
            name: w.enquiry_name,
            email: w.enquiry_email,
            phone: w.enquiry_mobile,
            message: w.enquiry_message,
          },
        });
        h({
          ok: e.message,
        }),
          j((e) => ({
            ...e,
            enquiry_message: "",
          }));
      } catch (e) {
        h({
          error: e.message,
        });
      }
    },
    k = listing?.company_info?.length ? listing.company_info : listing?.id ? [] : f,
    S = [
      {
        href: o ? o.facebook : "https://facebook.com",
        Icon: FaFacebook,
        label: "Facebook",
      },
      {
        href: o ? o.twitter : "https://twitter.com",
        Icon: FaTwitter,
        label: "Twitter",
      },
      {
        href: o ? o.whatsapp && `https://wa.me/${o.whatsapp}` : "https://wa.me/917508575015",
        Icon: FaWhatsapp,
        label: "WhatsApp",
      },
      {
        href: o ? o.linkedin : "https://linkedin.com",
        Icon: FaLinkedin,
        label: "LinkedIn",
      },
    ].filter((e) => e.href);
  return (
    <div className="space-y-5">
      <Reveal
        id={move}
        className="scroll-mt-40 overflow-hidden rounded-3xl bg-night-900 p-5 text-white shadow-card-hover"
      >
        <h3 className="text-lg font-bold">Get Quote</h3>
        <p className="mt-1 text-xs text-slate-400">The business usually responds within a day.</p>
        <form onSubmit={N} className="mt-4 space-y-3">
          <input
            type="text"
            name="enquiry_name"
            required
            placeholder="Enter name*"
            value={w.enquiry_name}
            onChange={y}
            className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
          />
          <input
            type="email"
            name="enquiry_email"
            required
            placeholder="Enter email*"
            value={w.enquiry_email}
            onChange={y}
            className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
          />
          <input
            type="text"
            name="enquiry_mobile"
            required
            placeholder="Enter mobile number *"
            value={w.enquiry_mobile}
            pattern="[7-9]{1}[0-9]{9}"
            onChange={y}
            className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
          />
          <textarea
            name="enquiry_message"
            rows="3"
            placeholder="Enter your query or message"
            value={w.enquiry_message}
            onChange={y}
            className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
          />
          {c?.ok && (
            <p className="text-sm font-semibold text-emerald-300" role="status">
              {c.ok}
            </p>
          )}
          {c?.error && (
            <p className="text-sm font-semibold text-rose-300" role="alert">
              {c.error}
            </p>
          )}
          <button type="submit" disabled={c?.busy} className="btn-primary w-full py-3 disabled:opacity-60">
            {c?.busy ? "Sending…" : "Submit"}
          </button>
        </form>
      </Reveal>
      <AdSlot slot="detail_right" />
      <Cv highlight="Claim" title="Listing">
        <div className="flex items-center gap-4">
          <img
            loading="lazy"
            decoding="async"
            src="/img/dashboard/all5.webp"
            alt=""
            className="h-14 w-14 shrink-0 rounded-2xl object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-night-900">Claim the business</p>
            <Link
              href="/edit-business"
              className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
            >
              {"Suggest an edit "}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </Cv>
      <Reveal className="panel overflow-hidden text-center">
        <div className="relative h-24 bg-brand-gradient">
          <span className="chip absolute left-4 top-4 bg-white/20 text-white">Business Profile</span>
        </div>
        <div className="relative -mt-12 px-5 pb-6">
          <Avatar
            src={o ? o.avatar : "/img/dashboard/dashbordleft.webp"}
            name={o?.company_name || o?.name}
            alt="Profile"
            textClass="text-3xl"
            className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white"
          />
          <h4 className="mt-3 text-lg font-bold text-night-900">{o ? o.company_name || o.name : "Rn53 Themes net"}</h4>
          <p className="mt-1 text-sm text-slate-500">
            {listing?.address || "28800 Orchard Lake Road, Suite 180, Farmington Hills, U.S.A"}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {S.map((e) => {
              let { href, Icon, label } = e;
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-mist text-brand-600 transition hover:bg-brand-500 hover:text-white"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <Link href={o ? vendorHref(o.id) : "/view-business"} className="btn-dark mt-5 w-full">
            View Profile
          </Link>
          <p className="mt-3 text-xs text-slate-400">Get in touch with us</p>
        </div>
      </Reveal>
      <Cv highlight="Our" title="Location">
        <iframe
          title="Business location"
          src={
            listing?.map_embed ||
            (listing?.id
              ? `https://maps.google.com/maps?q=${encodeURIComponent(listing.address || listing.city || "")}&output=embed`
              : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d403760.5698387298!2d-122.43759999999999!3d37.7577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1738742039223!5m2!1sen!2sin")
          }
          className="h-56 w-full rounded-2xl border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Cv>
      {k.length > 0 && (
        <Cv highlight="Company" title="Info">
          <ul className="divide-y divide-slate-100 text-sm">
            {k.map((e) => (
              <li key={e.label} className="flex justify-between gap-4 py-2.5">
                <span className="text-slate-500">{e.label}</span>
                <span className="truncate text-right font-semibold text-night-900">{e.value}</span>
              </li>
            ))}
          </ul>
        </Cv>
      )}
      <Link
        href={o ? galleryHref(o.id) : "/gallery"}
        className="panel flex items-center gap-4 p-5 transition hover:shadow-card-hover"
      >
        <Avatar
          src={o ? o.avatar : "/img/dashboard/dashbordleft.webp"}
          name={o?.name}
          alt=""
          textClass="text-lg"
          className="h-14 w-14 shrink-0 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-xs text-slate-400">Created by</p>
          <h5 className="font-bold text-night-900">{o ? o.name : "Loki"}</h5>
          <p className="text-xs text-slate-500">
            {"Member Since "}
            {o
              ? formatDate(o.joined_at, {
                  month: "short",
                  year: "numeric",
                })
              : "Feb 2021"}
          </p>
        </div>
        <span className="chip bg-pin-400/20 text-amber-600">
          <FaStarFa6 /> {listing ? Number(listing.rating || 0).toFixed(1) : "4.2"}
        </span>
      </Link>
      <div className="rounded-3xl bg-night-900 p-5 text-center text-white">
        <h3 className="font-bold">Who all are like this</h3>
      </div>
    </div>
  );
}
export default AllRightSide;
