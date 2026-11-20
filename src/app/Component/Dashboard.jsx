"use client";

import { useState } from "react";
import MyDashboard from "@/app/Component/MyDashboard";
function Dashboard() {
  let [e, s] = useState("mydashboard");
  return (
    <>
      <MyDashboard />
    </>
  );
}
export default Dashboard;
