"use client";
import React from "react";
import Link from "next/link";
import { FaCircleCheck, FaPen, FaArrowUp } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard } from "../ui/page";
import { cityHref, useUserLocation } from "../context/LocationContext";

const ext = (href, text) => (
  <a href={href} target="_blank" rel="noreferrer" className="break-all text-brand-600 hover:underline">{text}</a>
);

function Profile({ isEdit = false }) {
  const { location } = useUserLocation();

  const profileData = [
    { label: "Profile Expiry (Listing exp)", value: "8 June 2025" },
    { label: "Name", value: "Rn53 Themes" },
    { label: "Email Id", value: "info@futureittouch.com" },
    { label: "Profile Password", value: "*********" },
    { label: "Mobile Number", value: "5522114422" },
    {
      label: "Profile Picture",
      value: <input type="file" className="text-xs file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:font-semibold file:text-brand-600" />,
    },
    { label: "City", value: "Sydney" },
    { label: "Join Date", value: "26, Mar 2021" },
    { label: "Verified", value: <span className="chip bg-emerald-50 text-emerald-600"><FaCircleCheck /> Yes</span> },
    { label: "Premium Service Provider", value: <span className="chip bg-brand-50 text-brand-600">Yes</span> },
    { label: "Profile Link", value: <Link href={cityHref(location, "profile")} className="text-brand-600 hover:underline">profile.html</Link> },
    { label: "Facebook", value: ext("https://www.facebook.com/53themes", "https://www.facebook.com/53themes") },
    { label: "Twitter", value: ext("https://twitter.com/53themes", "https://twitter.com/53themes") },
    { label: "Youtube", value: ext("https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg", "https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg") },
    { label: "Website", value: ext("https://www.rn53themes.net", "www.rn53themes.net") },
  ];

  return (
    <CommonDashLayout>
      <DashCard
        badge={isEdit ? "Edit User Profile" : "User Profile"}
        title="Profile Details"
        action={
          <>
            {!isEdit && <Link href="/edit-profile" className="btn-ghost btn-sm"><FaPen className="text-[10px]" /> Edit Profile</Link>}
            <Link href="/payment" className="btn-primary btn-sm"><FaArrowUp className="text-[10px]" /> Upgrade</Link>
          </>
        }
      >
        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-mist p-4">
          <img src="/img/dashboard/dashbordleft.webp" alt="" className="h-16 w-16 rounded-full object-cover ring-4 ring-white" />
          <div>
            <p className="font-bold text-night-900">Rn53 Themes</p>
            <p className="text-sm text-slate-500">info@futureittouch.com</p>
          </div>
        </div>
        <dl className="divide-y divide-slate-100">
          {profileData.map((item) => (
            <div key={item.label} className="grid gap-1 py-3 text-sm sm:grid-cols-[220px_1fr] sm:gap-4">
              <dt className="font-semibold text-slate-500">{item.label}</dt>
              <dd className="min-w-0 text-night-900">{item.value}</dd>
            </div>
          ))}
        </dl>
        {isEdit && (
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="btn-primary px-7 py-3">Save Changes</button>
            <Link href="/realestate" className="btn-ghost px-7 py-3">Cancel</Link>
          </div>
        )}
      </DashCard>
    </CommonDashLayout>
  );
}

export default Profile;
