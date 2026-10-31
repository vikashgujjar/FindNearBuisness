"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaSliders } from "react-icons/fa6";
import { PageHero } from "../ui/blocks";
import { Stagger, StaggerItem } from "../ui/motion";

const categories = [
  { name: "Electronics", subcategories: ["Laptops", "Phones", "Accessories"] },
  { name: "Clothing", subcategories: ["Men", "Women", "Kids"] },
  { name: "Home & Kitchen", subcategories: ["Furniture", "Appliances", "Decor"] },
];

const subcategories = ["KRISHNA", "Electric toys", "Soft toys", "Diet food", "Health products"];
const price = ["Above $1000", "$501 - $1000", "$251 - $500", "$101 - $250", "Below $100"];
const discount = ["Above 70%", "51% - 70%", "26% - 50%", "11% - 25%", "Below 10%"];

const productList = [
  { id: 1, name: "Clothing1", price: "$1000", discount: "0% off" },
  { id: 2, name: "Shoes", price: "$1000", discount: "0% off" },
  { id: 3, name: "Audi q3", price: "$1000", discount: "0% off" },
  { id: 4, name: "Audi q3", price: "$1000", discount: "0% off" },
  { id: 5, name: "baby q3", price: "$1000", discount: "0% off" },
  { id: 6, name: "fruit q3", price: "$1000", discount: "10% off" },
  { id: 7, name: "mens q3", price: "$1000", discount: "20% off" },
  { id: 8, name: "health q3", price: "$500", discount: "10% off" },
  { id: 9, name: "sports q3", price: "$500", discount: "20% off" },
  { id: 10, name: "education q3", price: "$250", discount: "40% off" },
  { id: 11, name: "electricals q3", price: "$100", discount: "30% off" },
  { id: 12, name: "auto q3", price: "$100", discount: "40% off" },
  { id: 13, name: "Audi q3", price: "$150", discount: "30% off" },
  { id: 14, name: "Audi q3", price: "$100", discount: "30% off" },
  { id: 15, name: "Audi q3", price: "$100", discount: "10% off" },
  { id: 16, name: "Audi q3", price: "$100", discount: "10% off" },
];

function ChipGroup({ title, options, value, onChange }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-bold text-night-900">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(value === o ? null : o)}
            aria-pressed={value === o}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              value === o ? "bg-brand-gradient text-white" : "bg-mist text-slate-600 hover:text-brand-600"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Product() {
  const [openCategory, setOpenCategory] = useState(null);
  const [sub, setSub] = useState(null);
  const [priceSel, setPriceSel] = useState(null);
  const [discountSel, setDiscountSel] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Marketplace"
        title="All"
        highlight="Products"
        subtitle="Shop from verified local sellers and get quotes in minutes."
        crumbs={[{ label: "Home", href: "/" }, { label: "All Category" }]}
        waveFill="#F4F5FB"
      />

      <div className="container-x grid gap-6 pb-16 lg:grid-cols-[280px_1fr]">
        <div>
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
            className="btn-dark mb-4 w-full lg:hidden"
          >
            <FaSliders /> {filtersOpen ? "Hide filters" : "Show filters"}
          </button>

          <aside className={`${filtersOpen ? "block" : "hidden"} panel space-y-7 p-5 lg:sticky lg:top-24 lg:block`}>
            <div>
              <h4 className="mb-3 text-sm font-bold text-night-900">Categories</h4>
              <ul className="space-y-1">
                {categories.map((category) => {
                  const open = openCategory === category.name;
                  return (
                    <li key={category.name}>
                      <button
                        type="button"
                        onClick={() => setOpenCategory(open ? null : category.name)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-mist"
                      >
                        {category.name}
                        <IoIosArrowDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {category.subcategories.map((s) => (
                              <li key={s} className="py-1.5 text-sm text-slate-500 hover:text-brand-600">{s}</li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ChipGroup title="Sub category" options={subcategories} value={sub} onChange={setSub} />
            <ChipGroup title="Price" options={price} value={priceSel} onChange={setPriceSel} />
            <ChipGroup title="Discounts" options={discount} value={discountSel} onChange={setDiscountSel} />
          </aside>
        </div>

        <Stagger gap={0.04} className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {productList.map((product) => (
            <StaggerItem key={product.id}>
              <article className="group panel flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <Link href="/products-inner" className="relative block overflow-hidden bg-mist">
                  <img src="/img/product/1.webp" alt={product.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                  {product.discount !== "0% off" && (
                    <span className="chip absolute left-3 top-3 bg-magenta-500 text-white">{product.discount}</span>
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <Link href="/products-inner" className="font-semibold capitalize text-night-900 transition hover:text-brand-600">
                    {product.name}
                  </Link>
                  <p className="mt-1 font-display text-lg font-extrabold text-night-900">{product.price}</p>
                  <Link href="/products-inner" className="btn-ghost btn-sm mt-auto self-start">Get quote</Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
