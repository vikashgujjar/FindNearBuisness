"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { PasswordInput } from "@/app/ui/PasswordInput";
import { OtpStep, IndianPhoneInput } from "@/app/ui/OtpStep";

const MODES = [
  { id: "password", label: "Email & password" },
  { id: "otp", label: "Mobile OTP" },
];

// Sign in with email + password, or with mobile number. Both always end with an SMS code.
function CreateLogin({ onForgot }) {
  const router = useRouter();
  const { login, loginAddPhone, resendLoginOtp, verifyLogin, sendLoginOtp, loginWithOtp, user, ready } = useAuth();
  const [mode, setMode] = useState("password");
  const [form, setForm] = useState({ email: "", password: "" });
  const [phone, setPhone] = useState("");
  const [otpMessage, setOtpMessage] = useState(""); // set once the SMS code was sent
  // after a correct password: { token, needsPhone, message } from /auth/login
  const [challenge, setChallenge] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const signingIn = useRef(false);
  const alreadySignedIn = ready && user && user.role !== "admin" && !signingIn.current;

  useEffect(() => {
    if (alreadySignedIn) router.replace("/dashboard");
  }, [alreadySignedIn]);

  // Admins go to the Laravel admin panel, everyone else to the website dashboard.
  const afterLogin = (res) => {
    if (res.panel_url) window.location.href = res.panel_url;
    else router.push("/dashboard");
  };

  // Password step: a correct password opens the SMS-code step (or asks for a mobile number first).
  const submitPassword = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await login(form.email, form.password);
      setChallenge({ token: res.login_token, needsPhone: res.needs_phone, message: res.message });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  // Accounts without a verified mobile: text a code to the number they enter.
  const submitChallengePhone = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await loginAddPhone(challenge.token, phone);
      setChallenge({ ...challenge, needsPhone: false, message: res.message });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const verifyChallenge = async (code) => {
    signingIn.current = true;
    try {
      afterLogin(await verifyLogin(challenge.token, code));
    } catch (err) {
      signingIn.current = false;
      throw err; // OtpStep shows it
    }
  };

  const restart = () => {
    setChallenge(null);
    setError("");
  };

  const sendCode = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      setOtpMessage((await sendLoginOtp(phone)).message);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const verifyCode = async (code) => {
    signingIn.current = true;
    try {
      afterLogin(await loginWithOtp(phone, code));
    } catch (err) {
      signingIn.current = false;
      throw err; // OtpStep shows it
    }
  };

  if (alreadySignedIn)
    return (
      <p className="py-8 text-center text-sm text-slate-500" role="status">
        You’re signed in. Taking you to your account…
      </p>
    );

  if (mode === "password" && challenge && challenge.needsPhone)
    return (
      <form onSubmit={submitChallengePhone} className="space-y-4">
        <p className="rounded-2xl bg-mist p-4 text-sm leading-relaxed text-slate-600" role="status">
          {challenge.message}
        </p>
        <div>
          <label htmlFor="login-add-phone" className="field-label">
            Mobile number
          </label>
          <IndianPhoneInput id="login-add-phone" value={phone} onChange={setPhone} />
        </div>
        {error && (
          <p className="rounded-xl bg-rose-500/10 px-4 py-2.5 text-sm font-medium text-rose-600" role="alert">
            {error}
          </p>
        )}
        <button type="submit" disabled={busy} className="btn-primary w-full py-3.5 text-base disabled:opacity-70">
          {busy ? "Sending code…" : "Send OTP"}
        </button>
        <button type="button" onClick={restart} className="w-full text-sm font-semibold text-slate-500 hover:text-night-900">
          Back to sign in
        </button>
      </form>
    );

  if (mode === "password" && challenge)
    return (
      <OtpStep
        message={challenge.message}
        onVerify={verifyChallenge}
        onResend={() => resendLoginOtp(challenge.token)}
        onBack={restart}
        backLabel="Back to sign in"
        submitLabel="Verify & sign in"
        busyLabel="Signing in…"
      />
    );

  if (mode === "otp" && otpMessage)
    return (
      <OtpStep
        message={otpMessage}
        onVerify={verifyCode}
        onResend={() => sendLoginOtp(phone)}
        onBack={() => setOtpMessage("")}
        submitLabel="Verify & sign in"
        busyLabel="Signing in…"
      />
    );

  const errorBox = error && (
    <p className="rounded-xl bg-rose-500/10 px-4 py-2.5 text-sm font-medium text-rose-600" role="alert">
      {error}
    </p>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 p-1" role="radiogroup" aria-label="Sign in with">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={mode === m.id}
            onClick={() => {
              setMode(m.id);
              setError("");
            }}
            className={`rounded-xl px-3 py-2 text-xs font-semibold transition sm:text-sm ${mode === m.id ? "bg-brand-50 text-brand-700" : "text-slate-500 hover:text-night-900"}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === "password" ? (
        <form onSubmit={submitPassword} className="space-y-4">
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
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="login-password" className="field-label">
                Password
              </label>
              {onForgot && (
                <button type="button" onClick={onForgot} className="mb-1.5 text-xs font-semibold text-brand-600 hover:underline">
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          {errorBox}
          <button type="submit" disabled={busy} className="btn-primary w-full py-3.5 text-base disabled:opacity-70">
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      ) : (
        <form onSubmit={sendCode} className="space-y-4">
          <div>
            <label htmlFor="login-phone" className="field-label">
              Mobile number
            </label>
            <IndianPhoneInput id="login-phone" value={phone} onChange={setPhone} />
          </div>
          {errorBox}
          <button type="submit" disabled={busy} className="btn-primary w-full py-3.5 text-base disabled:opacity-70">
            {busy ? "Sending code…" : "Send OTP"}
          </button>
          <p className="text-center text-xs text-slate-500">Use the mobile number you verified when you registered.</p>
        </form>
      )}
    </div>
  );
}
export default CreateLogin;
