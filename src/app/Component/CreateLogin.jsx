"use client";
import React from "react";

export default function CreateLogin({ onForgot }) {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", "manshu");
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={handleLoginSubmit} className="space-y-4">
      <div>
        <label htmlFor="login-email" className="field-label">Email</label>
        <input id="login-email" type="email" placeholder="Enter email*" className="field" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="login-password" className="field-label">Password</label>
          {onForgot && (
            <button type="button" onClick={onForgot} className="mb-1.5 text-xs font-semibold text-brand-600 hover:underline">
              Forgot?
            </button>
          )}
        </div>
        <input id="login-password" type="password" placeholder="Enter Password" className="field" />
      </div>
      <button type="submit" className="btn-primary w-full py-3.5 text-base">Sign in</button>
    </form>
  );
}
