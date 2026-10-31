"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FormShell } from "../ui/blocks";

function Group({ title, children }) {
  return (
    <fieldset className="space-y-4 border-t border-slate-100 pt-6 first:border-0 first:pt-0">
      <legend className="mb-1 text-sm font-bold text-night-900">{title}</legend>
      {children}
    </fieldset>
  );
}

const fileCls =
  "field file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand-600";

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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const input = (name, placeholder, type = "text", extra = {}) => (
    <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} aria-label={placeholder} className="field" {...extra} />
  );

  return (
    <FormShell
      badge="Company profile"
      title="Edit Company Profile"
      width="max-w-3xl"
      footer={<Link href="/dashboard" className="hover:text-white">Go to User Dashboard →</Link>}
    >
      <form className="space-y-6">
        <Group title="Company details">
          {input("company_name", "Company Name", "text", { required: true })}
          {input("company_address", "Address", "text", { required: true })}
          <div className="grid gap-4 sm:grid-cols-2">
            {input("company_mobile", "Phone", "text", { required: true })}
            {input("company_email_id", "Email", "email", { required: true })}
          </div>
          {input("company_website", "Website")}
          {input("company_tax", "Tax No./GST No.")}
        </Group>

        <Group title="Social media">
          <div className="grid gap-4 sm:grid-cols-2">
            {input("company_facebook", "Facebook")}
            {input("company_twitter", "Twitter")}
            {input("company_linkedin", "LinkedIn")}
            {input("company_instagram", "Instagram")}
            {input("company_youtube", "YouTube")}
            {input("company_whatsapp", "WhatsApp")}
          </div>
        </Group>

        <Group title="About company">
          <textarea name="company_description" value={formData.company_description} onChange={handleChange} placeholder="Product Details" className="field h-28" />
        </Group>

        <Group title="Upload logos">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="field-label">Header Logo (200x35)</label>
              <input type="file" name="company_header_photo" className={fileCls} accept="image/png, image/jpeg" />
            </div>
            <div>
              <label className="field-label">Banner Logo (200x35)</label>
              <input type="file" name="company_banner_photo" className={fileCls} accept="image/png, image/jpeg" />
            </div>
          </div>
        </Group>

        <Group title="Showcase">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="field-label">Products</label>
              <select name="company_products" multiple className="field h-28">
                <option value="36">Audi Q3</option>
                <option value="34">WHIRLPOOL FRIDGE</option>
                <option value="33">DELL</option>
              </select>
            </div>
            <div>
              <label className="field-label">Events</label>
              <select name="company_events" multiple className="field h-28">
                <option value="48">Champions of India Run-Ride-Walk</option>
                <option value="45">India vs England</option>
                <option value="43">IPL 2021</option>
              </select>
            </div>
            <div>
              <label className="field-label">Blog Posts</label>
              <select name="company_blogs" multiple className="field h-28">
                <option value="52">Inception</option>
                <option value="49">Avengers Infinity War</option>
                <option value="45">Avengers End Game</option>
              </select>
            </div>
          </div>
        </Group>

        <Group title="SEO settings">
          <textarea name="company_seo_description" value={formData.company_seo_description} onChange={handleChange} placeholder="Meta Description" className="field h-24" />
          <textarea name="company_seo_keywords" value={formData.company_seo_keywords} onChange={handleChange} placeholder="Meta Keywords" className="field h-24" />
        </Group>

        <button type="submit" className="btn-primary w-full py-3.5 text-base">Submit</button>
      </form>
    </FormShell>
  );
}
