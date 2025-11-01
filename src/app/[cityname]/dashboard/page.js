import React from "react";
// import Dashboard from "../Component/Dashboard";
import Dashboard from "@/app/Component/Dashboard";
// import PinLocation from "../Component/PinLocation";
import PinLocation from "@/app/Component/PinLocation";

export default function page() {
  return (
    <>
      <PinLocation />
      <Dashboard />
    </>
  );
}
