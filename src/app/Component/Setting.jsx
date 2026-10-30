"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTriangleExclamation } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard } from "../ui/page";

const activeOptions = [
  { label: "Active", value: "0" },
  { label: "In-Active", value: "1" },
];

const settings = [
  { label: "Account status", name: "setting_user_status", options: [...activeOptions, { label: "Close account", value: "2" }] },
  { label: "Listing reviews", name: "setting_review", options: activeOptions },
  { label: "Listing share", name: "setting_share", options: activeOptions },
  { label: "Show my profile on listing page", name: "setting_profile_show", options: activeOptions },
];

function Setting() {
  const [values, setValues] = useState({ setting_user_status: "0", setting_review: "0", setting_share: "0", setting_profile_show: "0" });
  const closing = values.setting_user_status === "2";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CommonDashLayout>
      <DashCard badge="Setting" title="Profile Setting">
        <form id="setting_update" name="setting_update" onSubmit={handleSubmit} className="space-y-3">
          <AnimatePresence>
            {closing && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-3 overflow-hidden rounded-2xl bg-magenta-500/10 p-4 text-sm font-semibold text-magenta-600"
              >
                <FaTriangleExclamation className="shrink-0" />
                Close Account will Delete your account permanently!! Think before submitting!!
              </motion.p>
            )}
          </AnimatePresence>

          {settings.map(({ label, name, options }) => (
            <div key={name} className="flex flex-col gap-3 rounded-2xl bg-mist p-4 sm:flex-row sm:items-center sm:justify-between">
              <label htmlFor={name} className="font-semibold text-night-900">{label}</label>
              <select
                id={name}
                name={name}
                value={values[name]}
                onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
                className="field bg-white sm:w-56"
              >
                {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          ))}

          <div className="pt-3">
            <button type="submit" name="setting_update_submit" className="btn-primary px-7 py-3">Save changes</button>
          </div>
        </form>
      </DashCard>
    </CommonDashLayout>
  );
}

export default Setting;
