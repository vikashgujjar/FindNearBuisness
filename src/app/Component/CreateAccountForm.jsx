"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser, FaStore, FaCircleCheck } from "react-icons/fa6";
import { useAuth } from "@/app/context/AuthContext";
import { PasswordInput } from "@/app/ui/PasswordInput";
import { useQueryParam } from "@/app/lib/api";
let x = [
  {
    id: "customer",
    label: "Customer",
    hint: "Find businesses, save favourites and get quotes.",
    note: "Instant access",
    icon: FaUser,
  },
  {
    id: "vendor",
    label: "Business / Vendor",
    hint: "List your business and receive customer leads.",
    note: "Needs admin approval",
    icon: FaStore,
  },
];
function CreateAccountForm(e) {
  let { onLogin } = e,
    a = useRouter(),
    { register, user, ready } = useAuth(),
    i = useRef(false),
    c = useQueryParam("type"),
    [g, b] = useState({
      user_type: "customer",
      name: "",
      company_name: "",
      phone: "",
      email: "",
      password: "",
    }),
    [v, y] = useState(""),
    [w, j] = useState(false),
    [N, S] = useState(""),
    C = (e) => (t) =>
      b({
        ...g,
        [e]: t.target.value,
      }),
    P = "vendor" === g.user_type;
  useEffect(() => {
    "vendor" === c &&
      b((e) => ({
        ...e,
        user_type: "vendor",
      }));
  }, [c]),
    useEffect(() => {
      ready &&
        user &&
        !i.current &&
        undefined !== c &&
        a.replace("vendor" === c && "customer" === user.role ? "/become-vendor" : "/dashboard");
    }, [ready, user, c]);
  let E = async (e) => {
    e.preventDefault(), (i.current = true), j(true), y("");
    try {
      let e = await register(g);
      if (e.pending) {
        S(e.message);
        return;
      }
      a.push("/dashboard");
    } catch (e) {
      (i.current = false), y(e.message);
    } finally {
      j(false);
    }
  };
  return N ? (
    <div className="rounded-2xl bg-mist p-6 text-center" role="status">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-2xl text-emerald-600">
        <FaCircleCheck />
      </span>
      <h2 className="mt-4 text-xl font-extrabold text-night-900">Application received</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{N}</p>
      {onLogin && (
        <button type="button" onClick={onLogin} className="btn-ghost mt-5">
          Back to sign in
        </button>
      )}
    </div>
  ) : (
    <form onSubmit={E} className="space-y-4">
      <fieldset>
        <div className="flex items-center justify-between">
          <legend className="field-label">I want to register as</legend>
          <Link href="/user-type" className="mb-1.5 text-xs font-semibold text-brand-600 hover:underline">
            What’s the difference?
          </Link>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {x.map((e) => {
            let { id, label, hint, note, icon: Icon } = e,
              o = g.user_type === id;
            return (
              <label
                key={id}
                className={`flex cursor-pointer flex-col gap-1 rounded-2xl border-2 p-3 transition ${o ? "border-brand-500 bg-brand-50" : "border-slate-200 hover:border-brand-200"}`}
              >
                <input
                  type="radio"
                  name="user_type"
                  value={id}
                  checked={o}
                  onChange={C("user_type")}
                  className="sr-only"
                />
                <span
                  className={`flex items-center gap-2 text-sm font-bold ${o ? "text-brand-700" : "text-night-900"}`}
                >
                  <Icon className="text-xs" /> {label}
                </span>
                <span className="text-xs leading-snug text-slate-500">{hint}</span>
                <span
                  className={`text-[11px] font-semibold ${"vendor" === id ? "text-amber-600" : "text-emerald-600"}`}
                >
                  {note}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
      {P && (
        <div>
          <label htmlFor="ca-company" className="field-label">
            Business name
          </label>
          <input
            id="ca-company"
            type="text"
            required
            placeholder="Business name*"
            className="field"
            value={g.company_name}
            onChange={C("company_name")}
          />
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ca-name" className="field-label">
            {P ? "Your name" : "Name"}
          </label>
          <input
            id="ca-name"
            type="text"
            required
            placeholder="Name*"
            className="field"
            value={g.name}
            onChange={C("name")}
          />
        </div>
        <div>
          <label htmlFor="ca-phone" className="field-label">
            Phone
          </label>
          <input
            id="ca-phone"
            type="tel"
            required={P}
            placeholder={P ? "Phone*" : "Phone"}
            className="field"
            value={g.phone}
            onChange={C("phone")}
          />
        </div>
      </div>
      <div>
        <label htmlFor="ca-email" className="field-label">
          Email
        </label>
        <input
          id="ca-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email ID*"
          className="field"
          value={g.email}
          onChange={C("email")}
        />
      </div>
      <div>
        <label htmlFor="ca-password" className="field-label">
          Password
        </label>
        <PasswordInput
          id="ca-password"
          required
          minLength={6}
          autoComplete="new-password"
          placeholder="Password (min 6 characters)"
          className="field"
          value={g.password}
          onChange={C("password")}
        />
      </div>
      {v && (
        <p className="rounded-xl bg-rose-500/10 px-4 py-2.5 text-sm font-medium text-rose-600" role="alert">
          {v}
        </p>
      )}
      <button type="submit" disabled={w} className="btn-primary w-full py-3.5 text-base disabled:opacity-70">
        {w ? "Creating account…" : P ? "Submit for approval" : "Register Now"}
      </button>
    </form>
  );
}
export default CreateAccountForm;
