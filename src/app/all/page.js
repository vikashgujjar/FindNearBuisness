import React from "react";
import PinLocation from "../Component/PinLocation";
import BusinessDirectory from "../Component/BuinessDirectory";
import All from "../Component/All";

export default function page() {
  return (
    <div>
      <PinLocation />
      <All />
      <BusinessDirectory />
    </div>
  );
}
