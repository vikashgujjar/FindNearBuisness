"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaHeartCrack, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { DashCard, TableWrap, iconBtn } from "@/app/ui/blocks";
import { useApi, formatDate, apiFetch, clearApiCache, listingHref } from "@/app/lib/api";
let LikedListing = function () {
  let { data, error } = useApi("/account/liked", {
      cacheable: false,
    }),
    [s, n] = useState(null);
  useEffect(() => {
    data?.data
      ? n(
          data.data.map((e) => ({
            id: e.id,
            name: e.name,
            slug: e.slug,
            image: e.cover_image || e.logo,
            date: formatDate(e.created_at),
            rating: Number(e.rating) || 0,
          })),
        )
      : error && n([]);
  }, [data, error]);
  let m = async (e) => {
    n((t) => t.filter((t) => t.id !== e));
    try {
      await apiFetch(`/listings/${e}/like`, {
        method: "POST",
      }),
        clearApiCache("/account");
    } catch (e) {}
  };
  return (
    <CommonDashLayout>
      <DashCard badge="All Listings" title="All Liked Listings">
        <TableWrap>
          <table className="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Listing Name</th>
                <th>Rating</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false}>
                {(s || []).map((e, t) => (
                  <motion.tr
                    key={e.id}
                    layout
                    exit={{
                      opacity: 0,
                      x: -30,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <td className="font-semibold text-slate-400">{String(t + 1).padStart(2, "0")}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          loading="lazy"
                          decoding="async"
                          className="h-11 w-11 rounded-xl object-cover"
                          src={e.image || "/img/dashboard/listing.webp"}
                          alt=""
                        />
                        <div>
                          <p className="font-semibold text-night-900">{e.name}</p>
                          <p className="text-xs text-slate-400">{e.date}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="chip bg-pin-400/20 text-amber-600">
                        <FaStar /> {e.rating}
                      </span>
                    </td>
                    <td>
                      <div className="flex justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => m(e.id)}
                          className={`${iconBtn} hover:bg-rose-500`}
                          title="Remove"
                        >
                          <FaHeartCrack className="text-xs" />
                        </button>
                        <Link href={listingHref(e)} className={iconBtn} title="Preview">
                          <FaArrowUpRightFromSquare className="text-xs" />
                        </Link>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </TableWrap>
        {null === s && <p className="py-10 text-center text-slate-400">Loading…</p>}
        {s?.length === 0 && <p className="py-10 text-center text-slate-400">No liked listings yet.</p>}
      </DashCard>
    </CommonDashLayout>
  );
};
export default LikedListing;
