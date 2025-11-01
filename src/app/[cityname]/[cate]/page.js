import React from "react";
// import RealState from '../Component/RealState'
import RealState from "@/app/Component/RealState";
// import PinLocation from '../Component/PinLocation'
import PinLocation from "@/app/Component/PinLocation";
// import BusinessDirectory from '../Component/BuinessDirectory'
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
