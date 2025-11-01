import React from "react";

export default async function Blog1({ params }) {
  console.log(await params);
  const { blog } = await params;
  return <div>blog {blog}</div>;
}
