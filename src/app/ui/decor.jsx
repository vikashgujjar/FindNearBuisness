"use client";
import React, { useId } from "react";
import { motion } from "framer-motion";

// All decor is purely visual: aria-hidden and pointer-events-none.
const base = "pointer-events-none absolute select-none";

// Night-map street grid with city blocks and a river.
export function MapGrid({ className = "inset-0 h-full w-full", opacity = 1 }) {
  const id = useId();
  return (
    <svg aria-hidden className={`${base} ${className}`} style={{ opacity }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
      <defs>
        <pattern id={`streets-${id}`} width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M80 0H0V80" fill="none" stroke="rgba(141,115,255,.14)" strokeWidth="1" />
        </pattern>
        <linearGradient id={`river-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#2EE6F5" stopOpacity="0" />
          <stop offset=".5" stopColor="#2EE6F5" stopOpacity=".35" />
          <stop offset="1" stopColor="#6D4AFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`fade-${id}`} cx="50%" cy="45%" r="65%">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={`mask-${id}`}>
          <rect width="1200" height="800" fill={`url(#fade-${id})`} />
        </mask>
      </defs>
      <g mask={`url(#mask-${id})`}>
        <rect width="1200" height="800" fill={`url(#streets-${id})`} />
        {/* avenues */}
        <path d="M-20 520 L1220 240" stroke="rgba(141,115,255,.28)" strokeWidth="6" />
        <path d="M300 -20 L520 820" stroke="rgba(141,115,255,.22)" strokeWidth="5" />
        <path d="M860 -20 L760 820" stroke="rgba(141,115,255,.18)" strokeWidth="4" />
        {/* blocks */}
        {[
          [100, 100, 120, 70], [560, 80, 90, 110], [960, 140, 140, 80], [180, 600, 150, 90],
          [640, 560, 100, 120], [980, 560, 120, 100], [400, 300, 70, 60],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="8" fill="rgba(109,74,255,.07)" stroke="rgba(141,115,255,.12)" />
        ))}
        {/* river */}
        <path d="M-40 700 C 250 620, 380 760, 640 680 S 1020 560, 1240 620" fill="none" stroke={`url(#river-${id})`} strokeWidth="26" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Light dotted texture for pale sections.
export function DotGrid({ className = "inset-0 h-full w-full", color = "rgba(109,74,255,.18)" }) {
  const id = useId();
  return (
    <svg aria-hidden className={`${base} ${className}`}>
      <defs>
        <pattern id={`dots-${id}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${id})`} />
    </svg>
  );
}

// Topographic contour lines.
export function Contours({ className = "", stroke = "rgba(109,74,255,.16)" }) {
  return (
    <svg aria-hidden className={`${base} ${className}`} viewBox="0 0 600 600" fill="none">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M${300 - 40 * i - 60} 300 C ${300 - 40 * i - 60} ${180 - 30 * i}, ${300 + 40 * i + 90} ${150 - 34 * i}, ${300 + 40 * i + 80} ${300} S ${300 - 10 * i} ${470 + 36 * i}, ${300 - 40 * i - 60} 300Z`}
          stroke={stroke}
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

// Soft glowing colour blob.
export function Glow({ className = "", color = "bg-brand-500/30" }) {
  return <div aria-hidden className={`${base} rounded-full blur-3xl ${color} ${className}`} />;
}

// Organic blob shape.
export function Blob({ className = "", fill = "#F2EFFF" }) {
  return (
    <svg aria-hidden className={`${base} ${className}`} viewBox="0 0 200 200">
      <path
        fill={fill}
        d="M44.7,-58.6C57.3,-49.8,66.3,-35.4,70.8,-19.4C75.3,-3.4,75.3,14.2,68.2,28.3C61.1,42.4,46.9,53,31.5,60.5C16.1,68,-0.6,72.3,-17.9,69.6C-35.2,66.9,-53.1,57.2,-64.3,42.3C-75.4,27.4,-79.8,7.3,-75.7,-10.5C-71.6,-28.3,-59,-43.8,-44.2,-52.3C-29.4,-60.8,-12.3,-62.3,3,-66.1C18.3,-69.8,32.1,-67.4,44.7,-58.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

// Curved section divider. `fill` should match the NEXT section's background.
export function Wave({ className = "", fill = "#fff", flip = false }) {
  return (
    <svg
      aria-hidden
      className={`${base} left-0 h-[48px] w-full sm:h-[72px] lg:h-[96px] ${flip ? "top-0 rotate-180" : "bottom-0"} ${className}`}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
    >
      <path fill={fill} d="M0,64 C240,112 420,8 720,40 C1020,72 1200,96 1440,48 L1440,100 L0,100 Z" />
    </svg>
  );
}

// City skyline silhouette with lit windows.
export function Skyline({ className = "", fill = "#0D1033" }) {
  const towers = [
    [0, 60, 70], [70, 90, 50], [120, 40, 60], [180, 110, 45], [225, 70, 70], [295, 130, 40],
    [335, 55, 65], [400, 95, 55], [455, 150, 38], [493, 80, 60], [553, 45, 70], [623, 120, 50],
    [673, 70, 60], [733, 100, 45], [778, 140, 42], [820, 60, 70], [890, 105, 55], [945, 50, 60],
    [1005, 125, 48], [1053, 75, 65], [1118, 95, 50], [1168, 145, 40], [1208, 65, 70], [1278, 110, 52],
    [1330, 55, 60], [1390, 85, 50],
  ];
  return (
    <svg aria-hidden className={`${base} ${className}`} viewBox="0 0 1440 160" preserveAspectRatio="none">
      {towers.map(([x, h, w], i) => (
        <g key={i}>
          <rect x={x} y={160 - h} width={w} height={h} fill={fill} />
          {Array.from({ length: Math.floor(h / 26) }).map((_, r) => (
            <rect
              key={r}
              x={x + w / 2 - 3}
              y={160 - h + 12 + r * 24}
              width="6"
              height="6"
              rx="1"
              fill={(i + r) % 3 === 0 ? "#FFC24B" : "#6D4AFF"}
              opacity={(i + r) % 3 === 0 ? 0.8 : 0.35}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

// Dashed route that draws itself when scrolled into view.
export function RouteLine({ d, className = "", stroke = "url(#route-gradient)", viewBox = "0 0 400 200" }) {
  const id = useId();
  return (
    <svg aria-hidden className={`${base} ${className}`} viewBox={viewBox} fill="none">
      <defs>
        <linearGradient id={`route-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#2EE6F5" />
          <stop offset=".5" stopColor="#6D4AFF" />
          <stop offset="1" stopColor="#F03DA8" />
        </linearGradient>
      </defs>
      <motion.path
        d={d}
        stroke={stroke === "url(#route-gradient)" ? `url(#route-${id})` : stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Section heading used across the redesigned pages.
export function SectionHeading({ eyebrow, title, highlight, subtitle, align = "center", dark = false, className = "" }) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "items-start text-left";
  return (
    <motion.div
      className={`flex max-w-2xl flex-col gap-3 ${alignCls} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>}
      <h2 className={`text-[1.75rem] font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : "text-night-900"}`}>
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && <p className={`text-sm sm:text-base ${dark ? "text-slate-300" : "text-slate-500"}`}>{subtitle}</p>}
    </motion.div>
  );
}
