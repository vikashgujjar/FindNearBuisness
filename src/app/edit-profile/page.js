"use client"
import React, { useState } from "react";
import PaymentStatus from "../Component/PaymentStatus";
import DashLeft from "../Component/DashLeft";
import DashRight from "../Component/DashRight";
import Link from "next/link";
import CommonDashLayout from "../Component/CommonDashLayout";
function Profile({isEdit,setIsEdit}) {
  const profileData = [
    { label: "Profile Expiry (Listing exp)", value: "8 June 2025" },
    { label: "Name", value: "Rn53 Themes" },
    { label: "Email Id", value: "info@futureittouch.com" },
    { label: "Profile Password", value: "*********" },
    { label: "Mobile Number", value: "5522114422" },
    {
      label: "Profile Picture",
      value: <input type="file" />,
    },
    { label: "City", value: "Sydney" },
    { label: "Join Date", value: "26, Mar 2021" },
    { label: "Verified", value: "Yes" },
    { label: "Premium Service Provider", value: "Yes" },
    {
      label: "Profile Link",
      value: (
        <a
          href="/RajpuraTahsil/profile"
          className="text-blue-500 hover:underline"
        >
          profile.html
        </a>
      ),
    },
    {
      label: "Facebook",
      value: (
        <a
          href="https://www.facebook.com/53themes"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          https://www.facebook.com/53themes
        </a>
      ),
    },
    {
      label: "Twitter",
      value: (
        <a
          href="https://twitter.com/53themes"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          https://twitter.com/53themes
        </a>
      ),
    },
    {
      label: "Youtube",
      value: (
        <a
          href="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg
        </a>
      ),
    },
    {
      label: "Website",
      value: (
        <a
          href="https://www.rn53themes.net"
          target="_blank"
          className=" hover:underline"
        >
          www.rn53themes.net
        </a>
      ),
    },
  ];

  const [activeTab,setActiveTab]=useState("")

  return (
    <>



<CommonDashLayout>
  <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md px-4 sm:px-6 md:px-8 py-6">
    {/* Top Gradient Line */}
    <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

    {/* Title Section */}
    <div className="relative z-10 -mt-10 mb-4 w-fit mx-auto bg-teal-500 text-white text-xs sm:text-sm font-semibold tracking-wide py-1 px-4 uppercase rounded shadow">
      {isEdit ? "Edit User Profile" : "User Profile"}
    </div>

    <div className="space-y-6">
      {/* Optional Heading (for view mode) */}
      {!isEdit && (
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700">Profile Details</h2>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto w-[300px] md:w-full rounded-lg">
        <table className="w-full border border-gray-200 text-sm text-gray-700">
          <tbody>
            {profileData.map((item, index) => (
              <tr key={index} className="border-b last:border-0 hover:bg-gray-50 transition">
                <td className="p-3 font-medium whitespace-nowrap">{item.label}</td>
                <td className="p-3 whitespace-nowrap">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 text-sm">
        {isEdit ? (
          <>
            <button className="bg-[#51c0ff] hover:bg-[#f18b54] transition text-white px-5 py-2 rounded-full shadow-md">
              Save Changes
            </button>
            <Link href="/realestate" className="bg-[#51c0ff] hover:bg-[#f18b54] transition text-white px-5 py-2 rounded-full shadow-md">
              Upgrade
            </Link>
          </>
        ) : (
          <>
            <a
              href="/edit-profile"
              className="bg-[#51c0ff] hover:bg-[#f18b54] transition text-white px-5 py-2 rounded-full shadow-md"
            >
              Edit Profile
            </a>
            <Link
              href="/edit-profile/db-payment"
              onClick={() => tabHandler("paynow")}
              className="bg-[#51c0ff] hover:bg-[#f18b54] transition text-white px-5 py-2 rounded-full shadow-md"
            >
              Upgrade
            </Link>
          </>
        )}
      </div>
    </div>
  </div>
</CommonDashLayout>


   
    </>
  );
}

export default Profile;
