"use client";
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaStar, FaHeart } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard } from "../ui/blocks";
import { Stagger, StaggerItem } from "../ui/motion";
import { cityHref, useUserLocation } from "../context/LocationContext";

const ENQ = "Send you an enquiry from your listing";
const REV = "Write a review on your listing";
const LIKE = "liked your listing";

const notifications = [
  { profile: "John Doe", enquiry: ENQ, listing: "Sample Listing 1", time: "7:27 AM on 26, Apr 2020" },
  { profile: "Jane Smith", enquiry: REV, listing: "Sample Listing 2", time: "10:58 PM on 12, Mar 2021", review: "Great experience, highly recommended!" },
  { profile: "Alice Johnson", enquiry: LIKE, time: "11:24 AM on 07, Jan 2020" },
  { profile: "Bob Brown", enquiry: ENQ, listing: "Sample Listing 3", time: "9:15 AM on 15, Jul 2020" },
  { profile: "Eve Williams", enquiry: REV, listing: "Sample Listing 4", time: "3:30 PM on 21, Sep 2020", review: "Excellent service, will come back again!" },
  { profile: "Charlie Davis", enquiry: LIKE, time: "5:45 PM on 03, Feb 2021" },
  { profile: "Grace Garcia", enquiry: ENQ, listing: "Sample Listing 5", time: "10:10 AM on 19, Dec 2020" },
  { profile: "Alex Martinez", enquiry: REV, listing: "Sample Listing 6", time: "8:20 PM on 05, May 2021", review: "Fantastic service, exceeded my expectations!" },
  { profile: "Sophia Rodriguez", enquiry: LIKE, time: "2:55 PM on 30, Nov 2020" },
  { profile: "Michael Lee", enquiry: ENQ, listing: "Sample Listing 7", time: "4:45 PM on 10, Oct 2020" },
];

const kind = (n) =>
  n.enquiry === REV
    ? { Icon: FaStar, cls: "bg-pin-400/20 text-amber-600" }
    : n.enquiry === LIKE
    ? { Icon: FaHeart, cls: "bg-magenta-500/10 text-magenta-500" }
    : { Icon: FaEnvelope, cls: "bg-brand-50 text-brand-600" };

function Notifications() {
  const { location } = useUserLocation();

  return (
    <CommonDashLayout>
      <DashCard badge="Notifications" title="All Notifications">
        <Stagger as="ol" gap={0.05} className="relative space-y-3 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-slate-200">
          {notifications.map((n, index) => {
            const { Icon, cls } = kind(n);
            return (
              <StaggerItem as="li" key={index} className="relative flex gap-4">
                <span className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full ring-4 ring-white ${cls}`}><Icon className="text-sm" /></span>
                <div className="flex-1 rounded-2xl bg-mist p-4 transition hover:bg-brand-50/60">
                  <p className="text-sm text-slate-600">
                    <Link href={cityHref(location, `notification/profile/${encodeURIComponent(n.profile)}`)} className="font-bold text-night-900 hover:text-brand-600">
                      {n.profile}
                    </Link>{" "}
                    {n.enquiry}{" "}
                    {n.listing && (
                      <Link href={cityHref(location, `notification/listing/${encodeURIComponent(n.listing)}`)} className="font-semibold text-brand-600 hover:underline">
                        {n.listing}
                      </Link>
                    )}
                  </p>
                  {n.review && <p className="mt-2 rounded-xl bg-white p-3 text-sm italic text-slate-600">“{n.review}”</p>}
                  <span className="mt-2 block text-xs text-slate-400">{n.time}</span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </DashCard>
    </CommonDashLayout>
  );
}

export default Notifications;
