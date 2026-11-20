"use client";

import { useState } from "react";
import { apiFetch } from "@/app/lib/api";
function ForgatAccountForm() {
  let [e, t] = useState(""),
    [a, s] = useState(null),
    [r, o] = useState(false),
    i = async (t) => {
      t.preventDefault(), o(true);
      try {
        let t = await apiFetch("/auth/forgot-password", {
          method: "POST",
          body: {
            email: e,
          },
          auth: false,
        });
        s({
          ok: true,
          text: t.message,
        });
      } catch (e) {
        s({
          ok: false,
          text: e.message,
        });
      }
      o(false);
    };
  return (
    <form onSubmit={i} className="space-y-4">
      <div>
        <label htmlFor="fp-email" className="field-label">
          Email
        </label>
        <input
          id="fp-email"
          type="email"
          required
          placeholder="Enter Email*"
          className="field"
          value={e}
          onChange={(e) => t(e.target.value)}
        />
      </div>
      {a && (
        <p
          className={`rounded-xl px-4 py-2.5 text-sm font-medium ${a.ok ? "bg-emerald-50 text-emerald-700" : "bg-rose-500/10 text-rose-600"}`}
          role="status"
        >
          {a.text}
        </p>
      )}
      <button type="submit" disabled={r} className="btn-primary w-full py-3.5 text-base disabled:opacity-70">
        {r ? "Sending…" : "Send reset link"}
      </button>
    </form>
  );
}
export default ForgatAccountForm;
