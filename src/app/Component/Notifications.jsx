"use client";

import Link from "next/link";
import { FaStar, FaHeart, FaUserPlus, FaEnvelope } from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { DashCard } from "@/app/ui/blocks";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { useApi, galleryHref, listingHref } from "@/app/lib/api";
let x = (e) =>
  "review" === e.type
    ? {
        Icon: FaStar,
        cls: "bg-pin-400/20 text-amber-600",
      }
    : "like" === e.type
      ? {
          Icon: FaHeart,
          cls: "bg-rose-500/10 text-magenta-500",
        }
      : "follow" === e.type
        ? {
            Icon: FaUserPlus,
            cls: "bg-cyan-400/15 text-cyan-500",
          }
        : {
            Icon: FaEnvelope,
            cls: "bg-brand-50 text-brand-600",
          };
let m = (e) => {
  let t = new Date(e.replace(" ", "T"));
  return `${t.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  })} on ${t.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;
};
let Notifications = function () {
  let { data } = useApi("/account/notifications", {
      cacheable: false,
    }),
    t = data?.data;
  return (
    <CommonDashLayout>
      <DashCard badge="Notifications" title="All Notifications">
        <Stagger
          as="ol"
          gap={0.05}
          className="relative space-y-3 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-slate-200"
        >
          {(t || []).map((e, t) => {
            let { Icon, cls } = x(e);
            return (
              <StaggerItem key={t} as="li" className="relative flex gap-4">
                <span
                  className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full ring-4 ring-white ${cls}`}
                >
                  <Icon className="text-sm" />
                </span>
                <div className="flex-1 rounded-2xl bg-mist p-4 transition hover:bg-brand-50/60">
                  <p className="text-sm text-slate-600">
                    {e.actor && (
                      <>
                        {e.actor.id ? (
                          <Link
                            href={galleryHref(e.actor.id)}
                            className="font-bold text-night-900 hover:text-brand-600"
                          >
                            {e.actor.name}
                          </Link>
                        ) : (
                          <b className="text-night-900">{e.actor.name}</b>
                        )}{" "}
                      </>
                    )}
                    {e.text}{" "}
                    {e.listing &&
                      (e.listing.slug ? (
                        <Link
                          href={listingHref(e.listing.slug)}
                          className="font-semibold text-brand-600 hover:underline"
                        >
                          {e.listing.name}
                        </Link>
                      ) : (
                        <b className="text-night-900">{e.listing.name}</b>
                      ))}
                  </p>
                  {e.message && (
                    <p className="mt-2 rounded-xl bg-white p-3 text-sm italic text-slate-600">“{e.message}”</p>
                  )}
                  <span className="mt-2 block text-xs text-slate-400">{m(e.created_at)}</span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
        {!t && <p className="py-10 text-center text-slate-400">Loading…</p>}
        {t?.length === 0 && (
          <p className="py-10 text-center text-slate-400">
            No notifications yet. Follows and replies to your enquiries will show up here.
          </p>
        )}
      </DashCard>
    </CommonDashLayout>
  );
};
export default Notifications;
