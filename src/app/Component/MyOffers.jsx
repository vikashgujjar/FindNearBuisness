"use client";

import { ThumbTitle, DashCrud } from "@/app/Component/DashCrud";
import { formatPrice, formatDate } from "@/app/lib/api";
let n = [
  {
    name: "title",
    label: "Offer title",
    required: true,
  },
  {
    name: "listing_id",
    label: "Listing",
    type: "select",
    options: (e) =>
      (e.listings || []).map((e) => ({
        value: e.id,
        label: e.name,
      })),
  },
  {
    name: "code",
    label: "Coupon code",
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    min: 0,
    step: "0.01",
  },
  {
    name: "expires_at",
    label: "Expires on",
    type: "date",
  },
  {
    name: "link",
    label: "Link",
    type: "url",
    placeholder: "https://...",
  },
  {
    name: "image",
    label: "Image",
    type: "image",
    full: true,
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
  },
];
let i = [
  {
    label: "Offer",
    render: (e) => <ThumbTitle src={e.image} title={e.title} sub={e.listing_name} />,
  },
  {
    label: "Code",
    render: (e) => e.code || "—",
  },
  {
    label: "Price",
    render: (e) => (null != e.price ? formatPrice(e.price) : "—"),
  },
  {
    label: "Expires",
    render: (e) => (e.expires_at ? formatDate(e.expires_at) : "—"),
  },
];
function MyOffers() {
  return (
    <DashCrud
      type="offers"
      badge={"Coupons & deals"}
      title="Your Offers"
      noun="offer"
      fields={n}
      columns={i}
      nameOf={(e) => e.title}
      note="New offers go live after our team approves them."
    />
  );
}
export default MyOffers;
