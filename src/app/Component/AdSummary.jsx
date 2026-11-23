"use client";

import Link from "next/link";
import { FaEye, FaArrowPointer } from "react-icons/fa6";
import { DashCrud } from "@/app/Component/DashCrud";
import { formatPrice, formatDate } from "@/app/lib/api";
// "Top placement" keeps a listing at the top of its category and needs no image.
let isBoost = (values, options) => options.ad_positions?.find((p) => String(p.id) === String(values.ad_position_id))?.slot === "category_boost";
let c = [
  {
    name: "ad_position_id",
    label: "Ads position",
    type: "select",
    required: true,
    options: (e) =>
      (e.ad_positions || []).map((e) => ({
        value: e.id,
        label: `${e.name} (${formatPrice(e.price_per_day)} / day)`,
      })),
  },
  {
    name: "listing_id",
    label: "Listing",
    type: "select",
    required: isBoost,
    hint: "While its ad is running, this listing stays at the top of its category",
    options: (e) =>
      (e.listings || []).map((e) => ({
        value: e.id,
        label: e.name,
      })),
  },
  {
    name: "category_id",
    label: "Only on this category",
    type: "select",
    placeholder: "All categories",
    options: (e) => (e.categories || []).map((e) => ({ value: e.id, label: e.name })),
  },
  {
    name: "start_date",
    label: "Start date",
    type: "date",
    required: true,
  },
  {
    name: "end_date",
    label: "End date",
    type: "date",
    required: true,
  },
  {
    name: "link",
    label: "Link",
    type: "url",
    placeholder: "https://...",
    full: true,
  },
  {
    name: "image",
    label: "Ad image",
    type: "image",
    required: (values, options) => !isBoost(values, options),
    full: true,
  },
];
let o = [
  {
    label: "Ads Position",
    render: (e) => <span className="font-semibold text-night-900">{e.position_name}</span>,
  },
  {
    label: "Listing",
    render: (e) => e.listing_name || "\u2014",
  },
  {
    label: "Start Date",
    render: (e) => formatDate(e.start_date),
  },
  {
    label: "End Date",
    render: (e) => formatDate(e.end_date),
  },
  {
    label: "Cost",
    render: (e) => formatPrice(e.total_cost),
  },
  {
    label: "Views",
    render: (e) => {
      var t;
      return (
        <span className="flex items-center gap-1.5">
          <FaEye className="text-slate-300" />
          {e.views ?? 0}
        </span>
      );
    },
  },
  {
    label: "Clicks",
    render: (e) => {
      var t;
      return (
        <span className="flex items-center gap-1.5">
          <FaArrowPointer className="text-slate-300" />
          {e.clicks ?? 0}
        </span>
      );
    },
  },
];
function x(props, t) {
  var a, n;
  let l = Number(t?.ad_positions?.find((t) => String(t.id) === String(props.ad_position_id))?.price_per_day) || 0,
    r =
      props.start_date && props.end_date
        ? Math.max(0, Math.round((new Date(props.end_date) - new Date(props.start_date)) / 864e5) + 1)
        : 0;
  return (
    <div className="grid grid-cols-3 gap-3 rounded-2xl bg-mist p-4 text-center">
      <div>
        <p className="text-[11px] font-bold uppercase text-slate-400">Days</p>
        <p className="font-display text-xl font-extrabold">{r}</p>
      </div>
      <div>
        <p className="text-[11px] font-bold uppercase text-slate-400">Per day</p>
        <p className="font-display text-xl font-extrabold">{formatPrice(l)}</p>
      </div>
      <div>
        <p className="text-[11px] font-bold uppercase text-slate-400">Total</p>
        <p className="font-display text-xl font-extrabold text-gradient">{formatPrice(r * l)}</p>
      </div>
    </div>
  );
}
function AdSummary(props) {
  let { startNew = false } = props;
  return (
    <DashCrud
      type="ads"
      badge="Paid Ads"
      title="Your Banner Ads"
      noun="ad"
      fields={c}
      columns={o}
      startNew={startNew}
      extra={x}
      minWidth="min-w-[820px]"
      nameOf={(e) => e.position_name || "this ad"}
      locked={(e) => "pending" !== e.status}
      action={
        <Link href="/ads-pricing" className="btn-ghost btn-sm">
          Pricing and other details
        </Link>
      }
      note="Ads can be changed or deleted while they are pending. Once you submit an ad, our team will contact you about the next steps."
    />
  );
}
export default AdSummary;
