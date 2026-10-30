"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FormShell } from "../ui/page";

export default function AddBlogPost() {
  const [fileName, setFileName] = useState("");

  return (
    <FormShell
      badge="Add new blog post"
      title="Create Blog Post"
      width="max-w-2xl"
      footer={<Link href="/dashboard" className="hover:text-white">Go to User Dashboard →</Link>}
    >
      <form encType="multipart/form-data" className="space-y-5">
        <div>
          <label htmlFor="blog_name" className="field-label">Post Name*</label>
          <input id="blog_name" type="text" name="blog_name" placeholder="Post Name*" required className="field" />
        </div>
        <div>
          <label htmlFor="category_id" className="field-label">Category</label>
          <select id="category_id" name="category_id" required className="field" defaultValue="">
            <option value="">Select Category</option>
            <option value="23">Health</option>
            <option value="22">Mens</option>
            <option value="21">Fruits</option>
            <option value="20">Baby care</option>
            <option value="19">Toys</option>
            <option value="18">Jewellery</option>
            <option value="17">Shoes</option>
          </select>
        </div>
        <div>
          <label htmlFor="blog_description" className="field-label">Post Details</label>
          <textarea id="blog_description" name="blog_description" placeholder="Post Details" required className="field h-32 resize-none" />
        </div>
        <div>
          <span className="field-label">Choose Banner Image</span>
          <label className="relative flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-slate-200 bg-mist px-4 py-8 text-center transition hover:border-brand-400 hover:bg-brand-50">
            <FaCloudArrowUp className="text-3xl text-brand-500" />
            <span className="text-sm font-semibold text-night-900">{fileName || "Upload a file"}</span>
            <span className="text-xs text-slate-400">JPG or PNG</span>
            <input
              type="file"
              name="blog_image"
              accept="image/*,.jpg,.jpeg,.png"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </label>
        </div>
        <label htmlFor="evefmenab" className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
          <input type="checkbox" name="isenquiry" id="evefmenab" defaultChecked className="h-4 w-4 rounded accent-brand-500" />
          Enquiry or Registration form enable
        </label>
        <button type="submit" className="btn-primary w-full py-3.5 text-base">Submit</button>
      </form>
    </FormShell>
  );
}
