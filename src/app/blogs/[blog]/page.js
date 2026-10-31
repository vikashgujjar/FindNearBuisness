import React from "react";
import BlogInner from "../../Component/BlogInner";
import BusinessDirectory from "../../Component/BuinessDirectory";

// Static export needs every blog slug listed. Add real post slugs here when blog data exists.
export function generateStaticParams() {
  return [{ blog: "source-and-url-tracking" }];
}

export default async function Blog1({ params }) {
  await params;
  return (
    <>
      <BlogInner />
      <BusinessDirectory />
    </>
  );
}
