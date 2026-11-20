"use client";

import { useState } from "react";
import { FaCrown, FaCoins } from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { FormMessage } from "@/app/Component/DashCrud";
import { DashCard, TableWrap, StatusChip } from "@/app/ui/blocks";
import { useAuth } from "@/app/context/AuthContext";
import { useApi, formatDate, apiFetch, formatPrice } from "@/app/lib/api";
let m = [
  ["manual", "Bank transfer / cash"],
  ["razorpay", "RazorPay"],
  ["paytm", "Paytm"],
  ["paypal", "PayPal"],
  ["stripe", "Stripe"],
];
function Cp(props) {
  var t, a, i, p, x;
  let { focus } = props,
    { user } = useAuth(),
    { data } = useApi("/vendor/options", {
      cacheable: false,
    }),
    { data: b, reload } = useApi("/vendor/payments", {
      cacheable: false,
    }),
    [g, y] = useState("points" === focus ? "points" : "plan"),
    [v, N] = useState({
      plan_id: "",
      points: "",
      method: "manual",
      reference: "",
    }),
    [w, S] = useState({}),
    [_, P] = useState(false),
    k = (e) => (t) =>
      N((a) => ({
        ...a,
        [e]: t.target.value,
      })),
    C = (data?.plans || []).filter((e) => Number(e.price) > 0),
    D = C.find((e) => String(e.id) === String(v.plan_id)),
    F = "plan" === g ? D?.price : Number(v.points) || 0,
    T = b?.data,
    q = [
      ["Plan", user?.plan?.name || "Free plan"],
      ["Expiry Date", user?.plan?.expires_at ? formatDate(user.plan.expires_at) : "—"],
      [
        "Remaining Days",
        user?.plan?.expires_at
          ? String(Math.max(0, Math.ceil((new Date(user.plan.expires_at) - new Date()) / 864e5)))
          : "—",
      ],
      ["Points", String(user?.points ?? 0)],
    ],
    E = async (e) => {
      e.preventDefault(), P(true), S({});
      try {
        let e = await apiFetch("/vendor/payments", {
          method: "POST",
          body:
            "plan" === g
              ? {
                  type: "plan",
                  plan_id: v.plan_id,
                  method: v.method,
                  reference: v.reference || null,
                }
              : {
                  type: "points",
                  points: Number(v.points),
                  method: v.method,
                  reference: v.reference || null,
                },
        });
        S({
          ok: e.message,
        }),
          N((e) => ({
            ...e,
            plan_id: "",
            points: "",
            reference: "",
          })),
          reload();
      } catch (e) {
        S({
          error: e.message,
        });
      } finally {
        P(false);
      }
    };
  return (
    <DashCard badge="Payment" title="Payment Status">
      <div className="relative overflow-hidden rounded-3xl bg-night-900 p-6 text-white">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-magenta-500/40 blur-2xl" />
        <div className="relative flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-xl">
            <FaCrown />
          </span>
          <div>
            <p className="text-sm text-slate-400">{user?.company_name || user?.name}</p>
            <h2 className="text-2xl font-extrabold">{user?.plan?.name || "Free plan"}</h2>
          </div>
        </div>
        <dl className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {q.map((e) => {
            let [t, a] = e;
            return (
              <div key={t} className="rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{t}</dt>
                <dd className="mt-1 font-semibold">{a}</dd>
              </div>
            );
          })}
        </dl>
      </div>
      <div className="mt-8 inline-flex gap-1 rounded-full bg-mist p-1" role="tablist">
        {[
          ["plan", "Change plan", FaCrown],
          ["points", "Buy points", FaCoins],
        ].map((e) => {
          let [t, a, Cl] = e;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={g === t}
              onClick={() => {
                y(t), S({});
              }}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${g === t ? "bg-night-900 text-white" : "text-slate-500"}`}
            >
              <Cl className="text-xs" /> {a}
            </button>
          );
        })}
      </div>
      <form onSubmit={E} className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {"plan" === g ? (
            <div>
              <label htmlFor="pay-plan" className="field-label">
                Choose your plan *
              </label>
              <select id="pay-plan" className="field" required value={v.plan_id} onChange={k("plan_id")}>
                <option value="">Choose your plan</option>
                {C.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                    {" - "}
                    {formatPrice(e.price)}/{e.duration_years > 1 ? `${e.duration_years} years` : "year"}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label htmlFor="pay-points" className="field-label">
                Points *
              </label>
              <input
                id="pay-points"
                type="number"
                min="1"
                max="100000"
                required
                className="field"
                value={v.points}
                onChange={k("points")}
              />
              <p className="mt-1 text-xs text-slate-400">Cost of 1 point = $1</p>
            </div>
          )}
          <div>
            <label htmlFor="pay-method" className="field-label">
              Payment mode *
            </label>
            <select id="pay-method" className="field" value={v.method} onChange={k("method")}>
              {m.map((e) => {
                let [t, a] = e;
                return (
                  <option key={t} value={t}>
                    {a}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="pay-ref" className="field-label">
              Payment reference
            </label>
            <input
              id="pay-ref"
              className="field"
              maxLength={120}
              placeholder="Transaction ID, if you already paid"
              value={v.reference}
              onChange={k("reference")}
            />
          </div>
        </div>
        <FormMessage ok={w.ok} error={w.error} />
        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" disabled={_} className="btn-primary disabled:opacity-70">
            {_ ? "Sending…" : "Send request"}
          </button>
          {F > 0 && (
            <p className="text-sm text-slate-500">
              {"You'll pay "}
              <b className="text-night-900">{formatPrice(F)}</b>. Our team activates it once your payment is confirmed.
            </p>
          )}
        </div>
      </form>
      <h3 className="mb-3 mt-8 font-bold text-night-900">Payment history</h3>
      <TableWrap>
        <table className="data-table min-w-[620px]">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Mode</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {(T || []).map((e) => (
              <tr key={e.id}>
                <td>{formatDate(e.created_at)}</td>
                <td className="font-semibold text-night-900">{e.description}</td>
                <td className="capitalize">{e.method}</td>
                <td>{formatPrice(e.amount)}</td>
                <td>
                  <StatusChip status={e.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
      {!T && <p className="py-8 text-center text-slate-400">Loading…</p>}
      {T?.length === 0 && <p className="py-8 text-center text-slate-400">No payments yet.</p>}
    </DashCard>
  );
}
function PaymentStatus(props) {
  let { focus } = props;
  return (
    <CommonDashLayout vendorOnly>
      <Cp focus={focus} />
    </CommonDashLayout>
  );
}
export default PaymentStatus;
