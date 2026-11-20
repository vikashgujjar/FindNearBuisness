"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaMobileScreenButton } from "react-icons/fa6";

const RESEND_AFTER = 30; // seconds; matches services.otp.resend_after on the backend

// Second step of sign-up / mobile login: enter the 6-digit SMS code.
//   message   - text from the API, e.g. "We sent a 6-digit code to +91 ••••• •3210."
//   onVerify  - async (code) => void; throw to show an error
//   onResend  - async () => { message }
//   onBack    - go back and change the number
export function OtpStep({ message, onVerify, onResend, onBack, submitLabel = "Verify", busyLabel = "Verifying…", backLabel = "Change number" }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState(message);
  const [busy, setBusy] = useState(false);
  const [wait, setWait] = useState(RESEND_AFTER);
  const input = useRef(null);

  useEffect(() => {
    input.current?.focus();
  }, []);
  useEffect(() => {
    if (wait <= 0) return;
    const t = setTimeout(() => setWait((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [wait]);

  const submit = async (e) => {
    e.preventDefault();
    if (code.length !== 6) return setError("Please enter the 6-digit code.");
    setBusy(true);
    setError("");
    try {
      await onVerify(code);
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  };

  const resend = async () => {
    setError("");
    try {
      const res = await onResend();
      setInfo(res?.message || "We sent a new code.");
      setCode("");
      setWait(RESEND_AFTER);
      input.current?.focus();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="flex items-start gap-3 rounded-2xl bg-mist p-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
          <FaMobileScreenButton />
        </span>
        <p className="text-sm leading-relaxed text-slate-600" role="status">
          {info} It is valid for 10 minutes.
        </p>
      </div>
      <div>
        <label htmlFor="otp-code" className="field-label">
          Verification code
        </label>
        <input
          ref={input}
          id="otp-code"
          name="otp"
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{6}"
          maxLength={6}
          required
          placeholder="6-digit code"
          className="field text-center text-lg font-bold tracking-[0.5em]"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
        />
      </div>
      {error && (
        <p className="rounded-xl bg-rose-500/10 px-4 py-2.5 text-sm font-medium text-rose-600" role="alert">
          {error}
        </p>
      )}
      <button type="submit" disabled={busy} className="btn-primary w-full py-3.5 text-base disabled:opacity-70">
        {busy ? busyLabel : submitLabel}
      </button>
      <div className="flex items-center justify-between text-sm">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 font-semibold text-slate-500 hover:text-night-900">
          <FaArrowLeft className="text-xs" /> {backLabel}
        </button>
        {wait > 0 ? (
          <span className="text-slate-400">Resend code in {wait}s</span>
        ) : (
          <button type="button" onClick={resend} className="font-semibold text-brand-600 hover:underline">
            Resend code
          </button>
        )}
      </div>
    </form>
  );
}

// Mobile number field with a fixed +91 prefix (Indian numbers only).
export function IndianPhoneInput({ id, value, onChange, required = true }) {
  return (
    <div className="flex">
      <span className="field flex w-auto shrink-0 items-center rounded-r-none border-r-0 px-3 font-semibold text-slate-500">+91</span>
      <input
        id={id}
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        required={required}
        pattern="[6-9][0-9]{9}"
        title="10-digit Indian mobile number"
        maxLength={10}
        placeholder="10-digit mobile number*"
        className="field rounded-l-none"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 10))}
      />
    </div>
  );
}
