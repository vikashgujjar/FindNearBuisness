"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { HiCheck } from "react-icons/hi";
import { FaSliders, FaXmark } from "react-icons/fa6";
import { PageHero } from "@/app/ui/blocks";
import { useUserLocation, toSlug } from "@/app/context/LocationContext";
import { useAuth } from "@/app/context/AuthContext";
import { DEFAULT_SEO, fillSeo } from "@/app/lib/seo";
import { AdSlot } from "@/app/ui/AdSlot";
import { useApi, apiFetch, clearApiCache } from "@/app/lib/api";
import { recentListings, useCategoryPage, useCategorySlug, usePlace } from "@/app/lib/category";
import { ListingCard } from "@/app/Component/category/ListingCard";
import { DealModal, LeadForm } from "@/app/Component/category/LeadForms";
import { CategoryBanner, HelpCard, QuickResponses, SearchFeedback, TopPicks } from "@/app/Component/category/CategoryBlocks";

const PER_PAGE = 20;
const BASE_PANELS = ["Categories", "Sub-Categories", "Features", "Rating", "Budget"];
const FEATURES = {
  "Open now": "open_now",
  "Trusted services provider": "trusted",
  "Premium services": "featured",
  "Verified services": "verified",
  "Trending services": "trending",
  "Offers and discounts": "offers",
};
const SORTS = [
  ["promoted", "Recommended"],
  ["rating", "Highest rated"],
  ["popular", "Most viewed"],
  ["likes", "Most liked"],
  ["updated", "Latest updated"],
  ["price_low", "Price: low to high"],
  ["price_high", "Price: high to low"],
  ["distance", "Nearest first"],
];

function Stars({ value, className = "" }) {
  return (
    <span className={`flex gap-0.5 text-pin-500 ${className}`}>{[1, 2, 3, 4, 5].map((n) => (n <= value ? <IoStar key={n} /> : <IoStarOutline key={n} />))}</span>
  );
}

function FilterPanel({ title, children }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="panel p-5">
      <h4 className="mb-3 text-sm font-bold text-night-900">{title}</h4>
      {children}
    </motion.div>
  );
}

function Check({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
      <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 rounded accent-brand-500" /> {label}
    </label>
  );
}

