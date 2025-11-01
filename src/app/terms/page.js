import React from "react";
import BusinessDirectory from "../Component/BuinessDirectory";
import PinLocation from "../Component/PinLocation";

export default function page() {
  return (
    <>
      <PinLocation />
      <div className="px-5 md:px-8 xl:px-32 py-5 md:py-16 space-y-5">
        <h6 className="text-2xl md:text-3xl xl:text-4xl font-bold ">
          Terms of Use
        </h6>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <BusinessDirectory />
    </>
  );
}
