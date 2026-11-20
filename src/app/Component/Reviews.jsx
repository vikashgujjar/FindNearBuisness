"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaTrash, FaTriangleExclamation } from "react-icons/fa6";
import Link from "next/link";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { DashCard, TableWrap, iconBtn, StatusChip } from "@/app/ui/blocks";
import { useAuth } from "@/app/context/AuthContext";
import { useApi, apiFetch, clearApiCache, listingHref } from "@/app/lib/api";
let Cm = (props) => {
  let { count } = props;
  return (
    <span className="flex gap-0.5 text-pin-500">
      {Array.from(
        {
          length: 5,
        },
        (e, s) => (
          <FaStar key={s} className={s < count ? "" : "text-slate-200"} />
        ),
      )}
    </span>
  );
};
let Reviews = function () {
  var e, t, s, h, g, p;
  let { user } = useAuth(),
    b = user?.role === "vendor",
    [j, f] = useState(null),
    N = j || (b ? "Received" : "Sent"),
    [w, y] = useState({
      received: null,
      sent: null,
    }),
    [S, k] = useState(null),
    [C, P] = useState(null),
    { data } = useApi("/account/reviews", {
      cacheable: false,
    }),
    { data: E } = useApi("/vendor/reviews", {
      cacheable: false,
      skip: !b,
    });
  useEffect(() => {
    E?.data &&
      y((e) => ({
        ...e,
        received: E.data.map((e) => {
          var t, s;
          return {
            id: e.id,
            listing: e.listing?.name || "—",
            slug: e.listing?.slug,
            user: e.name,
            email: e.email,
            phone: e.phone,
            city: e.city,
            rating: e.rating,
            message: e.message,
            status: e.status,
          };
        }),
      }));
  }, [E]),
    useEffect(() => {
      data?.data &&
        y((e) => ({
          ...e,
          sent: data.data.map((e) => {
            var t, s;
            return {
              id: e.id,
              listing: e.listing?.name || "—",
              slug: e.listing?.slug,
              user: e.name,
              email: e.email,
              phone: e.phone,
              city: e.city,
              rating: e.rating,
              message: e.message,
            };
          }),
        }));
    }, [data]);
  let D = async (e) => {
      if ((k(null), e))
        try {
          await apiFetch(`/account/reviews/${S}`, {
            method: "DELETE",
          }),
            clearApiCache("/account"),
            y((e) => ({
              ...e,
              sent: (e.sent || []).filter((e) => e.id !== S),
            }));
        } catch (e) {
          P(e.message);
        }
    },
    _ = ("Received" === N ? w.received : w.sent) || [],
    A = b
      ? [
          ["Received", `Received (${w.received?.length ?? 0})`],
          ["Sent", `Sent (${w.sent?.length ?? 0})`],
        ]
      : [["Sent", `Sent (${w.sent?.length ?? 0})`]],
    I = ("Received" === N ? w.received : w.sent) === null;
  return (
    <CommonDashLayout>
      <DashCard badge="Reviews" title="All Listings - Review Details">
        <div className="mb-6 inline-flex gap-1 rounded-full bg-mist p-1" role="tablist">
          {A.map((e) => {
            let [t, s] = e;
            return (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={N === t}
                onClick={() => f(t)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${N === t ? "text-white" : "text-slate-500"}`}
              >
                {N === t && (
                  <motion.span layoutId="review-tab" className="absolute inset-0 rounded-full bg-night-900" />
                )}
                <span className="relative">{s}</span>
              </button>
            );
          })}
        </div>
        <TableWrap>
          <table className="data-table min-w-[900px]">
            <thead>
              <tr>
                <th>No</th>
                <th>Listing</th>
                <th>User</th>
                <th>Contact</th>
                <th>City</th>
                <th>Rating</th>
                <th>Message</th>
                <th className="text-right">{"Sent" === N ? "Delete" : "Status"}</th>
              </tr>
            </thead>
            <tbody>
              {_.map((e, t) => (
                <tr key={e.id}>
                  <td className="font-semibold text-slate-400">{String(t + 1).padStart(2, "0")}</td>
                  <td className="font-semibold text-night-900">
                    {e.slug ? (
                      <Link href={listingHref(e.slug)} className="hover:text-brand-600">
                        {e.listing}
                      </Link>
                    ) : (
                      e.listing
                    )}
                  </td>
                  <td>{e.user}</td>
                  <td className="text-xs">
                    <p>{e.email}</p>
                    <p className="text-slate-400">{e.phone}</p>
                  </td>
                  <td>{e.city}</td>
                  <td>
                    <Cm count={e.rating} />
                  </td>
                  <td className="max-w-[260px] text-xs leading-relaxed">{e.message}</td>
                  <td className="text-right">
                    {"Sent" === N ? (
                      <button
                        type="button"
                        onClick={() => k(e.id)}
                        className={`${iconBtn} ml-auto hover:bg-rose-500`}
                        title="Delete"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    ) : (
                      <StatusChip status={e.status} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
        {C && (
          <p className="mt-4 text-sm font-semibold text-rose-600" role="alert">
            {C}
          </p>
        )}
        {I ? (
          <p className="py-10 text-center text-slate-400">Loading…</p>
        ) : (
          0 === _.length && (
            <p className="py-10 text-center text-slate-400">
              {"Sent" === N ? "You haven't written any reviews yet." : "Reviews on your listings appear here."}
            </p>
          )
        )}
      </DashCard>
      <AnimatePresence>
        {null !== S && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-night-950/60 p-4 backdrop-blur-sm"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => D(false)}
          >
            <motion.div
              role="alertdialog"
              aria-modal="true"
              className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-card-hover"
              initial={{
                scale: 0.9,
                y: 20,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-rose-500/10 text-xl text-magenta-500">
                <FaTriangleExclamation />
              </span>
              <p className="mt-4 font-bold text-night-900">Are you sure you want to delete this review?</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button type="button" onClick={() => D(false)} className="btn-ghost">
                  No
                </button>
                <button type="button" onClick={() => D(true)} className="btn-dark bg-rose-500 hover:bg-rose-600">
                  Yes, delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CommonDashLayout>
  );
};
export default Reviews;
