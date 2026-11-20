"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import PhoneInput from "react-phone-input-2";
function HaveAnAccount(e) {
  let { setHaveAccountCheck } = e,
    [s, i] = useState(""),
    [r, l] = useState(false);
  return (
    useEffect(() => {
      document.body.style.overflow = "hidden";
      let e = (e) => "Escape" === e.key && setHaveAccountCheck(false);
      return (
        document.addEventListener("keydown", e),
        () => {
          (document.body.style.overflow = ""), document.removeEventListener("keydown", e);
        }
      );
    }, [setHaveAccountCheck]),
    (
      <motion.div
        className="fixed inset-0 z-[100] flex items-end justify-center bg-night-950/60 backdrop-blur-sm sm:items-center sm:p-4"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        onClick={() => setHaveAccountCheck(false)}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Login"
          className="relative w-full max-w-md rounded-t-3xl bg-white p-6 shadow-card-hover sm:rounded-3xl sm:p-8"
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 30,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setHaveAccountCheck(false)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-mist text-night-900"
          >
            <RxCross1 />
          </button>
          <img src="/img/logo/findbee.webp" alt="Findbee" className="w-36" />
          <h2 className="mt-5 text-2xl font-extrabold text-night-900">Welcome</h2>
          <p className="text-sm text-slate-500">Login for a seamless experience</p>
          <form
            onSubmit={(e) => {
              e.preventDefault(), (window.location.href = "/user-login/sign/");
            }}
            className="mt-6 space-y-4"
          >
            <PhoneInput
              placeholder="Enter mobile number"
              country="in"
              value={s}
              onChange={i}
              inputStyle={{
                width: "100%",
                height: "48px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                background: "#F3F8FE",
              }}
              buttonStyle={{
                borderRadius: "14px 0 0 14px",
                border: "1px solid #e2e8f0",
              }}
            />
            <label htmlFor="terms" className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                id="terms"
                checked={r}
                onChange={(e) => l(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-brand-500"
              />
              <span>
                I agree to the terms and conditions
                <span className="block text-xs text-slate-400">{"T&C's \xb7 Privacy Policy"}</span>
              </span>
            </label>
            <button
              type="submit"
              disabled={!r}
              className="btn-primary w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Login With OTP
            </button>
            <button type="button" onClick={() => setHaveAccountCheck(false)} className="btn-ghost w-full">
              Skip
            </button>
          </form>
        </motion.div>
      </motion.div>
    )
  );
}
export default HaveAnAccount;
