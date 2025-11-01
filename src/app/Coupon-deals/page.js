import React from "react";
// import CouponDeals from '../Component/CouponDeals'
import CouponDeals from "../Component/CouponDeals";
import BusinessDirectory from "../Component/BuinessDirectory";
import PinLocation from "../Component/PinLocation";

export default function page() {
  return (
    <>
      <PinLocation />
      <CouponDeals />
      <BusinessDirectory />
    </>
  );
}
