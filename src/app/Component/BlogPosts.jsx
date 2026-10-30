"use client";
import React from "react";
import Link from "next/link";
import { FaEye, FaPen, FaTrash, FaArrowUpRightFromSquare, FaPlus } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard, TableWrap } from "../ui/page";
import { cityHref, useUserLocation } from "../context/LocationContext";
import { iconBtn } from "./AllListing";

const blogPosts = [
  { id: 1, name: "INCEPTION", date: "12, Mar 2021", views: 15 },
  { id: 2, name: "AVENGERS INFINITY WAR", date: "12, Mar 2021", views: 8 },
  { id: 3, name: "AVENGERS END GAME", date: "11, Mar 2021", views: 11 },
  { id: 4, name: "Captain America: Civil War", date: "11, Mar 2021", views: 7 },
  { id: 5, name: "Samsung M31 Review", date: "22, Feb 2021", views: 10 },
  { id: 6, name: "Wizard of Oz", date: "21, Feb 2021", views: 8 },
  { id: 7, name: "Titanic", date: "21, Feb 2021", views: 7 },
  { id: 8, name: "Digital Marketing", date: "26, Mar 2020", views: 8 },
];

function BlogPosts() {
  const { location } = useUserLocation();

  return (
    <CommonDashLayout>
      <DashCard badge="Blog Posts" title="Blog Details" action={<Link href="/blog-form" className="btn-primary btn-sm"><FaPlus /> Add new post</Link>}>
        <TableWrap>
          <table className="data-table">
            <thead>
              <tr><th>No</th><th>Post Name</th><th>Views</th><th className="text-right">Actions</th></tr>
            </thead>
            <tbody>
              {blogPosts.map((post, index) => (
                <tr key={post.id}>
                  <td className="font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</td>
                  <td>
                    <p className="font-semibold text-night-900">{post.name}</p>
                    <p className="text-xs text-slate-400">{post.date}</p>
                  </td>
                  <td><span className="flex items-center gap-1.5"><FaEye className="text-slate-300" /> {post.views}</span></td>
                  <td>
                    <div className="flex justify-end gap-1.5">
                      <Link href="/newlisting" className={iconBtn} title="Edit"><FaPen className="text-xs" /></Link>
                      <Link href={cityHref(location, "listing")} className={iconBtn} title="Delete"><FaTrash className="text-xs" /></Link>
                      <Link href="/all" className={iconBtn} title="Preview"><FaArrowUpRightFromSquare className="text-xs" /></Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
      </DashCard>
    </CommonDashLayout>
  );
}

export default BlogPosts;
