import PinLocation from "@/app/Component/PinLocation";
import AdSummary from "@/app/Component/AdSummary";
import BusinessDirectory from "@/app/Component/BuinessDirectory";

export default function StartNowPage() {
  return (
    <>
      <PinLocation />
      <AdSummary startNew />
      <BusinessDirectory />
    </>
  );
}
