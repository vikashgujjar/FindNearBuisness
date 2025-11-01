import React from "react";
import PinLocation from "../Component/PinLocation";
import BusinessDirectory from "../Component/BuinessDirectory";
import EventInner from "../Component/EventInner";

export default function page() {
  return (
    <div>
      <PinLocation />
      <EventInner />
      <BusinessDirectory />
    </div>
  );
}
