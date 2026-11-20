"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaSliders } from "react-icons/fa6";
import { PageHero } from "@/app/ui/blocks";
import { Stagger, StaggerItem } from "@/app/ui/motion";
import { useApi, productHref, formatPrice } from "@/app/lib/api";
let p = [
  {
    name: "Electronics",
    subcategories: ["Laptops", "Phones", "Accessories"],
  },
  {
    name: "Clothing",
    subcategories: ["Men", "Women", "Kids"],
  },
  {
    name: "Home & Kitchen",
    subcategories: ["Furniture", "Appliances", "Decor"],
  },
];
let x = ["KRISHNA", "Electric toys", "Soft toys", "Diet food", "Health products"];
let f = ["Above $1000", "$501 - $1000", "$251 - $500", "$101 - $250", "Below $100"];
let g = ["Above 70%", "51% - 70%", "26% - 50%", "11% - 25%", "Below 10%"];
let v = [
  {
    id: 1,
    name: "Clothing1",
    price: "$1000",
    discount: "0% off",
  },
  {
    id: 2,
    name: "Shoes",
    price: "$1000",
    discount: "0% off",
  },
  {
    id: 3,
    name: "Audi q3",
    price: "$1000",
    discount: "0% off",
  },
  {
    id: 4,
    name: "Audi q3",
    price: "$1000",
    discount: "0% off",
  },
  {
    id: 5,
    name: "baby q3",
    price: "$1000",
    discount: "0% off",
  },
  {
    id: 6,
    name: "fruit q3",
    price: "$1000",
    discount: "10% off",
  },
  {
    id: 7,
    name: "mens q3",
    price: "$1000",
    discount: "20% off",
  },
  {
    id: 8,
    name: "health q3",
    price: "$500",
    discount: "10% off",
  },
  {
    id: 9,
    name: "sports q3",
    price: "$500",
    discount: "20% off",
  },
  {
    id: 10,
    name: "education q3",
    price: "$250",
    discount: "40% off",
  },
  {
    id: 11,
    name: "electricals q3",
    price: "$100",
    discount: "30% off",
  },
  {
    id: 12,
    name: "auto q3",
    price: "$100",
    discount: "40% off",
  },
  {
    id: 13,
    name: "Audi q3",
    price: "$150",
    discount: "30% off",
  },
  {
    id: 14,
    name: "Audi q3",
    price: "$100",
    discount: "30% off",
  },
  {
    id: 15,
    name: "Audi q3",
    price: "$100",
    discount: "10% off",
  },
  {
    id: 16,
    name: "Audi q3",
    price: "$100",
    discount: "10% off",
  },
];
let b = {
  "Above $1000": [1000.01, 1 / 0],
  "$501 - $1000": [501, 1e3],
  "$251 - $500": [251, 500],
  "$101 - $250": [101, 250],
  "Below $100": [0, 100],
};
let j = {
  "Above 70%": [71, 100],
  "51% - 70%": [51, 70],
  "26% - 50%": [26, 50],
  "11% - 25%": [11, 25],
  "Below 10%": [0, 10],
};
let w = (e, t) => !t || (e >= t[0] && e <= t[1]);
function Cy(props) {
  let { title, options, value, onChange } = props;
  return (
    <div>
      <h4 className="mb-3 text-sm font-bold text-night-900">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => onChange(value === e ? null : e)}
            aria-pressed={value === e}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${value === e ? "bg-brand-gradient text-white" : "bg-mist text-slate-600 hover:text-brand-600"}`}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}
function Product() {
  let [e, t] = useState(null),
    [n, r] = useState(null),
    [N, S] = useState(null),
    [P, C] = useState(null),
    [$, k] = useState(false),
    [I, E] = useState(null),
    { data, error } = useApi("/products?per_page=50", {
      auth: false,
    }),
    _ = data?.data,
    T = useMemo(
      () =>
        _
          ? _.map((e) => {
              var t;
              return {
                id: e.id,
                name: e.name,
                href: productHref(e.slug),
                image: e.image || "/img/product/1.webp",
                priceValue: Number(e.price) || 0,
                price: formatPrice(e.price),
                discountValue: Number(e.discount_percent) || 0,
                discount: `${e.discount_percent || 0}% off`,
                category: e.category?.name,
                tags: e.tags || [],
              };
            })
          : error
            ? v.map((e) => ({
                ...e,
                href: "/products-inner",
                image: "/img/product/1.webp",
                priceValue: parseFloat(e.price.slice(1)),
                discountValue: parseInt(e.discount),
                tags: [],
              }))
            : [],
      [_, error],
    ),
    F = [...new Set(T.map((e) => e.category).filter(Boolean))],
    D = [...new Set(T.flatMap((e) => e.tags))].slice(0, 12),
    M = T.filter(
      (e) =>
        (!I || e.category === I) && (!n || e.tags.includes(n)) && w(e.priceValue, b[N]) && w(e.discountValue, j[P]),
    );
  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Marketplace"
        title="All"
        highlight="Products"
        subtitle="Shop from verified local sellers and get quotes in minutes."
        crumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "All Category",
          },
        ]}
        waveFill="#F3F8FE"
      />
      <div className="container-x grid gap-6 pb-16 lg:grid-cols-[280px_1fr]">
        <div>
          <button
            type="button"
            onClick={() => k((e) => !e)}
            aria-expanded={$}
            className="btn-dark mb-4 w-full lg:hidden"
          >
            <FaSliders /> {$ ? "Hide filters" : "Show filters"}
          </button>
          <aside className={`${$ ? "block" : "hidden"} panel space-y-7 p-5 lg:sticky lg:top-24 lg:block`}>
            <div>
              <h4 className="mb-3 text-sm font-bold text-night-900">Categories</h4>
              <ul className="space-y-1">
                {F.length > 0 && (
                  <>
                    {F.map((e) => (
                      <li key={e}>
                        <button
                          type="button"
                          onClick={() => E(I === e ? null : e)}
                          aria-pressed={I === e}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition hover:bg-mist ${I === e ? "bg-brand-50 text-brand-700" : "text-slate-600"}`}
                        >
                          {e}
                        </button>
                      </li>
                    ))}
                  </>
                )}
                {!F.length &&
                  p.map((n) => {
                    let s = e === n.name;
                    return (
                      <li key={n.name}>
                        <button
                          type="button"
                          onClick={() => t(s ? null : n.name)}
                          aria-expanded={s}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-mist"
                        >
                          {n.name}
                          <IoIosArrowDown className={`transition-transform ${s ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {s && (
                            <motion.ul
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              className="overflow-hidden pl-4"
                            >
                              {n.subcategories.map((e) => (
                                <li key={e} className="py-1.5 text-sm text-slate-500 hover:text-brand-600">
                                  {e}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <Cy title="Sub category" options={D.length ? D : x} value={n} onChange={r} />
            <Cy title="Price" options={f} value={N} onChange={S} />
            <Cy title="Discounts" options={g} value={P} onChange={C} />
          </aside>
        </div>
        {_ || error ? (
          0 === M.length ? (
            <div className="panel self-start p-10 text-center">
              <h3 className="text-lg font-bold text-night-900">No products match these filters</h3>
              <p className="mt-1 text-sm text-slate-500">Try clearing a filter to see more.</p>
            </div>
          ) : (
            <Stagger
              key={`${I}${n}${N}${P}`}
              gap={0.04}
              className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4"
            >
              {M.map((e) => (
                <StaggerItem key={e.id}>
                  <article className="group panel flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <Link href={e.href} className="relative block overflow-hidden bg-mist">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={e.image}
                        alt={e.name}
                        className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      {"0% off" !== e.discount && (
                        <span className="chip absolute left-3 top-3 bg-pin-500 text-night-900">{e.discount}</span>
                      )}
                    </Link>
                    <div className="flex flex-1 flex-col p-3 sm:p-4">
                      <Link
                        href={e.href}
                        className="font-semibold capitalize text-night-900 transition hover:text-brand-600"
                      >
                        {e.name}
                      </Link>
                      <p className="mt-1 font-display text-lg font-extrabold text-night-900">{e.price}</p>
                      <Link href={e.href} className="btn-ghost btn-sm mt-auto self-start">
                        Get quote
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          )
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4" aria-busy="true">
            {[...Array(8)].map((e, t) => (
              <div key={t} className="panel aspect-[3/4] animate-pulse bg-white" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Product;
