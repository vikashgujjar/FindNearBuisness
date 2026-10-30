"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLocationDot, FaXmark } from "react-icons/fa6";
import { useUserLocation } from "../context/LocationContext";

function LocationModal() {
  const { modalOpen, closeModal, lookupPin, cityLabel, pincode } = useUserLocation();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen, closeModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pin)) {
      setError("Please enter a valid 6-digit PIN code");
      return;
    }
    setLoading(true);
    const message = await lookupPin(pin);
    setLoading(false);
    setError(message || "");
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-end justify-center bg-night-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-modal-title"
            className="relative w-full max-w-md overflow-hidden rounded-t-3xl bg-white p-6 shadow-card-hover sm:rounded-3xl sm:p-8"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" />
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-mist text-night-900 transition hover:bg-brand-50 hover:text-brand-600"
            >
              <FaXmark />
            </button>

            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-xl text-white shadow-glow">
              <FaLocationDot />
            </span>
            <h2 id="location-modal-title" className="mt-4 text-2xl font-bold text-night-900">
              Set your location
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {cityLabel
                ? `Currently showing results for ${cityLabel} ${pincode}`
                : "Enter your PIN code to see businesses near you."}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, ""));
                  setError("");
                }}
                placeholder="Enter 6-digit PIN code"
                aria-label="PIN code"
                className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3.5 text-base tracking-widest text-night-900 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15"
              />
              {error && <p className="text-sm text-magenta-600">{error}</p>}
              <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 text-base disabled:opacity-70">
                {loading ? "Finding your city…" : "Update location"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LocationModal;
