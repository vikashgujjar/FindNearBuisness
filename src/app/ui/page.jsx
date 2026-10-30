"use client";
import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Glow, MapGrid, Wave } from "./decor";
import { Reveal, Stagger, StaggerItem } from "./motion";

// Dark "night map" banner used at the top of inner pages.
export function PageHero({ eyebrow, title, highlight, subtitle, crumbs, children, align = "center", compact = false, waveFill = "#fff" }) {
  const center = align === "center";
  return (
    <section className="relative overflow-hidden bg-night-950 text-white">
      <MapGrid opacity={0.6} />
      <Glow className="-left-24 -top-10 h-72 w-72" color="bg-brand-600/40" />
      <Glow className="-right-24 bottom-0 h-72 w-72" color="bg-magenta-500/25" />
      <Stagger
        onLoad
        gap={0.08}
        className={`container-x relative flex flex-col gap-4 ${center ? "items-center text-center" : "items-start"} ${
          compact ? "pb-16 pt-10 sm:pb-20 sm:pt-12" : "pb-20 pt-12 sm:pb-28 sm:pt-16"
        }`}
      >
        {crumbs && (
          <StaggerItem>
            <Breadcrumbs items={crumbs} />
          </StaggerItem>
        )}
        {eyebrow && (
          <StaggerItem>
            <span className="eyebrow-dark">{eyebrow}</span>
          </StaggerItem>
        )}
        <StaggerItem as="h1" className="max-w-3xl text-3xl font-extrabold leading-tight xs:text-4xl sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="text-gradient-cool">{highlight}</span>}
        </StaggerItem>
        {subtitle && (
          <StaggerItem as="p" className="max-w-xl text-sm text-slate-300 sm:text-base">
            {subtitle}
          </StaggerItem>
        )}
        {children && <StaggerItem className={`w-full ${center ? "max-w-2xl" : ""}`}>{children}</StaggerItem>}
      </Stagger>
      <Wave fill={waveFill} />
    </section>
  );
}

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-400 sm:text-sm">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <MdKeyboardArrowRight aria-hidden />}
            {c.href ? (
              <Link href={c.href} className="transition hover:text-white">
                {c.label}
              </Link>
            ) : (
              <span className="text-slate-200">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Glass search pill used inside PageHero.
export function HeroSearch({ placeholder = "Search…", value, onChange }) {
  return (
    <div className="glass flex items-center gap-2 rounded-full p-1.5 shadow-2xl">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
        className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 sm:text-base"
      />
      <span className="btn-primary px-4 py-2.5">Search</span>
    </div>
  );
}

// Centered card on a night-map background, used by all stand-alone forms.
export function FormShell({ badge, title, subtitle, children, width = "max-w-xl", footer }) {
  return (
    <section className="relative overflow-hidden bg-night-950 px-4 py-12 sm:py-20">
      <MapGrid opacity={0.55} />
      <Glow className="-left-24 top-10 h-80 w-80" color="bg-brand-600/35" />
      <Glow className="-right-24 bottom-10 h-80 w-80" color="bg-magenta-500/25" />
      <Reveal y={30} className={`relative mx-auto w-full ${width}`}>
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-card-hover">
          <div className="h-1.5 bg-brand-gradient" />
          <div className="p-6 sm:p-10">
            {badge && <span className="eyebrow">{badge}</span>}
            {title && <h1 className="mt-3 text-2xl font-extrabold text-night-900 sm:text-3xl">{title}</h1>}
            {subtitle && <div className="mt-2 text-sm text-slate-500">{subtitle}</div>}
            <div className={title || badge ? "mt-7" : ""}>{children}</div>
          </div>
        </div>
        {footer && <div className="mt-6 text-center text-sm text-slate-300">{footer}</div>}
      </Reveal>
    </section>
  );
}

// Card used for every dashboard page body.
export function DashCard({ badge, title, action, children, className = "" }) {
  return (
    <Reveal className={`panel overflow-hidden ${className}`}>
      <div className="h-1.5 bg-brand-gradient" />
      <div className="p-5 sm:p-7">
        {(badge || title || action) && (
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              {badge && <span className="eyebrow">{badge}</span>}
              {title && <h1 className="mt-2 text-xl font-bold text-night-900 sm:text-2xl">{title}</h1>}
            </div>
            {action && <div className="flex flex-wrap gap-2">{action}</div>}
          </div>
        )}
        {children}
      </div>
    </Reveal>
  );
}

// Horizontally scrollable table container (tables never break the layout).
export function TableWrap({ children }) {
  return <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">{children}</div>;
}

export function StatusChip({ status }) {
  const s = String(status).toLowerCase();
  const cls =
    s === "active" || s === "yes" || s === "paid"
      ? "bg-emerald-50 text-emerald-600"
      : s === "new"
      ? "bg-cyan-400/15 text-cyan-500"
      : s === "pending"
      ? "bg-pin-400/20 text-amber-600"
      : "bg-slate-100 text-slate-500";
  return <span className={`chip ${cls}`}>{status}</span>;
}

// Animated grid helper so pages can stagger their cards with one line.
export function CardGrid({ className, children, gap = 0.06 }) {
  return (
    <Stagger gap={gap} className={className}>
      {React.Children.map(children, (child) => (child ? <StaggerItem>{child}</StaggerItem> : null))}
    </Stagger>
  );
}
