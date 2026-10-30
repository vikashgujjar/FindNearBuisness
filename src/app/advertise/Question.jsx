"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem } from "../ui/motion";

const faq = [
  ["How do I get started with Future Touch Ads?", "To get started with Future Touch Ads, simply sign up on our platform and create your ad campaign. Our user-friendly interface will guide you through the process."],
  ["What benefits do Future Touch Ads offer?", "Future Touch Ads provide enhanced visibility, targeted audience reach, and detailed analytics to optimize your marketing campaigns efficiently."],
  ["Can I track my ad performance?", "Yes! Future Touch Ads offer real-time analytics, helping you monitor engagement, clicks, and conversions to improve your ad strategies."],
  ["Are Future Touch Ads suitable for small businesses?", "Absolutely! Future Touch Ads are designed to support businesses of all sizes, offering scalable solutions to maximize marketing efforts."],
  ["What types of ads can I create with Future Touch Ads?", "You can create various ad formats, including display ads, video ads, and targeted search ads to reach the right audience effectively."],
  ["How much does it cost to run Future Touch Ads?", "The cost varies based on your budget and ad strategy. You can set daily limits and bid amounts to control your expenses."],
  ["Is there customer support available for Future Touch Ads?", "Yes! Our support team is available 24/7 to assist you with any queries or issues related to your ad campaigns."],
  ["Can I edit or pause my ad campaigns anytime?", "Yes! You have full control over your campaigns, allowing you to edit, pause, or restart ads as needed."],
  ["Do Future Touch Ads work on mobile devices?", "Yes! Our ads are optimized for all devices, ensuring a seamless experience for mobile and desktop users alike."],
  ["How do I target the right audience with Future Touch Ads?", "You can define your audience based on demographics, interests, and behaviors to ensure your ads reach the right people."],
  ["What payment methods do you accept for Future Touch Ads?", "We accept various payment methods, including credit cards, PayPal, and bank transfers, for easy and secure transactions."],
  ["Can I see a preview of my ad before publishing?", "Yes! Future Touch Ads provides a live preview feature, allowing you to review your ad before it goes live."],
  ["How long does it take for my ads to start running?", "Once approved, your ads typically start running within a few hours, ensuring quick campaign execution."],
];

export default function Question() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="FAQs" className="scroll-mt-20 bg-mist py-16 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading align="left" eyebrow="FAQs" title="Got a" highlight="question?" subtitle="Everything advertisers usually ask before getting started." className="lg:sticky lg:top-28 lg:self-start" />
        <Stagger gap={0.04} className="space-y-3">
          {faq.map(([q, a], index) => {
            const open = activeIndex === index;
            return (
              <StaggerItem key={q} className={`overflow-hidden rounded-3xl bg-white transition ${open ? "shadow-card-hover ring-1 ring-brand-200" : "ring-1 ring-slate-100"}`}>
                <button type="button" onClick={() => setActiveIndex(open ? null : index)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="font-bold text-night-900 sm:text-lg">{q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 ${open ? "rotate-45 bg-brand-gradient text-white" : "bg-mist text-night-900"}`}>
                    <FaPlus className="text-xs" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 text-sm text-slate-600 sm:text-base">
                      <span className="block pb-5">{a}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
