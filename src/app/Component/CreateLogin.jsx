"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { PasswordInput } from "@/app/ui/PasswordInput";
function CreateLogin(e) {
  let { onForgot } = e,
    a = useRouter(),
    { login, user, ready } = useAuth(),
    [i, c] = useState({
      email: "",
      password: "",
    }),
    [d, m] = useState(""),
    [f, x] = useState(false),
    g = useRef(false),
    b = ready && user && "admin" !== user.role && !g.current;
  useEffect(() => {
    b && a.replace("/dashboard");
  }, [b]);
  let v = async (e) => {
    e.preventDefault(), (g.current = true), x(true), m("");
    try {
      let e = await login(i.email, i.password);
      if (e.panel_url) {
        window.location.href = e.panel_url;
        return;
      }
      a.push("/dashboard");
    } catch (e) {
      (g.current = false), m(e.message), x(false);
    }
  };
  return b ? (
    <p className="py-8 text-center text-sm text-slate-500" role="status">
      You’re signed in. Taking you to your account…
    </p>
  ) : (
    <form onSubmit={v} className="space-y-4">
      <div>
        <label htmlFor="login-email" className="field-label">
          Email
        </label>
        <input
          id="login-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter email*"
          className="field"
          value={i.email}
          onChange={(e) =>
            c({
              ...i,
              email: e.target.value,
            })
          }
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="login-password" className="field-label">
            Password
          </label>
          {onForgot && (
            <button
              type="button"
              onClick={onForgot}
              className="mb-1.5 text-xs font-semibold text-brand-600 hover:underline"
            >
              Forgot?
            </button>
          )}
        </div>
        <PasswordInput
          id="login-password"
          required
          autoComplete="current-password"
          placeholder="Enter Password"
          className="field"
          value={i.password}
          onChange={(e) =>
            c({
              ...i,
              password: e.target.value,
            })
          }
        />
      </div>
      {d && (
        <p className="rounded-xl bg-rose-500/10 px-4 py-2.5 text-sm font-medium text-rose-600" role="alert">
          {d}
        </p>
      )}
      <button type="submit" disabled={f} className="btn-primary w-full py-3.5 text-base disabled:opacity-70">
        {f ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
export default CreateLogin;
