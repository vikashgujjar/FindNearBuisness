"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Product() {
  const categories = [
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const subcategories = [
    { id: "KRISHNA", name: "krishna", label: "KRISHNA" },
    { id: "Electric toys", name: "eletoys", label: "Electric toys" },
    { id: "Soft toys", name: "softtoy", label: "Soft toys" },
    { id: "Diet food", name: "dietfood", label: "Diet food" },
    { id: "Health products", name: "healthproduct", label: "Health products" },
  ];

  const price = [
    {
      id: "price_check5",
      name: "price_check5",
      value: "$5000 - $10000",
      label: "Above $1000",
    },
    {
      id: "price_check4",
      name: "price_check4",
      value: "$500 - $1000",
      label: "$501 - $1000",
    },
    {
      id: "price_check3",
      name: "price_check3",
      value: "$251 - $500",
      label: "$251 - $500",
    },
    {
      id: "price_check2",
      name: "price_check2",
      value: "$101 - $250",
      label: "$101 - $250",
    },
    {
      id: "price_check1",
      name: "price_check1",
      value: "$0 - $100",
      label: "Below $100",
    },
  ];

  const discount = [
    {
      id: "discount_check5",
      name: "discount_check5",
      value: "50 - 70",
      label: "Above 70%",
    },
    {
      id: "discount_check4",
      name: "discount_check4",
      value: "40 - 50",
      label: "51% - 70%",
    },
    {
      id: "discount_check3",
      name: "discount_check3",
      value: "30 - 40",
      label: "26% - 50%",
    },
    {
      id: "discount_check2",
      name: "discount_check2",
      value: "20 - 30",
      label: "11% - 25%",
    },
    {
      id: "discount_check1",
      name: "discount_check1",
      value: "00 - 20",
      label: "Below 10%",
    },
  ];

  const productList = [
    {
      id: 1,
      image: "/img/product/1.webp",
      name: "Clothing1 ",
      price: "$1000",
      discount: "0% off",

      categorie: "cloth",
      subCate: "krishna",
    },
    {
      id: 2,
      image: "/img/product/1.webp",
      name: "Shoes",
      price: "$1000",
      discount: "0% off",
      categorie: "shoes",
      subCate: "eltoy",
    },
    {
      id: 3,
      image: "/img/product/1.webp",
      name: "Audi q3",
      price: "$1000",
      discount: "0% off",
      categorie: "foot",
      subCate: "softtoy",
    },
    {
      id: 4,
      image: "/img/product/1.webp",
      name: "Audi q3",
      price: "$1000",
      discount: "0% off",
      categorie: "jewel",
      subCate: "softtoy",
    },
    {
      id: 5,
      image: "/img/product/1.webp",
      name: "baby q3",
      price: "$1000",
      discount: "0% off",
      categorie: "baby",
      subCate: "krishna",
    },
    {
      id: 6,
      image: "/img/product/1.webp",
      name: "fruit q3",
      price: "$1000",
      discount: "10% off",
      categorie: "fruit",
      subCate: "krishna",
    },
    {
      id: 7,
      image: "/img/product/1.webp",
      name: "mens q3",
      price: "$1000",
      discount: "20% off",
      categorie: "mens",
      subCate: "softtoy",
    },
    {
      id: 8,
      image: "/img/product/1.webp",
      name: "health q3",
      price: "$500",
      discount: "10% off",
      categorie: "health",
      subCate: "krishna",
    },
    {
      id: 9,
      image: "/img/product/1.webp",
      name: "sports q3",
      price: "$500",
      discount: "20% off",
      categorie: "sports",
      subCate: "krishna",
    },
    {
      id: 10,
      image: "/img/product/1.webp",
      name: "education q3",
      price: "$250",
      discount: "40% off",
      categorie: "education",
      subCate: "krishna",
    },
    {
      id: 11,
      image: "/img/product/1.webp",
      name: "electricals q3",
      price: "$100",
      discount: "30% off",
      categorie: "electricals",
      subCate: "krishna",
    },
    {
      id: 12,
      image: "/img/product/1.webp",
      name: "auto q3",
      price: "$100",
      discount: "40% off",
      categorie: "auto",
      subCate: "krishna",
    },
    {
      id: 13,
      image: "/img/product/1.webp",
      name: "Audi q3",
      price: "$150",
      categorie: "cloth",
      discount: "30% off",
      discountRange: "30 - 40",
      subCate: "krishna",
    },
    {
      id: 14,
      image: "/img/product/1.webp",
      name: "Audi q3",
      price: "$100",
      discount: "30% off",
      discountRange: "20 - 30",
      categorie: "cloth",
      subCate: "krishna",
    },
    {
      id: 15,
      image: "/img/product/1.webp",
      name: "Audi q3",
      price: "$100",

      discount: "10% off",
      discountRange: "0 - 20",
      categorie: "cloth",
      subCate: "krishna",
    },
    {
      id: 16,
      image: "/img/product/1.webp",
      name: "Audi q3",
      price: "$100",
      discount: "10% off",
      discountRange: "0 - 10",
      categorie: "cloth",
      subCate: "krishna",
    },
  ];
  return (
    <div>
      <div className="w-full h-auto bg-[url('/img/realestate/bg.webp')] bg-center bg-cover text-white py-20 xl:py-28 px-5 lg:px-10 xl:px-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#866a05d6] to-[#00000038] opacity-90"></div>
        <div className="relative">
          <h2 className="font-medium text-2xl lg:text-3xl mb-1 heading">
            All Categories
          </h2>
          <ul className="flex items-center gap-1 text-xs ">
            <li>Home</li>
            <li>
              <MdKeyboardArrowRight />
            </li>
            <li>All Category</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-8 xl:px-32 mt-4 lg:-mt-10 relative">
        <div className="grid shadow-2xl  rounded  bg-gray-100  grid-cols-1 lg:grid-cols-3 lg:gap-x-10 gap-y-10 lg:gap-y-14">
          <div className="lg:col-span-1">
            <div>
              <div className=" p-4 border rounded-lg shadow-lg bg-white">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category.name
                              ? null
                              : category.name
                          )
                        }
                        className="w-full text-left font-medium p-2 bg-gray-100 rounded-lg flex justify-between items-center"
                      >
                        {category.name}
                        <span>
                          {selectedCategory === category.name ? "▲" : "▼"}
                        </span>
                      </button>
                      {selectedCategory === category.name && (
                        <ul className="ml-4 mt-2 space-y-1">
                          {category.subcategories.map((sub, subIndex) => (
                            <li
                              key={subIndex}
                              className="p-2 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" p-4 border rounded-lg shadow-lg bg-white">
                <h2 className="text-lg font-semibold mb-4">Sub category</h2>
                <ul className="space-y-2">
                  {subcategories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category.name
                              ? null
                              : category.name
                          )
                        }
                        className="w-full text-left font-medium p-2 bg-gray-100 rounded-lg flex justify-between items-center"
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" p-4 border rounded-lg shadow-lg bg-white">
                <h2 className="text-lg font-semibold mb-4">Price</h2>
                <ul className="space-y-2">
                  {price.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category.name
                              ? null
                              : category.name
                          )
                        }
                        className="w-full text-left font-medium p-2 bg-gray-100 rounded-lg flex justify-between items-center"
                      >
                        {category.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" p-4 border rounded-lg shadow-lg bg-white">
                <h2 className="text-lg font-semibold mb-4">Discounts</h2>
                <ul className="space-y-2">
                  {discount.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category.name
                              ? null
                              : category.name
                          )
                        }
                        className="w-full text-left font-medium p-2 bg-gray-100 rounded-lg flex justify-between items-center"
                      >
                        {category.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {productList.map((product, index) => (
                <li key={product.id} className="p-4 border shadow-lg">
                  <div className="">
                    <Link href="/products-inner" className="">
                      <div className="">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="">
                        <h4>{product.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="">
                            <b>{product.price}</b>
                            {product.discount}
                          </span>
                          <div className="links">
                            <Link
                              href="/products"
                              className="bg-yellow-400 text-black rounded-3xl px-2 text-xs font-bold py-1"
                            >
                              Get quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
