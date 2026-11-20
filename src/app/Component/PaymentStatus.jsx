"use client";

import { useState } from "react";
import { FaCrown, FaCoins, FaLock } from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { FormMessage } from "@/app/Component/DashCrud";
import { DashCard, TableWrap, StatusChip } from "@/app/ui/blocks";
import { useAuth } from "@/app/context/AuthContext";
import { useApi, formatDate, apiFetch, formatPrice } from "@/app/lib/api";
import { openRazorpay } from "@/app/lib/razorpay";

// Vendor's plan, points and payment history; buy a plan or points online with Razorpay.
function PaymentPanel({ focus }) {
  const { user, refresh } = useAuth();
  const { data: options } = useApi("/vendor/options", { cacheable: false });
  const { data: history, reload } = useApi("/vendor/payments", { cacheable: false });
  const [tab, setTab] = useState(focus === "points" ? "points" : "plan");
  const [form, setForm] = useState({ plan_id: "", points: "" });
  const [status, setStatus] = useState({});
  const [busy, setBusy] = useState(false);

  const plans = (options?.plans || []).filter((p) => Number(p.price) > 0);
  const pointPrice = Number(options?.point_price) || 1;
  const plan = plans.find((p) => String(p.id) === String(form.plan_id));
  const amount = tab === "plan" ? Number(plan?.price) || 0 : (Number(form.points) || 0) * pointPrice;
  const rows = history?.data;

  const summary = [
    ["Plan", user?.plan?.name || "Free plan"],
    ["Expiry Date", user?.plan?.expires_at ? formatDate(user.plan.expires_at) : "—"],
    [
      "Remaining Days",
      user?.plan?.expires_at ? String(Math.max(0, Math.ceil((new Date(user.plan.expires_at) - new Date()) / 864e5))) : "—",
    ],
    ["Points", String(user?.points ?? 0)],
  ];

  const pay = async (e) => {
    e.preventDefault();
    setBusy(true);
    setStatus({});
    try {
      // 1. The server creates the payment and the Razorpay order (and decides the amount).
      const body = tab === "plan" ? { type: "plan", plan_id: form.plan_id } : { type: "points", points: Number(form.points) };
      const started = await apiFetch("/vendor/payments", { method: "POST", body });
      if (!started.checkout) {
        // free plan: nothing to pay
        setStatus({ ok: started.message });
      } else {
        // 2. Customer pays in the Razorpay window. 3. The server verifies it and activates the plan / points.
        const result = await openRazorpay(started.checkout);
        setStatus({ ok: "Confirming your payment…" });
        const done = await apiFetch(`/vendor/payments/${started.data.id}/confirm`, { method: "POST", body: result });
        setStatus({ ok: done.message });
      }
      setForm({ plan_id: "", points: "" });
      refresh(); // new plan / points in the summary
    } catch (err) {
      setStatus(err.cancelled ? { error: "Payment cancelled. You have not been charged." } : { error: err.message });
    } finally {
      reload();
      setBusy(false);
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
          {summary.map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</dt>
              <dd className="mt-1 font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 inline-flex gap-1 rounded-full bg-mist p-1" role="tablist">
        {[
          ["plan", "Change plan", FaCrown],
          ["points", "Buy points", FaCoins],
        ].map(([id, label, Icon]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => {
              setTab(id);
              setStatus({});
            }}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${tab === id ? "bg-night-900 text-white" : "text-slate-500"}`}
          >
            <Icon className="text-xs" /> {label}
          </button>
        ))}
      </div>

      <form onSubmit={pay} className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {tab === "plan" ? (
            <div>
              <label htmlFor="pay-plan" className="field-label">
                Choose your plan *
              </label>
              <select
                id="pay-plan"
                className="field"
                required
                value={form.plan_id}
                onChange={(e) => setForm({ ...form, plan_id: e.target.value })}
              >
                <option value="">Choose your plan</option>
                {plans.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} - {formatPrice(p.price)}/{p.duration_years > 1 ? `${p.duration_years} years` : "year"}
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
                value={form.points}
                onChange={(e) => setForm({ ...form, points: e.target.value })}
              />
              <p className="mt-1 text-xs text-slate-400">Cost of 1 point = {formatPrice(pointPrice)}</p>
            </div>
          )}
        </div>
        <FormMessage ok={status.ok} error={status.error} />
        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" disabled={busy || amount <= 0} className="btn-primary disabled:opacity-70">
            <FaLock className="text-xs" />
            {busy ? "Processing…" : amount > 0 ? `Pay ${formatPrice(amount)}` : "Pay"}
          </button>
          <p className="text-sm text-slate-500">Secure payment by Razorpay: UPI, cards, net banking and wallets.</p>
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
            {(rows || []).map((p) => (
              <tr key={p.id}>
                <td>{formatDate(p.created_at)}</td>
                <td className="font-semibold text-night-900">{p.description}</td>
                <td className="capitalize">{p.method}</td>
                <td>{formatPrice(p.amount)}</td>
                <td>
                  <StatusChip status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
      {!rows && <p className="py-8 text-center text-slate-400">Loading…</p>}
      {rows?.length === 0 && <p className="py-8 text-center text-slate-400">No payments yet.</p>}
    </DashCard>
  );
}

function PaymentStatus({ focus }) {
  return (
    <CommonDashLayout vendorOnly>
      <PaymentPanel focus={focus} />
    </CommonDashLayout>
  );
}
export default PaymentStatus;
