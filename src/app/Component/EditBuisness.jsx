"use client";

import { useState } from "react";
import Link from "next/link";
import React from 'react'

export default function EditBuisness() {

    const [formData, setFormData] = useState({
        company_name: "Rn53 Themes net",
        company_address: "Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A",
        company_mobile: "8765768675",
        company_email_id: "info@futureittouch.com",
        company_website: "www.rn53themes.net",
        company_tax: "TX6543 HYG76",
        company_facebook: "https://www.facebook.com/53themes",
        company_twitter: "https://twitter.com/53themes",
        company_linkedin: "",
        company_instagram: "",
        company_youtube: "https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg",
        company_whatsapp: "98769876987",
        company_description: "Official website of Rn53 Themes...",
        company_seo_description: "Official website of Rn53 Themes, Affiliated to Themeforest...",
        company_seo_keywords: "rn53 themes, html templates bootstrap...",
        company_products: [],
        company_events: [],
        company_blogs: [],
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
  return (
    <>
   <div className="bg-[url('/img/sign/sign1.webp')] relative min-h-screen py-10">

    <div className="absolute inset-0 bg-[rgba(0,0,0,0.71)]"/>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="w-full lg:max-w-[45%] md:max-w-[70%] sm:max-w-[90%] mx-auto bg-white rounded-md shadow-lg">
            <div className="lg:w-full mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

            <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
           Company profile
            </div>

      <div>
      <form className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-lg lg:text-xl mb-4 text-center font-bold">Edit Company Profile</h2>

      {/* Company Details */}
      <div className="space-y-4">
        <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Company Name" className="w-full border p-2 rounded-md" required />
        <input type="text" name="company_address" value={formData.company_address} onChange={handleChange} placeholder="Address" className="w-full border p-2 rounded-md" required />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="company_mobile" value={formData.company_mobile} onChange={handleChange} placeholder="Phone" className="w-full border p-2 rounded-md" required />
          <input type="email" name="company_email_id" value={formData.company_email_id} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded-md" required />
        </div>
        <input type="text" name="company_website" value={formData.company_website} onChange={handleChange} placeholder="Website" className="w-full border p-2 rounded-md" />
      </div>

      {/* Tax Details */}
      <h3 className="mt-6 font-semibold">Tax Details:</h3>
      <input type="text" name="company_tax" value={formData.company_tax} onChange={handleChange} placeholder="Tax No./GST No." className="w-full border p-2 rounded-md" />

      {/* Social Media */}
      <h3 className="mt-6 font-semibold">Social Media:</h3>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="company_facebook" value={formData.company_facebook} onChange={handleChange} placeholder="Facebook" className="w-full border p-2 rounded-md" />
        <input type="text" name="company_twitter" value={formData.company_twitter} onChange={handleChange} placeholder="Twitter" className="w-full border p-2 rounded-md" />
        <input type="text" name="company_linkedin" value={formData.company_linkedin} onChange={handleChange} placeholder="LinkedIn" className="w-full border p-2 rounded-md" />
        <input type="text" name="company_instagram" value={formData.company_instagram} onChange={handleChange} placeholder="Instagram" className="w-full border p-2 rounded-md" />
        <input type="text" name="company_youtube" value={formData.company_youtube} onChange={handleChange} placeholder="YouTube" className="w-full border p-2 rounded-md" />
        <input type="text" name="company_whatsapp" value={formData.company_whatsapp} onChange={handleChange} placeholder="WhatsApp" className="w-full border p-2 rounded-md" />
      </div>

      {/* About Company */}
      <h3 className="mt-6 font-semibold">About Company:</h3>
      <textarea name="company_description" value={formData.company_description} onChange={handleChange} placeholder="Product Details" className="w-full border p-2 rounded-md h-24" />

      {/* File Uploads */}
      <h3 className="mt-6 font-semibold">Upload Logos:</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Header Logo (200x35):</label>
          <input type="file" name="company_header_photo" className="w-full border p-2 rounded-md" accept="image/png, image/jpeg" />
        </div>
        <div>
          <label className="block text-sm">Banner Logo (200x35):</label>
          <input type="file" name="company_banner_photo" className="w-full border p-2 rounded-md" accept="image/png, image/jpeg" />
        </div>
      </div>

      {/* Select Inputs */}
      <h3 className="mt-6 font-semibold">Choose Products:</h3>
      <select name="company_products" multiple className="w-full border p-2 rounded-md">
        <option value="36">Audi Q3</option>
        <option value="34">WHIRLPOOL FRIDGE</option>
        <option value="33">DELL</option>
      </select>

      <h3 className="mt-6 font-semibold">Choose Events:</h3>
      <select name="company_events" multiple className="w-full border p-2 rounded-md">
        <option value="48">Champions of India Run-Ride-Walk</option>
        <option value="45">India vs England</option>
        <option value="43">IPL 2021</option>
      </select>

      <h3 className="mt-6 font-semibold">Choose Blog Posts:</h3>
      <select name="company_blogs" multiple className="w-full border p-2 rounded-md">
        <option value="52">Inception</option>
        <option value="49">Avengers Infinity War</option>
        <option value="45">Avengers End Game</option>
      </select>

      {/* SEO Settings */}
      <h3 className="mt-6 font-semibold">SEO Settings:</h3>
      <textarea name="company_seo_description" value={formData.company_seo_description} onChange={handleChange} placeholder="Meta Description" className="w-full border p-2 rounded-md h-24" />
      <textarea name="company_seo_keywords" value={formData.company_seo_keywords} onChange={handleChange} placeholder="Meta Keywords" className="w-full border p-2 rounded-md h-24" />

      {/* Submit Button */}
      <button type="submit" className="mt-6 w-full bg-[#51C0FF] rounded-full text-white p-2 d hover:bg-[#43b0f0]">
        Submit
      </button>

      {/* Skip Link */}
      <Link href="/dashboard" className="block text-center mt-4  uppercase">
        Go to User Dashboard &gt;&gt;
      </Link>
    </form>
      </div>
          </div>
        </div>
      </div>

    
</>
  )
}
