"use client";

import { useState, useEffect } from "react";
import { toSlug } from "@/app/context/LocationContext";
import { useApi } from "@/app/lib/api";
let r = (e, t) => [
  {
    text: [
      `Looking for ${e} in ${t}? Findbee brings local options together in one place, so you can compare businesses, read what other customers say and get in touch directly, without going through page after page of search results. Whether you need help urgently today or you are planning ahead and want to weigh up a few choices first, this page is a simple starting point for finding someone close to you.`,
      "Every listing shows the details that matter when you are making a decision: the business name, address, phone number, email and customer rating. Open a listing to see photos, the services on offer, the areas covered, current offers and reviews left by other customers.",
    ],
  },
  {
    heading: `How to choose the right ${e} in ${t}`,
    text: [
      "Start with the filters at the top of this page. You can narrow the results by category, by features such as verified or premium businesses and current offers, and by customer rating. Sorting by the most liked or the most recently updated listings is a quick way to see who is active right now.",
      "Before you decide, it helps to shortlist two or three businesses and compare them. Check how close each one is to you, read recent reviews rather than only the overall rating, and ask about pricing, availability and anything included or excluded. A short conversation often tells you more than a long description.",
    ],
  },
  {
    heading: "Contact businesses directly",
    text: [
      `Once you have found a good match, you can call the business, message them on WhatsApp or send a request using the Get quote button. Your enquiry goes straight to the business, so you can discuss your requirements directly. After your visit or service, consider leaving a review. Honest feedback helps other people in ${t} choose with confidence and helps good local businesses get noticed.`,
    ],
  },
  {
    heading: `List your ${e} business on Findbee`,
    text: [
      `Do you run a ${e} business in ${t}? Add your business to Findbee to reach people who are actively searching in your area. You can add your contact details, photos, services and offers, then manage your listing, leads and reviews from your own account. Our team reviews every listing before it goes live, which helps keep the directory useful and trustworthy for everyone.`,
    ],
  },
];
let c = (e) => {
  let t = decodeURIComponent(e.split("/")[1] || "");
  return t && "default-location" !== t ? t.replace(/-/g, " ").replace(/\b\w/g, (e) => e.toUpperCase()) : null;
};
function CategoryAbout(props) {
  var t, s;
  let { name, slug } = props,
    [d, u] = useState(null);
  useEffect(() => {
    u(c(window.location.pathname));
  }, []);
  let p = d || "your city",
    { data } = useApi("/categories", {
      auth: false,
    }),
    m = data?.data?.find((e) => e.slug === slug || toSlug(e.name) === slug),
    y = m?.description?.trim().replaceAll("{city}", p),
    b = y
      ? [
          {
            text: y.split(/\n\s*\n/),
          },
        ]
      : r(name, p);
  return (
    <section className="container-x pb-12 sm:pb-16">
      <div className="panel p-6 sm:p-10">
        <h2 className="text-xl font-extrabold text-night-900 sm:text-2xl">
          {name}
          {" in "}
          {p}
        </h2>
        {b.map((e, t) => (
          <div key={t} className="mt-4">
            {e.heading && <h3 className="mb-2 text-base font-bold text-night-900 sm:text-lg">{e.heading}</h3>}
            <div className="space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {e.text.map((e, t) => (
                <p key={t} className="whitespace-pre-line">
                  {e}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CategoryAbout;
