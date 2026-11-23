"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHeadset, FaXmark } from "react-icons/fa6";
import { useApi, useFormPost } from "@/app/lib/api";
let c = [
  {
    value: "19",
    label: "Wedding halls",
  },
  {
    value: "18",
    label: "Hotel & Food",
  },
  {
    value: "17",
    label: "Pet shop",
  },
  {
    value: "16",
    label: "Digital Products",
  },
  {
    value: "15",
    label: "Spa and Facial",
  },
  {
    value: "10",
    label: "Real Estate",
  },
  {
    value: "8",
    label: "Sports",
  },
  {
    value: "7",
    label: "Education",
  },
  {
    value: "6",
    label: "Electricals",
  },
  {
    value: "5",
    label: "Automobiles",
  },
  {
    value: "3",
    label: "Transportation",
  },
  {
    value: "2",
    label: "Hospitals",
  },
  {
    value: "1",
    label: "Hotels And Resorts",
  },
];
let d =
  "w-full rounded-xl border border-slate-200 bg-mist px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10";
function HelpSupport() {
  var e;
  let [t, a] = useState(false),
    { data } = useApi("/categories", {
      auth: false,
      skip: !t,
    }),
    x = data?.data?.length
      ? data.data.map((e) => ({
          value: e.slug,
          label: e.name,
        }))
      : c,
    { status, onSubmit } = useFormPost("/enquiries", (e) => ({
      type: "support",
      name: e.enquiry_name,
      email: e.enquiry_email,
      phone: e.enquiry_mobile,
      category: e.enquiry_category || undefined,
      message: e.enquiry_message,
    }));
  useEffect(() => {
    let open = () => a(true);
    window.addEventListener("findbee:help", open);
    return () => window.removeEventListener("findbee:help", open);
  }, []);
  return (
    <div className="hidden md:block [@media(max-height:500px)]:hidden">
      <AnimatePresence>
        {!t && (
          <motion.button
            key={"fab"}
            type="button"
            onClick={() => a(true)}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            className="group fixed bottom-6 right-6 z-[55] flex items-center gap-2 rounded-full bg-brand-gradient py-3 pl-3 pr-5 text-sm font-bold text-white shadow-glow"
          >
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white/20">
              <span className="absolute inset-0 animate-ping-slow rounded-full bg-white/40" />
              <FaHeadset />
            </span>
            {"Help & Support"}
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {t && (
          <motion.div
            key={"panel"}
            role="dialog"
            aria-label="Help and support"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            className="fixed bottom-6 right-6 z-[100] w-[min(380px,calc(100vw-48px))] overflow-hidden rounded-3xl bg-white shadow-card-hover"
          >
            <div className="relative overflow-hidden bg-night-900 px-6 pb-5 pt-6 text-white">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-magenta-500/40 blur-2xl"
              />
              <button
                type="button"
                onClick={() => a(false)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <FaXmark />
              </button>
              <p className="text-xs text-slate-300">What service do you need?</p>
              <h3 className="mt-1 text-lg font-bold">Findbee will help you</h3>
            </div>
            <form onSubmit={onSubmit} className="max-h-[60vh] space-y-3 overflow-y-auto p-6">
              <input type="text" name="enquiry_name" placeholder="Enter name*" required className={d} />
              <input
                type="email"
                name="enquiry_email"
                placeholder="Enter email*"
                required
                pattern={"^[\\w]{1,}[\\w.+\\-]{0,}@[\\w\\-]{2,}([.][a-zA-Z]{2,}|[.][\\w\\-]{2,}[.][a-zA-Z]{2,})$"}
                title="Invalid email address"
                className={d}
              />
              <input
                type="text"
                name="enquiry_mobile"
                placeholder="Enter mobile number *"
                required
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number starting with 7-9 and remaining 9 digits with 0-9"
                className={d}
              />
              <select name="enquiry_category" className={d} defaultValue="">
                <option value="">Select Category</option>
                {x.map((e) => (
                  <option key={e.value} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <textarea name="enquiry_message" placeholder="Enter your query or message" rows="3" className={d} />
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
              <button type="submit" disabled={status?.busy} className="btn-primary w-full py-3 disabled:opacity-60">
                {status?.busy ? "Sending…" : "Submit Requirements"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default HelpSupport;
