"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard } from "../ui/blocks";

const faqs = [
  { question: "How to create new listing?", answer: "You can create a new listing by navigating to the 'Create Listing' page and filling out the required details." },
  { question: "How to change free listing to premium listing?", answer: "Upgrade your listing by selecting the premium package in your account settings." },
  { question: "How can I change my user type?", answer: "Go to your profile settings and select the appropriate user type." },
  { question: "How to make Payment?", answer: "Payments can be made using credit cards, PayPal, or other available payment methods." },
  { question: "How to create Ads?", answer: "Ads can be created from the Ads section in your dashboard." },
  { question: "What is user type?", answer: "User types include General User and Service Provider, each with different access levels." },
  { question: "How to contact support team?", answer: "You can reach our support team through the contact form or support email available on the website." },
];

export default function How() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <CommonDashLayout>
      <DashCard badge="How to's" title="Help & how-to guides" action={<Link href="/faq" className="btn-ghost btn-sm">Full FAQ</Link>}>
        <p className="-mt-2 mb-5 text-sm text-slate-500">Here you can learn about this &quot;Directory Finder Website&quot; and find solutions for your doubts.</p>
        <ul className="space-y-2">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <li key={index} className={`rounded-2xl transition ${open ? "bg-mist" : "hover:bg-mist/60"}`}>
                <button type="button" onClick={() => setOpenIndex(open ? null : index)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-night-900">
                  {faq.question}
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${open ? "rotate-45 bg-brand-gradient text-white" : "bg-white text-night-900 ring-1 ring-slate-200"}`}>
                    <FaPlus className="text-[10px]" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-4 text-sm text-slate-600">
                      <span className="block pb-4">{faq.answer}</span>
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
