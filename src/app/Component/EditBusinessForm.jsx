"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { useBusyCount, initialValues, toPayload, FormMessage, FormFields } from "@/app/Component/DashCrud";
import { DashCard } from "@/app/ui/blocks";
import { useAuth } from "@/app/context/AuthContext";
import { useApi, apiFetch, clearApiCache, vendorHref } from "@/app/lib/api";
let u = [
  {
    section: "Business",
  },
  {
    name: "company_name",
    label: "Business name",
    required: true,
  },
  {
    name: "tax_number",
    label: "Tax number",
  },
  {
    name: "bio",
    label: "About your business",
    type: "textarea",
    rows: 5,
  },
  {
    name: "avatar",
    label: "Logo",
    type: "image",
  },
  {
    name: "cover_image",
    label: "Cover image",
    type: "image",
  },
  {
    section: "Contact and location",
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
    name: "website",
    label: "Website",
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
    section: "Social links",
  },
  {
    name: "facebook",
    label: "Facebook",
    type: "url",
    placeholder: "https://...",
  },
  {
    name: "instagram",
    label: "Instagram",
    type: "url",
    placeholder: "https://...",
  },
  {
    name: "twitter",
    label: "Twitter",
    type: "url",
    placeholder: "https://...",
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    type: "url",
    placeholder: "https://...",
  },
  {
    name: "youtube",
    label: "YouTube",
    type: "url",
    placeholder: "https://...",
  },
];
function Cb() {
  let { user, refresh } = useAuth(),
    { data, error } = useApi("/vendor/profile", {
      cacheable: false,
    }),
    [i, b] = useState(null),
    [p, h] = useState({}),
    [x, g] = useState({}),
    [f, y] = useState(false),
    [w, v] = useBusyCount();
  useEffect(() => {
    data?.data && b(initialValues(u, data.data));
  }, [data]);
  let j = async (e) => {
    e.preventDefault(), y(true), g({}), h({});
    try {
      let e = await apiFetch("/vendor/profile", {
        method: "PUT",
        body: toPayload(u, i),
      });
      clearApiCache(),
        await refresh(),
        g({
          ok: e.message,
        });
    } catch (e) {
      g({
        error: e.message,
      }),
        h(e.errors || {});
    } finally {
      y(false);
    }
  };
  return (
    <DashCard
      badge="Business page"
      title="Edit Business Profile"
      action={
        user && (
          <Link href={vendorHref(user.id)} className="btn-ghost btn-sm">
            View business page
          </Link>
        )
      }
    >
      {error && <FormMessage error={error.message} />}
      {!i && !error && <p className="py-10 text-center text-slate-400">Loading…</p>}
      {i && (
        <form onSubmit={j} className="space-y-5">
          <FormFields fields={u} values={i} setValues={b} errors={p} onBusy={v} />
          <FormMessage ok={x.ok} error={x.error} />
          <button type="submit" disabled={f || w} className="btn-primary disabled:opacity-70">
            {f ? "Saving…" : w ? "Uploading image…" : "Save changes"}
          </button>
        </form>
      )}
    </DashCard>
  );
}
function EditBusinessForm() {
  return (
    <CommonDashLayout vendorOnly>
      <Cb />
    </CommonDashLayout>
  );
}
export default EditBusinessForm;
