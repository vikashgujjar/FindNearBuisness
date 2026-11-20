import PinLocation from "@/app/Component/PinLocation";
import All from "@/app/Component/All";
import BusinessDirectory from "@/app/Component/BuinessDirectory";

// Listing detail: /{City}/{Business-name--address}/{id}/ (see listingHref in lib/api.js).
// The static export builds a single page; public/.htaccess serves it for every listing URL,
// and the page reads the listing id from the address bar.
export function generateStaticParams() {
  return [{ cityname: "default-location", cate: "hotel", id: "0" }];
}

export default function ListingDetailPage() {
  return (
    <>
      <PinLocation />
      <All />
      <BusinessDirectory />
    </>
  );
}
