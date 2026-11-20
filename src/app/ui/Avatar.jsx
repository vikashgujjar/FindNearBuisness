"use client";

import { useState, useEffect } from "react";
let i = [
  "bg-brand-600 text-white",
  "bg-night-900 text-white",
  "bg-cyan-500 text-night-950",
  "bg-pin-400 text-night-950",
  "bg-night-700 text-white",
  "bg-brand-400 text-night-950",
];
let n = function () {
  let e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "",
    t = String(e).trim().split(/\s+/).filter(Boolean);
  return t.length ? (t.length > 1 ? t[0][0] + t[t.length - 1][0] : t[0][0]).toUpperCase() : "?";
};
function Avatar(props) {
  let { src, name, alt, className = "", textClass = "text-sm" } = props,
    [d, m] = useState(false);
  if ((useEffect(() => m(false), [src]), src && !d)) {
    var h;
    return (
      <img
        loading="lazy"
        decoding="async"
        src={src}
        alt={alt ?? name ?? ""}
        onError={() => m(true)}
        className={className}
      />
    );
  }
  let u = [...String(name || "")].reduce((e, t) => e + t.charCodeAt(0), 0);
  return (
    <span
      role="img"
      aria-label={name || "User"}
      className={`grid select-none place-items-center font-display font-bold leading-none ${i[u % i.length]} ${textClass} ${className}`}
    >
      {n(name)}
    </span>
  );
}
export { Avatar };
