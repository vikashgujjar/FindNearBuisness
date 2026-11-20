"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DashLeft } from "@/app/Component/DashLeft";
import { useAuth } from "@/app/context/AuthContext";
import { useUserLocation } from "@/app/context/LocationContext";
import { useDashTabs, isActiveTab, dashHref, dashTabs } from "@/app/Component/dashNav";
import { DotGrid } from "@/app/ui/decor";
import { BecomeVendor } from "@/app/Component/BecomeVendor";
import DashLeftOpen from "@/app/Component/DashLeftOpen";
import DashRight from "@/app/Component/DashRight";
function N() {
  let e = usePathname(),
    { location } = useUserLocation(),
    s = useRef(null),
    n = useDashTabs();
  return (
    useEffect(() => {
      var e;
      null === (e = s.current) ||
        undefined === e ||
        e.scrollIntoView({
          inline: "center",
          block: "nearest",
        });
    }, [e]),
    (
      <nav aria-label="Dashboard" className="no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 md:hidden">
        {n.map((l) => {
          let n = isActiveTab(e, l);
          return (
            <Link
              key={l.title}
              ref={n ? s : null}
              href={dashHref(location, l)}
              aria-current={n ? "page" : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition ${n ? "bg-night-900 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}
            >
              <img loading="lazy" decoding="async" src={l.icon} alt="" className="h-4 w-4" />
              {l.title}
            </Link>
          );
        })}
      </nav>
    )
  );
}
let CommonDashLayout = function (e) {
  let { children, vendorOnly = false } = e,
    { user, ready } = useAuth(),
    o = useRouter(),
    d = usePathname(),
    x = dashTabs.find((e) => isActiveTab(d, e));
  return (useEffect(() => {
    ready && !user && o.replace("/user-login/sign");
  }, [ready, user, o]),
  ready && user) ? (
    <div className="relative bg-mist">
      <DotGrid className="inset-x-0 top-0 h-80 w-full [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="container-x relative py-6 sm:py-10">
        <N />
        <div className="flex items-start gap-5 xl:grid xl:grid-cols-[250px_minmax(0,1fr)_300px] xl:gap-6">
          <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto pb-4 no-scrollbar xl:block">
            <DashLeft />
          </aside>
          <div className="sticky top-24 hidden md:block xl:hidden">
            <DashLeftOpen />
          </div>
          <main className="min-w-0 flex-1 space-y-6">
            {(vendorOnly || x?.business) && "vendor" !== user.role ? <BecomeVendor /> : children}
            <div className="xl:hidden">
              <DashRight />
            </div>
          </main>
          <aside className="hidden xl:block">
            <DashRight />
          </aside>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-mist py-24 text-center text-sm text-slate-500" aria-busy="true">
      Loading your dashboard…
    </div>
  );
};
export { CommonDashLayout };
