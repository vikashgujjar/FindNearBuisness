// Legal pages at build time, so their text is in the HTML. Edited in the admin panel: Website → Legal pages.

const API_URL = (process.env.NEXT_PUBLIC_API_URL || "https://vivek.futuretouch.org/api/v1").replace(/\/$/, "");

export async function getLegalPage(slug) {
  try {
    const res = await fetch(`${API_URL}/pages/${slug}`, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(8000) });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

export async function legalMetadata(slug, title) {
  const page = await getLegalPage(slug);
  return {
    title: page?.seo_title || `${page?.title || title} | Findbee`,
    description: page?.seo_description || `${page?.title || title} of Findbee.`,
  };
}
