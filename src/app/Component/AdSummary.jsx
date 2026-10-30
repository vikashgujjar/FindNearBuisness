"use client";
import React from "react";
import Link from "next/link";
import { FaEye, FaArrowPointer } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard, StatusChip, TableWrap } from "../ui/page";

const adsData = [
  { id: 1, position: "Home page Bottom", startDate: "31, Mar 2021", endDate: "29, Apr 2021", duration: "0 Days", status: "InActive" },
  { id: 2, position: "All listing page Top", startDate: "17, Jun 2020", endDate: "30, Jun 2022", duration: "743 Days", status: "Active" },
  { id: 3, position: "Listing detail page Bottom", startDate: "03, Jun 2020", endDate: "23, Jul 2020", duration: "50 Days", status: "Active" },
].map((a) => ({ ...a, views: "1k", clicks: "642" }));

function AdSummary() {
  return (
    <CommonDashLayout>
      <DashCard
        badge="Paid Ads"
        title="Your Banner Ads"
        action={
          <>
            <Link href="/ads-form" className="btn-primary btn-sm">Post your Ads</Link>
            <Link href="/ads-pricing" className="btn-ghost btn-sm">Pricing and other details</Link>
          </>
        }
      >
        <TableWrap>
          <table className="data-table min-w-[760px]">
            <thead>
              <tr><th>No</th><th>Ads Position</th><th>Start Date</th><th>End Date</th><th>Duration</th><th>Status</th><th>Views</th><th>Clicks</th></tr>
            </thead>
            <tbody>
              {adsData.map((ad, index) => (
                <tr key={ad.id}>
                  <td className="font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</td>
                  <td className="font-semibold text-night-900">{ad.position}</td>
                  <td>{ad.startDate}</td>
                  <td>{ad.endDate}</td>
                  <td>{ad.duration}</td>
                  <td><StatusChip status={ad.status} /></td>
                  <td><span className="flex items-center gap-1.5"><FaEye className="text-slate-300" />{ad.views}</span></td>
                  <td><span className="flex items-center gap-1.5"><FaArrowPointer className="text-slate-300" />{ad.clicks}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>

        <p className="mt-6 rounded-2xl border-l-4 border-cyan-400 bg-cyan-400/10 p-4 text-sm leading-relaxed text-slate-600">
          <b>Notes:</b> Before starting your ad payment, you must check the pricing details and positions. Click the &quot;Pricing and other details&quot; button
          above to learn more. Once your payment is processed, your invoice will be available in your &quot;Payment Invoice&quot; page, and your ad will run until
          the end date.
        </p>
      </DashCard>
    </CommonDashLayout>
  );
}

export default AdSummary;
