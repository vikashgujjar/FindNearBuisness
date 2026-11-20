"use client";

import { FaStar, FaEye } from "react-icons/fa6";
import { ThumbTitle, DashCrud } from "@/app/Component/DashCrud";
import { formatDate, listingHref } from "@/app/lib/api";
let r = [
  {
    section: "Basic details",
  },
  {
    name: "name",
    label: "Listing name",
    required: true,
  },
  {
    name: "category_id",
    label: "Category",
    type: "select",
    required: true,
    options: (e) =>
      (e.categories || []).map((e) => ({
        value: e.id,
        label: e.name,
      })),
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    rows: 5,
  },
  {
    section: "Contact",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    type: "tel",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "website",
    label: "Website",
    placeholder: "www.example.com",
  },
  {
    section: "Location",
  },
  {
    name: "address",
    label: "Address",
    full: true,
  },
  {
    name: "city",
    label: "City",
  },
  {
    name: "state",
    label: "State",
  },
  {
    name: "pincode",
    label: "Pincode",
  },
  {
    section: "Photos",
  },
  {
    name: "logo",
    label: "Logo",
    type: "image",
  },
  {
    name: "cover_image",
    label: "Cover image",
    type: "image",
  },
  {
    name: "gallery",
    label: "Gallery",
    type: "images",
  },
  {
    section: "Services and business info",
  },
  {
    name: "services",
    label: "Services",
    type: "services",
  },
  {
    name: "service_areas",
    label: "Service areas",
    type: "tags",
    placeholder: "Type a city and press Enter",
  },
  {
    name: "company_info",
    label: "Company info",
    type: "pairs",
    hint: "For example: Established / 2010",
  },
  {
    section: "Map and video",
  },
  {
    name: "map_embed",
    label: "Map embed link",
    type: "url",
    placeholder: "https://www.google.com/maps/embed?...",
    full: true,
  },
  {
    name: "video_embed",
    label: "Video embed link",
    type: "url",
    placeholder: "https://www.youtube.com/embed/...",
    full: true,
  },
  {
    name: "view_360_embed",
    label: "360\xb0 view embed link",
    type: "url",
    placeholder: "https://...",
    full: true,
  },
];
let o = [
  {
    label: "Listing Name",
    render: (e) => (
      <ThumbTitle
        src={e.logo || e.cover_image}
        title={e.name}
        sub={[e.category_name, formatDate(e.created_on)].filter(Boolean).join(" \xb7 ")}
      />
    ),
  },
  {
    label: "Rating",
    render: (e) => {
      var a;
      return (
        <span className="chip bg-pin-400/20 text-amber-600">
          <FaStar /> {e.rating ?? 0}
        </span>
      );
    },
  },
  {
    label: "Views",
    render: (e) => {
      var a;
      return (
        <span className="flex items-center gap-1.5">
          <FaEye className="text-slate-300" /> {e.views ?? 0}
        </span>
      );
    },
  },
];
function AllListing(props) {
  let { startNew = false } = props;
  return (
    <DashCrud
      type="listings"
      badge="All Listing"
      title="Listing Details"
      noun="listing"
      fields={r}
      columns={o}
      startNew={startNew}
      nameOf={(e) => e.name}
      previewUrl={(e) => listingHref(e)}
      note="New and edited listings go live after our team approves them."
    />
  );
}
export default AllListing;
