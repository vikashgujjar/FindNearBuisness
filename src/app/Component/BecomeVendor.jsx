"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCircleCheck, FaBriefcase, FaClock, FaTriangleExclamation } from "react-icons/fa6";
import { DashCard } from "@/app/ui/blocks";
import { FormMessage } from "@/app/Component/DashCrud";
import { useAuth } from "@/app/context/AuthContext";
import { apiFetch, clearApiCache } from "@/app/lib/api";
function Cx(props) {
  let { icon: Icon, color, title, children } = props;
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl bg-mist p-6 sm:flex-row sm:items-center">
      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-lg ${color}`}>
        <Icon />
      </span>
      <div className="flex-1">
        <p className="font-bold text-night-900">{title}</p>
        <div className="mt-1 text-sm text-slate-500">{children}</div>
      </div>
    </div>
  );
}
function BecomeVendor() {
  let { user, setUser } = useAuth(),
    [s, n] = useState({
      company_name: user?.company_name || "",
      phone: user?.phone || "",
    }),
    [u, h] = useState(""),
    [p, g] = useState(false),
    b = (e) => (t) =>
      n((s) => ({
        ...s,
        [e]: t.target.value,
      })),
    f = async (e) => {
      e.preventDefault(), g(true), h("");
      try {
        let e = await apiFetch("/account/become-vendor", {
          method: "POST",
          body: s,
        });
        clearApiCache(), setUser(e.data);
      } catch (e) {
        h(e.message);
      } finally {
        g(false);
      }
    };
  return user?.role === "vendor" ? (
    <DashCard badge="Business account" title="You have a business account">
      <Cx icon={FaCircleCheck} color="bg-emerald-50 text-emerald-600" title="Your business account is approved">
        Add your listings, products and offers from your dashboard.
      </Cx>
      <Link href="/dashboard" className="btn-primary mt-5">
        Go to my dashboard
      </Link>
    </DashCard>
  ) : user?.role !== "customer" ? (
    <DashCard badge="Business account" title="Business tools">
      <Cx icon={FaBriefcase} color="bg-brand-gradient text-white" title="Not available for this account">
        Admin accounts manage businesses from the admin panel.
      </Cx>
    </DashCard>
  ) : "pending" === user.vendor_status ? (
    <DashCard badge="Business account" title="Request under review">
      <Cx
        icon={FaClock}
        color="bg-pin-400/20 text-amber-600"
        title={`We're reviewing ${user.company_name || "your business"}`}
      >
        You'll get an email once it is approved. You can keep using your account as usual until then.
      </Cx>
    </DashCard>
  ) : (
    <DashCard badge="Business account" title="List your business">
      {"rejected" === user.vendor_status ? (
        <Cx
          icon={FaTriangleExclamation}
          color="bg-rose-500/10 text-rose-600"
          title="Your last request was not approved"
        >
          {user.vendor_rejection_reason ? (
            <>
              {"Reason: "}
              {user.vendor_rejection_reason}
              {". "}
            </>
          ) : null}
          You can update your details and apply again.
        </Cx>
      ) : (
        <Cx
          icon={FaBriefcase}
          color="bg-brand-gradient text-white"
          title="Upgrade this account, no new registration needed"
        >
          You keep the same email and password. Once our team approves your request, you can add listings, products,
          events, blog posts and ads from this dashboard.
        </Cx>
      )}
      <form onSubmit={f} className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bv-company" className="field-label">
              Business name *
            </label>
            <input
              id="bv-company"
              required
              maxLength={150}
              className="field"
              value={s.company_name}
              onChange={b("company_name")}
            />
          </div>
          <div>
            <label htmlFor="bv-phone" className="field-label">
              Phone *
            </label>
            <input
              id="bv-phone"
              type="tel"
              required
              maxLength={20}
              className="field"
              value={s.phone}
              onChange={b("phone")}
            />
          </div>
        </div>
        <FormMessage error={u} />
        <button type="submit" disabled={p} className="btn-primary disabled:opacity-70">
          {p ? "Sending…" : "Send for approval"}
        </button>
      </form>
    </DashCard>
  );
}
export { BecomeVendor };
