"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function Sucesss() {
  return (
    <div className="py-4 text-center">
      <motion.div
        className="relative mx-auto grid h-28 w-28 place-items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 14 }}
      >
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-emerald-400/30" />
        <span className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-4xl text-white shadow-lg">
          <FaCheck />
        </span>
      </motion.div>
      <p className="mt-6 text-slate-600">Your listing has been submitted successfully.</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link className="btn-dark" href="/dashboard">Go to User Dashboard</Link>
        <Link className="btn-primary" href="/all">Listing Preview</Link>
      </div>
    </div>
  );
}
