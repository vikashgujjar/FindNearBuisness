"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCheck, FaPlus } from "react-icons/fa6";
import { PageHero, HeroSearch } from "@/app/ui/blocks";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { Avatar } from "@/app/ui/Avatar";
import { useAuth } from "@/app/context/AuthContext";
import { useApi, galleryHref, apiFetch } from "@/app/lib/api";
let g = [
  {
    image: "/img/community/community1.webp",
    name: "Rn53 Themes",
  },
  {
    image: "/img/community/dashbordMickkle.webp",
    name: "Mickle",
  },
];
let x = Array.from(
  {
    length: 24,
  },
  (e, t) =>
    0 === t
      ? g[0]
      : t % 2
        ? g[1]
        : {
            image: "/img/community/community1.webp",
            name: "Jony Deep Themes",
          },
).map((e, t) => ({
  ...e,
  id: t,
}));
function Community() {
  let [e, t] = useState(""),
    [a, s] = useState({}),
    g = useRouter(),
    { user, isLoggedIn } = useAuth(),
    { data, error } = useApi("/community?per_page=60", {
      cacheable: false,
    });
  useEffect(() => {
    data?.following && s(Object.fromEntries(data.following.map((e) => [e, true])));
  }, [data]);
  let w = (
      data?.data
        ? data.data.map((e) => ({
            id: e.id,
            name: e.company_name || e.name,
            image: e.avatar,
            href: galleryHref(e.id),
          }))
        : error
          ? x
          : []
    ).filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
    j = async (e) => {
      if (!e.href)
        return s((t) => ({
          ...t,
          [e.id]: !t[e.id],
        }));
      if (!isLoggedIn) return g.push("/user-login/sign");
      let t = !!a[e.id];
      s((a) => ({
        ...a,
        [e.id]: !t,
      }));
      try {
        let t = await apiFetch(`/users/${e.id}/follow`, {
          method: "POST",
        });
        s((a) => ({
          ...a,
          [e.id]: t.following,
        }));
      } catch (a) {
        s((a) => ({
          ...a,
          [e.id]: t,
        }));
      }
    };
  return (
    <div className="bg-mist">
      <PageHero
        eyebrow="People"
        title="Community"
        subtitle="Post your events, seminars, webinars, festivals, and more"
        waveFill="#F3F8FE"
      >
        <HeroSearch placeholder="Search members" value={e} onChange={(e) => t(e.target.value)} />
      </PageHero>
      <div className="container-x pb-16">
        <Stagger gap={0.03} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6">
          {w.map((e) => {
            let t = !!a[e.id];
            return (
              <StaggerItem
                key={e.id}
                className="panel group p-3 text-center transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-4"
              >
                <Link href={e.href || "/gallery"} className="block">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Avatar
                      src={e.image}
                      name={e.name}
                      textClass="text-4xl"
                      className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h6 className="mt-3 truncate text-sm font-bold text-night-900">{e.name}</h6>
                </Link>
                {user?.id !== e.id && (
                  <button
                    type="button"
                    onClick={() => j(e)}
                    aria-pressed={t}
                    className={`mt-3 w-full rounded-full py-2 text-xs font-bold transition ${t ? "bg-night-900 text-white" : "bg-brand-50 text-brand-600 hover:bg-brand-500 hover:text-white"}`}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {t ? (
                        <>
                          <FaCheck />
                          {" Following"}
                        </>
                      ) : (
                        <>
                          <FaPlus />
                          {" Follow"}
                        </>
                      )}
                    </span>
                  </button>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
        {!data && !error && (
          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6"
            aria-busy="true"
          >
            {[...Array(12)].map((e, t) => (
              <div key={t} className="panel aspect-[3/4] animate-pulse bg-white" />
            ))}
          </div>
        )}
        {(data || error) && 0 === w.length && <p className="py-16 text-center text-slate-400">No members found.</p>}
      </div>
    </div>
  );
}
export default Community;
