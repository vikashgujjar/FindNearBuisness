import PinLocation from "@/app/Component/PinLocation";
import PaymentStatus from "@/app/Component/PaymentStatus";
import BusinessDirectory from "@/app/Component/BuinessDirectory";

export default function BuyPointPage() {
  return (
    <>
      <PinLocation />
      <PaymentStatus focus="points" />
      <BusinessDirectory />
    </>
  );
}
