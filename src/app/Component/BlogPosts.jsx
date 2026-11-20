"use client";

import { FaEye } from "react-icons/fa6";
import { ThumbTitle, DashCrud } from "@/app/Component/DashCrud";
import { formatDate, blogHref } from "@/app/lib/api";
let i = [
  {
    name: "title",
    label: "Blog title",
    required: true,
    full: true,
  },
  {
    name: "category_id",
    label: "Category",
    type: "select",
    options: (e) =>
      (e.categories || []).map((e) => ({
        value: e.id,
        label: e.name,
      })),
  },
  {
    name: "image",
    label: "Image",
    type: "image",
  },
  {
    name: "excerpt",
    label: "Short summary",
    type: "textarea",
    rows: 2,
  },
  {
    name: "body",
    label: "Blog post",
    type: "textarea",
    required: true,
    rows: 10,
    hint: "Leave a blank line between paragraphs.",
  },
  {
    name: "enquiry_enabled",
    label: "Enquiries",
    type: "toggle",
    text: "Show an enquiry form on this post",
    default: true,
    full: true,
  },
];
let o = [
  {
    label: "Blog Post",
    render: (e) => (
      <ThumbTitle
        src={e.image}
        title={e.title}
        sub={[e.category_name, formatDate(e.created_on)].filter(Boolean).join(" \xb7 ")}
      />
    ),
  },
  {
    label: "Views",
    render: (e) => {
      var t;
      return (
        <span className="flex items-center gap-1.5">
          <FaEye className="text-slate-300" /> {e.views ?? 0}
        </span>
      );
    },
  },
];
function BlogPosts(props) {
  let { startNew = false } = props;
  return (
    <DashCrud
      type="blogs"
      badge="Blog posts"
      title="Your Blog Posts"
      noun="blog post"
      fields={i}
      columns={o}
      startNew={startNew}
      minWidth="min-w-[600px]"
      nameOf={(e) => e.title}
      previewUrl={(e) => blogHref(e.slug)}
      note="New blog posts go live after our team approves them."
    />
  );
}
export default BlogPosts;
