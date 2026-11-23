// Cities that get their own pre-built pages. Any other city in the URL is served the
// "default-location" pages by the rewrite rules in public/.htaccess.
import { BUILT_CITIES } from "@/app/lib/cities";

export async function generateStaticParams() {
  return BUILT_CITIES.map((cityname) => ({ cityname }));
}

export default function CityLayout({ children }) {
  return <>{children}</>;
}
