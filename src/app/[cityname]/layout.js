// Cities that get their own pre-built pages. Any other city in the URL is served the
// "default-location" pages by the rewrite rules in public/.htaccess.
export async function generateStaticParams() {
  return [{ cityname: "delhi" }, { cityname: "mumbai" }, { cityname: "bangalore" }, { cityname: "default-location" }];
}

export default function CityLayout({ children }) {
  return <>{children}</>;
}
