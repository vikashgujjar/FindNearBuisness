"use client";

import { useState, useEffect } from "react";
import { toSlug } from "@/app/context/LocationContext";
import { useApi } from "@/app/lib/api";

// Text at the bottom of a category page (/{city}/{category}/), editable in the admin panel:
//   - the category's own text: Categories → edit → Category page text
//   - otherwise the default text: Settings → Category pages
// Format: a blank line starts a paragraph, "## " starts a heading,
// {category} and {city} are replaced by the category name and the visitor's city.

// Used only if the API is unreachable; same as the backend default (App\Support\CategoryText::DEFAULT).
const FALLBACK_TEXT = `Looking for {category} in {city}? Findbee brings local options together in one place, so you can compare businesses, read what other customers say and get in touch directly, without going through page after page of search results. Whether you need help urgently today or you are planning ahead and want to weigh up a few choices first, this page is a simple starting point for finding someone close to you.

Every listing shows the details that matter when you are making a decision: the business name, address, phone number, email and customer rating. Open a listing to see photos, the services on offer, the areas covered, current offers and reviews left by other customers.

## How to choose the right {category} in {city}

Start with the filters at the top of this page. You can narrow the results by category, by features such as verified or premium businesses and current offers, and by customer rating. Sorting by the most liked or the most recently updated listings is a quick way to see who is active right now.

Before you decide, it helps to shortlist two or three businesses and compare them. Check how close each one is to you, read recent reviews rather than only the overall rating, and ask about pricing, availability and anything included or excluded. A short conversation often tells you more than a long description.

## Contact businesses directly

Once you have found a good match, you can call the business, message them on WhatsApp or send a request using the Get quote button. Your enquiry goes straight to the business, so you can discuss your requirements directly. After your visit or service, consider leaving a review. Honest feedback helps other people in {city} choose with confidence and helps good local businesses get noticed.

## List your {category} business on Findbee

Do you run a {category} business in {city}? Add your business to Findbee to reach people who are actively searching in your area. You can add your contact details, photos, services and offers, then manage your listing, leads and reviews from your own account. Our team reviews every listing before it goes live, which helps keep the directory useful and trustworthy for everyone.`;

// Text -> [{ heading?, paragraphs: [] }]. A heading starts a new section.
function toSections(text, category, city) {
  const filled = text.replaceAll("{category}", category).replaceAll("{city}", city).replace(/\r\n/g, "\n");
  const sections = [{ paragraphs: [] }];
  for (const block of filled.split(/\n\s*\n/)) {
    const lines = block.split("\n");
    let rest = [];
    for (const line of lines) {
      const heading = line.match(/^\s*#{2,3}\s+(.+)$/);
      if (heading) {
        if (rest.length) sections[sections.length - 1].paragraphs.push(rest.join("\n"));
        rest = [];
        sections.push({ heading: heading[1].trim(), paragraphs: [] });
      } else if (line.trim()) rest.push(line.trim());
    }
    if (rest.length) sections[sections.length - 1].paragraphs.push(rest.join("\n"));
  }
  return sections.filter((s) => s.heading || s.paragraphs.length);
}

// "/chandigarh/hotel/" -> "Chandigarh"; null for the default-location pages
const cityFromPath = (path) => {
  const slug = decodeURIComponent(path.split("/")[1] || "");
  return slug && slug !== "default-location" ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : null;
};

function CategoryAbout({ name, slug }) {
  const [city, setCity] = useState(null);
  useEffect(() => {
    setCity(cityFromPath(window.location.pathname));
  }, []);
  const place = city || "your city";

  const { data: categories } = useApi("/categories", { auth: false });
  const { data: settings } = useApi("/settings", { auth: false });
  const category = categories?.data?.find((c) => c.slug === slug || toSlug(c.name) === slug);
  const text = category?.description?.trim() || settings?.category_text?.trim() || FALLBACK_TEXT;
  const sections = toSections(text, name, place);

  return (
    <section className="container-x pb-12 sm:pb-16">
      <div className="panel p-6 sm:p-10">
        <h2 className="text-xl font-extrabold text-night-900 sm:text-2xl">
          {name}
          {" in "}
          {place}
        </h2>
        {sections.map((s, i) => (
          <div key={i} className="mt-4">
            {s.heading && <h3 className="mb-2 text-base font-bold text-night-900 sm:text-lg">{s.heading}</h3>}
            <div className="space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {s.paragraphs.map((p, j) => (
                <p key={j} className="whitespace-pre-line">
                  {p}
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
