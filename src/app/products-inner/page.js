import React from "react";
import PinLocation from "../Component/PinLocation";
import ProductsInner from "../Component/ProductsInner";
import BusinessDirectory from "../Component/BuinessDirectory";

export default function page() {
  return (
    <div>
      <PinLocation />
      <ProductsInner />
      <BusinessDirectory />
    </div>
  );
}
