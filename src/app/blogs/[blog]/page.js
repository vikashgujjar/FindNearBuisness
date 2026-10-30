import React from "react";
import BlogInner from "../../Component/BlogInner";
import BusinessDirectory from "../../Component/BuinessDirectory";

export default async function Blog1({ params }) {
  await params;
  return (
    <>
      <BlogInner />
      <BusinessDirectory />
    </>
  );
}
