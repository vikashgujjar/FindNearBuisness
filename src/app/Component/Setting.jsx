"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTriangleExclamation } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { DashCard } from "@/app/ui/blocks";
import { PasswordInput } from "@/app/ui/PasswordInput";
import { useAuth } from "@/app/context/AuthContext";
import { apiFetch } from "@/app/lib/api";
let p = [
  {
    label: "Active",
    value: "0",
  },
  {
    label: "In-Active",
    value: "1",
  },
];
let g = [
  {
    label: "Account status",
    name: "setting_user_status",
    options: [
      ...p,
      {
        label: "Close account",
        value: "2",
      },
    ],
  },
  {
    label: "Listing reviews",
    name: "setting_review",
    options: p,
  },
  {
    label: "Listing share",
    name: "setting_share",
    options: p,
  },
  {
    label: "Show my profile on listing page",
    name: "setting_profile_show",
    options: p,
  },
];
let b = {
  setting_user_status: "0",
  setting_review: "0",
  setting_share: "0",
  setting_profile_show: "0",
};
let Setting = function () {
  let { user, setUser, logout } = useAuth(),
    p = useRouter(),
    [x, v] = useState(() => ({
      ...b,
      ...(user?.settings || {}),
    })),
    [f, w] = useState(""),
    [y, j] = useState(null),
    _ = "2" === x.setting_user_status;
  useEffect(() => {
    user?.settings &&
      v((t) => ({
        ...t,
        ...user.settings,
      }));
  }, [user]);
  let N = async (e) => {
    e.preventDefault(),
      j({
        busy: true,
      });
    try {
      if (_) {
        await apiFetch("/account", {
          method: "DELETE",
          body: {
            password: f,
          },
        }),
          await logout(),
          p.replace("/");
        return;
      }
      let e = await apiFetch("/account/settings", {
        method: "PUT",
        body: {
          settings: x,
        },
      });
      e?.data && setUser(e.data),
        j({
          ok: "Settings saved.",
        });
    } catch (e) {
      j({
        error: e.message,
      });
    }
  };
  return (
    <CommonDashLayout>
      <DashCard badge="Setting" title="Profile Setting">
        <form id="setting_update" name="setting_update" onSubmit={N} className="space-y-3">
          <AnimatePresence>
            {_ && (
              <motion.p
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="flex items-center gap-3 overflow-hidden rounded-2xl bg-rose-500/10 p-4 text-sm font-semibold text-rose-600"
              >
                <FaTriangleExclamation className="shrink-0" />
                Close Account will Delete your account permanently!! Think before submitting!!
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {_ && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="overflow-hidden"
              >
                <label htmlFor="close-password" className="field-label">
                  Confirm with your password
                </label>
                <PasswordInput
                  id="close-password"
                  required
                  value={f}
                  onChange={(e) => w(e.target.value)}
                  className="field bg-white"
                  autoComplete="current-password"
                />
              </motion.div>
            )}
          </AnimatePresence>
          {g.map((e) => {
            let { label, name, options } = e;
            return (
              <div
                key={name}
                className="flex flex-col gap-3 rounded-2xl bg-mist p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <label htmlFor={name} className="font-semibold text-night-900">
                  {label}
                </label>
                <select
                  id={name}
                  name={name}
                  value={x[name]}
                  onChange={(e) =>
                    v((t) => ({
                      ...t,
                      [name]: e.target.value,
                    }))
                  }
                  className="field bg-white sm:w-56"
                >
                  {options.map((e) => (
                    <option key={e.value} value={e.value}>
                      {e.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
          <div className="pt-3">
            {y?.ok && (
              <p className="mb-3 text-sm font-semibold text-emerald-600" role="status">
                {y.ok}
              </p>
            )}
            {y?.error && (
              <p className="mb-3 text-sm font-semibold text-rose-600" role="alert">
                {y.error}
              </p>
            )}
            <button
              type="submit"
              name="setting_update_submit"
              disabled={y?.busy}
              className={`btn-primary px-7 py-3 disabled:opacity-60 ${_ ? "bg-none bg-rose-500" : ""}`}
            >
              {y?.busy ? "Saving…" : _ ? "Close my account" : "Save changes"}
            </button>
          </div>
        </form>
      </DashCard>
    </CommonDashLayout>
  );
};
export default Setting;
