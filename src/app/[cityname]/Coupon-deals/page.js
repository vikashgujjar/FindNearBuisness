import React from "react";

import CouponDeals from "@/app/Component/CouponDeals";
import BusinessDirectory from "@/app/Component/BuinessDirectory";
import PinLocation from "@/app/Component/PinLocation";

export default function page() {
  return (
    <>
      <PinLocation />
      <CouponDeals />
      <BusinessDirectory />
    </>
  );
}
