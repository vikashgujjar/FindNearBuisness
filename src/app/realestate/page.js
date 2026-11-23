import React from "react";
import CategoryExtras, { CategoryPromo } from "@/app/Component/category/CategoryBlocks";
import RealState from "../Component/RealState";
import { categoryMetadata } from "@/app/lib/seo";
import PinLocation from "../Component/PinLocation";

export const generateMetadata = () => categoryMetadata("", "real-estate", "Real Estate");

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
