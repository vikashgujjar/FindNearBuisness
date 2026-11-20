"use client";

import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
function PasswordInput(props) {
  let { className = "field", ...s } = props,
    [n, i] = useState(false),
    d = n ? "Hide password" : "Show password";
  return (
    <div className="relative">
      <input {...s} type={n ? "text" : "password"} className={`${className} pr-11`} />
      <button
        type="button"
        onClick={() => i((e) => !e)}
        aria-label={d}
        aria-pressed={n}
        title={d}
        className="absolute inset-y-0 right-0 grid w-11 place-items-center rounded-r-2xl text-slate-400 transition hover:text-brand-600 focus-visible:text-brand-600"
      >
        {n ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}
export { PasswordInput };
