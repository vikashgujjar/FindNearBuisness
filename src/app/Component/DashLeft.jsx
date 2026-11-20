"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useUserLocation } from "@/app/context/LocationContext";
import { Avatar } from "@/app/ui/Avatar";
import { useDashTabs, isActiveTab, dashHref } from "@/app/Component/dashNav";
import { useAuth } from "@/app/context/AuthContext";
import { galleryHref, formatDate } from "@/app/lib/api";
function Cf() {
  let { user } = useAuth();
  return (
    <div className="overflow-hidden rounded-3xl bg-white text-center shadow-card ring-1 ring-slate-100">
      <div className="relative h-20 overflow-hidden">
        <img
          loading="lazy"
          decoding="async"
          src="/img/dashboard/dashbordleft2.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/80 to-cyan-500/70" />
      </div>
      <div className="relative -mt-10 px-4 pb-5">
        <Avatar
          src={user?.avatar}
          name={user?.name}
          textClass="text-2xl"
          className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white"
        />
        <Link
          href={user ? galleryHref(user.id) : "/gallery"}
          className="mt-2 block font-bold text-night-900 hover:text-brand-600"
        >
          {user?.name}
        </Link>
        <p className="text-xs text-slate-400">
          {"Joined "}
          {formatDate(user?.joined_at)}
        </p>
      </div>
    </div>
  );
}
function DashLeft() {
  let e = usePathname(),
    { location } = useUserLocation(),
    n = useDashTabs();
  return (
    <div className="space-y-4">
      <Cf />
      <nav aria-label="Dashboard">
        <ul className="space-y-0.5">
          {n.map((n) => {
            let l = isActiveTab(e, n);
            return (
              <li key={n.title}>
                <Link
                  href={dashHref(location, n)}
                  aria-current={l ? "page" : undefined}
                  className={`relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${l ? "text-brand-700" : "text-slate-600 hover:bg-white hover:text-night-900"}`}
                >
                  {l && (
                    <motion.span
                      layoutId="dash-active"
                      className="absolute inset-0 rounded-2xl bg-white shadow-card ring-1 ring-brand-100"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {l && (
                    <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-brand-gradient" />
                  )}
                  <img loading="lazy" decoding="async" src={n.icon} alt="" className="relative h-5 w-5" />
                  <span className="relative">{n.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export { DashLeft };
