"use client";

import Link from "next/link";
import PinLocation from "@/app/Component/PinLocation";
import BuinessDirectory from "@/app/Component/BuinessDirectory";
import { PageHero } from "@/app/ui/blocks";
import { useApi } from "@/app/lib/api";

const PAGES = [
  ["Privacy Policy", "/privacy-policy"],
  ["Return Policy", "/return-policy"],
  ["Refund Policy", "/refund-policy"],
  ["Terms and Conditions", "/terms-and-conditions"],
];
const longDate = (d) => new Date(`${d}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

// Text from the admin panel (Website → Legal pages). `initial` is the text at build time; the newest one is loaded on top of it.
function LegalPage({ slug, path, title, initial }) {
  const { data, loading, error } = useApi(`/pages/${slug}`, { auth: false });
  const removed = error?.status === 404;
  const page = removed ? null : data || initial;
  const words = (page?.title || title).split(" ");
  return (
    <>
      <PinLocation />
      <PageHero
        compact
        eyebrow="Legal"
        title={words.slice(0, -1).join(" ")}
        highlight={words.at(-1)}
        crumbs={[{ label: "Home", href: "/" }, { label: page?.title || title }]}
        waveFill="#F3F8FE"
      />
      <div className="bg-mist pb-4">
        <div className="container-x max-w-4xl">
          <nav aria-label="Legal pages" className="no-scrollbar mb-4 flex gap-2 overflow-x-auto pb-1">
            {PAGES.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={href === path ? "page" : undefined}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${href === path ? "bg-night-900 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-brand-600"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <article className="panel p-6 leading-relaxed text-slate-600 sm:p-10">
            {page ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Last updated · {longDate(page.updated_on)}</p>
                {/* cleaned by the API */}
                <div className="legal-text mt-5" dangerouslySetInnerHTML={{ __html: page.content }} />
              </>
            ) : loading ? (
              <div className="space-y-3" aria-busy="true">
                {[90, 100, 75, 95].map((w) => (
                  <div key={w} className="h-4 animate-pulse rounded bg-mist" style={{ width: `${w}%` }} />
                ))}
              </div>
            ) : (
              <p>
                This page is being updated. If you have a question, please{" "}
                <Link href="/contact" className="font-semibold text-brand-600 hover:underline">
                  contact us
                </Link>
                .
              </p>
            )}
          </article>
        </div>
      </div>
      <BuinessDirectory />
    </>
  );
}
export default LegalPage;
