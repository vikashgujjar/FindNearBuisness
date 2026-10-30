"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaTrash, FaTriangleExclamation } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard, TableWrap } from "../ui/page";
import { iconBtn } from "./AllListing";

const initialReceived = [
  { id: 1, listing: "Ocha Thai Cuisine", user: "Loki", email: "thedirectoryfinder@gmail.com", phone: "87654567", rating: 5, message: "Perfect service" },
  { id: 2, listing: "Titan Wedding Hall", user: "Loki", email: "thedirectoryfinder@gmail.com", phone: "87654567", rating: 5, message: "Best service provider in wedding hall field... I personally recommend Titan Wedding Hall." },
  { id: 3, listing: "Smith Luxury Villas", user: "Leland K Cotter", email: "cotter@business.com", phone: "9255886632", rating: 3, message: "Good experience overall." },
];

const initialSent = [
  { id: 4, listing: "Rolexo Villas in California", user: "Rn53 Themes", email: "info@futureittouch.com", phone: "5522114422", city: "Los Angeles", rating: 5, message: "Rolexo Villas is well-known as a premier builder of villas and apartments..." },
  { id: 5, listing: "The Royal Spa Center for Women", user: "Rn53 Themes", email: "info@futureittouch.com", phone: "5522114422", city: "Sydney", rating: 4, message: "Perfect facial.. I strongly recommend. Writing great reviews may help others discover the places that are just apt for them..." },
];

const Ratings = ({ count }) => (
  <span className="flex gap-0.5 text-pin-500">
    {Array.from({ length: 5 }, (_, i) => <FaStar key={i} className={i < count ? "" : "text-slate-200"} />)}
  </span>
);

function Reviews() {
  const [activeTab, setActiveTab] = useState("Received");
  const [reviewData, setReviewData] = useState({ received: initialReceived, sent: initialSent });
  const [pendingDelete, setPendingDelete] = useState(null);

  const confirmDelete = (confirm) => {
    if (confirm) {
      setReviewData((d) => ({
        received: d.received.filter((r) => r.id !== pendingDelete),
        sent: d.sent.filter((r) => r.id !== pendingDelete),
      }));
    }
    setPendingDelete(null);
  };

  const rows = activeTab === "Received" ? reviewData.received : reviewData.sent;

  return (
    <CommonDashLayout>
      <DashCard badge="Reviews" title="All Listings - Review Details">
        <div className="mb-6 inline-flex gap-1 rounded-full bg-mist p-1" role="tablist">
          {[
            ["Received", `Received (${reviewData.received.length})`],
            ["Sent", `Sent (${reviewData.sent.length})`],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              onClick={() => setActiveTab(id)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === id ? "text-white" : "text-slate-500"}`}
            >
              {activeTab === id && <motion.span layoutId="review-tab" className="absolute inset-0 rounded-full bg-night-900" />}
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>

        <TableWrap>
          <table className="data-table min-w-[900px]">
            <thead>
              <tr>
                <th>No</th><th>Listing</th><th>User</th><th>Contact</th>
                {activeTab === "Sent" && <th>City</th>}
                <th>Rating</th><th>Message</th><th className="text-right">Delete</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((review, index) => (
                <tr key={review.id}>
                  <td className="font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</td>
                  <td className="font-semibold text-night-900">{review.listing}</td>
                  <td>{review.user}</td>
                  <td className="text-xs">
                    <p>{review.email}</p>
                    <p className="text-slate-400">{review.phone}</p>
                  </td>
                  {activeTab === "Sent" && <td>{review.city}</td>}
                  <td><Ratings count={review.rating} /></td>
                  <td className="max-w-[260px] text-xs leading-relaxed">{review.message}</td>
                  <td className="text-right">
                    <button type="button" onClick={() => setPendingDelete(review.id)} className={`${iconBtn} ml-auto hover:bg-magenta-500`} title="Delete">
                      <FaTrash className="text-xs" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
        {rows.length === 0 && <p className="py-10 text-center text-slate-400">No reviews here.</p>}
      </DashCard>

      <AnimatePresence>
        {pendingDelete !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-night-950/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => confirmDelete(false)}
          >
            <motion.div
              role="alertdialog"
              aria-modal="true"
              className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-card-hover"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-magenta-500/10 text-xl text-magenta-500"><FaTriangleExclamation /></span>
              <p className="mt-4 font-bold text-night-900">Are you sure you want to delete this review?</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button type="button" onClick={() => confirmDelete(false)} className="btn-ghost">No</button>
                <button type="button" onClick={() => confirmDelete(true)} className="btn-dark bg-magenta-500 hover:bg-magenta-600">Yes, delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CommonDashLayout>
  );
}

export default Reviews;
