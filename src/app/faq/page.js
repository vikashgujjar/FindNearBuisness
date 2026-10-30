"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import BusinessDirectory from "../Component/BuinessDirectory";
import { PageHero } from "../ui/page";
import { Stagger, StaggerItem } from "../ui/motion";

const answer = "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia";
const list = ["Readable content of Link page when looking", "Readable content of Link page when looking"];

const faq = [
  { question: "How to create new listing?", answer },
  { question: "How to change free listing to premium listing?", answer, list },
  { question: "How can I change my user type?", answer, list },
  { question: "How to make Payment?", answer, list },
  { question: "How to create Ads?", answer, list },
  {
    question: "What is user type?",
    answer,
    subAnswers: [
      { title: "General User", text: answer },
      { title: "Service provider", text: answer },
    ],
  },
  { question: "How to contact support team?", answer },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title="Frequently Asked"
        highlight="Questions"
        subtitle='Here you can learn about this "Directory Finder Website" and you can find the solution for your doubts.'
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <div className="container-x max-w-3xl py-12">
        <Stagger gap={0.06} as="ul" className="space-y-3">
          {faq.map((item, index) => {
            const open = activeIndex === index;
            return (
              <StaggerItem
                as="li"
                key={index}
                className={`overflow-hidden rounded-3xl transition ${open ? "bg-white shadow-card-hover ring-1 ring-brand-200" : "bg-white ring-1 ring-slate-100"}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className={`font-display text-sm font-extrabold ${open ? "text-gradient" : "text-slate-300"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-bold text-night-900 sm:text-lg">{item.question}</span>
                  </span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 ${open ? "rotate-45 bg-brand-gradient text-white" : "bg-mist text-night-900"}`}>
                    <FaPlus className="text-xs" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-5 pb-6 pl-14 text-sm leading-relaxed text-slate-600 sm:text-base">
                        <p>{item.answer}</p>
                        {item.list && (
                          <ol className="mt-3 list-decimal space-y-1 pl-5">
                            {item.list.map((li, i) => <li key={i}>{li}</li>)}
                          </ol>
                        )}
                        {item.subAnswers && (
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {item.subAnswers.map((sub) => (
                              <div key={sub.title} className="rounded-2xl bg-mist p-4">
                                <h5 className="font-bold text-night-900">{sub.title}</h5>
                                <p className="mt-1">{sub.text}</p>
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
          <Link href="/dashboard" className="btn-dark">Go to User Dashboard →</Link>
        </div>
      </div>
      <BusinessDirectory />
    </>
  );
}
