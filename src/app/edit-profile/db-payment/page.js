import React from "react";
import RealState from "@/app/Component/RealState";
import PinLocation from "@/app/Component/PinLocation";
import BusinessDirectory from "@/app/Component/BuinessDirectory";

export default function page() {
  return (
    <>
      <PinLocation />
      <RealState />
      <BusinessDirectory />
    </>
  );
}
