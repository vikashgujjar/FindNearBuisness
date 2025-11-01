"use client"
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import { usePathname } from "next/navigation";
import CommonDashLayout from "./CommonDashLayout";


function BlogPosts() {
  const blogPosts = [
    { id: 1, name: "INCEPTION", date: "12, Mar 2021", views: 15 },
    { id: 2, name: "AVENGERS INFINITY WAR", date: "12, Mar 2021", views: 8 },
    { id: 3, name: "AVENGERS END GAME", date: "11, Mar 2021", views: 11 },
    {
      id: 4,
      name: "Captain America: Civil War",
      date: "11, Mar 2021",
      views: 7,
    },
    { id: 5, name: "Samsung M31 Review", date: "22, Feb 2021", views: 10 },
    { id: 6, name: "Wizard of Oz", date: "21, Feb 2021", views: 8 },
    { id: 7, name: "Titanic", date: "21, Feb 2021", views: 7 },
    { id: 8, name: "Digital Marketing", date: "26, Mar 2020", views: 8 },
  ];

    const pathName = usePathname();
  

  return (
    
    <CommonDashLayout>
           <div className="container mx-auto ">
    <div className="bg-white">
        <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

      {/* Title Section */}
      <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
       Blog Posts
      </div>
      <div className="p-4  overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold">Blog Details</h2>
          <a
            href="/blog-form"
            className="bg-gradient-to-t from-[#697480] to-[#9ba3ab] text-white px-2 py-1 text-xs font-semibold rounded hover:bg-blue-600"
          >
            Add new post
          </a>
        </div>
        <div className="overflow-x-auto w-[300px] md:w-full">
          <table className="min-w-full bg-white border-b border-gray-200 rounded-lg">
            <thead className="text-sm">
              <tr className="text-left border-b border-gray-200">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Post Name</th>
                <th className="px-4 py-2">Views</th>
                <th className="px-4 py-2">Edit</th>
                <th className="px-4 py-2">Delete</th>
                <th className="px-4 py-2">Preview</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 text-nowrap">
                    {post.name} <br />
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </td>
                  <td className="px-4">
                    <span className="bg-[#f7ed94] px-2 py-1 text-xs font-semibold">
                      {post.views}
                    </span>
                  </td>
                  <td className="p-3 border-b">
                    <a
                      href="/newlisting"
                      className="text-[11px] p-1 border border-gray-300"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="p-3 border-b">
                    <a
                      href="/RajpuraTahsil/listing"
                      className="text-[11px] p-1 border border-gray-300"
                    >
                      Delete
                    </a>
                  </td>
                  <td className="p-3 border-b">
                    <a
                      href="/all"
                      className="text-[11px] p-1 border border-gray-300"
                    >
                      Preview
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    </CommonDashLayout>


  
  );
}

export default BlogPosts;
