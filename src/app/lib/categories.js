// Category pages for the static export (`output: 'export'`): every /{city}/{category}/ page
// must be known at build time.

const API_URL = (process.env.NEXT_PUBLIC_API_URL || "https://vivek.futuretouch.org/api/v1").replace(/\/$/, "");

// Categories the site links to (navbar, home category grid, services).
const STATIC_CATEGORIES = [
  "Hotel", "Spa", "Astrologer", "Education", "Packer & Mover", "Wedding", "Hospital", "Real Estate", "AC Service",
  "Body Massage Centers", "Beauty Spa", "Car Hire", "Caterers", "Chartered Accountant", "Computer Training Institutes",
  "Courier Services", "Computer & Laptop Repair & Services", "Car Repair & Services", "Dermatologists", "Dentists",
  "Electricians", "Event Organizer", "Fabricators", "Furniture Repair Services", "House keeping Services", "Hobbies",
  "Interior Designers", "Internet Website Designers", "Jewellery Showrooms", "Lawyers", "Transporters", "Photographers",
  "Nursing Services", "Printing & Publishing Services", "Placement Services", "Pest Control Services",
  "Painting Contractors", "Packers & Movers", "Scrap Dealers", "Scrap Buyers", "Registration Consultants",
  "Security System", "Coaching", "Vocational training",
  "Wedding halls", "Hotel & Food", "Pet shop", "Digital Products", "Spa And Facial", "Sports", "Electricals",
  "Automobiles", "Transportation", "Hospitals", "Hotel And Resorts", "Technology", "Wedding Halls", "Pet Shop",
  "Restaurants", "Spa and Facial",
  "b2b", "All india", "packers and movers", "Order Food Online", "jobs", "movies", "spa & salon", "repair & service",
  "Doctor Appointment", "Real Estate Agents", "online Recharge & bill payment",
];

export const toSlug = (text) => text.toLowerCase().trim().split(/\s+/).join("-");
const toLabel = (text) => text.charAt(0).toUpperCase() + text.slice(1);

// Categories added in the admin panel. The API must be reachable during `next build`;
// if it is not, only the static list is built.
async function fetchApiCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const { data = [] } = await res.json();
    return data.flatMap((c) => [c, ...(c.children || [])]).map((c) => ({ slug: c.slug, name: c.name }));
  } catch {
    return [];
  }
}

// slug -> display name. Slugs containing "&" are left out: they are not valid static file paths.
export async function getCategories() {
  const map = new Map();
  for (const c of STATIC_CATEGORIES) {
    const slug = toSlug(c);
    if (!map.has(slug)) map.set(slug, toLabel(c));
  }
  for (const c of await fetchApiCategories()) if (c.slug && !map.has(c.slug)) map.set(c.slug, c.name);
  for (const slug of map.keys()) if (slug.includes("&")) map.delete(slug);
  return map;
}
