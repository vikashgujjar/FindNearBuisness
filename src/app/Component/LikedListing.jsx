"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaHeartCrack, FaArrowUpRightFromSquare } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard, TableWrap } from "../ui/page";
import { iconBtn } from "./AllListing";

const listings = [
  { id: 1, name: "The Royal Spa Center for Women", date: "08, Dec 2019", rating: 4 },
  { id: 2, name: "Wedding Venues viki", date: "22, Jan 2020", rating: 0 },
  { id: 3, name: "asjdklfasd", date: "23, Jan 2020", rating: 0 },
  { id: 4, name: "IPM Business Software", date: "22, Jan 2020", rating: 0 },
  { id: 5, name: "Forms hospitals", date: "22, Jan 2020", rating: 0 },
  { id: 6, name: "Test mest", date: "21, Jan 2020", rating: 0 },
];

function LikedListing() {
  const [likedData, setLikedData] = useState(listings);
  const handleDelete = (id) => setLikedData((d) => d.filter((item) => item.id !== id));

  return (
    <CommonDashLayout>
      <DashCard badge="All Listings" title="All Liked Listings">
        <TableWrap>
          <table className="data-table">
            <thead>
              <tr><th>No</th><th>Listing Name</th><th>Rating</th><th className="text-right">Actions</th></tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false}>
                {likedData.map((listing, index) => (
                  <motion.tr key={listing.id} layout exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
                    <td className="font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <img className="h-11 w-11 rounded-xl object-cover" src="/img/dashboard/listing.webp" alt="" />
                        <div>
                          <p className="font-semibold text-night-900">{listing.name}</p>
                          <p className="text-xs text-slate-400">{listing.date}</p>
                        </div>
                      </div>
                    </td>
                    <td><span className="chip bg-pin-400/20 text-amber-600"><FaStar /> {listing.rating}</span></td>
                    <td>
                      <div className="flex justify-end gap-1.5">
                        <button type="button" onClick={() => handleDelete(listing.id)} className={`${iconBtn} hover:bg-magenta-500`} title="Remove">
                          <FaHeartCrack className="text-xs" />
                        </button>
                        <Link href="/all" className={iconBtn} title="Preview"><FaArrowUpRightFromSquare className="text-xs" /></Link>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </TableWrap>
        {likedData.length === 0 && <p className="py-10 text-center text-slate-400">No liked listings yet.</p>}
      </DashCard>
    </CommonDashLayout>
  );
}

export default LikedListing;
