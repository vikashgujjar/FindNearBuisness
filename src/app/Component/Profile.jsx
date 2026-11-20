"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCircleCheck, FaPen, FaArrowUp } from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { DashCard } from "@/app/ui/blocks";
import { PasswordInput } from "@/app/ui/PasswordInput";
import { Avatar } from "@/app/ui/Avatar";
import { useUserLocation, cityHref } from "@/app/context/LocationContext";
import { useAuth } from "@/app/context/AuthContext";
import { apiFetch, clearApiCache, formatDate, galleryHref } from "@/app/lib/api";
let b = (props, t) => (
  <a
    href={/^https?:\/\//.test(props) ? props : `https://${props}`}
    target="_blank"
    rel="noreferrer"
    className="break-all text-brand-600 hover:underline"
  >
    {t}
  </a>
);
let f = [
  ["Name", "name", "text"],
  ["Email Id", "email", "email"],
  ["Mobile Number", "phone", "text"],
  ["City", "city", "text"],
  ["Facebook", "facebook", "url"],
  ["Twitter", "twitter", "url"],
  ["Youtube", "youtube", "url"],
  ["Website", "website", "text"],
];
let Profile = function (props) {
  var t, s, r;
  let { isEdit = false } = props,
    { location } = useUserLocation(),
    { user, setUser } = useAuth(),
    N = useRouter(),
    [y, C] = useState({}),
    [k, P] = useState(null),
    [S, _] = useState(null);
  useEffect(() => {
    user &&
      C({
        ...Object.fromEntries(
          f.map((e) => {
            let [, t] = e;
            return [t, user[t] || ""];
          }),
        ),
        current_password: "",
        password: "",
      });
  }, [user]);
  let E = (e) =>
      C((t) => ({
        ...t,
        [e.target.name]: e.target.value,
      })),
    A = async () => {
      _({
        busy: true,
      });
      let e = new FormData();
      Object.entries(y).forEach((t) => {
        let [s, l] = t;
        (("password" !== s && "current_password" !== s) || l) && e.append(s, l);
      }),
        k && e.append("avatar", k);
      try {
        let t = await apiFetch("/account", {
          method: "POST",
          body: e,
        });
        setUser(t.data || t.user || user),
          clearApiCache("/account"),
          _({
            ok: "Profile updated.",
          }),
          N.push(cityHref(location, "profile"));
      } catch (e) {
        _({
          error: e.message,
        });
      }
    },
    F = function (e) {
      var t;
      let s = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "text",
        a = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
      return <input type={s} name={e} value={y[e] ?? ""} onChange={E} className="field" aria-label={e} {...a} />;
    },
    D = (e) => {
      let t = user?.[e];
      return t ? (
        ["facebook", "twitter", "youtube", "website"].includes(e) ? (
          b(t, t)
        ) : (
          t
        )
      ) : (
        <span className="text-slate-400">—</span>
      );
    },
    I = [
      {
        label: "Profile Expiry (Listing exp)",
        value: user?.plan?.expires_at ? formatDate(user.plan.expires_at) : "—",
        readOnly: true,
      },
      ...f.slice(0, 2).map((e) => {
        let [t, s, l] = e;
        return {
          label: t,
          value: isEdit
            ? F(s, l, {
                required: true,
              })
            : D(s),
        };
      }),
      {
        label: "Profile Password",
        value: isEdit ? (
          <div className="grid gap-2 sm:grid-cols-2">
            <PasswordInput
              name="current_password"
              value={y.current_password ?? ""}
              onChange={E}
              aria-label="Current password"
              placeholder="Current password"
              autoComplete="current-password"
            />
            <PasswordInput
              name="password"
              value={y.password ?? ""}
              onChange={E}
              aria-label="New password"
              placeholder="New password (optional)"
              autoComplete="new-password"
            />
          </div>
        ) : (
          "*********"
        ),
      },
      ...f.slice(2, 3).map((e) => {
        let [t, s, l] = e;
        return {
          label: t,
          value: isEdit ? F(s, l) : D(s),
        };
      }),
      {
        label: "Profile Picture",
        value: isEdit ? (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              var t;
              return P(e.target.files?.[0] || null);
            }}
            className="text-xs file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:font-semibold file:text-brand-600"
          />
        ) : (
          <Avatar src={user?.avatar} name={user?.name} alt="" className="h-10 w-10 rounded-full object-cover" />
        ),
      },
      ...f.slice(3, 4).map((e) => {
        let [t, s, l] = e;
        return {
          label: t,
          value: isEdit ? F(s, l) : D(s),
        };
      }),
      {
        label: "Join Date",
        value: formatDate(user?.joined_at),
      },
      {
        label: "Verified",
        value: user?.is_verified ? (
          <span className="chip bg-emerald-50 text-emerald-600">
            <FaCircleCheck />
            {" Yes"}
          </span>
        ) : (
          <span className="chip bg-slate-100 text-slate-500">No</span>
        ),
      },
      {
        label: "Premium Service Provider",
        value: <span className="chip bg-brand-50 text-brand-600">{user?.plan ? "Yes" : "No"}</span>,
      },
      {
        label: "Profile Link",
        value: user ? (
          <Link href={galleryHref(user.id)} className="text-brand-600 hover:underline">
            View public profile
          </Link>
        ) : null,
      },
      ...f.slice(4).map((e) => {
        let [t, s, l] = e;
        return {
          label: t,
          value: isEdit
            ? F(s, "url" === l ? "text" : l, {
                placeholder: "https://",
              })
            : D(s),
        };
      }),
    ];
  return (
    <CommonDashLayout>
      <DashCard
        badge={isEdit ? "Edit User Profile" : "User Profile"}
        title="Profile Details"
        action={
          <>
            {!isEdit && (
              <Link href="/edit-profile" className="btn-ghost btn-sm">
                <FaPen className="text-[10px]" />
                {" Edit Profile"}
              </Link>
            )}
            {user?.role === "customer" ? (
              <Link href="/become-vendor" className="btn-primary btn-sm">
                <FaArrowUp className="text-[10px]" />
                {" List business"}
              </Link>
            ) : (
              <Link href={cityHref(location, "payment")} className="btn-primary btn-sm">
                <FaArrowUp className="text-[10px]" />
                {" Upgrade"}
              </Link>
            )}
          </>
        }
      >
        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-mist p-4">
          <Avatar
            src={user?.avatar}
            name={user?.name}
            alt=""
            textClass="text-xl"
            className="h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-white"
          />
          <div>
            <p className="font-bold text-night-900">{user?.name}</p>
            <p className="text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault(), A();
          }}
        >
          <dl className="divide-y divide-slate-100">
            {I.map((e) => (
              <div key={e.label} className="grid gap-1 py-3 text-sm sm:grid-cols-[220px_1fr] sm:items-center sm:gap-4">
                <dt className="font-semibold text-slate-500">{e.label}</dt>
                <dd className="min-w-0 text-night-900">{e.value}</dd>
              </div>
            ))}
          </dl>
          {isEdit && (
            <>
              {S?.ok && (
                <p className="mt-4 text-sm font-semibold text-emerald-600" role="status">
                  {S.ok}
                </p>
              )}
              {S?.error && (
                <p className="mt-4 text-sm font-semibold text-rose-600" role="alert">
                  {S.error}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" disabled={S?.busy} className="btn-primary px-7 py-3 disabled:opacity-60">
                  {S?.busy ? "Saving…" : "Save Changes"}
                </button>
                <Link href={cityHref(location, "profile")} className="btn-ghost px-7 py-3">
                  Cancel
                </Link>
              </div>
            </>
          )}
        </form>
      </DashCard>
    </CommonDashLayout>
  );
};
export default Profile;
