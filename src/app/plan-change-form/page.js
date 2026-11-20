import PinLocation from "@/app/Component/PinLocation";
import PaymentStatus from "@/app/Component/PaymentStatus";
import BusinessDirectory from "@/app/Component/BuinessDirectory";

export default function PlanChangePage() {
  return (
    <>
      <PinLocation />
      <PaymentStatus focus="plan" />
      <BusinessDirectory />
    </>
  );
}
