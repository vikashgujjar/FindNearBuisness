"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { Reveal } from "@/app/ui/motion";
import { useAuth } from "@/app/context/AuthContext";
import { Avatar } from "@/app/ui/Avatar";
import { apiFetch } from "@/app/lib/api";
function splitTitle() {
  let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "",
    t = e.trim().split(/\s+/);
  return t.length > 1
    ? {
        title: t.slice(0, -1).join(" "),
        highlight: t[t.length - 1],
      }
    : {
        title: e,
        highlight: "",
      };
}
function DateBadge(e) {
  if (!e) return null;
  let t = new Date(e);
  return isNaN(t) ? null : (
    <>
      {t
        .toLocaleString("en-US", {
          month: "short",
        })
        .toUpperCase()}
      <br />
      {String(t.getDate()).padStart(2, "0")}
    </>
  );
}
function RegisterForm(props) {
  let { title = "Register Now", type, slug } = props,
    { user } = useAuth(),
    [u, h] = useState({
      name: "",
      email: "",
      mobile: "",
      message: "",
    }),
    [m, g] = useState(null);
  useEffect(() => {
    user &&
      h((e) => ({
        ...e,
        name: e.name || user.name || "",
        email: e.email || user.email || "",
        mobile: e.mobile || user.phone || "",
      }));
  }, [user]);
  let p = (e) =>
      h({
        ...u,
        [e.target.name]: e.target.value,
      }),
    f = async (e) => {
      if ((e.preventDefault(), !type || !slug))
        return g({
          error: "Registration isn't open for this page.",
        });
      g({
        busy: true,
      });
      try {
        let e = await apiFetch(`/${type}/${encodeURIComponent(slug)}/register`, {
          method: "POST",
          body: {
            name: u.name,
            email: u.email,
            phone: u.mobile,
            message: u.message,
          },
        });
        g({
          ok: e.message,
        }),
          h((e) => ({
            ...e,
            message: "",
          }));
      } catch (e) {
        g({
          error: e.message,
        });
      }
    },
    b = (Ce, t) => (
      <label className="relative block">
        <Ce className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />
        {t}
      </label>
    );
  return (
    <Reveal className="overflow-hidden rounded-3xl bg-night-900 p-6 text-white shadow-card-hover">
      <h3 className="text-xl font-bold">{title}</h3>
      <form onSubmit={f} className="mt-5 space-y-3">
        {b(
          FaUser,
          <input
            type="text"
            name="name"
            value={u.name}
            onChange={p}
            required
            placeholder="Enter name*"
            className="field border-white/10 bg-white/10 pl-10 text-white focus:bg-white/15"
          />,
        )}
        {b(
          FaEnvelope,
          <input
            type="email"
            name="email"
            value={u.email}
            onChange={p}
            required
            pattern={"^[\\w]{1,}[\\w.+\\-]{0,}@[\\w\\-]{2,}([.][a-zA-Z]{2,}|[.][\\w\\-]{2,}[.][a-zA-Z]{2,})$"}
            title="Invalid email address"
            placeholder="Enter email*"
            className="field border-white/10 bg-white/10 pl-10 text-white focus:bg-white/15"
          />,
        )}
        {b(
          FaPhone,
          <input
            type="text"
            name="mobile"
            value={u.mobile}
            onChange={p}
            required
            pattern="[7-9]{1}[0-9]{9}"
            title="Phone number should start with 7-9 and contain 10 digits"
            placeholder="Enter mobile number*"
            className="field border-white/10 bg-white/10 pl-10 text-white focus:bg-white/15"
          />,
        )}
        <textarea
          name="message"
          value={u.message}
          onChange={p}
          placeholder="Enter your query or message"
          rows="3"
          className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
        />
        {m?.ok && (
          <p className="text-sm font-semibold text-emerald-300" role="status">
            {m.ok}
          </p>
        )}
        {m?.error && (
          <p className="text-sm font-semibold text-rose-300" role="alert">
            {m.error}
          </p>
        )}
        <button type="submit" disabled={m?.busy} className="btn-primary w-full py-3 disabled:opacity-60">
          {m?.busy ? "Sending…" : "Submit"}
        </button>
      </form>
    </Reveal>
  );
}
function AuthorCard(props) {
  let {
    href = "/gallery",
    name = "Claude D Dial",
    joined = "Joined on Jan 2020",
    image = "/img/blogInner/blogInner.webp",
  } = props;
  return (
    <Link href={href} className="panel block overflow-hidden text-center transition hover:shadow-card-hover">
      <div className="h-20 bg-brand-gradient" />
      <div className="relative -mt-10 px-5 pb-5">
        <Avatar
          src={image}
          name={name}
          alt=""
          textClass="text-2xl"
          className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white"
        />
        <h4 className="mt-2 font-bold text-night-900">{name}</h4>
        <p className="text-xs text-slate-500">{joined}</p>
      </div>
    </Link>
  );
}
let f = [
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    bg: "bg-[#1877F2]",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter",
    bg: "bg-sky-500",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    bg: "bg-emerald-500",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    bg: "bg-[#0A66C2]",
  },
];
function ShareBar(props) {
  let { title = "Share this profile" } = props,
    [n, r] = useState("");
  useEffect(() => r(window.location.href), []);
  let o = {
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(n)}`,
    Twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(n)}`,
    WhatsApp: `https://wa.me/?text=${encodeURIComponent(n)}`,
    LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(n)}`,
  };
  return (
    <Reveal className="panel flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
      <h5 className="font-bold text-night-900">{title}</h5>
      <ul className="grid grid-cols-2 gap-2 sm:flex">
        {f.map((e) => (
          <li key={e.label}>
            <a
              href={n ? o[e.label] : "/gallery"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 ${e.bg}`}
            >
              {e.icon} {e.label}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
function ArticleCover(props) {
  let { image, date, title } = props;
  return (
    <Reveal className="relative overflow-hidden rounded-3xl">
      <img loading="lazy" decoding="async" src={image} alt="" className="aspect-[16/9] w-full object-cover" />
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
export { DateBadge, ArticleCover, RegisterForm, AuthorCard, splitTitle, ShareBar };
