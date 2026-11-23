"use client";

import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { DotGrid, Glow, Wave, MapGrid } from "@/app/ui/decor";
import { Stagger, StaggerItem, Reveal } from "@/app/ui/motion";
function c(props) {
  let {
      eyebrow,
      title,
      highlight,
      subtitle,
      crumbs,
      children,
      align = "center",
      compact = false,
      waveFill = "#fff",
      banner = null, // shown above the heading, on the same background
    } = props,
    h = "center" === align;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-mist text-night-900">
      <DotGrid className="inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_top,#000,transparent_70%)]" />
      <Glow className="-left-24 -top-10 h-72 w-72" color="bg-brand-200/60" />
      <Glow className="-right-24 bottom-0 h-72 w-72" color="bg-magenta-400/15" />
      {banner}
      <Stagger
        onLoad
        gap={0.08}
        className={`container-x relative flex flex-col gap-4 ${h ? "items-center text-center" : "items-start"} ${banner ? "pb-14 pt-7 sm:pb-16 sm:pt-9" : compact ? "pb-16 pt-10 sm:pb-20 sm:pt-12" : "pb-20 pt-12 sm:pb-28 sm:pt-16"}`}
      >
        {crumbs && (
          <StaggerItem>
            <Cd items={crumbs} />
          </StaggerItem>
        )}
        {eyebrow && (
          <StaggerItem>
            <span className="eyebrow">{eyebrow}</span>
          </StaggerItem>
        )}
        <StaggerItem
          as="h1"
          className="max-w-3xl text-3xl font-extrabold leading-tight xs:text-4xl sm:text-5xl lg:text-6xl"
        >
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </StaggerItem>
        {subtitle && (
          <StaggerItem as="p" className="max-w-xl text-sm text-slate-600 sm:text-base">
            {subtitle}
          </StaggerItem>
        )}
        {children && <StaggerItem className={`w-full ${h ? "max-w-2xl" : ""}`}>{children}</StaggerItem>}
      </Stagger>
      <Wave fill={waveFill} />
    </section>
  );
}
function Cd(props) {
  let { items } = props;
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500 sm:text-sm">
        {items.map((e, t) => (
          <li key={t} className="flex items-center gap-1">
            {t > 0 && <MdKeyboardArrowRight aria-hidden />}
            {e.href ? (
              <Link href={e.href} className="transition hover:text-brand-600">
                {e.label}
              </Link>
            ) : (
              <span className="font-semibold text-night-900">{e.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
function HeroSearch(props) {
  let { placeholder = "Search…", value, onChange } = props;
  return (
    <div className="flex items-center gap-2 rounded-full bg-white p-1.5 shadow-card-hover ring-1 ring-slate-100 focus-within:ring-brand-300">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
        className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-night-900 outline-none placeholder:text-slate-400 sm:text-base"
      />
      <span className="btn-primary px-4 py-2.5">Search</span>
    </div>
  );
}
function FormShell(props) {
  let { badge, title, subtitle, children, width = "max-w-xl", footer } = props;
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
function DashCard(props) {
  let { badge, title, action, children, className = "" } = props;
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
let iconBtn =
  "grid h-8 w-8 place-items-center rounded-full bg-mist text-slate-500 transition hover:bg-brand-500 hover:text-white";
function TableWrap(props) {
  let { children } = props;
  return <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">{children}</div>;
}
function StatusChip(props) {
  let { status } = props,
    s = String(status).toLowerCase();
  return (
    <span
      className={`chip ${"active" === s || "yes" === s || "paid" === s ? "bg-emerald-50 text-emerald-600" : "new" === s ? "bg-cyan-400/15 text-cyan-500" : "pending" === s ? "bg-pin-400/20 text-amber-600" : "bg-slate-100 text-slate-500"}`}
    >
      {status}
    </span>
  );
}
export { DashCard, TableWrap, HeroSearch, StatusChip, c as PageHero, FormShell, iconBtn };
