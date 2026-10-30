import React from "react";

const fileCls =
  "field file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand-600";

export default function Servicesprovider() {
  return (
    <ul className="space-y-4">
      {[0, 1].map((index) => (
        <li key={index} className="grid gap-4 rounded-2xl bg-mist p-4 sm:grid-cols-2">
          <div>
            <label className="field-label">Service name</label>
            <input type="text" name={`service_id[${index}]`} className="field bg-white" placeholder="Ex: Plumbile" />
          </div>
          <div>
            <label className="field-label">Profile image</label>
            <input type="file" name={`service_image[${index}]`} className={`${fileCls} bg-white`} />
          </div>
        </li>
      ))}
    </ul>
  );
}
