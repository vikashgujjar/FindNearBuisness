import React from "react";

import PinLocation from "@/app/Component/PinLocation";
import BusinessDirectory from "@/app/Component/BuinessDirectory";
import All from "@/app/Component/All";

export default function page() {
  return (
    <div>
      <PinLocation />
      <All />
      <BusinessDirectory />
    </div>
  );
}
