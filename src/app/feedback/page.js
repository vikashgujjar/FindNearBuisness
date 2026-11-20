"use client";

import { FaCircleCheck } from "react-icons/fa6";
import BuinessDirectory from "@/app/Component/BuinessDirectory";
import { PageHero } from "@/app/ui/blocks";
import { Reveal } from "@/app/ui/motion";
import { useFormPost } from "@/app/lib/api";
let o = [
  {
    img: "/img/social/fb.webp",
    alt: "Facebook",
  },
  {
    img: "/img/social/linkdinFuture.webp",
    alt: "LinkedIn",
  },
  {
    img: "/img/social/twitter.webp",
    alt: "Twitter",
  },
  {
    img: "/img/social/whatsapp.webp",
    alt: "WhatsApp",
  },
];
function FeedbackPage() {
  let { status, onSubmit } = useFormPost("/feedback", (e) => ({
    name: e.feedback_name,
    email: e.feedback_email,
    phone: e.feedback_mobile,
    message: e.feedback_message,
  }));
  return (
    <>
      <PageHero
        eyebrow="We're listening"
        title="Send your"
        highlight="feedback"
        subtitle="Your feedback is most important for us."
        crumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Feedback",
          },
        ]}
        waveFill="#F3F8FE"
      />
      <div className="bg-mist pb-4">
        <Reveal className="container-x">
          <div className="panel grid overflow-hidden lg:grid-cols-2">
            <form onSubmit={onSubmit} className="space-y-4 p-6 sm:p-10">
              <h2 className="text-2xl font-extrabold text-night-900">Send your feedbacks</h2>
              <input type="text" placeholder="Your Name*" name="feedback_name" className="field" required />
              <input
                type="email"
                placeholder="Email Address*"
                name="feedback_email"
                pattern={"^[\\w]{1,}[\\w.+\\-]{0,}@[\\w\\-]{2,}([.][a-zA-Z]{2,}|[.][\\w\\-]{2,}[.][a-zA-Z]{2,})$"}
                title="Invalid email address"
                className="field"
                required
              />
              <input
                type="text"
                placeholder="Mobile Number*"
                name="feedback_mobile"
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number must start with 7-9 and have 10 digits"
                className="field"
                required
              />
              <textarea
                name="feedback_message"
                placeholder="Write your feedback here*"
                className="field"
                rows="4"
                required
              />
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
              <button type="submit" disabled={status?.busy} className="btn-primary px-7 py-3 disabled:opacity-60">
                {status?.busy ? "Sending…" : "Submit Feedback"}
              </button>
            </form>
            <div className="relative overflow-hidden bg-night-900 p-6 text-white sm:p-10">
              <img
                loading="lazy"
                decoding="async"
                src="/img/feedback/feedback.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-magenta-500/40 blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl font-extrabold">Your feedback</h2>
                <p className="mt-3 text-slate-300">
                  Your feedback is most important for us. There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some form, by injected humour
                </p>
                <ul className="mt-6 flex gap-3">
                  {o.map((e) => (
                    <li key={e.alt}>
                      <a
                        href="/feedback"
                        aria-label={e.alt}
                        className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-white/20"
                      >
                        <img loading="lazy" decoding="async" src={e.img} alt="" className="h-5 w-5 object-contain" />
                      </a>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 text-lg font-bold">Why send feedback?</h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <FaCircleCheck className="text-cyan-300" />
                    {" Useful for feature updates"}
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCircleCheck className="text-cyan-300" />
                    {" Helps us understand customer needs"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <BuinessDirectory />
    </>
  );
}
export default FeedbackPage;
