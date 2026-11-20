"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { DashCard } from "@/app/ui/blocks";
let h = [
  {
    question: "How to create new listing?",
    answer:
      "You can create a new listing by navigating to the 'Create Listing' page and filling out the required details.",
  },
  {
    question: "How to change free listing to premium listing?",
    answer: "Upgrade your listing by selecting the premium package in your account settings.",
  },
  {
    question: "How can I change my user type?",
    answer: "Go to your profile settings and select the appropriate user type.",
  },
  {
    question: "How to make Payment?",
    answer: "Payments can be made using credit cards, PayPal, or other available payment methods.",
  },
  {
    question: "How to create Ads?",
    answer: "Ads can be created from the Ads section in your dashboard.",
  },
  {
    question: "What is user type?",
    answer: "User types include General User and Service Provider, each with different access levels.",
  },
  {
    question: "How to contact support team?",
    answer: "You can reach our support team through the contact form or support email available on the website.",
  },
];
function How() {
  let [e, t] = useState(0);
  return (
    <CommonDashLayout>
      <DashCard
        badge="How to's"
        title={"Help & how-to guides"}
        action={
          <Link href="/faq" className="btn-ghost btn-sm">
            Full FAQ
          </Link>
        }
      >
        <p className="-mt-2 mb-5 text-sm text-slate-500">
          Here you can learn about this "Directory Finder Website" and find solutions for your doubts.
        </p>
        <ul className="space-y-2">
          {h.map((s, n) => {
            let r = e === n;
            return (
              <li key={n} className={`rounded-2xl transition ${r ? "bg-mist" : "hover:bg-mist/60"}`}>
                <button
                  type="button"
                  onClick={() => t(r ? null : n)}
                  aria-expanded={r}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-night-900"
                >
                  {s.question}
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${r ? "rotate-45 bg-brand-gradient text-white" : "bg-white text-night-900 ring-1 ring-slate-200"}`}
                  >
                    <FaPlus className="text-[10px]" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {r && (
                    <motion.p
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="overflow-hidden px-4 text-sm text-slate-600"
                    >
                      <span className="block pb-4">{s.answer}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </DashCard>
    </CommonDashLayout>
  );
}
export default How;
