"use client";
import React from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaTrash } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard, StatusChip, TableWrap } from "../ui/page";
import { cityHref, useUserLocation } from "../context/LocationContext";
import { iconBtn } from "./AllListing";

const leads = [
  { id: 1, name: "Saurabh", phone: "7417143645" },
  { id: 2, name: "Saurabsdsh", phone: "7417199645" },
  { id: 3, name: "Saurxssabh", phone: "7417143775" },
].map((l) => ({
  ...l,
  date: "16, Apr 2024",
  email: "imsaurabhk2002@gmail.com",
  location: "Dallas",
  time: "5:00 AM",
  message: "This is only for testing",
  status: "New",
}));

function LeadEnquiry() {
  const { location } = useUserLocation();
  const leadHref = cityHref(location, "lead");

  return (
    <CommonDashLayout>
      <DashCard badge="All Service Experts Leads" title="Leads">
        <TableWrap>
          <table className="data-table min-w-[820px]">
            <thead>
              <tr>
                <th>No</th><th>Lead</th><th>Enquiry Details</th><th>Message</th><th>Status</th><th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="font-semibold text-slate-400">{String(lead.id).padStart(2, "0")}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <img src="/img/dashboard/lead.webp" alt="" className="h-10 w-10 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-night-900">{lead.name}</p>
                        <p className="text-xs text-slate-400">{lead.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="space-y-1 text-xs">
                    <p className="flex items-center gap-2"><FaPhone className="text-brand-500" /> {lead.phone}</p>
                    <p className="flex items-center gap-2"><FaEnvelope className="text-cyan-500" /> {lead.email}</p>
                    <p className="flex items-center gap-2"><FaLocationDot className="text-magenta-500" /> {lead.location}</p>
                    <p className="flex items-center gap-2"><FaClock className="text-slate-400" /> {lead.date}, {lead.time}</p>
                  </td>
                  <td className="max-w-[200px] text-xs">{lead.message}</td>
                  <td><StatusChip status={lead.status} /></td>
                  <td>
                    <div className="flex justify-end gap-1.5">
                      <Link href={leadHref} className="btn-dark btn-sm whitespace-nowrap">Lead Status</Link>
                      <Link href={leadHref} className={iconBtn} title="Delete"><FaTrash className="text-xs" /></Link>
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

export default LeadEnquiry;