const toggle = (list, value) => (list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

// Category page: listings with filters. Paid and featured listings stay on top, the rest is shuffled on every visit.
function RealState() {
  const router = useRouter();
  const pageSlug = useCategorySlug();
  const place = usePlace();
  const { coords } = useUserLocation();
  const { isLoggedIn } = useAuth();
  const page = useCategoryPage(pageSlug, place);
  const { data: categories } = useApi("/categories", { auth: false });

  // New on every visit; the API shuffles with it and keeps the same order while paging.
  const [seed] = useState(() => Math.floor(Math.random() * 1e9) + 1);
  const [closed, setClosed] = useState({}); // filter panels switched off
  const [isPhone, setIsPhone] = useState(false);
  const [opened, setOpened] = useState({}); // phones start with every panel closed
  const [category, setCategory] = useState("");
  const [subs, setSubs] = useState([]);
  const [features, setFeatures] = useState([]);
  const [rating, setRating] = useState(null);
  const [budget, setBudget] = useState({ min: "", max: "" });
  const [custom, setCustom] = useState({}); // filter key -> chosen options
  const [sort, setSort] = useState("promoted");
  const [area, setArea] = useState(null); // null: from the address bar
  const [dates, setDates] = useState({ from: "", to: "" });
  const [likes, setLikes] = useState({});
  const [viewed, setViewed] = useState([]);
  const [deal, setDeal] = useState(null);
  const [result, setResult] = useState({ key: null, items: null });

  useEffect(() => {
    setIsPhone(window.matchMedia("(max-width: 1023px)").matches);
    setViewed(recentListings());
  }, []);

  const filters = page?.filters || [];
  const all = categories?.data || [];
  const choices = all.filter((c) => c.listings_count > 0 || c.children?.some((s) => s.listings_count > 0));
  const slug = category ? toSlug(category) : pageSlug;
  const current = all.find((c) => c.slug === slug || toSlug(c.name) === slug);
  const subChoices = (current?.children || []).filter((c) => c.listings_count > 0);
  const title = category || page?.category?.name || pageSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const activeArea = area ?? place.area;
  // the heading of the admin panel belongs to the category of this page
  const heading = fillSeo((!category && page?.seo?.heading) || DEFAULT_SEO.heading, title, activeArea || place.city).split(/ (?=(?:in|near) )/);
  const intro = !category && page?.seo?.intro ? fillSeo(page.seo.intro, title, activeArea || place.city) : null;
  const on = (section) => !!page?.sections?.includes(section);

  const panels = [
    ...BASE_PANELS.filter((p) => (p !== "Categories" || choices.length) && (p !== "Sub-Categories" || subChoices.length)),
    ...filters.map((f) => f.name),
  ];
  const isOpen = (p) => (isPhone ? !!opened[p] : !closed[p]);
  const allOpen = panels.every(isOpen);
  const togglePanel = (p) => {
    const set = isPhone ? setOpened : setClosed;
    if (p !== "Filter") return set((s) => ({ ...s, [p]: !s[p] }));
    set(allOpen === isPhone ? {} : Object.fromEntries(panels.map((x) => [x, true])));
  };

  // ---- what to ask the API for
  const query = new URLSearchParams({ category: slug, per_page: String(PER_PAGE), sort, seed: String(seed) });
  if (place.city) query.set("city", place.city);
  if (activeArea) query.set("area", activeArea);
  if (subs.length) query.set("subcategories", subs.join(","));
  if (rating) query.set("rating", rating);
  if (budget.min) query.set("price_min", budget.min);
  if (budget.max) query.set("price_max", budget.max);
  features.forEach((f) => query.set(FEATURES[f], "1"));
  Object.entries(custom).forEach(([key, values]) => values.length && query.set(`f[${key}]`, values.join(",")));
  if (sort === "distance" && coords) {
    query.set("lat", coords.lat);
    query.set("lng", coords.lng);
  }
  const key = place.ready ? query.toString() : null;

  useEffect(() => {
    if (!key) return;
    let stale = false;
    const abort = new AbortController();
    // typing a budget should not send a request per key
    const t = setTimeout(async () => {
      try {
        const res = await apiFetch(`/listings?${key}`, { signal: abort.signal });
        if (!stale) setResult({ key, items: res.data, page: 1, last: res.meta.last_page, total: res.meta.total, fallback: res.city_fallback });
      } catch (err) {
        if (!stale) setResult({ key, items: [], error: err.message });
      }
    }, 150);
    return () => {
      stale = true;
      clearTimeout(t);
      abort.abort();
    };
  }, [key]);

  const loadMore = async () => {
    setResult((r) => ({ ...r, more: true }));
    try {
      const res = await apiFetch(`/listings?${key}&page=${result.page + 1}`);
      setResult((r) =>
        r.key !== key ? r : { ...r, more: false, page: r.page + 1, last: res.meta.last_page, items: [...r.items, ...res.data.filter((n) => !r.items.some((o) => o.id === n.id))] },
      );
    } catch (err) {
      setResult((r) => ({ ...r, more: false, moreError: err.message }));
    }
  };

  const like = async (listing) => {
    if (!isLoggedIn) return router.push("/user-login/sign");
    const before = likes[listing.id] ?? listing.is_liked;
    setLikes((l) => ({ ...l, [listing.id]: !before }));
    try {
      const res = await apiFetch(`/listings/${listing.id}/like`, { method: "POST" });
      setLikes((l) => ({ ...l, [listing.id]: res.liked }));
      clearApiCache("/account");
    } catch {
      setLikes((l) => ({ ...l, [listing.id]: before }));
    }
  };
  const closeDeal = useCallback(() => setDeal(null), []);

  const clearAll = () => {
    setSubs([]);
    setFeatures([]);
    setRating(null);
    setBudget({ min: "", max: "" });
    setCustom({});
    setArea("");
  };
  const chosen = subs.length + features.length + (rating ? 1 : 0) + (budget.min || budget.max ? 1 : 0) + Object.values(custom).flat().length + (activeArea ? 1 : 0);

  const items = result.items;
  const loading = result.key !== key;
  const lead = { name: title, slug, city: place.city, lead: page?.lead, dates };
  const withSort = SORTS.filter(([v]) => v !== "distance" || coords);

  // Blocks between the listings, as in: 4 listings, lead form, 6 listings, quick responses, 4 listings, feedback
  const between = (i) => {
    const last = i === items.length - 1;
    const at = (n) => i === Math.min(n, items.length) - 1;
    return (
      <>
        {at(4) && on("lead_form") && <LeadForm {...lead} wide />}
        {at(10) && on("quick") && <QuickResponses listings={page.quick} onDeal={setDeal} />}
        {(i === 13 || (last && items.length < 14)) && on("feedback") && <SearchFeedback slug={slug} city={place.city} />}
      </>
    );
  };

  return (
    <div className="bg-mist">
      <PageHero
        compact
        banner={page?.banners?.length ? <CategoryBanner banners={page.banners} /> : null}
        eyebrow="Listings"
        title={heading.length > 1 ? heading.slice(0, -1).join(" ") : heading[0]}
        highlight={heading.length > 1 ? heading.at(-1) : null}
        subtitle={
          intro
            ? intro
            : result.total != null && !result.fallback
            ? `${result.total} ${result.total === 1 ? "business" : "businesses"} ready to help.`
            : items
              ? "Compare local businesses and contact them directly."
              : "Finding businesses near you…"
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "All Category", href: "/service" }, { label: title }]}
        waveFill="#F3F8FE"
      />
      <div className="container-x pb-16">
        <div className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <span className="mr-1 flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-500">
            <FaSliders /> Filters
          </span>
          {["Filter", ...panels].map((p) => {
            const pressed = p === "Filter" ? allOpen : isOpen(p);
            return (
              <button
                key={p}
                type="button"
                onClick={() => togglePanel(p)}
                aria-pressed={pressed}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${pressed ? "bg-night-900 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-brand-600"}`}
              >
                {pressed && <HiCheck />}
                {p === "Filter" ? "All filters" : p}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
          <label className="flex items-center gap-2 font-semibold text-slate-500">
            Sort by
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="field w-auto bg-white py-2">
              {withSort.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          {page?.lead?.ask_dates && (
            <>
              {[
                ["from", "From", new Date().toISOString().slice(0, 10)],
                ["to", "To", dates.from],
              ].map(([field, label, min]) => (
                <label key={field} className="flex items-center gap-2 font-semibold text-slate-500">
                  {label}
                  <input type="date" min={min || undefined} value={dates[field]} onChange={(e) => setDates((d) => ({ ...d, [field]: e.target.value }))} className="field w-auto bg-white py-2" />
                </label>
              ))}
            </>
          )}
          {activeArea && (
            <button type="button" onClick={() => setArea("")} className="chip bg-brand-50 px-3 py-1.5 text-brand-700">
              {activeArea} <FaXmark />
            </button>
          )}
          {chosen > 0 && (
            <button type="button" onClick={clearAll} className="font-semibold text-brand-600 hover:underline">
              Clear filters ({chosen})
            </button>
          )}
        </div>

        <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="min-w-0 space-y-4">
            <AnimatePresence>
              {isOpen("Categories") && choices.length > 0 && (
                <FilterPanel key="cat" title="Categories">
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      clearAll();
                    }}
                    className="field"
                    aria-label="Select category"
                  >
                    <option value="">Select Category</option>
                    {choices.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </FilterPanel>
              )}
              {isOpen("Sub-Categories") && subChoices.length > 0 && (
                <FilterPanel key="sub" title="Sub Category">
                  <div className="space-y-2">
                    {subChoices.map((c) => (
                      <Check key={c.slug} label={c.name} checked={subs.includes(c.slug)} onChange={() => setSubs((s) => toggle(s, c.slug))} />
                    ))}
                  </div>
                </FilterPanel>
              )}
              {isOpen("Features") && (
                <FilterPanel key="feat" title="Features">
                  <div className="space-y-2">
                    {Object.keys(FEATURES).map((f) => (
                      <Check key={f} label={f} checked={features.includes(f)} onChange={() => setFeatures((s) => toggle(s, f))} />
                    ))}
                  </div>
                </FilterPanel>
              )}
              {isOpen("Rating") && (
                <FilterPanel key="rate" title="Ratings">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 0].map((n) => (
                      <label key={n} className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition ${rating === n ? "bg-pin-400/20" : "hover:bg-mist"}`}>
                        <input type="radio" name="rating" checked={rating === n} onChange={() => setRating(n)} className="accent-brand-500" />
                        <Stars value={n} />
                        {n > 0 && n < 5 && <span className="text-xs text-slate-400">& up</span>}
                      </label>
                    ))}
                  </div>
                </FilterPanel>
              )}
              {isOpen("Budget") && (
                <FilterPanel key="budget" title="Budget (₹)">
                  <div className="flex items-center gap-2">
                    {["min", "max"].map((b) => (
                      <input
                        key={b}
                        type="number"
                        min="0"
                        inputMode="numeric"
                        placeholder={b === "min" ? "From" : "To"}
                        aria-label={b === "min" ? "Budget from" : "Budget to"}
                        value={budget[b]}
                        onChange={(e) => setBudget((s) => ({ ...s, [b]: e.target.value }))}
                        className="field min-w-0"
                      />
                    ))}
                  </div>
                </FilterPanel>
              )}
              {!category &&
                filters.map(
                  (f) =>
                    isOpen(f.name) && (
                      <FilterPanel key={f.key} title={f.name}>
                        <div className="max-h-60 space-y-2 overflow-y-auto">
                          {f.options.map((o) => (
                            <Check key={o} label={o} checked={!!custom[f.key]?.includes(o)} onChange={() => setCustom((c) => ({ ...c, [f.key]: toggle(c[f.key] || [], o) }))} />
                          ))}
                        </div>
                      </FilterPanel>
                    ),
                )}
            </AnimatePresence>
            <div className="hidden space-y-4 lg:block">
              {on("help_card") && <HelpCard name={title} />}
              {on("lead_form") && <LeadForm {...lead} />}
              {on("top_picks") && <TopPicks listings={page.top_picks} name={title} city={place.city} onDeal={setDeal} />}
            </div>
            <AdSlot slot="listing_left" category={pageSlug} />
          </aside>

          <div className="min-w-0 space-y-4">
            <AdSlot slot="listing_top" category={pageSlug} />
            {!items ? (
              <div className="space-y-4" aria-busy="true">
                {[0, 1, 2].map((n) => (
                  <div key={n} className="panel h-56 animate-pulse bg-white sm:h-48" />
                ))}
              </div>
            ) : result.error ? (
              <div className="panel p-10 text-center" role="alert">
                <h3 className="text-lg font-bold text-night-900">Listings could not be loaded</h3>
                <p className="mt-1 text-sm text-slate-500">{result.error}</p>
                <button type="button" onClick={() => window.location.reload()} className="btn-primary mt-4">
                  Try again
                </button>
              </div>
            ) : (
              <div className={`space-y-4 transition-opacity ${loading ? "opacity-50" : ""}`} aria-busy={loading}>
                {result.fallback && items.length > 0 && (
                  <p className="rounded-2xl bg-pin-400/20 px-4 py-3 text-sm font-medium text-night-900" role="status">
                    Nothing found in {place.city} yet. Showing businesses from other cities.
                  </p>
                )}
                {items.map((l, i) => (
                  <Fragment key={l.id}>
                    <ListingCard listing={l} coords={coords} liked={!!(likes[l.id] ?? l.is_liked)} onLike={() => like(l)} onDeal={() => setDeal(l)} viewed={viewed.includes(l.id)} />
                    {between(i)}
                  </Fragment>
                ))}
                {!items.length && (
                  <>
                    <div className="panel p-10 text-center">
                      <h3 className="text-lg font-bold text-night-900">No businesses found</h3>
                      <p className="mt-1 text-sm text-slate-500">Try another category or clear the filters.</p>
                    </div>
                    {on("lead_form") && <LeadForm {...lead} wide />}
                    {on("feedback") && <SearchFeedback slug={slug} city={place.city} />}
                  </>
                )}
                {result.page < result.last && (
                  <div className="text-center">
                    <button type="button" onClick={loadMore} disabled={result.more || loading} className="btn-dark disabled:opacity-60">
                      {result.more ? "Loading…" : "Show more"}
                    </button>
                    {result.moreError && (
                      <p className="mt-2 text-sm text-rose-600" role="alert">
                        {result.moreError}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            <div className="lg:hidden">{on("top_picks") && <TopPicks listings={page.top_picks} name={title} city={place.city} onDeal={setDeal} />}</div>
            <AdSlot slot="listing_bottom" category={pageSlug} />
          </div>
        </div>
      </div>
      <DealModal listing={deal} dates={dates} onClose={closeDeal} />
    </div>
  );
}
export default RealState;
