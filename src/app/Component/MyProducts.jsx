"use client";

import { ThumbTitle, DashCrud } from "@/app/Component/DashCrud";
import { formatPrice, productHref } from "@/app/lib/api";
let l = [
  {
    name: "name",
    label: "Product name",
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
    name: "category_id",
    label: "Category",
    type: "select",
    options: (e) =>
      (e.categories || []).map((e) => ({
        value: e.id,
        label: e.name,
      })),
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    required: true,
    min: 0,
    step: "0.01",
  },
  {
    name: "old_price",
    label: "Old price",
    type: "number",
    min: 0,
    step: "0.01",
  },
  {
    name: "discount_percent",
    label: "Discount %",
    type: "number",
    min: 0,
    max: 100,
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    rows: 5,
  },
  {
    name: "images",
    label: "Images",
    type: "images",
  },
  {
    name: "highlights",
    label: "Highlights",
    type: "tags",
    placeholder: "Type a highlight and press Enter",
  },
  {
    name: "specifications",
    label: "Specifications",
    type: "pairs",
    hint: "For example: Weight / 2 kg",
  },
  {
    name: "tags",
    label: "Tags",
    type: "tags",
  },
];
let i = [
  {
    label: "Product",
    render: (e) => {
      var t;
      return <ThumbTitle src={e.images?.[0]} title={e.name} sub={e.category_name} />;
    },
  },
  {
    label: "Listing",
    render: (e) => e.listing_name || "—",
  },
  {
    label: "Price",
    render: (e) => <span className="font-semibold text-night-900">{formatPrice(e.price)}</span>,
  },
];
function MyProducts() {
  return (
    <DashCrud
      type="products"
      badge="Products"
      title="Your Products"
      noun="product"
      fields={l}
      columns={i}
      nameOf={(e) => e.name}
      previewUrl={(e) => productHref(e.slug)}
      note="New products go live after our team approves them."
    />
  );
}
export default MyProducts;
