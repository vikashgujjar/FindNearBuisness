import React from "react";

export default function ForgatAccountForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="fp-email" className="field-label">Email</label>
        <input id="fp-email" type="email" placeholder="Enter Email*" className="field" />
      </div>
      <button type="submit" className="btn-primary w-full py-3.5 text-base">Send reset link</button>
    </form>
  );
}
