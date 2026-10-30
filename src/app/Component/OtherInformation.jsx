import React from "react";

export default function OtherInformation() {
  return (
    <div className="grid items-center gap-4 rounded-2xl bg-mist p-4 sm:grid-cols-2">
      <input type="text" placeholder="Experience" disabled className="field bg-white" aria-label="Field name" />
      <input type="text" placeholder="20 Years" className="field bg-white" aria-label="Experience" />
    </div>
  );
}
