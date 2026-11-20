"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { Contours } from "@/app/ui/decor";
import { Reveal } from "@/app/ui/motion";
import { useAuth } from "@/app/context/AuthContext";
import { useFormPost } from "@/app/lib/api";
function StillQuestion() {
  let { user } = useAuth(),
    { status, onSubmit } = useFormPost("/enquiries", (t) => ({
      type: "advertise",
      name: user?.name || "Website visitor",
      email: user?.email || t.email,
      phone: user?.phone || undefined,
      message: t.question,
    }));
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] bg-brand-50 p-6 sm:p-10 lg:grid-cols-2">
        <Contours className="-right-24 -top-24 h-96 w-96" />
        <div className="relative">
          <span className="eyebrow">Support</span>
          <h2 className="mt-3 text-2xl font-extrabold text-night-900 sm:text-3xl">Still having questions?</h2>
          <form onSubmit={onSubmit} className="mt-6">
            {!user && (
              <>
                <label htmlFor="still-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="still-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your email so we can reply"
                  className="field mb-3 bg-white"
                />
              </>
            )}
            <label htmlFor="still-q" className="sr-only">
              Your question
            </label>
            <textarea
              id="still-q"
              name="question"
              required
              className="field h-40 resize-none bg-white"
              placeholder="Write your query here and we’ll get back to you within 2 working days..."
            />
            <div className="mt-3 space-y-2">
              {status?.ok && (
                <p className="text-sm font-semibold text-emerald-600" role="status">
                  {status.ok}
                </p>
              )}
              {status?.error && (
                <p className="text-sm font-semibold text-rose-600" role="alert">
                  {status.error}
                </p>
              )}
            </div>
            <button type="submit" disabled={status?.busy} className="btn-primary mt-3 disabled:opacity-60">
              <FaPaperPlane /> {status?.busy ? "Sending…" : "Submit"}
            </button>
          </form>
        </div>
        <img
          loading="lazy"
          decoding="async"
          src="/img/Advertise/3.svg"
          alt=""
          className="relative mx-auto max-h-80 w-full object-contain"
        />
      </Reveal>
    </section>
  );
}
export default StillQuestion;
