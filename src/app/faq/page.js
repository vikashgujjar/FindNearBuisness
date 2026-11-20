"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import BuinessDirectory from "@/app/Component/BuinessDirectory";
import { PageHero } from "@/app/ui/blocks";
import { Stagger, StaggerItem } from "@/app/ui/motion";
let m = "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia";
let u = ["Readable content of Link page when looking", "Readable content of Link page when looking"];
let p = [
  {
    question: "How to create new listing?",
    answer: m,
  },
  {
    question: "How to change free listing to premium listing?",
    answer: m,
    list: u,
  },
  {
    question: "How can I change my user type?",
    answer: m,
    list: u,
  },
  {
    question: "How to make Payment?",
    answer: m,
    list: u,
  },
  {
    question: "How to create Ads?",
    answer: m,
    list: u,
  },
  {
    question: "What is user type?",
    answer: m,
    subAnswers: [
      {
        title: "General User",
        text: m,
      },
      {
        title: "Service provider",
        text: m,
      },
    ],
  },
  {
    question: "How to contact support team?",
    answer: m,
  },
];
function FaqPage() {
  let [e, t] = useState(0);
  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title="Frequently Asked"
        highlight="Questions"
        subtitle={
          'Here you can learn about this "Directory Finder Website" and you can find the solution for your doubts.'
        }
        crumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "FAQ",
          },
        ]}
      />
      <div className="container-x max-w-3xl py-12">
        <Stagger gap={0.06} as="ul" className="space-y-3">
          {p.map((s, a) => {
            let r = e === a;
            return (
              <StaggerItem
                key={a}
                as="li"
                className={`overflow-hidden rounded-3xl transition ${r ? "bg-white shadow-card-hover ring-1 ring-brand-200" : "bg-white ring-1 ring-slate-100"}`}
              >
                <button
                  type="button"
                  onClick={() => t(r ? null : a)}
                  aria-expanded={r}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className={`font-display text-sm font-extrabold ${r ? "text-gradient" : "text-slate-300"}`}>
                      {String(a + 1).padStart(2, "0")}
                    </span>
                    <span className="font-bold text-night-900 sm:text-lg">{s.question}</span>
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 ${r ? "rotate-45 bg-brand-gradient text-white" : "bg-mist text-night-900"}`}
                  >
                    <FaPlus className="text-xs" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {r && (
                    <motion.div
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
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pl-14 text-sm leading-relaxed text-slate-600 sm:text-base">
                        <p>{s.answer}</p>
                        {s.list && (
                          <ol className="mt-3 list-decimal space-y-1 pl-5">
                            {s.list.map((e, t) => (
                              <li key={t}>{e}</li>
                            ))}
                          </ol>
                        )}
                        {s.subAnswers && (
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {s.subAnswers.map((e) => (
                              <div key={e.title} className="rounded-2xl bg-mist p-4">
                                <h5 className="font-bold text-night-900">{e.title}</h5>
                                <p className="mt-1">{e.text}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>
        <div className="mt-8 text-center">
          <Link href="/dashboard" className="btn-dark">
            Go to User Dashboard →
          </Link>
        </div>
      </div>
      <BuinessDirectory />
    </>
  );
}
export default FaqPage;
