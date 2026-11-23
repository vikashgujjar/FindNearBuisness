import React from "react";
import CategoryExtras, { CategoryPromo } from "@/app/Component/category/CategoryBlocks";
import RealState from "@/app/Component/RealState";
import { categoryMetadata } from "@/app/lib/seo";
import PinLocation from "@/app/Component/PinLocation";

export async function generateMetadata({ params }) {
  return categoryMetadata((await params).cityname, "real-estate", "Real Estate");
}

export default function page() {
  return (
    <>
      <PinLocation />
      <RealState />
      <CategoryPromo />
      <CategoryExtras name="Real Estate" />
    </>
  );
}
