import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import BusinessDirectory from "../Component/BuinessDirectory";
import { PageHero } from "../ui/page";
import { Reveal } from "../ui/motion";

const socials = [
  { img: "/img/social/fb.webp", alt: "Facebook" },
  { img: "/img/social/linkdinFuture.webp", alt: "LinkedIn" },
  { img: "/img/social/twitter.webp", alt: "Twitter" },
  { img: "/img/social/whatsapp.webp", alt: "WhatsApp" },
];

export default function page() {
  return (
    <>
      <PageHero
        eyebrow="We're listening"
        title="Send your"
        highlight="feedback"
        subtitle="Your feedback is most important for us."
        crumbs={[{ label: "Home", href: "/" }, { label: "Feedback" }]}
        waveFill="#F4F5FB"
      />

      <div className="bg-mist pb-4">
        <Reveal className="container-x">
          <div className="panel grid overflow-hidden lg:grid-cols-2">
            <form className="space-y-4 p-6 sm:p-10">
              <h2 className="text-2xl font-extrabold text-night-900">Send your feedbacks</h2>
              <input type="text" placeholder="Your Name*" name="feedback_name" className="field" required />
              <input
                type="email"
                placeholder="Email Address*"
                name="feedback_email"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                title="Invalid email address"
                className="field"
                required
              />
              <input type="text" placeholder="Mobile Number*" name="feedback_mobile" pattern="[7-9]{1}[0-9]{9}" title="Phone number must start with 7-9 and have 10 digits" className="field" required />
              <textarea name="feedback_message" placeholder="Write your feedback here*" className="field" rows="4" required />
              <button type="submit" className="btn-primary px-7 py-3">Submit Feedback</button>
            </form>

            <div className="relative overflow-hidden bg-night-900 p-6 text-white sm:p-10">
              <img src="/img/feedback/feedback.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-magenta-500/40 blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl font-extrabold">Your feedback</h2>
                <p className="mt-3 text-slate-300">
                  Your feedback is most important for us. There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour
                </p>
                <ul className="mt-6 flex gap-3">
                  {socials.map((s) => (
                    <li key={s.alt}>
                      <a href="/feedback" aria-label={s.alt} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-white/20">
                        <img src={s.img} alt="" className="h-5 w-5 object-contain" />
                      </a>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 text-lg font-bold">Why send feedback?</h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                  <li className="flex items-center gap-2"><FaCircleCheck className="text-cyan-300" /> Useful for feature updates</li>
                  <li className="flex items-center gap-2"><FaCircleCheck className="text-cyan-300" /> Helps us understand customer needs</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <BusinessDirectory />
    </>
  );
}
