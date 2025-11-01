"use client";

import React, { useState } from "react";
import MyDashboard from "./MyDashboard";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("mydashboard");

  const tabHandler = (tab) => {
    setActiveTab((preTab) => (preTab == tab ? null : tab));
  };

  return (
    <>
      <MyDashboard />
    </>
  );
}
