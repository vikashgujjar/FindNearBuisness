"use client";

import { useEffect, useState } from "react";
import { listingHref } from "@/app/lib/api";
import { fillText } from "@/app/lib/category";
import { fillSeo } from "@/app/lib/seo";

// Sets a head tag and returns a function that puts the old value back (unless the next page already changed it).
function setTag(selector, attribute, value, create) {
  let el = document.head.querySelector(selector);
  const added = !el;
  if (added) {
    if (!value) return () => {};
    el = document.createElement(create[0]);
    el.setAttribute(create[1], create[2]);
    document.head.append(el);
  }
  const before = el.getAttribute(attribute);
  el.setAttribute(attribute, value || "");
  return () => {
    if (added) el.remove();
    else if (el.getAttribute(attribute) === (value || "")) el.setAttribute(attribute, before ?? "");
  };
}
const meta = (key, value, kind = "name") => setTag(`meta[${kind}="${key}"]`, "content", value, ["meta", kind, key]);

// Title, description, canonical address and structured data of the page, for the city in the address bar.
// The pages are static files, so this also shows admin changes before the next build.
export default function CategorySeo({ page, name, city, slug }) {
  const [origin, setOrigin] = useState("");
  const seo = page.seo;

  useEffect(() => {
    setOrigin(window.location.origin);
    if (!seo) return;
    const fill = (t) => fillSeo(t, name, city);
    const title = fill(seo.title);
    const description = fill(seo.description);
    const parts = window.location.pathname.split("/").filter(Boolean);
    const canonical = `${window.location.origin}${parts.length > 1 ? `/${parts[0]}/${encodeURIComponent(slug)}/` : window.location.pathname}`;

    const oldTitle = document.title;
    document.title = title;
    const undo = [
      () => {
        if (document.title === title) document.title = oldTitle;
      },
      meta("description", description),
      meta("keywords", fill(seo.keywords)),
      meta("robots", seo.noindex ? "noindex, follow" : "index, follow"),
      setTag('link[rel="canonical"]', "href", canonical, ["link", "rel", "canonical"]),
      meta("og:title", title, "property"),
      meta("og:description", description, "property"),
      meta("og:url", canonical, "property"),
      meta("og:image", seo.image, "property"),
      meta("twitter:title", title),
      meta("twitter:description", description),
      meta("twitter:image", seo.image),
    ];
    return () => undo.forEach((f) => f());
  }, [seo, name, city, slug]);

  if (!origin) return null;
  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        ["Home", `${origin}/`],
        ["All Category", `${origin}/service/`],
        [name, null],
      ].map(([label, item], i) => ({ "@type": "ListItem", position: i + 1, name: label, ...(item ? { item } : {}) })),
    },
    page.faqs.length > 0 && {
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: fillText(f.question, name, city),
        acceptedAnswer: { "@type": "Answer", text: fillText(f.answer, name, city) },
      })),
    },
    page.top_list.length > 0 && {
      "@type": "ItemList",
      name: fillSeo("Top {category} in {city}", name, city),
      itemListElement: page.top_list.map((l, i) => ({ "@type": "ListItem", position: i + 1, name: l.name, url: `${origin}${listingHref(l)}` })),
    },
  ].filter(Boolean);
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
