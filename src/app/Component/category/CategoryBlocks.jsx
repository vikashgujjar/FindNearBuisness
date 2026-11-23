"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaBolt, FaChevronLeft, FaChevronRight, FaHeadset, FaPlus, FaThumbsUp } from "react-icons/fa6";
import BusinessDirectory from "@/app/Component/BuinessDirectory";
import CategorySeo from "@/app/Component/category/CategorySeo";
import { MiniCard } from "@/app/Component/category/ListingCard";
import { API_URL, apiFetch, listingHref } from "@/app/lib/api";
import { categoryHref, fillText, useCategoryPage, useCategorySlug, usePlace } from "@/app/lib/category";

// ---------- top banner (admin: Categories → edit → Top banner, or a paid banner) ----------
// A slim strip (1320 x 160, phones 3:1). Taller images are trimmed, keeping the upper part where faces usually are.
export function CategoryBanner({ banners }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [phone, setPhone] = useState(false);
  const count = banners.length;
  const current = index % count;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setPhone(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (count < 2 || paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count, paused, index]);

  const countClick = (b) => {
    if (b.ad_id) fetch(`${API_URL}/ads/${b.ad_id}/click`, { method: "POST", keepalive: true, headers: { Accept: "application/json" } }).catch(() => {});
  };
  const step = (by) => setIndex((i) => (i + by + count) % count);

  return (
    <div className="container-x relative pt-4 sm:pt-6">
      <aside
        aria-label="Banner"
        className="group relative aspect-[3/1] overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 sm:aspect-[1320/160]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {banners.map((b, i) => {
          const src = (phone && b.mobile_image) || b.image;
          const href = b.link || (b.listing ? listingHref(b.listing) : null);
          const slide = <img src={src} alt={b.alt || "Banner"} className="absolute inset-0 h-full w-full object-cover object-[center_22%]" />;
          const props = { className: "absolute inset-0 block", tabIndex: i === current ? 0 : -1, onClick: () => countClick(b) };
          return (
            <div key={i} aria-hidden={i !== current} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "z-[1] opacity-100" : "pointer-events-none opacity-0"}`}>
              {!href ? (
                slide
              ) : href.startsWith("/") ? (
                <Link href={href} {...props}>
                  {slide}
                </Link>
              ) : (
                <a href={href} target="_blank" rel={`noopener noreferrer${b.ad_id ? " sponsored" : ""}`} {...props}>
                  {slide}
                </a>
              )}
              {b.ad_id && <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-night-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">Ad</span>}
            </div>
          );
        })}
        {count > 1 && (
          <>
            {[
              [-1, "left-3", FaChevronLeft, "Previous banner"],
              [1, "right-3", FaChevronRight, "Next banner"],
            ].map(([by, side, Icon, label]) => (
              <button
                key={label}
                type="button"
                onClick={() => step(by)}
                aria-label={label}
                className={`absolute ${side} top-1/2 z-[2] hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-sm text-night-900 opacity-0 shadow-card transition hover:bg-white focus-visible:opacity-100 group-hover:opacity-100 sm:grid`}
              >
                <Icon />
              </button>
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-2 z-[2] flex justify-center sm:bottom-3">
              <div className="pointer-events-auto flex gap-1.5 rounded-full bg-night-950/45 px-2 py-1.5 backdrop-blur-sm">
                {banners.map((_, i) => (
                  <button key={i} type="button" onClick={() => setIndex(i)} aria-label={`Banner ${i + 1}`} aria-current={i === current} className={`h-1.5 rounded-full bg-white transition-all ${i === current ? "w-6" : "w-1.5 opacity-60"}`} />
                ))}
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export function HelpCard({ name }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-5 text-white shadow-glow">
      <div aria-hidden className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/15" />
      <h3 className="relative text-base font-bold">Need help finding {name}?</h3>
      <p className="relative mt-1 text-xs text-white/80">Tell us what you need and our team will help.</p>
      <button type="button" onClick={() => window.dispatchEvent(new Event("findbee:help"))} className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-night-900">
        <FaHeadset /> Ask Findbee
      </button>
    </div>
  );
}

export function TopPicks({ listings, name, city, onDeal }) {
  if (!listings?.length) return null;
  return (
    <div className="panel p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold text-night-900">
        <FaThumbsUp className="text-pin-500" /> Customers’ top picks
      </h3>
      <p className="mt-1 text-xs text-slate-400">
        {name}
        {city ? ` in ${city}` : ""}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {listings.map((l) => (
          <MiniCard key={l.id} listing={l} onDeal={() => onDeal(l)} />
        ))}
      </div>
    </div>
  );
}

export function QuickResponses({ listings, onDeal }) {
  if (!listings?.length) return null;
  return (
    <section className="panel bg-mist p-5">
      <h3 className="flex items-center gap-2 text-lg font-bold text-night-900">
        <FaBolt className="text-pin-500" /> Get quick responses in <span className="text-gradient">less than 60 minutes</span>
      </h3>
      <p className="mt-1 text-xs text-slate-500">These businesses usually answer their enquiries faster.</p>
      <div className="no-scrollbar -mx-5 mt-4 flex snap-x gap-3 overflow-x-auto px-5 pb-1">
        {listings.map((l) => (
          <div key={l.id} className="w-52 shrink-0 snap-start">
            <MiniCard listing={l} onDeal={() => onDeal(l)} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function SearchFeedback({ slug, city }) {
  const [answer, setAnswer] = useState(null);
  const [comment, setComment] = useState("");
  const [state, setState] = useState({});
  const send = async (helpful) => {
    setState({ busy: true });
    try {
      const res = await apiFetch("/search-feedback", { method: "POST", body: { category: slug, city: city || null, helpful, comment: comment || null } });
      setState({ ok: res.message });
    } catch (err) {
      setState({ error: err.message });
    }
  };
  return (
    <section className="rounded-3xl bg-gradient-to-r from-brand-100 to-brand-50 p-5 ring-1 ring-brand-100 sm:p-6">
      {state.ok ? (
        <p className="font-semibold text-night-900" role="status">
          {state.ok}
        </p>
      ) : (
        <>
          <h3 className="text-lg font-bold text-night-900">Were these results helpful?</h3>
          {answer === false ? (
            <form
              className="mt-3 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                send(false);
              }}
            >
              <input autoFocus className="field" maxLength={1000} placeholder="What was missing? (optional)" aria-label="What was missing?" value={comment} onChange={(e) => setComment(e.target.value)} />
              <button type="submit" disabled={state.busy} className="btn-dark shrink-0 disabled:opacity-60">
                Send
              </button>
            </form>
          ) : (
            <div className="mt-3 flex gap-2">
              <button type="button" disabled={state.busy} onClick={() => send(true)} className="btn-primary disabled:opacity-60">
                Yes
              </button>
              <button type="button" disabled={state.busy} onClick={() => setAnswer(false)} className="btn-ghost bg-white">
                No
              </button>
            </div>
          )}
          {state.error && (
            <p className="mt-2 text-sm font-medium text-rose-600" role="alert">
              {state.error}
            </p>
          )}
        </>
      )}
    </section>
  );
}

// ---------- below the listings: FAQs, top list, brands, localities and cities ----------
function Links({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="border-t border-slate-100 pt-5 first:border-0 first:pt-0">
      <h3 className="mb-3 text-base font-bold text-night-900">{title}</h3>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            {!i.href ? (
              <span className="text-slate-500">{i.label}</span>
            ) : i.href.startsWith("/") ? (
              // a full load: the city of the page comes from the address
              <a href={i.href} className="text-slate-500 hover:text-brand-600 hover:underline">
                {i.label}
              </a>
            ) : (
              <a href={i.href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-600 hover:underline">
                {i.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// "Add my business" box; can be switched off for category pages.
export function CategoryPromo() {
  const page = useCategoryPage(useCategorySlug(), usePlace());
  return page && !page.sections.includes("promo") ? null : <BusinessDirectory />;
}

export default function CategoryExtras({ name: given }) {
  const slug = useCategorySlug();
  const place = usePlace();
  const page = useCategoryPage(slug, place);
  if (!page) return null;
  const name = page.category?.name || given || slug.replace(/-/g, " ");
  const city = place.city;
  const groups = [
    { title: `Top brands${city ? ` in ${city}` : ""}`, items: page.brands.map((b) => ({ label: b.name, href: b.link })) },
    { title: `${name} in ${city || "popular"} localities`, items: page.localities.map((l) => ({ label: `${name} in ${l}`, href: categoryHref(city, slug, l) })) },
    { title: `${name} in popular cities`, items: page.popular_cities.map((c) => ({ label: `${name} in ${c}`, href: categoryHref(c, slug) })) },
    { title: `${name} in other cities`, items: page.cities.map((c) => ({ label: `${name} in ${c}`, href: categoryHref(c, slug) })) },
  ].filter((g) => g.items.length);

  return (
    <section className="container-x space-y-6 pb-8">
      <CategorySeo page={page} name={name} city={city} slug={page.category?.slug || slug} />
      {page.top_list.length > 0 && (
        <div className="panel p-6 sm:p-8">
          <h2 className="text-lg font-bold text-night-900 sm:text-xl">
            Which are the top {name}
            {city ? ` in ${city}` : ""}?
          </h2>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {page.top_list.map((l, i) => (
              <li key={l.id}>
                <Link href={listingHref(l)} className="flex items-center gap-3 rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-night-900 transition hover:text-brand-600">
                  <span className="text-slate-400">{i + 1}</span>
                  <span className="min-w-0 flex-1 truncate">{l.name}</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-slate-400">Ordered by customer ratings. Check reviews, address, contact number, photos and timings on each page.</p>
        </div>
      )}
      {page.faqs.length > 0 && (
        <div className="panel p-6 sm:p-8">
          <h2 className="text-lg font-bold text-night-900 sm:text-xl">Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-slate-100">
            {page.faqs.map((f, i) => (
              <details key={i} className="group py-3" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-night-900 sm:text-base">
                  {fillText(f.question, name, city)}
                  <FaPlus className="shrink-0 text-xs text-brand-500 transition group-open:rotate-45" />
                </summary>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600">{fillText(f.answer, name, city)}</p>
              </details>
            ))}
          </div>
        </div>
      )}
      {groups.length > 0 && (
        <div className="panel space-y-5 p-6 sm:p-8">
          {groups.map((g) => (
            <Links key={g.title} {...g} />
          ))}
        </div>
      )}
    </section>
  );
}
