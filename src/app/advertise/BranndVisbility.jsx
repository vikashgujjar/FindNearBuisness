"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";

const blocks = [
  {
    title: "Why Advertise on Future Touch",
    items: [
      ["Massive Local Reach", "Tap into a vast network of users actively searching for businesses in your city."],
      ["Targeted Advertising", "Reach the right audience by filtering based on location, category, and user interests."],
      ["Enhanced Visibility", "Secure top placement in search results, maximizing your chances of being seen."],
      ["Flexible Advertising Options", "Choose from featured listings, banner ads, lead packages, and more to suit your budget and goals."],
    ],
  },
  {
    title: "Future Touch Advertising Packages: Find the Perfect Fit",
    items: [
      ["Basic Listings", "Start with a free listing to establish your online presence."],
      ["Featured Listings", "Gain prominence in search results for increased visibility."],
      ["Banner Ads", "Showcase eye-catching visuals on Future Touch’s platform."],
      ["Lead Packages", "Generate direct leads from interested customers."],
    ],
  },
  {
    title: "How to Get Started with Future Touch Advertising",
    items: [
      ["Register Your Business", "Create a free Future Touch profile with accurate details."],
      ["Select Your Plan", "Explore pricing options and choose the package that aligns with your needs."],
      ["Craft Compelling Ads", "Use clear language, strong visuals, and a powerful call to action."],
      ["Track and Optimize", "Monitor your ad performance and refine your strategy for maximum impact."],
    ],
  },
];

export default function BrandVisibility() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold text-night-900 sm:text-3xl">Advertise on Future Touch: Boost Local Brand Visibility in Mumbai</h2>
          <p className="mt-4 font-semibold text-night-900">Stand Out in Your City: Unlock New Growth with Future Touch Advertising</p>
          <p className="mt-2 text-slate-600">
            In the competitive landscape of your city, strategic advertising is key to reaching your target audience and propelling your business forward. Future
            Touch, India’s leading local search engine, offers a powerful platform to connect with potential customers and elevate your brand presence.
          </p>
        </Reveal>

        <Stagger gap={0.12} className="mt-10 grid gap-5 lg:grid-cols-3">
          {blocks.map((b) => (
            <StaggerItem key={b.title} className="panel p-6">
              <h3 className="font-bold text-night-900">{b.title}</h3>
              <ul className="mt-4 space-y-3">
                {b.items.map(([t, d]) => (
                  <li key={t} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-[10px] text-brand-600"><FaCheck /></span>
                    <span><b className="text-night-900">{t}:</b> {d}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-center font-semibold text-night-900">
          Ready to boost your brand in your city? Contact Future Touch today to explore advertising opportunities!
        </p>
      </div>
    </section>
  );
}
