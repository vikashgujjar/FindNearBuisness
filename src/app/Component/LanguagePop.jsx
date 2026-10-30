"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

const stateLanguages = [
  "Telugu", "English", "Assamese", "Hindi", "Konkani", "Gujarati", "Kannada", "Malayalam", "Marathi",
  "Meitei (Manipuri)", "Mizo", "Odia", "Punjabi", "Nepali", "Tamil", "Bengali",
];

export default function LanguagePop({ setLangPop }) {
  const [selected, setSelected] = useState("English");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-night-950/60 backdrop-blur-sm sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setLangPop(false)}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Select a language"
        className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-card-hover sm:rounded-3xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setLangPop(false)} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-mist text-night-900">
          <RxCross1 />
        </button>
        <h2 className="text-xl font-bold text-night-900">Select a language</h2>
        <ul className="mt-5 grid grid-cols-2 gap-2">
          {stateLanguages.map((language) => (
            <li key={language}>
              <button
                type="button"
                onClick={() => setSelected(language)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  selected === language ? "bg-brand-gradient text-white" : "bg-mist text-slate-600 hover:bg-brand-50"
                }`}
              >
                {language}
                {selected === language && <FaCheck className="text-xs" />}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
