"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import { usePathname } from "next/navigation";
import { includes } from "lodash";
import CommonDashLayout from "./CommonDashLayout";

function LeadEnquiry() {
  const leads = [
    {
      id: 1,
      name: "Saurabh",
      date: "16, Apr 2024",
      phone: "7417143645",
      email: "imsaurabhk2002@gmail.com",
      location: "Dallas",
      time: "5:00 AM",
      message: "This is only for testing",
      status: "New",
    },
    {
      id: 2,
      name: "Saurabsdsh",
      date: "16, Apr 2024",
      phone: "7417199645",
      email: "imsaurabhk2002@gmail.com",
      location: "Dallas",
      time: "5:00 AM",
      message: "This is only for testing",
      status: "New",
    },
    {
      id: 3,
      name: "Saurxssabh",
      date: "16, Apr 2024",
      phone: "7417143775",
      email: "imsaurabhk2002@gmail.com",
      location: "Dallas",
      time: "5:00 AM",
      message: "This is only for testing",
      status: "New",
    },
  ];

  const pathName = usePathname();
  return (
<CommonDashLayout>
  <div className="bg-white">
    {/* Gradient bar */}
    <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

    {/* Title */}
    <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
      All Service Experts Leads
    </div>

    {/* Table Section */}
    <div className="p-4">
      <h2 className="text-base font-semibold mb-4">Leads</h2>
      <div className="overflow-x-auto w-[300px] md:w-auto">
        <table className="min-w-[700px]  w-full border border-gray-200 shadow-sm rounded-md text-sm">
          <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Lead Details</th>
              <th className="p-3 text-left">Enquiry Details</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Lead Status</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{lead.id}</td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src="/img/dashboard/lead.webp"
                    alt="Lead"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-xs text-gray-500">Date: {lead.date}</p>
                  </div>
                </td>
                <td className="p-3 text-xs leading-5 space-y-1">
                  <div><b>Phone:</b> {lead.phone}</div>
                  <div><b>Email:</b> {lead.email}</div>
                  <div><b>Location:</b> {lead.location}</div>
                  <div><b>Date:</b> {lead.date}</div>
                  <div><b>Time:</b> {lead.time}</div>
                </td>
                <td className="p-3 text-xs">{lead.message}</td>
                <td className="p-3 text-[11px]">
                  <a
                    href="/RajpuraTahsil/lead"
                    className="bg-blue-500 text-nowrap text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Lead Status
                  </a>
                </td>
                <td className="p-3 text-[11px]">
                  <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">
                    {lead.status}
                  </span>
                </td>
                <td className="p-3 text-[11px]">
                  <a
                    href="/RajpuraTahsil/lead"
                    className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</CommonDashLayout>

  );
}

export default LeadEnquiry;
