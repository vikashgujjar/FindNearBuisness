import React from "react";
import { FaYoutube, FaMapLocationDot, FaImages } from "react-icons/fa6";

const fileCls =
  "field file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand-600";

function Group({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-100 p-4 sm:p-5">
      <h3 className="mb-3 flex items-center gap-2 font-bold text-night-900">
        <Icon className="text-brand-500" /> {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function VideoGallery() {
  return (
    <div className="space-y-4">
      <Group icon={FaYoutube} title="Video Gallery">
        <textarea id="listing_video" name="listing_video[]" className="field" placeholder="Paste Your YouTube iframe Code here" rows="2" aria-label="YouTube iframe code" />
      </Group>
      <Group icon={FaMapLocationDot} title="Map and 360 view">
        <textarea name="listing_map" className="field" placeholder="Shop location" rows="2" aria-label="Shop location" />
        <textarea name="listing_360" className="field" placeholder="360 View" rows="2" aria-label="360 view" />
      </Group>
      <Group icon={FaImages} title="Photo gallery">
        <div className="grid gap-3 sm:grid-cols-2">
          <input type="file" className={fileCls} aria-label="Photo 1" />
          <input type="file" className={fileCls} aria-label="Photo 2" />
        </div>
      </Group>
    </div>
  );
}
