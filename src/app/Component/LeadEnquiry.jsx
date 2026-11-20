"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaTag, FaClock, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { TableWrap, StatusChip, iconBtn, DashCard } from "@/app/ui/blocks";
import { useUserLocation, cityHref } from "@/app/context/LocationContext";
import { useAuth } from "@/app/context/AuthContext";
import { useApi, apiFetch, formatDate, listingHref } from "@/app/lib/api";
let m = {
  quote: "Quote request",
  support: "Help & support",
  contact: "Contact",
  requirement: "Requirement",
  advertise: "Advertise",
  event: "Event registration",
  blog: "Blog enquiry",
};
function Cu() {
  let { data, error } = useApi("/vendor/leads", {
      cacheable: false,
    }),
    [s, n] = useState({}),
    [i, c] = useState(""),
    x = data?.data,
    o = async (e, t) => {
      c(""),
        n((s) => ({
          ...s,
          [e]: t,
        }));
      try {
        await apiFetch(`/vendor/leads/${e}`, {
          method: "PATCH",
          body: {
            status: t,
          },
        });
      } catch (t) {
        n((t) => ({
          ...t,
          [e]: undefined,
        })),
          c(t.message);
      }
    };
  return (
    <>
      <TableWrap>
        <table className="data-table min-w-[820px]">
          <thead>
            <tr>
              <th>No</th>
              <th>Customer</th>
              <th>Contact</th>
              <th>About</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {(x || []).map((e, t) => {
              var l, n;
              return (
                <tr key={e.id}>
                  <td className="font-semibold text-slate-400">{String(t + 1).padStart(2, "0")}</td>
                  <td>
                    <p className="font-semibold text-night-900">{e.name}</p>
                    <p className="text-xs text-slate-400">
                      {formatDate(e.created_at?.replace(" ", "T"))}
                      {e.city ? ` · ${e.city}` : ""}
                    </p>
                  </td>
                  <td className="space-y-1 text-xs">
                    {e.phone && (
                      <a href={`tel:${e.phone}`} className="flex items-center gap-2 hover:text-brand-600">
                        <FaPhone className="text-brand-500" /> {e.phone}
                      </a>
                    )}
                    {e.email && (
                      <a href={`mailto:${e.email}`} className="flex items-center gap-2 hover:text-brand-600">
                        <FaEnvelope className="text-slate-400" /> {e.email}
                      </a>
                    )}
                  </td>
                  <td className="text-xs">
                    <p className="font-semibold text-night-900">{e.about || "—"}</p>
                    <p className="text-slate-400">{m[e.type] || e.type}</p>
                  </td>
                  <td className="max-w-[200px] text-xs">{e.message || "—"}</td>
                  <td>
                    <select
                      aria-label={`Status of lead from ${e.name}`}
                      className="field w-32 py-1.5 text-xs"
                      value={s[e.id] ?? e.status}
                      onChange={(t) => o(e.id, t.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableWrap>
      {i && (
        <p className="mt-4 text-sm font-semibold text-rose-600" role="alert">
          {i}
        </p>
      )}
      {error && (
        <p className="py-10 text-center text-sm text-rose-600" role="alert">
          {error.message}
        </p>
      )}
      {!x && !error && <p className="py-10 text-center text-slate-400">Loading…</p>}
      {x?.length === 0 && (
        <p className="py-10 text-center text-slate-400">Enquiries about your business appear here.</p>
      )}
    </>
  );
}
function Cp() {
  var e;
  let { location } = useUserLocation(),
    { data } = useApi("/account/enquiries", {
      cacheable: false,
    }),
    l = data?.data?.map((e) => {
      var t, s;
      return {
        id: e.id,
        business: e.listing?.name || e.service || "Findbee team",
        slug: e.listing?.slug,
        type: m[e.type] || e.type,
        date: formatDate(e.created_at),
        time: e.created_at
          ? new Date(e.created_at.replace(" ", "T")).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })
          : "",
        message: e.message,
        status: e.status ? e.status[0].toUpperCase() + e.status.slice(1) : "New",
      };
    });
  return (
    <>
      <TableWrap>
        <table className="data-table min-w-[820px]">
          <thead>
            <tr>
              <th>No</th>
              <th>Business</th>
              <th>Enquiry Details</th>
              <th>Message</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(l || []).map((e, s) => (
              <tr key={e.id}>
                <td className="font-semibold text-slate-400">{String(s + 1).padStart(2, "0")}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/img/dashboard/lead.webp"
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-night-900">{e.business}</p>
                      <p className="text-xs text-slate-400">{e.date}</p>
                    </div>
                  </div>
                </td>
                <td className="space-y-1 text-xs">
                  <p className="flex items-center gap-2">
                    <FaTag className="text-brand-500" /> {e.type}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaClock className="text-slate-400" /> {e.date}
                    {", "}
                    {e.time}
                  </p>
                </td>
                <td className="max-w-[200px] text-xs">{e.message || "—"}</td>
                <td>
                  <StatusChip status={e.status} />
                </td>
                <td>
                  <div className="flex justify-end gap-1.5">
                    {e.slug ? (
                      <Link href={listingHref(e.slug)} className={iconBtn} title="View business">
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </Link>
                    ) : (
                      <Link href={cityHref(location, "lead")} className={iconBtn} title="Enquiry">
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
      {!l && <p className="py-10 text-center text-slate-400">Loading…</p>}
      {l?.length === 0 && <p className="py-10 text-center text-slate-400">You haven't sent any enquiries yet.</p>}
    </>
  );
}
let LeadEnquiry = function () {
  let { user } = useAuth(),
    t = user?.role === "vendor",
    [s, n] = useState("received");
  return (
    <CommonDashLayout>
      {t ? (
        <DashCard badge="Lead enquiry" title="Your Leads">
          <div className="mb-6 inline-flex gap-1 rounded-full bg-mist p-1" role="tablist">
            {[
              ["received", "Received"],
              ["sent", "Sent by you"],
            ].map((e) => {
              let [t, l] = e;
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={s === t}
                  onClick={() => n(t)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${s === t ? "bg-night-900 text-white" : "text-slate-500"}`}
                >
                  {l}
                </button>
              );
            })}
          </div>
          {"received" === s ? <Cu /> : <Cp />}
        </DashCard>
      ) : (
        <DashCard badge="My enquiries" title="Enquiries you sent">
          <Cp />
        </DashCard>
      )}
    </CommonDashLayout>
  );
};
export default LeadEnquiry;
