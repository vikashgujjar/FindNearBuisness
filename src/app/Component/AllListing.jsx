"use client";
import React from "react";
import Link from "next/link";
import { FaStar, FaEye, FaPen, FaTrash, FaArrowUpRightFromSquare, FaPlus } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard, StatusChip, TableWrap } from "../ui/blocks";
import { cityHref, useUserLocation } from "../context/LocationContext";

const listings = [
  { id: 1, name: "test", date: "28, Mar 2021", rating: 0, views: 1, status: "Active" },
  { id: 2, name: "dfzhfhd", date: "25, Mar 2021", rating: 0, views: 7, status: "Inactive" },
  { id: 3, name: "Iei", date: "25, Mar 2021", rating: 0, views: 15, status: "Active" },
  { id: 4, name: "Phoenix Mall", date: "13, Mar 2021", rating: 0, views: 10, status: "Active" },
  { id: 5, name: "Ocha Thai Cuisine", date: "12, Mar 2021", rating: 5, views: 9, status: "Active" },
  { id: 6, name: "Core Real Estates", date: "11, Mar 2021", rating: 0, views: 18, status: "Active" },
  { id: 7, name: "Gill Automobiles and Services", date: "20, Feb 2021", rating: 0, views: 30, status: "Active" },
  { id: 8, name: "Titan Wedding Hall", date: "07, Feb 2021", rating: 5, views: 27, status: "Active" },
  { id: 9, name: "Taj Hotels", date: "24, Dec 2020", rating: 0, views: 16, status: "Active" },
];

export const iconBtn = "grid h-8 w-8 place-items-center rounded-full bg-mist text-slate-500 transition hover:bg-brand-500 hover:text-white";

export default function AllListing() {
  const { location } = useUserLocation();

  return (
    <CommonDashLayout>
      <DashCard
        badge="All Listing"
        title="Listing Details"
        action={<Link href="/newlisting" className="btn-primary btn-sm"><FaPlus /> Add new Listing</Link>}
      >
        <TableWrap>
          <table className="data-table">
            <thead>
              <tr>
                <th>No</th><th>Listing Name</th><th>Rating</th><th>Views</th><th>Status</th><th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
                <tr key={listing.id}>
                  <td className="font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <img src="/img/dashboard/listing.webp" alt="" className="h-10 w-10 rounded-xl object-cover" />
                      <div>
                        <p className="font-semibold text-night-900">{listing.name}</p>
                        <p className="text-xs text-slate-400">{listing.date}</p>
                      </div>
                    </div>
                  </td>
                  <td><span className="chip bg-pin-400/20 text-amber-600"><FaStar /> {listing.rating}</span></td>
                  <td><span className="flex items-center gap-1.5"><FaEye className="text-slate-300" /> {listing.views}</span></td>
                  <td><StatusChip status={listing.status} /></td>
                  <td>
                    <div className="flex justify-end gap-1.5">
                      <Link href="/newlisting" className={iconBtn} title="Edit"><FaPen className="text-xs" /></Link>
                      <Link href={cityHref(location, "listing")} className={iconBtn} title="Delete"><FaTrash className="text-xs" /></Link>
                      <Link href="/all" className={iconBtn} title="Preview"><FaArrowUpRightFromSquare className="text-xs" /></Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
      </DashCard>
    </CommonDashLayout>
  );
}
