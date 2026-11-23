// Search engine data of category pages. Managed in the admin panel: Settings → Category page SEO,
// Categories → edit → SEO & page heading, and City pages (SEO) for one category in one city.

const API_URL = (process.env.NEXT_PUBLIC_API_URL || "https://vivek.futuretouch.org/api/v1").replace(/\/$/, "");

// Used only if the API is unreachable; same as the backend default (App\Support\CategoryPage::SEO).
export const DEFAULT_SEO = {
  title: "Top {category} in {city} - Ratings, Reviews & Contact | Findbee",
  description:
    "Find {category} in {city}. Compare ratings, reviews, prices and opening hours, then call or WhatsApp the business directly on Findbee.",
  keywords: "{category} in {city}, best {category} in {city}, {category} near me",
  heading: "{category} in {city}",
};

export function fillSeo(text, category, city) {
  const t = String(text || "").replaceAll("{category}", category);
  return city ? t.replaceAll("{city}", city) : t.replace(/\s+in \{city\}/gi, " near you").replaceAll("{city}", "your city");
}

const cityKey = (city) => String(city).toLowerCase().replace(/[^a-z0-9]/g, "");

// ---------- at build time ----------
async function load() {
  try {
    const res = await fetch(`${API_URL}/category-seo`, { signal: AbortSignal.timeout(8000) });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}
let once;
const loadSeo = () => (process.env.NODE_ENV === "production" ? (once ??= load()) : load());

// Pages the admin made for one city get their own HTML, so shared links and search engines see their data
// without JavaScript. Other cities use the default-location page (see public/.htaccess).
export async function cityPageParams(builtCities) {
  const all = (await loadSeo())?.cities || [];
  const built = builtCities.map((c) => c.toLowerCase());
  return all.flatMap(({ category, city }) =>
    [...new Set([city.replace(/\s+/g, "-"), city.replace(/\s+/g, "")])]
      .filter((c) => /^[A-Za-z0-9-]+$/.test(c) && !built.includes(c.toLowerCase()))
      .map((cityname) => ({ cityname, cate: category })),
  );
}

export async function categoryMetadata(cityname, slug, name) {
  const data = await loadSeo();
  const page = data?.cities?.find((c) => c.category === slug && cityKey(c.city) === cityKey(cityname));
  const seo = page?.seo || data?.categories?.[slug] || data?.default || DEFAULT_SEO;
  const label = cityname && cityname !== "default-location" ? cityname.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "";
  const fill = (t) => fillSeo(t, name, page?.city || label);
  const title = fill(seo.title);
  const description = fill(seo.description);
  return {
    title,
    description,
    keywords: fill(seo.keywords),
    ...(seo.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: { title, description, type: "website", siteName: "Findbee", ...(seo.image ? { images: [seo.image] } : {}) },
    twitter: { card: seo.image ? "summary_large_image" : "summary", title, description, ...(seo.image ? { images: [seo.image] } : {}) },
  };
}
