import React from "react";

const fileCls =
  "field bg-white file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand-600";

export default function SpecialOffer() {
  return (
    <div className="space-y-4 rounded-2xl bg-mist p-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="service_0_name" className="field bg-white" placeholder="Offer name*" aria-label="Offer name" />
        <input type="text" className="field bg-white" placeholder="Price" aria-label="Price" />
      </div>
      <textarea name="service_0_detail" className="field bg-white" placeholder="Details about this offer" rows="5" aria-label="Offer details" />
      <div>
        <label className="field-label">Offer image</label>
        <input type="file" name="service_0_image" className={fileCls} />
      </div>
      <input type="text" name="service_0_view_more" className="field bg-white" placeholder="View More Link" aria-label="View more link" />
    </div>
  );
}
