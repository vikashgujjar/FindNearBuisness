"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone, FaXmark } from "react-icons/fa6";
import { FormMessage } from "@/app/Component/DashCrud";
import { useAuth } from "@/app/context/AuthContext";
import { apiFetch, listingHref } from "@/app/lib/api";
import { countContact } from "@/app/lib/category";

const PHONE = { type: "tel", inputMode: "numeric", pattern: "(\\+?91|0)?[6-9][0-9]{9}", title: "10-digit Indian mobile number", autoComplete: "tel" };

// Name and phone, filled in for signed-in users.
function useContact() {
  const { user } = useAuth();
  const [contact, setContact] = useState({ name: "", phone: "" });
  useEffect(() => {
    if (user) setContact((c) => ({ name: c.name || user.name || "", phone: c.phone || user.phone || "" }));
  }, [user]);
  return [contact, (field) => (e) => setContact((c) => ({ ...c, [field]: e.target.value }))];
}

// "Get the list of top…": side card, or a wide card between the listings.
export function LeadForm({ name, slug, city, lead, dates, wide = false }) {
  const id = useId();
  const [contact, set] = useContact();
  const [option, setOption] = useState("");
  const [state, setState] = useState({});
  const options = lead?.options || [];

  const submit = async (e) => {
    e.preventDefault();
    setState({ busy: true });
    try {
      const res = await apiFetch("/category-leads", {
        method: "POST",
        body: { category: slug, city: city || null, option: option || null, name: contact.name, phone: contact.phone, check_in: dates?.from || null, check_out: dates?.to || null },
      });
      setState({ ok: res.message, list: res.data });
    } catch (err) {
      setState({ error: err.message });
    }
  };

  return (
    <div className={`panel p-5 ${wide ? "bg-gradient-to-br from-brand-50 to-white sm:p-7" : ""}`}>
      <h3 className={`font-bold text-night-900 ${wide ? "text-lg" : "text-base"}`}>
        Get the list of top <span className="text-gradient">{name}</span>
      </h3>
      <p className="mt-1 text-xs text-slate-500">See contact details right away, for free.</p>
      <form onSubmit={submit} className="mt-4 space-y-3">
        {options.length > 0 && (
          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-night-900">{lead.question || "What are you looking for?"}</legend>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {options.map((o) => (
                <label key={o} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input type="radio" name={`${id}-option`} checked={option === o} onChange={() => setOption(o)} className="accent-brand-500" />
                  {o}
                </label>
              ))}
            </div>
          </fieldset>
        )}
        <div className={wide ? "grid gap-3 sm:grid-cols-3" : "space-y-3"}>
          <input className="field" required maxLength={120} placeholder="Your name*" aria-label="Your name" autoComplete="name" value={contact.name} onChange={set("name")} />
          <input className="field" required placeholder="Mobile number*" aria-label="Mobile number" value={contact.phone} onChange={set("phone")} {...PHONE} />
          <button type="submit" disabled={state.busy} className="btn-primary w-full disabled:opacity-60">
            {state.busy ? "Please wait…" : "Get best deal"}
          </button>
        </div>
        <FormMessage ok={state.ok} error={state.error} />
      </form>
      {state.list?.length > 0 && (
        <ul className={`mt-4 gap-3 ${wide ? "grid sm:grid-cols-2" : "space-y-3"}`}>
          {state.list.map((l) => (
            <li key={l.id} className="flex items-center justify-between gap-3 rounded-2xl bg-mist p-3 text-sm">
              <Link href={listingHref(l)} className="min-w-0 truncate font-semibold text-night-900 hover:text-brand-600">
                {l.name}
              </Link>
              <a href={`tel:${l.phone}`} onClick={() => countContact(l.id, "call")} className="flex shrink-0 items-center gap-1.5 font-semibold text-emerald-600">
                <FaPhone className="text-xs" />
                {l.phone}
              </a>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-3 text-[11px] leading-snug text-slate-400">By sending this you agree that our team may contact you about your request.</p>
    </div>
  );
}

// "Get best deal" on one listing: sends an enquiry to that business.
export function DealModal({ listing, dates, onClose }) {
  return typeof document === "undefined"
    ? null
    : createPortal(
        <AnimatePresence>{listing && <DealDialog key={listing.id} listing={listing} dates={dates} onClose={onClose} />}</AnimatePresence>,
        document.body,
      );
}

function DealDialog({ listing, dates, onClose }) {
  const titleId = useId();
  const [contact, set] = useContact();
  const [message, setMessage] = useState("");
  const [state, setState] = useState({});
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = async (e) => {
    e.preventDefault();
    setState({ busy: true });
    const when = dates?.from ? `From ${dates.from}${dates.to ? ` to ${dates.to}` : ""}` : "";
    try {
      const res = await apiFetch(`/listings/${listing.id}/enquiries`, {
        method: "POST",
        body: { name: contact.name, phone: contact.phone, message: [when, message].filter(Boolean).join("\n") || null },
      });
      setState({ ok: res.message });
    } catch (err) {
      setState({ error: err.message });
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-night-950/60 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-card-hover"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-mist text-slate-500 hover:text-night-900">
          <FaXmark />
        </button>
        <h2 id={titleId} className="pr-10 text-lg font-bold text-night-900">
          Get the best deal from <span className="text-gradient">{listing.name}</span>
        </h2>
        {listing.response_minutes != null && listing.response_minutes <= 60 && (
          <p className="mt-1 text-xs text-slate-500">Usually responds in {listing.response_minutes} min</p>
        )}
        {state.ok ? (
          <div className="mt-5 space-y-4">
            <FormMessage ok={state.ok} />
            <button type="button" onClick={onClose} className="btn-dark w-full">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 space-y-3">
            <input autoFocus className="field" required maxLength={120} placeholder="Your name*" aria-label="Your name" autoComplete="name" value={contact.name} onChange={set("name")} />
            <input className="field" required placeholder="Mobile number*" aria-label="Mobile number" value={contact.phone} onChange={set("phone")} {...PHONE} />
            <textarea className="field" rows={3} maxLength={1500} placeholder="What do you need? (optional)" aria-label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <FormMessage error={state.error} />
            <button type="submit" disabled={state.busy} className="btn-primary w-full disabled:opacity-60">
              {state.busy ? "Sending…" : "Get best deal"}
            </button>
            <p className="text-[11px] text-slate-400">Your name and number are sent to this business.</p>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
